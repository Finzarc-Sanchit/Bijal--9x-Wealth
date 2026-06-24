"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export type PhotoBannerHeroProps = {
  id?: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  headline: string;
  description: string;
  /** Decorative brand accent in the bottom-right corner */
  showBrandAccent?: boolean;
  className?: string;
};

/* Increased height thresholds slightly more across all breakpoints using a robust fluid clamp */
const HERO_HEIGHT = "min-h-[clamp(320px,45vh,520px)]";

export function PhotoBannerHero({
  id = "hero",
  backgroundImage,
  headline,
  description,
  showBrandAccent = true,
  className,
}: PhotoBannerHeroProps) {
  return (
    <section
      id={id}
      className={cn("relative isolate w-full overflow-hidden", HERO_HEIGHT, className)}
      aria-labelledby={`${id}-headline`}
    >
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-full flex-col justify-end px-4 pb-8 pt-20 md:px-12 md:pb-10 lg:px-16 xl:px-24",
          HERO_HEIGHT,
        )}
      >
        <div className="max-w-3xl">
          <h2
            id={`${id}-headline`}
            className="font-poppins text-[clamp(1.75rem,4.5vw,3rem)] font-medium uppercase leading-[0.95] tracking-tight text-white [text-shadow:0_2px_20px_rgba(10,22,40,0.75)]"
          >
            {headline}
          </h2>
          <p className="mt-3 max-w-2xl font-inter text-base font-normal leading-relaxed text-white/95 [text-shadow:0_1px_14px_rgba(10,22,40,0.7)] md:mt-4 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}