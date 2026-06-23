import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { ABOUT_TEAM_RELATED } from "../_data/content";

export function AboutTeamRelated() {
  return (
    <RelatedLinksSection
      badge={ABOUT_TEAM_RELATED.badge}
      headline={ABOUT_TEAM_RELATED.headline}
      items={ABOUT_TEAM_RELATED.items}
      id="about-team-related"
    />
  );
}
