"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/cn";

const TABS = [
  {
    id: "crm",
    label: "Floor POS",
    title: "Run every table without chaos",
    body: "Live floor map, soft lock, close bill with name + phone + consent — built for South dine-in density.",
    points: ["Table map & soft lock", "Split / transfer / merge", "Consent at settlement"],
  },
  {
    id: "loyalty",
    label: "Kitchen KDS",
    title: "The pass that stays readable",
    body: "New → Cooking → Ready lanes. Eighty-six without shouting. Aggregator tickets stay separate from dine-in WA bills.",
    points: ["Bump bar ready", "Eighty-six alerts", "Platform punch notes"],
  },
  {
    id: "campaigns",
    label: "WhatsApp loop",
    title: "The loop that starts at the bill",
    body: "Branded GST receipt on WhatsApp, timed review invite, loyalty redeem in the waiter app — not a bolt-on CRM.",
    points: ["GST bill + UPI", "Review → Google path", "Stars redeem on floor"],
  },
  {
    id: "wa",
    label: "Growth packs",
    title: "Campaigns without spam",
    body: "Win-back, birthday, festivals — UNIT-run packs. You keep AI insights and a weekly nearby poster, not a blast console.",
    points: ["South festival packs", "RFM / ROI lite", "Anti-spam by design"],
  },
] as const;

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tab = TABS[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "min-w-[140px] rounded-2xl px-4 py-3 text-left text-sm font-semibold transition lg:min-w-0",
              i === active
                ? "bg-leaf text-white shadow-[var(--shadow)]"
                : "bg-mist text-ink-soft hover:bg-mist-deep hover:text-ink",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-[color:var(--line)] bg-mist p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduce ? undefined : { opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">{tab.label}</p>
            <h3 className="display mt-3 text-3xl font-bold text-ink sm:text-4xl">{tab.title}</h3>
            <p className="mt-4 max-w-xl text-base text-ink-soft sm:text-lg">{tab.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {tab.points.map((p) => (
                <li
                  key={p}
                  className="rounded-2xl border border-[color:var(--line)] bg-paper px-4 py-3 text-sm font-medium text-ink shadow-[var(--shadow-soft)]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
