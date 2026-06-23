"use client";

import { WHAT_WE_PROTECT_CONTENT, type WhatWeProtectCard } from "@/data/what-we-protect";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export type WhatWeProtectContent = {
  eyebrow: string;
  heading: string;
  description: string;
  cards: readonly WhatWeProtectCard[];
};

export type WhatWeProtectSectionProps = {
  content: WhatWeProtectContent;
  className?: string;
  stackPinned?: boolean;
  id?: string;
};

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

function ProtectRow({
  card,
  reduceMotion,
}: {
  card: WhatWeProtectCard;
  reduceMotion: boolean | null;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
  );

  return (
    <article className="group border-b-2 border-brand-navy">
      <div
        ref={rowRef}
        className="grid w-full min-w-0 grid-cols-1 gap-6 py-8 md:gap-8 md:py-10 lg:grid-cols-[minmax(220px,26%)_minmax(280px,38%)_1fr] lg:items-start lg:gap-x-10 lg:gap-y-0 lg:pl-16 xl:gap-x-12 xl:pl-24"
      >
        <div className="flex min-h-[44px] items-start justify-between gap-4 lg:max-w-[280px] lg:justify-start lg:gap-5 lg:pt-1">
          <h3 className="min-w-0 font-poppins text-2xl font-medium leading-snug tracking-tight text-brand-navy md:text-3xl">
            {card.title}
          </h3>
          <span
            className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-navy/20 text-brand-teal transition-colors duration-300 group-hover:border-brand-teal group-hover:bg-brand-teal group-hover:text-white"
            aria-hidden
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>

        <div className="relative aspect-video w-full min-w-0 overflow-hidden rounded-xl bg-brand-cream ring-1 ring-brand-navy/10 lg:mx-2 xl:mx-4">
          {reduceMotion ? (
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 420px"
            />
          ) : (
            <motion.div className="relative h-full w-full" style={{ opacity, clipPath }}>
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 420px"
              />
            </motion.div>
          )}
        </div>

        <div className="flex min-w-0 flex-col justify-end gap-4 lg:self-end lg:pt-12 lg:pl-2 xl:pl-4">
          <p className="font-inter text-base leading-relaxed text-brand-navy/80 md:text-lg">
            {card.body}
          </p>
          <Link
            href={card.href}
            className="inline-flex min-h-[44px] items-center self-start text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal transition-colors duration-300 hover:text-brand-navy"
          >
            {card.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function WhatWeProtectSection({
  content,
  className,
  stackPinned = false,
  id = "what-we-protect",
}: WhatWeProtectSectionProps) {
  const reduceMotion = useReducedMotion();
  const usePinnedLayout = stackPinned && !reduceMotion;
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={cn(
        "section-py w-full px-4 md:px-12 lg:px-16",
        usePinnedLayout && "sticky bottom-0 z-10",
        className,
      )}
      aria-labelledby={headingId}
    >
      <div className="mx-auto w-full max-w-full">
        <Reveal>
          <header className="max-w-4xl text-left">
            <p className="font-inter text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal md:text-sm">
              {content.eyebrow}
            </p>
            <h2
              id={headingId}
              className="mt-4 font-poppins text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[0.95] tracking-tight text-brand-navy"
            >
              {content.heading}
            </h2>
            <p className="mt-6 max-w-3xl font-inter text-base leading-relaxed text-brand-navy/85 md:text-lg">
              {content.description}
            </p>
          </header>
        </Reveal>

        <div className="mt-14 border-t-2 border-brand-navy md:mt-16">
          {content.cards.map((card) => (
            <ProtectRow key={card.id} card={card} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatWeProtectSectionDefault({
  className,
  stackPinned = false,
}: {
  className?: string;
  stackPinned?: boolean;
}) {
  return (
    <WhatWeProtectSection
      content={WHAT_WE_PROTECT_CONTENT}
      className={className}
      stackPinned={stackPinned}
    />
  );
}
