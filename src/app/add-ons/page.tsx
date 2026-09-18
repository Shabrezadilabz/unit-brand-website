'use client';

import Link from 'next/link';

const ADDONS = [
  { title: 'Branded bags & loyalty cards', detail: '100 free with plan · then ₹18–25/bag · ₹8–12/card · packs 100 / 250 / 500', img: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=640&h=400&fit=crop&auto=format' },
  { title: 'Nearby influencer gigs', detail: 'Creator at cost + UNIT 20–25% fee · min ₹5,000 · hyperlocal only', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=640&h=400&fit=crop&auto=format' },
  { title: 'Message packs', detail: 'WhatsApp & email overages when you outgrow plan caps', img: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=640&h=400&fit=crop&auto=format' },
  { title: 'Managed IG / digital', detail: 'Quoted campaigns — UNIT supervisor connects, spam-safe', img: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=640&h=400&fit=crop&auto=format' },
  { title: 'Hardware kit', detail: 'ESC/POS thermal + optional UPI soundbox · WA-first by default', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=400&fit=crop&auto=format' },
  { title: 'Onsite training', detail: '₹4,999–9,999 · floor + kitchen go-live with shift leads', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=640&h=400&fit=crop&auto=format' },
];

export default function AddOnsPage() {
  return (
    <div className="pt-24 pb-20" style={{ background: '#F4F6F9', minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#D5F5F3', color: '#0F766E' }}>Add-ons</span>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>
            Power when you need it
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#526072' }}>
            Not stuffed into SaaS. Unlock bags, gigs, and packs when peak season demands it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ADDONS.map((a) => (
            <article key={a.title} className="rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url(${a.img})` }} />
              <div className="p-6">
                <h2 className="font-display font-bold text-lg mb-2" style={{ color: '#0B1220' }}>{a.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: '#526072' }}>{a.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)' }}>
            Request print kit / gig →
          </Link>
        </div>
      </div>
    </div>
  );
}
