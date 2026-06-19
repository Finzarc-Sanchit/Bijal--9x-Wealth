"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/animations/reveal";

export function Testimonial() {
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    let ctx: any;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const quote = quoteRef.current;
      if (!quote) return;

      const words = quote.querySelectorAll(".reveal-word");

      ctx = gsap.context(() => {
        // Changed to .to() because the starting state is now safely set in CSS
        gsap.to(words, {
          opacity: 1, // Fully illuminated state
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: quote,
            start: "top center+=20%",
            end: "bottom center-=10%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }, quote);
    };

    void init();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const quoteText =
    "For the first time, our family's protection felt deliberate — not inherited, not improvised. The conversation was unhurried, the math was transparent, and nothing was sold before it was understood.";

  return (
    <section className="relative overflow-hidden bg-surface py-32 md:py-44">
      <div
        className="orb orb-gold"
        style={{
          width: 700,
          height: 700,
          bottom: -200,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.15,
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-12 items-center gap-8 lg:gap-16">
          <Reveal className="order-2 col-span-12 lg:order-1 lg:col-span-5">
            <div className="img-frame img-warm aspect-square overflow-hidden rounded-sm">
              <Image
                src="https://plus.unsplash.com/premium_photo-1681997885823-77f388bfc038?q=80&w=1400&auto=format&fit=crop"
                alt="Portrait in warm editorial light"
                fill
                className="object-cover"
                sizes="(max-w: 1024px) 100vw, 40vw"
              />
            </div>
            <p className="mt-4 photo-caption">Plate VI — In their words</p>
          </Reveal>

          <div className="order-1 col-span-12 lg:order-2 lg:col-span-7">
            <Reveal>
              <p className="label">In Their Words</p>
            </Reveal>

            {/* Scroll-Driven Dynamic Text Reveal Block */}
            <blockquote
              ref={quoteRef}
              className="mt-8 font-display text-2xl font-light leading-[1.4] text-foreground md:text-3xl lg:text-4xl select-none"
            >
              <span className="text-gold-500/70 mr-1 inline-block">&ldquo;</span>
              {quoteText.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="reveal-word inline-block mr-[0.22em] opacity-15 transition-colors duration-100"
                >
                  {word}
                </span>
              ))}
              <span className="text-gold-500/70 inline-block">&rdquo;</span>
            </blockquote>

            <Reveal delay={0.16}>
              <div className="mt-10 flex items-center gap-5">
                <span className="h-px w-12 bg-gold-500/40" aria-hidden />
                <div>
                  <p className="text-[15px] font-medium text-foreground">
                    Founder, Listed Manufacturing Group
                  </p>
                  <p className="photo-caption mt-1">Mumbai · Client since 2017</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}