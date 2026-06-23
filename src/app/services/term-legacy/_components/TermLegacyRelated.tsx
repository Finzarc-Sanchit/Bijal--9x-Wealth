import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { TERM_LEGACY_RELATED } from "../_data/content";

export function TermLegacyRelated() {
  return (
    <RelatedLinksSection
      badge={TERM_LEGACY_RELATED.badge}
      headline={TERM_LEGACY_RELATED.headline}
      items={TERM_LEGACY_RELATED.items}
    />
  );
}
