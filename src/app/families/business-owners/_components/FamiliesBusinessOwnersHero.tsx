import { EditorialImageHero } from "@/components/hero/EditorialImageHero";
import { FAMILIES_BUSINESS_OWNERS_HERO } from "../_data/content";

export function FamiliesBusinessOwnersHero() {
  const title =
    `${FAMILIES_BUSINESS_OWNERS_HERO.leadWord}${FAMILIES_BUSINESS_OWNERS_HERO.headlineLines.join(" ")}`.trim();

  return (
    <EditorialImageHero
      title={title}
      byline="Presented by 9xWealth"
      subtitle={FAMILIES_BUSINESS_OWNERS_HERO.epigraph}
      image={FAMILIES_BUSINESS_OWNERS_HERO.backgroundImage}
    />
  );
}
