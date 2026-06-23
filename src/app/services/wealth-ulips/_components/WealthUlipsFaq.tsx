import { EditorialFaqSection } from "@/components/sections/EditorialFaqSection";
import { WEALTH_ULIPS_FAQ } from "../_data/content";

export function WealthUlipsFaq() {
  return (
    <EditorialFaqSection
      badge={WEALTH_ULIPS_FAQ.badge}
      headline={WEALTH_ULIPS_FAQ.headline}
      items={WEALTH_ULIPS_FAQ.items}
    />
  );
}
