import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { INSIGHTS_CTAS, INSIGHTS_HERO } from "../_data/content";

export function InsightsHero() {
  return (
    <InnerPageHero
      backgroundImage={INSIGHTS_HERO.backgroundImage}
      pillImage={INSIGHTS_HERO.pillImage}
      leadWord={INSIGHTS_HERO.leadWord}
      headlineLines={INSIGHTS_HERO.headlineLines}
      epigraph={INSIGHTS_HERO.epigraph}
      ctas={INSIGHTS_CTAS}
    />
  );
}
