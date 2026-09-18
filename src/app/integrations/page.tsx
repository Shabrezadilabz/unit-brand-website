'use client';

import Link from 'next/link';

const integrations = [
  { name: 'WhatsApp BSP', category: 'Communication', emoji: 'ðŸ’¬', desc: 'Official BSP-compliant. GST bills, review invites, loyalty updates.' },
  { name: 'Razorpay', category: 'Payments', emoji: 'ðŸ’³', desc: 'UPI, cards, netbanking â€” MDR passed at cost. No markup.' },
  { name: 'UPI Soundbox', category: 'Payments', emoji: 'ðŸ”Š', desc: 'Audio confirmation for UPI payments at table.' },
  { name: 'Petpooja', category: 'POS bridge', emoji: 'ðŸ“‹', desc: 'Menu sync and order bridging for existing Petpooja setups.' },
  { name: 'Dotpe', category: 'Ordering', emoji: 'ðŸ“±', desc: 'Web order integration â€” takeaway + dine-in table ordering.' },
  { name: 'Swiggy', category: 'Aggregator', emoji: 'ðŸ›µ', desc: 'Orders auto-route to UNIT KDS. One kitchen view.' },
  { name: 'Zomato', category: 'Aggregator', emoji: 'ðŸ•', desc: 'Orders auto-route to UNIT KDS. UNIT is source of truth.' },
  { name: 'Resend', category: 'Email', emoji: 'ðŸ“§', desc: 'Transactional email for staff comms and reports.' },
  { name: 'OpenAI', category: 'AI', emoji: 'ðŸ¤–', desc: 'Powers AI insights dashboard â€” revenue trend, churn alerts.' },
];

export default function Integrations() {
  return (
    <div className="pt-24 pb-20" style={{ minHeight: '100vh', background: '#F4F6F9' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#D5F5F3', color: '#0F766E' }}>Integrations</span>
          <h1 className="font-display font-black text-5xl mb-4" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>
            UNIT is the source of truth.<br/>Bridges are optional.
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Connect what you already use. UNIT reconciles everything.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {integrations.map((int, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white hover:shadow-md transition-all hover:scale-[1.01]"
              style={{ border: '1px solid #E7ECF2' }}>
              <div className="text-3xl mb-3">{int.emoji}</div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#00A3A0' }}>{int.category}</p>
              <p className="font-display font-bold text-base mb-2" style={{ color: '#0B1220' }}>{int.name}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{int.desc}</p>
            </div>
          ))}
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

