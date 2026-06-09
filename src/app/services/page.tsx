import { ServicesPage } from "@/components/site/ServicesPage";
import { getSiteContent } from "@/lib/content/store";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return {
    title: "Services | 9X Wealth — Insurance, Investments & Wealth Planning",
    description:
      "Life insurance via Tata AIA, mutual fund SIPs, retirement planning, and goal-based wealth strategies with Bijal Pathak in Borivali, Mumbai.",
    keywords: [
      "insurance Borivali",
      "mutual funds Mumbai",
      "wealth planning Borivali",
      "Tata AIA partner",
      "financial advisor Mumbai West",
    ],
  };
}

export default async function Services() {
  const content = await getSiteContent();
  return <ServicesPage content={content} />;
}
