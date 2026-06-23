import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import {
  FAMILIES_BUSINESS_OWNERS_CONVICTION,
  FAMILIES_BUSINESS_OWNERS_PRIORITIES,
} from "../_data/content";

export function FamiliesBusinessOwnersConviction() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={FAMILIES_BUSINESS_OWNERS_CONVICTION.badge}
        headline={FAMILIES_BUSINESS_OWNERS_CONVICTION.headline}
        paragraphs={FAMILIES_BUSINESS_OWNERS_CONVICTION.paragraphs}
      />
      <EditorialCardGrid
        id="families-business-owners-priorities"
        badge={FAMILIES_BUSINESS_OWNERS_PRIORITIES.badge}
        headline={FAMILIES_BUSINESS_OWNERS_PRIORITIES.headline}
        items={FAMILIES_BUSINESS_OWNERS_PRIORITIES.items}
      />
    </>
  );
}
