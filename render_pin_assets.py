import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1080, 1920
font_dir = os.path.join(os.environ.get('WINDIR', 'C:/Windows'), 'Fonts')
font_title = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 50)
font_sub = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 28)
font_pill = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 24)
font_card = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 22)
font_feat = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 21)
font_btn = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 38)
font_foot = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 26)

# 1. Base Image
bg = Image.new('RGB', (W, H), (10, 13, 22))
draw = ImageDraw.Draw(bg)

for y in range(H):
    r = int(12 + (5 - 12) * (y / H))
    g = int(16 + (8 - 16) * (y / H))
    b = int(28 + (15 - 28) * (y / H))
    draw.line([(0, y), (W, y)], fill=(r, g, b))

glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow)
gdraw.ellipse([(-100, 200), (600, 900)], fill=(124, 58, 237, 40))
gdraw.ellipse([(500, 800), (1200, 1500)], fill=(59, 130, 246, 40))
glow = glow.filter(ImageFilter.GaussianBlur(80))
bg.paste(glow, (0, 0), glow)

# Header
pill_w, pill_h = 420, 50
pill_x = (W - pill_w) // 2
pill_y = 65
draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=25, fill=(124, 58, 237))
draw.text((W // 2, pill_y + pill_h // 2), 'COMPLETE INSTAGRAM SUITE', fill=(255, 255, 255), font=font_pill, anchor='mm')

draw.text((W // 2, 160), 'VIRAL INSTAGRAM CAROUSEL', fill=(255, 255, 255), font=font_title, anchor='mm')
draw.text((W // 2, 225), '& STORY TEMPLATE KIT', fill=(168, 85, 247), font=font_title, anchor='mm')

draw.text((W // 2, 305), '10-Slide Framework & Matching Stories for Canva', fill=(148, 163, 184), font=font_sub, anchor='mm')
draw.text((W // 2, 355), 'FREE CANVA COMPATIBLE  •  COMMERCIAL LICENSE INCLUDED', fill=(52, 211, 153), font=font_card, anchor='mm')

# Left Card: Static Story Preview Image
card_w, card_h = 470, 960
card_y = 420
left_x = 50
right_x = 560

story_img_path = 'G:/Web Design/products/social-media-carousel-kit/preview-slide2.png'
if os.path.exists(story_img_path):
    sim = Image.open(story_img_path).convert('RGB')
    sim = sim.resize((card_w, card_h), Image.Resampling.LANCZOS)
    bg.paste(sim, (left_x, card_y))

draw.rounded_rectangle([left_x, card_y, left_x + card_w, card_y + card_h], radius=16, outline=(139, 92, 246), width=4)
draw.rounded_rectangle([left_x + 20, card_y + 20, left_x + 310, card_y + 65], radius=12, fill=(15, 23, 42))
draw.text((left_x + 165, card_y + 42), 'MATCHING STORIES', fill=(248, 250, 252), font=font_card, anchor='mm')

# Right Card Video Background area (behind video)
vid_h = 588
draw.rounded_rectangle([right_x, card_y, right_x + card_w, card_y + vid_h], radius=16, fill=(15, 23, 42))

# Right Card Bottom Box (Features / Highlights)
feat_y = card_y + vid_h + 20
feat_h = card_h - vid_h - 20
draw.rounded_rectangle([right_x, feat_y, right_x + card_w, feat_y + feat_h], radius=16, fill=(15, 23, 42), outline=(30, 41, 59), width=2)

feats = [
    '10 High-Converting Slides',
    'Pre-Written Viral Prompts',
    'Plug & Play in Free Canva',
    'Optimized for IG Algorithm',
    'Full Commercial Rights'
]
draw.text((right_x + card_w // 2, feat_y + 45), 'WHAT IS INCLUDED:', fill=(168, 85, 247), font=font_card, anchor='mm')
for i, f in enumerate(feats):
    fy = feat_y + 95 + i * 48
    draw.ellipse([right_x + 35, fy - 6, right_x + 47, fy + 6], fill=(52, 211, 153))
    draw.text((right_x + 65, fy), f, fill=(226, 232, 240), font=font_feat, anchor='lm')

# Footer CTA Button
btn_w, btn_h = 980, 110
btn_x = (W - btn_w) // 2
btn_y = 1620
draw.rounded_rectangle([btn_x, btn_y, btn_x + btn_w, btn_y + btn_h], radius=28, fill=(124, 58, 237))
draw.text((W // 2, btn_y + btn_h // 2), 'GET YOUR TEMPLATE • LINK IN PIN >>>', fill=(255, 255, 255), font=font_btn, anchor='mm')

# Price Line
price_str = 'Instant 1-Click Access  •  Only $19  •  Instant Canva Import'
draw.text((W // 2, 1780), price_str, fill=(148, 163, 184), font=font_foot, anchor='mm')
draw.text((W // 2, 1830), 'mdsanaullahsm.gumroad.com/l/stnsoe', fill=(96, 165, 250), font=font_pill, anchor='mm')

base_path = 'G:/Web Design/products/social-media-carousel-kit/video_pin_bg.png'
bg.save(base_path, quality=95)

# 2. Foreground Overlay Image (Video border + Badge)
fg = Image.new('RGBA', (W, H), (0, 0, 0, 0))
fg_draw = ImageDraw.Draw(fg)

# Video border
fg_draw.rounded_rectangle([right_x, card_y, right_x + card_w, card_y + vid_h], radius=16, outline=(59, 130, 246), width=4)
# Video badge
fg_draw.rounded_rectangle([right_x + 20, card_y + 20, right_x + 300, card_y + 65], radius=12, fill=(15, 23, 42, 230))
fg_draw.ellipse([right_x + 35, card_y + 35, right_x + 50, card_y + 50], fill=(239, 68, 68))
fg_draw.text((right_x + 175, card_y + 42), 'LIVE VIDEO PREVIEW', fill=(248, 250, 252), font=font_card, anchor='mm')

fg_path = 'G:/Web Design/products/social-media-carousel-kit/video_pin_fg.png'
fg.save(fg_path)
print('Assets generated successfully.')
