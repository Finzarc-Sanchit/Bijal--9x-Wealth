let previousPathname: string | null = null;
let skipHomeIntro = false;

/**
 * Call on every route render (before children). Detects client navigations to `/`
 * from another internal route so the homepage intro can be skipped synchronously.
 */
export function trackPathnameChange(pathname: string): void {
  if (typeof window === "undefined") return;

  if (previousPathname !== null && pathname === "/" && previousPathname !== "/") {
    skipHomeIntro = true;
  }
  previousPathname = pathname;
}

export function shouldSkipHomeIntro(): boolean {
  return skipHomeIntro;
}
