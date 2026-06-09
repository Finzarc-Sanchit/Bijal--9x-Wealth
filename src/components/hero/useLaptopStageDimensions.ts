"use client";

import { useEffect, useState } from "react";

import { LAPTOP_IMAGE_ASPECT } from "@/components/hero/hero-laptop-frames";

/**
 * Stage box matches the 4:3 photo and always covers the viewport so
 * percentage screen insets stay aligned with the image on resize.
 */
export function useLaptopStageDimensions() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setSize({
        width: Math.max(vw, vh * LAPTOP_IMAGE_ASPECT),
        height: Math.max(vh, vw / LAPTOP_IMAGE_ASPECT),
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}
