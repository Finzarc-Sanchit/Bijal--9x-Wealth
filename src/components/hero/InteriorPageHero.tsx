import { InteriorPageHeroAnimated } from "@/components/hero/InteriorPageHeroAnimated";
import { InteriorPageHeroBackground } from "@/components/hero/InteriorPageHeroBackground";
import type { InteriorPageHeroProps } from "@/components/hero/InteriorPageHero.types";
import { cn } from "@/lib/utils";

export type {
  HeroCtaConfig,
  HeroHeadlineLines,
  InteriorPageHeroProps,
} from "@/components/hero/InteriorPageHero.types";

export function InteriorPageHero({
  id = "hero",
  backgroundImage,
  pillImage,
  leadWord,
  headlineLines,
  epigraph,
  ctas,
  className,
}: InteriorPageHeroProps) {
  return (
    <section
      id={id}
      className={cn(
        "hero-scroll-section relative box-border min-h-[100dvh] h-auto w-full max-w-full overflow-x-clip",
        className,
      )}
    >
      <div className="relative box-border flex h-auto min-h-[100dvh] w-full max-w-full items-center overflow-x-clip overflow-y-visible pb-10 pt-20 sm:pb-0 sm:pt-28 lg:items-start">
        <InteriorPageHeroBackground
          src={backgroundImage.src}
          alt={backgroundImage.alt}
        />

        <div className="relative z-10 box-border w-full max-w-full min-w-0 px-4 py-6 sm:px-6 sm:py-8 md:px-12 lg:px-16 xl:px-24">
          <div className="box-border mx-auto w-full min-w-0 max-w-7xl text-left sm:pt-12 md:pt-16 lg:mx-0 lg:max-w-none lg:pt-16 xl:pt-20">
            <div className="relative z-10 w-full min-w-0">
              <InteriorPageHeroAnimated
                pillImage={pillImage}
                leadWord={leadWord}
                headlineLines={headlineLines}
                epigraph={epigraph}
                ctas={ctas}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { InteriorPageHero as InnerPageHero };
