"use client";

import { UHNI_SECTION_META } from "@/data/uhni-section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

const CTA_STYLES = {
  primary:
    "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-teal",
  secondary:
    "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full border border-brand-navy/20 bg-white px-6 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal",
} as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay, ease: REVEAL_EASE }}
    >
      {children}
    </motion.div>
  );
}

function InclusionCell({ item }: { item: string; }) {
  return (
    <li className="flex items-start gap-3 bg-white p-5 sm:p-6">
      <span className="mt-0.5 shrink-0 font-inter text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
        —
      </span>
      <span className="font-inter text-sm leading-relaxed text-brand-navy/75 md:text-base">
        {item}
      </span>
    </li>
  );
}

export function UHNISection({ className }: { className?: string; }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="uhni"
      className={cn(
        "relative w-full overflow-hidden bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40",
        className,
      )}
      aria-labelledby="uhni-section-heading"
    >
      {/* MODIFIED: Removed max-w-[1400px] and stripped outer wrapper card borders/padding so everything stretches edge to edge */}
      <div className="w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7 lg:pr-4">
            <Reveal>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal">
                {UHNI_SECTION_META.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                id="uhni-section-heading"
                className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-brand-navy md:text-5xl lg:text-6xl"
              >
                {UHNI_SECTION_META.heading[0]}
                <span className="mt-1 block text-brand-teal">
                  {UHNI_SECTION_META.heading[1]}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl font-inter text-base leading-relaxed text-brand-navy/70 md:text-lg">
                {UHNI_SECTION_META.description}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5 lg:border-l-[1.5px] lg:border-brand-navy/10 lg:pl-10">
            <Reveal delay={0.2}>
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-navy/45 sm:text-xs">
                Private mandate
              </p>
              <p className="mt-3 font-display text-2xl font-medium tracking-tight text-brand-navy md:text-3xl">
                142 families
              </p>
              <p className="mt-2 font-inter text-sm leading-relaxed text-brand-navy/60">
                India &amp; the diaspora — one coordinated relationship across every protection
                decision.
              </p>
            </Reveal>
          </div>
        </div>

        {/* MODIFIED: Changed aspect ratio slightly to [25/9] or custom height so the image scales nicely across widescreen monitor widths */}
        <Reveal delay={0.24} className="mt-12 md:mt-16">
          <div className="relative aspect-[25/9] w-full overflow-hidden rounded-xl border-[1.5px] border-brand-navy/20 bg-brand-cream">
            {!imageFailed ? (
              <Image
                src={UHNI_SECTION_META.image.src}
                alt={UHNI_SECTION_META.image.alt}
                fill
                className="object-cover"
                sizes="100vw"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-teal/10 to-brand-gold/10" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white sm:bottom-8 sm:left-8 sm:text-xs">
              {UHNI_SECTION_META.caption}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.32} className="mt-12 md:mt-16">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy/50">
            What the mandate includes
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-[1.5px] overflow-hidden rounded-lg border-[1.5px] border-brand-navy/20 bg-brand-navy/20 sm:grid-cols-2 lg:grid-cols-3">
            {UHNI_SECTION_META.inclusions.map((item) => (
              <InclusionCell key={item} item={item} />
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4 border-t-[1.5px] border-brand-navy/10 pt-10">
            {UHNI_SECTION_META.ctas.map((cta) => (
              <Link key={cta.href} href={cta.href} className={CTA_STYLES[cta.variant]}>
                {cta.label}
                {cta.variant === "primary" ? (
                  <ArrowRight className="h-4 w-4" aria-hidden />
                ) : null}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}