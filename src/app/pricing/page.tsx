'use client';

import { useState } from 'react';
import Link from 'next/link';
import { INR } from '@/lib/images';

const plans = [
  {
    name: 'Starter',
    price: 2999,
    tagline: 'One outlet getting started',
    features: [
      'Floor POS (1 outlet)',
      'Kitchen KDS',
      'WhatsApp GST bill',
      'UPI payment integration',
      'Guest CRM (up to 1,000 guests)',
      'Basic loyalty stars',
    ],
  },
  {
    name: 'Growth',
    price: 4999,
    popular: true,
    tagline: 'Your most popular plan',
    features: [
      'Everything in Starter',
      'Unlimited guest CRM',
      'RFM scoring & segments',
      'Campaigns + occasion packs',
      'Win-back + birthday automations',
      'AI insights dashboard',
    ],
  },
  {
    name: 'Pro',
    price: 6999,
    tagline: 'Multi-outlet or high-volume',
    features: [
      'Everything in Growth',
      'Multi-outlet dashboard',
      'Managed IG campaigns',
      'Influencer gig credit',
      'Priority UNIT onboarding',
      'Dedicated ops support',
    ],
  },
];

const addons = [
  { name: 'Loyalty bags / cards' },
  { name: 'Influencer gig (5 reels)' },
  { name: 'Extra WhatsApp pack (5k msgs)' },
  { name: 'Managed Instagram (4 posts)' },
  { name: 'Hardware (Android tablet)' },
  { name: 'Onsite training (1 day)' },
];

const faqs = [
  { q: 'Is GST included?', a: '18% GST extra on all plan prices.' },
  { q: 'What about Razorpay fees?', a: 'Razorpay MDR (0.85–1.99%) is passed at cost — no markup.' },
  { q: 'Can I switch plans?', a: 'Yes, monthly billing. Upgrade any time, downgrade at renewal.' },
  { q: 'Is there a setup fee?', a: 'No setup fee for Starter and Growth. Pro includes priority onboarding at no extra cost.' },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-20 relative overflow-hidden" style={{ minHeight: '100vh', background: '#0C0C0C' }}>
      <div
        className="absolute top-32 left-1/2 -translate-x-1/2 pointer-events-none animate-glow-pulse"
        style={{
          width: 700,
          height: 700,
          background:
            'radial-gradient(ellipse at center, rgba(240,124,51,0.18) 0%, rgba(240,124,51,0.05) 55%, transparent 75%)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(0,163,160,0.15)', color: '#00A3A0', border: '1px solid rgba(0,163,160,0.25)' }}
          >
            Pricing
          </span>
          <h1
            className="font-display font-black text-4xl md:text-5xl mb-4 text-white"
            style={{ letterSpacing: '-0.03em' }}
          >
            Simple outlet pricing.
            <br />
            <span style={{ color: '#FFB38E' }}>Costly extras stay optional.</span>
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Per outlet · per month · billed monthly
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {plans.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl p-8 relative flex flex-col"
              style={{
                background: p.popular ? 'rgba(0,163,160,0.12)' : 'rgba(255,255,255,0.04)',
                border: p.popular ? '2px solid #00A3A0' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: p.popular ? '0 0 0 6px rgba(0,163,160,0.08)' : undefined,
              }}
            >
              {p.popular && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: '#00A3A0' }}
                >
                  Most popular
                </span>
              )}
              <div className="mb-6">
                <p className="font-display font-bold text-lg mb-1 text-white">{p.name}</p>
                <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {p.tagline}
                </p>
                <p className="font-display font-black text-4xl text-white" style={{ letterSpacing: '-0.04em' }}>
                  {INR}
                  {p.price.toLocaleString('en-IN')}
                </p>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  per outlet / month
                </p>
              </div>
              <ul className="space-y-2.5 mb-7 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill={p.popular ? '#00A3A0' : 'rgba(0,163,160,0.35)'} />
                      <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book-demo"
                className="flex items-center justify-center w-full py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 text-white"
                style={{ background: p.popular ? '#F07C33' : 'rgba(255,255,255,0.1)' }}
              >
                Request demo
              </Link>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="font-display font-black text-2xl mb-6 text-center text-white" style={{ letterSpacing: '-0.02em' }}>
            Optional add-ons
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {addons.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-sm font-medium text-white">{a.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-2xl mb-6 text-center text-white">Pricing FAQ</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <button
                  type="button"
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-3"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm text-white">{f.q}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <path d="M4 7l5 5 5-5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-4 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
