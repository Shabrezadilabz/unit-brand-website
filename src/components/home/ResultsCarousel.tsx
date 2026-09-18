"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";

const STORIES = [
  {
    brand: "House of Tikka",
    title: "204× campaign ROI story",
    metric: "₹13.6L",
    metricLabel: "from one festival pack week",
    quote: "UNIT closed the loop from bill to WhatsApp to return visit — without Play Store tax.",
    image: IMAGES.noodles,
  },
  {
    brand: "Filter & Co.",
    title: "22% loyalty redemption",
    metric: "22%",
    metricLabel: "stars redeemed on floor",
    quote: "Guests redeem in the waiter app. Reviews jumped without nagging every diner.",
    image: IMAGES.filterCoffee,
  },
  {
    brand: "Spice Garden",
    title: "3× review invite lift",
    metric: "3×",
    metricLabel: "Google review path clicks",
    quote: "Consent at close bill changed everything. We finally own Indiranagar regulars.",
    image: IMAGES.thali,
  },
] as const;

export function ResultsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % STORIES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const story = STORIES[active];

  return (
    <section className="bg-mist py-16 sm:py-24">
      <Container>
        <Reveal className="mb-10 text-center">
          <h2 className="display text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold text-ink">
            Real results for South dine-in
          </h2>
        </Reveal>

        <motion.div
          key={story.brand}
          initial={{ opacity: 0.6, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid overflow-hidden rounded-[28px] shadow-[var(--shadow)] lg:grid-cols-3"
        >
          <div className="bg-navy p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">{story.brand}</p>
            <h3 className="display mt-3 text-2xl font-extrabold">{story.title}</h3>
            <p className="mt-3 text-sm text-white/65">{story.quote}</p>
            <div className="mt-6">
              <ButtonLink href="/south" variant="ghost" className="!border-white/30">
                Read South story →
              </ButtonLink>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center bg-leaf p-6 text-white sm:p-8">
              <p className="display text-4xl font-extrabold">{story.metric}</p>
              <p className="mt-1 text-sm text-white/80">{story.metricLabel}</p>
            </div>
            <div className="flex flex-1 items-center bg-mint p-6 text-ink sm:p-8">
              <p className="text-sm leading-relaxed">“{story.quote}”</p>
            </div>
          </div>
          <div className="relative min-h-[220px]">
            <Image src={story.image} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
          </div>
        </motion.div>

        <div className="mt-6 flex justify-center gap-2">
          {STORIES.map((s, i) => (
            <button
              key={s.brand}
              type="button"
              aria-label={s.brand}
              onClick={() => setActive(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === active ? "w-8 bg-leaf" : "w-2 bg-ink/20",
              )}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {STORIES.map((s, i) => (
            <button
              key={s.brand}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "rounded-2xl border p-4 text-left transition hover:-translate-y-1",
                i === active
                  ? "border-leaf bg-white shadow-[var(--shadow-soft)]"
                  : "border-[color:var(--line)] bg-white/70",
              )}
            >
              <p className="text-xs font-bold text-leaf">{s.brand}</p>
              <p className="mt-1 text-sm font-bold text-ink">{s.title}</p>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
