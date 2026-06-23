import { WhatWeProtectSection } from "@/components/sections/WhatWeProtectSection";
import { KEYMAN_STRUCTURES_PROTECT_CONTENT } from "../_data/content";

export function KeymanCards() {
  return (
    <WhatWeProtectSection
      id="six-structures"
      content={KEYMAN_STRUCTURES_PROTECT_CONTENT}
    />
  );
}
