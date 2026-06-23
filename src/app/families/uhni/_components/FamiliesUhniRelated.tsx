import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAMILIES_UHNI_COVERAGE } from "../_data/content";

export function FamiliesUhniRelated() {
  return (
    <RelatedLinksSection
      badge={FAMILIES_UHNI_COVERAGE.badge}
      headline={FAMILIES_UHNI_COVERAGE.headline}
      items={FAMILIES_UHNI_COVERAGE.items}
      id="families-uhni-coverage"
    />
  );
}
