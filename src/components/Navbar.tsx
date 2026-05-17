"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OrderModal from "./OrderModal";

const NAV_LINKS = [
  { label: "Our Produce", href: "/our-produce"  },
  { label: "How We Grow", href: "/how-we-grow" },
  { label: "Technology",  href: "/technology"   },
  { label: "About Us",    href: "/about"        },
];


export default function Navbar() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={`flex items-center justify-between px-8 py-1 transition-all duration-300 ${
            scrolled || pathname === "/technology" ? "bg-plook-blue shadow-sm" : "bg-transparent"
          }`}
        >
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image
              src="/assets/plook-cream-logo.png"
              alt="PLOOK"
              width={100}
              height={44}
              className="h-22 w-auto"
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`roca-body text-lg transition-colors hover:text-white ${
                      active
                        ? "text-plook-cream border-b border-white/60 pb-0.5"
                        : "text-white/85"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setModalOpen(true)}
            className="roca-cta text-sm px-5 py-2 rounded-full bg-plook-cream text-plook-blue hover:opacity-90 transition-opacity"
          >
            Order Now
          </button>
        </nav>
      </header>

      {modalOpen && <OrderModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
