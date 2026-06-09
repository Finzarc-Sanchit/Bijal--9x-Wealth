"use client";

import { riskColorForScore } from "@/lib/risk-calculator/scoring";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";

type LiveRiskGraphProps = {
  score: number;
  isActive: boolean;
  className?: string;
};

export function LiveRiskGraph({ score, isActive, className }: LiveRiskGraphProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const [points, setPoints] = useState<number[]>([4, 6, 5, 8, 7]);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const target = Math.max(4, Math.min(96, score));
    const step = () => {
      setDisplayScore((prev) => {
        const delta = target - prev;
        if (Math.abs(delta) < 0.4) return target;
        return prev + delta * 0.08;
      });
      frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [score]);

  useEffect(() => {
    if (!isActive) return;
    const interval = window.setInterval(() => {
      setPoints((prev) => {
        const last = prev[prev.length - 1] ?? displayScore;
        const jitter = (Math.random() - 0.42) * 6;
        const next = Math.max(4, Math.min(96, last + jitter + (displayScore - last) * 0.15));
        const updated = [...prev.slice(-18), next];
        return updated;
      });
    }, 280);
    return () => window.clearInterval(interval);
  }, [isActive, displayScore]);

  const strokeColor = riskColorForScore(Math.round(displayScore));
  const pathD = useMemo(() => {
    const width = 100;
    const height = 60;
    const stepX = width / Math.max(points.length - 1, 1);
    const coords = points.map((p, i) => {
      const x = i * stepX;
      const y = height - (p / 100) * height;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    });
    return coords.join(" ");
  }, [points]);

  const areaD = useMemo(() => {
    if (!pathD) return "";
    return `${pathD} L 100 60 L 0 60 Z`;
  }, [pathD]);

  return (
    <div
      className={cn(
        "risk-calc-graph flex h-full flex-col rounded-2xl border border-brand-navy/8 bg-white p-5 shadow-[0_16px_40px_-20px_rgba(10,22,40,0.12)]",
        className,
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">
            Live Risk Index
          </p>
          <p className="mt-1 font-display text-2xl font-bold text-brand-navy">
            {Math.round(displayScore)}%
          </p>
        </div>
        <span
          className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: strokeColor }}
        >
          {displayScore <= 40 ? "Low" : displayScore <= 65 ? "Moderate" : "Elevated"}
        </span>
      </div>

      <div className="relative min-h-[200px] flex-1">
        <svg
          viewBox="0 0 100 60"
          className="h-full w-full overflow-visible"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="risk-graph-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={strokeColor} stopOpacity="0.28" />
              <stop offset="100%" stopColor={strokeColor} stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80].map((line) => (
            <line
              key={line}
              x1="0"
              y1={60 - (line / 100) * 60}
              x2="100"
              y2={60 - (line / 100) * 60}
              stroke="rgba(100,116,139,0.15)"
              strokeWidth="0.3"
            />
          ))}
          <path d={areaD} fill="url(#risk-graph-fill)" className="risk-calc-graph-area" />
          <path
            d={pathD}
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="risk-calc-graph-line"
          />
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-wide text-brand-muted">
        <span>Protected</span>
        <span>Exposure</span>
        <span>Critical</span>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-brand-muted">
        Graph accelerates in real time as you answer — color shifts from teal to gold and red as
        vulnerability increases.
      </p>
    </div>
  );
}
