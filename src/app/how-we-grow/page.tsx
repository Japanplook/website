import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


/* ─── Hero ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="pt-[104px] min-h-[80vh] flex flex-col md:flex-row items-center overflow-hidden bg-plook-blue">
      <div className="flex-1 px-8 md:px-16 py-12 flex flex-col gap-6">
        <h1 className="roca-headline text-plook-cream text-4xl md:text-5xl lg:text-6xl leading-tight max-w-xl">
          We Embed. We Monitor.<br />We Contract. We Deliver.
        </h1>
        <p className="roca-body text-white/75 text-base leading-relaxed max-w-md">
          Strengthening Asia&apos;s food security by transforming local farms into regional-standard food suppliers.
        </p>
      </div>
      <div className="flex-1 self-stretch relative min-h-[380px]">
        <Image
          src="/assets/main.png"
          alt="Farm fields"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

/* ─── Reusable Step section ───────────────────────────────────── */
interface StepProps {
  num: string;
  heading: string;
  body: string;
  bgClass: string;
  numClass: string;
  headingClass: string;
  bodyClass: string;
  visual: React.ReactNode;
  reverse?: boolean;
}

function Step({ num, heading, body, bgClass, numClass, headingClass, bodyClass, visual, reverse }: StepProps) {
  return (
    <section
      className={`py-20 px-8 md:px-16 flex flex-col items-center gap-12 ${bgClass} ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-1 flex flex-col gap-5">
        <span className={`roca-headline text-6xl md:text-8xl leading-none ${numClass}`}>{num}</span>
        <h2 className={`roca-headline text-3xl md:text-4xl leading-snug ${headingClass}`}>{heading}</h2>
        <p className={`roca-body text-base leading-relaxed max-w-lg opacity-80 ${bodyClass}`}>{body}</p>
      </div>
      <div className="flex-1 w-full">{visual}</div>
    </section>
  );
}

function StepImg({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}


/* ─── Ready to Partner CTA ────────────────────────────────────── */
function ReadyToPartner() {
  return (
    <section id="contact" className="py-24 px-8 text-center bg-plook-blue">
      <h2 className="roca-headline text-plook-cream text-4xl md:text-5xl mb-4">
        Ready to Partner?
      </h2>
      <p className="roca-body text-white/70 text-base mb-10 max-w-md mx-auto leading-relaxed">
        Whether you&apos;re a farmer looking for guaranteed offtake or a buyer
        seeking reliable supply — we&apos;d love to talk.
      </p>
      <a
        href="mailto:info@plook.ag"
        className="roca-body text-white/40 text-sm underline underline-offset-4 hover:text-white/70 transition-colors"
      >
        info@plook.ag
      </a>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function HowWeGrow() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Step
          num="01"
          heading="We Partner With Selected Farms."
          body="PLOOK installs sensors, satellite intelligence, and operational systems on our farm partners with no upfront cost. We work alongside farms as supply growth partners."
          bgClass="bg-plook-cream"
          numClass="text-plook-blue"
          headingClass="text-plook-blue"
          bodyClass="text-plook-forest"
          visual={
            <StepImg
              src="/assets/farms.jpg"
              alt="Partner farm"
            />
          }
        />

        <Step
          num="02"
          heading="We Monitor Yield Performance."
          body="We monitor yield performance across every stage of cultivation to help farms make better decisions, reduce uncertainty, and deliver more reliable harvest outcomes."
          bgClass="bg-plook-saltwater"
          numClass="text-plook-forest"
          headingClass="text-plook-forest"
          bodyClass="text-plook-forest"
          reverse
          visual={
            <StepImg
              src="/assets/02.png"
              alt="Yield monitoring"
            />
          }
        />

        <Step
          num="03"
          heading="We Contract-Purchase the Harvest."
          body="Our contract-purchase model aligns farm production with market demand, enabling the right harvest timing, quantity, and quality to consistently meet buyer requirements."
          bgClass="bg-plook-forest"
          numClass="text-plook-kiwi"
          headingClass="text-plook-cream"
          bodyClass="text-plook-cream"
          visual={<StepImg src="/assets/03.jpg" alt="Contract purchase harvest" />}
        />

        <Step
          num="04"
          heading="We Deliver to Buyers."
          body="We coordinate delivery operations based on buyer requirements, ensuring reliable fulfillment of the right products, quality, and timing across the supply chain."
          bgClass="bg-plook-cream"
          numClass="text-plook-blue"
          headingClass="text-plook-blue"
          bodyClass="text-plook-forest"
          reverse
          visual={
            <StepImg
              src="/assets/delivery.png"
              alt="Delivery to B2B buyers"
            />
          }
        />

        <ReadyToPartner />
      </main>
      <Footer />
    </>
  );
}
