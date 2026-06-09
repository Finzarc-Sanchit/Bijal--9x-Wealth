"use client";

import { lerpAtProgress } from "@/components/hero/hero-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PARTICLE_COLORS = ["#D4AF37", "#E8D28A", "#F5F5DC"] as const;

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  color: (typeof PARTICLE_COLORS)[number];
  opacity: number;
};

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => {
    const seed = id * 7919 + 104729;
    const rand = (n: number) => ((seed * (n + 1) * 9301 + 49297) % 233280) / 233280;
    return {
      id,
      left: rand(1) * 100,
      top: rand(2) * 100,
      size: 1.5 + rand(3) * 3.5,
      duration: 14 + rand(4) * 10,
      delay: rand(5) * 8,
      driftX: 8 + rand(6) * 18,
      driftY: 6 + rand(7) * 14,
      color: PARTICLE_COLORS[id % PARTICLE_COLORS.length],
      opacity: 0.25 + rand(8) * 0.45,
    };
  });
}

const PARTICLES = createParticles(56);

type HeroLuxuryWaveBackgroundProps = {
  scrollProgress?: number;
  activeIndex?: number;
  parallaxX?: number;
  parallaxY?: number;
  className?: string;
};

export function HeroLuxuryWaveBackground({
  scrollProgress = 0,
  activeIndex = 0,
  parallaxX = 0,
  parallaxY = 0,
  className,
}: HeroLuxuryWaveBackgroundProps) {
  const scrollY = scrollProgress * -48;
  const mouseX = Math.max(-20, Math.min(20, parallaxX * 20));
  const mouseY = Math.max(-20, Math.min(20, parallaxY * 20));

  const waveScale =
    lerpAtProgress(scrollProgress, [
      [0, 1.04],
      [0.5, 1.1],
      [1, 1.04],
    ]) + mouseY * 0.002;

  const waveShiftX =
    lerpAtProgress(scrollProgress, [
      [0, 4],
      [0.5, 0],
      [1, -4],
    ]) + mouseX * 0.15;

  const objectPositions = ["58% 46%", "50% 44%", "42% 46%"];
  const objectPosition = objectPositions[activeIndex] ?? objectPositions[0];

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#030508]" />

      {/* Primary wave stage — scroll + mouse parallax */}
      <div
        className="absolute inset-[-12%]"
        style={{
          transform: `translate3d(${waveShiftX}%, ${scrollY}px, 0) scale(${waveScale})`,
          transformOrigin: "50% 55%",
          willChange: "transform",
        }}
      >
        <div
          className="hero-wave-parallax absolute inset-0"
          style={{
            transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`,
            willChange: "transform",
          }}
        >
          {/* Layer A — main wave, slow drift + breathe + zoom */}
          <div className="hero-wave-drift absolute inset-0">
            <div className="hero-wave-zoom absolute inset-0">
              <div className="hero-wave-float absolute inset-0">
                <Image
                  src="/images/hero-wave-bg.png"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition }}
                  draggable={false}
                />
                <div className="hero-wave-shimmer absolute inset-0" />
              </div>
            </div>
          </div>

          {/* Layer B — ghost wave, opposite phase for depth */}
          <div className="hero-wave-float-alt absolute inset-0 opacity-[0.28] mix-blend-screen">
            <Image
              src="/images/hero-wave-bg.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover scale-110"
              style={{ objectPosition }}
              draggable={false}
            />
          </div>

          {/* Layer C — gold energy pulse on mesh peaks */}
          <div className="hero-wave-energy absolute inset-0 opacity-40 mix-blend-soft-light" />
        </div>
      </div>

      <div className="hero-wave-glow absolute inset-0" />

      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(${mouseX * 0.35}px, ${mouseY * 0.35 + scrollY * 0.25}px, 0)`,
        }}
      >
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className={cn(
              "hero-wave-particle absolute rounded-full",
              p.id >= 32 && "hidden md:block",
            )}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              ["--hero-particle-x" as string]: `${p.driftX}px`,
              ["--hero-particle-y" as string]: `${-p.driftY}px`,
            }}
          />
        ))}
      </div>

      <div className="hero-wave-light-sweep absolute inset-0" />

      {/* Readability — lighter on wave side so mesh stays visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030508]/92 via-[#030508]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/75 via-transparent to-[#030508]/25" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0a1628]/30" />
    </div>
  );
}
