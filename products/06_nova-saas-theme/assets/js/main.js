(function () {
  function initNova() {
    var body = document.body;
    var themeBtn = document.getElementById("themeToggle");
    var themeIcon = document.getElementById("themeIcon");
    var mobileBtn = document.getElementById("mobileMenuBtn");
    var mobileDrawer = document.getElementById("mobileDrawer");

    // 1. Dark / Light persistence
    try {
      if (localStorage.getItem("nova_theme") === "light") {
        body.classList.add("light-mode");
        if (themeIcon) themeIcon.textContent = "Dark Mode";
        if (themeBtn) themeBtn.setAttribute("aria-pressed", "true");
      }
    } catch (e) {}

    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var isLight = body.classList.toggle("light-mode");
        themeBtn.setAttribute("aria-pressed", String(isLight));
        if (themeIcon) themeIcon.textContent = isLight ? "Dark Mode" : "Light Mode";
        try { localStorage.setItem("nova_theme", isLight ? "light" : "dark"); } catch (e) {}
      });
    }

    // 2. Mobile drawer
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener("click", function () {
        var open = mobileDrawer.hasAttribute("hidden");
        if (open) {
          mobileDrawer.removeAttribute("hidden");
          mobileBtn.setAttribute("aria-expanded", "true");
        } else {
          mobileDrawer.setAttribute("hidden", "");
          mobileBtn.setAttribute("aria-expanded", "false");
        }
      });
      mobileDrawer.querySelectorAll("a, button").forEach(function (el) {
        el.addEventListener("click", function () {
          mobileDrawer.setAttribute("hidden", "");
          mobileBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    // 3. Monthly / Annual billing toggle
    var isAnnual = false;
    var toggleSwitch = document.getElementById("toggleSwitch");
    var monthlyPrices = { Starter: 29, "Pro Scale": 79, Enterprise: 199 };
    var annualPrices = { Starter: 23, "Pro Scale": 63, Enterprise: 159 };

    function renderPrices() {
      var map = isAnnual ? annualPrices : monthlyPrices;
      var p1 = document.getElementById("price1");
      var p2 = document.getElementById("price2");
      var p3 = document.getElementById("price3");
      if (p1) p1.innerHTML = "$" + map.Starter + "<span>/mo</span>";
      if (p2) p2.innerHTML = "$" + map["Pro Scale"] + "<span>/mo</span>";
      if (p3) p3.innerHTML = "$" + map.Enterprise + "<span>/mo</span>";
    }

    if (toggleSwitch) {
      toggleSwitch.addEventListener("click", function () {
        isAnnual = !isAnnual;
        toggleSwitch.classList.toggle("toggle-annual", isAnnual);
        toggleSwitch.setAttribute("aria-checked", String(isAnnual));
        renderPrices();
      });
    }

    // 4. Interactive API Cost & Savings Estimator
    var slider = document.getElementById("volumeSlider");
    var volumeDisplay = document.getElementById("volumeDisplay");
    var recommendedTier = document.getElementById("recommendedTier");
    var estimatedCost = document.getElementById("estimatedCost");
    var legacyCost = document.getElementById("legacyCost");
    var estimatedSavings = document.getElementById("estimatedSavings");
    var estCtaBtn = document.getElementById("estCtaBtn");

    function updateEstimator() {
      if (!slider) return;
      var reqs = parseInt(slider.value, 10);
      var label = reqs >= 1000000 ? (reqs / 1000000).toFixed(1) + "M requests" : Math.round(reqs / 1000) + "k requests";
      if (volumeDisplay) volumeDisplay.textContent = label;

      var tier = "Starter";
      var price = 29;
      if (reqs > 250000 && reqs <= 5000000) {
        tier = "Pro Scale";
        price = 79;
      } else if (reqs > 5000000) {
        tier = "Enterprise";
        price = 199;
      }
      var legacy = Math.round(price * 2.65);
      var save = legacy - price;
      var pct = Math.round((save / legacy) * 100);

      if (recommendedTier) recommendedTier.textContent = tier;
      if (estimatedCost) estimatedCost.textContent = "$" + price + " / mo";
      if (legacyCost) legacyCost.textContent = "$" + legacy + " / mo";
      if (estimatedSavings) estimatedSavings.textContent = "Save $" + save + "/mo (-" + pct + "%) with predictable caps";
      if (estCtaBtn) {
        estCtaBtn.textContent = "Lock In " + tier + " Estimate";
        estCtaBtn.setAttribute("data-open-modal", tier);
      }
    }

    if (slider) {
      slider.addEventListener("input", updateEstimator);
      updateEstimator();
    }

    // 5. FAQ Accordion
    document.querySelectorAll(".faq-trigger").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        var icon = btn.querySelector(".faq-icon");
        if (icon) icon.textContent = expanded ? "+" : "-";
        var panel = btn.nextElementSibling;
        if (panel) {
          if (expanded) panel.setAttribute("hidden", "");
          else panel.removeAttribute("hidden");
        }
      });
    });

    // 6. Checkout / Trial Modal (Developer Stripe Hook Ready)
    // Wire live Stripe Checkout links below when launching your SaaS billing:
    var STRIPE_PAYMENT_LINKS = {
      Starter: "",
      "Pro Scale": "",
      Enterprise: ""
    };

    var modal = document.getElementById("checkoutModal");
    var closeBtn = document.getElementById("closeModalBtn");
    var modalTitle = document.getElementById("modalTitle");
    var selectedPlanField = document.getElementById("selectedPlanField");
    var form = document.getElementById("workspaceForm");
    var feedback = document.getElementById("formFeedback");

    document.addEventListener("click", function (ev) {
      var trigger = ev.target.closest("[data-open-modal]");
      if (!trigger || !modal) return;
      var plan = trigger.getAttribute("data-open-modal") || "Pro Scale";
      if (STRIPE_PAYMENT_LINKS[plan]) {
        window.location.assign(STRIPE_PAYMENT_LINKS[plan]);
        return;
      }
      var prices = isAnnual ? annualPrices : monthlyPrices;
      var cycle = isAnnual ? "Annual -20%" : "Monthly";
      if (modalTitle) modalTitle.textContent = "Start With " + plan;
      if (selectedPlanField) selectedPlanField.value = plan + " — $" + (prices[plan] || 79) + "/mo (" + cycle + ")";
      if (feedback) feedback.setAttribute("hidden", "");
      modal.removeAttribute("hidden");
    });

    function closeModal() {
      if (modal) modal.setAttribute("hidden", "");
    }
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (modal) {
      modal.addEventListener("click", function (ev) {
        if (ev.target === modal) closeModal();
      });
    }
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") closeModal();
    });

    if (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var email = document.getElementById("workEmailInput").value.trim();
        if (feedback) {
          feedback.textContent = "Workspace queued for " + email + " (" + selectedPlanField.value + "). Connect your Stripe link in assets/js/main.js for live payments.";
          feedback.removeAttribute("hidden");
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNova);
  } else {
    initNova();
  }
})();
