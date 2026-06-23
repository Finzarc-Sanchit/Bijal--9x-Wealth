import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { FAMILIES_HUB_CONVICTION } from "../_data/content";

export function FamiliesHubConviction() {
  return (
    <TermLegacyConvictionSection
      badge={FAMILIES_HUB_CONVICTION.badge}
      headline={FAMILIES_HUB_CONVICTION.headline}
      paragraphs={FAMILIES_HUB_CONVICTION.paragraphs}
    />
  );
}
