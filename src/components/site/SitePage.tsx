import type { SiteContent } from "@/lib/content/schema";
import { SiteIntroLayout } from "@/components/layout/SiteIntroLayout";
import { HimsStyleHero } from "@/components/hero/HimsStyleHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { ConsultationFormSection } from "@/components/sections/ConsultationFormSection";
import { TestimonialCarouselSection } from "@/components/sections/TestimonialCarouselSection";
import { FinancialHealthQuiz } from "@/components/sections/FinancialHealthQuiz";
import { GoalSliderSection } from "@/components/sections/GoalSliderSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/templates/shared/sections";

export function SitePage({ content }: { content: SiteContent }) {
  return (
    <SiteIntroLayout tagline={content.site.tagline} siteName={content.site.name}>
      <div className="min-h-screen bg-brand-cream text-brand-navy">
        <SiteNav />
        <main>
          <HimsStyleHero content={content} />
          <FinancialHealthQuiz />
          <GoalSliderSection />
          <ServicesSection content={content} />
          <TestimonialCarouselSection content={content} />
          <ConsultationFormSection />
          <ContactSection content={content} />
        </main>
        <SiteFooter content={content} />
      </div>
    </SiteIntroLayout>
  );
}
