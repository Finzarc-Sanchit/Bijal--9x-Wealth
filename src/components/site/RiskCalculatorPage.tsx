import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { RiskCalculatorExperience } from "@/components/risk-calculator/RiskCalculatorExperience";
import type { SiteContent } from "@/lib/content/schema";

export function RiskCalculatorPage({ content }: { content: SiteContent }) {
  return (
    <div className="risk-calc-page min-h-screen bg-brand-cream text-brand-navy">
      <SiteNav />
      <main className="pt-[88px] pb-16 sm:pt-[92px] sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RiskCalculatorExperience />
        </div>
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
