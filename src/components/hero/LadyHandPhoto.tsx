import { cn } from "@/lib/utils";
import Image from "next/image";

/** Real stock photo — woman's hand gripping a phone (Pexels, free licence) */
export function LadyHandPhoto({ className }: { className?: string }) {
  return (
    <Image
      src="/images/hero-lady-hand.jpg"
      alt=""
      aria-hidden
      width={900}
      height={1200}
      priority
      className={cn(
        "pointer-events-none absolute left-1/2 top-[50%] z-10 w-[128%] max-w-[340px] -translate-x-1/2 -translate-y-[46%] object-contain select-none",
        className,
      )}
      sizes="(max-width: 640px) 280px, 340px"
    />
  );
}
