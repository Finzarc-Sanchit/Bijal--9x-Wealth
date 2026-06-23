import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { EditorialProseSection } from "@/components/sections/EditorialProseSection";
import { TERMS_CTAS, TERMS_FOOTNOTE, TERMS_HERO, TERMS_SECTIONS } from "../_data/content";

export function TermsHero() {
  return (
    <InnerPageHero
      backgroundImage={TERMS_HERO.backgroundImage}
      pillImage={TERMS_HERO.pillImage}
      leadWord={TERMS_HERO.leadWord}
      headlineLines={TERMS_HERO.headlineLines}
      epigraph={TERMS_HERO.epigraph}
      ctas={TERMS_CTAS}
    />
  );
}

export function TermsSections() {
  return (
    <>
      <EditorialProseSection subsections={TERMS_SECTIONS} />
      <EditorialProseSection paragraphs={[TERMS_FOOTNOTE]} />
    </>
  );
}
