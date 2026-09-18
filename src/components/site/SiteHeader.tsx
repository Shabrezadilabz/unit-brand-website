"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV_ALL, NAV_PRIMARY } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-[color:var(--line)] bg-[color:rgba(238,243,240,0.92)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2.5" aria-label="UNIT home">
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-leaf text-[11px] font-bold text-white">
              <span className="relative z-10">U</span>
              {!reduce && (
                <motion.span
                  className="absolute inset-0 bg-brass/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{
                    maskImage:
                      "conic-gradient(from 0deg, transparent 0 70%, black 70% 100%)",
                    WebkitMaskImage:
                      "conic-gradient(from 0deg, transparent 0 70%, black 70% 100%)",
                  }}
                />
              )}
            </span>
            <span className="display text-[1.55rem] font-bold tracking-[-0.06em] text-ink">
              UNIT
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {NAV_PRIMARY.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition",
                    active ? "text-leaf" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-brass"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="/south"
              className="text-sm font-medium text-ink-soft transition hover:text-ink"
            >
              South-first
            </Link>
            <ButtonLink href="/book-demo" className="!py-2.5 !text-sm">
              Book a demo
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <ButtonLink href="/book-demo" className="!hidden !py-2.5 !text-sm sm:!inline-flex">
              Book a demo
            </ButtonLink>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-xl border border-[color:var(--line-strong)] bg-paper"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <div className="relative h-3.5 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[2px] w-full bg-ink transition",
                    open && "top-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[6px] h-[2px] w-full bg-ink transition",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[12px] h-[2px] w-full bg-ink transition",
                    open && "top-1.5 -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-[color:rgba(18,26,23,0.45)] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="absolute inset-x-0 top-[68px] bottom-0 overflow-y-auto bg-mist px-4 pb-10 pt-4"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile"
            >
              <ul className="space-y-1">
                {NAV_ALL.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex min-h-12 items-center rounded-xl px-4 text-lg font-semibold",
                        pathname === item.href
                          ? "bg-leaf text-white"
                          : "bg-paper text-ink hover:bg-mist-deep",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="sticky bottom-0 mt-6 border-t border-[color:var(--line)] bg-mist pt-4">
                <ButtonLink href="/book-demo" className="w-full">
                  Book a demo
                </ButtonLink>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
