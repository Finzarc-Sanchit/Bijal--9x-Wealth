import { EditorialTriColumnHero } from "@/components/hero/EditorialTriColumnHero";
import { ABOUT_PRESS_HERO } from "../_data/content";

export function AboutPressHero() {
  return (
    <EditorialTriColumnHero
      badge={ABOUT_PRESS_HERO.badge}
      headlineLines={ABOUT_PRESS_HERO.headlineLines}
      intro={ABOUT_PRESS_HERO.intro}
      primaryImage={ABOUT_PRESS_HERO.primaryImage}
      secondaryImage={ABOUT_PRESS_HERO.secondaryImage}
      sidePanel={ABOUT_PRESS_HERO.sidePanel}
    />
  );
}
