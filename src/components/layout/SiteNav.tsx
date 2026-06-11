"use client";

import { EditorialWordmark } from "@/components/brand/EditorialWordmark";
import { useSiteIntro } from "@/components/layout/SiteIntroLayout";
import { NavMenuDropdown } from "@/components/layout/NavMenuDropdown";
import { ServicesNavDropdown } from "@/components/layout/ServicesNavDropdown";
import {
  CONTACT,
  EDITORIAL_NAV_CTA,
  EDITORIAL_NAV_MENUS,
  SITE_NAV_LINKS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CTA = {
  label: "Book Consultation",
  href: "/#consultation-form",
} as const;

function NavLink({
  href,
  label,
  className,
  onClick,
}: {
  href: string;
  label: string;
  className: string;
  onClick?: () => void;
}) {
  const isExternal = href.startsWith("http");
  const isHashOnly = href.startsWith("/#") || href.startsWith("#");

  if (isExternal) {
    return (
      <a href={href} className={className} onClick={onClick} rel="noopener noreferrer" target="_blank">
        {label}
      </a>
    );
  }

  if (isHashOnly) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className={cn("inline-flex h-10 w-10", className)} aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={cn(
        "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-brand-muted transition hover:text-brand-navy",
        className,
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-[1.15rem] w-[1.15rem]" /> : <Moon className="h-[1.15rem] w-[1.15rem]" />}
    </button>
  );
}

export function SiteNav({
  variant = "default",
  pinVisible = false,
}: {
  variant?: "default" | "floating" | "editorial";
  pinVisible?: boolean;
}) {
  const { showNavLogo } = useSiteIntro();
  const { scrolled, navVisible } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isFloating = variant === "floating";
  const isEditorial = variant === "editorial";

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const useSolidNav = isFloating || isEditorial || scrolled;

  const navLinkClass = cn(
    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    useSolidNav
      ? "text-brand-navy/80 hover:bg-brand-cream hover:text-brand-navy"
      : "text-white/80 hover:bg-white/10 hover:text-white",
  );

  const showHeader = pinVisible || navVisible || mobileOpen || isEditorial;

  if (isEditorial) {
    const editorialLinkClass =
      "rounded-lg px-3 py-2 text-sm font-medium text-brand-muted transition-colors duration-300 hover:bg-brand-gold/10 hover:text-brand-navy";

    return (
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav
          aria-label="Main navigation"
          className="editorial-floating-nav mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-brand-gold/25 bg-[#f3ece0]/90 px-4 shadow-[0_18px_48px_-22px_rgba(10,22,40,0.28)] backdrop-blur-xl sm:px-6 lg:px-8"
          style={{ minHeight: 68 }}
          animate={{
            boxShadow: [
              "0 18px 48px -22px rgba(10, 22, 40, 0.28)",
              "0 22px 56px -18px rgba(201, 162, 39, 0.18)",
              "0 18px 48px -22px rgba(10, 22, 40, 0.28)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <EditorialWordmark onNavigate={closeMobile} />

          <ul className="hidden items-center justify-center gap-1 lg:flex xl:gap-2">
            {EDITORIAL_NAV_MENUS.map((menu) => (
              <NavMenuDropdown
                key={menu.label}
                label={menu.label}
                items={menu.items}
                navLinkClass={editorialLinkClass}
                onNavigate={closeMobile}
              />
            ))}
            <li>
              <NavLink
                href="/#contact"
                label="Contact"
                className={editorialLinkClass}
                onClick={closeMobile}
              />
            </li>
          </ul>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <a
              href={EDITORIAL_NAV_CTA.portalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-medium text-brand-muted transition hover:text-brand-navy md:inline"
            >
              {EDITORIAL_NAV_CTA.portalLabel}
            </a>
            <ThemeToggle className="hidden sm:inline-flex" />
            <Link
              href={EDITORIAL_NAV_CTA.scheduleHref}
              onClick={closeMobile}
              className="hidden min-h-[44px] items-center rounded-md bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-navy transition hover:bg-brand-gold-light sm:inline-flex sm:px-5 sm:text-sm"
            >
              {EDITORIAL_NAV_CTA.scheduleLabel}
            </Link>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-brand-navy lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              id="mobile-nav-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="editorial-floating-nav mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-brand-gold/20 bg-[#f3ece0]/95 shadow-lg backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-1 px-5 py-4">
                {EDITORIAL_NAV_MENUS.map((menu) => (
                  <NavMenuDropdown
                    key={menu.label}
                    label={menu.label}
                    items={menu.items}
                    navLinkClass={navLinkClass}
                    onNavigate={closeMobile}
                    variant="mobile"
                  />
                ))}
                <NavLink
                  href="/#contact"
                  label="Contact"
                  onClick={closeMobile}
                  className="flex min-h-[44px] items-center rounded-xl px-4 text-base font-medium text-brand-muted"
                />
              </div>
              <div className="flex flex-col gap-3 border-t border-brand-navy/8 px-5 py-4">
                <a
                  href={EDITORIAL_NAV_CTA.portalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-muted"
                >
                  {EDITORIAL_NAV_CTA.portalLabel}
                </a>
                <Link
                  href={EDITORIAL_NAV_CTA.scheduleHref}
                  onClick={closeMobile}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-gold text-sm font-semibold text-brand-navy"
                >
                  {EDITORIAL_NAV_CTA.scheduleLabel}
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.header>
    );
  }

  return (
    <motion.header
      className={cn("fixed inset-x-0 top-0 z-50", isFloating && "pointer-events-none")}
      initial={false}
      animate={{ y: showHeader ? 0 : "-100%" }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={cn(isFloating && "pointer-events-auto mx-auto max-w-6xl px-4 pt-3 sm:px-6")}>
        <nav
          aria-label="Main navigation"
          className={cn(
            "transition-all duration-300",
            isFloating
              ? "rounded-2xl border border-brand-navy/8 bg-white/92 text-brand-navy shadow-[0_12px_40px_-16px_rgba(10,22,40,0.18)] backdrop-blur-md"
              : useSolidNav
                ? "border-b border-brand-navy/5 bg-white/90 shadow-sm backdrop-blur-md text-brand-navy"
                : "bg-transparent text-white",
          )}
        >
          <div
            className={cn(
              "mx-auto flex items-center justify-between gap-4",
              isFloating ? "h-[64px] max-w-none px-4 sm:px-5" : "h-[72px] max-w-6xl px-4 sm:px-6",
            )}
          >
            <Link
              href="/"
              className="relative flex shrink-0 items-center"
              onClick={closeMobile}
              aria-label="9X Wealth Financial Services — Home"
            >
              {showNavLogo ? (
                <Image
                  src="/images/9x-wealth-logo.png"
                  alt="9X Wealth Financial Services"
                  width={200}
                  height={56}
                  priority
                  className={cn(
                    "h-10 w-auto sm:h-11 md:h-12 transition-all",
                    !useSolidNav && "brightness-0 invert",
                  )}
                />
              ) : (
                <span className="block h-10 w-[140px] sm:h-11 sm:w-[155px] md:h-12 md:w-[168px]" aria-hidden />
              )}
            </Link>

            <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
              {SITE_NAV_LINKS.map((link) =>
                link.label === "Services" ? (
                  <ServicesNavDropdown
                    key={link.href}
                    navLinkClass={navLinkClass}
                    onNavigate={closeMobile}
                  />
                ) : (
                  <li key={link.href}>
                    <NavLink href={link.href} label={link.label} className={navLinkClass} />
                  </li>
                ),
              )}
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
                  useSolidNav
                    ? "text-brand-teal ring-1 ring-brand-teal/30 hover:bg-brand-teal/5"
                    : "text-white ring-1 ring-white/25 hover:bg-white/10",
                )}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Link
                href={CTA.href}
                className="inline-flex min-h-[44px] items-center rounded-full bg-[#22A559] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d8f4c]"
              >
                {CTA.label}
              </Link>
            </div>

            <button
              type="button"
              className={cn(
                "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl transition lg:hidden",
                useSolidNav
                  ? "text-brand-navy ring-1 ring-brand-navy/10"
                  : "text-white ring-1 ring-white/15",
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className={cn(
                "fixed inset-0 z-40 bg-brand-navy/30 lg:hidden",
                isFloating ? "top-[88px]" : "top-[72px]",
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />
            <motion.div
              id="mobile-nav-panel"
              className={cn(
                "fixed inset-x-0 z-50 max-h-[calc(100vh-72px)] overflow-y-auto border-b border-brand-navy/10 bg-white px-4 py-4 shadow-lg lg:hidden",
                isFloating ? "top-[88px] rounded-b-2xl border-x" : "top-[72px]",
              )}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="space-y-1">
                {SITE_NAV_LINKS.map((link) =>
                  link.label === "Services" ? (
                    <li key={link.href}>
                      <ServicesNavDropdown
                        navLinkClass={navLinkClass}
                        onNavigate={closeMobile}
                        variant="mobile"
                      />
                    </li>
                  ) : (
                    <li key={link.href}>
                      <NavLink
                        href={link.href}
                        label={link.label}
                        onClick={closeMobile}
                        className="flex min-h-[44px] items-center rounded-xl px-4 text-base font-medium text-brand-navy hover:bg-brand-cream"
                      />
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-4 space-y-3 border-t border-brand-navy/10 pt-4">
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-full ring-1 ring-brand-teal/40 text-brand-teal"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Bijal
                </a>
                <Link
                  href={CTA.href}
                  onClick={closeMobile}
                  className="flex min-h-[44px] items-center justify-center rounded-full bg-[#22A559] text-base font-semibold text-white"
                >
                  {CTA.label}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
