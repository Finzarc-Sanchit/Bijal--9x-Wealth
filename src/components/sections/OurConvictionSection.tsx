import { OUR_CONVICTION_CONTENT } from "@/data/our-conviction";
import { ConvictionSection } from "@/components/sections/ConvictionSection";

export function OurConvictionSection({ className }: { className?: string }) {
  return (
    <ConvictionSection
      eyebrow={OUR_CONVICTION_CONTENT.eyebrow}
      heading={OUR_CONVICTION_CONTENT.heading}
      description={OUR_CONVICTION_CONTENT.description}
      background={OUR_CONVICTION_CONTENT.background}
      ctas={OUR_CONVICTION_CONTENT.ctas}
      cards={OUR_CONVICTION_CONTENT.services}
      className={className}
      id="our-conviction"
    />
  );
}
