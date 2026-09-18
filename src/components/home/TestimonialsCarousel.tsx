"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const QUOTES = [
  {
    quote:
      "Partnering on UNIT was one of our best floor decisions. Bill → WhatsApp → review finally runs without a second CRM login.",
    name: "Vikram Sankhla",
    role: "Managing Partner, House of Tikka",
    brand: "Indiranagar",
  },
  {
    quote:
      "We own guest data at settlement now. Festival packs feel local — Onam and Ugadi — without blasting every number we have.",
    name: "Ananya Krishnan",
    role: "Owner, Filter & Co.",
    brand: "Koramangala",
  },
  {
    quote:
      "KDS + waiter floor + WhatsApp bill in one OS. No private-label app tax. Our staff trained in a week.",
    name: "Rahul Menon",
    role: "Ops Head, Banana Leaf Kitchen",
    brand: "Whitefield",
  },
  {
    quote:
      "uEngage-style ordering tools never replaced our POS. UNIT actually runs the restaurant — then the loop.",
    name: "Sneha Iyer",
    role: "Founder, Dosa Counter",
    brand: "Jayanagar",
  },
] as const;

export function TestimonialsCarousel() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStart((s) => (s + 1) % QUOTES.length), 4200);
    return () => clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map((offset) => QUOTES[(start + offset) % QUOTES.length]);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="mb-10 text-center">
          <h2 className="display text-[clamp(1.9rem,4vw,3rem)] font-extrabold text-ink">
            What South operators say about UNIT
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {visible.map((q, i) => (
            <motion.article
              key={`${q.name}-${start}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex h-full flex-col rounded-[24px] border border-[color:var(--line)] bg-white p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="text-amber-400">★★★★★</p>
              <p className="display mt-3 text-4xl leading-none text-leaf">“</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{q.quote}</p>
              <div className="mt-6 border-t border-[color:var(--line)] pt-4">
                <p className="text-sm font-bold text-ink">{q.name}</p>
                <p className="text-xs text-ink-soft">
                  {q.role} · {q.brand}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Testimonials set ${i + 1}`}
              onClick={() => setStart(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === start ? "w-8 bg-leaf" : "w-2 bg-ink/15",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
