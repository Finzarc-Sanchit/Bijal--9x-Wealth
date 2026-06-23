import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { TermsHero, TermsSections } from "./_components/TermsSections";
import { TERMS_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: TERMS_METADATA.title,
  description: TERMS_METADATA.description,
  keywords: [...TERMS_METADATA.keywords],
};

export default function TermsPage() {
  return (
    <InteriorPageShell>
      <TermsHero />
      <TermsSections />
    </InteriorPageShell>
  );
}
