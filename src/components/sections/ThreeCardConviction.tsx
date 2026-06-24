"use client";

import {
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export type ThreeCardConvictionCard = {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type ThreeCardConvictionProps = {
  title: string;
  subtitle: string;
  cards: readonly ThreeCardConvictionCard[];
  eyebrow?: string;
  background?: { src: string; alt: string };
  className?: string;
  id?: string;
};

function ConvictionGlassCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
}) {
  return (
    <article
      className={cn(
        "our-conviction-glass-card our-conviction-card",
        "flex h-full flex-col rounded-2xl p-6 transition-all duration-300 md:p-8",
        "hover:-translate-y-1 hover:border-white/80 hover:shadow-[0_16px_48px_-12px_rgba(10,22,40,0.22)]",
      )}
    >
      {Icon ? (
        <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-colors duration-300 group-hover:bg-white/20">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      ) : null}
      <h3 className="font-poppins text-xl font-medium leading-snug tracking-tight text-white md:text-2xl">
        {title}
      </h3>
      <p className="mt-4 flex-1 font-inter text-sm leading-relaxed text-white/80 md:text-base">
        {description}
      </p>
    </article>
  );
}

export function ThreeCardConviction({
  title,
  subtitle,
  cards,
  eyebrow,
  background,
  className,
  id = "three-card-conviction",
}: ThreeCardConvictionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const headingId = `${id}-heading`;
  const backgroundImageSrc = background?.src ?? "/images/our-conviction.png";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "our-conviction-section relative isolate flex min-h-[80vh] items-center overflow-hidden bg-brand-navy",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {imageFailed ? <div className="absolute inset-0 bg-brand-navy" /> : null}

        <motion.div
          className="our-conviction-parallax absolute inset-0 h-full min-h-full"
          style={{ y: reduceMotion ? 0 : parallaxY }}
        >
          {!imageFailed ? (
            <Image
              src={backgroundImageSrc}
              alt={background?.alt ?? "Conviction section background"}
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
              priority
              onError={() => setImageFailed(true)}
            />
          ) : null}
        </motion.div>

        <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-full px-4 py-24 md:px-12 md:py-36 lg:px-16 lg:py-44">
        <ScrollRevealStagger className="flex flex-col gap-14 md:gap-20" stagger={0.08}>
          <div className="flex max-w-3xl flex-col">
            {eyebrow ? (
              <ScrollRevealItem>
                <p className="font-inter text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal md:text-sm">
                  {eyebrow}
                </p>
              </ScrollRevealItem>
            ) : null}

            <ScrollRevealItem>
              <h2
                id={headingId}
                className={cn(
                  "font-poppins text-[clamp(2rem,5.2vw,3.75rem)] font-medium leading-[0.95] tracking-tight text-white",
                  eyebrow ? "mt-4" : "mt-0",
                )}
              >
                {title}
              </h2>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-white/90 md:text-lg">
                {subtitle}
              </p>
            </ScrollRevealItem>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
            {cards.map((card) => (
              <ScrollRevealItem key={card.id} className="group">
                <ConvictionGlassCard
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
