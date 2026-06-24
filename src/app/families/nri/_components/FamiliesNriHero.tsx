import { EditorialImageHero } from "@/components/hero/EditorialImageHero";
import { FAMILIES_NRI_HERO } from "../_data/content";

export function FamiliesNriHero() {
  const title =
    `${FAMILIES_NRI_HERO.leadWord}${FAMILIES_NRI_HERO.headlineLines.join(" ")}`.trim();

  return (
    <EditorialImageHero
      title={title}
      byline="Presented by 9xWealth"
      subtitle={FAMILIES_NRI_HERO.epigraph}
      image={FAMILIES_NRI_HERO.backgroundImage}
    />
  );
}
