import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { DELHI_OFFICE_CTAS, DELHI_OFFICE_HERO } from "../_data/content";

export function DelhiOfficeHero() {
  return (
    <InnerPageHero
      backgroundImage={DELHI_OFFICE_HERO.backgroundImage}
      pillImage={DELHI_OFFICE_HERO.pillImage}
      leadWord={DELHI_OFFICE_HERO.leadWord}
      headlineLines={DELHI_OFFICE_HERO.headlineLines}
      epigraph={DELHI_OFFICE_HERO.epigraph}
      ctas={DELHI_OFFICE_CTAS}
    />
  );
}
