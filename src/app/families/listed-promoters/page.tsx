import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { FamiliesListedPromotersConviction } from "./_components/FamiliesListedPromotersConviction";
import { FamiliesListedPromotersHero } from "./_components/FamiliesListedPromotersHero";
import { FamiliesListedPromotersRelated } from "./_components/FamiliesListedPromotersRelated";
import { FAMILIES_LISTED_PROMOTERS_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: FAMILIES_LISTED_PROMOTERS_METADATA.title,
  description: FAMILIES_LISTED_PROMOTERS_METADATA.description,
  keywords: [...FAMILIES_LISTED_PROMOTERS_METADATA.keywords],
};

export default function FamiliesListedPromotersPage() {
  return (
    <InteriorPageShell>
      <FamiliesListedPromotersHero />
      <FamiliesListedPromotersConviction />
      <FamiliesListedPromotersRelated />
    </InteriorPageShell>
  );
}
