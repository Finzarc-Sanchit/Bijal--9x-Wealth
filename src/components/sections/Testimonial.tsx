"use client";

import { Reveal } from "@/components/animations/reveal";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import { cn } from "@/lib/utils";
import { TESTIMONIAL_SLIDER_REVIEWS } from "@/data/testimonial-slider-reviews";


export function Testimonial({ className }: { className?: string; }) {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={cn("relative overflow-hidden section-py", className)}
    >
      <div
        className="orb orb-gold"
        style={{
          width: 700,
          height: 700,
          bottom: -200,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.12,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-12 lg:px-16">
        <Reveal>
          <p className="label">In Their Words</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            id="testimonials-heading"
            className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-brand-navy md:text-4xl"
          >
            What families say after the mandate is structured
          </h2>
        </Reveal>


        <Reveal delay={0.14} className="mt-10 md:mt-12">
          <TestimonialSlider reviews={TESTIMONIAL_SLIDER_REVIEWS} />
        </Reveal>
      </div>
    </section>
  );
}
