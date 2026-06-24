import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { FamiliesBusinessOwnersConviction } from "./_components/FamiliesBusinessOwnersConviction";
import { FamiliesBusinessOwnersHero } from "./_components/FamiliesBusinessOwnersHero";
import { FamiliesBusinessOwnersPriorities } from "./_components/FamiliesBusinessOwnersPriorities";
import { FamiliesBusinessOwnersRelated } from "./_components/FamiliesBusinessOwnersRelated";
import { FAMILIES_BUSINESS_OWNERS_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: FAMILIES_BUSINESS_OWNERS_METADATA.title,
  description: FAMILIES_BUSINESS_OWNERS_METADATA.description,
  keywords: [...FAMILIES_BUSINESS_OWNERS_METADATA.keywords],
};

export default function FamiliesBusinessOwnersPage() {
  return (
    <InteriorPageShell>
      <FamiliesBusinessOwnersHero />
      <FamiliesBusinessOwnersConviction />
      <FamiliesBusinessOwnersPriorities />
      <FamiliesBusinessOwnersRelated />
    </InteriorPageShell>
  );
}
