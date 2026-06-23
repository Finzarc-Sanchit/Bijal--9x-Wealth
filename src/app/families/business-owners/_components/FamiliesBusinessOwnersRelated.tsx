import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAMILIES_BUSINESS_OWNERS_COVERAGE } from "../_data/content";

export function FamiliesBusinessOwnersRelated() {
  return (
    <RelatedLinksSection
      badge={FAMILIES_BUSINESS_OWNERS_COVERAGE.badge}
      headline={FAMILIES_BUSINESS_OWNERS_COVERAGE.headline}
      items={FAMILIES_BUSINESS_OWNERS_COVERAGE.items}
      id="families-business-owners-coverage"
    />
  );
}
