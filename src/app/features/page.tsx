'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    title: 'Floor & Kitchen',
    color: '#D8F5EF',
    features: ['Table-mapped waiter POS (Android)', 'Offline-first service continuity', 'Kitchen KDS with priority alerts', 'Split bills, modifiers, course routing', 'Aggregator bridge (Swiggy/Zomato â†’ KDS)'],
  },
  {
    title: 'Bills & Payments',
    color: '#FFF2A8',
    features: ['WhatsApp GST bill in 30 seconds', 'UPI inline payment (Razorpay)', 'UPI soundbox integration (optional)', 'Digital receipt archive for guests', 'No bill printer required'],
  },
  {
    title: 'WhatsApp & Loyalty',
    color: '#FEE6E0',
    features: ['Auto review invite post-bill', '5-star â†’ Google / <4 star â†’ private', 'Loyalty stars auto-credited per visit', 'Redemption in waiter POS (no app)', 'STOP opt-out compliant'],
  },
  {
    title: 'Campaigns',
    color: '#EBE7FF',
    features: ['South festival packs (Ugadi, Onam, Pongal, Vishu, Diwali)', 'Win-back flows for lapsed guests', 'Birthday / anniversary automation', 'UNIT-supervised â€” no spam risk', 'Per-send metered pricing'],
  },
  {
    title: 'Guest CRM',
    color: '#D8F5EF',
    features: ['Auto RFM scoring (LOYAL / AT RISK / LOST)', 'Full visit + spend history per guest', 'Segment filter + export', 'Tier-based reward rules', 'Up to unlimited guests on Growth+'],
  },
  {
    title: 'AI Insights',
    color: '#FFF2A8',
    features: ['Daily ops summary (floor + kitchen + guests)', 'Revenue trend + repeat rate dashboard', 'Best-seller and peak-hour analysis', 'Churn risk alerts', 'UNIT ops board for multi-outlet'],
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <div className="pt-24 pb-20" style={{ background: '#F4F6F9', minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#D5F5F3', color: '#0F766E' }}>Features</span>
          <h1 className="font-display font-black text-5xl mb-4" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>Everything in one OS</h1>
          <p className="text-lg" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            No patchwork. No 5 subscriptions. One platform that runs dine-in end to end.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((c, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={{
                background: active===i ? cat.color : 'white',
                color: active===i ? '#0B1220' : '#526072',
                border: active===i ? 'none' : '1px solid #E7ECF2',
              }}>
              {c.title}
            </button>
          ))}
        </div>

        <div className="rounded-3xl p-10 tab-panel" key={active} style={{ background: cat.color }}>
          <h2 className="font-display font-black text-3xl mb-7" style={{ color: '#0B1220', letterSpacing: '-0.02em' }}>{cat.title}</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {cat.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                <span className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: '#00A3A0' }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Request demo â†’
          </Link>
        </div>
      </div>
    </div>
  );
}

