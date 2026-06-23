import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { ABOUT_PRESS_RELATED } from "../_data/content";

export function AboutPressRelated() {
  return (
    <RelatedLinksSection
      badge={ABOUT_PRESS_RELATED.badge}
      headline={ABOUT_PRESS_RELATED.headline}
      items={ABOUT_PRESS_RELATED.items}
      id="about-press-related"
    />
  );
}
