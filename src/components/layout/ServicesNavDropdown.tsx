"use client";

import { SERVICE_NAV_ITEMS } from "@/data/services-nav";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCallback, useId, useRef, useState } from "react";

type ServicesNavDropdownProps = {
  navLinkClass: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function ServicesNavDropdown({
  navLinkClass,
  onNavigate,
  variant = "desktop",
}: ServicesNavDropdownProps) {
  const menuId = useId();
  const closeTimer = useRef<number | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current !== undefined) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = undefined;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  }, [clearCloseTimer]);

  const handleOpen = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer]);

  if (variant === "mobile") {
    return (
      <div className="rounded-xl">
        <button
          type="button"
          className={cn(
            "flex min-h-[44px] w-full items-center justify-between rounded-xl px-4 text-base font-medium text-brand-navy hover:bg-brand-cream",
          )}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          Services
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </button>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.ul
              id={menuId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden pl-2"
            >
              <li>
                <Link
                  href="/services"
                  onClick={onNavigate}
                  className="flex min-h-[44px] items-center rounded-lg px-4 text-sm font-semibold text-brand-teal hover:bg-brand-cream"
                >
                  All Services
                </Link>
              </li>
              {SERVICE_NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="flex min-h-[44px] items-start gap-3 rounded-lg px-4 py-2 hover:bg-brand-cream"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-teal/10">
                        <Icon className="h-4 w-4 text-brand-teal" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-brand-navy">{item.label}</span>
                        <span className="block text-xs text-brand-muted">{item.description}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
      onFocus={handleOpen}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
    >
      <Link
        href="/services"
        className={cn(navLinkClass, "inline-flex items-center gap-1")}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={onNavigate}
      >
        Services
        <ChevronDown
          className={cn("h-3.5 w-3.5 opacity-70 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </Link>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 mt-2 w-[min(320px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-brand-navy/8 bg-white shadow-[0_24px_60px_-20px_rgba(10,22,40,0.35)]"
            onMouseEnter={handleOpen}
            onMouseLeave={scheduleClose}
          >
            <div className="border-b border-brand-navy/6 bg-brand-cream/50 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">
                Our Services
              </p>
              <p className="mt-1 text-sm text-brand-muted">
                Insurance, investments &amp; wealth planning in Borivali
              </p>
            </div>

            <ul className="p-2">
              {SERVICE_NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      onClick={onNavigate}
                      className="group flex min-h-[44px] items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-brand-cream"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 transition group-hover:bg-brand-teal group-hover:text-white">
                        <Icon className="h-4 w-4 text-brand-teal group-hover:text-white" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-brand-navy group-hover:text-brand-teal">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-brand-muted">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-brand-navy/6 px-4 py-3">
              <Link
                href="/services"
                onClick={onNavigate}
                className="text-sm font-semibold text-brand-teal transition hover:text-brand-navy"
              >
                View all services →
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
