import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { OfficePracticeSection } from "@/components/sections/OfficePracticeSection";
import { BENGALURU_OFFICE_COVERAGE, BENGALURU_OFFICE_PRACTICE } from "../_data/content";

export function BengaluruOfficeSections() {
  return (
    <>
      <OfficePracticeSection {...BENGALURU_OFFICE_PRACTICE} />
      <EditorialCardGrid
        badge={BENGALURU_OFFICE_COVERAGE.badge}
        headline={BENGALURU_OFFICE_COVERAGE.headline}
        items={BENGALURU_OFFICE_COVERAGE.items}
      />
    </>
  );
}
