import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


/* ─── Hero — full-viewport, cinematic ───────────────────────── */
function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <Image
        src="/assets/hero.png"
        alt="Fresh quality produce"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* Gradient overlay — light at top (for nav), rich blue at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-plook-blue/60 via-plook-blue/30 to-plook-forest/80" />

      {/* Content — bottom-left, Bowery style */}
      <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-24 max-w-4xl">
        <p className="roca-body text-plook-cream/60 text-xs tracking-[0.25em] uppercase mb-4">
          AI farming system for a reliable food supply
        </p>
        <h1 className="roca-headline not-italic text-plook-cream text-5xl md:text-7xl lg:text-8xl leading-none mb-8" style={{ fontStyle: "normal" }}>
          Fresh &amp; quality produce you can trust.
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

/* ─── Brand statement (Bowery "What grows here…" equivalent) ─ */
function BrandStatement() {
  return (
    <section className="bg-plook-cream py-24 px-8 md:px-16 text-center">
      <p className="roca-subhead text-plook-forest text-2xl md:text-4xl lg:text-5xl leading-snug max-w-3xl mx-auto">
        Our AI farming system transforms unreliable supply into predictable quality buyers can trust.
      </p>
    </section>
  );
}

/* ─── Mission + How We Work — merged section ─────────────────── */
function Mission() {
  const steps = [
    { id: "01", label: "EMBED",    desc: "We partner with selected farms to deploy our technology that improves yield quality control",  dotBg: "bg-plook-kiwi",  labelColor: "text-plook-kiwi"  },
    { id: "02", label: "MONITOR",  desc: "We monitor yield performance and help farms make better decisions to improve yield predictability and outcomes.",               dotBg: "bg-plook-blue",  labelColor: "text-plook-blue"  },
    { id: "03", label: "CONTRACT", desc: "We contract-purchase farm production with market demand. No market risk for the farmer.", dotBg: "bg-plook-green", labelColor: "text-plook-green" },
    { id: "04", label: "DELIVER",  desc: "We coordinate delivery operations to ensure reliable fulfillment of the right products, quality, and timing.",        dotBg: "bg-plook-cream", labelColor: "text-plook-cream" },
  ];

  return (
    <section className="bg-plook-forest">
      {/* Top: mission split */}
      <div className="px-8 md:px-16 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="roca-headline text-plook-cream text-3xl md:text-4xl leading-snug">
            We embed. We monitor.<br />We contract. We deliver.
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col gap-3">
                <span className={`${s.dotBg} w-14 h-14 rounded-full flex items-center justify-center roca-headline text-plook-forest text-base`}>
                  {s.id}
                </span>
                <p className={`${s.labelColor} roca-headline text-lg tracking-widest`}>{s.label}</p>
                <p className="roca-body text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="/how-we-grow"
            className="roca-cta text-plook-cream text-sm inline-flex items-center gap-1 border-b border-plook-cream/40 pb-0.5 self-start hover:border-plook-cream transition-colors"
          >
            See How We Grow →
          </a>
        </div>
        <div className="flex-1 relative h-80 md:h-[500px] w-full rounded-2xl overflow-hidden">
          <Image
            src="/assets/we-embed.png"
            alt="Aerial view of Thai farmers harvesting marigolds"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Products — Bowery-style editorial cards ────────────────── */
const PRODUCTS = [
  { name: "Vanilla",  category: "Highland Orchid",  img: "/assets/vanilla.jpg",  href: "/our-produce#vanilla"  },
  { name: "Avocado",  category: "Hass Variety",     img: "/assets/avocado.jpg",  href: "/our-produce#avocado"  },
  { name: "Mango",    category: "Nam Dok Mai",      img: "/assets/mango.jpg",    href: "/our-produce#mango"    },
  { name: "Coconut",  category: "Young Coconut",    img: "/assets/coconut.jpg",  href: "/our-produce#coconut"  },
];

function Products() {
  return (
    <section className="bg-plook-cream pt-20 pb-8 px-8 md:px-16">
      <div className="flex items-end justify-between mb-10">
        <h2 className="roca-headline text-plook-blue text-3xl md:text-5xl leading-tight">
          Grown With Purpose
        </h2>
        <a
          href="/our-produce"
          className="roca-cta text-plook-blue text-sm hidden md:inline-flex items-center gap-1 border-b border-plook-blue/40 pb-0.5 hover:border-plook-blue transition-colors"
        >
          All Produce →
        </a>
      </div>

      {/* Bowery-style 4-col card grid — no rounded corners on image, flush */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-plook-forest/10">
        {PRODUCTS.map((p) => (
          <a key={p.name} href={p.href} className="group bg-plook-cream flex flex-col overflow-hidden">
            <div className="relative h-56 md:h-72 overflow-hidden">
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between p-4 pt-3">
              <div>
                <p className="roca-body text-plook-forest/50 text-xs tracking-widest uppercase mb-0.5">{p.category}</p>
                <p className="roca-headline text-plook-forest text-lg">{p.name}</p>
              </div>
              <span className="w-8 h-8 rounded-full bg-plook-blue flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-plook-forest transition-colors">
                <svg className="w-3.5 h-3.5 text-white fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-center mt-8 md:hidden">
        <a href="/our-produce" className="roca-cta text-sm px-7 py-2.5 rounded-full bg-plook-blue text-plook-cream hover:opacity-90 transition-opacity">
          All Produce →
        </a>
      </div>
    </section>
  );
}



/* ─── Technology banner ──────────────────────────────────────── */
function OS() {
  return (
    <section id="technology" className="bg-plook-cream py-12 px-8 md:px-16">
      <div className="relative overflow-hidden rounded-3xl bg-plook-forest">
        <Image
          src="/assets/tech.jpg"
          alt="PLOOK Technology"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative z-10 px-10 md:px-16 py-16 md:py-20 max-w-2xl">
          <p className="roca-body text-plook-kiwi text-xs tracking-[0.25em] uppercase mb-4">
            PLOOK Technology
          </p>
          <h2 className="roca-headline text-plook-cream text-3xl md:text-5xl leading-tight mb-5">
            Making Farms Programmable
          </h2>
          <p className="roca-body text-white/55 text-sm leading-relaxed max-w-sm mb-8">
            We&apos;re building AI farming system for a reliable food supply
          </p>
          <a
            href="/technology"
            className="roca-cta px-7 py-2.5 rounded-full text-sm bg-plook-cream text-plook-blue hover:opacity-90 transition-opacity inline-block"
          >
            Explore Our Technology →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="bg-plook-forest py-24 px-8 md:px-16 text-center">
      <h2 className="roca-headline text-plook-cream text-4xl md:text-5xl mb-3">Contact us</h2>
      <p className="roca-body text-white/60 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
        Whether you&apos;re a buyer, a farmer, or a partner — we&apos;d love to hear from you.
      </p>
      <a href="mailto:info@plook.ag" className="roca-body text-white/40 text-sm underline underline-offset-4 hover:text-white/70 transition-colors">info@plook.ag</a>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <Mission />
        <Products />
        <OS />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
