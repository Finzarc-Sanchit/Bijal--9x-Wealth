import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { ABOUT_HUB_CTAS, ABOUT_HUB_HERO } from "../_data/content";

export function AboutHubHero() {
  return (
    <InnerPageHero
      backgroundImage={ABOUT_HUB_HERO.backgroundImage}
      pillImage={ABOUT_HUB_HERO.pillImage}
      leadWord={ABOUT_HUB_HERO.leadWord}
      headlineLines={ABOUT_HUB_HERO.headlineLines}
      epigraph={ABOUT_HUB_HERO.epigraph}
      ctas={ABOUT_HUB_CTAS}
    />
  );
}
