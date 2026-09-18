'use client';

import { useState } from 'react';
import { INR } from '@/lib/images';

const nextSteps = [
  {
    num: '01',
    title: 'UNIT calls you',
    desc: 'Within 24 hours of your request. We discuss your restaurant, floor size, and outlets.',
  },
  {
    num: '02',
    title: 'Module walkthrough',
    desc: "Live demo of POS + KDS + WhatsApp loop — using your restaurant's menu.",
  },
  {
    num: '03',
    title: 'WhatsApp go-live',
    desc: 'Onboarded in under a week. Waiter training, hardware check, first GST bill live.',
  },
];

export default function BookDemo() {
  const [form, setForm] = useState({
    restaurant: '',
    city: '',
    outlets: '',
    phone: '',
    plan: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-20 relative overflow-hidden" style={{ minHeight: '100vh', background: '#0C0C0C' }}>
      <div
        className="absolute top-32 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background:
            'radial-gradient(ellipse at center, rgba(240,124,51,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: 'rgba(0,163,160,0.15)',
                color: '#00A3A0',
                border: '1px solid rgba(0,163,160,0.25)',
              }}
            >
              Book demo
            </span>
            <h1
              className="font-display font-black text-4xl md:text-5xl mb-4 text-white"
              style={{ letterSpacing: '-0.03em' }}
            >
              Talk to <span style={{ color: '#FFB38E' }}>UNIT</span>
            </h1>
            <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
              No public self-serve signup. UNIT onboards you — callback within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              {nextSteps.map((s) => (
                <div key={s.num} className="flex gap-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-display font-black text-sm"
                    style={{ background: 'rgba(0,163,160,0.2)', color: '#00A3A0' }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <p className="font-display font-bold text-white mb-1">{s.title}</p>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl p-8"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {sent ? (
              <div className="text-center py-10">
                <p className="font-display font-black text-3xl text-white mb-3">You&apos;re on the list.</p>
                <p style={{ color: 'rgba(255,255,255,0.55)' }}>
                  We&apos;ll call within one working day to plan your walkthrough.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block text-white/50">
                    Restaurant name
                  </label>
                  <input
                    required
                    value={form.restaurant}
                    onChange={(e) => setForm((p) => ({ ...p, restaurant: e.target.value }))}
                    placeholder="Spice Garden"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none text-white"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block text-white/50">
                    City
                  </label>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                    placeholder="Your city"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none text-white"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block text-white/50">
                    Outlets
                  </label>
                  <select
                    value={form.outlets}
                    onChange={(e) => setForm((p) => ({ ...p, outlets: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none text-white"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <option value="">Select</option>
                    <option value="1">1 outlet</option>
                    <option value="2-5">2–5 outlets</option>
                    <option value="6+">6+ outlets</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block text-white/50">
                    Phone
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="98765 43210"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none text-white"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block text-white/50">
                    Plan interest
                  </label>
                  <select
                    value={form.plan}
                    onChange={(e) => setForm((p) => ({ ...p, plan: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none text-white"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <option value="">Not sure yet</option>
                    <option value="starter">{`Starter — ${INR}2,999/outlet/month`}</option>
                    <option value="growth">{`Growth — ${INR}4,999/outlet/month`}</option>
                    <option value="pro">{`Pro — ${INR}6,999/outlet/month`}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide mb-1.5 block text-white/50">
                    Anything else?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Your venue type, current setup, what you're looking for…"
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none text-white"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-semibold text-white text-sm transition-all hover:scale-[1.02] mt-2"
                  style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.35)' }}
                >
                  Request callback →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
