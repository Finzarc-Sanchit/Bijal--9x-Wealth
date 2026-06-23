import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { CareersHero } from "./_components/CareersHero";
import { CareersSections } from "./_components/CareersSections";
import { CAREERS_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: CAREERS_METADATA.title,
  description: CAREERS_METADATA.description,
  keywords: [...CAREERS_METADATA.keywords],
};

export default function CareersPage() {
  return (
    <InteriorPageShell>
      <CareersHero />
      <CareersSections />
    </InteriorPageShell>
  );
}
