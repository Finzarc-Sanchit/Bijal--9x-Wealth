import { EditorialFaqSection } from "@/components/sections/EditorialFaqSection";
import { GLOBAL_FAQ } from "../_data/content";

export function GlobalFaq() {
  return (
    <EditorialFaqSection
      badge={GLOBAL_FAQ.badge}
      headline={GLOBAL_FAQ.headline}
      items={GLOBAL_FAQ.items}
    />
  );
}
