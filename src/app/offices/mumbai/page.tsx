import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { MumbaiOfficeHero } from "./_components/MumbaiOfficeHero";
import { MumbaiOfficeSections } from "./_components/MumbaiOfficeSections";
import { MUMBAI_OFFICE_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: MUMBAI_OFFICE_METADATA.title,
  description: MUMBAI_OFFICE_METADATA.description,
  keywords: [...MUMBAI_OFFICE_METADATA.keywords],
};

export default function MumbaiOfficePage() {
  return (
    <InteriorPageShell>
      <MumbaiOfficeHero />
      <MumbaiOfficeSections />
    </InteriorPageShell>
  );
}
