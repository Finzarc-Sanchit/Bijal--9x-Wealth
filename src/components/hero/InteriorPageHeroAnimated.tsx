"use client";

import { HeroAnimatedPillImage } from "@/components/hero/HeroAnimatedImage";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import type { HeroCtaConfig, HeroHeadlineLines } from "@/components/hero/InteriorPageHero.types";

const SLIDE_TRANSITION = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

const HEADLINE_CLASS =
  "hero-editorial-headline block w-full max-w-full min-w-0 box-border font-poppins font-medium uppercase tracking-tight text-white";

const EPIGRAPH_CLASS =
  "text-sm font-inter font-medium italic leading-relaxed text-white/92 md:text-[0.95rem] lg:text-base";

const LINE_VARIANTS = {
  initial: { y: "100%" },
  animate: { y: 0 },
};

function HeroCtaButton({ label, href, variant = "primary" }: HeroCtaConfig) {
  const isExternal = href.startsWith("http");

  if (variant === "secondary") {
    const className =
      "group inline-flex min-h-[48px] items-center gap-2 font-inter text-sm font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60";

    const inner = (
      <>
        {label}
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
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
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  const className =
    "group inline-flex min-h-[48px] items-center rounded-full bg-brand-gold py-2 pl-6 pr-2 font-inter text-brand-navy shadow-[0_8px_28px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-brand-gold-light hover:pr-3 sm:pl-8 tracking-normal normal-case focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

  const inner = (
    <>
      <span className="mr-3 text-sm font-semibold sm:mr-4 tracking-normal normal-case">
        {label}
      </span>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white transition group-hover:bg-brand-navy-light">
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
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
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

function HeroCtaGroup({ ctas }: { ctas: readonly HeroCtaConfig[] }) {
  if (ctas.length === 0) return null;

  return (
    <div className="relative z-30 mt-8 flex w-full flex-col items-start gap-4 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
      {ctas.map((cta) => (
        <HeroCtaButton key={`${cta.href}-${cta.label}`} {...cta} />
      ))}
    </div>
  );
}

export function InteriorPageHeroAnimated({
  pillImage,
  leadWord,
  headlineLines,
  epigraph,
  ctas,
}: {
  pillImage: { src: string; alt: string };
  leadWord: string;
  headlineLines: HeroHeadlineLines;
  epigraph: string;
  ctas?: readonly HeroCtaConfig[];
}) {
  const [animateIn, setAnimateIn] = useState(false);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setAnimateIn(true);
      return;
    }

    setAnimateIn(true);
  }, []);

  const line2 = headlineLines[0];
  const line3 = headlineLines[1] ?? null;
  const closingLine = headlineLines.length === 3 ? headlineLines[2] : null;

  return (
    <div className="m-0 flex w-full max-w-full select-none flex-col items-start p-0 text-left">
      <h1 className="contents">
        <div className="w-full overflow-hidden pb-1">
          <motion.div
            className="flex w-full max-w-full flex-wrap items-center justify-start gap-3 sm:gap-4 md:gap-5"
            variants={LINE_VARIANTS}
            initial="initial"
            animate={animateIn ? "animate" : "initial"}
            transition={SLIDE_TRANSITION}
          >
            <span className="relative h-11 w-32 shrink-0 overflow-hidden rounded-full bg-white/10 ring-2 ring-white/30 sm:h-14 sm:w-44 md:h-16 md:w-52 lg:h-18 lg:w-56">
              <HeroAnimatedPillImage
                src={pillImage.src}
                alt={pillImage.alt}
                priority
                isActive={animateIn}
              />
            </span>
            <span className={cn(HEADLINE_CLASS, "min-w-0 flex-1 text-left")}>{leadWord}</span>
          </motion.div>
        </div>

        <div className="mt-1 w-full overflow-hidden pb-1 sm:mt-2">
          <motion.div
            variants={LINE_VARIANTS}
            initial="initial"
            animate={animateIn ? "animate" : "initial"}
            transition={SLIDE_TRANSITION}
          >
            <span className={cn(HEADLINE_CLASS, "text-left")}>{line2}</span>
          </motion.div>
        </div>

        {line3 ? (
          <div className="mt-1 w-full overflow-hidden pb-1 sm:mt-2">
            <motion.div
              variants={LINE_VARIANTS}
              initial="initial"
              animate={animateIn ? "animate" : "initial"}
              transition={SLIDE_TRANSITION}
            >
              <span className={cn(HEADLINE_CLASS, "text-left")}>{line3}</span>
            </motion.div>
          </div>
        ) : null}

        {closingLine ? (
          <div className="mt-2 w-full overflow-hidden pb-1 sm:mt-3">
            <motion.div
              variants={LINE_VARIANTS}
              initial="initial"
              animate={animateIn ? "animate" : "initial"}
              transition={SLIDE_TRANSITION}
            >
              <span className={cn(HEADLINE_CLASS, "text-left")}>{closingLine}</span>
            </motion.div>
          </div>
        ) : null}
      </h1>

      <div className="relative mt-5 w-full min-w-0 overflow-hidden text-left sm:mt-8">
        <motion.div
          className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl"
          initial={{ opacity: 0, y: 12 }}
          animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.45, ease: "easeInOut", delay: 0.12 }}
        >
          <p className={EPIGRAPH_CLASS}>{`"${epigraph}"`}</p>
        </motion.div>
      </div>

      {ctas ? <HeroCtaGroup ctas={ctas} /> : null}
    </div>
  );
}
