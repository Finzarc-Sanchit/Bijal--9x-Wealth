"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCallback, useId, useRef, useState } from "react";

export type NavMenuItem = {
  label: string;
  href: string;
  description?: string;
};

export function NavMenuDropdown({
  label,
  items,
  navLinkClass,
  onNavigate,
  variant = "desktop",
}: {
  label: string;
  items: readonly NavMenuItem[];
  navLinkClass: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}) {
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
          className="flex min-h-[44px] w-full items-center justify-between rounded-xl px-4 text-base font-medium text-brand-muted hover:bg-brand-cream/80"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {label}
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
              className="overflow-hidden pl-2"
            >
              {items.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="flex min-h-[44px] flex-col justify-center rounded-lg px-4 py-2 hover:bg-brand-cream/80"
                  >
                    <span className="text-sm font-medium text-brand-navy">{item.label}</span>
                    {item.description ? (
                      <span className="text-xs text-brand-muted">{item.description}</span>
                    ) : null}
                  </Link>
                </li>
              ))}
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
      <button
        type="button"
        className={cn(navLinkClass, "inline-flex items-center gap-1")}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
      >
        {label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 opacity-60 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-brand-navy/8 bg-white shadow-lg"
            onMouseEnter={handleOpen}
            onMouseLeave={scheduleClose}
          >
            <ul className="py-2">
              {items.map((item) => (
                <li key={item.href + item.label} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    onClick={onNavigate}
                    className="block px-4 py-2.5 text-sm text-brand-navy transition hover:bg-brand-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
