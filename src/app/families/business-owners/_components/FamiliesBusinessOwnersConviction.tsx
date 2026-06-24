import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { FAMILIES_BUSINESS_OWNERS_CONVICTION } from "../_data/content";

export function FamiliesBusinessOwnersConviction() {
  return (
    <TermLegacyConvictionSection
      badge={FAMILIES_BUSINESS_OWNERS_CONVICTION.badge}
      headline={FAMILIES_BUSINESS_OWNERS_CONVICTION.headline}
      paragraphs={FAMILIES_BUSINESS_OWNERS_CONVICTION.paragraphs}
    />
  );
}
