"use client";

import { Reveal } from "@/components/animations/reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CALCULATORS_FORM } from "../_data/content";

function formatCr(amount: number): string {
  return `₹${amount.toFixed(2)} Cr`;
}

function sliderFill(value: number, min: number, max: number): string {
  const percent = max === min ? 0 : ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, #1a6b7a 0%, #1a6b7a ${percent}%, rgba(10, 22, 40, 0.1) ${percent}%, rgba(10, 22, 40, 0.1) 100%)`;
}

type SliderFieldProps = {
  index: string;
  id: string;
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  minLabel: string;
  maxLabel: string;
  displayValue: string;
  onChange: (value: number) => void;
};

function SliderField({
  index,
  id,
  label,
  hint,
  value,
  min,
  max,
  step = 1,
  minLabel,
  maxLabel,
  displayValue,
  onChange,
}: SliderFieldProps) {
  return (
    <div className="rounded-xl border border-brand-navy/6 bg-white p-5 md:p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="min-w-0 space-y-2">
          <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.24em] text-brand-gold">
            {index}
          </p>
          <label htmlFor={id} className="block font-display text-lg font-light text-brand-navy">
            {label}
          </label>
        </div>
        <p
          className="shrink-0 font-mono text-xl font-medium tabular-nums text-brand-teal md:text-2xl"
          aria-live="polite"
        >
          {displayValue}
        </p>
      </div>

      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-describedby={`${id}-hint`}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ background: sliderFill(value, min, max) }}
        className="cover-estimator-slider w-full cursor-pointer"
      />

      <div className="mt-2 flex items-center justify-between font-inter text-[0.7rem] uppercase tracking-wider text-brand-muted">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>

      <p id={`${id}-hint`} className="mt-3 font-inter text-sm leading-relaxed text-brand-navy/55">
        {hint}
      </p>
    </div>
  );
}

type ResultRowProps = {
  label: string;
  value: string;
};

function ResultRow({ label, value }: ResultRowProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
      <dt className="font-inter text-sm text-brand-navy/65">{label}</dt>
      <dd className="shrink-0 font-mono text-sm tabular-nums text-brand-navy">{value}</dd>
    </div>
  );
}

