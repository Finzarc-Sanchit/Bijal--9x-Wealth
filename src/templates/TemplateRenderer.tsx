import type { SiteContent } from "@/lib/content/schema";
import { SitePage } from "@/components/site/SitePage";

/** @deprecated Use SitePage directly */
export function TemplateRenderer({ content }: { content: SiteContent }) {
  return <SitePage content={content} />;
}
