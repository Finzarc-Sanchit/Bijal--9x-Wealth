import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { editorialCardsToStickyFeatures } from "@/lib/editorial-to-sticky";
import { FAMILIES_NRI_CONSIDERATIONS, FAMILIES_NRI_CONVICTION } from "../_data/content";

export function FamiliesNriConviction() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={FAMILIES_NRI_CONVICTION.badge}
        headline={FAMILIES_NRI_CONVICTION.headline}
        paragraphs={FAMILIES_NRI_CONVICTION.paragraphs}
      />
      <StickyFeatureSection
        id="families-nri-considerations"
        badge={FAMILIES_NRI_CONSIDERATIONS.badge}
        headline={FAMILIES_NRI_CONSIDERATIONS.headline}
        subtitle="What changes when the family crosses borders."
        features={editorialCardsToStickyFeatures(FAMILIES_NRI_CONSIDERATIONS.items)}
      />
    </>
  );
}
