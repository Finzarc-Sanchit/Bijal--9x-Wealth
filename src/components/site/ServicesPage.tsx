import { ServicesBlueprintSection } from "@/components/sections/ServicesBlueprintSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import type { SiteContent } from "@/lib/content/schema";

export function ServicesPage({ content }: { content: SiteContent }) {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <SiteNav variant="floating" pinVisible />
      <main>
        <ServicesSection content={content} isStandalonePage />
        <ServicesBlueprintSection content={content} />
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
