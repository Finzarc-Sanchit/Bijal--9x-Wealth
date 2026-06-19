import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100dvh-5rem)] flex-col items-center justify-center bg-brand-cream px-6 py-16 text-brand-navy dark:bg-brand-navy dark:text-brand-cream">
      <p className="font-inter text-sm font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-cream/60">
        404
      </p>
      <h1 className="font-poppins mt-3 text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="font-inter mt-4 max-w-md text-center text-base leading-relaxed text-brand-muted dark:text-brand-cream/75">
        The page you are looking for may have moved or no longer exists. Return to the homepage to
        continue exploring 9X Wealth.
      </p>
      <Link
        href="/"
        className="font-inter mt-8 inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-full bg-brand-gold px-8 text-sm font-semibold text-brand-navy transition hover:bg-brand-gold-light"
      >
        Back to home
      </Link>
    </main>
  );
}
