"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CONTACT_FORM } from "../_data/content";
import { contactFormSchema, type ContactFormValues } from "../_data/schema";
import { ContactDetails } from "./ContactDetails";
import { ContactPageIntro } from "./ContactPageIntro";

function RequiredMark() {
  return (
    <span className="ml-0.5 text-red-600" aria-hidden>
      *
    </span>
  );
}

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block font-inter text-sm font-medium text-brand-navy">
      {children}
      {required ? <RequiredMark /> : null}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="mt-1.5 font-inter text-sm text-red-600" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      areaOfInterest: "",
      investibleWealth: "",
      message: "",
    },
  });

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  const values = watch();
  const canSubmit = contactFormSchema.safeParse(values).success;

  const inputClass = (hasError?: boolean) =>
    cn(
      "min-h-[48px] w-full rounded-xl border bg-white/90 px-4 font-inter text-base text-brand-navy outline-none transition",
      "focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20",
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
        : "border-brand-navy/15",
    );

  return (
    <section className="section-py pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <ContactPageIntro className="mb-12 pt-4 md:mb-16 md:pt-8" />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-20 lg:items-start">
          <ContactDetails />

          <div>
            <Reveal>
              <p className="label lg:hidden">{CONTACT_FORM.badge}</p>
              <h2 className="mt-4 font-display text-3xl font-light text-brand-navy md:text-4xl lg:mt-0 lg:hidden">
                {CONTACT_FORM.headline}
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 lg:mt-0">
              {submitted ? (
                <div className="rounded-2xl border border-brand-teal/20 bg-white/80 p-8 text-center shadow-sm ring-1 ring-brand-navy/5">
                  <CheckCircle2 className="mx-auto mb-4 size-10 text-brand-teal" aria-hidden />
                  <h3 className="font-display text-2xl font-light text-brand-navy">
                    Request received
                  </h3>
                  <p className="mt-3 font-inter text-base leading-relaxed text-brand-navy/75">
                    Thank you. A senior partner will respond within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-6 rounded-2xl border border-brand-navy/10 bg-white/85 p-6 shadow-sm ring-1 ring-brand-navy/5 backdrop-blur-sm md:p-8"
                >
                  <div className="hidden lg:block">
                    <p className="label">{CONTACT_FORM.badge}</p>
                    <h2 className="mt-4 font-display text-3xl font-light text-brand-navy">
                      {CONTACT_FORM.headline}
                    </h2>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="contact-name" required>
                        {CONTACT_FORM.fields.name}
                      </FieldLabel>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        className={inputClass(!!errors.name)}
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("name")}
                      />
                      <FieldError message={errors.name?.message} />
                    </div>

                    <div>
                      <FieldLabel htmlFor="contact-email" required>
                        {CONTACT_FORM.fields.email}
                      </FieldLabel>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        className={inputClass(!!errors.email)}
                        aria-invalid={errors.email ? "true" : "false"}
                        {...register("email")}
                      />
                      <FieldError message={errors.email?.message} />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="contact-phone" required>
                        {CONTACT_FORM.fields.phone}
                      </FieldLabel>
                      <input
                        id="contact-phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={10}
                        placeholder="10-digit mobile"
                        className={inputClass(!!errors.phone)}
                        aria-invalid={errors.phone ? "true" : "false"}
                        {...register("phone")}
                      />
                      <FieldError message={errors.phone?.message} />
                    </div>

                    <div>
                      <FieldLabel htmlFor="contact-company">
                        {CONTACT_FORM.fields.company}
                      </FieldLabel>
                      <input
                        id="contact-company"
                        type="text"
                        autoComplete="organization"
                        className={inputClass(!!errors.company)}
                        {...register("company")}
                      />
                      <FieldError message={errors.company?.message} />
                    </div>
                  </div>

                  <div>
                    <FieldLabel htmlFor="contact-area" required>
                      {CONTACT_FORM.fields.areaOfInterest}
                    </FieldLabel>
                    <select
                      id="contact-area"
                      className={inputClass(!!errors.areaOfInterest)}
                      aria-invalid={errors.areaOfInterest ? "true" : "false"}
                      {...register("areaOfInterest")}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {CONTACT_FORM.areaOfInterestOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <FieldError message={errors.areaOfInterest?.message} />
                  </div>

                  <div>
                    <FieldLabel htmlFor="contact-wealth" required>
                      {CONTACT_FORM.fields.investibleWealth}
                    </FieldLabel>
                    <select
                      id="contact-wealth"
                      className={inputClass(!!errors.investibleWealth)}
                      aria-invalid={errors.investibleWealth ? "true" : "false"}
                      {...register("investibleWealth")}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {CONTACT_FORM.wealthOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <FieldError message={errors.investibleWealth?.message} />
                  </div>

                  <div>
                    <FieldLabel htmlFor="contact-message">
                      {CONTACT_FORM.fields.message}
                    </FieldLabel>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className={cn(inputClass(!!errors.message), "resize-y py-3")}
                      {...register("message")}
                    />
                    <FieldError message={errors.message?.message} />
                  </div>

                  <div className="space-y-4 pt-2">
                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-8 font-inter text-sm font-semibold text-brand-navy transition hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Send className="size-4" aria-hidden />
                      {isSubmitting ? "Sending…" : CONTACT_FORM.submitLabel}
                    </button>

                    <p className="font-inter text-xs leading-relaxed text-brand-navy/60">
                      <span className="text-red-600" aria-hidden>
                        *
                      </span>{" "}
                      Required fields. {CONTACT_FORM.disclaimer}
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
