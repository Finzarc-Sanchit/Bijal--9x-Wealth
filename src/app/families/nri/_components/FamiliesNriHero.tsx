import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { FAMILIES_NRI_CTAS, FAMILIES_NRI_HERO } from "../_data/content";

export function FamiliesNriHero() {
  return (
    <InnerPageHero
      backgroundImage={FAMILIES_NRI_HERO.backgroundImage}
      pillImage={FAMILIES_NRI_HERO.pillImage}
      leadWord={FAMILIES_NRI_HERO.leadWord}
      headlineLines={FAMILIES_NRI_HERO.headlineLines}
      epigraph={FAMILIES_NRI_HERO.epigraph}
      ctas={FAMILIES_NRI_CTAS}
    />
  );
}
