import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { AboutPressContent } from "./_components/AboutPressContent";
import { AboutPressHero } from "./_components/AboutPressHero";
import { AboutPressRelated } from "./_components/AboutPressRelated";
import { ABOUT_PRESS_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: ABOUT_PRESS_METADATA.title,
  description: ABOUT_PRESS_METADATA.description,
  keywords: [...ABOUT_PRESS_METADATA.keywords],
};

export default function AboutPressPage() {
  return (
    <InteriorPageShell>
      <AboutPressHero />
      <AboutPressContent />
      <AboutPressRelated />
    </InteriorPageShell>
  );
}
