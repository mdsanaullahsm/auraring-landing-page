# Small Business 5-in-1 Modular Web Kit (SKU #08)

Production-ready HTML5, CSS3, and Vanilla JavaScript landing suite with **5 distinct industry themes** (Creative Agency, IT Advisory, Artisan Bistro, Legal & Finance, Custom Contractors) — zero build tools or npm dependencies.

## Package Structure
- `index.html` — Live interactive switcher across all 5 industry themes + Light/Dark toggle
- `templates/` — **5 standalone deployable starters** (`01-creative-agency.html` .. `05-custom-contractors.html`) sharing modular assets cleanly
- `assets/css/style.css` — Centralized CSS custom property palette tokens & responsive layout
- `assets/js/main.js` — Theme engine, FAQ accordion, mobile drawer & consultation modal (`SUBMIT_WEBHOOK_URL` hook)
- `assets/images/` — 6 crisp intrinsic vector SVG icons & blueprint graphics
- `04_Commercial_License/Commercial-License-Certificate.txt` — Commercial client deployment rights

## Deploy in 30 Seconds
1. Double-click `index.html` or any `templates/*.html` file locally to preview offline.
2. To deploy a single client site (e.g. Bistro), rename `templates/03-artisan-bistro.html` to `index.html` (updating relative `assets/` paths) or keep `index.html` with your default `data-preset="bistro"`.
3. Drag the folder directly into **Netlify Drop**, **Vercel**, or **Cloudflare Pages** for instant free HTTPS.
