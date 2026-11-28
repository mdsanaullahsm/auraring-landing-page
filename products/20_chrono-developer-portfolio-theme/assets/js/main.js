const CASES = {
  nexus: {
    tag: "SYSTEM 01 // LOW-LATENCY CORE",
    title: "Nexus Engine — Sub-Millisecond L3 Order Matching",
    img: "assets/images/nexus-topology.svg",
    summary: "Replaced legacy JVM matching cores with a pinned-core Rust LMAX disruptor ring buffer architecture supporting deterministic execution and zero GC stalls.",
    metrics: [
      ["Sustained Throughput", "2.4M orders/sec"],
      ["p99.9 Tail Latency", "180 microseconds"],
      ["Memory Alloc Rate", "0 bytes / hot loop"]
    ],
    code: "pub fn match_ring(slot: &mut RingSlot, order: Order) {\n  // Zero-allocation deterministic fill loop\n  while let Some(top) = book.best_bid_mut() {\n    if order.px <= top.px { fill_atomic(top, &order); } else { break; }\n  }\n}"
  },
  aegis: {
    tag: "SYSTEM 02 // INFRASTRUCTURE SECURITY",
    title: "Aegis Mesh — Multi-Region Zero-Trust Control Plane",
    img: "assets/images/aegis-mesh.svg",
    summary: "Built a SPIFFE/SPIRE automated mTLS identity mesh over Go + Envoy routing 2.4 billion daily RPC requests across 14 sovereign Kubernetes availability clusters.",
    metrics: [
      ["Daily Encrypted RPCs", "2.4 Billion / day"],
      ["Cert Rotation SLA", "< 15 min automatic"],
      ["Cross-AZ Overhead", "+0.4 ms median"]
    ],
    code: "func RotateWorkloadSVID(ctx context.Context, spiffeID string) error {\n  svid, err := workloadClient.FetchX509SVID(ctx)\n  return envoySDS.PushBundle(spiffeID, svid.Certificates)\n}"
  },
  wasm: {
    tag: "SYSTEM 03 // EDGE COMPUTE & AI",
    title: "WebGPU Inference Sandbox — Local Zero-Egress Runtime",
    img: "assets/images/wasm-sandbox.svg",
    summary: "Compiled quantized transformer inference kernels to Rust/WebAssembly + WebGPU compute shaders, cutting cloud GPU egress costs by 84% for browser enterprise apps.",
    metrics: [
      ["Data Privacy Guarantee", "100% On-Device"],
      ["First Token Latency", "140 ms (M3/RTX)"],
      ["Cloud Cost Saved", "-84% GPU Egress"]
    ],
    code: "@compute @workgroup_size(256)\nfn matmul_q4(@builtin(global_invocation_id) gid: vec3<u32>) {\n  // Dequantize packed 4-bit weights in shared register tile\n}"
  },
  ledger: {
    tag: "SYSTEM 04 // DISTRIBUTED STORAGE",
    title: "Kronos Raft Cluster — Replicated Write-Ahead Log",
    img: "assets/images/latency-bench.svg",
    summary: "Implemented multi-group Raft consensus storage in TypeScript/Go with deterministic simulation testing and zero-downtime snapshot streaming under chaos injection.",
    metrics: [
      ["Failover Recovery", "< 350 ms leader"],
      ["Simulation Chaos Runs", "1.2M fault seeds"],
      ["Data Durability", "Zero lost commits"]
    ],
    code: "async function appendEntries(term: number, entries: LogEntry[]): Promise<boolean> {\n  const acks = await quorumBroadcast(followers, { term, entries });\n  return acks >= Math.floor(cluster.size / 2) + 1;\n}"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      themeBtn.textContent = next === "light" ? "Dark Mode" : "Light Mode";
    });
  }

  const mobBtn = document.getElementById("mobileMenuBtn");
  const mobDrawer = document.getElementById("mobileDrawer");
  if (mobBtn && mobDrawer) {
    mobBtn.addEventListener("click", () => mobDrawer.classList.toggle("open"));
    mobDrawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobDrawer.classList.remove("open")));
  }

  // Tech stack filter pills
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tag = btn.getAttribute("data-filter");
      cards.forEach(c => {
        const stacks = (c.getAttribute("data-stack") || "").split(",");
        if (tag === "all" || stacks.includes(tag)) c.classList.remove("hidden");
        else c.classList.add("hidden");
      });
    });
  });

  // Case Study Drawer Modal
  const backdrop = document.getElementById("caseDrawer");
  const closeDrawer = document.getElementById("closeDrawerBtn");
  const openCase = (key) => {
    const d = CASES[key];
    if (!d || !backdrop) return;
    document.getElementById("drawerTag").textContent = d.tag;
    document.getElementById("drawerTitle").textContent = d.title;
    document.getElementById("drawerImg").src = d.img;
    document.getElementById("drawerSummary").textContent = d.summary;
    document.getElementById("drawerCode").textContent = d.code;
    document.getElementById("drawerMetrics").innerHTML = d.metrics.map(m =>
      `<div class="term-row"><span class="term-k">${m[0]}</span><span class="term-v">${m[1]}</span></div>`
    ).join("");
    backdrop.classList.add("open");
  };
  document.querySelectorAll("[data-case]").forEach(btn => btn.addEventListener("click", () => openCase(btn.getAttribute("data-case"))));
  if (closeDrawer) closeDrawer.addEventListener("click", () => backdrop.classList.remove("open"));
  if (backdrop) backdrop.addEventListener("click", (e) => { if (e.target === backdrop) backdrop.classList.remove("open"); });

  // Commit Activity Grid (52 weeks represented cleanly as 26x7 = 182 cells)
  const grid = document.getElementById("commitGrid");
  const totalOut = document.getElementById("commitTotal");
  const renderCommits = (year) => {
    if (!grid) return;
    grid.innerHTML = "";
    let sum = 0;
    const seedBase = year === "2025" ? 11 : 23;
    for (let i = 0; i < 182; i++) {
      const val = ((i * 17 + seedBase * (i % 7 + 3)) % 11);
      const lvl = val === 0 ? 0 : val < 4 ? 1 : val < 7 ? 2 : val < 9 ? 3 : 4;
      const cnt = lvl * 4 + (val % 3);
      sum += cnt;
      const cell = document.createElement("div");
      cell.className = "c-cell";
      cell.setAttribute("data-lvl", String(lvl));
      cell.title = `${year} Week ${(i % 26) + 1}: ${cnt} commits`;
      grid.appendChild(cell);
    }
    if (totalOut) totalOut.textContent = `${sum.toLocaleString()} production commits in ${year}`;
  };
  renderCommits("2026");
  document.querySelectorAll("[data-year]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-year]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCommits(btn.getAttribute("data-year"));
    });
  });

  // Advisory Retainer Estimator
  const wkSlider = document.getElementById("hoursSlider");
  const wkLabel = document.getElementById("hoursLabel");
  const feeOut = document.getElementById("retainerOut");
  if (wkSlider && wkLabel && feeOut) {
    const upd = () => {
      const hrs = Number(wkSlider.value);
      wkLabel.textContent = `${hrs} hrs / week`;
      feeOut.textContent = `$${(hrs * 4 * 250).toLocaleString()} / mo`;
    };
    wkSlider.addEventListener("input", upd);
    upd();
  }

  const form = document.getElementById("advisoryForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "Architecture inquiry logged. Wire assets/js/main.js to your Resend or Formspree webhook endpoint.";
      status.style.color = "var(--emerald)";
      form.reset();
    });
  }
});