export function CoverEstimator() {
  const [age, setAge] = useState<number>(CALCULATORS_FORM.ageDefault);
  const [income, setIncome] = useState<number>(CALCULATORS_FORM.incomeDefault);
  const [liabilities, setLiabilities] = useState<number>(CALCULATORS_FORM.liabilitiesDefault);
  const [dependents, setDependents] = useState<number>(CALCULATORS_FORM.dependentsDefault);

  const result = useMemo(() => {
    const workingYears = Math.max(65 - age, 10);
    const incomeReplacement = (income / 100) * workingYears * 0.3;
    const liabilityCover = liabilities;
    const dependentEducation = dependents * 0.5;
    const total = incomeReplacement + liabilityCover + dependentEducation;

    return {
      workingYears,
      incomeReplacement,
      liabilityCover,
      dependentEducation,
      total,
    };
  }, [age, dependents, income, liabilities]);

  return (
    <section className="bg-white section-py" aria-labelledby="cover-estimator-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <Reveal>
          <div className="rounded-2xl border border-brand-navy/6 bg-surface p-6 md:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-12 xl:gap-16">
              <div className="space-y-8">
                <div className="max-w-xl">
                  <p className="label">{CALCULATORS_FORM.badge}</p>
                  <h2
                    id="cover-estimator-heading"
                    className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl"
                  >
                    {CALCULATORS_FORM.title}
                  </h2>
                  <p className="mt-4 font-inter text-base leading-relaxed text-brand-navy/65">
                    {CALCULATORS_FORM.intro}
                  </p>
                </div>

                <div className="space-y-4">
                  <SliderField
                    index="01"
                    id="cover-age"
                    label={CALCULATORS_FORM.ageLabel}
                    hint={CALCULATORS_FORM.ageHint}
                    value={age}
                    min={CALCULATORS_FORM.ageMin}
                    max={CALCULATORS_FORM.ageMax}
                    minLabel={`${CALCULATORS_FORM.ageMin} ${CALCULATORS_FORM.ageUnit}`}
                    maxLabel={`${CALCULATORS_FORM.ageMax} ${CALCULATORS_FORM.ageUnit}`}
                    displayValue={`${age} ${CALCULATORS_FORM.ageUnit}`}
                    onChange={setAge}
                  />

                  <SliderField
                    index="02"
                    id="cover-income"
                    label={CALCULATORS_FORM.incomeLabel}
                    hint={CALCULATORS_FORM.incomeHint}
                    value={income}
                    min={CALCULATORS_FORM.incomeMin}
                    max={CALCULATORS_FORM.incomeMax}
                    step={5}
                    minLabel={`${CALCULATORS_FORM.incomeMin} ${CALCULATORS_FORM.incomeUnit}`}
                    maxLabel={`${CALCULATORS_FORM.incomeMax} ${CALCULATORS_FORM.incomeUnit}`}
                    displayValue={`${income} ${CALCULATORS_FORM.incomeUnit}`}
                    onChange={setIncome}
                  />

                  <SliderField
                    index="03"
                    id="cover-liabilities"
                    label={CALCULATORS_FORM.liabilitiesLabel}
                    hint={CALCULATORS_FORM.liabilitiesHint}
                    value={liabilities}
                    min={CALCULATORS_FORM.liabilitiesMin}
                    max={CALCULATORS_FORM.liabilitiesMax}
                    minLabel={`${CALCULATORS_FORM.liabilitiesMin} ${CALCULATORS_FORM.liabilitiesUnit}`}
                    maxLabel={`${CALCULATORS_FORM.liabilitiesMax} ${CALCULATORS_FORM.liabilitiesUnit}`}
                    displayValue={`${liabilities} ${CALCULATORS_FORM.liabilitiesUnit}`}
                    onChange={setLiabilities}
                  />

                  <SliderField
                    index="04"
                    id="cover-dependents"
                    label={CALCULATORS_FORM.dependentsLabel}
                    hint={CALCULATORS_FORM.dependentsHint}
                    value={dependents}
                    min={CALCULATORS_FORM.dependentsMin}
                    max={CALCULATORS_FORM.dependentsMax}
                    minLabel={`${CALCULATORS_FORM.dependentsMin}`}
                    maxLabel={`${CALCULATORS_FORM.dependentsMax}`}
                    displayValue={`${dependents}`}
                    onChange={setDependents}
                  />
                </div>
              </div>

              <aside className="lg:sticky lg:top-28">
                <div className="rounded-xl border border-brand-navy/6 bg-white p-6 shadow-[0_8px_32px_-12px_rgba(10,22,40,0.08)] md:p-8">
                  <p className="label">{CALCULATORS_FORM.resultsBadge}</p>

                  <dl className="mt-6 divide-y divide-brand-navy/6">
                    <ResultRow
                      label={CALCULATORS_FORM.incomeReplacementLabel}
                      value={formatCr(result.incomeReplacement)}
                    />
                    <ResultRow
                      label={CALCULATORS_FORM.liabilityCoverLabel}
                      value={formatCr(result.liabilityCover)}
                    />
                    <ResultRow
                      label={CALCULATORS_FORM.dependentEducationLabel}
                      value={formatCr(result.dependentEducation)}
                    />
                    <ResultRow
                      label={CALCULATORS_FORM.workingYearsLabel}
                      value={`${result.workingYears} ${CALCULATORS_FORM.workingYearsUnit}`}
                    />
                  </dl>

                  <div className="mt-8 border-t border-brand-navy/8 pt-8">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-8 w-[2px] shrink-0 bg-brand-gold"
                        aria-hidden
                      />
                      <div>
                        <p className="font-inter text-sm text-brand-navy/65">
                          {CALCULATORS_FORM.recommendedLabel}
                        </p>
                        <p className="mt-2 font-display text-4xl font-light tracking-tight text-brand-navy md:text-[2.75rem]">
                          {formatCr(result.total)}
                        </p>
                        <p className="mt-3 font-inter text-sm leading-relaxed text-brand-navy/55">
                          {CALCULATORS_FORM.acrossLabel}{" "}
                          <span className="font-medium text-brand-navy">{result.workingYears}</span>{" "}
                          {CALCULATORS_FORM.workingYearsUnit}.
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 font-inter text-xs leading-relaxed text-brand-muted">
                      {CALCULATORS_FORM.disclaimer}
                    </p>
                  </div>

                  <div className="mt-8 rounded-xl bg-brand-navy/[0.03] p-5 md:p-6">
                    <h3 className="font-display text-xl font-light text-brand-navy">
                      {CALCULATORS_FORM.ctaHeading}
                    </h3>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-brand-navy/60">
                      {CALCULATORS_FORM.ctaDescription}
                    </p>
                    <Link
                      href={CALCULATORS_FORM.ctaHref}
                      className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-6 font-inter text-sm font-semibold text-brand-navy transition hover:bg-brand-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 focus-visible:ring-offset-2"
                    >
                      {CALCULATORS_FORM.ctaLabel}
                      <ArrowUpRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
