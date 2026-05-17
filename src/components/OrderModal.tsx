"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  onClose: () => void;
}

export default function OrderModal({ onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  /* Close on backdrop click */
  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
    >
      <div className="relative w-full max-w-lg bg-plook-cream rounded-3xl shadow-2xl p-8 md:p-10 overflow-y-auto max-h-[90vh]">

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-plook-forest/60 hover:text-plook-forest hover:bg-plook-forest/10 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth={2}>
            <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        {submitted ? (
          /* ── Success state ── */
          <div className="flex flex-col items-center text-center gap-5 py-8">
            <div className="w-16 h-16 rounded-full bg-plook-green/15 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-plook-green" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="roca-headline text-plook-forest text-2xl">Request received!</h2>
            <p className="roca-body text-plook-forest/70 text-sm leading-relaxed max-w-xs">
              We&apos;ll review your supply needs and get back to you within 1–2 business days.
            </p>
            <button
              onClick={onClose}
              className="roca-cta mt-2 px-8 py-3 rounded-full text-sm bg-plook-blue text-plook-cream hover:opacity-90 transition-opacity"
            >
              Done
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <>
            <h2 className="roca-headline text-plook-forest text-2xl md:text-3xl mb-1">
              Request Supply Order
            </h2>
            <p className="roca-subhead text-plook-forest/60 text-sm mb-7">
              Fill in your details and we&apos;ll get back to you shortly
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Email row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="roca-headline text-plook-forest text-sm">
                    Name <span className="text-plook-blue">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="roca-body bg-white rounded-2xl px-4 py-3 text-sm text-plook-forest placeholder-plook-forest/30 outline-none focus:ring-2 focus:ring-plook-blue/30 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="roca-headline text-plook-forest text-sm">
                    Email <span className="text-plook-blue">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="roca-body bg-white rounded-2xl px-4 py-3 text-sm text-plook-forest placeholder-plook-forest/30 outline-none focus:ring-2 focus:ring-plook-blue/30 transition"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label className="roca-headline text-plook-forest text-sm">
                  Company <span className="text-plook-blue">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company name"
                  className="roca-body bg-white rounded-2xl px-4 py-3 text-sm text-plook-forest placeholder-plook-forest/30 outline-none focus:ring-2 focus:ring-plook-blue/30 transition"
                />
              </div>

              {/* Business type */}
              <div className="flex flex-col gap-1.5">
                <label className="roca-headline text-plook-forest text-sm">
                  What kind of business do you operate? <span className="text-plook-blue">*</span>
                </label>
                <select
                  required
                  defaultValue=""
                  className="roca-body bg-white rounded-2xl px-4 py-3 text-sm text-plook-forest outline-none focus:ring-2 focus:ring-plook-blue/30 transition appearance-none"
                >
                  <option value="" disabled>Select business type</option>
                  <option>Trader / Merchant</option>
                  <option>Wholesaler / Distributor</option>
                  <option>Exporter / Importer</option>
                  <option>Processor / Refiner / Manufacturer</option>
                  <option>Restaurant / Food Business</option>
                  <option>Hotels</option>
                  <option>Retail Stores / Retail Business</option>
                  <option>Others</option>
                </select>
              </div>

              {/* When do you want it */}
              <div className="flex flex-col gap-1.5">
                <label className="roca-headline text-plook-forest text-sm">
                  When do you want it? <span className="text-plook-blue">*</span>
                </label>
                <select
                  required
                  defaultValue=""
                  className="roca-body bg-white rounded-2xl px-4 py-3 text-sm text-plook-forest outline-none focus:ring-2 focus:ring-plook-blue/30 transition appearance-none"
                >
                  <option value="" disabled>Select timeline</option>
                  <option>Immediately (next 30 days)</option>
                  <option>Within 3 months</option>
                  <option>3–6 months</option>
                  <option>6+ months</option>
                  <option>Just exploring options</option>
                </select>
              </div>

              {/* Produce needed */}
              <div className="flex flex-col gap-2">
                <label className="roca-headline text-plook-forest text-sm">
                  Produce needed <span className="text-plook-blue">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Vanilla", "Avocado", "Mango", "Coconut"].map((crop) => (
                    <label
                      key={crop}
                      className="flex items-center gap-2.5 bg-white rounded-2xl px-4 py-2.5 cursor-pointer hover:bg-plook-blue/5 transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="produce"
                        value={crop}
                        className="w-4 h-4 accent-plook-blue rounded flex-shrink-0"
                      />
                      <span className="roca-body text-plook-forest text-sm">{crop}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Volume + Destination row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="roca-headline text-plook-forest text-sm">Volume</label>
                  <input
                    type="text"
                    placeholder="e.g. 200 kg / month"
                    className="roca-body bg-white rounded-2xl px-4 py-3 text-sm text-plook-forest placeholder-plook-forest/30 outline-none focus:ring-2 focus:ring-plook-blue/30 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="roca-headline text-plook-forest text-sm">Destination</label>
                  <input
                    type="text"
                    placeholder="e.g. Tokyo, Japan"
                    className="roca-body bg-white rounded-2xl px-4 py-3 text-sm text-plook-forest placeholder-plook-forest/30 outline-none focus:ring-2 focus:ring-plook-blue/30 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="roca-headline text-plook-forest text-sm">Message</label>
                <textarea
                  rows={3}
                  placeholder="Any other details about your supply needs..."
                  className="roca-body bg-white rounded-2xl px-4 py-3 text-sm text-plook-forest placeholder-plook-forest/30 outline-none focus:ring-2 focus:ring-plook-blue/30 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="roca-cta w-full py-3.5 rounded-full text-sm bg-plook-blue text-plook-cream hover:opacity-90 transition-opacity mt-1"
              >
                Submit Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
