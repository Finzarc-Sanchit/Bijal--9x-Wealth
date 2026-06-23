import { EditorialCardGrid } from "@/components/sections/EditorialCardGrid";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { GLOSSARY_RELATED, GLOSSARY_TERMS } from "../_data/content";

export function GlossarySections() {
  return (
    <>
      <EditorialCardGrid
        badge={GLOSSARY_TERMS.badge}
        headline={GLOSSARY_TERMS.headline}
        items={GLOSSARY_TERMS.items}
      />
      <RelatedLinksSection
        badge={GLOSSARY_RELATED.badge}
        headline={GLOSSARY_RELATED.headline}
        items={GLOSSARY_RELATED.items}
      />
    </>
  );
}
