"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import { CALCULATORS_FORM } from "../_data/content";

function formatCr(amount: number): string {
  return `₹${amount.toFixed(2)} Cr`;
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
    <section className="section-py">
      <div className="mx-auto max-w-3xl px-4 md:px-12">
        <Reveal>
          <div className="rounded-xl border border-brand-navy/10 bg-white/60 p-6 md:p-10">
            <div className="grid gap-8">
              <label className="grid gap-3">
                <span className="font-poppins text-sm font-semibold text-brand-navy">
                  {CALCULATORS_FORM.ageLabel}
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={25}
                    max={60}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer accent-brand-teal"
                  />
                  <span className="min-w-[4rem] text-right font-mono text-sm text-brand-navy">
                    {age} {CALCULATORS_FORM.ageUnit}
                  </span>
                </div>
              </label>

              <label className="grid gap-3">
                <span className="font-poppins text-sm font-semibold text-brand-navy">
                  {CALCULATORS_FORM.incomeLabel}
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={5}
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer accent-brand-teal"
                  />
                  <span className="min-w-[5rem] text-right font-mono text-sm text-brand-navy">
                    {income} {CALCULATORS_FORM.incomeUnit}
                  </span>
                </div>
              </label>

              <label className="grid gap-3">
                <span className="font-poppins text-sm font-semibold text-brand-navy">
                  {CALCULATORS_FORM.liabilitiesLabel}
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={1}
                    value={liabilities}
                    onChange={(e) => setLiabilities(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer accent-brand-teal"
                  />
                  <span className="min-w-[4rem] text-right font-mono text-sm text-brand-navy">
                    {liabilities} {CALCULATORS_FORM.liabilitiesUnit}
                  </span>
                </div>
              </label>

              <label className="grid gap-3">
                <span className="font-poppins text-sm font-semibold text-brand-navy">
                  {CALCULATORS_FORM.dependentsLabel}
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={0}
                    max={6}
                    value={dependents}
                    onChange={(e) => setDependents(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer accent-brand-teal"
                  />
                  <span className="min-w-[4rem] text-right font-mono text-sm text-brand-navy">
                    {dependents}
                  </span>
                </div>
              </label>
            </div>

            <div className="mt-10 pt-8">
              <p className="label">{CALCULATORS_FORM.recommendedLabel}</p>
              <p className="mt-2 font-display text-4xl font-light text-brand-navy md:text-5xl">
                {formatCr(result.total)}
              </p>
              <p className="mt-2 font-inter text-sm text-brand-navy/60">
                {CALCULATORS_FORM.acrossLabel}{" "}
                <span className="font-medium text-brand-navy">{result.workingYears}</span>{" "}
                {CALCULATORS_FORM.workingYearsUnit}
              </p>

              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="font-inter text-xs uppercase tracking-wider text-brand-navy/50">
                    {CALCULATORS_FORM.incomeReplacementLabel}
                  </dt>
                  <dd className="mt-1 font-mono text-sm text-brand-navy">
                    {formatCr(result.incomeReplacement)}
                  </dd>
                </div>
                <div>
                  <dt className="font-inter text-xs uppercase tracking-wider text-brand-navy/50">
                    {CALCULATORS_FORM.liabilityCoverLabel}
                  </dt>
                  <dd className="mt-1 font-mono text-sm text-brand-navy">
                    {formatCr(result.liabilityCover)}
                  </dd>
                </div>
                <div>
                  <dt className="font-inter text-xs uppercase tracking-wider text-brand-navy/50">
                    {CALCULATORS_FORM.dependentEducationLabel}
                  </dt>
                  <dd className="mt-1 font-mono text-sm text-brand-navy">
                    {formatCr(result.dependentEducation)}
                  </dd>
                </div>
              </dl>

              <p className={cn("mt-8 font-inter text-sm italic text-brand-navy/60")}>
                {CALCULATORS_FORM.disclaimer}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
