"use client";

export function WellnessLiveBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-[#071f2a] via-[#0c3a4a] to-[#122a52]" />
      <div className="wellness-live-orb-a absolute -left-[12%] top-[8%] h-[55%] w-[48%] rounded-full bg-[#22A559]/18 blur-3xl" />
      <div className="wellness-live-orb-b absolute -right-[8%] top-[18%] h-[50%] w-[42%] rounded-full bg-[#5eead4]/12 blur-3xl" />
      <div className="wellness-live-orb-c absolute bottom-[-10%] left-[30%] h-[45%] w-[40%] rounded-full bg-brand-gold/14 blur-3xl" />
      <div className="wellness-live-orb-d absolute right-[20%] bottom-[5%] h-[35%] w-[30%] rounded-full bg-indigo-400/12 blur-3xl" />

      <svg className="wellness-grid-drift absolute inset-0 h-full w-full opacity-[0.14]" aria-hidden>
        <defs>
          <pattern id="wellness-live-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke="#5eead4" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wellness-live-grid)" />
      </svg>

      <div className="wellness-scan-line absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#5eead4]/10 to-transparent" />

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="wellness-float-particle absolute h-1.5 w-1.5 rounded-full bg-brand-gold/50"
          style={{
            left: `${10 + i * 14}%`,
            top: `${20 + (i % 3) * 22}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-[#071f2a]/90 via-transparent to-[#071f2a]/30" />
    </div>
  );
}
