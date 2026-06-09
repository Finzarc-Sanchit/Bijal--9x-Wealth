import { AboutSection } from "@/components/sections/AboutSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import type { SiteContent } from "@/lib/content/schema";

export function AboutPage({ content }: { content: SiteContent }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-cream via-[#f7f3ec] to-brand-cream text-brand-navy">
      <SiteNav />
      <main>
        <AboutSection content={content} />
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
