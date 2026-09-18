"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND, FLOW_STEPS } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Marquee } from "@/components/motion/Marquee";
import { FeatureTabs } from "@/components/site/FeatureTabs";
import { PricingCards } from "@/components/site/PricingCards";
import { PageShell } from "@/components/site/PageShell";

const TRUST = [
  "WhatsApp BSP",
  "Razorpay",
  "Petpooja",
  "Swiggy",
  "Zomato",
  "Dotpe",
  "Resend",
  "UPI Soundbox",
];

export default function HomePage() {
  const reduce = useReducedMotion();

  return (
    <PageShell>
      {/* Hero — Reelo/Fudr energy: clean, product-forward, animated */}
      <section className="hero-glow relative overflow-hidden pt-8 sm:pt-12">
        <Container className="relative z-10 grid items-center gap-12 pb-16 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-10">
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-leaf-soft px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-leaf"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-leaf" />
              South-first restaurant OS
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7 }}
              className="display mt-6 text-[clamp(2.6rem,6.5vw,4.75rem)] font-extrabold text-ink"
            >
              Grow repeat revenue{" "}
              <span className="text-shimmer">without discounting</span> your floor.
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              {BRAND.support} Own POS + KDS + WhatsApp bill → review → loyalty — not a bolt-on CRM
              like the loyalty tools flooding India.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <ButtonLink href="/book-demo">Book a demo</ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary">
                See how it works
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-[color:var(--line)] pt-8"
            >
              {[
                { to: 18, suffix: "s", label: "Bill → WhatsApp" },
                { to: 94, suffix: "%", label: "Delivery rate*" },
                { to: 3, suffix: "x", label: "Review lift*" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="display text-2xl font-extrabold text-leaf sm:text-3xl">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-ink-soft sm:text-xs">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="float-y relative overflow-hidden rounded-[28px] border border-[color:var(--line)] bg-white shadow-[var(--shadow)]">
                <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                  <Image
                    src={IMAGES.diningWarm}
                    alt="UNIT floor experience"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-leaf-soft">
                      Live on WhatsApp
                    </p>
                    <p className="display mt-1 text-2xl font-bold text-white">
                      Spice Garden bill · ₹1,637
                    </p>
                    <p className="mt-1 text-sm text-white/75">GST receipt · Pay UPI · Review invite</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="float-y-delayed absolute -left-3 top-10 max-w-[180px] rounded-2xl border border-[color:var(--line)] bg-white p-3 shadow-[var(--shadow-soft)] sm:-left-8"
                initial={reduce ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">KDS</p>
                <p className="mt-1 text-sm font-bold text-ink">T12 · Butter Paneer</p>
                <p className="text-xs text-leaf">Cooking · 04:12</p>
              </motion.div>

              <motion.div
                className="float-y absolute -right-2 bottom-24 max-w-[190px] rounded-2xl border border-[color:var(--line)] bg-white p-3 shadow-[var(--shadow-soft)] sm:-right-6"
                initial={reduce ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-wa">Loyalty</p>
                <p className="mt-1 text-sm font-bold text-ink">+12 stars earned</p>
                <p className="text-xs text-ink-soft">Redeem next visit</p>
              </motion.div>
            </motion.div>
          </div>
        </Container>

        <div className="border-y border-[color:var(--line)] bg-white py-5">
          <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft">
            Integrates with the stack you already run
          </p>
          <Marquee items={TRUST} />
        </div>
      </section>

      {/* Fudr-style bold how we do it */}
      <Section>
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>How UNIT does it</Eyebrow>
            <h2 className="display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold text-ink">
              Three engines. One restaurant OS.
            </h2>
            <p className="mt-4 text-ink-soft">
              Loyalty apps message guests. Ordering apps take commissions. UNIT runs the floor —
              then owns the guest loop.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-3" delay={0.05}>
            {[
              {
                n: "01",
                t: "Create touchpoints",
                d: "POS + KDS capture every cover. Consent at close bill — not a QR flyer after the guest leaves.",
                img: IMAGES.kitchen,
              },
              {
                n: "02",
                t: "Build guest memory",
                d: "WhatsApp GST bill, review path, RFM-lite personas. Your data stays in UNIT — not a forever-free CRM toy.",
                img: IMAGES.filterCoffee,
              },
              {
                n: "03",
                t: "Launch the right campaigns",
                d: "Festival packs, win-back, birthdays — UNIT-supervised so South density doesn’t become spam density.",
                img: IMAGES.bananaLeaf,
              },
            ].map((card) => (
              <StaggerItem key={card.n}>
                <article className="group h-full overflow-hidden rounded-[28px] border border-[color:var(--line)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.t}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="display text-sm font-bold text-leaf">{card.n}</p>
                    <h3 className="display mt-2 text-xl font-bold">{card.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.d}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Reelo-style tool tabs */}
      <Section className="bg-mist soft-grid">
        <Container>
          <Reveal className="mb-10 max-w-2xl">
            <Eyebrow>All the tools</Eyebrow>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] font-extrabold">
              Everything you need to grow faster — without leaving the floor.
            </h2>
          </Reveal>
          <FeatureTabs />
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/features">Full feature inventory</ButtonLink>
            <ButtonLink href="/guest-loop" variant="secondary">
              WhatsApp guest loop
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Stats band like Reelo love section */}
      <Section className="bg-leaf text-white">
        <Container>
          <Reveal className="text-center">
            <h2 className="display text-[clamp(2rem,4vw,3rem)] font-extrabold">
              Why South operators pick UNIT
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                n: 100,
                suffix: "%",
                t: "Floor ownership",
                d: "POS + KDS in one OS — not loyalty bolted on someone else’s bill.",
              },
              {
                n: 0,
                suffix: "",
                prefix: "₹",
                t: "App-store tax",
                d: "Branded PWA + WhatsApp. No private-label Play Store fee.",
              },
              {
                n: 10,
                suffix: "+",
                t: "Bengaluru pilots",
                d: "South density first. Festival packs: Ugadi, Onam, Pongal, Vishu.",
              },
            ].map((s) => (
              <Reveal key={s.t}>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <p className="display text-4xl font-extrabold text-leaf-soft">
                    {s.prefix}
                    <CountUp to={s.n} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-lg font-bold">{s.t}</p>
                  <p className="mt-2 text-sm text-white/75">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Transparent pricing</Eyebrow>
              <h2 className="display text-[clamp(2rem,4vw,3rem)] font-extrabold">
                Simple outlet plans. Costly extras optional.
              </h2>
            </div>
            <ButtonLink href="/pricing" variant="secondary">
              Compare plans
            </ButtonLink>
          </Reveal>
          <PricingCards />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal>
            <Eyebrow>Five beats</Eyebrow>
            <h2 className="display max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-extrabold">
              From table to WhatsApp to return visit.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3">
            {FLOW_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.04}>
                <div className="flex flex-col gap-2 rounded-2xl border border-[color:var(--line)] bg-white p-5 transition hover:border-leaf/30 hover:shadow-[var(--shadow-soft)] sm:flex-row sm:items-center sm:gap-6 sm:p-6">
                  <span className="display text-2xl font-extrabold text-leaf">{step.n}</span>
                  <div>
                    <h3 className="display text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="overflow-hidden bg-ink text-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-leaf-soft">
                Built for South density
              </p>
              <h2 className="display mt-3 text-[clamp(2rem,4vw,3.4rem)] font-extrabold">
                Ready for your next dinner rush?
              </h2>
              <p className="mt-4 text-white/65">
                Apply for a Bengaluru / South pilot. UNIT onboards modules, WhatsApp templates, and
                floor training — no self-serve maze.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/book-demo">Book a South pilot</ButtonLink>
                <ButtonLink href="/why-unit" variant="ghost">
                  Why UNIT vs loyalty CRMs
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                <Image
                  src={IMAGES.dosa}
                  alt="South Indian dosa service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
          <p className="mt-8 text-center text-[11px] text-white/35">
            *Illustrative operator metrics from pilot modeling — your supervisor will validate with
            real covers.
          </p>
        </Container>
      </Section>
    </PageShell>
  );
}
