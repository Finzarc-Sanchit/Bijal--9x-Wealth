import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { PrivacyHero, PrivacySections } from "./_components/PrivacySections";
import { PRIVACY_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: PRIVACY_METADATA.title,
  description: PRIVACY_METADATA.description,
  keywords: [...PRIVACY_METADATA.keywords],
};

export default function PrivacyPage() {
  return (
    <InteriorPageShell>
      <PrivacyHero />
      <PrivacySections />
    </InteriorPageShell>
  );
}
