import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { SERVICES_CTAS, SERVICES_HERO } from "../_data/content";

export function ServicesHero() {
  return (
    <InnerPageHero
      backgroundImage={SERVICES_HERO.backgroundImage}
      pillImage={SERVICES_HERO.pillImage}
      leadWord={SERVICES_HERO.leadWord}
      headlineLines={SERVICES_HERO.headlineLines}
      epigraph={SERVICES_HERO.epigraph}
      ctas={SERVICES_CTAS}
    />
  );
}
