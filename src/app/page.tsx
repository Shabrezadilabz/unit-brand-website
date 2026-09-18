"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { PLANS } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Marquee } from "@/components/motion/Marquee";
import { PageShell } from "@/components/site/PageShell";
import { PricingCards } from "@/components/site/PricingCards";
import { HeroCollage } from "@/components/home/HeroCollage";
import { HowWeDoItCarousel } from "@/components/home/HowWeDoItCarousel";
import { PastelFeaturePanels } from "@/components/home/PastelFeaturePanels";
import { ToolsShowcase } from "@/components/home/ToolsShowcase";
import { ResultsCarousel } from "@/components/home/ResultsCarousel";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";

const TRUST = [
  "Spice Garden",
  "House of Tikka",
  "Filter & Co.",
  "Banana Leaf",
  "Dosa Counter",
  "Petpooja",
  "Razorpay",
  "WhatsApp",
  "Swiggy",
  "Zomato",
];

const FAQS = [
  {
    q: "What is UNIT?",
    a: "UNIT is a South-first restaurant OS — POS + kitchen KDS + WhatsApp bill → review → loyalty. Not a bolt-on CRM.",
  },
  {
    q: "How is this different from Reelo / Fudr / uEngage?",
    a: "Those tools help you message guests or run loyalty apps. UNIT owns the floor and kitchen first — then the guest loop starts at the bill.",
  },
  {
    q: "Do you take a cut of dine-in bills?",
    a: "No. Outlet SaaS only (₹2,999 / ₹4,999 / ₹6,999). Razorpay MDR is paid by the restaurant.",
  },
  {
    q: "Can I blast my own WhatsApp campaigns?",
    a: "No mass owner blasts. Growth/Pro packs are UNIT-run. You keep AI insights and one nearby poster send per week.",
  },
];

export default function HomePage() {
  const reduce = useReducedMotion();
  const [faq, setFaq] = useState(0);

  return (
    <PageShell>
      {/* Fudr-style dark hero */}
      <section className="fudr-dark relative overflow-hidden pb-8 pt-10 text-center text-white sm:pt-14">
        <Container className="relative z-10">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="display text-[clamp(2.2rem,7vw,4.8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]"
          >
            Grow your{" "}
            <span className="text-peach-deep">loyal</span> guests by{" "}
            <span className="text-peach-deep">3×</span>
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-sm text-white/70 sm:text-base"
          >
            Boost retention, experience, and revenue — with POS + kitchen + WhatsApp guest loop built
            for South dine-in density.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <ButtonLink href="/book-demo" className="!bg-ember !shadow-[0_16px_40px_-12px_rgba(240,124,51,0.75)] hover:!brightness-110">
              Request demo
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="ghost">
              See how it works
            </ButtonLink>
          </motion.div>
        </Container>

        <HeroCollage />

        <div className="relative z-10 border-t border-white/10 pt-8">
          <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
            Trusted by leading restaurant chains
          </p>
          <Marquee items={TRUST} className="[&_span]:text-white/40" />
        </div>
      </section>

      {/* How we do it — Fudr carousel */}
      <section className="fudr-dark border-t border-white/5 py-16 sm:py-24">
        <Container>
          <h2 className="display mb-12 text-center text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold uppercase tracking-wide text-white">
            How we do it
          </h2>
          <HowWeDoItCarousel />
        </Container>
      </section>

      <PastelFeaturePanels />
      <ToolsShowcase />
      <ResultsCarousel />

      {/* Love stats — Reelo style */}
      <section className="reelo-navy py-16 text-white sm:py-20">
        <Container>
          <h2 className="display text-center text-[clamp(1.9rem,4vw,3rem)] font-extrabold">
            Why restaurants love UNIT
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                label: "More guests owned",
                n: 91,
                suffix: "%",
                d: "of pilots capture consent at close bill instead of after the guest leaves.",
              },
              {
                label: "More revenue",
                n: 45,
                suffix: "%",
                d: "typical modeled lift band (~30–60%) from review + loyalty loop on Growth.*",
              },
              {
                label: "Stronger brand",
                n: 100,
                suffix: "%",
                d: "floor ownership — POS + KDS + WhatsApp in one OS, not a bolt-on.",
              },
            ].map((s) => (
              <Reveal key={s.label}>
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-leaf">{s.label}</p>
                  <p className="display mt-4 text-5xl font-extrabold">
                    <CountUp to={s.n} suffix={s.suffix} />
                  </p>
                  <p className="mx-auto mt-3 max-w-xs text-sm text-white/65">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsCarousel />

      <Section>
        <Container>
          <Reveal className="mb-10 text-center">
            <h2 className="display text-[clamp(1.9rem,4vw,3rem)] font-extrabold">
              Simple outlet pricing
            </h2>
            <p className="mt-2 text-ink-soft">
              {PLANS.map((p) => `₹${p.price.toLocaleString("en-IN")}`).join(" · ")} per outlet / month
            </p>
          </Reveal>
          <PricingCards />
        </Container>
      </Section>

      {/* FAQ */}
      <section className="reelo-navy py-16 sm:py-20">
        <Container>
          <h2 className="display text-center text-3xl font-extrabold text-white">FAQ</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {FAQS.map((f, i) => (
              <button
                key={f.q}
                type="button"
                onClick={() => setFaq(i)}
                className="rounded-2xl bg-white p-5 text-left shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-bold text-ink">{f.q}</p>
                  <span className={faq === i ? "text-ember" : "text-leaf"}>{faq === i ? "−" : "+"}</span>
                </div>
                {faq === i && <p className="mt-3 text-sm text-ink-soft">{f.a}</p>}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20">
        <Image src={IMAGES.nightDining} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-navy/80" />
        <Container className="relative z-10 text-center text-white">
          <h2 className="display text-[clamp(2rem,4vw,3.4rem)] font-extrabold">
            Ready for your next dinner rush?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Book a Bengaluru / South pilot. UNIT onboards modules, WhatsApp templates, and floor training.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/book-demo" className="!bg-ember hover:!brightness-110">
              Request demo
            </ButtonLink>
            <ButtonLink href="/why-unit" variant="ghost">
              Why UNIT vs loyalty CRMs
            </ButtonLink>
          </div>
          <p className="mt-8 text-[11px] text-white/35">
            *Illustrative pilot modeling — your supervisor validates with real covers.{" "}
            <Link href="/pricing" className="underline">
              See pricing
            </Link>
          </p>
        </Container>
      </section>
    </PageShell>
  );
}
