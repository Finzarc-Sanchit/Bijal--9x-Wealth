"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterInput = z.infer<typeof newsletterSchema>;

export type FooterNewsletterProps = {
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  className?: string;
};

export function FooterNewsletter({
  heading,
  description,
  image,
  className,
}: FooterNewsletterProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (_data: NewsletterInput) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  const inputClass = (hasError?: boolean) =>
    cn(
      "min-h-[40px] w-full border-b border-white/20 bg-transparent px-0 pb-2 pt-1 font-inter text-base text-white outline-none transition-colors duration-300",
      "placeholder:text-white/60 focus:border-brand-teal focus:outline-none focus:ring-0",
      hasError ? "border-red-500 focus:border-red-500" : undefined,
    );

  return (
    <section
      className={cn(
        "relative mb-12 overflow-hidden rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-8 md:mb-16 md:p-10 lg:p-12",
        className,
      )}
      aria-labelledby="footer-newsletter-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/cta-background.webp"
          alt=""
          fill
          priority={false}
          className="object-cover opacity-30"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-navy/65 to-brand-navy/85" />
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top,rgba(201,162,39,0.25),transparent_55%)]" />
      </div>

      <div className="relative">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
        <div className="text-center md:text-left">
          <h3
            id="footer-newsletter-heading"
            className="font-poppins text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl"
          >
            {heading}
          </h3>
          <p className="mt-4 font-inter text-sm leading-relaxed text-white/70 md:text-base">
            {description}
          </p>

          {submitted ? (
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-white/[0.06] p-4 text-left ring-1 ring-brand-gold/25">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" aria-hidden />
              <div>
                <p className="font-inter text-sm font-semibold text-white">You&apos;re subscribed!</p>
                <p className="mt-1 font-inter text-sm text-white/60">
                  Thank you. We&apos;ll share practical insurance and wealth planning insights with
                  you.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 space-y-3"
              noValidate
            >
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email for newsletter
              </label>
              <div className="space-y-4 md:flex md:items-end md:gap-4 md:space-y-0">
                <div className="w-full md:max-w-[14rem] lg:max-w-[16rem]">
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    className={inputClass(!!errors.email)}
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-brand-gold px-8 font-inter text-sm font-semibold text-brand-navy transition hover:bg-brand-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                >
                  <Send className="size-4" aria-hidden />
                  {isSubmitting ? "Subscribing…" : "Subscribe"}
                </button>
              </div>
              {errors.email ? (
                <p className="text-left font-inter text-sm text-red-400" role="alert">
                  {errors.email.message}
                </p>
              ) : null}
              <p className="text-left font-inter text-xs leading-relaxed text-white/45">
                Practical tips on insurance, investments, and goal-based planning. Unsubscribe
                anytime.
              </p>
            </form>
          )}
        </div>

        <div className="hidden justify-center md:flex md:justify-end">
          <div className="relative w-full max-w-sm">
            <div
              className="absolute inset-0 rotate-3 rounded-xl bg-brand-gold/20"
              aria-hidden
            />
            <Image
              src={image.src}
              alt={image.alt}
              width={320}
              height={240}
              className="relative aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-white/10"
              sizes="(max-width: 768px) 0px, 320px"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
