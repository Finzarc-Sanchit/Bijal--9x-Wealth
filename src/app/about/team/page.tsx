import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { AboutTeamConviction } from "./_components/AboutTeamConviction";
import { AboutTeamHero } from "./_components/AboutTeamHero";
import { AboutTeamPartners } from "./_components/AboutTeamPartners";
import { AboutTeamRelated } from "./_components/AboutTeamRelated";
import { ABOUT_TEAM_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: ABOUT_TEAM_METADATA.title,
  description: ABOUT_TEAM_METADATA.description,
  keywords: [...ABOUT_TEAM_METADATA.keywords],
};

export default function AboutTeamPage() {
  return (
    <InteriorPageShell>
      <AboutTeamHero />
      <AboutTeamConviction />
      <AboutTeamPartners />
      <AboutTeamRelated />
    </InteriorPageShell>
  );
}
