import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { MUMBAI_OFFICE_CTAS, MUMBAI_OFFICE_HERO } from "../_data/content";

export function MumbaiOfficeHero() {
  return (
    <InnerPageHero
      backgroundImage={MUMBAI_OFFICE_HERO.backgroundImage}
      pillImage={MUMBAI_OFFICE_HERO.pillImage}
      leadWord={MUMBAI_OFFICE_HERO.leadWord}
      headlineLines={MUMBAI_OFFICE_HERO.headlineLines}
      epigraph={MUMBAI_OFFICE_HERO.epigraph}
      ctas={MUMBAI_OFFICE_CTAS}
    />
  );
}
