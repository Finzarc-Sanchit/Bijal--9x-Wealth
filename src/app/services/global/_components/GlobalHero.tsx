import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { GLOBAL_CTAS, GLOBAL_HERO } from "../_data/content";

export function GlobalHero() {
  return (
    <InnerPageHero
      backgroundImage={GLOBAL_HERO.backgroundImage}
      pillImage={GLOBAL_HERO.pillImage}
      leadWord={GLOBAL_HERO.leadWord}
      headlineLines={GLOBAL_HERO.headlineLines}
      epigraph={GLOBAL_HERO.epigraph}
      ctas={GLOBAL_CTAS}
    />
  );
}
