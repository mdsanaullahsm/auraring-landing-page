(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById("themeToggle");
  var saved = localStorage.getItem("apex_theme");
  if (saved === "light") root.setAttribute("data-theme", "light");

  function syncThemeLabel() {
    if (!themeBtn) return;
    themeBtn.textContent = root.getAttribute("data-theme") === "light" ? "Obsidian Mode" : "Ivory Mode";
  }
  syncThemeLabel();
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      if (next === "light") root.setAttribute("data-theme", "light");
      else root.removeAttribute("data-theme");
      localStorage.setItem("apex_theme", next);
      syncThemeLabel();
    });
  }

  var slider = document.getElementById("allocSlider");
  var allocVal = document.getElementById("allocVal");
  var yieldVal = document.getElementById("projectedYield");
  var compVal = document.getElementById("compoundedCapital");
  var horizonLabel = document.getElementById("horizonLabel");
  var yieldRateVal = document.getElementById("yieldRateVal");
  var horizonYears = 5;
  var strategyYield = 0.084;

  function renderSim() {
    if (!slider) return;
    var p = Number(slider.value);
    allocVal.textContent = "$" + p.toLocaleString("en-US");
    var annual = Math.round(p * strategyYield);
    var future = Math.round(p * Math.pow(1 + strategyYield, horizonYears));
    yieldVal.textContent = "$" + annual.toLocaleString("en-US");
    compVal.textContent = "$" + future.toLocaleString("en-US");
    yieldRateVal.textContent = (strategyYield * 100).toFixed(1) + "%";
    horizonLabel.textContent = horizonYears + "-Year Compounded";
  }
  if (slider) {
    slider.addEventListener("input", renderSim);
    document.querySelectorAll("[data-horizon]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll("[data-horizon]").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        horizonYears = Number(btn.getAttribute("data-horizon"));
        renderSim();
      });
    });
  }

  var MANDATES = {
    sfo: { rate: 0.084, badge: "Single-Family Office ($5M-$25M)", title: "Multi-Generational Tax & Trust Core", c1: "40% Treasury Ladder & Tax-Exempt Muni", c2: "35% Private Senior Secured Credit", c3: "25% Direct Venture Secondaries" },
    gp: { rate: 0.112, badge: "Venture GP & Liquidity ($15M-$75M)", title: "QSBS Optimization & Carried Interest Shield", c1: "45% Direct Senior Growth Lending", c2: "35% Secondary LP Liquidity Tranches", c3: "20% Sovereign T-Bill Operating Sweep" },
    endow: { rate: 0.096, badge: "Endowment & Foundation ($50M+)", title: "Real-Return Capital Preservation Model", c1: "35% Inflation-Linked Infrastructure", c2: "40% Low-Vol Private Credit Yield", c3: "25% Global Core Equities Index" }
  };
  document.querySelectorAll("[data-mandate]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("[data-mandate]").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var m = MANDATES[btn.getAttribute("data-mandate")];
      if (!m) return;
      strategyYield = m.rate;
      document.getElementById("mandateBadge").textContent = m.badge;
      document.getElementById("mandateTitle").textContent = m.title;
      document.getElementById("mandateC1").textContent = m.c1;
      document.getElementById("mandateC2").textContent = m.c2;
      document.getElementById("mandateC3").textContent = m.c3;
      renderSim();
    });
  });
  renderSim();

  var mobToggle = document.getElementById("mobileMenuBtn");
  var mobDrawer = document.getElementById("mobileDrawer");
  if (mobToggle && mobDrawer) {
    mobToggle.addEventListener("click", function () { mobDrawer.classList.toggle("open"); });
  }

  document.querySelectorAll(".faq-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  var modal = document.getElementById("briefingModal");
  var mTier = document.getElementById("briefingTier");
  document.querySelectorAll("[data-open-briefing]").forEach(function (el) {
    el.addEventListener("click", function () {
      if (mTier) mTier.value = el.getAttribute("data-open-briefing") || "Private Family Office Briefing";
      modal.classList.add("open");
    });
  });
  var closeBtn = document.getElementById("closeModalBtn");
  if (closeBtn) closeBtn.addEventListener("click", function () { modal.classList.remove("open"); });
  var form = document.getElementById("briefingForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nm = document.getElementById("clientName").value.trim() || "Principal";
      var st = document.getElementById("briefingStatus");
      st.textContent = "Mandate dossier queued for " + nm + ". Connect your webhook/Formspree endpoint in assets/js/main.js.";
      st.classList.add("show");
    });
  }
})();
