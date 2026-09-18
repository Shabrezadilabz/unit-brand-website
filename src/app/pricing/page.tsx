"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PricingCards } from "@/components/site/PricingCards";
import { DemoForm } from "@/components/site/DemoForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    q: "Do you take a percentage of dine-in bills?",
    a: "No. Outlet SaaS pricing only. Razorpay MDR is paid by the restaurant.",
  },
  {
    q: "What hardware do I need?",
    a: "WhatsApp-first by default. Optional ESC/POS thermal and UPI soundbox partners.",
  },
  {
    q: "Can I blast my own WhatsApp campaigns?",
    a: "No mass owner blasts. Growth/Pro campaign packs are UNIT-run. You keep AI insights + weekly nearby poster send.",
  },
  {
    q: "Is there a private-label Play Store app?",
    a: "No. Branded PWA + WhatsApp — you keep margin and avoid app-store tax.",
  },
];

export default function PricingPage() {
  const [covers, setCovers] = useState(120);
  const [aov, setAov] = useState(850);
  const [openFaq, setOpenFaq] = useState(0);

  const savings = useMemo(() => {
    // Illustrative operator surplus from review/loyalty lift — not a guarantee
    const monthly = covers * 30 * aov * 0.018;
    return Math.round(monthly);
  }, [covers, aov]);

  return (
    <PageShell>
      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="display max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-bold text-ink">
              Simple outlet pricing. Costly extras stay optional.
            </h1>
            <p className="mt-4 max-w-2xl text-ink-soft sm:text-lg">
              Per outlet / month. No private-label app tax. Starter ₹2,999 · Growth ₹4,999 · Pro
              ₹6,999.
            </p>
          </Reveal>
          <div className="mt-12">
            <PricingCards />
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Footnotes: Razorpay MDR by restaurant · WA/email overages as packs · influencer gigs &
            print kit separate.{" "}
            <Link href="/add-ons" className="font-semibold text-leaf underline-offset-2 hover:underline">
              View add-ons
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section className="bg-ink text-white">
        <Container>
          <Reveal>
            <Eyebrow>Illustrative ROI</Eyebrow>
            <h2 className="display text-[clamp(1.8rem,4vw,2.8rem)] font-bold">
              Model a quiet monthly surplus.
            </h2>
            <p className="mt-2 max-w-xl text-white/60">
              Rough operator math from review + loyalty lift — tune covers and AOV.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <label className="block">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Daily dine-in covers</span>
                  <span className="text-brass">{covers}</span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={400}
                  value={covers}
                  onChange={(e) => setCovers(Number(e.target.value))}
                  className="w-full accent-brass"
                />
              </label>
              <label className="block">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Average order value</span>
                  <span className="text-brass">₹{aov}</span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={2500}
                  step={50}
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full accent-brass"
                />
              </label>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-leaf p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brass-soft">
                Estimated monthly lift
              </p>
              <p className="display mt-3 text-5xl font-bold">
                ₹{savings.toLocaleString("en-IN")}
              </p>
              <p className="mt-3 text-sm text-white/75">
                Illustrative only. Your UNIT supervisor will model peak rush with real covers.
              </p>
              <div className="mt-6">
                <ButtonLink href="/book-demo" variant="brass">
                  Talk numbers on a call
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="display text-3xl font-bold">Straight answers.</h2>
              <div className="mt-6 space-y-2">
                {faqs.map((f, i) => (
                  <button
                    key={f.q}
                    type="button"
                    onClick={() => setOpenFaq(i)}
                    className="w-full rounded-xl border border-[color:var(--line)] bg-paper px-4 py-4 text-left"
                  >
                    <p className="font-semibold text-ink">{f.q}</p>
                    {openFaq === i && <p className="mt-2 text-sm text-ink-soft">{f.a}</p>}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Eyebrow>Next</Eyebrow>
              <h2 className="display mb-6 text-3xl font-bold">Request Bengaluru pilot call</h2>
              <DemoForm />
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
