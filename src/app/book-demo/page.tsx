'use client';

import { useState } from 'react';

const nextSteps = [
  { num: '01', title: 'UNIT calls you', desc: 'Within 24 hours of your request. We discuss your restaurant, floor size, and outlets.' },
  { num: '02', title: 'Module walkthrough', desc: "Live demo of POS + KDS + WhatsApp loop â€” using your restaurant's menu." },
  { num: '03', title: 'WhatsApp go-live', desc: 'Onboarded in under a week. Waiter training, hardware check, first GST bill live.' },
];

export default function BookDemo() {
  const [form, setForm] = useState({ restaurant: '', city: '', outlets: '', phone: '', plan: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-20" style={{ minHeight: '100vh', background: '#F4F6F9' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: '#D5F5F3', color: '#0F766E' }}>Book demo</span>
            <h1 className="font-display font-black text-5xl mb-4" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>
              Talk to UNIT
            </h1>
            <p className="text-lg mb-10" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              No public self-serve signup. UNIT onboards you â€” callback within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              {nextSteps.map((s, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-display font-black text-sm"
                    style={{ background: '#D8F5EF', color: '#0F766E' }}>{s.num}</div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/9191919191?text=Hi+UNIT+team%2C+I'd+like+to+book+a+demo"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 px-6 py-3.5 rounded-2xl font-semibold text-white transition-all hover:scale-105"
              style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.35)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp us directly
            </a>
          </div>

          {/* Right â€” form */}
          <div className="rounded-3xl p-8 md:p-10" style={{ background: 'white', boxShadow: '0 14px 40px -16px rgba(11,18,32,0.14)' }}>
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#D8F5EF' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6 16l7 7 13-13" stroke="#0F766E" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-display font-black text-2xl mb-2" style={{ color: '#0B1220' }}>Request received!</h3>
                <p className="text-sm" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>UNIT will call you within 24 hours. Check WhatsApp too.</p>
              </div>
            ) : (
              <>
                <h2 className="font-display font-black text-2xl mb-7" style={{ color: '#0B1220', letterSpacing: '-0.02em' }}>Request callback</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { id: 'restaurant', label: 'Restaurant name', placeholder: 'Spice Garden', type: 'text', required: true },
                    { id: 'city', label: 'City', placeholder: 'Bengaluru', type: 'text', required: true },
                    { id: 'phone', label: 'Phone number', placeholder: '+91 98765 43210', type: 'tel', required: true },
                  ].map(f => (
                    <div key={f.id}>
                      <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{f.label}</label>
                      <input
                        type={f.type} placeholder={f.placeholder} required={f.required}
                        value={(form as any)[f.id]}
                        onChange={e => setForm(prev => ({ ...prev, [f.id]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ background: '#F4F6F9', border: '1.5px solid #E7ECF2', color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        onFocus={e => { e.currentTarget.style.borderColor = '#00A3A0'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,163,160,0.1)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = '#E7ECF2'; e.currentTarget.style.boxShadow = 'none'; }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Number of outlets</label>
                    <select value={form.outlets} onChange={e => setForm(p => ({ ...p, outlets: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: '#F4F6F9', border: '1.5px solid #E7ECF2', color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      <option value="">Select</option>
                      <option value="1">1 outlet</option>
                      <option value="2-5">2â€“5 outlets</option>
                      <option value="6+">6+ outlets</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Plan interest</label>
                    <select value={form.plan} onChange={e => setForm(p => ({ ...p, plan: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: '#F4F6F9', border: '1.5px solid #E7ECF2', color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      <option value="">Not sure yet</option>
                      <option value="starter">Starter â€” â‚¹2,999/outlet/month</option>
                      <option value="growth">Growth â€” â‚¹4,999/outlet/month</option>
                      <option value="pro">Pro â€” â‚¹6,999/outlet/month</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Anything else?</label>
                    <textarea rows={3} placeholder="Your restaurant, current setup, what you're looking forâ€¦"
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{ background: '#F4F6F9', border: '1.5px solid #E7ECF2', color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}/>
                  </div>

                  <button type="submit"
                    className="w-full py-4 rounded-2xl font-semibold text-white text-sm transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] mt-2"
                    style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.35)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Request callback â†’
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

