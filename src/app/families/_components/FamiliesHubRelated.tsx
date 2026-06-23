import { ProtectionShowcase } from "@/components/sections/ProtectionShowcase";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { relatedLinksToProtectionItems } from "@/lib/editorial-to-protection";
import { FAMILIES_HUB_COVERAGE, FAMILIES_HUB_PRACTICES } from "../_data/content";

export function FamiliesHubRelated() {
  return (
    <>
      <ProtectionShowcase
        id="families-hub-practices"
        eyebrow={FAMILIES_HUB_PRACTICES.badge}
        heading={FAMILIES_HUB_PRACTICES.headline}
        description="Across twelve years, four situations have emerged most frequently in the practice. For each, we have built a dedicated way of working."
        items={relatedLinksToProtectionItems(FAMILIES_HUB_PRACTICES.items)}
      />
      <RelatedLinksSection
        badge={FAMILIES_HUB_COVERAGE.badge}
        headline={FAMILIES_HUB_COVERAGE.headline}
        items={FAMILIES_HUB_COVERAGE.items}
        id="families-hub-coverage"
      />
    </>
  );
}
