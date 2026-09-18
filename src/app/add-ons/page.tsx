'use client';

import Link from 'next/link';
import { IMAGES } from '@/lib/images';

const ADDONS = [
  {
    title: 'Branded bags & loyalty cards',
    detail: 'Print kits for peak season — bags, cards, and table collateral when you need volume.',
    img: IMAGES.brunch,
  },
  {
    title: 'Nearby influencer gigs',
    detail: 'Hyperlocal creators UNIT connects for you — spam-safe, approval-first.',
    img: IMAGES.party,
  },
  {
    title: 'Message packs',
    detail: 'WhatsApp & email overages when you outgrow plan caps.',
    img: IMAGES.cafe,
  },
  {
    title: 'Managed IG / digital',
    detail: 'Quoted campaigns — UNIT supervisor connects, you stay brand-safe.',
    img: IMAGES.cocktail,
  },
  {
    title: 'Hardware kit',
    detail: 'Android tablets, optional thermal + UPI soundbox — WhatsApp-first by default.',
    img: IMAGES.kitchen,
  },
  {
    title: 'Onsite training',
    detail: 'Floor + kitchen go-live with your shift leads — one day, done right.',
    img: IMAGES.fineDining,
  },
];

export default function AddOnsPage() {
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
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: 'rgba(0,163,160,0.15)',
              color: '#00A3A0',
              border: '1px solid rgba(0,163,160,0.25)',
            }}
          >
            Add-ons
          </span>
          <h1
            className="font-display font-black text-4xl md:text-5xl mb-4 text-white"
            style={{ letterSpacing: '-0.03em' }}
          >
            Power when you{' '}
            <span style={{ color: '#FFB38E' }}>need it</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Not stuffed into SaaS. Unlock bags, gigs, and packs when peak season demands it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ADDONS.map((a) => (
            <article
              key={a.title}
              className="rounded-3xl overflow-hidden transition-all hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url(${a.img})` }} />
              <div className="p-6">
                <h2 className="font-display font-bold text-lg mb-2 text-white">{a.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {a.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)' }}
          >
            Talk to UNIT about add-ons →
          </Link>
        </div>
      </div>
    </div>
  );
}
