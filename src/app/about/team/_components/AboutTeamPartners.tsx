import { StepProcessLayout } from "@/components/sections/StepProcessLayout";
import { ThreeCardConviction } from "@/components/sections/ThreeCardConviction";
import { gridItemsToStepProcessSteps } from "@/lib/grid-to-process";
import { ABOUT_TEAM_FUNCTIONS, ABOUT_TEAM_PARTNERS } from "../_data/content";

export function AboutTeamPartners() {
  return (
    <>
      <ThreeCardConviction
        id="about-team-partners"
        eyebrow={ABOUT_TEAM_PARTNERS.badge}
        title={ABOUT_TEAM_PARTNERS.headline}
        subtitle="Principals and advisors across Mumbai, Bengaluru, and Delhi — one house, three offices."
        background={{
          src: "/images/our-conviction.jpg",
          alt: "The 9xWealth partnership across India",
        }}
        cards={ABOUT_TEAM_PARTNERS.items.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
        }))}
      />
      <StepProcessLayout
        id="about-team-functions"
        eyebrow={ABOUT_TEAM_FUNCTIONS.badge}
        title={ABOUT_TEAM_FUNCTIONS.headline}
        subtitle="Specialist desks behind every placement — claims, underwriting, cross-border, and specie."
        steps={gridItemsToStepProcessSteps(ABOUT_TEAM_FUNCTIONS.items)}
      />
    </>
  );
}
