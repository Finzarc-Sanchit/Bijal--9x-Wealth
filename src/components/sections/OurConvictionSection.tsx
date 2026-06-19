"use client";

import {
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/motion/ScrollReveal";
import { OUR_CONVICTION_CONTENT } from "@/data/our-conviction";
import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const CTA_STYLES = {
  outline:
    "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full border border-brand-navy/15 bg-white/90 px-6 py-2.5 text-sm font-medium text-brand-navy shadow-sm backdrop-blur-sm transition-colors hover:border-brand-teal hover:text-brand-teal",
  primary:
    "font-inter inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-teal",
} as const;

function ConvictionCard({
  title,
  description
}: {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
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

export function OurConvictionSection({ className }: { className?: string; }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["16%", "-16%"]);

  // Use the newly specified asset path, falling back seamlessly if the data store isn't migrated yet
  const backgroundImageSrc = OUR_CONVICTION_CONTENT?.background?.src || "/images/our-conviction.png";

  return (
    <section
      ref={sectionRef}
      className={cn("our-conviction-section relative isolate overflow-hidden", className)}
      aria-labelledby="our-conviction-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {imageFailed ? (
          <div className="absolute inset-0" />
        ) : null}

        <motion.div
          className="our-conviction-parallax absolute -inset-x-0 -top-[20%] h-[140%]"
          style={{ y: reduceMotion ? 0 : parallaxY }}
        >
          {!imageFailed ? (
            <Image
              src={backgroundImageSrc}
              alt="Our Conviction background"
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
              priority
              onError={() => setImageFailed(true)}
            />
          ) : null}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-full px-4 py-24 md:px-12 md:py-32 lg:px-16 lg:py-40">
        <ScrollRevealStagger className="flex flex-col gap-14 md:gap-20" stagger={0.08}>
          {/* Header Block with individual staggered items */}
          <div className="max-w-3xl flex flex-col">
            <ScrollRevealItem>
              <p className="font-inter text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal md:text-sm">
                {OUR_CONVICTION_CONTENT.eyebrow}
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <h2
                id="our-conviction-heading"
                className="mt-4 font-poppins text-[clamp(2rem,5.2vw,3.75rem)] font-medium leading-[0.95] tracking-tight text-white"
              >
                {OUR_CONVICTION_CONTENT.heading}
              </h2>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-white/90 md:text-lg">
                {OUR_CONVICTION_CONTENT.description}
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="mt-10 flex flex-wrap gap-4">
                {OUR_CONVICTION_CONTENT.ctas.map((cta) => (
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
          </div>

          {/* 3-Column Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
            {OUR_CONVICTION_CONTENT.services.map((service) => (
              <ScrollRevealItem key={service.id}>
                <ConvictionCard
                  title={service.title}
                  description={service.description}
                  linkLabel={service.linkLabel.toUpperCase()}
                  href={service.href}
                />
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}