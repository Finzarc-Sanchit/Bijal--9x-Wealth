import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { BENGALURU_OFFICE_CTAS, BENGALURU_OFFICE_HERO } from "../_data/content";

export function BengaluruOfficeHero() {
  return (
    <InnerPageHero
      backgroundImage={BENGALURU_OFFICE_HERO.backgroundImage}
      pillImage={BENGALURU_OFFICE_HERO.pillImage}
      leadWord={BENGALURU_OFFICE_HERO.leadWord}
      headlineLines={BENGALURU_OFFICE_HERO.headlineLines}
      epigraph={BENGALURU_OFFICE_HERO.epigraph}
      ctas={BENGALURU_OFFICE_CTAS}
    />
  );
}
