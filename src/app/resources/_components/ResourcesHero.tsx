import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { RESOURCES_CTAS, RESOURCES_HERO } from "../_data/content";

export function ResourcesHero() {
  return (
    <InnerPageHero
      backgroundImage={RESOURCES_HERO.backgroundImage}
      pillImage={RESOURCES_HERO.pillImage}
      leadWord={RESOURCES_HERO.leadWord}
      headlineLines={RESOURCES_HERO.headlineLines}
      epigraph={RESOURCES_HERO.epigraph}
      ctas={RESOURCES_CTAS}
    />
  );
}
