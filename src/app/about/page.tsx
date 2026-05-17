import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── Hero ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative pt-[104px] min-h-[60vh] flex items-center justify-center overflow-hidden bg-plook-blue">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/aboutus.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      <div className="relative z-10 px-8 md:px-24 py-16 md:max-w-5xl lg:max-w-7xl text-center">
        <p className="roca-subhead text-white/80 text-xl md:text-2xl lg:text-3xl leading-relaxed">
          PLOOK transforms the farming system behind reliable agriculture. We
          integrate AI-powered monitoring and intelligent farm operations across
          partner farms, secure their produce through contract purchasing, and
          deliver consistent, high-quality supply with freshness and taste you
          can trust.
        </p>
      </div>
    </section>
  );
}

/* ─── Mission ─────────────────────────────────────────────────── */
function Mission() {
  return (
    <section className="py-20 px-8 md:px-16 flex flex-col md:flex-row items-center gap-12 bg-plook-cream">
      {/* Text */}
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="roca-headline text-plook-blue text-3xl md:text-4xl lg:text-5xl leading-tight">
          Turn Thailand into the kitchen of Asia
        </h2>
        <p className="roca-body text-plook-forest/75 text-base leading-relaxed max-w-md">
          Despite employing nearly one-third of the workforce and almost half of
          the country&apos;s land, agriculture contributes less than 10% of
          Thailand&apos;s GDP.
        </p>
        <p className="roca-body text-plook-forest/75 text-base leading-relaxed max-w-md">
          PLOOK is redefining agriculture through an AI-powered farming system,
          transforming local farms into reliable regional-standard food
          suppliers to strengthen Asia&apos;s food security.
        </p>
      </div>
      {/* Image */}
      <div className="flex-1 relative h-80 md:h-[420px] w-full rounded-2xl overflow-hidden">
        <Image
          src="/assets/farm.avif"
          alt="Thai farm fields"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

/* ─── Team ────────────────────────────────────────────────────── */
const TEAM = [
  {
    name: "Trong (Muan) Longsomboon",
    role: "CEO & Co-Founder",
    bio: "",
    photo: "/assets/muan.jpg",
    linkedin: "https://www.linkedin.com/in/trong-muan-longsomboon/",
    email: "mailto:muan@plook.ag",
  },
  {
    name: "Gwynn (Gai) Elman Wijuntamook",
    role: "COO & Co-Founder",
    bio: "",
    photo: "/assets/gai.jpeg",
    linkedin: "https://www.linkedin.com/in/gwynnelman/",
    email: "mailto:gwynn@plook.ag",
  },
];

function TeamCard({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center gap-4 shadow-sm border border-plook-saltwater/50">
      <div className="relative w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p className="roca-headline text-plook-forest text-xl leading-snug">
          {member.name}
        </p>
        <p className="roca-subhead text-plook-blue text-sm mt-1">
          {member.role}
        </p>
      </div>
      <div className="flex gap-3 mt-1">
        <a
          href={member.linkedin}
          className="w-9 h-9 rounded-full !bg-plook-blue flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4" style={{ fill: "white" }} viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href={member.email}
          className="w-9 h-9 rounded-full !bg-plook-blue flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Email"
        >
          <svg className="w-4 h-4" style={{ fill: "white" }} viewBox="0 0 24 24">
            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Team() {
  return (
    <section className="py-20 px-8 md:px-16 bg-plook-cream">
      <div className="roca-headline text-plook-blue text-4xl md:text-5xl text-center mb-14">
        Our Team
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {TEAM.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Team />
      </main>
      <Footer />
    </>
  );
}
