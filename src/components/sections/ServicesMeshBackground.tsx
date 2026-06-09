"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

type MeshPoint = { x: number; y: number };

export function ServicesMeshBackground({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovering, setHovering] = useState(false);
  const [point, setPoint] = useState<MeshPoint>({ x: 0.5, y: 0.5 });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (reduceMotion) return;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setPoint({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      });
    },
    [reduceMotion],
  );

  const shift = (strength: number) =>
    reduceMotion || !hovering
      ? { x: 0, y: 0 }
      : {
          x: (point.x - 0.5) * strength,
          y: (point.y - 0.5) * strength,
        };

  const blobA = shift(42);
  const blobB = shift(-36);
  const blobC = shift(28);
  const gridShift = shift(18);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("services-mesh-section relative overflow-hidden", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setPoint({ x: 0.5, y: 0.5 });
      }}
      onMouseMove={onMouseMove}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-[#f7f3ec] to-[#faf8f5]" />

        <div
          className="services-mesh-blob-a absolute -left-[10%] top-[4%] h-[52%] w-[52%] rounded-full bg-brand-gold/14 blur-[90px] transition-transform duration-700 ease-out"
          style={{ transform: `translate(${blobA.x}px, ${blobA.y}px)` }}
        />
        <div
          className="services-mesh-blob-b absolute -right-[8%] top-[18%] h-[48%] w-[48%] rounded-full bg-brand-teal/12 blur-[85px] transition-transform duration-700 ease-out"
          style={{ transform: `translate(${blobB.x}px, ${blobB.y}px)` }}
        />
        <div
          className="services-mesh-blob-c absolute bottom-[-6%] left-[24%] h-[42%] w-[42%] rounded-full bg-brand-teal/8 blur-[75px] transition-transform duration-700 ease-out"
          style={{ transform: `translate(${blobC.x}px, ${blobC.y}px)` }}
        />

        <svg
          className="services-mesh-grid absolute inset-0 h-full w-full opacity-[0.4] transition-transform duration-700 ease-out"
          style={{ transform: `translate(${gridShift.x}px, ${gridShift.y}px)` }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="services-mesh-lines" width="56" height="56" patternUnits="userSpaceOnUse">
              <path
                d="M56 0H0V56"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                className="text-brand-navy/[0.07]"
              />
            </pattern>
            <pattern id="services-mesh-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="14" cy="14" r="0.9" className="fill-brand-teal/[0.08]" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-mesh-lines)" />
          <rect width="100%" height="100%" fill="url(#services-mesh-dots)" />
        </svg>

        <div className="about-mesh-shimmer absolute inset-0 opacity-[0.035]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,107,122,0.05),transparent_55%)]" />
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}
