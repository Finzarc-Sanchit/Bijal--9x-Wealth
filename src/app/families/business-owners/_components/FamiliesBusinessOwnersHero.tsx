import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { FAMILIES_BUSINESS_OWNERS_CTAS, FAMILIES_BUSINESS_OWNERS_HERO } from "../_data/content";

export function FamiliesBusinessOwnersHero() {
  return (
    <InnerPageHero
      backgroundImage={FAMILIES_BUSINESS_OWNERS_HERO.backgroundImage}
      pillImage={FAMILIES_BUSINESS_OWNERS_HERO.pillImage}
      leadWord={FAMILIES_BUSINESS_OWNERS_HERO.leadWord}
      headlineLines={FAMILIES_BUSINESS_OWNERS_HERO.headlineLines}
      epigraph={FAMILIES_BUSINESS_OWNERS_HERO.epigraph}
      ctas={FAMILIES_BUSINESS_OWNERS_CTAS}
    />
  );
}
