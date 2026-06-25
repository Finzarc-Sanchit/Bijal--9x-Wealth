import { StepProcessLayout } from "@/components/sections/StepProcessLayout";
import { TermLegacyConvictionSection } from "@/components/sections/TermLegacyConvictionSection";
import { EditorialFaqSection } from "@/components/sections/EditorialFaqSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
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

function MwpaDossierSection({
  id,
  badge,
  headline,
  paragraphs = [],
  subsections = [],
  className,
}: {
  id: string;
  badge?: string;
  headline?: string;
  paragraphs?: readonly string[];
  subsections?: readonly { title: string; paragraphs: readonly string[] }[];
  className?: string;
}) {
  const headingId = headline ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section-py w-full px-4 md:px-12 lg:px-16", className)}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-start gap-4">
                <span className="mt-1 hidden h-10 w-[2px] bg-brand-gold lg:block" aria-hidden />
                <div>
                  {badge ? (
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-teal">
                      {badge}
                    </p>
                  ) : null}
                  {headline ? (
                    <h2
                      id={headingId}
                      className={cn(
                        "mt-4 font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl",
                        !badge && "mt-0",
                      )}
                    >
                      {headline}
                    </h2>
                  ) : null}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:border-l lg:border-brand-navy/10 lg:pl-10 xl:pl-12">
            {paragraphs.length > 0 ? (
              <div className="flex flex-col gap-6 md:gap-7">
                {paragraphs.map((p, i) => (
                  <Reveal key={`${id}-p-${i}`} delay={0.06 + i * 0.05}>
                    <p className="font-inter text-base leading-relaxed text-brand-navy/75 md:text-lg md:leading-[1.75]">
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
            ) : null}

            {subsections.length > 0 ? (
              <div className={cn("mt-10 grid gap-8 md:mt-12 md:gap-10", paragraphs.length ? "" : "mt-0")}>
                {subsections.map((s, i) => (
                  <Reveal key={`${id}-s-${s.title}`} delay={0.1 + i * 0.06}>
                    <div className="rounded-xl border border-brand-navy/10 bg-white/40 px-6 py-6 md:px-7 md:py-7">
                      <h3 className="font-display text-xl font-medium leading-tight tracking-tight text-brand-navy md:text-2xl">
                        {s.title}
                      </h3>
                      <div className="mt-4 flex flex-col gap-4">
                        {s.paragraphs.map((sp, pi) => (
                          <p
                            key={`${id}-${s.title}-${pi}`}
                            className="font-inter text-base leading-relaxed text-brand-navy/75 md:text-lg md:leading-[1.75]"
                          >
                            {sp}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MwpaGuideSections() {
  return (
    <>
      <MwpaDossierSection
        id="mwpa-guide-what-it-does"
        badge={MWPA_GUIDE_WHAT_IT_DOES.badge}
        headline={MWPA_GUIDE_WHAT_IT_DOES.headline}
        paragraphs={MWPA_GUIDE_WHAT_IT_DOES.paragraphs}
      />
      <StepProcessLayout
        id="mwpa-guide-consequences"
        eyebrow={MWPA_GUIDE_CONSEQUENCES.badge}
        title={MWPA_GUIDE_CONSEQUENCES.headline}
        subtitle="Four structural consequences when a policy is assigned under Section 6 of the MWPA."
        steps={gridItemsToStepProcessSteps(MWPA_GUIDE_CONSEQUENCES.items)}
      />
      <MwpaDossierSection
        id="who-can-assign"
        badge={MWPA_GUIDE_WHO_CAN_ASSIGN.badge}
        headline={MWPA_GUIDE_WHO_CAN_ASSIGN.headline}
        subsections={MWPA_GUIDE_WHO_CAN_ASSIGN.subsections}
      />
      <MwpaDossierSection
        id="assignment-in-practice"
        badge={MWPA_GUIDE_ASSIGNMENT.badge}
        headline={MWPA_GUIDE_ASSIGNMENT.headline}
        paragraphs={MWPA_GUIDE_ASSIGNMENT.paragraphs}
      />
      <MwpaDossierSection
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
        className="px-4 md:px-12 lg:px-16"
      />
      <EditorialFaqSection
        badge={MWPA_GUIDE_FAQ.badge}
        headline={MWPA_GUIDE_FAQ.headline}
        items={MWPA_GUIDE_FAQ.items}
      />
      <MwpaDossierSection
        id="worked-example"
        badge={MWPA_GUIDE_EXAMPLE.badge}
        headline={MWPA_GUIDE_EXAMPLE.headline}
        paragraphs={MWPA_GUIDE_EXAMPLE.paragraphs}
      />
      <MwpaDossierSection
        id="where-we-fit"
        badge={MWPA_GUIDE_FIT_IN.badge}
        headline={MWPA_GUIDE_FIT_IN.headline}
        paragraphs={[MWPA_GUIDE_FIT_IN.paragraphs[0]]}
      />
      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-12 lg:px-16">
          <div className="rounded-2xl border border-brand-navy/10 bg-white/40 px-6 py-8 md:px-10 md:py-10">
            <p className="font-inter text-base leading-relaxed text-brand-navy/75 md:text-lg md:leading-[1.75]">
              {MWPA_GUIDE_FIT_IN.paragraphs[1]}{" "}
              <Link href="/contact" className="font-medium text-brand-teal hover:underline">
                begin a confidential conversation
              </Link>
              .
            </p>
          </div>
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
