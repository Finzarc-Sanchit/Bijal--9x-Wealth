"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

/** RGB for CSS fallback dots */
const BRAND_DOT_ON_DARK = "rgba(201, 162, 39, 0.35)";
const BRAND_DOT_ON_LIGHT = "rgba(26, 107, 122, 0.45)";

type DottedSurfaceProps = Omit<React.ComponentProps<"div">, "ref"> & {
  surfaceVariant?: "on-dark" | "on-light";
};

function probeWebGL() {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true }) ??
      canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true }) ??
      canvas.getContext("experimental-webgl");
    return context instanceof WebGLRenderingContext || context instanceof WebGL2RenderingContext;
  } catch {
    return false;
  }
}

function CssDotLayer({ dotColor }: { dotColor: string }) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} 1.25px, transparent 1.25px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
          backgroundPosition: "14px 14px",
        }}
      />
    </>
  );
}

export function DottedSurface({ className, surfaceVariant, ...props }: DottedSurfaceProps) {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [useCssFallback, setUseCssFallback] = useState(true);

  const isDarkSurface =
    surfaceVariant === "on-dark" ||
    (surfaceVariant !== "on-light" && resolvedTheme === "dark");
  const dotColor = isDarkSurface ? BRAND_DOT_ON_DARK : BRAND_DOT_ON_LIGHT;

  useEffect(() => {
    if (probeWebGL()) {
      setUseCssFallback(false);
    }
  }, []);

  useEffect(() => {
    if (useCssFallback) return;

    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let animationId = 0;
    let resizeObserver: ResizeObserver | undefined;
    let disposeScene: (() => void) | undefined;

    const init = async () => {
      try {
        const THREE = await import("three");

        if (cancelled || !containerRef.current) return;

        const SEPARATION = 150;
        const AMOUNTX = 40;
        const AMOUNTY = 60;
        const dotRgb = isDarkSurface ? [201, 162, 39] : [26, 107, 122];
        const fogColor = isDarkSurface ? 0x0a1628 : 0xfaf8f5;

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(fogColor, 2000, 10000);

        const camera = new THREE.PerspectiveCamera(60, 1, 1, 10000);
        camera.position.set(0, 355, 1220);

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          failIfMajorPerformanceCaveat: true,
          powerPreference: "high-performance",
        });

        if (!renderer.getContext()) {
          renderer.dispose();
          setUseCssFallback(true);
          return;
        }

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(scene.fog.color, 0);
        container.appendChild(renderer.domElement);

        const positions: number[] = [];
        const colors: number[] = [];
        const geometry = new THREE.BufferGeometry();

        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            positions.push(
              ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
              0,
              iy * SEPARATION - (AMOUNTY * SEPARATION) / 2,
            );
            colors.push(dotRgb[0], dotRgb[1], dotRgb[2]);
          }
        }

        geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
          size: 8,
          vertexColors: true,
          transparent: true,
          opacity: isDarkSurface ? 0.35 : 0.55,
          sizeAttenuation: true,
        });

        scene.add(new THREE.Points(geometry, material));

        let count = 0;

        const resize = () => {
          const { clientWidth, clientHeight } = container;
          if (clientWidth === 0 || clientHeight === 0) return;
          camera.aspect = clientWidth / clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(clientWidth, clientHeight);
        };

        const animate = () => {
          if (cancelled) return;
          animationId = requestAnimationFrame(animate);

          const positionArray = geometry.attributes.position.array as Float32Array;
          let i = 0;
          for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
              const index = i * 3;
              positionArray[index + 1] =
                Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
              i++;
            }
          }
          geometry.attributes.position.needsUpdate = true;
          renderer.render(scene, camera);
          count += 0.1;
        };

        resize();
        animate();
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);

        disposeScene = () => {
          cancelAnimationFrame(animationId);
          resizeObserver?.disconnect();
          scene.traverse((object) => {
            if (object instanceof THREE.Points) {
              object.geometry.dispose();
              if (Array.isArray(object.material)) {
                object.material.forEach((mat) => mat.dispose());
              } else {
                object.material.dispose();
              }
            }
          });
          renderer.dispose();
          if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        };
      } catch {
        if (!cancelled) setUseCssFallback(true);
      }
    };

    init();

    return () => {
      cancelled = true;
      disposeScene?.();
    };
  }, [isDarkSurface, useCssFallback]);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden
      {...props}
    >
      {useCssFallback ? <CssDotLayer dotColor={dotColor} /> : null}
    </div>
  );
}
