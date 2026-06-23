import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { editorialCardsToStickyFeatures } from "@/lib/editorial-to-sticky";
import { SPECIE_CLASSES } from "../_data/content";

export function SpecieCards() {
  return (
    <StickyFeatureSection
      id="specie-classes"
      badge={SPECIE_CLASSES.badge}
      headline={SPECIE_CLASSES.headline}
      subtitle="All-risks worldwide cover for the assets ordinary policies overlook."
      features={editorialCardsToStickyFeatures(SPECIE_CLASSES.items)}
    />
  );
}
