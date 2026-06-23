import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { ServicesFamilyLinks } from "./_components/ServicesFamilyLinks";
import { ServicesHero } from "./_components/ServicesHero";
import { ServicesPractice } from "./_components/ServicesPractice";
import { ServicesProcess } from "./_components/ServicesProcess";
import { SERVICES_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: SERVICES_METADATA.title,
  description: SERVICES_METADATA.description,
  keywords: [...SERVICES_METADATA.keywords],
};

export default function ServicesPage() {
  return (
    <InteriorPageShell>
      <ServicesHero />
      <ServicesPractice />
      <ServicesProcess />
      <ServicesFamilyLinks />
    </InteriorPageShell>
  );
}
