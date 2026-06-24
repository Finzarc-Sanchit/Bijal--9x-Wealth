import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { OfficePracticeSection } from "@/components/sections/OfficePracticeSection";
import { DELHI_OFFICE_COVERAGE, DELHI_OFFICE_PRACTICE } from "../_data/content";

export function DelhiOfficeSections() {
  return (
    <>
      <OfficePracticeSection {...DELHI_OFFICE_PRACTICE} />
      <EditorialCardGrid
        badge={DELHI_OFFICE_COVERAGE.badge}
        headline={DELHI_OFFICE_COVERAGE.headline}
        items={DELHI_OFFICE_COVERAGE.items}
      />
    </>
  );
}
