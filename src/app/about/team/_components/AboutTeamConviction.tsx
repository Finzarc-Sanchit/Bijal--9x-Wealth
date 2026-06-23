import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { ABOUT_TEAM_CONVICTION } from "../_data/content";

export function AboutTeamConviction() {
  return (
    <TermLegacyConvictionSection
      badge={ABOUT_TEAM_CONVICTION.badge}
      headline={ABOUT_TEAM_CONVICTION.headline}
      paragraphs={ABOUT_TEAM_CONVICTION.paragraphs}
    />
  );
}
