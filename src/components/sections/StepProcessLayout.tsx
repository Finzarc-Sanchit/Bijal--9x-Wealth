"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const CARD_REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export type StepProcessStep = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

export type StepProcessCta = {
  label: string;
  href: string;
  isPrimary?: boolean;
};

export type StepProcessLayoutProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: readonly StepProcessStep[];
  stepLabelPrefix?: string;
  ctas?: readonly StepProcessCta[];
  className?: string;
  id?: string;
};

function StepProcessCtaButton({ label, href, isPrimary = false }: StepProcessCta) {
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

function StepProcessCard({
  step,
  stepLabelPrefix,
}: {
  step: StepProcessStep;
  stepLabelPrefix: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: true, amount: 0.2 });
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div ref={rowRef} className="w-full pb-8 md:pb-16 last:pb-0">
      <motion.article
        className={cn(
          "relative flex min-h-[360px] w-full flex-col overflow-hidden rounded-xl border border-white/5 p-8 sm:min-h-[400px] sm:p-10 lg:min-h-[440px] lg:p-12",
          "bg-[#2d3136] text-white shadow-[0_15px_40px_rgba(0,0,0,0.25)]",
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.75, ease: CARD_REVEAL_EASE }}
        aria-labelledby={`${step.id}-title`}
      >
        {!imageFailed ? (
          <Image
            src={step.imageSrc}
            alt={step.imageAlt ?? ""}
            fill
            className="object-cover opacity-45"
            sizes="(max-width: 1024px) 92vw, 800px"
            onError={() => setImageFailed(true)}
            aria-hidden={!step.imageAlt}
          />
        ) : null}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2d3136]/50 via-black/40 to-black/60 opacity-100"
          aria-hidden
        />

        <div className="relative z-10 mt-auto flex h-full w-full grow flex-col items-start justify-between">
          <div className="mt-auto flex w-full flex-col">
            <span className="mb-2 font-poppins text-xs font-semibold uppercase tracking-wider text-brand-gold">
              {stepLabelPrefix} {step.id}
            </span>

            <h3
              id={`${step.id}-title`}
              className="font-display text-2xl font-normal leading-tight tracking-tight text-white md:text-3xl lg:text-4xl"
            >
              {step.title}
            </h3>

            <p className="mt-4 max-w-3xl font-inter text-base leading-relaxed text-white/90">
              {step.description}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function StepProcessLayout({
  eyebrow,
  title,
  subtitle,
  steps,
  stepLabelPrefix = "Commitment",
  ctas,
  className,
  id = "step-process-layout",
}: StepProcessLayoutProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section-py w-full px-4 md:px-12 lg:px-16", className)}
    >
      <div className="mx-auto w-full max-w-full">
        <div className="grid grid-cols-1 items-start gap-16 md:gap-20 lg:grid-cols-[1.1fr_1.9fr] lg:gap-24 xl:gap-32">
          <div className="max-w-xl lg:sticky lg:top-32">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal">
              {eyebrow}
            </p>
            <h2
              id={headingId}
              className="mb-6 font-poppins text-3xl font-medium uppercase tracking-tight !leading-[1.1] text-brand-navy sm:text-4xl"
            >
              {title}
            </h2>
            <p className="font-inter font-normal leading-[1.6] text-brand-navy/80">{subtitle}</p>

            {ctas && ctas.length > 0 ? (
              <div className="mt-10 flex flex-wrap gap-4">
                {ctas.map((cta) => (
                  <StepProcessCtaButton key={`${cta.href}-${cta.label}`} {...cta} />
                ))}
              </div>
            ) : null}
          </div>

          <div className="w-full min-w-0 lg:mt-4">
            {/* MODIFIED: Converted from a generic 'flex flex-col' container into a structured CSS Grid layout */}
            {/* Using 'grid grid-cols-1 gap-10 lg:gap-16 xl:gap-24' directly mirrors the spacing of EditorialConvictionSection */}
            <div
              className={cn(
                "grid grid-cols-1 gap-6 lg:gap-10 xl:gap-12",
                steps.length === 3 && "lg:max-w-4xl",
                steps.length === 4 && "lg:max-w-full",
              )}
              role="list"
              aria-label={`${steps.length} sequential steps`}
            >
              {steps.map((step) => (
                <div key={step.id} role="listitem">
                  <StepProcessCard step={step} stepLabelPrefix={stepLabelPrefix} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}