import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { SERVICES_FAMILY_LINKS } from "../_data/content";

export function ServicesFamilyLinks() {
  return (
    <RelatedLinksSection
      badge={SERVICES_FAMILY_LINKS.badge}
      headline={SERVICES_FAMILY_LINKS.headline}
      items={SERVICES_FAMILY_LINKS.items}
    />
  );
}
