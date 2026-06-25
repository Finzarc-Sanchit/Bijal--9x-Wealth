import { PriorityImage } from "@/components/ui/priority-image";

/** Server-rendered hero background so the image is in the RSC payload on client navigations. */
export function InteriorPageHeroBackground({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-brand-navy"
      aria-hidden
    >
      <PriorityImage
        src={src}
        alt={alt}
        fill
        priority
        className="box-border h-full w-full max-w-none object-cover"
        sizes="100vw"
      />
    </div>
  );
}
