# AuraRing — Luxury Biometric Wearable DTC Landing Page Theme

Thank you for purchasing **AuraRing** (`SKU #02`)! This is a modular, production-ready HTML5 / CSS3 / Vanilla JS storefront engineered for wearable tech, smart jewelry, and luxury hardware launches.

---

## Quick Start (Zero Build Tools)

1. Double-click `index.html` to launch locally in Chrome, Edge, Safari, or Firefox.
2. Open `Access-Your-Template.html` for an illustrated step-by-step developer customization and deployment guide.

---

## Modular File Architecture

- `index.html` — Clean semantic multi-section storefront (Hero finish configurator, 4-Step Sizing Ritual, Engineering deep-dive, App showcase, Comparison matrix, Editions & Pricing, FAQ, Slide-over Checkout drawer).
- `assets/css/style.css` — External editorial stylesheet powered by top-level CSS Custom Properties (`:root`) with full tablet & mobile (`<= 768px`) responsive grids.
- `assets/js/main.js` — Modular Vanilla JS engine controlling material swatches, millimeter caliper, hotspot popups, dynamic `NORDIC10` promo pricing, and `auraring:checkout` payment gateway hook (`#proceedCheckoutBtn`).
- `assets/images/` — 10 crisp vector SVG product & telemetry illustrations.
- `04_Commercial_License/Commercial-License-Certificate.txt` — Commercial client rights.

---

## Customizing Colors & Brand Tokens

Edit the top of `assets/css/style.css`:
```css
:root {
  --canvas-dark: #121110;      /* Deep Studio Basalt Background */
  --canvas-warm: #F4EFEA;      /* Warm Sandstone Editorial Sections */
  --accent-gold: #C5A880;      /* 18K Horizon Champagne Accent */
  --accent-action: #1D4ED8;    /* Primary Reserve CTA Button */
}
```

## Connecting Your Payment Link

Open `assets/js/main.js` and look for `proceedCheckoutBtn` (`window.addEventListener` / checkout payload) to redirect to your live Stripe Payment Link, Shopify Cart permalink, or Gumroad / Lemon Squeezy checkout.

## Free Static Hosting (60 Seconds)

- **Vercel / Netlify:** Drag-and-drop this extracted folder into [app.netlify.com/drop](https://app.netlify.com/drop) or import to Vercel for instant HTTPS deployment.
- **GitHub Pages:** Commit this folder to a GitHub repository and enable Settings -> Pages.
