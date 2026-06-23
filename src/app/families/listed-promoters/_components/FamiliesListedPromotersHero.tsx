import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import {
  FAMILIES_LISTED_PROMOTERS_CTAS,
  FAMILIES_LISTED_PROMOTERS_HERO,
} from "../_data/content";

export function FamiliesListedPromotersHero() {
  return (
    <InnerPageHero
      backgroundImage={FAMILIES_LISTED_PROMOTERS_HERO.backgroundImage}
      pillImage={FAMILIES_LISTED_PROMOTERS_HERO.pillImage}
      leadWord={FAMILIES_LISTED_PROMOTERS_HERO.leadWord}
      headlineLines={FAMILIES_LISTED_PROMOTERS_HERO.headlineLines}
      epigraph={FAMILIES_LISTED_PROMOTERS_HERO.epigraph}
      ctas={FAMILIES_LISTED_PROMOTERS_CTAS}
    />
  );
}
