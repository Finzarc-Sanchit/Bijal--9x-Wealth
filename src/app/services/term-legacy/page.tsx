import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { TermLegacyConviction } from "./_components/TermLegacyConviction";
import { TermLegacyFaq } from "./_components/TermLegacyFaq";
import { TermLegacyHero } from "./_components/TermLegacyHero";
import { TermLegacyProcess } from "./_components/TermLegacyProcess";
import { TermLegacyRelated } from "./_components/TermLegacyRelated";
import { TermLegacyStructures } from "./_components/TermLegacyStructures";
import { TERM_LEGACY_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: TERM_LEGACY_METADATA.title,
  description: TERM_LEGACY_METADATA.description,
  keywords: [...TERM_LEGACY_METADATA.keywords],
};

export default function TermLegacyPage() {
  return (
    <InteriorPageShell>
      <TermLegacyHero />
      <div className="relative isolate">
        <TermLegacyConviction />
        <TermLegacyProcess />
      </div>
      <TermLegacyStructures />
      <TermLegacyFaq />
      <TermLegacyRelated />
    </InteriorPageShell>
  );
}
