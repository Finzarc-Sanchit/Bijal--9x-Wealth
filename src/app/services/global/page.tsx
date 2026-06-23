import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { GlobalCards } from "./_components/GlobalCards";
import { GlobalConviction } from "./_components/GlobalConviction";
import { GlobalFaq } from "./_components/GlobalFaq";
import { GlobalHero } from "./_components/GlobalHero";
import { GlobalProcess } from "./_components/GlobalProcess";
import { GlobalRelated } from "./_components/GlobalRelated";
import { GLOBAL_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: GLOBAL_METADATA.title,
  description: GLOBAL_METADATA.description,
  keywords: [...GLOBAL_METADATA.keywords],
};

export default function GlobalPage() {
  return (
    <InteriorPageShell>
      <GlobalHero />
      <GlobalConviction />
      <GlobalCards />
      <GlobalProcess />
      <GlobalFaq />
      <GlobalRelated />
    </InteriorPageShell>
  );
}
