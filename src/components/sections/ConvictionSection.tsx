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
import { ArrowRight } from "lucide-react";
import { PriorityImage } from "@/components/ui/priority-image";
import Link from "next/link";
import { useRef, useState } from "react";

const CTA_STYLES = {
  outline:
    "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full border border-brand-navy/15 bg-white/90 px-6 py-2.5 text-sm font-medium text-brand-navy shadow-sm backdrop-blur-sm transition-colors hover:border-brand-teal hover:text-brand-teal",
  primary:
    "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-teal",
} as const;

export type ConvictionCardItem = {
  id: string;
  title: string;
  description: string;
};

export type ConvictionCta = {
  label: string;
  href: string;
  variant: keyof typeof CTA_STYLES;
};

export type ConvictionSectionProps = {
  eyebrow: string;
  heading: string;
  description: string;
  cards: readonly ConvictionCardItem[];
  background?: { src: string; alt: string };
  ctas?: readonly ConvictionCta[];
  className?: string;
  id?: string;
};

function ConvictionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="our-conviction-glass-card our-conviction-card flex h-full flex-col rounded-2xl p-6 md:p-8">
      <h3 className="font-poppins text-xl font-medium leading-snug tracking-tight text-white md:text-2xl">
        {title}
      </h3>
      <p className="mt-4 flex-1 font-inter text-sm leading-relaxed text-white/80 md:text-base">
        {description}
      </p>
    </article>
  );
}

export function ConvictionSection({
  eyebrow,
  heading,
  description,
  cards,
  background,
  ctas,
  className,
  id = "conviction",
}: ConvictionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const headingId = `${id}-heading`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const backgroundImageSrc = background?.src ?? "/images/our-conviction.png";

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "our-conviction-section relative isolate flex min-h-[80vh] items-center overflow-hidden",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {imageFailed ? <div className="absolute inset-0 bg-brand-navy" /> : null}

        <motion.div
          className="our-conviction-parallax absolute -inset-x-0 -top-[10%] h-[115%]"
          style={{ y: reduceMotion ? 0 : parallaxY }}
        >
          {!imageFailed ? (
            <PriorityImage
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
            <ScrollRevealItem>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal md:text-sm">
                {eyebrow}
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <h2
                id={headingId}
                className="mt-4 font-poppins text-[clamp(2rem,5.2vw,3.75rem)] font-medium leading-[0.95] tracking-tight text-white"
              >
                {heading}
              </h2>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-white/90 md:text-lg">
                {description}
              </p>
            </ScrollRevealItem>

            {ctas && ctas.length > 0 ? (
              <ScrollRevealItem>
                <div className="mt-10 flex flex-wrap gap-4">
                  {ctas.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className={CTA_STYLES[cta.variant]}
                    >
                      {cta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  ))}
                </div>
              </ScrollRevealItem>
            ) : null}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
            {cards.map((card) => (
              <ScrollRevealItem key={card.id}>
                <ConvictionCard title={card.title} description={card.description} />
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
