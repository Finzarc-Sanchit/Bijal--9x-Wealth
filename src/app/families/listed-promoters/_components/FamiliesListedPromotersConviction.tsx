import { ProtectionShowcase } from "@/components/sections/ProtectionShowcase";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { editorialCardsToProtectionItems } from "@/lib/editorial-to-protection";
import {
  FAMILIES_LISTED_PROMOTERS_CONVICTION,
  FAMILIES_LISTED_PROMOTERS_PRIORITIES,
} from "../_data/content";

export function FamiliesListedPromotersConviction() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={FAMILIES_LISTED_PROMOTERS_CONVICTION.badge}
        headline={FAMILIES_LISTED_PROMOTERS_CONVICTION.headline}
        paragraphs={FAMILIES_LISTED_PROMOTERS_CONVICTION.paragraphs}
      />
      <ProtectionShowcase
        id="families-listed-promoters-priorities"
        eyebrow={FAMILIES_LISTED_PROMOTERS_PRIORITIES.badge}
        heading={FAMILIES_LISTED_PROMOTERS_PRIORITIES.headline}
        description="The architecture that survives public scrutiny."
        items={editorialCardsToProtectionItems(FAMILIES_LISTED_PROMOTERS_PRIORITIES.items)}
      />
    </>
  );
}
