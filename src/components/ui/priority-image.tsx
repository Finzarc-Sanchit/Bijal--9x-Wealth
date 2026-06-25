import Image, { type ImageProps } from "next/image";

/**
 * Drop-in next/image wrapper: when `priority` is set, also requests high fetch priority.
 */
export function PriorityImage({ priority, fetchPriority, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      priority={priority}
      fetchPriority={priority ? (fetchPriority ?? "high") : fetchPriority}
    />
  );
}
