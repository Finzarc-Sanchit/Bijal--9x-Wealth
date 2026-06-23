import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { HealthConviction } from "./_components/HealthConviction";
import { HealthFaq } from "./_components/HealthFaq";
import { HealthHero } from "./_components/HealthHero";
import { HealthProcess } from "./_components/HealthProcess";
import { HealthRelated } from "./_components/HealthRelated";
import { HEALTH_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: HEALTH_METADATA.title,
  description: HEALTH_METADATA.description,
  keywords: [...HEALTH_METADATA.keywords],
};

export default function HealthPage() {
  return (
    <InteriorPageShell>
      <HealthHero />
      <HealthConviction />
      <HealthProcess />
      <HealthFaq />
      <HealthRelated />
    </InteriorPageShell>
  );
}
