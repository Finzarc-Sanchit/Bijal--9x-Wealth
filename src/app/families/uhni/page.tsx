import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { FamiliesUhniConviction } from "./_components/FamiliesUhniConviction";
import { FamiliesUhniHero } from "./_components/FamiliesUhniHero";
import { FamiliesUhniInvitation } from "./_components/FamiliesUhniInvitation";
import { FamiliesUhniRelated } from "./_components/FamiliesUhniRelated";
import { FAMILIES_UHNI_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: FAMILIES_UHNI_METADATA.title,
  description: FAMILIES_UHNI_METADATA.description,
  keywords: [...FAMILIES_UHNI_METADATA.keywords],
};

export default function FamiliesUhniPage() {
  return (
    <InteriorPageShell>
      <FamiliesUhniHero />
      <FamiliesUhniInvitation />
      <FamiliesUhniConviction />
      <FamiliesUhniRelated />
    </InteriorPageShell>
  );
}
