import type { SiteContent } from "@/lib/content/schema";
import { SiteIntroLayout } from "@/components/layout/SiteIntroLayout";
import { AxaStyleHero } from "@/components/hero/AxaStyleHero";
import { BrandsBarSection } from "@/components/sections/BrandsBarSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AreasOfPracticeSection } from "@/components/sections/AreasOfPracticeSection";
import { UHNISection } from "@/components/sections/UHNISection";
import { ProcessSectionDefault } from "@/components/sections/ProcessSection";
import { WhatWeProtectSectionDefault } from "@/components/sections/WhatWeProtectSection";
import { OurConvictionSection } from "@/components/sections/OurConvictionSection";
import { Testimonial } from "../sections/Testimonial";

export function SitePage({ content }: { content: SiteContent; }) {
  return (
    <SiteIntroLayout tagline={content.site.tagline} siteName={content.site.name}>
      <div className="bg-surface text-brand-navy">
        <main>
          <AxaStyleHero content={content} />
          <StatsSection />
          <BrandsBarSection />
          <OurConvictionSection />
          <WhatWeProtectSectionDefault className="bg-surface" />
          <ProcessSectionDefault className="bg-white" />
          {/* Pinned Stacking Block */}
          <div className="relative isolate">
            <AreasOfPracticeSection stackPinned className="bg-surface" />
            <UHNISection className="bg-white" />
          </div>
          <Testimonial className="bg-surface" />
        </main>
      </div>
    </SiteIntroLayout>
  );
}
