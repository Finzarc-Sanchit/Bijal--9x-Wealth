"use client";

import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight } from "lucide-react";

const offices = [
  {
    city: "Mumbai",
    label: "Principal Office",
    address: "11th Floor, Maker Maxity\nBandra Kurla Complex, 400051",
    phone: "+91 22 6157 9000",
    tel: "+912261579000",
  },
  {
    city: "Bengaluru",
    label: "South India Practice",
    address: "UB City, Vittal Mallya Road\nLavelle Nagar, 560001",
    phone: "+91 80 4567 1200",
    tel: "+918045671200",
  },
  {
    city: "New Delhi",
    label: "North India Practice",
    address: "Tower B, DLF Cyber Park\nGolf Course Road, Gurugram 122002",
    phone: "+91 11 4012 8800",
    tel: "+911140128800",
  },
];

const CTA_STYLES = {
  primary:
    "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-gold-light",
  secondary:
    "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/20",
} as const;

export function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden bg-[url('/images/cta-background.webp')] bg-cover bg-center bg-no-repeat py-32 md:py-44"
    >
      <div className="absolute inset-0 z-0 bg-black/55" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-[87.5rem] px-6 md:px-12 lg:px-24">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <Reveal>
            <p className="label text-brand-gold">Begin a Conversation</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="contact-cta-heading"
              className="mt-8 font-display text-5xl font-light leading-[1.05] tracking-[-0.030em] text-white md:text-6xl lg:text-7xl"
            >
              When you are ready,
              <span className="block text-brand-gold">we will listen.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-10 font-inter text-[16px] font-light leading-[1.75] text-white/85">
              Engagements begin with a confidential conversation — at our offices, your residence,
              or over a private dinner. There is no fee, no obligation, and no public footprint.
              A senior partner will respond within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className={CTA_STYLES.primary}>
                Schedule a Conversation
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              {/* <a href="mailto:practice@9xwealth.in" className={CTA_STYLES.secondary}>
                practice@9xwealth.in
              </a> */}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
          {offices.map((o, i) => (
            <Reveal key={o.city} delay={i * 0.06} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden bg-brand-navy-light p-11 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-2px_8px_rgba(0,0,0,0.22)] ring-1 ring-inset ring-white/[0.06] transition-[box-shadow,ring-color] duration-500 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.09),inset_0_-2px_12px_rgba(0,0,0,0.28)] hover:ring-white/[0.09]">
                {/* Warm ambient wash — ties cards to CTA hero lighting */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-gold/[0.06] via-transparent to-brand-navy/40"
                  aria-hidden
                />
                {/* Subtle walnut-grain texture mask */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
                  style={{
                    backgroundImage: [
                      "repeating-linear-gradient(92deg, transparent 0px, transparent 3px, rgba(201,162,39,0.35) 3px, rgba(201,162,39,0.35) 4px)",
                      "repeating-linear-gradient(178deg, transparent 0px, transparent 14px, rgba(255,255,255,0.12) 14px, rgba(255,255,255,0.12) 15px)",
                      "repeating-linear-gradient(4deg, transparent 0px, transparent 28px, rgba(10,22,40,0.25) 28px, rgba(10,22,40,0.25) 30px)",
                    ].join(", "),
                  }}
                  aria-hidden
                />

                <div className="relative z-10 flex h-full flex-col">
                  <p className="font-inter text-[10px] font-light uppercase tracking-[0.32em] text-brand-gold">
                    {o.label}
                  </p>

                  <div className="mb-7 mt-5 flex items-start gap-4">
                    <span
                      className="mt-2 h-6 w-[2px] shrink-0 bg-brand-gold"
                      aria-hidden
                    />
                    <h3 className="font-display text-[1.65rem] font-normal leading-[1.15] tracking-tight text-white/95 md:text-[1.75rem]">
                      {o.city}
                    </h3>
                  </div>

                  <p className="min-h-[4.5rem] whitespace-pre-line font-inter text-[14px] leading-[1.8] text-white/85">
                    {o.address}
                  </p>

                  <div className="mt-auto border-t border-white/[0.08] pt-5">
                    <a
                      href={`tel:${o.tel}`}
                      className="inline-block font-mono text-[13px] tracking-wide text-white/70 transition-colors duration-300 hover:text-brand-gold-light"
                    >
                      {o.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}