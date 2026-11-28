document.addEventListener("DOMContentLoaded", () => {
  const THRESHOLD = 75;
  let subscribeMode = false;
  let active = { id: "single", name: "Single Bottle (30-Day Protocol)", basePrice: 48 };
  const cart = [];

  const bundleOptions = document.querySelectorAll(".bundle-option");
  const cadenceBtns = document.querySelectorAll(".cadence-btn");
  const ctaPrice = document.getElementById("ctaPrice");
  const stickySelection = document.getElementById("stickySelection");
  const cartTrigger = document.getElementById("cartTrigger");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const closeCart = document.getElementById("closeCart");
  const addToBagBtn = document.getElementById("addToBagBtn");
  const stickyBuyBtn = document.getElementById("stickyBuyBtn");
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const subtotalAmount = document.getElementById("subtotalAmount");
  const stickyBuyBar = document.getElementById("stickyBuyBar");
  const shippingWrap = document.getElementById("shippingWrap");
  const shippingText = document.getElementById("shippingText");
  const progressFill = document.getElementById("progressFill");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const checkoutNotice = document.getElementById("checkoutNotice");
  const mobMenuBtn = document.getElementById("mobMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");

  function effectivePrice(base) {
    return subscribeMode ? Math.round(base * 0.85) : base;
  }

  function refreshPricingLabels() {
    bundleOptions.forEach((opt) => {
      const base = parseInt(opt.dataset.price, 10);
      opt.querySelector(".current-price").textContent = `$${effectivePrice(base)}`;
    });
    const cur = effectivePrice(active.basePrice);
    const label = subscribeMode ? `${active.name} (Subscribe -15%)` : active.name;
    ctaPrice.textContent = `$${cur}`;
    stickySelection.textContent = `${label} — $${cur}`;
  }

  cadenceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      cadenceBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      subscribeMode = btn.dataset.cadence === "sub";
      refreshPricingLabels();
    });
  });

  bundleOptions.forEach((opt) => {
    opt.addEventListener("click", () => {
      bundleOptions.forEach((b) => b.classList.remove("active"));
      opt.classList.add("active");
      active = {
        id: opt.dataset.id,
        name: opt.dataset.name,
        basePrice: parseInt(opt.dataset.price, 10),
      };
      refreshPricingLabels();
    });
  });

  function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
  }
  function closeCartDrawer() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
  }
  cartTrigger.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartDrawer);
  cartOverlay.addEventListener("click", closeCartDrawer);

  function addItemToCart() {
    const unitPrice = effectivePrice(active.basePrice);
    const key = `${active.id}_${subscribeMode ? "sub" : "once"}`;
    const title = subscribeMode ? `${active.name} (Auto-Refill -15%)` : active.name;
    const found = cart.find((x) => x.key === key);
    if (found) found.qty += 1;
    else cart.push({ key, name: title, price: unitPrice, qty: 1 });
    checkoutNotice.classList.remove("show");
    renderCart();
    openCart();
  }
  addToBagBtn.addEventListener("click", addItemToCart);
  stickyBuyBtn.addEventListener("click", addItemToCart);

  function renderCart() {
    const totalCount = cart.reduce((s, it) => s + it.qty, 0);
    const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
    cartCount.textContent = String(totalCount);
    subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;

    const pct = Math.min(100, Math.round((subtotal / THRESHOLD) * 100));
    progressFill.style.width = `${pct}%`;
    if (subtotal >= THRESHOLD) {
      shippingWrap.classList.add("unlocked");
      shippingText.textContent = "Unlocked FREE Expedited Shipping + Luxury Travel Case!";
    } else {
      shippingWrap.classList.remove("unlocked");
      shippingText.textContent = `Add $${Math.max(0, THRESHOLD - subtotal).toFixed(0)} more for FREE Expedited Shipping`;
    }

    cartItems.innerHTML = "";
    if (!cart.length) {
      cartItems.innerHTML = '<p style="color:#6C665F;text-align:center;margin-top:40px;">Your bag is currently empty.</p>';
      return;
    }
    cart.forEach((item, idx) => {
      const row = document.createElement("div");
      row.className = "cart-item-row";
      row.innerHTML = `
        <div>
          <strong style="font-size:13.5px;display:block;">${item.name}</strong>
          <div class="qty-box">
            <button type="button" class="qty-btn" data-act="dec" data-idx="${idx}">−</button>
            <span style="font-size:12.5px;font-weight:700;">${item.qty}</span>
            <button type="button" class="qty-btn" data-act="inc" data-idx="${idx}">+</button>
            <button type="button" style="background:none;border:none;color:#b91c1c;margin-left:8px;cursor:pointer;font-size:11.5px;" data-act="del" data-idx="${idx}">Remove</button>
          </div>
        </div>
        <strong style="font-size:14px;">$${item.price * item.qty}</strong>
      `;
      cartItems.appendChild(row);
    });
  }

  cartItems.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const idx = parseInt(btn.dataset.idx, 10);
    const act = btn.dataset.act;
    if (act === "inc") cart[idx].qty += 1;
    else if (act === "dec") {
      cart[idx].qty -= 1;
      if (cart[idx].qty <= 0) cart.splice(idx, 1);
    } else if (act === "del") {
      cart.splice(idx, 1);
    }
    renderCart();
  });

  checkoutBtn.addEventListener("click", () => {
    if (!cart.length) {
      checkoutNotice.textContent = "Select a protocol above to add your first serum bottle.";
      checkoutNotice.classList.add("show");
      return;
    }
    const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
    checkoutNotice.textContent = `Order preview ready ($${subtotal.toFixed(2)}). Wire your Shopify / Stripe Checkout URL in main.js.`;
    checkoutNotice.classList.add("show");
  });

  // Visual gallery switcher
  const stageImg = document.getElementById("stageImg");
  document.querySelectorAll(".stage-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".stage-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      stageImg.src = tab.dataset.src;
      stageImg.alt = tab.dataset.alt;
    });
  });

  // Review skin-type filters
  const reviews = document.querySelectorAll(".review-card");
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.dataset.skin;
      reviews.forEach((card) => {
        const show = filter === "all" || card.dataset.skin === filter;
        card.classList.toggle("hidden", !show);
      });
    });
  });

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      q.parentElement.classList.toggle("open");
    });
  });

  // Mobile nav drawer
  mobMenuBtn.addEventListener("click", () => {
    mobileDrawer.classList.toggle("open");
  });
  mobileDrawer.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => mobileDrawer.classList.remove("open"));
  });

  window.addEventListener("scroll", () => {
    stickyBuyBar.classList.toggle("visible", window.scrollY > 420);
  });

  refreshPricingLabels();
  renderCart();
});
