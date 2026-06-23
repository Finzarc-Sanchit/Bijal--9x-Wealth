import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { ABOUT_PRACTICE_RELATED } from "../_data/content";

export function AboutPracticeRelated() {
  return (
    <RelatedLinksSection
      badge={ABOUT_PRACTICE_RELATED.badge}
      headline={ABOUT_PRACTICE_RELATED.headline}
      items={ABOUT_PRACTICE_RELATED.items}
      id="about-practice-related"
    />
  );
}
