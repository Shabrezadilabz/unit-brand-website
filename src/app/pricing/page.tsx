'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter', price: 2999, alias: 'BASIC',
    tagline: 'One outlet getting started',
    features: ['Floor POS (1 outlet)', 'Kitchen KDS', 'WhatsApp GST bill', 'UPI payment integration', 'Guest CRM (up to 1,000 guests)', 'Basic loyalty stars'],
  },
  {
    name: 'Growth', price: 4999, alias: 'GROWTH', popular: true,
    tagline: 'Your most popular plan',
    features: ['Everything in Starter', 'Unlimited guest CRM', 'RFM scoring & segments', 'Campaigns + South festival packs', 'Win-back + birthday automations', 'AI insights dashboard'],
  },
  {
    name: 'Pro', price: 6999, alias: 'PRO',
    tagline: 'Multi-outlet or high-volume',
    features: ['Everything in Growth', 'Multi-outlet dashboard', 'Managed IG campaigns', 'Influencer gig credit', 'Priority UNIT onboarding', 'Dedicated ops support'],
  },
];

const addons = [
  { name: 'Loyalty bags / cards', price: 'From â‚¹8/pc' },
  { name: 'Influencer gig (5 reels)', price: 'â‚¹8,000' },
  { name: 'Extra WhatsApp pack (5k msgs)', price: 'â‚¹599' },
  { name: 'Managed Instagram (4 posts)', price: 'â‚¹4,999/mo' },
  { name: 'Hardware (Android tablet)', price: 'â‚¹12,000 one-time' },
  { name: 'Onsite training (1 day)', price: 'â‚¹2,499' },
];

const faqs = [
  { q: 'Is GST included?', a: '18% GST extra on all plan prices.' },
  { q: 'What about Razorpay fees?', a: 'Razorpay MDR (0.85â€“1.99%) is passed at cost â€” no markup.' },
  { q: 'Can I switch plans?', a: 'Yes, monthly billing. Upgrade any time, downgrade at renewal.' },
  { q: 'Is there a setup fee?', a: 'No setup fee for Starter and Growth. Pro includes priority onboarding at no extra cost.' },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number|null>(null);

  return (
    <div className="pt-24 pb-20" style={{ minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#D5F5F3', color: '#0F766E' }}>Pricing</span>
          <h1 className="font-display font-black text-5xl mb-4" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>
            Simple outlet pricing.<br/>Costly extras stay optional.
          </h1>
          <p className="text-lg" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Per outlet Â· per month Â· billed monthly</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {plans.map((p, i) => (
            <div key={i}
              className={`rounded-3xl p-8 relative flex flex-col ${p.popular ? 'pricing-popular' : ''}`}
              style={{ background: 'white', boxShadow: p.popular ? undefined : '0 4px 20px rgba(0,0,0,0.06)' }}>
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: '#00A3A0' }}>Most popular</span>
              )}
              <div className="mb-6">
                <p className="font-display font-bold text-lg mb-1" style={{ color: '#0B1220' }}>{p.name}</p>
                <p className="text-xs mb-4" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{p.tagline}</p>
                <p className="font-display font-black text-4xl" style={{ color: '#0B1220', letterSpacing: '-0.04em' }}>â‚¹{p.price.toLocaleString('en-IN')}</p>
                <p className="text-xs mt-1" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>per outlet / month</p>
              </div>
              <ul className="space-y-2.5 mb-7 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill={p.popular?'#00A3A0':'#D5F5F3'}/>
                      <path d="M4 7l2 2 4-4" stroke={p.popular?'white':'#0F766E'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/book-demo"
                className="flex items-center justify-center w-full py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: p.popular?'#F07C33':'#0B1220', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Request demo
              </Link>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h2 className="font-display font-black text-2xl mb-6 text-center" style={{ color: '#0B1220', letterSpacing: '-0.02em' }}>Optional add-ons</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {addons.map((a, i) => (
              <div key={i} className="rounded-2xl p-5 flex items-center justify-between" style={{ background: '#F4F6F9', border: '1px solid #E7ECF2' }}>
                <p className="text-sm font-medium" style={{ color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{a.name}</p>
                <p className="text-sm font-semibold" style={{ color: '#00A3A0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{a.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-2xl mb-6 text-center" style={{ color: '#0B1220' }}>Pricing FAQ</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: '#F4F6F9', border: '1px solid #E7ECF2' }}>
                <button className="w-full text-left px-6 py-4 flex items-center justify-between gap-3"
                  onClick={() => setOpenFaq(openFaq===i?null:i)}>
                  <span className="font-semibold text-sm" style={{ color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{f.q}</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`transition-transform ${openFaq===i?'rotate-180':''}`}>
                    <path d="M4 7l5 5 5-5" stroke="#526072" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className={`accordion-content ${openFaq===i?'open':''}`}>
                  <p className="px-6 pb-4 text-sm" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

