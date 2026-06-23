"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type MetricCardData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

export type GlassCardMetricsCta = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

export type GlassCardMetricsProps = {
  headline: string;
  leftCopy: string;
  items: readonly MetricCardData[];
  ctas?: readonly GlassCardMetricsCta[];
  className?: string;
  eyebrow: string;
};

const CARD_REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

function MetricsCta({ label, href, isPrimary = false }: GlassCardMetricsCta) {
  const isExternal = href.startsWith("http");

  const className = isPrimary
    ? "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-teal"
    : "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-6 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal";

  const inner = (
    <>
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={false} className={className}>
      {inner}
    </Link>
  );
}

function PracticeStyledProcessCardRow({ item }: { item: MetricCardData; }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, amount: 0.2 });
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div ref={rowRef} className="w-full pb-8 last:pb-0">
      <motion.article
        /* Applied base aesthetic background permanently, removed scale/bg transitions from hover states */
        className={cn(
          "relative flex min-h-[360px] w-full flex-col overflow-hidden rounded-xl p-8 sm:min-h-[400px] sm:p-10 lg:min-h-[440px] lg:p-12",
          "bg-[#2d3136] text-white border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.75, ease: CARD_REVEAL_EASE }}
        aria-labelledby={`${item.id}-title`}
      >
        {/* Background Image Layer — Set directly to a comfortable baseline opacity */}
        {!imageFailed ? (
          <Image
            src={item.imageSrc}
            alt=""
            fill
            className="object-cover opacity-45"
            sizes="(max-width: 1024px) 92vw, 800px"
            onError={() => setImageFailed(true)}
            aria-hidden
          />
        ) : null}

        {/* Unified Direct Mask Layers — Active permanently with a calibrated contrast filter */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2d3136]/50 via-black/40 to-black/60 opacity-100"
          aria-hidden
        />

        {/* Content Layout Element Array */}
        <div className="relative z-10 flex flex-col w-full h-full justify-between items-start grow mt-auto">
          <div className="w-full flex flex-col mt-auto">

            <span className="font-poppins text-xs font-semibold tracking-wider text-brand-gold uppercase mb-2">
              Commitment {item.id}
            </span>

            <h3
              id={`${item.id}-title`}
              className="font-display text-2xl font-normal leading-tight tracking-tight text-white md:text-3xl lg:text-4xl"
            >
              {item.title}
            </h3>

            <p className="mt-4 font-inter text-base leading-relaxed text-white/90 max-w-3xl">
              {item.description}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function GlassCardMetricsSection({
  headline,
  leftCopy,
  items,
  ctas,
  className,
  eyebrow,
}: GlassCardMetricsProps) {
  return (
    <section
      className={cn(
        "section-py px-4 md:px-12 lg:px-16",
        className,
      )}
      aria-label={headline}
    >
      <div className="mx-auto w-full max-w-full">
        <div className="grid grid-cols-1 items-start gap-16 md:gap-20 lg:grid-cols-[1.1fr_1.9fr] lg:gap-24 xl:gap-32">

          {/* Left Column — Sticky Area */}
          <div className="max-w-xl lg:sticky lg:top-32">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal">
              {eyebrow}
            </p>
            <h2 className="mb-6 font-poppins text-3xl font-medium uppercase tracking-tight !leading-[1.1] text-brand-navy sm:text-4xl">
              {headline}
            </h2>
            <p className="font-inter font-normal leading-[1.6] text-brand-navy/80">{leftCopy}</p>

            {ctas && ctas.length > 0 ? (
              <div className="mt-10 flex flex-wrap gap-4">
                {ctas.map((cta) => (
                  <MetricsCta key={`${cta.href}-${cta.label}`} {...cta} />
                ))}
              </div>
            ) : null}
          </div>

          {/* Right Column — Static Grid List */}
          <div className="w-full min-w-0 lg:mt-4">
            <div className="flex flex-col">
              {items.map((item) => (
                <PracticeStyledProcessCardRow
                  key={item.id}
                  item={item}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}