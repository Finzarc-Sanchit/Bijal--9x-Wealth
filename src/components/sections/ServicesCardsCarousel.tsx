"use client";

import { DottedSurface } from "@/components/ui/dotted-surface";
import { SERVICE_CARD_IMAGES, SERVICES_CAROUSEL_UI } from "@/data/services-section";
import { CAROUSEL_TO_BLUEPRINT_SLUG } from "@/data/services-blueprint";
import { getServiceDetailByIndex } from "@/data/services-detail";
import type { SiteContent } from "@/lib/content/schema";
import { cn } from "@/lib/utils";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PriorityImage } from "@/components/ui/priority-image";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const COLLAPSED_WIDTH = 292;
const EXPANDED_WIDTH = 460;
const CARD_HEIGHT = 560;
const CARD_GAP = 18;

const springTransition = {
  type: "spring" as const,
  stiffness: 320,
  damping: 30,
  mass: 0.85,
};

type ServiceItem = SiteContent["services"][number];

function serviceHref(slug: string, isStandalonePage: boolean) {
  return isStandalonePage ? `#${slug}` : `/services#${slug}`;
}

function ServiceSolutionCard({
  service,
  index,
  cardKey,
  isActive,
  isAnyActive,
  onActivate,
  isStandalonePage,
  reduceMotion,
}: {
  service: ServiceItem;
  index: number;
  cardKey: string;
  isActive: boolean;
  isAnyActive: boolean;
  onActivate: (key: string) => void;
  isStandalonePage: boolean;
  reduceMotion: boolean | null;
}) {
  const image = SERVICE_CARD_IMAGES[index];
  const detail = getServiceDetailByIndex(index);
  const slug = CAROUSEL_TO_BLUEPRINT_SLUG[index] ?? detail.id;
  const href = serviceHref(slug, isStandalonePage);

  return (
    <motion.article
      layout
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 40, scale: 0.96 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ once: true, amount: 0.25 }}
      animate={{
        width: isActive ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
        y: isActive ? -10 : 0,
        scale: isActive ? 1.02 : isAnyActive ? 0.98 : 1,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: isActive ? -10 : -6,
              scale: isActive ? 1.02 : 1.01,
            }
      }
      transition={
        reduceMotion
          ? { duration: 0.2 }
          : {
              layout: springTransition,
              width: springTransition,
              y: springTransition,
              scale: springTransition,
              opacity: { delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }
      }
      onMouseEnter={() => onActivate(cardKey)}
      onFocus={() => onActivate(cardKey)}
      style={{ height: CARD_HEIGHT }}
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-[1.75rem] ring-1 transition-shadow duration-500",
        isActive
          ? "z-20 ring-brand-gold/50 shadow-[0_36px_72px_-18px_rgba(201,162,39,0.35)]"
          : "z-10 ring-white/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)]",
        isAnyActive && !isActive && "opacity-75",
      )}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isActive ? 1.1 : 1.04 }}
        transition={reduceMotion ? { duration: 0.2 } : { duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <PriorityImage
          src={image.src}
          alt={image.alt}
          fill
          className={cn("object-cover", index === 2 && "object-[center_20%]")}
          sizes={`(max-width: 768px) 92vw, ${EXPANDED_WIDTH}px`}
          priority={index === 0}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-brand-navy/15" />

      <motion.div
        className="absolute inset-0 bg-brand-teal/10"
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.45 }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-2 ring-brand-gold/0"
        animate={{
          boxShadow: isActive
            ? "inset 0 0 0 1px rgba(201,162,39,0.35), 0 0 40px rgba(26,107,122,0.25)"
            : "inset 0 0 0 1px rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-6 sm:p-8">
        <motion.span
          className="mb-4 inline-flex w-fit rounded-full bg-brand-teal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white"
          animate={{ x: isActive ? 0 : -4, opacity: isActive ? 1 : 0.92 }}
          transition={{ duration: 0.35 }}
        >
          {SERVICES_CAROUSEL_UI.badge}
        </motion.span>

        <motion.h3
          className="font-poppins text-3xl font-bold leading-tight text-white sm:text-[2.15rem]"
          animate={{ y: isActive ? 0 : 4 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className={cn(
            "mt-3 text-sm leading-relaxed text-white/75",
            isActive ? "line-clamp-3" : "line-clamp-2",
          )}
          animate={{ opacity: isActive ? 1 : 0.88, y: isActive ? 0 : 6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {detail.summary}
        </motion.p>

        <motion.div
          animate={{ opacity: isActive ? 1 : 0.85, y: isActive ? 0 : 8 }}
          transition={{ duration: 0.4, delay: isActive ? 0.05 : 0 }}
        >
          <Link
            href={href}
            className={cn(
              "mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy",
              isActive
                ? "bg-brand-teal text-white hover:bg-brand-gold hover:text-brand-navy"
                : "border border-white/70 text-white hover:border-brand-teal hover:bg-brand-teal/20",
            )}
            aria-label={`Explore ${service.title}`}
          >
            <motion.span
              animate={{ x: isActive ? 2 : 0 }}
              whileHover={reduceMotion ? undefined : { x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

export function ServicesCardsCarousel({
  content,
  isStandalonePage = false,
}: {
  content: SiteContent;
  isStandalonePage?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleActivate = useCallback((key: string) => {
    setActiveKey(key);
  }, []);

  const handleDeactivate = useCallback(() => {
    setActiveKey(null);
  }, []);

  if (content.services.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden bg-brand-navy section-py"
      aria-labelledby="services-carousel-heading"
      onMouseLeave={handleDeactivate}
    >
      <DottedSurface surfaceVariant="on-dark" className="opacity-90" />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,107,122,0.14),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="mb-10 text-center md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">
            {SERVICES_CAROUSEL_UI.eyebrow}
          </p>
          <h2
            id="services-carousel-heading"
            className="font-poppins text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.25rem]"
          >
            <span className="text-white">{SERVICES_CAROUSEL_UI.titleWhite} </span>
            <span className="text-brand-teal">{SERVICES_CAROUSEL_UI.titleAccent}</span>
          </h2>
        </motion.div>

        <LayoutGroup id="services-solutions-row">
          <div className="hidden justify-center md:flex" style={{ gap: CARD_GAP }}>
            {content.services.map((service, index) => {
              const key = `service-${index}`;
              return (
                <ServiceSolutionCard
                  key={key}
                  cardKey={key}
                  service={service}
                  index={index}
                  isActive={activeKey === key}
                  isAnyActive={activeKey !== null}
                  onActivate={handleActivate}
                  isStandalonePage={isStandalonePage}
                  reduceMotion={reduceMotion}
                />
              );
            })}
          </div>

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
            {content.services.map((service, index) => {
              const image = SERVICE_CARD_IMAGES[index];
              const detail = getServiceDetailByIndex(index);
              const slug = CAROUSEL_TO_BLUEPRINT_SLUG[index] ?? detail.id;
              const href = serviceHref(slug, isStandalonePage);

              return (
                <motion.article
                  key={service.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.96 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="relative w-[min(92vw,360px)] shrink-0 snap-center overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)]"
                  style={{ height: CARD_HEIGHT }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={reduceMotion ? { scale: 1 } : { scale: [1.04, 1.08, 1.04] }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 10, repeat: Infinity, ease: "easeInOut" }
                    }
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="360px"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-brand-navy/15" />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-6 sm:p-7">
                    <span className="mb-4 inline-flex w-fit rounded-full bg-brand-teal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                      {SERVICES_CAROUSEL_UI.badge}
                    </span>
                    <h3 className="font-poppins text-2xl font-bold text-white sm:text-3xl">{service.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/75">
                      {detail.summary}
                    </p>
                    <Link
                      href={href}
                      className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:border-brand-teal hover:bg-brand-teal/20"
                      aria-label={`Explore ${service.title}`}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
