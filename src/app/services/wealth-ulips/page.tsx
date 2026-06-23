import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { WealthUlipsCards } from "./_components/WealthUlipsCards";
import { WealthUlipsConviction } from "./_components/WealthUlipsConviction";
import { WealthUlipsFaq } from "./_components/WealthUlipsFaq";
import { WealthUlipsHero } from "./_components/WealthUlipsHero";
import { WealthUlipsProcess } from "./_components/WealthUlipsProcess";
import { WealthUlipsRelated } from "./_components/WealthUlipsRelated";
import { WEALTH_ULIPS_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: WEALTH_ULIPS_METADATA.title,
  description: WEALTH_ULIPS_METADATA.description,
  keywords: [...WEALTH_ULIPS_METADATA.keywords],
};

export default function WealthUlipsPage() {
  return (
    <InteriorPageShell>
      <WealthUlipsHero />
      <WealthUlipsConviction />
      <WealthUlipsCards />
      <WealthUlipsProcess />
      <WealthUlipsFaq />
      <WealthUlipsRelated />
    </InteriorPageShell>
  );
}
