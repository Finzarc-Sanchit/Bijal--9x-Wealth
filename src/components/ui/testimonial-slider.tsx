"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
  verified?: boolean;
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

export function TestimonialSlider({ reviews, className }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  if (reviews.length === 0) return null;

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const thumbnailReviews = reviews.filter((_, index) => index !== currentIndex).slice(0, 3);

  const imageVariants = {
    enter: (dir: "left" | "right") => ({
      y: dir === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      y: dir === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[600px] overflow-hidden bg-transparent p-4 text-brand-navy md:p-8",
        className,
      )}
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
        <div className="order-2 flex h-full flex-col justify-between space-y-8 md:order-1 md:col-span-3">
          <div>
            <span className="font-mono text-sm text-brand-navy/70">
              {String(currentIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex space-x-3">
            {thumbnailReviews.map((review) => {
              const originalIndex = reviews.findIndex((item) => item.id === review.id);

              return (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="h-20 w-16 overflow-hidden rounded-xl border border-brand-navy/10 opacity-60 transition-all duration-300 hover:opacity-100 md:h-24 md:w-20"
                  aria-label={`View review from ${review.name}`}
                >
                  <img
                    src={review.thumbnailSrc}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative order-1 h-80 min-h-[420px] md:order-2 md:col-span-4">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={activeReview.imageSrc}
              alt={activeReview.name}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 h-full w-full rounded-2xl object-cover shadow-xl"
            />
          </AnimatePresence>
        </div>

        <div className="order-3 flex flex-col justify-between md:col-span-5 md:pl-8">
          <div className="relative flex min-h-[260px] items-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="w-full"
              >
                <p className="font-poppins text-xs font-medium uppercase tracking-widest text-brand-navy/70">
                  {activeReview.affiliation}
                </p>
                <h3 className="mt-1 font-poppins text-xl font-semibold text-brand-navy">
                  {activeReview.name}
                </h3>
                <blockquote className="mt-4 font-inter text-xl font-light leading-relaxed text-brand-navy md:text-2xl">
                  &ldquo;{activeReview.quote}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center space-x-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-full border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="default"
              size="icon"
              className="h-11 w-11 rounded-full bg-brand-navy text-white hover:bg-brand-teal"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
