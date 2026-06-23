import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { WEALTH_ULIPS_CTAS, WEALTH_ULIPS_HERO } from "../_data/content";

export function WealthUlipsHero() {
  return (
    <InnerPageHero
      backgroundImage={WEALTH_ULIPS_HERO.backgroundImage}
      pillImage={WEALTH_ULIPS_HERO.pillImage}
      leadWord={WEALTH_ULIPS_HERO.leadWord}
      headlineLines={WEALTH_ULIPS_HERO.headlineLines}
      epigraph={WEALTH_ULIPS_HERO.epigraph}
      ctas={WEALTH_ULIPS_CTAS}
    />
  );
}
