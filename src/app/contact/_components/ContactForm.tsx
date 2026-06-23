"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { CONTACT_FORM } from "../_data/content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  return (
    <section className="section-py">
      <div className="mx-auto max-w-2xl px-4 md:px-12">
        <Reveal>
          <p className="label">{CONTACT_FORM.badge}</p>
          <h2 className="mt-5 font-display text-3xl font-light text-brand-navy md:text-4xl">
            {CONTACT_FORM.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {submitted ? (
            <div className="rounded-xl border border-brand-teal/20 bg-white/70 p-8 text-center">
              <CheckCircle2 className="mx-auto mb-4 size-10 text-brand-teal" aria-hidden />
              <p className="font-inter text-base text-brand-navy/80">
                Thank you. A senior partner will respond within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <label className="grid gap-2">
                <span className="font-inter text-sm font-medium text-brand-navy">
                  {CONTACT_FORM.fields.name}
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-2">
                <span className="font-inter text-sm font-medium text-brand-navy">
                  {CONTACT_FORM.fields.email}
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-2">
                <span className="font-inter text-sm font-medium text-brand-navy">
                  {CONTACT_FORM.fields.phone}
                </span>
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-2">
                <span className="font-inter text-sm font-medium text-brand-navy">
                  {CONTACT_FORM.fields.company}
                </span>
                <input type="text" name="company" className={inputClass} />
              </label>

              <label className="grid gap-2">
                <span className="font-inter text-sm font-medium text-brand-navy">
                  {CONTACT_FORM.fields.areaOfInterest}
                </span>
                <select required name="areaOfInterest" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  {CONTACT_FORM.areaOfInterestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="font-inter text-sm font-medium text-brand-navy">
                  {CONTACT_FORM.fields.investibleWealth}
                </span>
                <select required name="investibleWealth" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  {CONTACT_FORM.wealthOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="font-inter text-sm font-medium text-brand-navy">
                  {CONTACT_FORM.fields.message}
                </span>
                <textarea
                  name="message"
                  rows={5}
                  className={cn(inputClass, "resize-y")}
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand-gold px-8 font-inter text-sm font-semibold text-brand-navy transition hover:bg-brand-gold-light"
              >
                {CONTACT_FORM.submitLabel}
              </button>

              <p className="font-inter text-xs leading-relaxed text-brand-navy/60">
                {CONTACT_FORM.disclaimer}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "min-h-[48px] w-full rounded-lg border border-brand-navy/15 bg-white/80 px-4 font-inter text-base text-brand-navy outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20";
