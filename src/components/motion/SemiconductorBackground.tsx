"use client";

import { motion } from "framer-motion";

const TRACES = [
  "M 80 120 H 280 V 200 H 480",
  "M 120 320 H 360 V 140 H 520",
  "M 640 80 V 260 H 820 V 420",
  "M 900 160 H 1100 V 300 H 960",
  "M 200 480 H 420 V 360 H 600 V 520",
  "M 720 480 H 880 V 580 H 1040",
  "M 40 240 H 160 V 400 H 320",
  "M 500 40 V 100 H 700 V 60",
] as const;

const CHIPS = [
  { x: 260, y: 175, w: 56, h: 36, delay: 0 },
  { x: 470, y: 115, w: 48, h: 32, delay: 0.4 },
  { x: 780, y: 230, w: 64, h: 40, delay: 0.8 },
  { x: 380, y: 330, w: 52, h: 34, delay: 1.2 },
  { x: 620, y: 450, w: 58, h: 38, delay: 0.6 },
  { x: 920, y: 270, w: 50, h: 30, delay: 1.0 },
] as const;

const NODES = [
  { cx: 280, cy: 120, delay: 0 },
  { cx: 480, cy: 200, delay: 0.3 },
  { cx: 360, cy: 140, delay: 0.6 },
  { cx: 640, cy: 260, delay: 0.9 },
  { cx: 820, cy: 420, delay: 0.2 },
  { cx: 420, cy: 480, delay: 0.5 },
  { cx: 880, cy: 580, delay: 0.8 },
  { cx: 160, cy: 400, delay: 1.1 },
] as const;

export function SemiconductorBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Ambient glow — soft, already diffused */}
      <motion.div
        className="absolute -right-[10%] top-[5%] h-[70%] w-[55%] rounded-full bg-brand-teal/15 blur-[120px]"
        animate={{ opacity: [0.3, 0.45, 0.3], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-5%] left-[-5%] h-[50%] w-[45%] rounded-full bg-[#22A559]/10 blur-[100px]"
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute left-[35%] top-[40%] h-[30%] w-[30%] rounded-full bg-brand-gold/8 blur-[80px]"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Circuit visuals — slightly blurred so they sit behind content */}
      <div className="absolute inset-0 scale-[1.03] blur-[5px] opacity-75 sm:blur-[6px]">
        <div
          className="semiconductor-grid absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(34,165,89,0.9) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 640"
          preserveAspectRatio="xMidYMid slice"
        >
        <defs>
          <linearGradient id="trace-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a6b7a" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#22A559" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c9a227" stopOpacity="0.3" />
          </linearGradient>
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {TRACES.map((d, i) => (
          <g key={d}>
            <path
              d={d}
              fill="none"
              stroke="#1a6b7a"
              strokeWidth="1.5"
              strokeOpacity="0.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              d={d}
              fill="none"
              stroke="url(#trace-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="8 14"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.65, 0.3],
                strokeDashoffset: [0, -44],
              }}
              transition={{
                pathLength: { duration: 1.5, delay: i * 0.12, ease: "easeOut" },
                opacity: { duration: 3, repeat: Infinity, delay: i * 0.2 },
                strokeDashoffset: { duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.15 },
              }}
            />
          </g>
        ))}

        {NODES.map(({ cx, cy, delay }) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={4}
            fill="#22A559"
            filter="url(#node-glow)"
            animate={{ opacity: [0.5, 1, 0.5], r: [3.5, 5, 3.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay, ease: "easeInOut" }}
          />
        ))}

        {CHIPS.map(({ x, y, w, h, delay }) => (
          <g key={`${x}-${y}`}>
            <motion.rect
              x={x}
              y={y}
              width={w}
              height={h}
              rx={4}
              fill="#0d2137"
              stroke="#1a6b7a"
              strokeWidth="1"
              animate={{ strokeOpacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay }}
            />
            {[0, 1, 2].map((pin) => (
              <rect
                key={pin}
                x={x - 6}
                y={y + 8 + pin * 10}
                width={4}
                height={6}
                rx={1}
                fill="#22A559"
                opacity={0.6}
              />
            ))}
            <motion.rect
              x={x + 8}
              y={y + 10}
              width={w - 16}
              height={h - 20}
              rx={2}
              fill="#1a6b7a"
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 2, repeat: Infinity, delay: delay + 0.3 }}
            />
          </g>
        ))}
        </svg>

        <div className="semiconductor-scan absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-teal/8 to-transparent" />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-gold/60"
            style={{
              left: `${8 + (i * 7.5) % 85}%`,
              top: `${12 + ((i * 13) % 70)}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -30 - (i % 3) * 15, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * 20, 0],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.35,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Scrim — keeps foreground text legible */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/75 via-brand-navy/55 to-brand-navy/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-brand-navy/40" />
    </div>
  );
}
