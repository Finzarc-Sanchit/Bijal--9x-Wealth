import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { FaqHero } from "./_components/FaqHero";
import { FaqSections } from "./_components/FaqSections";
import { FAQ_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: FAQ_METADATA.title,
  description: FAQ_METADATA.description,
  keywords: [...FAQ_METADATA.keywords],
};

export default function FaqPage() {
  return (
    <InteriorPageShell>
      <FaqHero />
      <FaqSections />
    </InteriorPageShell>
  );
}
