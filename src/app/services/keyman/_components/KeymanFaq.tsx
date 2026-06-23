import { EditorialFaqSection } from "@/components/sections/EditorialFaqSection";
import { KEYMAN_FAQ } from "../_data/content";

export function KeymanFaq() {
  return (
    <EditorialFaqSection
      badge={KEYMAN_FAQ.badge}
      headline={KEYMAN_FAQ.headline}
      items={KEYMAN_FAQ.items}
    />
  );
}
