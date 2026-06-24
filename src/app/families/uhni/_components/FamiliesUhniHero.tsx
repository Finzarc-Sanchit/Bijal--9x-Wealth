import { EditorialImageHero } from "@/components/hero/EditorialImageHero";
import { FAMILIES_UHNI_HERO } from "../_data/content";

export function FamiliesUhniHero() {
  const title = `${FAMILIES_UHNI_HERO.leadWord}${FAMILIES_UHNI_HERO.headlineLines.join(" ")}`.trim();

  return (
    <EditorialImageHero
      title={title}
      byline="Presented by 9xWealth"
      subtitle={FAMILIES_UHNI_HERO.epigraph}
      image={FAMILIES_UHNI_HERO.backgroundImage}
    />
  );
}
