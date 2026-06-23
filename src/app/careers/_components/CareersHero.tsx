import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { CAREERS_CTAS, CAREERS_HERO } from "../_data/content";

export function CareersHero() {
  return (
    <InnerPageHero
      backgroundImage={CAREERS_HERO.backgroundImage}
      pillImage={CAREERS_HERO.pillImage}
      leadWord={CAREERS_HERO.leadWord}
      headlineLines={CAREERS_HERO.headlineLines}
      epigraph={CAREERS_HERO.epigraph}
      ctas={CAREERS_CTAS}
    />
  );
}
