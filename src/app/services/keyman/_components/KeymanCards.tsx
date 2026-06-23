import { PracticeAreasSection } from "@/components/sections/PracticeAreasSection";
import {
  KEYMAN_STRUCTURE_AREAS,
  KEYMAN_STRUCTURES_META,
} from "../_data/content";

export function KeymanCards() {
  return (
    <PracticeAreasSection
      id="six-structures"
      meta={KEYMAN_STRUCTURES_META}
      areas={KEYMAN_STRUCTURE_AREAS}
    />
  );
}
