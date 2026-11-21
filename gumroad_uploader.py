import os
import requests
import json
from automation_config import GUMROAD_ACCESS_TOKEN

HEADERS = {"Authorization": f"Bearer {GUMROAD_ACCESS_TOKEN}"}

def upload_file_to_gumroad(file_path):
    """Uploads a local file to Gumroad via S3 presigned multipart upload.
    Returns the canonical file_url."""
    filename = os.path.basename(file_path)
    file_size = os.path.getsize(file_path)
    
    print(f"[*] Presigning upload for {filename} ({file_size} bytes)...")
    res = requests.post(
        "https://api.gumroad.com/v2/files/presign",
        headers=HEADERS,
        json={"filename": filename, "file_size": file_size}
    )
    if res.status_code != 200:
        raise Exception(f"Failed to presign upload: {res.text}")
        
    data = res.json()
    upload_id = data["upload_id"]
    key = data["key"]
    file_url = data["file_url"]
    parts = data["parts"]
    
    print(f"[*] Uploading {len(parts)} part(s) directly to S3...")
    with open(file_path, "rb") as f:
        file_bytes = f.read()
        
    completed_parts = []
    # If single part, upload whole file; if multipart, slice bytes
    if len(parts) == 1:
        p = parts[0]
        put_res = requests.put(p["presigned_url"], data=file_bytes)
        if put_res.status_code not in (200, 204):
            raise Exception(f"S3 upload failed: {put_res.status_code} {put_res.text}")
        etag = put_res.headers.get("ETag", "").strip('"')
        completed_parts.append({"part_number": p["part_number"], "etag": etag})
    else:
        # 5MB chunking for multipart if ever needed
        chunk_size = 5 * 1024 * 1024
        for i, p in enumerate(parts):
            chunk = file_bytes[i * chunk_size : (i + 1) * chunk_size]
            put_res = requests.put(p["presigned_url"], data=chunk)
            if put_res.status_code not in (200, 204):
                raise Exception(f"S3 part {i+1} failed: {put_res.status_code}")
            etag = put_res.headers.get("ETag", "").strip('"')
            completed_parts.append({"part_number": p["part_number"], "etag": etag})

    print("[*] Completing Gumroad upload...")
    comp_res = requests.post(
        "https://api.gumroad.com/v2/files/complete",
        headers=HEADERS,
        json={"upload_id": upload_id, "key": key, "parts": completed_parts}
    )
    if comp_res.status_code != 200:
        raise Exception(f"Failed to complete upload: {comp_res.text}")
        
    print(f"[+] Successfully uploaded! File URL: {file_url}")
    return file_url

def attach_file_to_product(product_id, file_url, file_name=None):
    """Attaches an uploaded file_url to an existing Gumroad product."""
    print(f"[*] Attaching file to product {product_id}...")
    payload = {
        "files[][url]": file_url
    }
    if file_name:
        payload["files[][name]"] = file_name
        
    res = requests.put(
        f"https://api.gumroad.com/v2/products/{product_id}",
        headers=HEADERS,
        data=payload
    )
    data = res.json()
    if not data.get("success"):
        raise Exception(f"Failed to attach file: {res.text}")
    print(f"[+] Attached file successfully! Product files: {len(data['product'].get('files', []))}")
    return data

def set_product_cover(product_id, image_url):
    """Sets the cover image for a product via public image URL."""
    print(f"[*] Setting cover for product {product_id}...")
    res = requests.post(
        f"https://api.gumroad.com/v2/products/{product_id}/covers",
        headers=HEADERS,
        data={"url": image_url}
    )
    data = res.json()
    if not data.get("success"):
        raise Exception(f"Failed to set cover: {res.text}")
    print(f"[+] Cover set successfully! Covers: {len(data.get('covers', []))}")
    return data

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 2 and sys.argv[1] == "attach":
        # usage: python gumroad_uploader.py attach <product_id> <local_file_path>
        pid = sys.argv[2]
        path = sys.argv[3]
        furl = upload_file_to_gumroad(path)
        attach_file_to_product(pid, furl, os.path.basename(path))
    elif len(sys.argv) > 2 and sys.argv[1] == "upload":
        # usage: python gumroad_uploader.py upload <local_file_path>
        path = sys.argv[2]
        upload_file_to_gumroad(path)
