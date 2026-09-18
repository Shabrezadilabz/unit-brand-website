"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Section";

const TOOLS = [
  {
    id: "pos",
    label: "Floor POS",
    color: "bg-lilac",
    title: "Get a complete picture of every table",
    points: [
      "Live floor map with soft lock",
      "Consent captured at close bill",
      "Split, merge, transfer without chaos",
    ],
    image: IMAGES.diningWarm,
  },
  {
    id: "kds",
    label: "Kitchen KDS",
    color: "bg-mint",
    title: "The pass that stays readable at peak",
    points: ["New → Cooking → Ready lanes", "Eighty-six without shouting", "Aggregator punch notes"],
    image: IMAGES.kitchen,
  },
  {
    id: "wa",
    label: "WhatsApp loop",
    color: "bg-peach",
    title: "The loop that starts at the bill",
    points: ["Branded GST receipt image", "UPI / cash / card pay", "Review → loyalty → redeem"],
    image: IMAGES.filterCoffee,
  },
  {
    id: "crm",
    label: "Guest CRM",
    color: "bg-butter",
    title: "Own your audience, not the aggregators",
    points: ["RFM-lite personas", "CSV / Petpooja sync", "UNIT-native guest memory"],
    image: IMAGES.guest2,
  },
  {
    id: "camp",
    label: "Campaigns",
    color: "bg-leaf-soft",
    title: "South festivals without spam",
    points: ["Win-back · birthday · occasions", "UNIT-run packs", "Nearby poster — 1 / week"],
    image: IMAGES.bananaLeaf,
  },
  {
    id: "ai",
    label: "AI insights",
    color: "bg-lilac",
    title: "Restaurant-only WhatsApp-style chat",
    points: ["Plan token budgets", "Poster generate caps", "No mass blast console"],
    image: IMAGES.spices,
  },
] as const;

export function ToolsShowcase() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tool = TOOLS[active];

  return (
    <section className="reelo-navy py-16 text-white sm:py-24">
      <Container>
        <h2 className="display text-center text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold">
          All the tools you need to grow faster
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {TOOLS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "rounded-2xl border px-3 py-4 text-left text-sm font-semibold transition",
                i === active
                  ? "border-transparent bg-leaf text-white shadow-[0_16px_40px_-12px_rgba(0,163,160,0.6)]"
                  : "border-white/15 bg-white/5 text-white/75 hover:bg-white/10",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tool.id}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "mt-8 grid items-center gap-8 overflow-hidden rounded-[32px] border border-white/10 p-6 sm:p-10 lg:grid-cols-2",
              tool.color,
            )}
          >
            <div className="text-ink">
              <h3 className="display text-2xl font-extrabold sm:text-3xl">{tool.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {tool.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-ink-soft sm:text-base">
                    <span className="text-leaf">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonLink href="/features">Learn more →</ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-[var(--shadow)]">
              <Image src={tool.image} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
