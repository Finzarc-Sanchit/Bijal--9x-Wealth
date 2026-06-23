import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { TERM_LEGACY_CONVICTION } from "../_data/content";

export function TermLegacyConviction() {
  return (
    <TermLegacyConvictionSection
      badge={TERM_LEGACY_CONVICTION.badge}
      headline={TERM_LEGACY_CONVICTION.headline}
      paragraphs={TERM_LEGACY_CONVICTION.paragraphs}
      sticky
    />
  );
}
