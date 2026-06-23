import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { HEALTH_RELATED } from "../_data/content";

export function HealthRelated() {
  return (
    <RelatedLinksSection
      badge={HEALTH_RELATED.badge}
      headline={HEALTH_RELATED.headline}
      items={HEALTH_RELATED.items}
    />
  );
}
