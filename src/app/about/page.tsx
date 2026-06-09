import { AboutPage } from "@/components/site/AboutPage";
import { getSiteContent } from "@/lib/content/store";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return {
    title: `About ${content.about.name} | 9X Wealth — Borivali, Mumbai`,
    description: content.about.bio.slice(0, 155),
    keywords: [
      "Bijal Pathak 9X Wealth",
      "Wealth Manager Borivali",
      "Tata AIA partner Mumbai",
      "Financial planner Borivali",
    ],
  };
}

export default async function About() {
  const content = await getSiteContent();
  return <AboutPage content={content} />;
}
