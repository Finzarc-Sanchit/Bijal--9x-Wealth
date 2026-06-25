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
    <>
      {/* 12px -> 0.833vw rounded corners */}
      <div className={cn("group relative overflow-hidden rounded-[0.833vw] bg-brand-navy-light w-full", className)}>
        <div className={cn("relative w-full overflow-hidden", aspectClass)}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-20"
          aria-hidden
        />
      </div>
    </>
  );
}

function SidePanelCta({ label, href }: EditorialTriColumnHeroCta) {
  // 44px -> 3.055vw min-height, 8px -> 0.555vw gap, 11px -> 0.764vw font sizing
  const className =
    "inline-flex min-h-[3.055vw] items-center gap-[0.555vw] font-inter text-[0.764vw] font-medium uppercase tracking-[0.15em] text-brand-gold transition-all duration-300 hover:gap-[1.111vw]";

  const inner = (
    <>
      {label}
      {/* 14px -> 0.972vw sizing for icon */}
      <ArrowRight className="w-[0.972vw] h-[0.972vw]" aria-hidden />
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
        "flex min-h-screen w-full flex-col justify-center bg-brand-navy pt-[4.444vw] text-white overflow-x-hidden",
        className,
      )}
    >
      {/* Reduced horizontal padding from px-[6.666vw] down to px-[3.5vw] */}
      <div className="w-full px-[3.5vw] py-[5.555vw]">
        {/* 32px -> 2.222vw consistent layout grid columns gap structure */}
        <div className="grid grid-cols-1 items-start gap-[2.222vw] lg:grid-cols-12">

          {/* Left Column — 24px -> 1.666vw space-y layout engine */}
          <div className="order-1 space-y-[1.666vw] lg:col-span-4">
            <Reveal>
              {/* 8px -> 0.555vw space-y separation */}
              <div className="space-y-[0.555vw]">
                {/* 11px -> 0.764vw text */}
                <p className="font-inter text-[0.764vw] font-medium uppercase tracking-[0.3em] text-brand-gold">
                  {badge}
                </p>
                {/* 70px -> 4.861vw fluid headline typography */}
                <h1
                  id={headingId}
                  className="font-display text-[4.861vw] font-bold uppercase leading-[1.05] tracking-tight text-white w-full whitespace-pre-line"
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
              {/* 32px -> 2.222vw border gap wrapper top offset */}
              <div className="w-full border-t border-white/20 pt-[2.222vw]">
                {/* 16px -> 1.111vw base intro narrative typography */}
                <p className="font-inter text-[1.111vw] leading-relaxed text-white/65">{intro}</p>
              </div>
            </Reveal>
          </div>

          {/* Center Column — Primary Image (Slightly reduced size via max-width) */}
          <div className="order-2 w-full lg:col-span-4 lg:mt-[4.444vw]">
            <Reveal delay={0.1}>
              <div className="w-full max-w-[88%] mx-auto">
                <HeroImageFrame image={primaryImage} aspectClass="aspect-[4/3]" />
              </div>
            </Reveal>
          </div>

          {/* Right Column — Secondary Image + Side Panel Description */}
          <div className="order-3 w-full space-y-[2.222vw] lg:col-span-4">
            <Reveal delay={0.12}>
              {/* Shifted leftward inside its grid section by swapping mx-auto for ml-0 mr-auto */}
              <div className="w-full max-w-[72%] ml-0 mr-auto">
                <HeroImageFrame image={secondaryImage} aspectClass="aspect-[4/3.5]" />
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              {/* 16px -> 1.111vw spacing interior */}
              <div className="space-y-[1.111vw] w-full">
                {/* 16px -> 1.111vw standard row separation */}
                <div className="flex items-center gap-[1.111vw]">
                  {/* 1px stroke, 32px -> 2.222vw line length */}
                  <div className="h-[1px] w-[2.222vw] shrink-0 bg-brand-gold" aria-hidden />
                  {/* 32px -> 2.222vw dynamic subheader font scale */}
                  <h2 className="font-display text-[2.222vw] font-normal tracking-tight text-brand-gold leading-tight">
                    {sidePanel.title}
                  </h2>
                </div>

                {/* 16px -> 1.111vw scale metrics */}
                <p className="font-inter text-[1.111vw] leading-relaxed text-white/65">
                  {sidePanel.description}
                </p>

                {sidePanel.cta ? (
                  <div className="pt-[0.555vw]">
                    {/* 8px -> 0.555vw layout separation gap padding */}
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