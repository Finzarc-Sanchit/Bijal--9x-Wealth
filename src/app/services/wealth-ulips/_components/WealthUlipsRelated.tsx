import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { WEALTH_ULIPS_RELATED } from "../_data/content";

export function WealthUlipsRelated() {
  return (
    <RelatedLinksSection
      badge={WEALTH_ULIPS_RELATED.badge}
      headline={WEALTH_ULIPS_RELATED.headline}
      items={WEALTH_ULIPS_RELATED.items}
    />
  );
}
