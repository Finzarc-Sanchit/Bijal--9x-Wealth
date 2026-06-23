import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { ABOUT_PRACTICE_CTAS, ABOUT_PRACTICE_HERO } from "../_data/content";

export function AboutPracticeHero() {
  return (
    <InnerPageHero
      backgroundImage={ABOUT_PRACTICE_HERO.backgroundImage}
      pillImage={ABOUT_PRACTICE_HERO.pillImage}
      leadWord={ABOUT_PRACTICE_HERO.leadWord}
      headlineLines={ABOUT_PRACTICE_HERO.headlineLines}
      epigraph={ABOUT_PRACTICE_HERO.epigraph}
      ctas={ABOUT_PRACTICE_CTAS}
    />
  );
}
