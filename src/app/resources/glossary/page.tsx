import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { GlossaryHero } from "./_components/GlossaryHero";
import { GlossarySections } from "./_components/GlossarySections";
import { GLOSSARY_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: GLOSSARY_METADATA.title,
  description: GLOSSARY_METADATA.description,
  keywords: [...GLOSSARY_METADATA.keywords],
};

export default function GlossaryPage() {
  return (
    <InteriorPageShell>
      <GlossaryHero />
      <GlossarySections />
    </InteriorPageShell>
  );
}
