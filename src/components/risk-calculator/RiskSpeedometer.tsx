"use client";

import { riskColorForScore, riskLabelForScore } from "@/lib/risk-calculator/scoring";
import { cn } from "@/lib/utils";
import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useId, useState } from "react";

type RiskSpeedometerProps = {
  score: number;
  title?: string;
  subtitle?: string;
  className?: string;
};

const CX = 100;
const CY = 100;
const R = 72;

function polar(angleDeg: number, radius = R) {
  const rad = ((angleDeg - 180) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

function arcPath(startDeg: number, endDeg: number, radius = R) {
  const start = polar(startDeg, radius);
  const end = polar(endDeg, radius);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${large} 1 ${end.x} ${end.y}`;
}

function wedgePath(endDeg: number) {
  const tip = polar(endDeg, R - 6);
  const start = polar(-90, R - 6);
  return `M ${CX} ${CY} L ${start.x} ${start.y} A ${R - 6} ${R - 6} 0 0 1 ${tip.x} ${tip.y} Z`;
}

export function RiskSpeedometer({
  score,
  title = "Vulnerability Rating",
  subtitle,
  className,
}: RiskSpeedometerProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `speedo-grad-${uid}`;
  const wedgeId = `speedo-wedge-${uid}`;

  const springScore = useSpring(0, { stiffness: 42, damping: 14 });
  const [wedgeD, setWedgeD] = useState(wedgePath(-90));

  useEffect(() => {
    springScore.set(score);
  }, [score, springScore]);

  useEffect(() => {
    return springScore.on("change", (v) => {
      const deg = -90 + (v / 100) * 180;
      setWedgeD(wedgePath(deg));
    });
  }, [springScore]);

  const needleRotate = useTransform(springScore, [0, 100], [-90, 90]);
  const color = riskColorForScore(score);
  const label = riskLabelForScore(score);
  const ticks = Array.from({ length: 11 }, (_, i) => -90 + i * 18);

  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-2xl border border-brand-navy/8 bg-white p-6 text-center shadow-[0_16px_40px_-20px_rgba(10,22,40,0.12)]",
        className,
      )}
    >
      <div className="relative h-48 w-full max-w-[300px] sm:h-52">
        <svg viewBox="0 0 200 120" className="h-full w-full overflow-visible" aria-hidden>
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a6b7a" />
              <stop offset="45%" stopColor="#59BA86" />
              <stop offset="100%" stopColor="#a3e635" />
            </linearGradient>
            <radialGradient id={wedgeId} cx="50%" cy="90%" r="70%">
              <stop offset="0%" stopColor="#59BA86" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#59BA86" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path
            d={arcPath(-90, 90)}
            fill="none"
            stroke="rgba(100,116,139,0.18)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d={arcPath(-90, 90)}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="16"
            strokeLinecap="round"
          />

          <motion.path
            d={wedgeD}
            fill={`url(#${wedgeId})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {ticks.map((deg) => {
            const inner = polar(deg, R - 10);
            const outer = polar(deg, R + 2);
            return (
              <line
                key={deg}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke="#0a1628"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.55"
              />
            );
          })}

          <circle cx={CX} cy={CY} r="6" fill="#0a1628" />
          <motion.g
            style={{
              transformOrigin: `${CX}px ${CY}px`,
              rotate: needleRotate,
            }}
          >
            <path
              d={`M ${CX} ${CY - 4} L ${CX + 5} ${CY - 52} L ${CX} ${CY - 58} L ${CX - 5} ${CY - 52} Z`}
              fill="#0a1628"
            />
          </motion.g>
          <circle cx={CX} cy={CY} r="4" fill={color} className="transition-colors duration-500" />
        </svg>
      </div>

      <p className="font-display text-3xl font-bold text-brand-navy sm:text-4xl">
        {score}% {title}
      </p>
      <p className="mt-1 text-sm font-semibold" style={{ color }}>
        {label}
      </p>
      {subtitle ? (
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
