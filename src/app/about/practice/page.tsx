import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { AboutPracticeHero } from "./_components/AboutPracticeHero";
import { AboutPracticeProcess } from "./_components/AboutPracticeProcess";
import { AboutPracticeRelated } from "./_components/AboutPracticeRelated";
import { ABOUT_PRACTICE_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: ABOUT_PRACTICE_METADATA.title,
  description: ABOUT_PRACTICE_METADATA.description,
  keywords: [...ABOUT_PRACTICE_METADATA.keywords],
};

export default function AboutPracticePage() {
  return (
    <InteriorPageShell>
      <AboutPracticeHero />
      <AboutPracticeProcess />
      <AboutPracticeRelated />
    </InteriorPageShell>
  );
}
