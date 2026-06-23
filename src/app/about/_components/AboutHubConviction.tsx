import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { ABOUT_HUB_CONVICTION } from "../_data/content";

export function AboutHubConviction() {
  return (
    <TermLegacyConvictionSection
      badge={ABOUT_HUB_CONVICTION.badge}
      headline={ABOUT_HUB_CONVICTION.headline}
      paragraphs={ABOUT_HUB_CONVICTION.paragraphs}
    />
  );
}
