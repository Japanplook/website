import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Mock UI: Field Agent card ──────────────────────────────── */
function FieldAgentMock() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-gray-100">
        <div className="w-8 h-8 rounded-full bg-plook-blue flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="roca-headline text-plook-forest text-sm leading-none">Field Agent</p>
          <p className="roca-body text-plook-forest/40 text-[10px] mt-0.5">Farm Intelligence Layer</p>
        </div>
        <span className="flex items-center gap-1.5 roca-body text-[10px] text-plook-green px-2 py-0.5 bg-green-50 rounded-full border border-green-100">
          <span className="w-1.5 h-1.5 bg-plook-green rounded-full" />
          Active
        </span>
      </div>
      {/* Farm */}
      <div className="px-4 pt-3 pb-2">
        <p className="roca-body text-plook-forest/35 text-[9px] uppercase tracking-widest mb-0.5">Currently monitoring</p>
        <p className="roca-headline text-plook-forest text-sm">Granmonte Vanilla Farm · Chiang Rai</p>
      </div>
      {/* Metric bars */}
      <div className="px-4 pb-4 space-y-2.5">
        {[
          { label: "Crop Health Index",  val: 92, color: "#aaba13" },
          { label: "Soil Moisture",       val: 68, color: "#1d62db" },
          { label: "Harvest Readiness",   val: 45, color: "#ffda00" },
        ].map(({ label, val, color }) => (
          <div key={label}>
            <div className="flex justify-between mb-1">
              <span className="roca-body text-plook-forest/60 text-xs">{label}</span>
              <span className="roca-headline text-plook-forest text-xs">{val}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${val}%`, backgroundColor: color }} />
            </div>
          </div>
        ))}
      </div>
      {/* Harvest forecast */}
      <div className="mx-4 mb-3 px-3 py-2.5 rounded-xl flex items-center justify-between bg-blue-50 border border-blue-100">
        <div>
          <p className="roca-body text-plook-forest/45 text-[9px] uppercase tracking-widest">Harvest Window</p>
          <p className="roca-headline text-plook-forest text-sm">12–14 days</p>
        </div>
        <span className="roca-headline text-[9px] px-2 py-0.5 rounded-full bg-plook-kiwi text-plook-forest">High Conf.</span>
      </div>
      {/* Connected data sources */}
      <div className="mx-4 mb-4 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100">
        <p className="roca-body text-plook-forest/35 text-[9px] uppercase tracking-widest mb-2">Connected data sources</p>
        <div className="flex gap-2">
          {["Cropin Satellite", "IoT Sensors", "Weather API", "DEWS"].map((src) => (
            <span key={src} className="roca-body text-plook-forest/55 text-[9px] px-2 py-0.5 rounded-full bg-white border border-gray-200">
              {src}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mock UI: Flow Agent node diagram ───────────────────────── */
function FlowAgentMock() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-gray-100">
        <div className="w-8 h-8 rounded-full bg-plook-green flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="roca-headline text-plook-forest text-sm leading-none">Flow Agent</p>
          <p className="roca-body text-plook-forest/40 text-[10px] mt-0.5">Supply Operations Layer</p>
        </div>
        <span className="flex items-center gap-1.5 roca-body text-[10px] text-plook-green px-2 py-0.5 bg-green-50 rounded-full border border-green-100">
          <span className="w-1.5 h-1.5 bg-plook-green rounded-full" />
          Active
        </span>
      </div>
      {/* Node graph */}
      <div
        className="relative h-56"
        style={{ backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)", backgroundSize: "18px 18px" }}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="23%" y1="27%" x2="47%" y2="50%" stroke="#1d62db" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.5" />
          <line x1="23%" y1="50%" x2="47%" y2="50%" stroke="#1d62db" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.5" />
          <line x1="23%" y1="73%" x2="47%" y2="50%" stroke="#1d62db" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.5" />
          <line x1="53%" y1="50%" x2="77%" y2="33%" stroke="#2da947" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.5" />
          <line x1="53%" y1="50%" x2="77%" y2="67%" stroke="#2da947" strokeWidth="1.5" strokeDasharray="5 3" strokeOpacity="0.5" />
        </svg>
        {/* Farm nodes */}
        <div className="absolute left-3 top-4 flex flex-col gap-2.5">
          {[{ name: "Farm A", crop: "Vanilla" }, { name: "Farm B", crop: "Avocado" }, { name: "Farm C", crop: "Mango" }].map(({ name, crop }) => (
            <div key={name} className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-plook-blue flex-shrink-0" />
              <div>
                <p className="roca-headline text-plook-forest text-[10px] leading-none">{name}</p>
                <p className="roca-body text-plook-forest/40 text-[9px] leading-none mt-0.5">{crop}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Center node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-plook-blue rounded-xl px-3 py-2 shadow-lg text-center min-w-[80px]">
            <p className="roca-body text-white/50 text-[8px] uppercase tracking-widest">PLOOK OS</p>
            <p className="roca-headline text-white text-xs">Flow Agent</p>
          </div>
        </div>
        {/* Buyer nodes */}
        <div className="absolute right-3 top-8 flex flex-col gap-4">
          {[{ name: "Buyer X", region: "Japan" }, { name: "Buyer Y", region: "Singapore" }].map(({ name, region }) => (
            <div key={name} className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-plook-green flex-shrink-0" />
              <div>
                <p className="roca-headline text-plook-forest text-[10px] leading-none">{name}</p>
                <p className="roca-body text-plook-forest/40 text-[9px] leading-none mt-0.5">{region}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Status badge */}
        <div className="absolute bottom-3 right-4 flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-2.5 py-1 shadow-sm">
          <span className="w-1.5 h-1.5 bg-plook-green rounded-full" />
          <span className="roca-body text-plook-green text-[10px]">All orders matched</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="pt-[104px] bg-white">
      <div className="px-8 md:px-16 py-16 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col gap-6">
          <span className="inline-block self-start roca-headline text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-plook-blue/25 text-plook-blue">
            PLOOK Technology
          </span>
          <div className="roca-headline text-plook-forest text-4xl md:text-5xl lg:text-6xl leading-tight">
            Code the Future<br />of Farming.
          </div>
          <p className="roca-body text-plook-forest/55 text-lg leading-relaxed max-w-md">
            AI-powered farming infrastructure. From yield optimization to operational workflows
            that enable reliable and scalable food supply.
          </p>
        </div>
        <div className="flex-1 relative h-80 md:h-[460px] w-full rounded-3xl overflow-hidden">
          <Image
            src="/assets/factory.png"
            alt="PLOOK farming technology"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Agent Builder section (Relevance AI style) ─────────────── */
function AgentBuilders() {
  return (
    <section className="py-20 px-8 md:px-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Field Agent */}
          <div>
            <h3 className="roca-headline text-plook-forest text-2xl mb-2">Field Agent</h3>
            <p className="roca-body text-plook-forest/55 text-sm leading-relaxed mb-6 max-w-sm">
              AI-powered field operations agent for crop monitoring, farm coordination, and yield performance visibility.
            </p>
            <FieldAgentMock />
          </div>

          {/* Flow Agent */}
          <div>
            <h3 className="roca-headline text-plook-forest text-2xl mb-2">Flow Agent</h3>
            <p className="roca-body text-plook-forest/55 text-sm leading-relaxed mb-6 max-w-sm">
              AI-powered supply coordination agent for harvest planning, delivery operations, and reliable buyer fulfillment.
            </p>
            <FlowAgentMock />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Field Agent features (CommodityAI reference style) ────── */
function FieldAgentDetail() {
  const NODES = [
    { label: "Sensor Reading",   sub: "Captured",   x: "8%",  y: "72%" },
    { label: "Plot Analysed",    sub: "Validated",  x: "26%", y: "52%" },
    { label: "Task Generated",   sub: "Confirmed",  x: "46%", y: "34%" },
    { label: "LINE OA Sent",     sub: "Dispatched", x: "64%", y: "18%", active: true },
    { label: "Farmer Verified",  sub: "Complete",   x: "82%", y: "8%"  },
  ];

  return (
    <section className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">

        {/* ── Top row: headline left + pipeline flow right ── */}
        <div className="grid md:grid-cols-3 border-b border-gray-200">
          {/* Left: text */}
          <div className="p-10 flex flex-col justify-center gap-4 border-r border-gray-200">
            <span className="inline-block self-start roca-headline text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-plook-blue/25 text-plook-blue">
              Field Agent
            </span>
            <h2 className="roca-headline text-plook-forest text-2xl md:text-3xl leading-snug">
              Farm intelligence,<br />from signal to action.
            </h2>
            <p className="roca-body text-plook-forest/55 text-sm leading-relaxed">
              Satellite and sensor data runs through three AI layers to produce precise daily
              farm instructions — delivered automatically to every farmer.
            </p>
          </div>

          {/* Right: pipeline flow diagram */}
          <div className="md:col-span-2 relative h-64 overflow-hidden bg-gray-50/50">
            {/* SVG connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path
                d="M 8% 72% Q 17% 52% 26% 52% Q 36% 52% 46% 34% Q 55% 18% 64% 18% Q 73% 18% 82% 8%"
                fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 3"
                vectorEffect="non-scaling-stroke"
              />
              {NODES.map(({ x, y, active }) => (
                <circle key={x} cx={x} cy={y} r="4" fill={active ? "#2da947" : "#d1d5db"} />
              ))}
            </svg>
            {/* Node labels */}
            {NODES.map(({ label, sub, x, y, active }) => (
              <div
                key={label}
                className="absolute -translate-x-1/2 -translate-y-full pb-3"
                style={{ left: x, top: y }}
              >
                <div className={`bg-white border rounded-xl px-3 py-2 shadow-sm whitespace-nowrap ${active ? "border-plook-green/40" : "border-gray-200"}`}>
                  <p className={`roca-headline text-xs ${active ? "text-plook-green" : "text-plook-forest"}`}>{label}</p>
                  <p className="roca-body text-plook-forest/35 text-[10px]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom: 3-col feature cards ── */}
        <div className="grid md:grid-cols-3 divide-x divide-gray-200">

          {/* Card 1: Satellite & IoT */}
          <div className="p-8 flex flex-col gap-5">
            <div className="relative h-40 rounded-xl overflow-hidden border border-gray-100">
              <Image src="/assets/satellite.png" alt="Satellite view of farm" fill className="object-cover" />
            </div>
            <div>
              <h3 className="roca-headline text-plook-forest text-lg mb-2">Satellite & IoT Sensors</h3>
              <p className="roca-body text-plook-forest/55 text-sm leading-relaxed">
                Cropin satellite imagery (NDVI, biomass, disease alerts) every 3 days, combined
                with ground IoT sensors for soil and microclimate — feeding a single farm digital twin.
              </p>
            </div>
          </div>

          {/* Card 2: Local AI Brain */}
          <div className="p-8 flex flex-col gap-5">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 h-40 flex flex-col justify-between">
              <p className="roca-body text-plook-forest/35 text-[9px] uppercase tracking-widest">AI Processing</p>
              <div className="space-y-2.5">
                {[
                  { step: "Contextual AI",   note: "Thai soil · Khao Yai microclimate", done: true  },
                  { step: "Prescriptive AI", note: "→ Irrigate Plot 3 · 45 min",        done: true  },
                  { step: "Operating AI",    note: "Verifying execution...",             done: false },
                ].map(({ step, note, done }) => (
                  <div key={step} className="flex items-start gap-2">
                    <span className={`mt-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 ${done ? "bg-plook-kiwi" : "bg-gray-200"}`}>
                      {done && <svg className="w-2 h-2 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                    </span>
                    <div>
                      <p className="roca-headline text-plook-forest text-[10px] leading-none">{step}</p>
                      <p className="roca-body text-plook-forest/40 text-[9px] mt-0.5">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="roca-headline text-plook-forest text-lg mb-2">Local AI Brain</h3>
              <p className="roca-body text-plook-forest/55 text-sm leading-relaxed">
                Three AI layers trained on Thai crops — Contextual, Prescriptive, and Operating AI
                convert signals into verified farmer actions.
              </p>
            </div>
          </div>

          {/* Card 3: Farmer Execution */}
          <div className="p-8 flex flex-col gap-5">
            <div className="relative h-40 rounded-xl overflow-hidden border border-gray-100">
              <Image src="/assets/operation.png" alt="Farmer execution via LINE OA" fill className="object-cover" />
            </div>
            <div>
              <h3 className="roca-headline text-plook-forest text-lg mb-2">Farmer Execution via LINE OA</h3>
              <p className="roca-body text-plook-forest/55 text-sm leading-relaxed">
                Daily task cards pushed to farmers' phones with step-by-step SOPs and photo
                verification — confirmed before supply is committed to any buyer.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Flow Agent mock UIs ─────────────────────────────────────── */


function QualityGradingMock() {
  const checks = [
    { label: "Brix > 16",             buyer: "Buyer X spec", pass: true  },
    { label: "Moisture > 25%",        buyer: "Contract min",  pass: true  },
    { label: "Length ≥ 16 cm",        buyer: "Buyer X spec", pass: true  },
    { label: "Skin 90% clean",        buyer: "Export grade",  pass: false },
  ];
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="roca-body text-plook-forest/40 text-[9px] uppercase tracking-widest">Quality Check · Lot #4821</p>
        <span className="roca-body text-[9px] px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100">3 / 4 passed</span>
      </div>
      <div className="space-y-2">
        {checks.map(({ label, buyer, pass }) => (
          <div key={label} className="flex items-center gap-2.5">
            <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${pass ? "bg-plook-kiwi" : "bg-red-100"}`}>
              {pass
                ? <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                : <svg className="w-2.5 h-2.5 text-red-400" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              }
            </span>
            <p className="roca-headline text-plook-forest text-[10px] flex-1">{label}</p>
            <p className="roca-body text-plook-forest/35 text-[9px]">{buyer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogisticsMock() {
  const orders = [
    { id: "ORD-2841", farm: "Farm A · Vanilla",  eta: "Today 14:00",    done: true  },
    { id: "ORD-2842", farm: "Farm B · Avocado",  eta: "Tomorrow 09:00", done: false },
    { id: "ORD-2843", farm: "Farm C · Mango",    eta: "Mar 18 · 11:00", done: false },
  ];
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="roca-body text-plook-forest/40 text-[9px] uppercase tracking-widest">Active Deliveries</p>
        <span className="roca-body text-[9px] px-2 py-0.5 rounded-full bg-blue-50 text-plook-blue border border-blue-100">3 orders</span>
      </div>
      <div className="space-y-2">
        {orders.map(({ id, farm, eta, done }) => (
          <div key={id} className="bg-white border border-gray-200 rounded-xl px-3 py-2 flex items-center gap-3">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${done ? "bg-plook-green" : "bg-plook-blue"}`} />
            <div className="flex-1 min-w-0">
              <p className="roca-headline text-plook-forest text-[10px] truncate">{farm}</p>
              <p className="roca-body text-plook-forest/40 text-[9px]">{id}</p>
            </div>
            <p className="roca-body text-plook-forest/50 text-[9px] whitespace-nowrap">{eta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Flow Agent features (CommodityAI 2×2 reference style) ───── */
function FlowAgentDetail() {
  const cells = [
    {
      title: "Harvest Signal",
      desc: "Flow agent forecasts supply patterns and matches them with business demand patterns.",
      visual: (
        <div className="relative h-48 rounded-2xl overflow-hidden border border-gray-200">
          <Image src="/assets/harvest-signal.png" alt="Harvest Signal" fill className="object-cover" />
        </div>
      ),
    },
    {
      title: "Supply Management",
      desc: "Flow agent uses intelligent SKU matching and handles variations, seasonal change, and product substitutions.",
      visual: (
        <div className="relative h-48 rounded-2xl overflow-hidden border border-gray-200">
          <Image src="/assets/supplym.png" alt="Supply Management" fill className="object-cover" />
        </div>
      ),
    },
    {
      title: "Quality Grading",
      desc: "Uses customer-specific intelligence to learn their order quirks, preferred specs, and purchasing rhythm.",
      visual: <QualityGradingMock />,
    },
    {
      title: "Logistics & Inventory",
      desc: "Flow agent coordinates with farmers, tracks order confirmations, and monitors delivery schedules.",
      visual: <LogisticsMock />,
    },
  ];

  return (
    <section className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="px-10 md:px-16 pt-16 pb-10 border-b border-gray-200">
          <span className="inline-block roca-headline text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-plook-forest/20 text-plook-forest mb-4">
            Flow Agent
          </span>
          <h2 className="roca-headline text-plook-forest text-3xl md:text-4xl mb-3">
            Supply operation, powered by Agentic AI
          </h2>
          <p className="roca-body text-plook-forest/55 text-base max-w-md leading-relaxed">
            Flow agent works natively with farmer operational systems and industry data sources,
            so workflows stay current without replatforming.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 divide-y divide-x divide-gray-200">
          {cells.map(({ title, desc, visual }) => (
            <div key={title} className="p-10 md:p-12 flex flex-col gap-6">
              <div>
                <h3 className="roca-headline text-plook-forest text-2xl md:text-3xl leading-snug mb-3">{title}</h3>
                <p className="roca-body text-plook-forest/55 text-sm leading-relaxed">{desc}</p>
              </div>
              {visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─── Page ────────────────────────────────────────────────────── */
export default function Technology() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AgentBuilders />
        <FieldAgentDetail />
        <FlowAgentDetail />
      </main>
      <Footer />
    </>
  );
}
