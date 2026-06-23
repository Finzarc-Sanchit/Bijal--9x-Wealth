import { ProtectionShowcase } from "@/components/sections/ProtectionShowcase";
import { editorialCardsToProtectionItems } from "@/lib/editorial-to-protection";
import { ABOUT_HUB_REGULATORY } from "../_data/content";

export function AboutHubRegulatory() {
  return (
    <ProtectionShowcase
      id="about-hub-regulatory"
      eyebrow="Regulatory standing"
      heading="Licences held by the house."
      description="Composite broker, IFSC intermediary, Lloyd's coverholder, and information-security certification."
      items={editorialCardsToProtectionItems(ABOUT_HUB_REGULATORY.items, {
        href: "/about/press",
        cta: "View press & recognition",
      })}
    />
  );
}
