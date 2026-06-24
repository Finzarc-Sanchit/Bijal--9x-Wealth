import { NumberedAccordionSection } from "@/components/sections/NumberedAccordionSection";
import {
  FAMILIES_BUSINESS_OWNERS_HERO,
  FAMILIES_BUSINESS_OWNERS_PRIORITIES,
} from "../_data/content";

export function FamiliesBusinessOwnersPriorities() {
  return (
    <NumberedAccordionSection
      id="families-business-owners-priorities"
      badge={FAMILIES_BUSINESS_OWNERS_PRIORITIES.badge}
      headline={FAMILIES_BUSINESS_OWNERS_PRIORITIES.headline}
      backgroundImage={FAMILIES_BUSINESS_OWNERS_HERO.backgroundImage}
      variant="overlay"
      items={FAMILIES_BUSINESS_OWNERS_PRIORITIES.items.map((item) => ({
        title: item.title,
        description: item.description,
      }))}
      defaultOpenIndex={0}
    />
  );
}
