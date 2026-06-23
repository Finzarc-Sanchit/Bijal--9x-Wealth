import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { SpecieCards } from "./_components/SpecieCards";
import { SpecieConviction } from "./_components/SpecieConviction";
import { SpecieFaq } from "./_components/SpecieFaq";
import { SpecieHero } from "./_components/SpecieHero";
import { SpecieRelated } from "./_components/SpecieRelated";
import { SPECIE_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: SPECIE_METADATA.title,
  description: SPECIE_METADATA.description,
  keywords: [...SPECIE_METADATA.keywords],
};

export default function SpeciePage() {
  return (
    <InteriorPageShell>
      <SpecieHero />
      <SpecieConviction />
      <SpecieCards />
      <SpecieFaq />
      <SpecieRelated />
    </InteriorPageShell>
  );
}
