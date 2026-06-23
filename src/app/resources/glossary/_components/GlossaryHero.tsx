import { InnerPageHero } from "@/components/hero/InteriorPageHero";
import { GLOSSARY_CTAS, GLOSSARY_HERO } from "../_data/content";

export function GlossaryHero() {
  return (
    <InnerPageHero
      backgroundImage={GLOSSARY_HERO.backgroundImage}
      pillImage={GLOSSARY_HERO.pillImage}
      leadWord={GLOSSARY_HERO.leadWord}
      headlineLines={GLOSSARY_HERO.headlineLines}
      epigraph={GLOSSARY_HERO.epigraph}
      ctas={GLOSSARY_CTAS}
    />
  );
}
