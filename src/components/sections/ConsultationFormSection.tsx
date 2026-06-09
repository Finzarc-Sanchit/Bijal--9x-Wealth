"use client";

import { LiveBackground } from "@/components/motion/LiveBackground";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { CONSULTATION_PREFILL_EVENT } from "@/lib/consultation";
import { CONSULTATION_GOAL_OPTIONS } from "@/data/goal-slider-content";
import { consultationFormSchema, type ConsultationFormInput } from "@/lib/assessment/schema";
import type { GoalFormSlug } from "@/lib/assessment/types";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function ConsultationFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormInput>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      goal: "general",
      name: "",
      mobile: "",
      email: "",
      message: "",
      consent: undefined,
    },
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const slug = (e as CustomEvent<GoalFormSlug>).detail;
      if (slug) setValue("goal", slug, { shouldValidate: true });
    };
    window.addEventListener(CONSULTATION_PREFILL_EVENT, handler);
    return () => window.removeEventListener(CONSULTATION_PREFILL_EVENT, handler);
  }, [setValue]);

  const onSubmit = async (_data: ConsultationFormInput) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <section id="consultation-form" className="scroll-mt-8">
      <LiveBackground variant="cream" className="py-20 md:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-teal">
                Book a consultation
              </p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
                Start Your Wealth Plan
              </h2>
              <p className="text-base text-brand-muted">
                Tell us your goal and Bijal Pathak will reach out with a personalized next step.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl bg-white/90 p-8 text-center ring-1 ring-emerald-500/20 backdrop-blur-sm"
              >
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
                <h3 className="mb-2 text-xl font-semibold text-brand-navy">Request received</h3>
                <p className="mb-6 text-base text-brand-muted">
                  Thank you. We will contact you shortly. For faster response, message us on WhatsApp.
                </p>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center rounded-full bg-brand-gold px-6 py-2.5 text-sm font-semibold text-brand-navy"
                >
                  Chat on WhatsApp
                </a>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-3xl bg-white/85 p-6 shadow-lg ring-1 ring-brand-navy/5 backdrop-blur-sm md:p-8"
                noValidate
              >
                <div>
                  <label htmlFor="goal" className="mb-1 block text-sm font-medium text-brand-navy">
                    Your primary goal
                  </label>
                  <select
                    id="goal"
                    {...register("goal")}
                    className="min-h-[44px] w-full rounded-xl border border-brand-navy/10 bg-white px-4 text-base focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                  >
                    {CONSULTATION_GOAL_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.goal && <p className="mt-1 text-sm text-red-600">{errors.goal.message}</p>}
                </div>

                <div>
                  <label htmlFor="consult-name" className="mb-1 block text-sm font-medium text-brand-navy">
                    Full Name
                  </label>
                  <input
                    id="consult-name"
                    type="text"
                    {...register("name")}
                    className="min-h-[44px] w-full rounded-xl border border-brand-navy/10 bg-white px-4 text-base focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="consult-mobile" className="mb-1 block text-sm font-medium text-brand-navy">
                    Mobile Number
                  </label>
                  <input
                    id="consult-mobile"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    {...register("mobile")}
                    className="min-h-[44px] w-full rounded-xl border border-brand-navy/10 bg-white px-4 text-base focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                  />
                  {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>}
                </div>

                <div>
                  <label htmlFor="consult-email" className="mb-1 block text-sm font-medium text-brand-navy">
                    Email Address
                  </label>
                  <input
                    id="consult-email"
                    type="email"
                    {...register("email")}
                    className="min-h-[44px] w-full rounded-xl border border-brand-navy/10 bg-white px-4 text-base focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="consult-message" className="mb-1 block text-sm font-medium text-brand-navy">
                    Message (optional)
                  </label>
                  <textarea
                    id="consult-message"
                    rows={3}
                    {...register("message")}
                    className="w-full rounded-xl border border-brand-navy/10 bg-white px-4 py-3 text-base focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
                  />
                </div>

                <label className="flex min-h-[44px] cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    {...register("consent")}
                    className="mt-1 h-5 w-5 rounded border-brand-navy/20 text-brand-teal focus:ring-brand-teal"
                  />
                  <span className="text-sm leading-relaxed text-brand-muted">
                    I understand this is not financial advice. Insurance products are subject to terms
                    and conditions. Mutual fund investments are subject to market risks.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-sm text-red-600">{errors.consent.message}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-brand-navy py-3 text-base font-semibold text-white transition hover:bg-brand-navy-light disabled:opacity-60",
                  )}
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending…" : "Request Consultation"}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </LiveBackground>
    </section>
  );
}
