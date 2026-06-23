import { EditorialFaqSection } from "@/components/sections/EditorialFaqSection";
import { TERM_LEGACY_FAQ } from "../_data/content";

export function TermLegacyFaq() {
  return (
    <EditorialFaqSection
      badge={TERM_LEGACY_FAQ.badge}
      headline={TERM_LEGACY_FAQ.headline}
      items={TERM_LEGACY_FAQ.items}
    />
  );
}
