import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { SPECIE_CONVICTION } from "../_data/content";

export function SpecieConviction() {
  return (
    <TermLegacyConvictionSection
      badge={SPECIE_CONVICTION.badge}
      headline={SPECIE_CONVICTION.headline}
      paragraphs={SPECIE_CONVICTION.paragraphs}
    />
  );
}
