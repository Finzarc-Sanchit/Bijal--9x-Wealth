import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { ResourcesHero } from "./_components/ResourcesHero";
import { ResourcesSections } from "./_components/ResourcesSections";
import { RESOURCES_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: RESOURCES_METADATA.title,
  description: RESOURCES_METADATA.description,
  keywords: [...RESOURCES_METADATA.keywords],
};

export default function ResourcesPage() {
  return (
    <InteriorPageShell>
      <ResourcesHero />
      <ResourcesSections />
    </InteriorPageShell>
  );
}
