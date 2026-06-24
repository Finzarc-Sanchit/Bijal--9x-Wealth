import { EditorialTriColumnHero } from "@/components/hero/EditorialTriColumnHero";
import { ABOUT_TEAM_HERO } from "../_data/content";

export function AboutTeamHero() {
  return (
    <EditorialTriColumnHero
      badge={ABOUT_TEAM_HERO.badge}
      headlineLines={ABOUT_TEAM_HERO.headlineLines}
      intro={ABOUT_TEAM_HERO.intro}
      primaryImage={ABOUT_TEAM_HERO.primaryImage}
      secondaryImage={ABOUT_TEAM_HERO.secondaryImage}
      sidePanel={ABOUT_TEAM_HERO.sidePanel}
    />
  );
}
