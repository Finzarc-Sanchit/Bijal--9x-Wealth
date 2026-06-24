import { EditorialTriColumnHero } from "@/components/hero/EditorialTriColumnHero";
import { ABOUT_PRACTICE_HERO } from "../_data/content";

export function AboutPracticeHero() {
  return (
    <EditorialTriColumnHero
      badge={ABOUT_PRACTICE_HERO.badge}
      headlineLines={ABOUT_PRACTICE_HERO.headlineLines}
      intro={ABOUT_PRACTICE_HERO.intro}
      primaryImage={ABOUT_PRACTICE_HERO.primaryImage}
      secondaryImage={ABOUT_PRACTICE_HERO.secondaryImage}
      sidePanel={ABOUT_PRACTICE_HERO.sidePanel}
    />
  );
}
