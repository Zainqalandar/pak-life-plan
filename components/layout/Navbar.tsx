"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { StateLifeLogo } from "@/components/layout/StateLifeLogo";
import { CtaButton } from "@/components/shared/CtaButton";
import { additionalPlanNavItems, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

function subscribeScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrolledSnapshot() {
  return window.scrollY > 8;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    getScrolledSnapshot,
    () => false
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-border/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white"
      )}
    >
      <div className="h-0.5 w-full bg-gold" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <StateLifeLogo className="min-w-0" />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors",
                  active ? "text-forest" : "text-muted-gray hover:text-forest"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
          <div className="relative">
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                plansOpen || additionalPlanNavItems.some((item) => pathname.startsWith(item.href))
                  ? "text-forest"
                  : "text-muted-gray hover:text-forest"
              )}
              aria-expanded={plansOpen}
              onClick={() => setPlansOpen((value) => !value)}
            >
              More Plans
              <ChevronDown className={cn("size-4 transition-transform", plansOpen && "rotate-180")} />
            </button>
            {plansOpen ? (
              <div className="absolute top-full right-0 mt-2 w-64 border border-border bg-white p-2 shadow-lg">
                {additionalPlanNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-ivory hover:text-forest"
                    onClick={() => setPlansOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>
        <div className="hidden lg:block">
          <CtaButton href="/contact" className="min-h-11 px-5">
            Get in Touch
          </CtaButton>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-border text-forest lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-white px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "min-h-12 px-3 py-3 text-base font-medium",
                    active ? "bg-ivory text-forest" : "text-charcoal"
                  )}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 border-t border-border pt-3">
              <p className="px-3 pb-2 text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                More Plans
              </p>
              {additionalPlanNavItems.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block min-h-12 px-3 py-3 text-base font-medium",
                      active ? "bg-ivory text-forest" : "text-charcoal"
                    )}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
          <div className="mt-4" onClick={() => setOpen(false)}>
            <CtaButton href="/contact" className="w-full">
              Get in Touch
            </CtaButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
