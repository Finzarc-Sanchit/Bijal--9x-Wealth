"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { brandsBarLogos, brandsBarTitle, type BrandsBarPartner } from "@/data/brandsBar";
import { cn } from "@/lib/utils";
import { useState } from "react";

function PartnerBrandSlot({ partner }: { partner: BrandsBarPartner }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasValidSrc = Boolean(partner.src?.trim());
  const showTypography = !hasValidSrc || imageFailed;

  if (showTypography) {
    return (
      <span className="whitespace-nowrap text-lg font-medium tracking-tight text-white/70 transition-colors duration-300 hover:text-brand-gold md:text-xl">
        {partner.name}
      </span>
    );
  }

  return (
    <img
      className={cn(
        "mx-auto h-7 w-auto opacity-50 brightness-0 invert transition-all duration-300 hover:opacity-100",
        partner.className,
      )}
      src={partner.src}
      alt={partner.name}
      height={partner.height || 28}
      width="auto"
      loading="lazy"
      onError={() => setImageFailed(true)}
    />
  );
}

export function BrandsBarSection({ className }: { className?: string }) {
  return (
    <section
      className={cn("w-full overflow-hidden bg-brand-navy pb-16 pt-8 md:pb-24", className)}
      aria-label={brandsBarTitle}
    >
      <div className="w-full max-w-full px-4 md:px-12 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12 lg:gap-16 xl:gap-24">
          <div className="shrink-0 text-left md:w-48 lg:w-56">
            <p className="m-0 text-xl font-medium leading-snug tracking-tight text-white/90 md:text-2xl">
              {brandsBarTitle}
            </p>
          </div>

          <div className="relative min-w-0 flex-1 py-4 md:py-2">
            <InfiniteSlider duration={45} durationOnHover={25} gap={112}>
              {brandsBarLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex shrink-0 select-none items-center justify-center px-4"
                >
                  <PartnerBrandSlot partner={partner} />
                </div>
              ))}
            </InfiniteSlider>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-navy via-brand-navy/30 to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-navy via-brand-navy/30 to-transparent md:w-24" />

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 md:w-24"
              direction="left"
              blurIntensity={1.2}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 md:w-24"
              direction="right"
              blurIntensity={1.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
