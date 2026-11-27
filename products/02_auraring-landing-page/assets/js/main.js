/**
 * AURARING — Editorial Nordic E-Commerce Engine
 * Material switcher, sizing caliper, hotspot inspector,
 * persistent promo calculation, and developer payment integration hook.
 */

function initAuraRingStudio() {
  // 1. STATE MANAGEMENT
  const store = {
    finish: 'Matte Basalt Titanium',
    finishKey: 'black',
    image: 'assets/images/ring-stealth-black.svg',
    size: '9',
    diameter: '19.0 mm',
    bundle: 'Single AuraRing Edition',
    price: 199,
    promoApplied: false,
    discountRate: 0.1,
    discountCode: 'NORDIC10'
  };

  const finishAssets = {
    black: 'assets/images/ring-stealth-black.svg',
    silver: 'assets/images/ring-space-silver.svg',
    rose: 'assets/images/ring-rose-gold.svg',
    gold: 'assets/images/ring-brushed-titanium.svg'
  };

  const ringMillimeters = {
    '6': '16.5 mm',
    '7': '17.3 mm',
    '8': '18.1 mm',
    '9': '19.0 mm',
    '10': '19.8 mm',
    '11': '20.6 mm',
    '12': '21.4 mm',
    '13': '22.2 mm'
  };

  // 2. MATERIAL FINISH SELECTOR
  const swatchBtns = document.querySelectorAll('.swatch-btn');
  const activeFinishDisplay = document.getElementById('activeFinishDisplay');
  const heroMainRing = document.getElementById('heroMainRing');
  const stickyRingThumb = document.getElementById('stickyRingThumb');
  const drawerRingThumb = document.getElementById('drawerRingThumb');
  const stickyFinishText = document.getElementById('stickyFinishText');
  const drawerFinishText = document.getElementById('drawerFinishText');

  swatchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const finishKey = btn.dataset.finishKey;
      const finishTitle = btn.dataset.finishTitle;

      store.finishKey = finishKey;
      store.finish = finishTitle;
      store.image = finishAssets[finishKey] || finishAssets.black;

      if (activeFinishDisplay) activeFinishDisplay.textContent = finishTitle;
      if (stickyFinishText) stickyFinishText.textContent = finishTitle;
      if (drawerFinishText) drawerFinishText.textContent = finishTitle;

      if (heroMainRing) {
        heroMainRing.style.opacity = '0';
        heroMainRing.style.transform = 'scale(0.96) rotate(-2deg)';
        setTimeout(() => {
          heroMainRing.src = store.image;
          heroMainRing.style.opacity = '1';
          heroMainRing.style.transform = 'scale(1) rotate(0deg)';
        }, 180);
      }

      if (stickyRingThumb) stickyRingThumb.src = store.image;
      if (drawerRingThumb) drawerRingThumb.src = store.image;
    });
  });

  // 3. PRECISION SIZING CALIPER
  const caliperBtns = document.querySelectorAll('.caliper-btn');
  const sizeMillimeterText = document.getElementById('sizeMillimeterText');
  const drawerSizeText = document.getElementById('drawerSizeText');

  caliperBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      caliperBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const size = btn.dataset.size;
      const mm = ringMillimeters[size] || '19.0 mm';

      store.size = size;
      store.diameter = mm;

      if (sizeMillimeterText) {
        sizeMillimeterText.textContent = `US ${size} (${mm} inner diameter)`;
      }
      if (drawerSizeText) {
        drawerSizeText.textContent = `US ${size} (${mm})`;
      }
    });
  });

  // 4. INTERACTIVE HOTSPOT EXPLORATION
  const hotspots = document.querySelectorAll('.hotspot-node');
  const hotspotInfoBox = document.getElementById('hotspotInfoBox');
  const hotspotTitle = document.getElementById('hotspotTitle');
  const hotspotDesc = document.getElementById('hotspotDesc');
  const hotspotCloseBtn = document.getElementById('hotspotCloseBtn');

  const hotspotData = {
    shell: {
      title: 'Grade-5 Aerospace Titanium Shell',
      desc: 'Precision CNC-machined from a single block of titanium with a diamond-like carbon (DLC) protective shield. Lighter than aluminum, stronger than surgical steel.'
    },
    sensor: {
      title: 'Sub-Dermal Optical PPG Sensors',
      desc: 'Molded within hypoallergenic medical-grade epoxy. Reads arterial pulse waves directly from palmar digital arteries with 99.2% clinical fidelity.'
    },
    battery: {
      title: 'Curved Solid-State Microcell',
      desc: 'Custom engineered to curve inside the ring contour. Delivers 7 full days of continuous biometric recording on a single 45-minute charge.'
    }
  };

  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      const type = spot.dataset.hotspot;
      const data = hotspotData[type];
      if (data && hotspotInfoBox) {
        hotspotTitle.textContent = data.title;
        hotspotDesc.textContent = data.desc;
        hotspotInfoBox.style.display = 'block';
        hotspotInfoBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  if (hotspotCloseBtn && hotspotInfoBox) {
    hotspotCloseBtn.addEventListener('click', () => {
      hotspotInfoBox.style.display = 'none';
    });
  }

  // 5. STICKY STUDIO BUY BAR
  const stickyBar = document.getElementById('studioStickyBar');
  const heroStage = document.getElementById('heroStage');

  if (stickyBar && heroStage) {
    window.addEventListener('scroll', () => {
      const rect = heroStage.getBoundingClientRect();
      if (rect.bottom < 150) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    });
  }

  // 6. NORDIC FAQ ACCORDION
  const faqItems = document.querySelectorAll('.nordic-faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.nordic-faq-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // 7. CHECKOUT DRAWER & CONVERSION ENGINE
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const editorialDrawer = document.getElementById('editorialDrawer');
  const drawerExitBtn = document.getElementById('drawerExitBtn');
  const drawerTriggers = document.querySelectorAll('.trigger-checkout');
  const checkoutStatusBanner = document.getElementById('checkoutStatusBanner');

  function getDiscountedTotal() {
    if (!store.promoApplied) return store.price;
    return store.price - Math.round(store.price * store.discountRate);
  }

  function updateDrawerDisplay() {
    const drawerBundleTitle = document.getElementById('drawerBundleTitle');
    const drawerSubtotal = document.getElementById('drawerSubtotal');
    const drawerGrandTotal = document.getElementById('drawerGrandTotal');

    if (drawerBundleTitle) drawerBundleTitle.textContent = store.bundle;
    if (drawerSubtotal) drawerSubtotal.textContent = `$${store.price}`;
    if (drawerGrandTotal) {
      const finalVal = getDiscountedTotal();
      drawerGrandTotal.textContent = store.promoApplied
        ? `$${finalVal} (10% Courtesy Applied)`
        : `$${finalVal}`;
    }
  }

  function openCheckout(bundleName, bundlePrice) {
    if (bundleName) store.bundle = bundleName;
    if (bundlePrice) store.price = bundlePrice;
    if (checkoutStatusBanner) checkoutStatusBanner.style.display = 'none';

    updateDrawerDisplay();

    if (drawerBackdrop && editorialDrawer) {
      drawerBackdrop.classList.add('open');
      editorialDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCheckout() {
    if (drawerBackdrop && editorialDrawer) {
      drawerBackdrop.classList.remove('open');
      editorialDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  drawerTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const bName = btn.dataset.bundle || store.bundle;
      const bPrice = parseInt(btn.dataset.price, 10) || store.price;
      openCheckout(bName, bPrice);
    });
  });

  if (drawerExitBtn) drawerExitBtn.addEventListener('click', closeCheckout);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeCheckout);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCheckout();
  });

  // Promo Code Engine
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  const promoInput = document.getElementById('promoInput');
  const promoFeedback = document.getElementById('promoFeedback');

  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener('click', () => {
      const val = promoInput.value.trim().toUpperCase();
      if (val === store.discountCode) {
        store.promoApplied = true;
        const discount = Math.round(store.price * store.discountRate);
        updateDrawerDisplay();
        if (promoFeedback) {
          promoFeedback.textContent = `Collector code ${store.discountCode} applied. -$${discount} discount.`;
          promoFeedback.style.color = '#C5A880';
        }
      } else {
        store.promoApplied = false;
        updateDrawerDisplay();
        if (promoFeedback) {
          promoFeedback.textContent = `Unrecognized code. Try "${store.discountCode}"`;
          promoFeedback.style.color = '#EF4444';
        }
      }
    });
  }

  // Developer Checkout Integration Hook (Replace URL below with your live Stripe / Shopify / Lemon Squeezy checkout URL)
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
  if (proceedCheckoutBtn) {
    proceedCheckoutBtn.addEventListener('click', () => {
      const orderPayload = {
        bundle: store.bundle,
        finish: store.finish,
        size: `US ${store.size} (${store.diameter})`,
        promo: store.promoApplied ? store.discountCode : null,
        totalUSD: getDiscountedTotal()
      };
      if (checkoutStatusBanner) {
        checkoutStatusBanner.innerHTML =
          `<strong>Allocation Locked:</strong> ${orderPayload.bundle} &bull; ${orderPayload.finish} &bull; ${orderPayload.size} &bull; Total: <strong>$${orderPayload.totalUSD}</strong>.<br>` +
          `<span style="opacity:0.85;">Developer Hook Ready: Wire your Stripe Checkout / Shopify Permalink inside <code>assets/js/main.js</code>.</span>`;
        checkoutStatusBanner.style.display = 'block';
      }
      window.dispatchEvent(new CustomEvent('auraring:checkout', { detail: orderPayload }));
    });
  }

  // 8. ROLLING COUNTDOWN
  const timerHours = document.getElementById('timerHours');
  const timerMins = document.getElementById('timerMins');
  const timerSecs = document.getElementById('timerSecs');

  let remaining = 11 * 3600 + 18 * 60 + 44;

  setInterval(() => {
    if (remaining <= 0) remaining = 24 * 3600;
    remaining--;
    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = Math.floor(remaining % 60);
    if (timerHours) timerHours.textContent = String(h).padStart(2, '0') + 'h';
    if (timerMins) timerMins.textContent = String(m).padStart(2, '0') + 'm';
    if (timerSecs) timerSecs.textContent = String(s).padStart(2, '0') + 's';
  }, 1000);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAuraRingStudio);
} else {
  initAuraRingStudio();
}
window.__AURA_READY = true;
