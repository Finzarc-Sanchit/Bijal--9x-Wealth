import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { KeymanCards } from "./_components/KeymanCards";
import { KeymanConviction } from "./_components/KeymanConviction";
import { KeymanFaq } from "./_components/KeymanFaq";
import { KeymanHero } from "./_components/KeymanHero";
import { KeymanRelated } from "./_components/KeymanRelated";
import { KEYMAN_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: KEYMAN_METADATA.title,
  description: KEYMAN_METADATA.description,
  keywords: [...KEYMAN_METADATA.keywords],
};

export default function KeymanPage() {
  return (
    <InteriorPageShell>
      <KeymanHero />
      <KeymanConviction />
      <KeymanCards />
      <KeymanFaq />
      <KeymanRelated />
    </InteriorPageShell>
  );
}
