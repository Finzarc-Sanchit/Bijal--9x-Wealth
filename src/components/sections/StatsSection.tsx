"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PREMIUM_STATS = [
  {
    id: "premiums",
    value: 10000,
    suffix: "+",
    labelLines: ["Crore in annual", "premiums"] as const,
  },
  {
    id: "families",
    value: 2400,
    suffix: "+",
    labelLines: ["Families", "protected"] as const,
  },
  {
    id: "stewardship",
    value: 12,
    suffix: "+",
    labelLines: ["Years of", "stewardship"] as const,
  },
] as const;

const LEFT_COPY =
  "Disciplined stewardship for Mumbai families — transparent planning, creditor-aware structures, and protection that endures across generations. We bridge institutional precision with bespoke family office advisory to safeguard your legacy against volatile market shifts.";

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

function EditorialStatRow({ stat }: { stat: (typeof PREMIUM_STATS)[number]; }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, amount: 0.35 });

  return (
    <div ref={rowRef} className="w-full">
      <div className="pb-8 pt-10 md:pb-10 md:pt-12 lg:pb-12 lg:pt-14">
        <StatDivider isInView={isInView} />
      </div>

      <div
        className="grid grid-cols-[1.2fr_1.8fr] items-center gap-6 pb-10 sm:grid-cols-[1fr_1.5fr] sm:gap-8 md:pb-12 lg:gap-10 lg:pb-14"
        aria-label={`${stat.value.toLocaleString("en-IN")}${stat.suffix} ${stat.labelLines.join(" ")}`}
      >
        <EditorialStatValue value={stat.value} suffix={stat.suffix} isInView={isInView} />
        <p className="font-inter border-l border-brand-navy/5 pl-4 text-xl font-medium tracking-normal text-brand-navy sm:pl-8 sm:text-2xl sm:leading-snug lg:text-[1.65rem]">
          {stat.labelLines.join(" ")}
        </p>
      </div>
    </div>
  );
}

export function StatsSection({ className }: { className?: string; }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const footerInView = useInView(footerRef, { once: true, amount: 0.35 });

  return (
    <section
      className={cn(
        "bg-brand-cream px-4 py-24 md:px-12 md:py-32 lg:px-16 lg:py-40",
        className,
      )}
      aria-label="Key impact metrics"
    >
      <div className="mx-auto w-full max-w-full">
        <div className="grid grid-cols-1 items-start gap-16 md:gap-20 lg:grid-cols-[1.1fr_1.9fr] lg:gap-24 xl:gap-32">
          {/* Left — sticky editorial copy & CTAs */}
          <div className="max-w-xl lg:sticky lg:top-32">
            <h2 className="font-poppins mb-6 text-brand-navy uppercase tracking-[0.14em]">
              OUR IMPACT IN NUMBERS
            </h2>
            <p className="font-inter font-normal leading-[1.5] text-brand-navy">{LEFT_COPY}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-6 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
              >
                Explore services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/#consultation-form"
                className="font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-teal"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Right — down-shifted editorial metrics */}
          <div className="w-full lg:mt-32">
            <div className="flex flex-col">
              {PREMIUM_STATS.map((stat) => (
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
