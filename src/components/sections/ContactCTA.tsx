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

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
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
              <a href="mailto:practice@9xwealth.in" className={CTA_STYLES.secondary}>
                practice@9xwealth.in
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/20 bg-white/15 md:grid-cols-3">
          {offices.map((o, i) => (
            <Reveal key={o.city} delay={i * 0.06} className="h-full">
              {/* Converted card wrapper into a flex-column layout */}
              <div className="flex h-full flex-col bg-white/95 p-10 backdrop-blur-sm">
                <div className="mb-6 flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-normal text-brand-navy shrink-0">{o.city}</h3>
                  <span className="photo-caption text-right text-brand-gold/80 text-xs tracking-wider uppercase">{o.label}</span>
                </div>

                {/* Enforced a strict minimum height so 2-line and 3-line addresses match perfectly */}
                <p className="whitespace-pre-line font-inter text-[14px] leading-[1.8] text-brand-navy/55 min-h-[4.5rem]">
                  {o.address}
                </p>

                {/* Anchored phone number cleanly to the card floor across all items */}
                <div className="mt-auto pt-4">
                  <a
                    href={`tel:${o.tel}`}
                    className="inline-block font-mono text-[13px] text-brand-navy/70 transition-colors hover:text-brand-gold"
                  >
                    {o.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}