"use client";

import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

const GRID_SQUARES: Array<[number, number]> = [
  [3, 2],
  [5, 1],
  [7, 4],
  [4, 6],
  [9, 3],
  [11, 7],
  [6, 9],
  [13, 5],
  [8, 11],
  [14, 9],
];

type MeshPoint = { x: number; y: number };

export function ServicesHeroBackground({
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

  const parallax = (strength: number) =>
    reduceMotion || !hovering
      ? { x: 0, y: 0 }
      : {
          x: (point.x - 0.5) * strength,
          y: (point.y - 0.5) * strength * 0.65,
        };

  const lift = hovering && !reduceMotion ? -18 : 0;
  const meshLift = {
    x: parallax(14).x,
    y: lift + parallax(14).y,
  };
  const blobA = parallax(28);
  const blobB = parallax(-24);
  const blobC = parallax(20);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("relative overflow-hidden bg-brand-cream", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setPoint({ x: 0.5, y: 0.5 });
      }}
      onMouseMove={onMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: `translate3d(${meshLift.x}px, ${meshLift.y}px, 0) scale(${hovering && !reduceMotion ? 1.012 : 1})`,
        }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-[#f5f0e8] to-[#faf8f5]" />

        <div
          className="absolute -left-[8%] top-[6%] h-[48%] w-[44%] rounded-full bg-brand-gold/16 blur-[88px] transition-transform duration-700 ease-out"
          style={{ transform: `translate(${blobA.x}px, ${blobA.y}px)` }}
        />
        <div
          className="absolute -right-[6%] top-[12%] h-[42%] w-[40%] rounded-full bg-brand-teal/14 blur-[80px] transition-transform duration-700 ease-out"
          style={{ transform: `translate(${blobB.x}px, ${blobB.y}px)` }}
        />
        <div
          className="absolute bottom-[-8%] left-[28%] h-[36%] w-[38%] rounded-full bg-brand-teal/8 blur-[72px] transition-transform duration-700 ease-out"
          style={{ transform: `translate(${blobC.x}px, ${blobC.y}px)` }}
        />

        <GridPattern
          width={48}
          height={48}
          x={-1}
          y={-1}
          squares={GRID_SQUARES}
          className={cn(
            "fill-brand-teal/[0.07] stroke-brand-navy/[0.11]",
            "[mask-image:radial-gradient(ellipse_80%_70%_at_50%_38%,black,transparent)]",
            "inset-x-0 inset-y-[-18%] h-[135%]",
          )}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,39,0.06),transparent_58%)]" />
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}
