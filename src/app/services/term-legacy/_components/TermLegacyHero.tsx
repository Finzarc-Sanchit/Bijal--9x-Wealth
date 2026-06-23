import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { TERM_LEGACY_CTAS, TERM_LEGACY_HERO } from "../_data/content";

export function TermLegacyHero() {
  return (
    <InnerPageHero
      backgroundImage={TERM_LEGACY_HERO.backgroundImage}
      pillImage={TERM_LEGACY_HERO.pillImage}
      leadWord={TERM_LEGACY_HERO.leadWord}
      headlineLines={TERM_LEGACY_HERO.headlineLines}
      epigraph={TERM_LEGACY_HERO.epigraph}
      ctas={TERM_LEGACY_CTAS}
    />
  );
}
