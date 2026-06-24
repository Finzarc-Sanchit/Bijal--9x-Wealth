"use client";

import { parseMetricDisplay, SITE_METRICS } from "@/data/site-metrics";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type StatsSectionStat = {
  id: string;
  value: number;
  suffix: string;
  labelLines: readonly string[];
};

export type StatsSectionCta = {
  label: string;
  href: string;
};

export type StatsSectionProps = {
  className?: string;
  id?: string;
  ariaLabel?: string;
  headline?: string;
  leftCopy?: string;
  stats?: readonly StatsSectionStat[];
  primaryCta?: StatsSectionCta;
  secondaryCta?: StatsSectionCta;
};

const DEFAULT_STATS: readonly StatsSectionStat[] = [
  {
    id: "premiums",
    ...parseMetricDisplay(SITE_METRICS.premiumsCrore),
    labelLines: ["Crore in annual", "premiums"],
  },
  {
    id: "families",
    ...parseMetricDisplay(SITE_METRICS.familiesProtected),
    labelLines: ["Families", "protected"],
  },
  {
    id: "years",
    ...parseMetricDisplay(SITE_METRICS.yearsInPractice),
    labelLines: ["Years of", "counsel"],
  },
];

const DEFAULT_LEFT_COPY =
  "Transparent planning, creditor-aware structures, and protection that endures across generations. We bridge institutional precision with bespoke family office advisory to safeguard your legacy against volatile market shifts.";

const DEFAULT_PRIMARY_CTA: StatsSectionCta = {
  label: "Explore services",
  href: "/services",
};

const DEFAULT_SECONDARY_CTA: StatsSectionCta = {
  label: "Book a consultation",
  href: "/#consultation-form",
};

const DIVIDER_EASE = [0.22, 1, 0.36, 1] as const;

function EditorialStatValue({
  value,
  suffix,
  isInView,
  className,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span className={cn("flex items-baseline", className)}>
      <span className="font-poppins text-[clamp(5rem,10vw,11.25rem)] font-light leading-[0.9] tracking-[-0.05em] text-brand-navy tabular-nums">
        {display.toLocaleString("en-IN")}
      </span>
      <span className="font-poppins text-[clamp(2.5rem,5vw,4.5rem)] font-extralight leading-none tracking-[-0.05em] text-brand-navy">
        {suffix}
      </span>
    </span>
  );
}

function StatDivider({ isInView }: { isInView: boolean; }) {
  return (
    <motion.div
      className="h-[2px] w-full origin-left bg-brand-navy"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isInView ? 1 : 0 }}
      transition={{ duration: 0.85, ease: DIVIDER_EASE }}
      aria-hidden
    />
  );
}

function EditorialStatRow({ stat }: { stat: StatsSectionStat }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, amount: 0.35 });

  return (
    <div ref={rowRef} className="w-full">
      <div className="pb-8 pt-10 md:pb-10 md:pt-12 lg:pb-12 lg:pt-14">
        <StatDivider isInView={isInView} />
      </div>

      <div
        className="grid min-w-0 grid-cols-1 items-center gap-6 pb-10 sm:grid-cols-[1fr_1.5fr] sm:gap-8 md:pb-12 lg:gap-10 lg:pb-14"
        aria-label={`${stat.value.toLocaleString("en-IN")}${stat.suffix} ${stat.labelLines.join(" ")}`}
      >
        <EditorialStatValue
          value={stat.value}
          suffix={stat.suffix}
          isInView={isInView}
          className="min-w-0 max-w-full [&>span:first-child]:text-[clamp(4.5rem,18vw,11.25rem)] [&>span:last-child]:text-[clamp(2.25rem,9vw,4.5rem)] sm:[&>span:first-child]:text-[clamp(5rem,10vw,11.25rem)] sm:[&>span:last-child]:text-[clamp(2.5rem,5vw,4.5rem)]"
        />
        <p className="font-inter min-w-0 w-full max-w-full self-center break-words border-l border-brand-navy/5 pl-4 text-right text-xl font-medium tracking-normal text-brand-navy sm:pl-0 sm:text-2xl sm:leading-snug lg:text-[1.65rem]">
          {stat.labelLines.join(" ")}
        </p>
      </div>
    </div>
  );
}

export function StatsSection({
  className,
  id,
  ariaLabel = "Key impact metrics",
  headline = "Our impact in numbers",
  leftCopy = DEFAULT_LEFT_COPY,
  stats = DEFAULT_STATS,
  primaryCta = DEFAULT_PRIMARY_CTA,
  secondaryCta = DEFAULT_SECONDARY_CTA,
}: StatsSectionProps) {
  const footerRef = useRef<HTMLDivElement>(null);
  const footerInView = useInView(footerRef, { once: true, amount: 0.35 });

  return (
    <section
      id={id}
      className={cn(
        "section-py bg-brand-cream px-4 md:px-12 lg:px-16",
        className,
      )}
      aria-label={ariaLabel}
    >
      <div className="mx-auto w-full max-w-full">
        <div className="grid grid-cols-1 items-start gap-16 md:gap-20 lg:grid-cols-[1.1fr_1.9fr] lg:gap-24 xl:gap-32">
          {/* Left — sticky editorial copy & CTAs */}
          <div className="max-w-xl lg:sticky lg:top-32">
            <h2 className="mb-6 font-poppins text-4xl font-medium uppercase tracking-tight !leading-[0.92] text-brand-navy">
              {headline}
            </h2>
            <p className="font-inter font-normal leading-[1.5] text-brand-navy">{leftCopy}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={primaryCta.href}
                className="font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-6 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={secondaryCta.href}
                className="font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-teal"
              >
                {secondaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Right — down-shifted editorial metrics */}
          <div className="w-full min-w-0 lg:mt-32">
            <div className="flex flex-col">
              {stats.map((stat) => (
                <EditorialStatRow key={stat.id} stat={stat} />
              ))}
              <div ref={footerRef} className="pt-10 md:pt-12 lg:pt-14">
                <StatDivider isInView={footerInView} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
