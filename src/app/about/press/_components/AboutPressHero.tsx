import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { ABOUT_PRESS_CTAS, ABOUT_PRESS_HERO } from "../_data/content";

export function AboutPressHero() {
  return (
    <InnerPageHero
      backgroundImage={ABOUT_PRESS_HERO.backgroundImage}
      pillImage={ABOUT_PRESS_HERO.pillImage}
      leadWord={ABOUT_PRESS_HERO.leadWord}
      headlineLines={ABOUT_PRESS_HERO.headlineLines}
      epigraph={ABOUT_PRESS_HERO.epigraph}
      ctas={ABOUT_PRESS_CTAS}
    />
  );
}
