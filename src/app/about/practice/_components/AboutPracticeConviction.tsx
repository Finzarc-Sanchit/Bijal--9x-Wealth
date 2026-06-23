import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { ABOUT_PRACTICE_CONVICTION } from "../_data/content";

export function AboutPracticeConviction() {
  return (
    <TermLegacyConvictionSection
      badge={ABOUT_PRACTICE_CONVICTION.badge}
      headline={ABOUT_PRACTICE_CONVICTION.headline}
      paragraphs={ABOUT_PRACTICE_CONVICTION.paragraphs}
    />
  );
}
