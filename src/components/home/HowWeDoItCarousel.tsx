"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/cn";

const STEPS = [
  {
    n: "1",
    title: "CREATE TOUCHPOINTS",
    body: "Engage guests at the bill — WhatsApp GST receipt, table QR, and floor POS capture consent where settlement already happens.",
    badge: "WhatsApp",
    badgeColor: "bg-wa",
    screen: IMAGES.latte,
    screenLabel: "Spice Garden",
    screenCta: "PAY ₹1,637",
  },
  {
    n: "2",
    title: "BUILD GUEST MEMORY",
    body: "RFM personas, visit history, and loyalty stars — your data stays in UNIT, not a forever-free bolt-on CRM.",
    badge: "Guest CRM",
    badgeColor: "bg-leaf",
    screen: IMAGES.guest,
    screenLabel: "Arjun · VIP",
    screenCta: "+12 STARS",
  },
  {
    n: "3",
    title: "LAUNCH THE RIGHT CAMPAIGNS",
    body: "Ugadi, Onam, Pongal, win-back — UNIT-supervised packs so South density never becomes spam density.",
    badge: "Instagram",
    badgeColor: "bg-gradient-to-br from-purple-500 to-ember",
    screen: IMAGES.dosa,
    screenLabel: "Onam feast pack",
    screenCta: "JOIN NOW",
  },
] as const;

export function HowWeDoItCarousel() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const step = STEPS[active];

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 4500);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {STEPS.map((s, i) => (
          <button
            key={s.n}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition",
              i === active
                ? "bg-ember text-white shadow-[0_12px_30px_-10px_rgba(240,124,51,0.7)]"
                : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white",
            )}
          >
            Step {s.n}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.n}
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -30 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <p className="display text-[clamp(4rem,12vw,7rem)] font-thin leading-none text-white/25">
              {step.n}
            </p>
            <h3 className="display mt-2 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
              {step.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              {step.body}
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-[320px] flex-col items-center">
            <div className={cn("mb-4 rounded-xl px-3 py-1.5 text-xs font-bold text-white", step.badgeColor)}>
              {step.badge}
            </div>
            <div className="float-y relative w-[240px] rounded-[2rem] border-[6px] border-[#222] bg-black p-2 shadow-[var(--shadow-glow)] sm:w-[260px]">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#111]">
                <div className="relative aspect-[9/16]">
                  <Image src={step.screen} alt="" fill className="object-cover" sizes="260px" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                    <p className="text-sm font-bold text-white">{step.screenLabel}</p>
                    <button
                      type="button"
                      className="mt-2 w-full rounded-full bg-ember py-2 text-[11px] font-bold text-white"
                    >
                      {step.screenCta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center gap-2">
        {STEPS.map((s, i) => (
          <button
            key={s.n}
            type="button"
            aria-label={`Go to step ${s.n}`}
            onClick={() => setActive(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === active ? "w-8 bg-ember" : "w-3 bg-white/25",
            )}
          />
        ))}
      </div>
    </div>
  );
}
