'use client';

import Link from 'next/link';
import { IMAGES } from '@/lib/images';

const bands = [
  {
    title: 'Waiter',
    img: IMAGES.fineDining,
    points: [
      'Table-mapped Android POS',
      'Offline-first — service never stops',
      'Split bills, modifiers, course routing',
      'Loyalty redemption at checkout',
    ],
  },
  {
    title: 'Chef',
    img: IMAGES.kitchen,
    points: [
      'KDS shows every ticket real-time',
      'Priority + prep timers per station',
      'Course-aware — no missed dishes',
      'Integrated with floor POS',
    ],
  },
  {
    title: 'Bar & nightlife',
    img: IMAGES.barWine,
    points: [
      'Fast tabs for pubs & wine bars',
      'Modifier-heavy cocktail menus',
      'Same guest memory as dine-in',
      'WhatsApp close after last pour',
    ],
  },
  {
    title: 'Hardware-light',
    img: IMAGES.cafe,
    points: [
      'Android tablets only — no proprietary boxes',
      'Kitchen screen: any TV + Android stick',
      'WhatsApp-first — no bill printer required',
      'UPI soundbox optional',
    ],
  },
];

export default function FloorKitchen() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden" style={{ minHeight: '100vh', background: '#0C0C0C' }}>
      <div
        className="absolute top-24 right-0 pointer-events-none"
        style={{
          width: 520,
          height: 520,
          background: 'radial-gradient(circle, rgba(0,163,160,0.2), transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: 'rgba(0,163,160,0.15)',
              color: '#00A3A0',
              border: '1px solid rgba(0,163,160,0.25)',
            }}
          >
            Floor & Kitchen
          </span>
          <h1
            className="font-display font-black text-4xl md:text-5xl mb-4 text-white"
            style={{ letterSpacing: '-0.03em' }}
          >
            Not another CRM
            <br />
            <span style={{ color: '#FFB38E' }}>bolted onto someone else&apos;s POS</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            UNIT owns the floor and the kitchen — for cafes, restaurants, pubs, and nightlife. The guest
            loop starts at close bill.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bands.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <img src={b.img} alt="" className="w-full h-40 object-cover" />
              <div className="p-8">
                <h3 className="font-display font-black text-2xl mb-5 text-white">{b.title}</h3>
                <ul className="space-y-2.5">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      <span
                        className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: '#00A3A0' }}
                      >
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)' }}
          >
            Request a floor demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
