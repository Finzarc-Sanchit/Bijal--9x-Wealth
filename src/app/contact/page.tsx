import { InteriorPageShell } from "@/components/layout/InteriorPageShell";
import type { Metadata } from "next";
import { ContactForm } from "./_components/ContactForm";
import { ContactHero } from "./_components/ContactHero";
import { CONTACT_METADATA } from "./_data/content";

export const metadata: Metadata = {
  title: CONTACT_METADATA.title,
  description: CONTACT_METADATA.description,
  keywords: [...CONTACT_METADATA.keywords],
};

export default function ContactPage() {
  return (
    <InteriorPageShell>
      <ContactHero />
      <ContactForm />
    </InteriorPageShell>
  );
}
