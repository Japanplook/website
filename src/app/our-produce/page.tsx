"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

/* ─── Data ────────────────────────────────────────────────────── */
const PRODUCE = [
  {
    name: "Vanilla",
    img: "/assets/vanilla.jpg",
    imgAlt: "Vanilla pods on fabric",
    bgClass: "bg-plook-cream",
    imageLeft: true,
    originStory:
      "Thailand's vanilla orchids bloom in the misty highlands of Khao Yai, where elevation, humidity, and sun converge to produce some of the world's finest vanilla beans. The region's unique microclimate — cool nights, humid days, and rich volcanic soil — creates ideal conditions for vanilla cultivation. Thai farmers first introduced vanilla to the region in the early 1980s, and it wasn't until the farmers mastered hand-pollination techniques that commercial production became viable.",
    howWeGrowIt: [
      "Each flower blooms for only 8 hours — hand-pollinated at dawn.",
      "Each orchid takes 3 months to set a bean.",
      "Beans require 6 months to reach full length before harvest.",
      "Distinctive floral notes develop through correct fermentation.",
      "PLOOK AI monitors soil and temperature throughout maturation.",
    ],
    stats: [
      { label: "Season",          value: "Year-round harvest" },
      { label: "Growth Duration", value: "9 months from pollination to harvest" },
      { label: "Yield",           value: "2–3 kg per plant annually" },
      { label: "Export Grade",    value: "Contract Certified" },
    ],
    qualityStandards: [
      "Minimum 16 cm bean length with moisture content above 25%",
      "Each bean is individually inspected for length, moisture content, and aroma",
      "Delivered to specification via PLOOK-verified good practices via Thailand's Department of Agriculture",
    ],
  },
  {
    name: "Avocado",
    img: "/assets/avocado.jpg",
    imgAlt: "Fresh avocados",
    bgClass: "bg-plook-saltwater",
    imageLeft: false,
    originStory:
      "We only plant Hass avocado cultivars where altitude already satisfies the avocado's altitude range — from 500 to 1,200 meters — reliably. Avocados grow best in specialist soil where ideal temperatures allow for slow ripening, which produces richer oils and creamier flesh. Through careful farm selection and precise monitoring, PLOOK has made Thai Hass avocado into a premium export product.",
    howWeGrowIt: [
      "Altitude-matched farms selected for optimal canopy health and fruit development.",
      "Satellite monitoring tracks canopy health and fruit development.",
      "Irrigation sensors maintain optimal soil moisture daily.",
      "Careful irrigation to 2 hours of draining.",
    ],
    stats: [
      { label: "Season",          value: "March – September" },
      { label: "Growth Duration", value: "12–16 months from flowering to harvest" },
      { label: "Yield",           value: "60–80 kg per mature tree" },
      { label: "Export Grade",    value: "Contract Certified" },
    ],
    qualityStandards: [
      "Minimum fat content of 8% confirmed per lot.",
      "Each fruit is graded by size, color, and density.",
      "PLOOK AI confirms harvest window within 2-day precision.",
      "Cold-chain from farm gate to buyer within 36 hours.",
    ],
  },
  {
    name: "Mango",
    img: "/assets/mango.jpg",
    imgAlt: "Nam Dok Mai mangoes",
    bgClass: "bg-plook-cream",
    imageLeft: true,
    originStory:
      "Chiang Mai's Nam Dok Mai mangoes are celebrated across Asia for their honey-sweet flavor and silky texture — a result of centuries of cultivation in Thailand's northern highlands. The variety produces fruit with near-zero fiber, deep yellow flesh, and an unmistakable floral aroma. In season from March to June, PLOOK designates it as the go-to product for nutritional teas and smoothies.",
    howWeGrowIt: [
      "Ethylene induction determines blossom and flowering timing.",
      "AI-powered flowering tracking enables weekly yield forecasts.",
      "Care analysis determines optimal planting windows.",
      "Strategic daily sugar content and skin appearance.",
    ],
    stats: [
      { label: "Season",          value: "March – June" },
      { label: "Growth Duration", value: "3–4 months from flowering to harvest" },
      { label: "Yield",           value: "100–150 fruits per tree" },
      { label: "Export Grade",    value: "Contract Certified" },
    ],
    qualityStandards: [
      "Brix level confirmed above 16 for each harvest lot.",
      "Each fruit must clear above 90% clean skin with no blemishes.",
      "Packed in single-layer trays to protect skin integrity during export.",
      "Full traceability to orchard row and harvest date on every carton.",
    ],
  },
  {
    name: "Coconut",
    img: "/assets/coconut.jpg",
    imgAlt: "Fresh young coconuts",
    bgClass: "bg-plook-saltwater",
    imageLeft: false,
    originStory:
      "Southern Thailand's coconut groves produce young coconuts prized for their sweet water and tender meat — a tradition that has sustained communities for generations. PLOOK's partner farms in the Surat Thani and Chumphon provinces supply young coconuts — harvested at the ideal 7-month stage — for domestic premium buyers and international export markets that demand consistent quality and food-safe production.",
    howWeGrowIt: [
      "Optimal irrigation improves density and nut steam.",
      "Frond management at optimal harvest stage.",
      "Produce quality monitored at harvest ready stage.",
      "Tested safely at pre-cut and ready.",
      "Harvest timing to freshness via the PLOOK app.",
    ],
    stats: [
      { label: "Season",          value: "Year-round harvest" },
      { label: "Growth Duration", value: "7 months to young coconut stage" },
      { label: "Yield",           value: "80–90 nuts per tree annually" },
      { label: "Export Grade",    value: "Contract Certified" },
    ],
    qualityStandards: [
      "Coconut water volume minimum 350 ml per nut, confirmed via weight sampling.",
      "Outer husk trimmed and sanitised to buyer specification.",
      "Harvested and delivered within 48 hours — never stored longer than 3 days.",
      "Full farm origin and harvest date on every pallet.",
    ],
  },
];



