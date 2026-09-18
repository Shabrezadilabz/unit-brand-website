'use client';

import Link from 'next/link';

const rows = [
  { feature: 'Own floor POS + KDS', loyaltyCRM: false, orderingApps: false, unit: true },
  { feature: 'Consent captured at bill', loyaltyCRM: false, orderingApps: false, unit: true },
  { feature: 'WhatsApp GST bill', loyaltyCRM: false, orderingApps: false, unit: true },
  { feature: 'Review â†’ loyalty â†’ redeem', loyaltyCRM: true, orderingApps: false, unit: true },
  { feature: 'No app download for guest', loyaltyCRM: false, orderingApps: false, unit: true },
  { feature: 'Campaigns & RFM', loyaltyCRM: true, orderingApps: false, unit: true },
  { feature: 'South festival packs', loyaltyCRM: false, orderingApps: false, unit: true },
  { feature: 'Aggregator bridge', loyaltyCRM: false, orderingApps: true, unit: true },
  { feature: 'Branded PWA (no Play Store tax)', loyaltyCRM: false, orderingApps: true, unit: true },
  { feature: 'UNIT-supervised campaigns', loyaltyCRM: false, orderingApps: false, unit: true },
];

function Check({ val }: { val: boolean }) {
  return val ? (
    <div className="w-6 h-6 rounded-full flex items-center justify-center mx-auto" style={{ background: '#D8F5EF' }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#0F766E" strokeWidth="2" strokeLinecap="round"/></svg>
    </div>
  ) : (
    <div className="w-6 h-6 rounded-full flex items-center justify-center mx-auto" style={{ background: '#F4F6F9' }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 3l4 4M7 3l-4 4" stroke="#C0C9D4" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </div>
  );
}

export default function WhyUnit() {
  return (
    <div className="pt-24 pb-20" style={{ minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#D5F5F3', color: '#0F766E' }}>Why UNIT</span>
          <h1 className="font-display font-black text-5xl mb-4" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>
            They help you message guests.<br/>UNIT runs the restaurant.
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Loyalty CRM bolt-ons bolt onto someone else's POS. Ordering apps own the guest. UNIT owns the floor.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg">
          <table className="w-full">
            <thead>
              <tr style={{ background: '#0B1220' }}>
                <th className="text-left px-6 py-5 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Plus Jakarta Sans, sans-serif', width: '40%' }}>Capability</th>
                <th className="text-center px-4 py-5 text-sm font-semibold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Loyalty CRM bolt-ons</th>
                <th className="text-center px-4 py-5 text-sm font-semibold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Ordering apps</th>
                <th className="text-center px-4 py-5 text-sm font-bold" style={{ color: '#00A3A0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>UNIT</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ background: i%2===0?'white':'#F4F6F9', borderBottom: '1px solid #E7ECF2' }}>
                  <td className="px-6 py-4 text-sm font-medium" style={{ color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{r.feature}</td>
                  <td className="px-4 py-4"><Check val={r.loyaltyCRM}/></td>
                  <td className="px-4 py-4"><Check val={r.orderingApps}/></td>
                  <td className="px-4 py-4"><Check val={r.unit}/></td>
                </tr>
              ))}
            </tbody>
          </table>
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

