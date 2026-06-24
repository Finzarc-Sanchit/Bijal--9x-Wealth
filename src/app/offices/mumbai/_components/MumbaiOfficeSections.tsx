import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { OfficePracticeSection } from "@/components/sections/OfficePracticeSection";
import { MUMBAI_OFFICE_COVERAGE, MUMBAI_OFFICE_PRACTICE } from "../_data/content";

export function MumbaiOfficeSections() {
  return (
    <>
      <OfficePracticeSection {...MUMBAI_OFFICE_PRACTICE} />
      <EditorialCardGrid
        badge={MUMBAI_OFFICE_COVERAGE.badge}
        headline={MUMBAI_OFFICE_COVERAGE.headline}
        items={MUMBAI_OFFICE_COVERAGE.items}
      />
    </>
  );
}
