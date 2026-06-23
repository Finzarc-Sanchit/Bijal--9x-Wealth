import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { EditorialProseSection } from "@/components/sections/EditorialProseSection";
import {
  PRIVACY_CTAS,
  PRIVACY_FOOTNOTE,
  PRIVACY_HERO,
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
} from "../_data/content";

export function PrivacyHero() {
  return (
    <InnerPageHero
      backgroundImage={PRIVACY_HERO.backgroundImage}
      pillImage={PRIVACY_HERO.pillImage}
      leadWord={PRIVACY_HERO.leadWord}
      headlineLines={PRIVACY_HERO.headlineLines}
      epigraph={PRIVACY_HERO.epigraph}
      ctas={PRIVACY_CTAS}
    />
  );
}

export function PrivacySections() {
  return (
    <>
      <EditorialProseSection paragraphs={[PRIVACY_INTRO]} />
      <EditorialProseSection subsections={PRIVACY_SECTIONS} />
      <EditorialProseSection paragraphs={[PRIVACY_FOOTNOTE]} />
    </>
  );
}
