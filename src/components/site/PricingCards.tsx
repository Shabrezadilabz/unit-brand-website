"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PLANS } from "@/lib/content";
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
            whileHover={reduce ? undefined : { y: -6 }}
            className={cn(
              "relative flex flex-col rounded-2xl border p-6 sm:p-7",
              featured
                ? "border-leaf bg-ink text-white shadow-[var(--shadow)]"
                : "border-[color:var(--line)] bg-paper",
            )}
          >
            {featured && (
              <span className="mb-4 inline-flex w-fit rounded-full bg-brass px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                Most popular
              </span>
            )}
            <h3 className="display text-2xl font-bold">{plan.name}</h3>
            <p className={cn("mt-2 text-sm", featured ? "text-white/65" : "text-ink-soft")}>
              {plan.blurb}
            </p>
            <p className="mt-6 flex items-end gap-1">
              <span className="display text-4xl font-bold tracking-tight">
                ₹{plan.price.toLocaleString("en-IN")}
              </span>
              <span className={cn("pb-1 text-sm", featured ? "text-white/55" : "text-ink-soft")}>
                / outlet / month
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {plan.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-snug">
                  <span className={featured ? "text-brass" : "text-leaf"}>✓</span>
                  <span className={featured ? "text-white/85" : "text-ink-soft"}>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink
                href="/book-demo"
                variant={featured ? "brass" : "primary"}
                className="w-full"
              >
                {plan.cta}
              </ButtonLink>
            </div>
            <Link
              href="/add-ons"
              className={cn(
                "mt-3 text-center text-xs underline-offset-4 hover:underline",
                featured ? "text-white/55" : "text-ink-soft",
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
