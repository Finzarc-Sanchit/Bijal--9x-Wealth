import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { editorialCardsToStickyFeatures } from "@/lib/editorial-to-sticky";
import { FAMILIES_UHNI_INVITATION, FAMILIES_UHNI_INVITATION_INTRO } from "../_data/content";

export function FamiliesUhniInvitation() {
  return (
    <>
      <TermLegacyConvictionSection
        badge={FAMILIES_UHNI_INVITATION_INTRO.badge}
        headline={FAMILIES_UHNI_INVITATION_INTRO.headline}
        paragraphs={FAMILIES_UHNI_INVITATION_INTRO.paragraphs}
        id="families-uhni-invitation-intro"
      />
      <StickyFeatureSection
        id="families-uhni-invitation"
        badge={FAMILIES_UHNI_INVITATION.badge}
        headline={FAMILIES_UHNI_INVITATION.headline}
        subtitle="What the private practice includes for families of ₹100 Cr+ wealth."
        features={editorialCardsToStickyFeatures(FAMILIES_UHNI_INVITATION.items)}
      />
    </>
  );
}
