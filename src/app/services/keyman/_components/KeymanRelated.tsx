import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { KEYMAN_RELATED } from "../_data/content";

export function KeymanRelated() {
  return (
    <RelatedLinksSection
      badge={KEYMAN_RELATED.badge}
      headline={KEYMAN_RELATED.headline}
      items={KEYMAN_RELATED.items}
    />
  );
}
