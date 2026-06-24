import { EditorialImageHero } from "@/components/hero/EditorialImageHero";
import { FAMILIES_LISTED_PROMOTERS_HERO } from "../_data/content";

export function FamiliesListedPromotersHero() {
  const title =
    `${FAMILIES_LISTED_PROMOTERS_HERO.leadWord}${FAMILIES_LISTED_PROMOTERS_HERO.headlineLines.join(" ")}`.trim();

  return (
    <EditorialImageHero
      title={title}
      byline="Presented by 9xWealth"
      subtitle={FAMILIES_LISTED_PROMOTERS_HERO.epigraph}
      image={FAMILIES_LISTED_PROMOTERS_HERO.backgroundImage}
    />
  );
}
