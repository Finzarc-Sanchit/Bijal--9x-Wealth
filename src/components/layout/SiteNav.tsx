"use client";

import { useSiteIntro } from "@/components/layout/site-intro-context";
import { NAV, type NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
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
  item: Extract<NavItem, { kind: "menu"; }>
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
                      "hidden px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] sm:block",
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

  // Premium wide panel structure configuration (Editorial sizing metric mapping)
  const panelWidth = item.groups.length > 1 ? "w-[44rem]" : "w-[24rem]";

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
          className={cn(
            navLinkClass,
            "inline-flex items-center gap-1.5 transition-all duration-300",
            POINTER,
            menuIsActive && "font-semibold text-brand-teal"
          )}
          aria-expanded={isDesktopOpen}
          aria-haspopup="true"
          aria-controls={menuId}
          aria-current={menuIsActive ? "true" : undefined}
        >
          {item.label}
          <ChevronDown
            className={cn("h-3.5 w-3.5 opacity-60 transition-transform duration-300 ease-out", isDesktopOpen && "rotate-180 opacity-100 text-brand-teal")}
            aria-hidden
          />
        </button>

        {isDesktopOpen ? (
          /* Custom offset geometry alignment layer */
          <div className="absolute left-1/2 top-full z-[70] -translate-x-1/2 pt-[18px]">
            <motion.div
              id={menuId}
              role="menu"
              initial={{ opacity: 0, y: 10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "pointer-events-auto overflow-hidden rounded-2xl border border-brand-navy/5 bg-white/98 shadow-[0_32px_64px_-16px_rgba(10,22,40,0.14),0_12px_28px_-8px_rgba(10,22,40,0.05)] backdrop-blur-xl",
                panelWidth,
              )}
            >
              {/* Main contextual structural content blocks layout wrapper */}
              <div
                className={cn(
                  "grid gap-x-10 gap-y-6 p-6",
                  item.groups.length > 1 ? "grid-cols-2" : "grid-cols-1",
                )}
              >
                {item.groups.map((group) => (
                  <div key={group.heading} className="flex flex-col">
                    {/* High-end uppercase header typographic alignment style */}
                    <p className="mb-4 block border-b border-brand-navy/5 px-2 pb-2 font-poppins text-[0.68rem] font-bold uppercase tracking-[0.22em] text-brand-navy/35 select-none">
                      {group.heading}
                    </p>
                    <ul role="none" className="space-y-1">
                      {group.items.map((link) => {
                        const linkIsActive = isRouteActive(pathname, link.href);

                        return (
                          <li key={link.href + link.label} role="none">
                            <NavLink
                              href={link.href}
                              label={link.label}
                              onClick={onNavigate}
                              isActive={linkIsActive}
                              className={cn(
                                "group/item flex w-full items-center rounded-xl px-3.5 py-2.5 transition-all duration-300 relative overflow-hidden",
                                "font-inter text-[0.875rem] font-medium text-brand-navy/70 transition-colors duration-200 hover:text-brand-teal",
                                "hover:bg-brand-cream/40",
                                linkIsActive && "bg-brand-cream/50 font-semibold text-brand-teal",
                              )}
                            />
                          </li>
                        );
                      })}
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

const NAV_CTA_CLASS = cn(
  "inline-flex min-h-[44px] items-center rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-brand-gold-light",
  POINTER,
);

export function SiteNav() {
  const { showNavLogo } = useSiteIntro();
  const { navVisible } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navListLeaveRef = useRef<((event: React.MouseEvent<HTMLUListElement>) => void) | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const showHeader = navVisible || mobileOpen;

  const navLinkClass = cn(
    POINTER,
    "rounded-lg px-3 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-brand-cream hover:text-brand-navy",
  );

  const defaultMobileSubLink = cn(
    POINTER,
    "flex min-h-[44px] items-center rounded-lg px-4 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-cream hover:text-brand-teal",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 overflow-visible transition-transform duration-300 ease-out",
        showHeader ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="pointer-events-none mx-auto max-w-6xl overflow-visible px-4 pt-3 sm:px-6">
        <nav
          aria-label="Main navigation"
          className="pointer-events-auto overflow-visible rounded-2xl border border-brand-navy/8 bg-surface/92 text-brand-navy shadow-[0_12px_40px_-16px_rgba(10,22,40,0.18)] backdrop-blur-md transition-all duration-300"
        >
          <div className="mx-auto flex h-[64px] max-w-none items-center justify-between gap-4 overflow-visible px-4 sm:px-5">
            <Link
              href="/"
              className={cn("relative flex shrink-0 items-center", POINTER)}
              onClick={closeMobile}
              aria-label="9X Wealth Financial Services — Home"
            >
              {showNavLogo ? (
                <Image
                  src="/images/9x-wealth-logo-bg.png"
                  alt="9X Wealth Financial Services"
                  width={200}
                  height={56}
                  priority
                  className="h-10 w-auto transition-all sm:h-11 md:h-12"
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
              <Link href={CTA.href} className={NAV_CTA_CLASS}>
                {CTA.label}
              </Link>
            </div>

            <button
              type="button"
              className={cn(
                "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-brand-navy ring-1 ring-brand-navy/10 transition lg:hidden",
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
        </nav>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className={cn(
                "pointer-events-auto fixed inset-x-0 top-[88px] bottom-0 z-[60] bg-brand-navy/30 lg:hidden",
                POINTER,
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />
            <motion.div
              id="mobile-nav-panel"
              className="pointer-events-auto fixed inset-x-4 top-[88px] z-[70] max-h-[calc(100dvh-88px)] overflow-y-auto rounded-b-2xl border border-brand-navy/10 bg-surface px-4 py-4 shadow-lg sm:inset-x-6 lg:hidden"
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
                  mobileTopLinkClass="text-brand-navy hover:bg-brand-cream hover:text-brand-teal"
                />
              </div>
              <div className="mt-4 border-t border-brand-navy/10 pt-4">
                <Link href={CTA.href} onClick={closeMobile} className={cn(NAV_CTA_CLASS, "w-full justify-center")}>
                  {CTA.label}
                </Link>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}