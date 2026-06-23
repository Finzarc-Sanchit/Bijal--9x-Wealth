import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { InsightsHero } from "./_components/InsightsHero";
import { InsightsSections } from "./_components/InsightsSections";
import { INSIGHTS_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: INSIGHTS_METADATA.title,
  description: INSIGHTS_METADATA.description,
  keywords: [...INSIGHTS_METADATA.keywords],
};

export default function InsightsPage() {
  return (
    <InteriorPageShell>
      <InsightsHero />
      <InsightsSections />
    </InteriorPageShell>
  );
}
