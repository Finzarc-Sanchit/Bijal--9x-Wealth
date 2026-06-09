"use client";

export function WellnessHeroBridge() {
  return (
    <div
      className="pointer-events-none relative h-14 w-full overflow-hidden bg-brand-navy md:h-[4.5rem]"
      aria-hidden
    >
      <svg
        className="wellness-bridge-wave absolute bottom-0 left-0 h-[55%] w-full text-brand-cream"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,56 L0,28 C480,4 960,52 1440,24 L1440,56 Z" />
      </svg>
    </div>
  );
}
