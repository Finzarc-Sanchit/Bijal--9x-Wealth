"use client";

import { Reveal } from "@/components/animations/reveal";
import { PriorityImage } from "@/components/ui/priority-image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
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
  mobileAspectClass,
  desktopFrameClass,
  desktopMediaClass,
  sizes = "(max-width: 1023px) 88vw, 33vw",
  className,
}: {
  image: EditorialTriColumnHeroImage;
  mobileAspectClass: string;
  desktopFrameClass?: string;
  desktopMediaClass?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative w-full min-w-0 shrink-0 overflow-hidden rounded-xl bg-brand-navy-light lg:rounded-2xl",
        desktopFrameClass,
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full min-w-0 shrink-0 overflow-hidden",
          mobileAspectClass,
          desktopMediaClass,
        )}
      >
        <PriorityImage
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes={sizes}
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
    "inline-flex min-h-[2.75rem] w-fit items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 font-inter text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-light";

  const inner = (
    <>
      {label}
      <ArrowRight className="size-4 shrink-0" aria-hidden />
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
        "flex min-h-screen w-full flex-col justify-center overflow-x-hidden bg-brand-navy pt-20 text-white lg:pt-24",
        className,
      )}
    >
      <div className="w-full px-4 py-10 lg:px-12 lg:py-16 xl:px-16">
        <div
          className={cn(
            "grid min-w-0 grid-cols-1 items-start gap-6",
            "lg:grid-cols-3 lg:gap-8 xl:gap-10",
          )}
        >
          {/* Left Column */}
          <div className="order-1 min-w-0 space-y-6 lg:space-y-6">
            <Reveal>
              <div className="space-y-2">
                <p className="font-inter text-sm font-medium uppercase tracking-[0.3em] text-brand-gold">
                  {badge}
                </p>
                <h1
                  id={headingId}
                  className="w-full min-w-0 whitespace-pre-line font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
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
              <div className="w-full min-w-0 border-t border-white/20 pt-6 lg:pt-8">
                <p className="font-inter text-base leading-relaxed text-white/65 lg:text-lg lg:leading-relaxed">
                  {intro}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Mobile — stacked images, left-aligned on the same vertical edge */}
          <div className="order-2 flex w-full min-w-0 flex-col items-start gap-6 lg:hidden">
            <Reveal delay={0.1} className="w-full max-w-[88%]">
              <HeroImageFrame
                image={primaryImage}
                mobileAspectClass="aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay={0.12} className="w-full max-w-[88%]">
              <HeroImageFrame
                image={secondaryImage}
                mobileAspectClass="aspect-[4/3.5]"
              />
            </Reveal>
          </div>

          {/* Desktop — center primary image */}
          <div className="order-2 hidden min-w-0 lg:mt-16 lg:block">
            <Reveal delay={0.1}>
              <HeroImageFrame
                image={primaryImage}
                mobileAspectClass="aspect-[4/3]"
                desktopFrameClass="lg:mx-auto lg:w-[88%]"
                desktopMediaClass="lg:aspect-[4/3]"
                sizes="(max-width: 1023px) 88vw, 28vw"
              />
            </Reveal>
          </div>

          {/* Right Column — side panel; secondary image on desktop only */}
          <div className="order-3 min-w-0 w-full space-y-6 lg:space-y-8">
            <Reveal delay={0.12} className="hidden lg:block">
              <HeroImageFrame
                image={secondaryImage}
                mobileAspectClass="aspect-[4/3.5]"
                desktopFrameClass="lg:w-[72%]"
                desktopMediaClass="lg:aspect-[4/4.5]"
                sizes="(max-width: 1023px) 88vw, 24vw"
              />
            </Reveal>

            <Reveal delay={0.16}>
              <div className="w-full min-w-0 space-y-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className="h-px w-8 shrink-0 bg-brand-gold"
                    aria-hidden
                  />
                  <h2 className="min-w-0 font-display text-xl font-normal leading-tight tracking-tight text-brand-gold lg:text-2xl xl:text-3xl">
                    {sidePanel.title}
                  </h2>
                </div>

                <p className="font-inter text-base leading-relaxed text-white/65 lg:text-lg lg:leading-relaxed">
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
