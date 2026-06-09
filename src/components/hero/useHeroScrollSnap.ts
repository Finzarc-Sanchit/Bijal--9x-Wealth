"use client";

import {
  HERO_SLIDE_COUNT,
  getHeroScrollProgress,
  heroScrollProgressToStep,
  heroStepToScrollProgress,
} from "@/components/hero/hero-themes";
import { useCallback, useEffect, useRef, type RefObject } from "react";

const SNAP_LOCK_MS = 720;
const WHEEL_THRESHOLD = 25;

export function useHeroScrollSnap(containerRef: RefObject<HTMLDivElement | null>) {
  const locking = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const releaseLock = useCallback(() => {
    locking.current = false;
    if (lockTimer.current) {
      clearTimeout(lockTimer.current);
      lockTimer.current = null;
    }
  }, []);

  const acquireLock = useCallback(() => {
    locking.current = true;
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(releaseLock, SNAP_LOCK_MS);
  }, [releaseLock]);

  const scrollToStep = useCallback(
    (step: number, behavior: ScrollBehavior = "smooth") => {
      const el = containerRef.current;
      if (!el) return;

      const clamped = Math.min(HERO_SLIDE_COUNT - 1, Math.max(0, step));
      const range = el.offsetHeight - window.innerHeight;
      const top = el.offsetTop + range * heroStepToScrollProgress(clamped);

      acquireLock();
      window.scrollTo({ top, behavior });
    },
    [acquireLock, containerRef],
  );

  const getCurrentStep = useCallback(() => {
    const el = containerRef.current;
    if (!el) return 0;
    return heroScrollProgressToStep(getHeroScrollProgress(el));
  }, [containerRef]);

  const isHeroPinned = useCallback(() => {
    const el = containerRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top <= 2 && rect.bottom >= window.innerHeight * 0.85;
  }, [containerRef]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (locking.current) {
        e.preventDefault();
        return;
      }
      if (!isHeroPinned()) return;

      const el = containerRef.current;
      if (!el) return;

      const step = getCurrentStep();

      if (e.deltaY > WHEEL_THRESHOLD) {
        if (step < HERO_SLIDE_COUNT - 1) {
          e.preventDefault();
          scrollToStep(step + 1);
        }
        // at advisory (step 2 / progress 1), allow natural scroll to exit hero
      } else if (e.deltaY < -WHEEL_THRESHOLD && step > 0) {
        e.preventDefault();
        scrollToStep(step - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [containerRef, getCurrentStep, isHeroPinned, scrollToStep]);

  useEffect(() => {
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (locking.current || !isHeroPinned()) return;
      const touchEndY = e.changedTouches[0]?.clientY ?? 0;
      const delta = touchStartY - touchEndY;
      if (Math.abs(delta) < 40) return;

      const step = getCurrentStep();
      if (delta > 0 && step < HERO_SLIDE_COUNT - 1) {
        scrollToStep(step + 1);
      } else if (delta < 0 && step > 0) {
        scrollToStep(step - 1);
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [getCurrentStep, isHeroPinned, scrollToStep]);

  return { scrollToStep, getCurrentStep, isLocking: () => locking.current };
}
