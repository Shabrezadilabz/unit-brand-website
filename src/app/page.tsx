"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND, FLOW_STEPS } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskImage, ParallaxImage } from "@/components/motion/ParallaxImage";
import { PricingCards } from "@/components/site/PricingCards";
import { PageShell } from "@/components/site/PageShell";

export default function HomePage() {
  const reduce = useReducedMotion();

  return (
    <PageShell>
      {/* HERO — one composition: brand > headline > line > CTAs > full-bleed visual */}
      <section className="relative min-h-[calc(100svh-68px)] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage
            src={IMAGES.heroFloor}
            alt="Busy Indian dining floor at service"
            className="h-full min-h-[calc(100svh-68px)]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1612]/94] via-[#0b1612]/72 to-[#0b1612]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1612]/80 via-transparent to-[#0b1612]/25" />
        </div>

        <Container className="relative z-10 flex min-h-[calc(100svh-68px)] flex-col justify-end pb-14 pt-24 sm:pb-20">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="display text-[clamp(4.2rem,14vw,9.5rem)] font-extrabold leading-[0.82] tracking-[-0.07em] text-white"
          >
            UNIT
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="display mt-4 max-w-3xl text-[clamp(1.75rem,4.2vw,3.25rem)] font-bold text-brass"
          >
            {BRAND.tagline}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.65 }}
            className="mt-4 max-w-xl text-base text-white/75 sm:text-lg"
          >
            {BRAND.support}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href="/book-demo" variant="brass" className="pulse-ring relative">
              Book a demo
            </ButtonLink>
            <ButtonLink href="/pricing" variant="ghost">
              See pricing
            </ButtonLink>
          </motion.div>
        </Container>
      </section>

      <Section className="soft-grid">
        <Container>
          <Reveal>
            <Eyebrow>The loop</Eyebrow>
            <h2 className="display max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] font-bold text-ink">
              Close bill → WhatsApp receipt → guests come back.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3" delay={0.1}>
            {[
              {
                t: "Close bill",
                d: "Name, phone, consent — captured where settlement already happens.",
              },
              {
                t: "WhatsApp receipt",
                d: "Branded GST bill + pay link. No Play Store private-label tax.",
              },
              {
                t: "Return visit",
                d: "Review invite, loyalty stars, redeem in the waiter app next time.",
              },
            ].map((s) => (
              <StaggerItem key={s.t}>
                <div className="h-full rounded-2xl border border-[color:var(--line)] bg-paper/90 p-6 backdrop-blur">
                  <p className="display text-xl font-bold text-leaf">{s.t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="overflow-hidden bg-ink text-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Product stills</Eyebrow>
              <h2 className="display text-[clamp(1.9rem,4vw,3rem)] font-bold">
                Waiter floor. Chef KDS. Owner growth — one OS.
              </h2>
              <p className="mt-4 text-white/65">
                Not another CRM bolted onto someone else’s POS. UNIT owns the operating system and
                the guest loop.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/floor-kitchen" variant="brass">
                  Floor & kitchen
                </ButtonLink>
                <ButtonLink href="/guest-loop" variant="ghost">
                  Guest loop
                </ButtonLink>
              </div>
            </Reveal>
            <div className="relative grid gap-4 sm:grid-cols-2">
              <MaskImage
                src={IMAGES.kitchen}
                alt="Kitchen pass in motion"
                className="aspect-[4/5] rounded-3xl sm:translate-y-8"
              />
              <MaskImage
                src={IMAGES.diningWarm}
                alt="Warm dining atmosphere"
                className="aspect-[4/5] rounded-3xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="display text-[clamp(1.9rem,4vw,3rem)] font-bold">
                ₹2,999 · ₹4,999 · ₹6,999
              </h2>
              <p className="mt-2 text-ink-soft">Per outlet / month. Costly extras stay optional.</p>
            </div>
            <ButtonLink href="/pricing" variant="secondary">
              Compare plans
            </ButtonLink>
          </Reveal>
          <PricingCards />
        </Container>
      </Section>

      <Section className="pb-0 pt-0">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMAGES.bananaLeaf}
              alt="South Indian banana leaf meal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#0b1612]/78" />
          </div>
          <Container className="relative py-20 sm:py-28">
            <Reveal>
              <p className="display text-brass text-sm font-bold uppercase tracking-[0.18em]">
                South density first
              </p>
              <h2 className="display mt-3 max-w-3xl text-[clamp(2rem,5vw,3.6rem)] font-bold text-white">
                Built for dosa rushes, filter-coffee mornings, and Indiranagar dinner peaks.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/south" variant="brass">
                  Read the South story
                </ButtonLink>
                <ButtonLink href="/why-unit" variant="ghost">
                  Why UNIT vs legacy tools
                </ButtonLink>
              </div>
            </Reveal>
          </Container>
        </div>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Five beats</Eyebrow>
            <h2 className="display max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-bold">
              From table to WhatsApp to return visit.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {FLOW_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <div className="grid items-center gap-4 rounded-2xl border border-[color:var(--line)] bg-paper p-5 sm:grid-cols-[88px_1fr] sm:p-6">
                  <span className="display text-3xl font-bold text-brass">{step.n}</span>
                  <div>
                    <h3 className="display text-xl font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft sm:text-base">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/how-it-works">See how UNIT works</ButtonLink>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
