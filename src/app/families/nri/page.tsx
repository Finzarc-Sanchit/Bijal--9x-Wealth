import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { FamiliesNriConviction } from "./_components/FamiliesNriConviction";
import { FamiliesNriHero } from "./_components/FamiliesNriHero";
import { FamiliesNriRelated } from "./_components/FamiliesNriRelated";
import { FAMILIES_NRI_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: FAMILIES_NRI_METADATA.title,
  description: FAMILIES_NRI_METADATA.description,
  keywords: [...FAMILIES_NRI_METADATA.keywords],
};

export default function FamiliesNriPage() {
  return (
    <InteriorPageShell>
      <FamiliesNriHero />
      <FamiliesNriConviction />
      <FamiliesNriRelated />
    </InteriorPageShell>
  );
}
