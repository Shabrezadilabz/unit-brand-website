'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IMAGES } from '@/lib/images';

const categories = [
  {
    title: 'Floor & Kitchen',
    img: IMAGES.kitchen,
    features: [
      'Table-mapped waiter POS (Android)',
      'Offline-first service continuity',
      'Kitchen KDS with priority alerts',
      'Split bills, modifiers, course routing',
      'Works for cafes, dine-in, pubs & bars',
    ],
  },
  {
    title: 'Bills & Payments',
    img: IMAGES.cafe,
    features: [
      'WhatsApp GST bill in 30 seconds',
      'UPI inline payment (Razorpay)',
      'UPI soundbox integration (optional)',
      'Digital receipt archive for guests',
      'No bill printer required',
    ],
  },
  {
    title: 'WhatsApp & Loyalty',
    img: IMAGES.cocktail,
    features: [
      'Auto review invite post-bill',
      '5-star → Google / under 4 → private',
      'Loyalty stars auto-credited per visit',
      'Redemption in waiter POS (no app)',
      'STOP opt-out compliant',
    ],
  },
  {
    title: 'Campaigns',
    img: IMAGES.party,
    features: [
      'Weekend, birthday & occasion packs',
      'Win-back flows for lapsed guests',
      'Wine night / brunch automations',
      'UNIT-supervised — no spam risk',
      'Per-send metered pricing',
    ],
  },
  {
    title: 'Guest CRM',
    img: IMAGES.fineDining,
    features: [
      'Auto RFM scoring (LOYAL / AT RISK / LOST)',
      'Full visit + spend history per guest',
      'Segment filter + export',
      'Tier-based reward rules',
      'Unlimited guests on Growth+',
    ],
  },
  {
    title: 'AI Insights',
    img: IMAGES.barWine,
    features: [
      'Daily ops summary (floor + kitchen + guests)',
      'Revenue trend + repeat rate dashboard',
      'Best-seller and peak-hour analysis',
      'Churn risk alerts',
      'Multi-outlet ops board',
    ],
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <div className="pt-24 pb-20 relative overflow-hidden" style={{ background: '#0C0C0C', minHeight: '100vh' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: 'rgba(0,163,160,0.15)',
              color: '#00A3A0',
              border: '1px solid rgba(0,163,160,0.25)',
            }}
          >
            Features
          </span>
          <h1
            className="font-display font-black text-4xl md:text-5xl mb-4 text-white"
            style={{ letterSpacing: '-0.03em' }}
          >
            Everything in{' '}
            <span style={{ color: '#FFB38E' }}>one OS</span>
          </h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
            No patchwork. No five subscriptions. One platform for cafes, restaurants, pubs &amp; nightlife.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((c, i) => (
            <button
              key={c.title}
              type="button"
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={{
                background: active === i ? '#00A3A0' : 'rgba(255,255,255,0.06)',
                color: active === i ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                border: active === i ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div
          className="rounded-3xl overflow-hidden tab-panel grid md:grid-cols-2"
          key={active}
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <img src={cat.img} alt="" className="w-full h-56 md:h-full object-cover min-h-[280px]" />
          <div className="p-10">
            <h2 className="font-display font-black text-3xl mb-7 text-white" style={{ letterSpacing: '-0.02em' }}>
              {cat.title}
            </h2>
            <ul className="space-y-4">
              {cat.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: '#00A3A0' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/book-demo"
              className="inline-flex mt-8 px-6 py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: '#F07C33' }}
            >
              Request demo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
