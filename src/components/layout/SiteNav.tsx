"use client";

import { EditorialWordmark } from "@/components/brand/EditorialWordmark";
import { useSiteIntro } from "@/components/layout/SiteIntroLayout";
import { CONTACT, EDITORIAL_NAV_CTA, NAV, type NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, MessageCircle, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const CTA = {
  label: "Book Consultation",
  href: "/#consultation-form",
} as const;

const POINTER = "cursor-pointer";

function isRouteActive(pathname: string, href: string): boolean {
  if (href.startsWith("http") || href.includes("#")) return false;
  if (pathname === href) return true;
  return href !== "/" && pathname.startsWith(`${href}/`);
}

function isNavMenuActive(
  pathname: string,
  item: Extract<NavItem, { kind: "menu" }>
): boolean {
  if (isRouteActive(pathname, item.hub.href)) return true;

  return item.groups.some((group) =>
    group.items.some((link) => isRouteActive(pathname, link.href))
  );
}

function NavLink({
  href,
  label,
  className,
  onClick,
  onMouseEnter,
  isActive = false,
}: {
  href: string;
  label: string;
  className: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  isActive?: boolean;
}) {
  const isExternal = href.startsWith("http");
  const isHashOnly = href.startsWith("/#") || href.startsWith("#");
  const classes = cn(className, POINTER, isActive && "font-semibold text-brand-teal");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        rel="noopener noreferrer"
        target="_blank"
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </a>
    );
  }

  if (isHashOnly) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      prefetch={false}
      className={classes}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function NavMenu({
  item,
  navLinkClass,
  onNavigate,
  variant = "desktop",
  mobileSubLinkClass,
  mobileHubClass,
  mobileGroupHeadingClass,
  openMenu,
  onMenuEnter,
  onMenuLeave,
  pathname,
}: {
  item: Extract<NavItem, { kind: "menu"; }>;
  navLinkClass: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
  mobileSubLinkClass?: string;
  mobileHubClass?: string;
  mobileGroupHeadingClass?: string;
  openMenu?: string | null;
  onMenuEnter?: (label: string) => void;
  onMenuLeave?: (event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => void;
  pathname: string;
}) {
  const menuId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktopOpen = openMenu === item.label;
  const menuIsActive = isNavMenuActive(pathname, item);

  const handleOpen = useCallback(() => {
    onMenuEnter?.(item.label);
  }, [item.label, onMenuEnter]);

  const handleLeave = useCallback(
    (event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
      onMenuLeave?.(event);
    },
    [onMenuLeave],
  );

  if (variant === "mobile") {
    const subLinkClass =
      mobileSubLinkClass ??
      cn(POINTER, "flex min-h-[44px] items-center rounded-lg px-4 py-2 text-sm font-medium text-brand-navy hover:bg-brand-cream");
    const hubClass = mobileHubClass ?? "font-semibold text-brand-teal";
    const groupHeadingClass = mobileGroupHeadingClass ?? "text-brand-muted";

    return (
      <div className="rounded-xl">
        <button
          type="button"
          className={cn(
            "flex min-h-[44px] w-full items-center justify-between rounded-xl px-4 text-base font-medium",
            navLinkClass,
            POINTER,
            menuIsActive && "font-semibold text-brand-teal",
          )}
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          aria-current={menuIsActive ? "true" : undefined}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {item.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", mobileOpen && "rotate-180")}
            aria-hidden
          />
        </button>

        <AnimatePresence initial={false}>
          {mobileOpen ? (
            <motion.div
              id={menuId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden pl-2"
            >
              <NavLink
                href={item.hub.href}
                label={item.hub.label}
                onClick={onNavigate}
                isActive={isRouteActive(pathname, item.hub.href)}
                className={cn("flex min-h-[44px] items-center rounded-lg px-4 text-sm", hubClass)}
              />

              {item.groups.map((group) => (
                <div key={group.heading} className="mt-2">
                  <p
                    className={cn(
                      "px-4 py-1 text-xs font-bold uppercase tracking-[0.16em]",
                      groupHeadingClass,
                      POINTER,
                    )}
                  >
                    {group.heading}
                  </p>
                  <ul>
                    {group.items.map((link) => (
                      <li key={link.href + link.label}>
                        <NavLink
                          href={link.href}
                          label={link.label}
                          onClick={onNavigate}
                          isActive={isRouteActive(pathname, link.href)}
                          className={subLinkClass}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    );
  }

  const panelWidth =
    item.groups.length > 1
      ? "w-[min(28rem,calc(100vw-2rem))]"
      : "w-[min(18rem,calc(100vw-2rem))]";

  return (
    <li>
      <div
        data-nav-menu-root=""
        className="relative"
        onMouseEnter={handleOpen}
        onMouseLeave={handleLeave}
        onFocus={handleOpen}
        onBlur={(event) => {
          const related = event.relatedTarget;
          if (related instanceof Element && related.closest("[data-nav-menu-root]")) return;
          onMenuLeave?.(event);
        }}
      >
        <button
          type="button"
          className={cn(navLinkClass, "inline-flex items-center gap-1", POINTER, menuIsActive && "font-semibold text-brand-teal")}
          aria-expanded={isDesktopOpen}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-current={menuIsActive ? "true" : undefined}
        >
          {item.label}
          <ChevronDown
            className={cn("h-3.5 w-3.5 opacity-70 transition-transform", isDesktopOpen && "rotate-180")}
            aria-hidden
          />
        </button>

        {isDesktopOpen ? (
          <div className="absolute left-1/2 top-full z-[70] -translate-x-1/2 pt-2">
            <motion.div
              id={menuId}
              role="menu"
              initial={{ opacity: 0, y: 4, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "pointer-events-auto overflow-hidden rounded-2xl border border-brand-navy/8 bg-white shadow-[0_20px_48px_-18px_rgba(10,22,40,0.28)]",
                panelWidth,
              )}
            >
              {/* <div className="border-b border-brand-navy/6 bg-brand-cream/60 px-4 py-3">
              <NavLink
                href={item.hub.href}
                label={item.hub.label}
                onClick={onNavigate}
                className="text-sm font-semibold text-brand-teal transition-colors hover:text-brand-navy"
              />
            </div> */}

              <div
                className={cn(
                  "grid gap-4 p-3",
                  item.groups.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
                )}
              >
                {item.groups.map((group) => (
                  <div key={group.heading}>
                    <p
                      className={cn(
                        "px-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-muted",
                        POINTER,
                      )}
                    >
                      {group.heading}
                    </p>
                    <ul className="mt-1.5" role="none">
                      {group.items.map((link) => (
                        <li key={link.href + link.label} role="none">
                          <NavLink
                            href={link.href}
                            label={link.label}
                            onClick={onNavigate}
                            isActive={isRouteActive(pathname, link.href)}
                            className="flex min-h-[40px] items-center rounded-lg px-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-cream hover:text-brand-teal"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
    </li>
  );
}

function NavItems({
  navLinkClass,
  onNavigate,
  variant = "desktop",
  mobileSubLinkClass,
  mobileHubClass,
  mobileGroupHeadingClass,
  mobileTopLinkClass,
  listLeaveRef,
}: {
  navLinkClass: string;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
  mobileSubLinkClass?: string;
  mobileHubClass?: string;
  mobileGroupHeadingClass?: string;
  mobileTopLinkClass?: string;
  listLeaveRef?: React.MutableRefObject<((event: React.MouseEvent<HTMLUListElement>) => void) | null>;
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const pathname = usePathname();

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current !== undefined) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = undefined;
    }
  }, []);

  const handleMenuEnter = useCallback(
    (label: string) => {
      clearCloseTimer();
      setOpenMenu(label);
    },
    [clearCloseTimer],
  );

  const handleMenuLeave = useCallback(
    (event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
      const related = event.relatedTarget;
      if (related instanceof Element && related.closest("[data-nav-menu-root]")) return;

      clearCloseTimer();
      closeTimer.current = window.setTimeout(() => setOpenMenu(null), 150);
    },
    [clearCloseTimer],
  );

  const handleNavListLeave = useCallback(
    (event: React.MouseEvent<HTMLUListElement>) => {
      const related = event.relatedTarget;
      if (related instanceof Node && event.currentTarget.contains(related)) return;

      clearCloseTimer();
      setOpenMenu(null);
    },
    [clearCloseTimer],
  );

  useEffect(() => {
    if (variant !== "desktop" || !listLeaveRef) return;
    listLeaveRef.current = handleNavListLeave;
    return () => {
      listLeaveRef.current = null;
    };
  }, [handleNavListLeave, listLeaveRef, variant]);

  const resolvedMobileSubLinkClass =
    mobileSubLinkClass ??
    cn(POINTER, "flex min-h-[44px] items-center rounded-lg px-4 py-2 text-sm font-medium text-brand-navy hover:bg-brand-cream");
  const resolvedMobileHubClass = mobileHubClass ?? "font-semibold text-brand-teal";
  const resolvedMobileGroupHeadingClass = mobileGroupHeadingClass ?? "text-brand-muted";

  return (
    <>
      {NAV.map((entry) => {
        if (entry.kind === "link") {
          if (variant === "mobile") {
            return (
              <NavLink
                key={entry.href}
                href={entry.href}
                label={entry.label}
                onClick={onNavigate}
                className={cn(
                  "flex min-h-[44px] items-center rounded-xl px-4 text-base font-medium",
                  mobileTopLinkClass ?? navLinkClass,
                )}
              />
            );
          }

          return (
            <li key={entry.href}>
              <NavLink
                href={entry.href}
                label={entry.label}
                className={navLinkClass}
                onClick={onNavigate}
                onMouseEnter={() => {
                  clearCloseTimer();
                  setOpenMenu(null);
                }}
              />
            </li>
          );
        }

        if (variant === "mobile") {
          return (
            <NavMenu
              key={entry.label}
              item={entry}
              navLinkClass={navLinkClass}
              onNavigate={onNavigate}
              variant="mobile"
              pathname={pathname}
              mobileSubLinkClass={resolvedMobileSubLinkClass}
              mobileHubClass={resolvedMobileHubClass}
              mobileGroupHeadingClass={resolvedMobileGroupHeadingClass}
            />
          );
        }

        return (
          <NavMenu
            key={entry.label}
            item={entry}
            navLinkClass={navLinkClass}
            onNavigate={onNavigate}
            variant="desktop"
            pathname={pathname}
            openMenu={openMenu}
            onMenuEnter={handleMenuEnter}
            onMenuLeave={handleMenuLeave}
          />
        );
      })}
    </>
  );
}

function ThemeToggle({ className }: { className?: string; }) {
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
        POINTER,
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
  variant = "auto",
  pinVisible = false,
}: {
  variant?: "auto" | "default" | "floating" | "editorial";
  pinVisible?: boolean;
}) {
  const { showNavLogo } = useSiteIntro();
  const { scrolled, navVisible } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navListLeaveRef = useRef<((event: React.MouseEvent<HTMLUListElement>) => void) | null>(null);
  const pathname = usePathname();
  const resolvedVariant =
    variant === "auto" ? (pathname === "/" ? "editorial" : "floating") : variant;
  const isFloating = resolvedVariant === "floating";
  const isEditorial = resolvedVariant === "editorial";

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const useSolidNav = isFloating || isEditorial || scrolled;

  const navLinkClass = cn(
    POINTER,
    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    useSolidNav
      ? "text-brand-navy/80 hover:bg-brand-cream hover:text-brand-navy"
      : "text-white/80 hover:bg-white/10 hover:text-white",
  );

  const showHeader = pinVisible || navVisible || mobileOpen || isEditorial;

  if (isEditorial) {
    const editorialLinkClass = cn(
      POINTER,
      "rounded-lg px-3 py-2 text-sm font-medium text-brand-muted transition-colors duration-300 hover:bg-brand-gold/10 hover:text-brand-navy",
    );

    const editorialMobileSubLink = cn(
      POINTER,
      "flex min-h-[44px] items-center rounded-lg px-4 py-2 text-sm font-medium text-brand-muted transition-colors hover:bg-brand-gold/10 hover:text-brand-navy",
    );

    return (
      <motion.header
        className="fixed inset-x-0 top-0 z-50 overflow-visible px-4 pt-4 sm:px-6"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.nav
          aria-label="Main navigation"
          className="editorial-floating-nav mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 overflow-visible rounded-2xl border border-brand-gold/25 bg-[#f3ece0]/90 px-4 shadow-[0_18px_48px_-22px_rgba(10,22,40,0.28)] backdrop-blur-xl sm:px-6 lg:px-8"
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

          <ul
            className="hidden items-center justify-center gap-1 overflow-visible lg:flex xl:gap-2"
            onMouseLeave={(event) => navListLeaveRef.current?.(event)}
          >
            <NavItems
              navLinkClass={editorialLinkClass}
              onNavigate={closeMobile}
              listLeaveRef={navListLeaveRef}
            />
          </ul>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <a
              href={EDITORIAL_NAV_CTA.portalHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden text-sm font-medium text-brand-muted transition hover:text-brand-navy md:inline",
                POINTER,
              )}
            >
              {EDITORIAL_NAV_CTA.portalLabel}
            </a>
            <ThemeToggle className="hidden sm:inline-flex" />
            <Link
              href={EDITORIAL_NAV_CTA.scheduleHref}
              onClick={closeMobile}
              className={cn(
                "hidden min-h-[44px] items-center rounded-md bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-navy transition hover:bg-brand-gold-light sm:inline-flex sm:px-5 sm:text-sm",
                POINTER,
              )}
            >
              {EDITORIAL_NAV_CTA.scheduleLabel}
            </Link>
            <button
              type="button"
              className={cn(
                "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-brand-navy lg:hidden",
                POINTER,
              )}
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
                <NavItems
                  navLinkClass={editorialLinkClass}
                  onNavigate={closeMobile}
                  variant="mobile"
                  mobileSubLinkClass={editorialMobileSubLink}
                  mobileHubClass="font-semibold text-brand-teal"
                  mobileGroupHeadingClass="text-brand-muted"
                  mobileTopLinkClass="text-brand-muted"
                />
              </div>
              <div className="flex flex-col gap-3 border-t border-brand-navy/8 px-5 py-4">
                <a
                  href={EDITORIAL_NAV_CTA.portalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("text-sm font-medium text-brand-muted transition hover:text-brand-navy", POINTER)}
                >
                  {EDITORIAL_NAV_CTA.portalLabel}
                </a>
                <Link
                  href={EDITORIAL_NAV_CTA.scheduleHref}
                  onClick={closeMobile}
                  className={cn(
                    "inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand-gold text-sm font-semibold text-brand-navy transition hover:bg-brand-gold-light",
                    POINTER,
                  )}
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

  const defaultMobileSubLink = cn(
    POINTER,
    "flex min-h-[44px] items-center rounded-lg px-4 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-cream",
  );

  return (
    <motion.header
      className={cn("fixed inset-x-0 top-0 z-50 overflow-visible", isFloating && "pointer-events-none")}
      initial={false}
      animate={{ y: showHeader ? 0 : "-100%" }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={cn(isFloating && "pointer-events-auto mx-auto max-w-6xl overflow-visible px-4 pt-3 sm:px-6")}>
        <nav
          aria-label="Main navigation"
          className={cn(
            "overflow-visible transition-all duration-300",
            isFloating
              ? "rounded-2xl border border-brand-navy/8 bg-white/92 text-brand-navy shadow-[0_12px_40px_-16px_rgba(10,22,40,0.18)] backdrop-blur-md"
              : useSolidNav
                ? "border-b border-brand-navy/5 bg-white/90 shadow-sm backdrop-blur-md text-brand-navy"
                : "bg-transparent text-white",
          )}
        >
          <div
            className={cn(
              "mx-auto flex items-center justify-between gap-4 overflow-visible",
              isFloating ? "h-[64px] max-w-none px-4 sm:px-5" : "h-[72px] max-w-6xl px-4 sm:px-6",
            )}
          >
            <Link
              href="/"
              className={cn("relative flex shrink-0 items-center", POINTER)}
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

            <ul
              className="hidden items-center gap-0.5 overflow-visible lg:flex xl:gap-1"
              onMouseLeave={(event) => navListLeaveRef.current?.(event)}
            >
              <NavItems
                navLinkClass={navLinkClass}
                onNavigate={closeMobile}
                listLeaveRef={navListLeaveRef}
              />
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
                  POINTER,
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
                className={cn(
                  "inline-flex min-h-[44px] items-center rounded-full bg-[#22A559] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d8f4c]",
                  POINTER,
                )}
              >
                {CTA.label}
              </Link>
            </div>

            <button
              type="button"
              className={cn(
                "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl transition lg:hidden",
                POINTER,
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
                POINTER,
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
              <div className="space-y-1">
                <NavItems
                  navLinkClass={navLinkClass}
                  onNavigate={closeMobile}
                  variant="mobile"
                  mobileSubLinkClass={defaultMobileSubLink}
                  mobileHubClass="font-semibold text-brand-teal"
                  mobileGroupHeadingClass="text-brand-muted"
                  mobileTopLinkClass="text-brand-navy hover:bg-brand-cream"
                />
              </div>
              <div className="mt-4 space-y-3 border-t border-brand-navy/10 pt-4">
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className={cn(
                    "flex min-h-[44px] items-center justify-center gap-2 rounded-full ring-1 ring-brand-teal/40 text-brand-teal transition hover:bg-brand-teal/5",
                    POINTER,
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Bijal
                </a>
                <Link
                  href={CTA.href}
                  onClick={closeMobile}
                  className={cn(
                    "flex min-h-[44px] items-center justify-center rounded-full bg-[#22A559] text-base font-semibold text-white transition hover:bg-[#1d8f4c]",
                    POINTER,
                  )}
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
