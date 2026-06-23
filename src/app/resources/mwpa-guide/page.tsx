import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { MwpaGuideHero } from "./_components/MwpaGuideHero";
import { MwpaGuideSections } from "./_components/MwpaGuideSections";
import { MWPA_GUIDE_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: MWPA_GUIDE_METADATA.title,
  description: MWPA_GUIDE_METADATA.description,
  keywords: [...MWPA_GUIDE_METADATA.keywords],
};

export default function MwpaGuidePage() {
  return (
    <InteriorPageShell>
      <MwpaGuideHero />
      <MwpaGuideSections />
    </InteriorPageShell>
  );
}
