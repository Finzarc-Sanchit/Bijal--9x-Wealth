import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { FAMILIES_UHNI_CTAS, FAMILIES_UHNI_HERO } from "../_data/content";

export function FamiliesUhniHero() {
  return (
    <InnerPageHero
      backgroundImage={FAMILIES_UHNI_HERO.backgroundImage}
      pillImage={FAMILIES_UHNI_HERO.pillImage}
      leadWord={FAMILIES_UHNI_HERO.leadWord}
      headlineLines={FAMILIES_UHNI_HERO.headlineLines}
      epigraph={FAMILIES_UHNI_HERO.epigraph}
      ctas={FAMILIES_UHNI_CTAS}
    />
  );
}
