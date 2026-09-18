'use client';

import Link from 'next/link';

const festivals = [
  { name: 'Ugadi', emoji: 'ðŸŒ¸', desc: 'Telugu & Kannada New Year Â· Marchâ€“April' },
  { name: 'Onam', emoji: 'ðŸŒº', desc: 'Kerala harvest Â· Augustâ€“September' },
  { name: 'Pongal', emoji: 'ðŸ²', desc: 'Tamil harvest Â· January' },
  { name: 'Vishu', emoji: 'ðŸª”', desc: 'Malayalam New Year Â· April' },
  { name: 'Diwali', emoji: 'âœ¨', desc: 'Pan-India Â· Octoberâ€“November' },
  { name: 'Sankranti', emoji: 'ðŸª', desc: 'Telangana & Karnataka Â· January' },
];

const southTraits = [
  { icon: 'ðŸ«™', title: 'South DNA', desc: 'Jain filter, veg-first default, thali logic, filter coffee timing â€” UNIT knows the South dining cadence.' },
  { icon: 'ðŸ“±', title: 'WhatsApp-native', desc: 'South India is WhatsApp country. No app install friction. The guest loop works because it lives in WhatsApp.' },
  { icon: 'ðŸ™ï¸', title: 'Bengaluru-first', desc: 'GTM starts in Bengaluru â€” Indiranagar, Koramangala, JP Nagar, HSR, Jayanagar. Then Chennai, Hyderabad, Kochi.' },
];

export default function SouthFirst() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: '#0C0C0C' }}>
        <img src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=1440&h=600&fit=crop&auto=format"
          alt="Banana leaf South Indian meal" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(0,163,160,0.2)', color: '#00A3A0' }}>South-first</span>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6" style={{ letterSpacing: '-0.03em' }}>
            Built in Bengaluru.<br/>
            <span style={{ color: '#FFB38E' }}>For South dine-in.</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Not a generic SaaS shipped from Delhi. UNIT is a South restaurant OS â€” with South festivals, South dining logic, and South GTM.
          </p>
        </div>
      </section>

      {/* Traits */}
      <section className="py-20" style={{ background: '#F4F6F9' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {southTraits.map((t, i) => (
              <div key={i} className="rounded-3xl p-8" style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-display font-black text-xl mb-3" style={{ color: '#0B1220' }}>{t.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals */}
      <section className="py-20" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl mb-3" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>Festival campaigns, pre-built</h2>
            <p style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>UNIT-supervised. UNIT-timed. You approve the offer. We handle the rest.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {festivals.map((f, i) => (
              <div key={i} className="rounded-2xl p-6 text-center transition-all hover:scale-105"
                style={{ background: '#F4F6F9', border: '1px solid #E7ECF2' }}>
                <div className="text-4xl mb-2">{f.emoji}</div>
                <p className="font-display font-bold text-lg mb-1" style={{ color: '#0B1220' }}>{f.name}</p>
                <p className="text-xs" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="py-20" style={{ background: '#001F25' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
            10 Bengaluru pilot spots
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Dine-in restaurants in Indiranagar, Koramangala, Jayanagar, HSR, JP Nagar. Apply now for the first cohort.
          </p>
          <Link href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Apply for Bengaluru pilot â†’
          </Link>
        </div>
      </section>
    </div>
  );
}

