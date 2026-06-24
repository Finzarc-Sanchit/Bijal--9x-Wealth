import { EditorialTriColumnHero } from "@/components/hero/EditorialTriColumnHero";
import { ABOUT_HUB_HERO } from "../_data/content";

export function AboutHubHero() {
  return (
    <EditorialTriColumnHero
      badge={ABOUT_HUB_HERO.badge}
      headlineLines={ABOUT_HUB_HERO.headlineLines}
      intro={ABOUT_HUB_HERO.intro}
      primaryImage={ABOUT_HUB_HERO.primaryImage}
      secondaryImage={ABOUT_HUB_HERO.secondaryImage}
      sidePanel={ABOUT_HUB_HERO.sidePanel}
    />
  );
}
