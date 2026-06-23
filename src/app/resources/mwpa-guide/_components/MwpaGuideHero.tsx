import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { MWPA_GUIDE_CTAS, MWPA_GUIDE_HERO } from "../_data/content";

export function MwpaGuideHero() {
  return (
    <InnerPageHero
      backgroundImage={MWPA_GUIDE_HERO.backgroundImage}
      pillImage={MWPA_GUIDE_HERO.pillImage}
      leadWord={MWPA_GUIDE_HERO.leadWord}
      headlineLines={MWPA_GUIDE_HERO.headlineLines}
      epigraph={MWPA_GUIDE_HERO.epigraph}
      ctas={MWPA_GUIDE_CTAS}
    />
  );
}
