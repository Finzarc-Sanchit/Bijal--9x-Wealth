"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

export type EditorialProseSubsection = {
  title: string;
  paragraphs: readonly string[];
};

export type EditorialProseSectionProps = {
  badge?: string;
  headline?: string;
  paragraphs?: readonly string[];
  subsections?: readonly EditorialProseSubsection[];
  className?: string;
  id?: string;
};

const PARAGRAPH_CLASS =
  "font-inter text-base leading-relaxed text-brand-navy/75 md:text-lg md:leading-[1.75]";

export function EditorialProseSection({
  badge,
  headline,
  paragraphs = [],
  subsections = [],
  className,
  id = "editorial-prose",
}: EditorialProseSectionProps) {
  const headingId = headline ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("section-py", className)}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-16">
        <div className="mx-auto max-w-3xl">
          {badge ? (
            <Reveal>
              <p className="label">{badge}</p>
            </Reveal>
          ) : null}

          {headline ? (
            <Reveal delay={badge ? 0.08 : 0}>
              <h2
                id={headingId}
                className={cn(
                  "font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl lg:text-[2.75rem]",
                  badge ? "mt-5" : "mt-0"
                )}
              >
                {headline}
              </h2>
            </Reveal>
          ) : null}

          {paragraphs.length > 0 ? (
            <div className="mt-8 flex flex-col gap-6 md:mt-10 md:gap-7">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={`p-${index}`} delay={0.12 + index * 0.06}>
                  <p className={PARAGRAPH_CLASS}>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          ) : null}

          {subsections.length > 0 ? (
            <div className="mt-10 flex flex-col gap-10 md:mt-12">
              {subsections.map((subsection, index) => (
                <Reveal key={subsection.title} delay={0.14 + index * 0.08}>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-brand-navy md:text-xl">
                      {subsection.title}
                    </h3>
                    <div className="mt-4 flex flex-col gap-4">
                      {subsection.paragraphs.map((paragraph, pIndex) => (
                        <p key={`${subsection.title}-${pIndex}`} className={PARAGRAPH_CLASS}>
                          {paragraph}
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
    </section>
  );
}
