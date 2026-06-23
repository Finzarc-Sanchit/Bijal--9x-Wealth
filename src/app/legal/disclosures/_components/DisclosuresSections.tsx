import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { EditorialProseSection } from "@/components/sections/EditorialProseSection";
import { DISCLOSURES_CTAS, DISCLOSURES_FOOTNOTE, DISCLOSURES_HERO, DISCLOSURES_SECTIONS } from "../_data/content";

export function DisclosuresHero() {
  return (
    <InnerPageHero
      backgroundImage={DISCLOSURES_HERO.backgroundImage}
      pillImage={DISCLOSURES_HERO.pillImage}
      leadWord={DISCLOSURES_HERO.leadWord}
      headlineLines={DISCLOSURES_HERO.headlineLines}
      epigraph={DISCLOSURES_HERO.epigraph}
      ctas={DISCLOSURES_CTAS}
    />
  );
}

export function DisclosuresSections() {
  return (
    <>
      <EditorialProseSection subsections={DISCLOSURES_SECTIONS} />
      <EditorialProseSection paragraphs={[DISCLOSURES_FOOTNOTE]} />
    </>
  );
}
