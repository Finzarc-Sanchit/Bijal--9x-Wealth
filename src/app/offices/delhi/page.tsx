import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { DelhiOfficeHero } from "./_components/DelhiOfficeHero";
import { DelhiOfficeSections } from "./_components/DelhiOfficeSections";
import { DELHI_OFFICE_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: DELHI_OFFICE_METADATA.title,
  description: DELHI_OFFICE_METADATA.description,
  keywords: [...DELHI_OFFICE_METADATA.keywords],
};

export default function DelhiOfficePage() {
  return (
    <InteriorPageShell>
      <DelhiOfficeHero />
      <DelhiOfficeSections />
    </InteriorPageShell>
  );
}