/* ─── Quality card ────────────────────────────────────────────── */
function QualityCard({ points }: { points: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 mt-6">
      <p className="roca-headline text-plook-forest text-sm mb-4 tracking-wide">Product Specifications</p>
      <ul className="space-y-2.5">
        {points.map((pt) => (
          <li key={pt} className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-plook-kiwi flex-shrink-0" />
            <span className="roca-body text-plook-forest/80 text-sm leading-relaxed">{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Single produce section ──────────────────────────────────── */
function ProduceSection({ produce }: { produce: typeof PRODUCE[number] }) {
  const { name, img, imgAlt, bgClass, imageLeft, originStory, qualityStandards } = produce;

  const image = (
    <div className="relative w-full h-80 md:h-[520px] rounded-2xl overflow-hidden shadow-sm flex-shrink-0 md:max-w-sm lg:max-w-md">
      <Image src={img} alt={imgAlt} fill className="object-cover" />
    </div>
  );

  const text = (
    <div className="flex-1 flex flex-col gap-5">
      <h2 className="roca-headline text-plook-forest text-4xl md:text-5xl">{name}</h2>

      <div>
        <p className="roca-headline text-plook-blue text-xs tracking-widest uppercase mb-2">Origin Story</p>
        <p className="roca-body text-plook-forest/80 text-sm leading-relaxed">{originStory}</p>
      </div>


      <QualityCard points={qualityStandards} />
    </div>
  );

  return (
    <section className={`py-20 px-8 md:px-16 ${bgClass}`}>
      <div className={`flex flex-col gap-12 items-start ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
        {image}
        {text}
      </div>
    </section>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */
function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="pt-[104px] pb-20 px-8 md:px-16 bg-plook-blue text-center">
      <div className="roca-headline text-plook-cream text-5xl md:text-6xl mb-5">Our Produce</div>
      <p className="roca-subhead text-white/70 text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-8">
        Four crops. Four regions. One guarantee: monitored, contracted, and delivered with data, not guesswork.
      </p>
      <button
        onClick={onOrder}
        className="roca-cta px-8 py-3 rounded-full text-sm bg-plook-cream text-plook-blue hover:opacity-90 transition-opacity"
      >
        Order Now
      </button>
    </section>
  );
}


/* ─── Page ────────────────────────────────────────────────────── */
export default function OurProduce() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Navbar />
      <main>
        <Hero onOrder={() => setModalOpen(true)} />
        {PRODUCE.map((p) => (
          <ProduceSection key={p.name} produce={p} />
        ))}
      </main>
      <Footer />
      {modalOpen && <OrderModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
