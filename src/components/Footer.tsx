import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-plook-forest px-8 md:px-16 pt-14 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/assets/plook-cream-logo.png"
            alt="PLOOK"
            width={100}
            height={44}
            className="h-22 w-auto mb-3"
          />
          <p className="roca-body text-white/50 text-xs leading-relaxed">
            PLOOK VENTURES Company Limited · Thailand
          </p>
        </div>

        <div>
          <p className="roca-headline text-white/40 text-xs tracking-widest uppercase mb-4">
            Navigation
          </p>
          <ul className="space-y-2">
            {[
              { label: "How We Grow", href: "/how-we-grow" },
              { label: "Our Produce", href: "/our-produce" },
              { label: "Technology",  href: "/technology"  },
              { label: "About Us",    href: "/about"       },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="roca-body text-white/70 text-sm hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="roca-headline text-white/40 text-xs tracking-widest uppercase mb-4">
            Contact
          </p>
          <ul className="space-y-2">
            <li>
              <a href="mailto:info@plook.ag" className="roca-body text-white/70 text-sm hover:text-white transition-colors">
                info@plook.ag
              </a>
            </li>
            <li>
              <a href="mailto:farm@plook.ag" className="roca-body text-white/70 text-sm hover:text-white transition-colors">
                farm@plook.ag
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" className="roca-body text-white/50 text-sm hover:text-white transition-colors">IG</a>
            <a href="#" className="roca-body text-white/50 text-sm hover:text-white transition-colors">in</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <p className="roca-body text-white/30 text-xs text-center">
          © 2026 PLOOK VENTURES Company Limited · Thailand
        </p>
      </div>
    </footer>
  );
}
