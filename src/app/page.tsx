import { SitePage } from "@/components/site/SitePage";
import { getSiteContent } from "@/lib/content/store";

export default async function Home() {
  const content = await getSiteContent();
  return <SitePage content={content} />;
}
