import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { ABOUT_TEAM_CTAS, ABOUT_TEAM_HERO } from "../_data/content";

export function AboutTeamHero() {
  return (
    <InnerPageHero
      backgroundImage={ABOUT_TEAM_HERO.backgroundImage}
      pillImage={ABOUT_TEAM_HERO.pillImage}
      leadWord={ABOUT_TEAM_HERO.leadWord}
      headlineLines={ABOUT_TEAM_HERO.headlineLines}
      epigraph={ABOUT_TEAM_HERO.epigraph}
      ctas={ABOUT_TEAM_CTAS}
    />
  );
}
