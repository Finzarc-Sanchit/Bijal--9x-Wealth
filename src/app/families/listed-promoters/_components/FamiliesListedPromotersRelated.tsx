import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAMILIES_LISTED_PROMOTERS_COVERAGE } from "../_data/content";

export function FamiliesListedPromotersRelated() {
  return (
    <RelatedLinksSection
      badge={FAMILIES_LISTED_PROMOTERS_COVERAGE.badge}
      headline={FAMILIES_LISTED_PROMOTERS_COVERAGE.headline}
      items={FAMILIES_LISTED_PROMOTERS_COVERAGE.items}
      id="families-listed-promoters-coverage"
    />
  );
}
