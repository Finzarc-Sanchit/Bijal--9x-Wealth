import { GlossaryTermsSection } from "./GlossaryTermsSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { GLOSSARY_RELATED } from "../_data/content";

export function GlossarySections() {
  return (
    <>
      <GlossaryTermsSection />
      <RelatedLinksSection
        badge={GLOSSARY_RELATED.badge}
        headline={GLOSSARY_RELATED.headline}
        items={GLOSSARY_RELATED.items}
      />
    </>
  );
}
