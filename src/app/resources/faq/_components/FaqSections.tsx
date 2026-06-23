import { EditorialFaqSection } from "@/components/sections/EditorialFaqSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FAQ_CHAPTERS, FAQ_RELATED } from "../_data/content";

export function FaqSections() {
  return (
    <>
      {FAQ_CHAPTERS.map((chapter) => (
        <EditorialFaqSection
          key={chapter.badge}
          badge={chapter.badge}
          headline={chapter.headline}
          items={chapter.items}
        />
      ))}
      <RelatedLinksSection
        badge={FAQ_RELATED.badge}
        headline={FAQ_RELATED.headline}
        items={FAQ_RELATED.items}
      />
    </>
  );
}
