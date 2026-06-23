import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { CONTACT_CTAS, CONTACT_HERO } from "../_data/content";

export function ContactHero() {
  return (
    <InnerPageHero
      backgroundImage={CONTACT_HERO.backgroundImage}
      pillImage={CONTACT_HERO.pillImage}
      leadWord={CONTACT_HERO.leadWord}
      headlineLines={CONTACT_HERO.headlineLines}
      epigraph={CONTACT_HERO.epigraph}
      ctas={CONTACT_CTAS}
    />
  );
}
