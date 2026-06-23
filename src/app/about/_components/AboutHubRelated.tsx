import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { ABOUT_HUB_RELATED } from "../_data/content";

export function AboutHubRelated() {
  return (
    <RelatedLinksSection
      badge={ABOUT_HUB_RELATED.badge}
      headline={ABOUT_HUB_RELATED.headline}
      items={ABOUT_HUB_RELATED.items}
      id="about-hub-related"
    />
  );
}
