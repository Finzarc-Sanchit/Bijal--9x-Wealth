"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type EditorialTriColumnHeroImage = {
  src: string;
  alt: string;
};

export type EditorialTriColumnHeroCta = {
  label: string;
  href: string;
};

export type EditorialTriColumnHeroSidePanel = {
  title: string;
  description: string;
  cta?: EditorialTriColumnHeroCta;
};

export type EditorialTriColumnHeroProps = {
  id?: string;
  badge: string;
  /** Stacked headline lines, e.g. `["About", "Us"]` */
  headlineLines: readonly string[];
  intro: string;
  /** Center column — landscape image, offset lower on desktop */
  primaryImage: EditorialTriColumnHeroImage;
  /** Right column — portrait image above the side panel */
  secondaryImage: EditorialTriColumnHeroImage;
  sidePanel: EditorialTriColumnHeroSidePanel;
  className?: string;
};

function HeroImageFrame({
  image,
  aspectClass,
  className,
}: {
  image: EditorialTriColumnHeroImage;
  aspectClass: string;
  className?: string;
}) {
  return (
    <div className={cn("group relative overflow-hidden rounded-xl bg-brand-navy-light", className)}>
      <div className={cn("relative w-full overflow-hidden", aspectClass)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-20"
        aria-hidden
      />
    </div>
  );
}

function SidePanelCta({ label, href }: EditorialTriColumnHeroCta) {
  const className =
    "inline-flex min-h-[44px] items-center gap-2 font-inter text-[11px] font-medium uppercase tracking-[0.15em] text-brand-gold transition-all duration-300 hover:gap-4";

  const inner = (
    <>
      {label}
      <ArrowRight className="size-3.5" aria-hidden />
    </>
  );

  if (href.startsWith("http")) {
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

export function EditorialTriColumnHero({
  id = "editorial-tri-column-hero",
  badge,
  headlineLines,
  intro,
  primaryImage,
  secondaryImage,
  sidePanel,
  className,
}: EditorialTriColumnHeroProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "flex min-h-screen w-full flex-col justify-center bg-brand-navy pt-16 text-white",
        className,
      )}
    >
      <div className="w-full max-w-none px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-24">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 xl:gap-8">
          {/* Left — badge, headline, intro */}
          <div className="order-1 space-y-6 lg:col-span-4">
            <Reveal>
              <div className="space-y-2">
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.3em] text-brand-gold">
                  {badge}
                </p>
                <h1
                  id={headingId}
                  className="font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight text-white w-full sm:text-6xl lg:text-7xl whitespace-pre-line"
                >
                  {headlineLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="w-full max-w-none sm:max-w-xs border-t border-white/20 pt-8">
                <p className="font-inter text-base leading-relaxed text-white/65">{intro}</p>
              </div>
            </Reveal>
          </div>

          {/* Center — primary landscape image (Shifted slightly leftward by lowering horizontal margin shifts) */}
          <div className="order-2 w-full max-w-md lg:col-span-4 lg:mt-16 lg:ml-6 xl:ml-10">
            <Reveal delay={0.1}>
              <HeroImageFrame image={primaryImage} aspectClass="aspect-[4/3]" />
            </Reveal>
          </div>

          {/* Right — portrait image + side panel */}
          <div className="order-3 w-full space-y-6 lg:col-span-4 lg:space-y-8">
            <Reveal delay={0.12}>
              <div className="w-full max-w-xs">
                <HeroImageFrame image={secondaryImage} aspectClass="aspect-[4/3.5]" />
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 shrink-0 bg-brand-gold" aria-hidden />
                  <h2 className="font-display text-2xl font-normal tracking-tight text-brand-gold md:text-[2rem]">
                    {sidePanel.title}
                  </h2>
                </div>

                <p className="font-inter text-base leading-relaxed text-white/65">
                  {sidePanel.description}
                </p>

                {sidePanel.cta ? (
                  <div className="pt-2">
                    <SidePanelCta label={sidePanel.cta.label} href={sidePanel.cta.href} />
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}