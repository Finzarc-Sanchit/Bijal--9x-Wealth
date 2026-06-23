import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { FAMILIES_HUB_CTAS, FAMILIES_HUB_HERO } from "../_data/content";

export function FamiliesHubHero() {
  return (
    <InnerPageHero
      backgroundImage={FAMILIES_HUB_HERO.backgroundImage}
      pillImage={FAMILIES_HUB_HERO.pillImage}
      leadWord={FAMILIES_HUB_HERO.leadWord}
      headlineLines={FAMILIES_HUB_HERO.headlineLines}
      epigraph={FAMILIES_HUB_HERO.epigraph}
      ctas={FAMILIES_HUB_CTAS}
    />
  );
}
