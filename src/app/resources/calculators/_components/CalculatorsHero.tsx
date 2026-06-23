import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { CALCULATORS_CTAS, CALCULATORS_HERO } from "../_data/content";

export function CalculatorsHero() {
  return (
    <InnerPageHero
      backgroundImage={CALCULATORS_HERO.backgroundImage}
      pillImage={CALCULATORS_HERO.pillImage}
      leadWord={CALCULATORS_HERO.leadWord}
      headlineLines={CALCULATORS_HERO.headlineLines}
      epigraph={CALCULATORS_HERO.epigraph}
      ctas={CALCULATORS_CTAS}
    />
  );
}
