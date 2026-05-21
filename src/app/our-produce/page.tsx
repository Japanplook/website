"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

/* ─── Types ───────────────────────────────────────────────────── */
type SpecRow    = { label: string; value: string };
type CompareRow = { label: string; col1: string; col2: string };
type Specs =
  | { type: "single";  rows: SpecRow[] }
  | { type: "compare"; headers: [string, string]; rows: CompareRow[] };

type Produce = {
  name: string;
  subtitle: string;
  img: string;
  imgAlt: string;
  bgClass: string;
  imageLeft: boolean;
  originStory: string;
  specs: Specs;
};

/* ─── Data ────────────────────────────────────────────────────── */
const PRODUCE: Produce[] = [
  {
    name: "Vanilla",
    subtitle: "Vanilla planifolia · Khao Yai, Nakhon Ratchasima",
    img: "/assets/vanilla.jpg",
    imgAlt: "Vanilla pods on fabric",
    bgClass: "bg-plook-cream",
    imageLeft: true,
    originStory:
      "Khao Yai's elevation brings cool nights of 15–22°C — rare in tropical Thailand, essential for vanilla. Granmonte, Thailand's largest vanilla operation, spent 10 years perfecting hand-pollination, vine training, and traditional curing before producing a bean that rivals Madagascar. PLOOK's Field Agent monitors every vine through each growth stage, ensuring every intervention — especially the critical 12-hour pollination window — happens at exactly the right moment.",
    specs: {
      type: "single",
      rows: [
        { label: "Variety",           value: "Vanilla planifolia (Bourbon type)" },
        { label: "Origin",            value: "Khao Yai, Nakhon Ratchasima · 400–800 masl" },
        { label: "Vanillin content",  value: "Grade A: ≥ 2.0% · Grade B: 1.5–1.9%" },
        { label: "Bean length",       value: "Grade A: 16 cm+ · Grade B: 13–15 cm" },
        { label: "Moisture content",  value: "25–38% (cured)" },
        { label: "Curing method",     value: "Traditional sun-sweat-shade · 4–6 months" },
        { label: "Aroma profile",     value: "Deep floral, creamy, woody base — no off-odour" },
      ],
    },
  },
  {
    name: "Avocado",
    subtitle: "Hass & Phop Phra · Tak Province, Northern Thailand",
    img: "/assets/avocado.jpg",
    imgAlt: "Fresh avocados",
    bgClass: "bg-plook-saltwater",
    imageLeft: false,
    originStory:
      "Tak's orchards sit at 800–1,000 metres — the exact altitude band where wide day-night temperature swings and excellent drainage produce avocado at its best. Two varieties thrive here. Hass delivers the dark-skinned, nutty richness global buyers trust. Phop Phra is Tak's own — larger, green-skinned even when ripe, butter-smooth and distinctly Thai. PLOOK tracks dry matter development through the final growth weeks, predicting harvest readiness 10–14 days in advance.",
    specs: {
      type: "compare",
      headers: ["Hass", "Phop Phra"],
      rows: [
        { label: "Origin",             col1: "Tak Province · 800–1,000 masl", col2: "Tak Province · 800–1,000 masl" },
        { label: "Fruit weight",       col1: "180–280 g",                     col2: "280–400 g" },
        { label: "Dry matter",         col1: "23–26%",                        col2: "21–24%" },
        { label: "Skin colour (ripe)", col1: "Dark purple-black",             col2: "Green" },
        { label: "Texture",            col1: "Creamy, rich, nutty",           col2: "Buttery, smooth, mild" },
        { label: "Harvest season",     col1: "February – May",                col2: "March – June" },
        { label: "Shelf life",         col1: "14–21 days at 5–7°C",          col2: "12–18 days at 5–7°C" },
      ],
    },
  },
  {
    name: "Mango Nam Dok Mai",
    subtitle: "Chiang Mai & Suphanburi",
    img: "/assets/mango.jpg",
    imgAlt: "Nam Dok Mai mangoes",
    bgClass: "bg-plook-cream",
    imageLeft: true,
    originStory:
      "Nam Dok Mai — “flower water” — is Thailand’s most prized export mango. Fibre-free, thin-skinned, and extraordinarily fragrant, it demands precise harvest timing to deliver its full aromatic potential. Chiang Mai produces a more complex, floral fruit — cooler flowering nights extend the developmental window and concentrate flavour. Suphanburi delivers consistent sizing and brightness for export-grade commercial supply. PLOOK monitors Brix development through the final 14 days of maturation, flagging the exact harvest window before it closes.",
    specs: {
      type: "compare",
      headers: ["Chiang Mai", "Suphanburi"],
      rows: [
        { label: "Variety",        col1: "Nam Dok Mai Si Thong",          col2: "Nam Dok Mai Si Thong" },
        { label: "Brix at harvest",col1: "18–22°",                        col2: "17–21°" },
        { label: "Fruit weight",   col1: "250–350 g",                     col2: "300–450 g" },
        { label: "Fibre content",  col1: "Fibre-free",                    col2: "Fibre-free" },
        { label: "Aroma profile",  col1: "Floral, jasmine note, complex", col2: "Sweet, clean, tropical" },
        { label: "Harvest season", col1: "March – May",                   col2: "February – April" },
        { label: "Shelf life",     col1: "10–14 days at 13°C",            col2: "12–16 days at 13°C" },
      ],
    },
  },
  {
    name: "Coconut Nam Hom",
    subtitle: "Banphaeo, Samut Sakhon",
    img: "/assets/coconut.jpg",
    imgAlt: "Fresh young coconuts",
    bgClass: "bg-plook-saltwater",
    imageLeft: false,
    originStory:
      "Nam Hom — “fragrant water” — is not a marketing claim. The natural jasmine-floral aroma of this coconut is unique to one place: the tidal lowlands of Banphaeo, where alluvial clay soil carries mild natural salinity from the Tha Chin River basin. That salinity mineralises the water naturally, creating depth no freshwater orchard replicates. Recognised by the Thai Department of Agriculture as a Geographical Indication product, Banphaeo Nam Hom cannot be grown anywhere else. PLOOK tracks fruit maturity signals to hit the precise window when water volume and Brix peak simultaneously.",
    specs: {
      type: "single",
      rows: [
        { label: "Variety",          value: "Nam Hom Aromatic Dwarf" },
        { label: "Origin",           value: "Banphaeo, Samut Sakhon · GI Protected" },
        { label: "Water volume",     value: "300–400 ml per fruit" },
        { label: "Brix",             value: "6–8° (peak at 7–8 months)" },
        { label: "Aroma profile",    value: "Jasmine-floral, clean finish, crystal clear water" },
        { label: "Harvest maturity", value: "6–8 months from fruit set" },
        { label: "Shelf life",       value: "14–21 days refrigerated (whole fruit)" },
      ],
    },
  },
];

