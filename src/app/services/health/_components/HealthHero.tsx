import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { HEALTH_CTAS, HEALTH_HERO } from "../_data/content";

export function HealthHero() {
  return (
    <InnerPageHero
      backgroundImage={HEALTH_HERO.backgroundImage}
      pillImage={HEALTH_HERO.pillImage}
      leadWord={HEALTH_HERO.leadWord}
      headlineLines={HEALTH_HERO.headlineLines}
      epigraph={HEALTH_HERO.epigraph}
      ctas={HEALTH_CTAS}
    />
  );
}
