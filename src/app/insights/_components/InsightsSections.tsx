import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { ThreeCardConviction } from "@/components/sections/ThreeCardConviction";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { INSIGHTS_CONVICTION, INSIGHTS_ESSAYS, INSIGHTS_RELATED } from "../_data/content";

export function InsightsSections() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={INSIGHTS_CONVICTION.badge}
        headline={INSIGHTS_CONVICTION.headline}
        paragraphs={INSIGHTS_CONVICTION.paragraphs}
      />
      <ThreeCardConviction
        id="insights-essays"
        eyebrow={INSIGHTS_ESSAYS.badge}
        title={INSIGHTS_ESSAYS.headline}
        subtitle="Quarterly letters and considered essays on protection, estate, succession, and stewardship."
        background={{
          src: "/images/our-conviction-1.webp",
          alt: "Editorial background for recent essays",
        }}
        cards={INSIGHTS_ESSAYS.items.map((item, index) => ({
          id: item.id,
          title: item.title,
          description: `${item.description} (${INSIGHTS_ESSAYS.readTimes[index]})`,
        }))}
      />
      <RelatedLinksSection
        badge={INSIGHTS_RELATED.badge}
        headline={INSIGHTS_RELATED.headline}
        items={INSIGHTS_RELATED.items}
      />
    </>
  );
}
