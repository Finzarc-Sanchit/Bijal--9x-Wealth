import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAMILIES_NRI_COVERAGE } from "../_data/content";

export function FamiliesNriRelated() {
  return (
    <RelatedLinksSection
      badge={FAMILIES_NRI_COVERAGE.badge}
      headline={FAMILIES_NRI_COVERAGE.headline}
      items={FAMILIES_NRI_COVERAGE.items}
      id="families-nri-coverage"
    />
  );
}
