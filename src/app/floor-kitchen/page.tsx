'use client';

import Link from 'next/link';

const bands = [
  { icon: 'ðŸ½ï¸', title: 'Waiter', color: '#D8F5EF', points: ['Table-mapped Android POS', 'Offline-first â€” service never stops', 'Split bills, modifiers, course routing', 'Loyalty redemption at checkout'] },
  { icon: 'ðŸ”¥', title: 'Chef', color: '#FFF2A8', points: ['KDS shows every ticket real-time', 'Priority + prep timers per station', 'Course-aware â€” no missed dishes', 'Integrated with floor POS'] },
  { icon: 'ðŸ“¦', title: 'Aggregator bridge', color: '#FEE6E0', points: ['Swiggy + Zomato orders into the same KDS', 'One menu â€” UNIT is source of truth', 'No double entry, no tablet farm'] },
  { icon: 'ðŸ“¡', title: 'Hardware-light', color: '#EBE7FF', points: ['Android tablets only â€” no proprietary boxes', 'Kitchen screen: any TV + Android stick', 'WhatsApp-first â€” no bill printer required', 'UPI soundbox optional'] },
];

export default function FloorKitchen() {
  return (
    <div className="pt-24 pb-20" style={{ minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#D5F5F3', color: '#0F766E' }}>Floor & Kitchen</span>
          <h1 className="font-display font-black text-5xl mb-4" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>
            Not another CRM<br/>bolted onto someone<br/>else's POS
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            UNIT owns the floor and the kitchen. The guest loop starts at close bill â€” not at a loyalty app download.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bands.map((b, i) => (
            <div key={i} className="rounded-3xl p-8" style={{ background: b.color }}>
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-display font-black text-2xl mb-5" style={{ color: '#0B1220' }}>{b.title}</h3>
              <ul className="space-y-2.5">
                {b.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    <span className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: '#00A3A0' }}>
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/book-demo" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Request a floor demo â†’
          </Link>
        </div>
      </div>
    </div>
  );
}

