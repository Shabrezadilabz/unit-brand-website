'use client';

import Link from 'next/link';

const loopSteps = [
  { step: 'Bill close', desc: 'Waiter takes name + phone. Consent captured inline. No QR, no form.', icon: 'ðŸ§¾', color: '#D8F5EF' },
  { step: 'WhatsApp GST bill', desc: 'Branded bill hits in 30 seconds. UPI pay inline. No paper.', icon: 'ðŸ’¬', color: '#FFF2A8' },
  { step: 'Review invite', desc: '5-star routes to Google. <4 star routes to you â€” guest never ghosted publicly.', icon: 'â­', color: '#FEE6E0' },
  { step: 'Loyalty stars', desc: 'Stars auto-credited per visit. No app. Guest sees balance on their next WhatsApp bill.', icon: 'ðŸŒŸ', color: '#EBE7FF' },
  { step: 'Redeem at table', desc: 'Waiter sees redeemable stars in POS. Guest redeems without any app or card.', icon: 'ðŸŽ', color: '#D8F5EF' },
];

export default function GuestLoop() {
  return (
    <div className="pt-24 pb-20" style={{ background: '#0C0C0C', minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(0,163,160,0.2)', color: '#00A3A0' }}>Guest Loop</span>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
            The loop that<br/>starts at the bill
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            No loyalty app. No QR game. Just WhatsApp â€” and the guest data you always wanted.
          </p>
        </div>

        {/* Loop visual */}
        <div className="relative max-w-2xl mx-auto">
          {loopSteps.map((s, i) => (
            <div key={i} className="flex gap-6 items-start mb-8">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: s.color }}>
                  {s.icon}
                </div>
                {i < loopSteps.length - 1 && <div className="w-px flex-1 mt-2" style={{ background: 'rgba(0,163,160,0.3)', minHeight: 32 }}/>}
              </div>
              <div className="pt-3">
                <h3 className="font-display font-bold text-xl text-white mb-1">{s.step}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.desc}</p>
              </div>
            </div>
          ))}
          {/* Loop back arrow */}
          <div className="flex items-center gap-3 ml-7">
            <div className="w-14 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A3A0" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12a9 9 0 0 0 9 9 9 9 0 0 0 6-2.3"/><path d="M21 3v6h-6"/><path d="M21 9a9 9 0 0 0-9-6 9 9 0 0 0-6 2.3"/>
              </svg>
            </div>
            <p className="text-sm font-semibold" style={{ color: '#00A3A0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Guest returns â€” loop repeats automatically
            </p>
          </div>
        </div>

        {/* Compliance note */}
        <div className="mt-12 p-6 rounded-2xl max-w-2xl mx-auto" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            <span className="font-semibold text-white">Anti-spam built-in.</span> Consent captured at checkout. STOP opt-out honoured. Mass campaigns are UNIT-supervised â€” no blast scheduling left to the restaurateur.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            See the loop in action â†’
          </Link>
        </div>
      </div>
    </div>
  );
}