/* ─── Spec table ──────────────────────────────────────────────── */
function SpecTable({ specs }: { specs: Specs }) {
  if (specs.type === "single") {
    return (
      <div className="bg-white rounded-2xl p-6 mt-6">
        <p className="roca-headline text-plook-forest text-xs tracking-widest uppercase mb-4">
          Product Specifications
        </p>
        <table className="w-full text-sm border-collapse">
          <tbody>
            {specs.rows.map((row) => (
              <tr key={row.label} className="border-b border-plook-forest/10 last:border-0">
                <td className="roca-headline text-plook-forest/50 py-3 pr-6 whitespace-nowrap align-top w-[42%]">
                  {row.label}
                </td>
                <td className="roca-body text-plook-forest py-3 leading-snug">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 mt-6 overflow-x-auto">
      <p className="roca-headline text-plook-forest text-xs tracking-widest uppercase mb-4">
        Product Specifications
      </p>
      <table className="w-full text-sm border-collapse min-w-90">
        <thead>
          <tr className="border-b-2 border-plook-forest/10">
            <th className="text-left pb-3 pr-6 w-[30%]" />
            {specs.headers.map((h) => (
              <th key={h}
                className="text-left pb-3 pr-4 roca-headline text-plook-forest text-xs tracking-widest uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specs.rows.map((row) => (
            <tr key={row.label} className="border-b border-plook-forest/10 last:border-0">
              <td className="roca-headline text-plook-forest/50 py-3 pr-6 whitespace-nowrap align-top text-xs">
                {row.label}
              </td>
              <td className="roca-body text-plook-forest py-3 pr-4 align-top leading-snug">{row.col1}</td>
              <td className="roca-body text-plook-forest py-3 align-top leading-snug">{row.col2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Single produce section ──────────────────────────────────── */
function ProduceSection({ produce }: { produce: Produce }) {
  const { name, subtitle, img, imgAlt, bgClass, imageLeft, originStory, specs } = produce;

  const image = (
    <div className="relative w-full h-80 md:h-[520px] rounded-2xl overflow-hidden shadow-sm flex-shrink-0 md:max-w-sm lg:max-w-md">
      <Image src={img} alt={imgAlt} fill className="object-cover" />
    </div>
  );

  const text = (
    <div className="flex-1 flex flex-col gap-5">
      <div>
        <h2 className="roca-headline text-plook-forest text-4xl md:text-5xl">{name}</h2>
        <p className="roca-subhead text-plook-forest/60 text-sm mt-1">{subtitle}</p>
      </div>

      <div>
        <p className="roca-headline text-plook-blue text-xs tracking-widest uppercase mb-2">
          Origin Story
        </p>
        <p className="roca-body text-plook-forest/80 text-sm leading-relaxed">{originStory}</p>
      </div>

      <SpecTable specs={specs} />
    </div>
  );

  return (
    <section className={`py-20 px-8 md:px-16 ${bgClass}`}>
      <div className={`max-w-6xl mx-auto flex flex-col gap-12 items-center ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
        {image}
        {text}
      </div>
    </section>
  );
}

/* ─── Hero ────────────────────────────────────────────────────── */
function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="pt-26 pb-20 px-8 md:px-16 bg-plook-blue text-center">
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
