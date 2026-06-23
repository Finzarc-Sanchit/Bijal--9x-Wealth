import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { AboutHubConviction } from "./_components/AboutHubConviction";
import { AboutHubHero } from "./_components/AboutHubHero";
import { AboutHubRegulatory } from "./_components/AboutHubRegulatory";
import { AboutHubRelated } from "./_components/AboutHubRelated";
import { AboutHubStats } from "./_components/AboutHubStats";
import { ABOUT_HUB_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: ABOUT_HUB_METADATA.title,
  description: ABOUT_HUB_METADATA.description,
  keywords: [...ABOUT_HUB_METADATA.keywords],
};

export default function AboutPage() {
  return (
    <InteriorPageShell>
      <AboutHubHero />
      <AboutHubConviction />
      <AboutHubStats />
      <AboutHubRegulatory />
      <AboutHubRelated />
    </InteriorPageShell>
  );
}
