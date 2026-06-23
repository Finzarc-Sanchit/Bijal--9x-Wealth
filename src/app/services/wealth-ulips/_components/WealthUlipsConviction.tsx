import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { WEALTH_ULIPS_CONVICTION } from "../_data/content";

export function WealthUlipsConviction() {
  return (
    <TermLegacyConvictionSection
      badge={WEALTH_ULIPS_CONVICTION.badge}
      headline={WEALTH_ULIPS_CONVICTION.headline}
      paragraphs={WEALTH_ULIPS_CONVICTION.paragraphs}
    />
  );
}
