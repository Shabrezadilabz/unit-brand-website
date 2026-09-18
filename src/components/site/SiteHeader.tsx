"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV_ALL, NAV_PRIMARY } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrandLogo } from "@/components/site/BrandLogo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const darkHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
          darkHero
            ? "bg-transparent"
            : scrolled || open
              ? "border-b border-[color:var(--line)] bg-white/95 shadow-[0_8px_30px_-18px_rgba(11,18,32,0.25)] backdrop-blur-xl"
              : "bg-white/80 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <BrandLogo className={cn(darkHero && "[&_span]:text-white")} />

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {NAV_PRIMARY.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[13px] font-semibold transition",
                    darkHero
                      ? active
                        ? "bg-white/15 text-peach-deep"
                        : "text-white/70 hover:text-white"
                      : active
                        ? "bg-leaf-soft text-leaf-deep"
                        : "text-ink-soft hover:bg-mist hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="/south"
              className={cn(
                "text-sm font-semibold",
                darkHero ? "text-peach-deep hover:text-white" : "text-ink-soft hover:text-ink",
              )}
            >
              South-first
            </Link>
            <ButtonLink
              href="/book-demo"
              className={cn(
                "!rounded-full !px-5 !py-2.5 !text-sm",
                darkHero && "!bg-ember hover:!brightness-110",
              )}
            >
              Request demo
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <ButtonLink
              href="/book-demo"
              className={cn(
                "!hidden !rounded-full !px-4 !py-2.5 !text-sm sm:!inline-flex",
                darkHero && "!bg-ember",
              )}
            >
              Demo
            </ButtonLink>
            <button
              type="button"
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full border",
                darkHero
                  ? "border-white/25 bg-white/10 text-white"
                  : "border-[color:var(--line-strong)] bg-paper text-ink",
              )}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="relative h-3.5 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[2px] w-full rounded transition",
                    darkHero ? "bg-white" : "bg-ink",
                    open && "top-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[6px] h-[2px] w-full rounded transition",
                    darkHero ? "bg-white" : "bg-ink",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[12px] h-[2px] w-full rounded transition",
                    darkHero ? "bg-white" : "bg-ink",
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
            className="fixed inset-0 z-40 bg-ink/40 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="absolute inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-white px-4 pb-10 pt-4"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile"
            >
              <ul className="space-y-1.5">
                {NAV_ALL.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex min-h-12 items-center rounded-2xl px-4 text-base font-semibold",
                        pathname === item.href
                          ? "bg-leaf text-white"
                          : "bg-mist text-ink hover:bg-mist-deep",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonLink href="/book-demo" className="w-full !rounded-full !bg-ember">
                  Request demo
                </ButtonLink>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
