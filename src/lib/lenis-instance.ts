import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;
const scrollListeners = new Set<(scroll: number) => void>();

export function setLenisInstance(instance: Lenis | null): void {
  lenisInstance = instance;
}

export function getLenisInstance(): Lenis | null {
  return lenisInstance;
}

export function subscribeLenisScroll(listener: (scroll: number) => void): () => void {
  scrollListeners.add(listener);
  return () => {
    scrollListeners.delete(listener);
  };
}

export function emitLenisScroll(scroll: number): void {
  scrollListeners.forEach((listener) => {
    listener(scroll);
  });
}
