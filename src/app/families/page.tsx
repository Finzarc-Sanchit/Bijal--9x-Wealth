import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { FamiliesHubConviction } from "./_components/FamiliesHubConviction";
import { FamiliesHubHero } from "./_components/FamiliesHubHero";
import { FamiliesHubRelated } from "./_components/FamiliesHubRelated";
import { FAMILIES_HUB_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: FAMILIES_HUB_METADATA.title,
  description: FAMILIES_HUB_METADATA.description,
  keywords: [...FAMILIES_HUB_METADATA.keywords],
};

export default function FamiliesHubPage() {
  return (
    <InteriorPageShell>
      <FamiliesHubHero />
      <FamiliesHubConviction />
      <FamiliesHubRelated />
    </InteriorPageShell>
  );
}
