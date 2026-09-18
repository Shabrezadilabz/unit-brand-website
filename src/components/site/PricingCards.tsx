"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PLANS } from "@/lib/content";
import { INR } from "@/lib/images";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";

export function PricingCards({ highlight = "growth" }: { highlight?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {PLANS.map((plan, i) => {
        const featured = plan.id === highlight || plan.popular;
        return (
          <motion.article
            key={plan.id}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
            whileHover={reduce ? undefined : { y: -8 }}
            className={cn(
              "relative flex flex-col rounded-[28px] border p-6 sm:p-7",
              featured
                ? "border-leaf bg-leaf text-white shadow-[var(--shadow)]"
                : "border-[color:var(--line)] bg-white shadow-[var(--shadow-soft)]",
            )}
          >
            {featured && (
              <span className="mb-4 inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                Most popular
              </span>
            )}
            <h3 className="display text-2xl font-bold">{plan.name}</h3>
            <p className={cn("mt-2 text-sm", featured ? "text-white/75" : "text-ink-soft")}>
              {plan.blurb}
            </p>
            <p className="mt-6 flex items-end gap-1">
              <span className="display text-4xl font-extrabold tracking-tight">
                {INR}{plan.price.toLocaleString("en-IN")}
              </span>
              <span className={cn("pb-1 text-sm", featured ? "text-white/60" : "text-ink-soft")}>
                / outlet / month
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {plan.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-snug">
                  <span className={featured ? "text-leaf-soft" : "text-leaf"}>✓</span>
                  <span className={featured ? "text-white/90" : "text-ink-soft"}>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink
                href="/book-demo"
                variant={featured ? "secondary" : "primary"}
                className={cn("w-full", featured && "!border-transparent !bg-white !text-leaf")}
              >
                {plan.cta}
              </ButtonLink>
            </div>
            <Link
              href="/add-ons"
              className={cn(
                "mt-3 text-center text-xs underline-offset-4 hover:underline",
                featured ? "text-white/60" : "text-ink-soft",
              )}
            >
              See optional add-ons
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
