(function () {
  // Optional: point this to your Formspree, Netlify Forms, or custom API endpoint
  var SUBMIT_WEBHOOK_URL = "";

  var PRESETS = {
    agency: {
      className: "",
      brand: "Vanguard Creative",
      tag: "Creative Agency & Brand Studio",
      heroTitle: "We Design High-Trust Brands That Convert Inbound Demand.",
      heroSub: "Identity systems, high-velocity marketing sites, and paid conversion funnels built cleanly for ambitious B2B & consumer companies.",
      phone: "(555) 234-8910",
      phoneHref: "tel:+15552348910",
      services: [
        ["Brand & Identity Systems", "Complete typography, visual tokens, logo architecture, and executive style guides."],
        ["High-Speed Web Engineering", "Accessible HTML5, lightweight CSS architecture, and SEO-clean landing funnels."],
        ["Conversion CRO Sprints", "Landing experiments, clear offer positioning, and measurable inbound lead lift."]
      ],
      packages: [
        ["Brand Sprint", "$2,800", ["Logo + Color Token System", "1-Page Launch Website", "10-Day Delivery"]],
        ["Full Digital Flagship", "$5,600", ["Multi-Page Web System", "Copy & Wireframe Audit", "Analytics & Lead Capture"], true],
        ["Growth Partner Retainer", "$3,200/mo", ["Weekly Funnel Optimization", "Campaign Landing Pages", "Priority Slack Access"]]
      ],
      proof: [
        ["+142% Qualified Leads", "Rebuilding our flagship positioning lifted demo bookings within 30 days.", "Elena Vance, VP Marketing at CloudAxis"],
        ["14-Day Ship Time", "Fastest agency launch we have ever managed without sacrificing polish.", "Marcus Sterling, Founder at VerveBio"],
        ["99 Lighthouse Score", "Core Web Vitals went green across mobile and desktop overnight.", "Nadia Patel, Head of Product at Kinetix"]
      ]
    },
    consulting: {
      className: "theme-consulting",
      brand: "Nexus Cloud Advisory",
      tag: "Enterprise IT & Cloud Advisory",
      heroTitle: "Modernize Cloud Infrastructure & Automate Operations Safely.",
      heroSub: "Hands-on cloud security audits, AWS cost governance, and private AI workflow engineering for mid-market operations.",
      phone: "(555) 392-4410",
      phoneHref: "tel:+15553924410",
      services: [
        ["Cloud Cost & Security Audit", "Identify wasted Kubernetes spend, IAM gaps, and SOC-2 compliance blockers fast."],
        ["Zero-Downtime Migrations", "Structured transition plans from legacy servers into hardened AWS/Azure environments."],
        ["Private AI Workflows", "Deploy internal retrieval and document automation inside your isolated VPC."]
      ],
      packages: [
        ["Infrastructure Audit", "$3,500", ["Full AWS/Azure Security Scan", "Spend Reduction Roadmap", "Executive Readout"]],
        ["Cloud Transformation", "$8,500", ["Production VPC Setup", "CI/CD + Terraform Modules", "Team Runbook Handover"], true],
        ["Fractional CTO Desk", "$4,500/mo", ["Weekly Architecture Reviews", "Incident SLA Support", "Vendor Diligence"]]
      ],
      proof: [
        ["$11,400/mo Saved", "Nexus trimmed idle cloud clusters by 38% in our very first engagement sprint.", "David Kim, COO at FreightGrid"],
        ["Zero Audit Findings", "Passed our enterprise SOC-2 Type II assessment cleanly ahead of schedule.", "Rachel Torres, CTO at HarborPay"],
        ["2.4x Deploy Velocity", "Automated deployment pipelines replaced brittle Friday manual releases.", "Tom Bennett, VP Engineering at MedCore"]
      ]
    },
    bistro: {
      className: "theme-bistro",
      brand: "Artisan & Oak Bistro",
      tag: "Specialty Coffee & Seasonal Kitchen",
      heroTitle: "Single-Origin Espresso, Wood-Fired Loaf & Private Dining.",
      heroSub: "Neighborhood sourdough bakery by morning, curated wine bar and private event venue by evening in downtown Oakwood.",
      phone: "(555) 781-2240",
      phoneHref: "tel:+15557812240",
      services: [
        ["Daily Hearth & Pastry", "Naturally leavened sourdough, cultured butter croissants, and seasonal tarts baked at 5 AM."],
        ["Direct-Trade Coffee Bar", "Precision pour-overs and espresso sourced weekly from small-lot washing stations."],
        ["Private Evening Buyouts", "Custom 4-course harvest menus and sommelier pairings for 18 to 45 guests."]
      ],
      packages: [
        ["Morning Office Catering", "$340", ["Assorted Viennoiserie Box (24)", "Two Thermal Coffee Totes", "Zero-Plastic Serviceware"]],
        ["Chef's Tasting Table", "$1,450", ["Private Room for 14 Guests", "Seasonal 4-Course Menu", "Dedicated Sommelier Host"], true],
        ["Full Venue Buyout", "$4,200", ["Up to 45 Seated Guests", "Custom Printed Keepsake Menus", "Custom Cocktail Program"]]
      ],
      proof: [
        ["4.9 ★ Local Favorite", "Best almond croissant and flat white within ten miles—our Saturday ritual.", "Hannah Cho, Neighborhood Regular"],
        ["Seamless Reception", "They hosted our 35-person rehearsal dinner effortlessly with every dietary detail handled.", "Daniel & Claire Brooks"],
        ["Always Fresh", "Zero shortcuts—real seasonal ingredients and genuinely warm table service.", "Chef Robert Miller, Guest Diner"]
      ]
    },
    legal: {
      className: "theme-legal",
      brand: "Sterling & Partners LLP",
      tag: "Corporate Law & Private Advisory",
      heroTitle: "Fiduciary Legal Counsel Built for High-Stakes Transactions.",
      heroSub: "Commercial contracts, M&A diligence, intellectual property protection, and founder equity governance with flat-fee clarity.",
      phone: "(555) 614-9080",
      phoneHref: "tel:+15556149080",
      services: [
        ["Commercial & MSA Contracts", "Bulletproof client agreements, IP transfer clauses, and vendor risk protection."],
        ["Entity & Capital Structuring", "Clean cap tables, founder vesting agreements, and Delaware C-Corp governance."],
        ["Trademark & IP Defense", "USPTO filings, licensing agreements, and brand asset enforcement globally."]
      ],
      packages: [
        ["Contract Protection Pack", "$1,950", ["Custom MSA + Client SOW", "Contractor IP Assignment", "Privacy & Terms Suite"]],
        ["Venture Readiness Suite", "$4,900", ["Cap Table Clean-Up Audit", "SAFE & Option Plan Review", "Board Consent Library"], true],
        ["Outside General Counsel", "$3,800/mo", ["Unlimited Contract Redlines", "Quarterly Governance Audit", "Same-Day Partner Access"]]
      ],
      proof: [
        ["Saved a $240K Dispute", "Sterling caught an uncapped indemnity clause in 4 hours that saved our margin.", "Jordan Alvarez, CEO at Northbeam"],
        ["Predictable Flat Fees", "Zero surprise hourly billing during our entire $12M strategic acquisition.", "Sofia Lindqvist, Managing Partner"],
        ["Crystal Clear Counsel", "They turn complex risk memos into practical plain-English decisions.", "Dr. Arthur Weiss, Founder"]
      ]
    },
    contractor: {
      className: "theme-contractor",
      brand: "Apex Build & Design",
      tag: "Licensed Residential & Commercial Build",
      heroTitle: "Architectural Renovations Delivered On Budget & On Schedule.",
      heroSub: "Licensed general contracting, custom kitchens, commercial build-outs, and structural craftsmanship backed by a 5-year warranty.",
      phone: "(555) 842-6310",
      phoneHref: "tel:+15558426310",
      services: [
        ["Architectural Remodels", "Kitchens, primary suites, and structural wall removals managed end to end."],
        ["Commercial Suite Build-Outs", "Permitting, MEP coordination, and acoustic finishes for studios & offices."],
        ["Transparent Fixed Bids", "Itemized material allowances and weekly milestone walkthrough schedules."]
      ],
      packages: [
        ["Design & Feasibility Audit", "$1,250", ["On-Site Laser Measure", "Permit & Zoning Check", "Line-Item Cost Range"]],
        ["Full Interior Remodel", "Custom Bid", ["Licensed Project Superintendent", "Weekly Photo Progress Log", "5-Year Workmanship Warranty"], true],
        ["Commercial Turnkey Fit", "Fixed SLA", ["After-Hours Building Compliance", "ADA & Fire Code Sign-Off", "Guaranteed Opening Date"]]
      ],
      proof: [
        ["Finished 4 Days Early", "Cleanest jobsite we have ever seen and zero surprise change orders.", "Greg & Melissa Carter, Homeowners"],
        ["Passed First Inspection", "They handled city permits, structural engineers, and retail opening smoothly.", "Samir Hasan, Studio Owner"],
        ["True Craftsmanship", "Cabinetry joints and tile work look magazine-ready two years later.", "Laura Jensen, Interior Architect"]
      ]
    }
  };

  var activePreset = document.body.getAttribute("data-preset") || "agency";

  function applyPreset(key) {
    var data = PRESETS[key] || PRESETS.agency;
    activePreset = key;

    document.body.classList.remove("theme-consulting", "theme-bistro", "theme-legal", "theme-contractor");
    if (data.className) {
      document.body.classList.add(data.className);
    }

    document.querySelectorAll(".preset-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-preset-key") === key);
    });

    var map = {
      brandName: data.brand,
      heroTag: data.tag,
      heroTitle: data.heroTitle,
      heroSub: data.heroSub,
      navPhone: data.phone,
      modalPresetLabel: data.brand
    };
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = map[id];
    });
    var navPhone = document.getElementById("navPhone");
    if (navPhone) navPhone.setAttribute("href", data.phoneHref);

    for (var i = 0; i < 3; i++) {
      var sTitle = document.getElementById("svcTitle" + (i + 1));
      var sDesc = document.getElementById("svcDesc" + (i + 1));
      if (sTitle && sDesc && data.services[i]) {
        sTitle.textContent = data.services[i][0];
        sDesc.textContent = data.services[i][1];
      }
      var pName = document.getElementById("pkgName" + (i + 1));
      var pCost = document.getElementById("pkgPrice" + (i + 1));
      var pList = document.getElementById("pkgList" + (i + 1));
      if (pName && pCost && pList && data.packages[i]) {
        pName.textContent = data.packages[i][0];
        pCost.textContent = data.packages[i][1];
        pList.innerHTML = data.packages[i][2].map(function (item) {
          return "<li>" + item + "</li>";
        }).join("");
      }
      var qMet = document.getElementById("proofMetric" + (i + 1));
      var qTxt = document.getElementById("proofQuote" + (i + 1));
      var qAut = document.getElementById("proofAuthor" + (i + 1));
      if (qMet && qTxt && qAut && data.proof[i]) {
        qMet.textContent = data.proof[i][0];
        qTxt.textContent = '"' + data.proof[i][1] + '"';
        qAut.textContent = data.proof[i][2];
      }
    }
    var footerBrand = document.getElementById("footerBrand");
    if (footerBrand) footerBrand.textContent = data.brand;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Light/dark mode persistence
    var modeBtn = document.getElementById("modeToggle");
    if (localStorage.getItem("smallbiz_light_mode") === "1") {
      document.body.classList.add("light-mode");
      if (modeBtn) modeBtn.textContent = "Dark Mode";
    }
    if (modeBtn) {
      modeBtn.addEventListener("click", function () {
        var isLight = document.body.classList.toggle("light-mode");
        modeBtn.textContent = isLight ? "Dark Mode" : "Light Mode";
        localStorage.setItem("smallbiz_light_mode", isLight ? "1" : "0");
      });
    }

    // Preset switch buttons
    document.querySelectorAll(".preset-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyPreset(btn.getAttribute("data-preset-key"));
      });
    });

    // Apply initial preset from body[data-preset]
    applyPreset(activePreset);

    // Mobile drawer
    var menuBtn = document.getElementById("menuBtn");
    var drawer = document.getElementById("mobileDrawer");
    if (menuBtn && drawer) {
      menuBtn.addEventListener("click", function () {
        var open = drawer.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      drawer.querySelectorAll("a, button").forEach(function (node) {
        node.addEventListener("click", function () {
          drawer.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    // FAQ accordion
    document.querySelectorAll(".faq-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        var open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    // Quote / Consultation modal
    var modal = document.getElementById("quoteModal");
    var closeBtn = document.getElementById("modalCloseBtn");
    var selectPkg = document.getElementById("quotePackage");
    var form = document.getElementById("quoteForm");
    var okBox = document.getElementById("quoteSuccess");

    document.querySelectorAll("[data-open-quote]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var chosen = trigger.getAttribute("data-open-quote");
        if (selectPkg && chosen) selectPkg.value = chosen;
        if (okBox) okBox.style.display = "none";
        if (modal) modal.classList.add("open");
      });
    });
    if (closeBtn && modal) {
      closeBtn.addEventListener("click", function () { modal.classList.remove("open"); });
      modal.addEventListener("click", function (e) {
        if (e.target === modal) modal.classList.remove("open");
      });
    }
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var clientName = document.getElementById("quoteName").value.trim() || "Partner";
        var clientEmail = document.getElementById("quoteEmail").value.trim();
        var pkg = selectPkg ? selectPkg.value : "Project Inquiry";
        if (SUBMIT_WEBHOOK_URL && clientEmail) {
          fetch(SUBMIT_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: clientName, email: clientEmail, package: pkg, industry: activePreset })
          }).catch(function () {});
        }
        if (okBox) {
          okBox.textContent = "Inquiry logged for " + clientName + " (" + pkg + "). Ready to wire live email notifications via SUBMIT_WEBHOOK_URL in assets/js/main.js.";
          okBox.style.display = "block";
        }
      });
    }
  });
})();
