"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Section";

const PANELS = [
  {
    bg: "bg-butter",
    title: "Build a loyal base that drives revenue",
    points: [
      "Own the guest at close bill — name, phone, consent",
      "Cut acquisition cost with referral + dual-QR bags",
      "Reward regulars instead of discounting everyone",
    ],
    image: IMAGES.pizza,
  },
  {
    bg: "bg-peach",
    title: "Turn every bill into a lasting relationship",
    points: [
      "WhatsApp GST receipt + UPI pay link",
      "Timed review invites with private friction alerts",
      "Loyalty stars redeem in the waiter app",
    ],
    image: IMAGES.burger,
  },
  {
    bg: "bg-mint",
    title: "Stay top-of-mind — South festival packs",
    points: [
      "Ugadi · Onam · Pongal · Vishu · Diwali packs",
      "UNIT-run campaigns — anti-spam by design",
      "Measure visits and revenue, not vanity opens",
    ],
    image: IMAGES.dosa,
  },
] as const;

export function PastelFeaturePanels() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="mb-12 text-center">
          <h2 className="display text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold text-ink">
            How UNIT helps restaurateurs
          </h2>
        </Reveal>

        <div className="space-y-8">
          {PANELS.map((panel, i) => (
            <Reveal key={panel.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -4 }}
                className={`${panel.bg} relative overflow-hidden rounded-[32px] border border-white/60 p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10`}
              >
                <div className="grid items-center gap-8 lg:grid-cols-2">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="display max-w-md text-2xl font-extrabold text-ink sm:text-3xl">
                      {panel.title}
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {panel.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-ink-soft sm:text-base">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <ButtonLink href="/book-demo" className="!rounded-full">
                        Learn more →
                      </ButtonLink>
                    </div>
                  </div>

                  <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-[28px] shadow-[var(--shadow)]">
                      <Image
                        src={panel.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 420px"
                      />
                    </div>
                    <div className="float-y absolute -bottom-3 -left-2 rounded-2xl bg-white p-3 shadow-[var(--shadow)] sm:left-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={IMAGES.guest}
                          alt=""
                          width={36}
                          height={36}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <p className="text-xs font-bold text-ink">Riya K.</p>
                          <span className="rounded-full bg-butter px-2 py-0.5 text-[9px] font-bold text-ink">
                            High spender
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="float-y-delayed absolute -right-1 top-6 rounded-2xl bg-white px-3 py-2 shadow-[var(--shadow)] sm:right-2">
                      <p className="text-[10px] font-bold text-wa">WhatsApp</p>
                      <p className="text-xs font-semibold text-ink">+50 loyalty stars</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
