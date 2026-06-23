import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { GLOBAL_CONVICTION } from "../_data/content";

export function GlobalConviction() {
  return (
    <TermLegacyConvictionSection
      badge={GLOBAL_CONVICTION.badge}
      headline={GLOBAL_CONVICTION.headline}
      paragraphs={GLOBAL_CONVICTION.paragraphs}
    />
  );
}
