import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { SPECIE_RELATED } from "../_data/content";

export function SpecieRelated() {
  return (
    <RelatedLinksSection
      badge={SPECIE_RELATED.badge}
      headline={SPECIE_RELATED.headline}
      items={SPECIE_RELATED.items}
    />
  );
}
