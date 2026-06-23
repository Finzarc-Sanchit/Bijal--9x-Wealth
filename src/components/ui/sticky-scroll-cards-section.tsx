"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type StickyFeature = {
  id: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  bgColor: string;
  textColor: string;
};

export type StickyFeatureSectionProps = {
  badge?: string;
  headline: string;
  subtitle?: string;
  features: readonly StickyFeature[];
  className?: string;
  id?: string;
};

const useScrollAnimation = (): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

function AnimatedHeader({
  badge,
  headline,
  subtitle,
  headingId,
}: {
  badge?: string;
  headline: string;
  subtitle?: string;
  headingId: string;
}) {
  const [headerRef, headerInView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  return (
    <div className="mx-auto mb-16 max-w-3xl px-4 text-center">
      {badge ? (
        <p
          ref={headerRef}
          className={cn(
            "label transition-all duration-700 ease-out",
            headerInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {badge}
        </p>
      ) : null}
      <h2
        ref={badge ? undefined : headerRef}
        id={headingId}
        className={cn(
          "font-display text-3xl font-light leading-tight tracking-tight text-brand-navy transition-all duration-700 ease-out md:text-4xl lg:text-[2.75rem]",
          badge ? "mt-5" : "mt-0",
          headerInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {headline}
      </h2>
      {subtitle ? (
        <p
          ref={pRef}
          className={cn(
            "mt-4 font-inter text-base leading-relaxed text-brand-navy/70 transition-all duration-700 ease-out delay-200 md:text-lg",
            pInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function StickyFeatureCard({ feature }: { feature: StickyFeature }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      className={cn(
        feature.bgColor,
        "sticky top-24 mb-16 grid grid-cols-1 items-center gap-4 rounded-3xl p-8 backdrop-blur-sm md:grid-cols-2 md:gap-8 md:p-12",
      )}
    >
      <div className="flex flex-col justify-center">
        <p
          className="font-mono text-xs font-medium tracking-[0.24em] text-brand-teal"
          aria-hidden
        >
          {feature.id}
        </p>
        <h3 className="mt-3 font-poppins text-2xl font-semibold leading-snug text-brand-navy md:text-3xl">
          {feature.title}
        </h3>
        <p className={cn("mt-4 font-inter text-sm leading-relaxed md:text-base", feature.textColor)}>
          {feature.description}
        </p>
      </div>
      <div className="mt-8 md:mt-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-md">
          {!imageFailed ? (
            <Image
              src={feature.image.src}
              alt={feature.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-teal/10 to-brand-gold/10"
              aria-hidden
            />
          )}
        </div>
      </div>
    </article>
  );
}

export function StickyFeatureSection({
  badge,
  headline,
  subtitle,
  features,
  className,
  id = "how-we-work",
}: StickyFeatureSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("w-full bg-surface", className)}
    >
      <div className="w-full px-[5%]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center py-24 md:py-36">
            <AnimatedHeader
              badge={badge}
              headline={headline}
              subtitle={subtitle}
              headingId={headingId}
            />
            <div className="w-full">
              {features.map((feature) => (
                <StickyFeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
