"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const CROSSFADE = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const };

export function HeroCrossfadeImage({
  src,
  alt,
  priority = false,
  isActive = true,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  isActive?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.08 }}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 1.04,
      }}
      transition={reduceMotion ? { duration: 0.2 } : CROSSFADE}
    >
      <motion.div
        className="absolute inset-0"
        animate={
          reduceMotion || !isActive
            ? { scale: 1, x: 0, y: 0 }
            : {
                scale: [1, 1.1, 1.05, 1.12, 1.06],
                x: [0, -10, 6, -4, 0],
                y: [0, -8, 4, -3, 0],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover opacity-90"
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      </motion.div>
    </motion.div>
  );
}

export function HeroAnimatedPillImage({
  src,
  alt,
  priority = false,
  isActive = true,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  isActive?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="relative block h-full w-full overflow-hidden rounded-full"
      initial={{ opacity: 0.85 }}
      animate={
        reduceMotion || !isActive
          ? { scale: 1, opacity: 1 }
          : { scale: [1, 1.05, 1.02, 1.04], opacity: 1 }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 9, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="192px" priority={priority} />
    </motion.span>
  );
}

/** @deprecated Use HeroCrossfadeImage */
export const HeroAnimatedImage = HeroCrossfadeImage;
