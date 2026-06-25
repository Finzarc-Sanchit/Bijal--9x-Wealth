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
        "group relative w-full shrink-0 overflow-hidden rounded-xl bg-brand-navy-light lg:rounded-[0.833vw]",
        desktopFrameClass,
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full shrink-0 overflow-hidden",
          mobileAspectClass,
          desktopMediaClass,
        )}
      >
        <PriorityImage
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 lg:!h-full lg:!w-full"
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
    "inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 font-inter text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-gold-light lg:min-h-[3.056vw] lg:gap-[0.556vw] lg:px-[1.389vw] lg:py-[0.694vw] lg:text-[0.972vw] lg:leading-[1.389vw]";

  const inner = (
    <>
      {label}
      <ArrowRight className="size-4 lg:size-[1.111vw]" aria-hidden />
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
        "flex min-h-screen w-full flex-col justify-center overflow-x-hidden bg-brand-navy pt-20 text-white lg:pt-[4.444vw]",
        className,
      )}
    >
      <div className="w-full px-4 py-10 lg:px-[3.5vw] lg:py-[5.555vw]">
        <div
          className={cn(
            "grid grid-cols-1 items-start gap-6",
            "lg:grid-cols-[29.519vw_29.519vw_29.519vw] lg:justify-between lg:gap-[2.222vw]",
          )}
        >
          {/* Left Column */}
          <div className="order-1 space-y-6 lg:w-[29.519vw] lg:space-y-[1.666vw]">
            <Reveal>
              <div className="space-y-2 lg:space-y-[0.555vw]">
                <p className="font-inter text-sm font-medium uppercase tracking-[0.3em] text-brand-gold lg:text-[0.972vw] lg:leading-[1.389vw] lg:tracking-[0.292vw]">
                  {badge}
                </p>
                <h1
                  id={headingId}
                  className="w-full whitespace-pre-line font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4.861vw] lg:leading-[5.104vw]"
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
              <div className="w-full border-t border-white/20 pt-6 lg:border-t-[0.069vw] lg:pt-[2.222vw]">
                <p className="font-inter text-base leading-relaxed text-white/65 lg:text-[1.111vw] lg:leading-[1.806vw]">
                  {intro}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Mobile — stacked images, left-aligned on the same vertical edge */}
          <div className="order-2 flex w-full flex-col items-start gap-6 lg:hidden">
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
          <div className="order-2 hidden lg:mt-[4.444vw] lg:block lg:w-[29.519vw]">
            <Reveal delay={0.1}>
              <HeroImageFrame
                image={primaryImage}
                mobileAspectClass="aspect-[4/3]"
                desktopFrameClass="lg:mx-auto lg:w-[25.976vw]"
                desktopMediaClass="lg:aspect-auto lg:h-[19.482vw]"
                sizes="(max-width: 1023px) 88vw, 25.976vw"
              />
            </Reveal>
          </div>

          {/* Right Column — side panel; secondary image on desktop only */}
          <div className="order-3 w-full space-y-6 lg:w-[29.519vw] lg:space-y-[2.222vw]">
            <Reveal delay={0.12} className="hidden lg:block">
              <HeroImageFrame
                image={secondaryImage}
                mobileAspectClass="aspect-[4/3.5]"
                desktopFrameClass="lg:w-[21.253vw]"
                desktopMediaClass="lg:aspect-auto lg:h-[18.596vw]"
                sizes="(max-width: 1023px) 88vw, 21.253vw"
              />
            </Reveal>

            <Reveal delay={0.16}>
              <div className="w-full space-y-4 lg:space-y-[1.111vw]">
                <div className="flex items-center gap-3 lg:gap-[1.111vw]">
                  <div
                    className="h-px w-8 shrink-0 bg-brand-gold lg:h-[0.069vw] lg:w-[2.222vw]"
                    aria-hidden
                  />
                  <h2 className="font-display text-xl font-normal leading-tight tracking-tight text-brand-gold lg:text-[2.222vw] lg:leading-[2.778vw]">
                    {sidePanel.title}
                  </h2>
                </div>

                <p className="font-inter text-base leading-relaxed text-white/65 lg:text-[1.111vw] lg:leading-[1.806vw]">
                  {sidePanel.description}
                </p>

                {sidePanel.cta ? (
                  <div className="pt-2 lg:pt-[0.555vw]">
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
