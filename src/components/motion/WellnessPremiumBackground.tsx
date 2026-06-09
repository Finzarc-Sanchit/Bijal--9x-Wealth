"use client";

export function WellnessPremiumBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-[#f5f1ea] to-brand-cream" />

      <div className="wellness-premium-orb-a absolute -left-[8%] top-[12%] h-[42%] w-[38%] rounded-full bg-brand-teal/[0.07] blur-3xl" />
      <div className="wellness-premium-orb-b absolute -right-[6%] top-[22%] h-[38%] w-[34%] rounded-full bg-brand-gold/[0.09] blur-3xl" />
      <div className="wellness-premium-orb-c absolute bottom-[8%] left-[28%] h-[32%] w-[36%] rounded-full bg-brand-navy/[0.04] blur-3xl" />

      <svg
        className="wellness-premium-grid absolute inset-0 h-full w-full opacity-[0.045]"
        aria-hidden
      >
        <defs>
          <pattern id="wellness-premium-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#0a1628" strokeWidth="0.65" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wellness-premium-grid)" />
      </svg>

      <div className="wellness-premium-sweep absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-gold/[0.06] to-transparent" />

      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <span
          key={i}
          className="wellness-premium-particle absolute rounded-full bg-brand-gold/35"
          style={{
            left: `${8 + i * 11}%`,
            top: `${18 + (i % 4) * 16}%`,
            width: i % 2 === 0 ? 3 : 2,
            height: i % 2 === 0 ? 3 : 2,
            animationDelay: `${i * 0.55}s`,
          }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-cream to-transparent" />
    </div>
  );
}
