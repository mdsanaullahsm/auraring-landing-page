# Nova Cloud — Modular B2B AI & SaaS Landing Page Theme

Clean, zero-dependency production template engineered for AI startups, API products, and B2B software launches.

## File Structure
- `index.html` — Semantic HTML5 landing page (`Hero`, `Feature Matrix`, `API Spend Estimator`, `Pricing Matrix`, `Proof`, `FAQ`, `Trial Modal`)
- `assets/css/style.css` — Custom CSS property tokens (`--bg`, `--surface`, `--accent`, `.light-mode`) + responsive 390px mobile drawer
- `assets/js/main.js` — Dark/light persistence, Monthly/Annual 20% billing switch, live request volume calculator, FAQ accordion & `STRIPE_PAYMENT_LINKS` billing hook
- `assets/images/*.svg` — 6 lightweight vector graphics (`nova-logo.svg`, `telemetry-sparkline.svg`, `architecture-nodes.svg`, `latency-gauge.svg`, `security-shield.svg`, `deployment-pipeline.svg`)
- `Access-Your-Template.html` — Visual quick-deploy guide (Netlify Drop & Vercel)
- `04_Commercial_License/Commercial-License-Certificate.txt` — Client & commercial deployment rights

## Quick Deploy
1. Open `index.html` locally to test Dark/Light toggle, billing switch, and ROI calculator.
2. Add your Stripe/Paddle payment links inside `STRIPE_PAYMENT_LINKS` in `assets/js/main.js`.
3. Drag the extracted folder onto Netlify Drop (`app.netlify.com/drop`) or Vercel to go live in 30 seconds.
