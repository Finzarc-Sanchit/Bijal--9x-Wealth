"use client";

import {
  testimonialConsultationSchema,
  type TestimonialConsultationInput,
} from "@/lib/assessment/schema";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const inputClass =
  "min-h-[44px] w-full rounded-xl border border-brand-navy/10 bg-white px-4 text-base text-brand-navy focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20";

export function TestimonialConsultationForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TestimonialConsultationInput>({
    resolver: zodResolver(testimonialConsultationSchema),
    defaultValues: {
      name: "",
      email: "",
      profession: "",
      topic: "",
      consent: undefined,
    },
  });

  const onSubmit = async (_data: TestimonialConsultationInput) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
  };

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      {!expanded && !submitted ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className={cn(
            "inline-flex min-h-[48px] items-center rounded-full px-8",
            "bg-brand-teal text-sm font-bold text-white",
            "shadow-[0_12px_32px_-8px_rgba(26,107,122,0.45)]",
            "transition hover:bg-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal",
          )}
        >
          Book a Free Consultation
        </button>
      ) : null}

      <AnimatePresence mode="wait">
        {expanded && !submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-2 space-y-4 rounded-2xl bg-white/90 p-5 text-left shadow-lg ring-1 ring-brand-navy/8 backdrop-blur-sm sm:p-6"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="testimonial-name" className="mb-1 block text-sm font-medium text-brand-navy">
                  Full Name
                </label>
                <input id="testimonial-name" type="text" {...register("name")} className={inputClass} />
                {errors.name ? (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="testimonial-email" className="mb-1 block text-sm font-medium text-brand-navy">
                  Email Address
                </label>
                <input id="testimonial-email" type="email" {...register("email")} className={inputClass} />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="testimonial-profession"
                className="mb-1 block text-sm font-medium text-brand-navy"
              >
                Profession
              </label>
              <input
                id="testimonial-profession"
                type="text"
                {...register("profession")}
                className={inputClass}
                placeholder="e.g. Teacher, Business owner, Retired professional"
              />
              {errors.profession ? (
                <p className="mt-1 text-sm text-red-600">{errors.profession.message}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="testimonial-topic" className="mb-1 block text-sm font-medium text-brand-navy">
                Topic to Discuss
              </label>
              <textarea
                id="testimonial-topic"
                rows={3}
                {...register("topic")}
                className={cn(inputClass, "min-h-[88px] py-3")}
                placeholder="e.g. Retirement planning, child education fund, term insurance review"
              />
              {errors.topic ? (
                <p className="mt-1 text-sm text-red-600">{errors.topic.message}</p>
              ) : null}
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
            {errors.consent ? (
              <p className="text-sm text-red-600">{errors.consent.message}</p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand-navy text-sm font-semibold text-white transition hover:bg-brand-navy-light disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending…" : "Request Free Consultation"}
            </button>
          </motion.form>
        ) : null}

        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-2 rounded-2xl bg-white/90 p-6 text-center shadow-lg ring-1 ring-emerald-500/20"
          >
            <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-emerald-600" />
            <h3 className="text-lg font-semibold text-brand-navy">Request received</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Thank you. Bijal will reach out shortly. For a faster response, message us on WhatsApp.
            </p>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-brand-gold px-6 text-sm font-semibold text-brand-navy"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
