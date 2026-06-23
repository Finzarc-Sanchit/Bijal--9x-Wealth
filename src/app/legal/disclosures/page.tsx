import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { DisclosuresHero, DisclosuresSections } from "./_components/DisclosuresSections";
import { DISCLOSURES_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: DISCLOSURES_METADATA.title,
  description: DISCLOSURES_METADATA.description,
  keywords: [...DISCLOSURES_METADATA.keywords],
};

export default function DisclosuresPage() {
  return (
    <InteriorPageShell>
      <DisclosuresHero />
      <DisclosuresSections />
    </InteriorPageShell>
  );
}
