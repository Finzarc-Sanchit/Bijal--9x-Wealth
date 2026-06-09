export const ABOUT_HERO_SCROLL_VH = 200;
export const ABOUT_HERO_STEP_COUNT = 2;

/** Hero visible on load; one scroll exits the full-screen hero */
export const ABOUT_SNAP_PROGRESS = [0, 1] as const;

export function getAboutHeroScrollProgress(container: HTMLElement): number {
  const range = container.offsetHeight - window.innerHeight;
  if (range <= 0) return 1;
  const scrolled = window.scrollY - container.offsetTop;
  return Math.min(1, Math.max(0, scrolled / range));
}

export function aboutScrollProgressToStep(progress: number): number {
  return progress < 0.5 ? 0 : 1;
}

export function aboutStepToScrollProgress(step: number): number {
  return ABOUT_SNAP_PROGRESS[Math.min(1, Math.max(0, step))] ?? 0;
}
