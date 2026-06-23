import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { GLOBAL_RELATED } from "../_data/content";

export function GlobalRelated() {
  return (
    <RelatedLinksSection
      badge={GLOBAL_RELATED.badge}
      headline={GLOBAL_RELATED.headline}
      items={GLOBAL_RELATED.items}
    />
  );
}
