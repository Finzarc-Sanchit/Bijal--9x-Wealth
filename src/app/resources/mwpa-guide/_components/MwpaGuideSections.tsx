import { StepProcessLayout } from "@/components/sections/StepProcessLayout";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { EditorialFaqSection } from "@/components/sections/EditorialFaqSection";
import { EditorialProseSection } from "@/components/sections/EditorialProseSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { gridItemsToStepProcessSteps } from "@/lib/grid-to-process";
import Link from "next/link";
import {
  MWPA_GUIDE_ASSIGNMENT,
  MWPA_GUIDE_COMMON_MISTAKE,
  MWPA_GUIDE_CONSEQUENCES,
  MWPA_GUIDE_EXAMPLE,
  MWPA_GUIDE_FAQ,
  MWPA_GUIDE_FIT_IN,
  MWPA_GUIDE_RELATED,
  MWPA_GUIDE_WHAT_IT_DOES,
  MWPA_GUIDE_WHEN_NOT,
  MWPA_GUIDE_WHO_CAN_ASSIGN,
} from "../_data/content";

export function MwpaGuideSections() {
  return (
    <>
      <EditorialProseSection
        badge={MWPA_GUIDE_WHAT_IT_DOES.badge}
        paragraphs={MWPA_GUIDE_WHAT_IT_DOES.paragraphs}
      />
      <StepProcessLayout
        id="mwpa-guide-consequences"
        eyebrow={MWPA_GUIDE_CONSEQUENCES.badge}
        title={MWPA_GUIDE_CONSEQUENCES.headline}
        subtitle="Four structural consequences when a policy is assigned under Section 6 of the MWPA."
        steps={gridItemsToStepProcessSteps(MWPA_GUIDE_CONSEQUENCES.items)}
      />
      <EditorialProseSection
        id="who-can-assign"
        badge={MWPA_GUIDE_WHO_CAN_ASSIGN.badge}
        headline={MWPA_GUIDE_WHO_CAN_ASSIGN.headline}
        subsections={MWPA_GUIDE_WHO_CAN_ASSIGN.subsections}
      />
      <EditorialProseSection
        id="assignment-in-practice"
        badge={MWPA_GUIDE_ASSIGNMENT.badge}
        headline={MWPA_GUIDE_ASSIGNMENT.headline}
        paragraphs={MWPA_GUIDE_ASSIGNMENT.paragraphs}
      />
      <EditorialProseSection
        id="when-not-right"
        badge={MWPA_GUIDE_WHEN_NOT.badge}
        headline={MWPA_GUIDE_WHEN_NOT.headline}
        paragraphs={MWPA_GUIDE_WHEN_NOT.paragraphs}
        subsections={MWPA_GUIDE_WHEN_NOT.subsections}
      />
      <TermLegacyConvictionSection
        badge={MWPA_GUIDE_COMMON_MISTAKE.badge}
        headline={MWPA_GUIDE_COMMON_MISTAKE.headline}
        paragraphs={MWPA_GUIDE_COMMON_MISTAKE.paragraphs}
      />
      <EditorialFaqSection
        badge={MWPA_GUIDE_FAQ.badge}
        headline={MWPA_GUIDE_FAQ.headline}
        items={MWPA_GUIDE_FAQ.items}
      />
      <EditorialProseSection
        id="worked-example"
        badge={MWPA_GUIDE_EXAMPLE.badge}
        headline={MWPA_GUIDE_EXAMPLE.headline}
        paragraphs={MWPA_GUIDE_EXAMPLE.paragraphs}
      />
      <EditorialProseSection
        id="where-we-fit"
        badge={MWPA_GUIDE_FIT_IN.badge}
        headline={MWPA_GUIDE_FIT_IN.headline}
        paragraphs={[MWPA_GUIDE_FIT_IN.paragraphs[0]]}
      />
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 md:px-12">
          <p className="font-inter text-base leading-relaxed text-brand-navy/75 md:text-lg md:leading-[1.75]">
            If you would like to discuss your existing term cover, or consider a fresh policy with an
            MWPA structure from day one,{" "}
            <Link href="/contact" className="font-medium text-brand-teal hover:underline">
              begin a confidential conversation
            </Link>
            .
          </p>
        </div>
      </section>
      <RelatedLinksSection
        badge={MWPA_GUIDE_RELATED.badge}
        headline={MWPA_GUIDE_RELATED.headline}
        items={MWPA_GUIDE_RELATED.items}
      />
    </>
  );
}
