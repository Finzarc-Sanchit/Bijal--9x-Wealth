import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { KEYMAN_CTAS, KEYMAN_HERO } from "../_data/content";

export function KeymanHero() {
  return (
    <InnerPageHero
      backgroundImage={KEYMAN_HERO.backgroundImage}
      pillImage={KEYMAN_HERO.pillImage}
      leadWord={KEYMAN_HERO.leadWord}
      headlineLines={KEYMAN_HERO.headlineLines}
      epigraph={KEYMAN_HERO.epigraph}
      ctas={KEYMAN_CTAS}
    />
  );
}
