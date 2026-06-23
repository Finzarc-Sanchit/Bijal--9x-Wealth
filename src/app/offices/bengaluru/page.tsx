import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { BengaluruOfficeHero } from "./_components/BengaluruOfficeHero";
import { BengaluruOfficeSections } from "./_components/BengaluruOfficeSections";
import { BENGALURU_OFFICE_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: BENGALURU_OFFICE_METADATA.title,
  description: BENGALURU_OFFICE_METADATA.description,
  keywords: [...BENGALURU_OFFICE_METADATA.keywords],
};

export default function BengaluruOfficePage() {
  return (
    <InteriorPageShell>
      <BengaluruOfficeHero />
      <BengaluruOfficeSections />
    </InteriorPageShell>
  );
}
