'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IMAGES, INR } from '@/lib/images';

const loopSteps = [
  {
    title: 'Bill close',
    outcome: 'Consent captured',
    desc: 'Waiter takes name + phone at settlement. One tap. No QR scavenger hunt.',
    color: '#D8F5EF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </svg>
    ),
    wa: {
      title: 'Table closed',
      text: 'Name + phone saved. Guest loop started for Table 14.',
      cta: null as string | null,
      img: null as string | null,
      bubble: 'Arjun R. · +91 98XXX · consent ✓',
    },
  },
  {
    title: 'WhatsApp GST bill',
    outcome: 'Pay in chat',
    desc: 'Branded bill lands in ~30 seconds. Guest pays with UPI inline — no paper.',
    color: '#FFF2A8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#927d00" strokeWidth="2" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    wa: {
      title: 'Your GST bill is ready',
      text: `Table 14 · Total ${INR}1,840. Pay securely with UPI.`,
      cta: 'Pay with UPI',
      img: IMAGES.brunch,
      bubble: null,
    },
  },
  {
    title: 'Review invite',
    outcome: 'Honest feedback',
    desc: '5★ goes to Google. Anything less comes to you privately — never ghosted in public.',
    color: '#FEE6E0',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#E11D48">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    wa: {
      title: 'How was your experience?',
      text: 'Tap a star. 5★ → Google. Under 4 → owner inbox.',
      cta: 'Rate ★★★★★',
      img: IMAGES.latte,
      bubble: null,
    },
  },
  {
    title: 'Loyalty stars',
    outcome: 'No app needed',
    desc: 'Stars auto-credit every visit. Guest sees balance on WhatsApp — never downloads anything.',
    color: '#EBE7FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5b4d9a" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    wa: {
      title: '80 stars ready',
      text: 'Credited from tonight\'s visit. Show this next time you dine.',
      cta: 'View my stars',
      img: IMAGES.cocktail,
      bubble: null,
    },
  },
  {
    title: 'Redeem at table',
    outcome: 'Floor applies it',
    desc: 'Waiter sees redeemable stars in POS. Guest redeems at the table — no card, no app.',
    color: '#D8F5EF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="8" width="18" height="13" rx="2" />
        <path d="M12 8V3M8 3h8" />
      </svg>
    ),
    wa: {
      title: 'Redeem at Spice Garden',
      text: 'Show this code to your waiter. Discount applied in POS.',
      cta: 'Show to waiter',
      img: IMAGES.fineDining,
      bubble: null,
    },
  },
];

export default function GuestLoop() {
  const [active, setActive] = useState(1);
  const step = loopSteps[active];
  const wa = step.wa;

  return (
    <div className="pt-24 pb-20 relative overflow-hidden" style={{ background: '#0C0C0C', minHeight: '100vh' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header — one job */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: 'rgba(0,163,160,0.15)',
              color: '#00A3A0',
              border: '1px solid rgba(0,163,160,0.25)',
            }}
          >
            Guest Loop
          </span>
          <h1
            className="font-display font-black text-4xl md:text-5xl text-white mb-4 leading-[1.05]"
            style={{ letterSpacing: '-0.03em' }}
          >
            The loop that
            <br />
            <span style={{ color: '#FFB38E' }}>starts at the bill</span>
          </h1>
          <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
            No loyalty app. Just WhatsApp — five clear moments from close to return.
          </p>
        </div>

        {/* At-a-glance strip — clarity */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14 px-2"
          aria-label="Loop overview"
        >
          {loopSteps.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setActive(i)}
              className="flex items-center gap-2 transition-opacity"
              style={{ opacity: active === i ? 1 : 0.45 }}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black"
                style={{
                  background: active === i ? '#00A3A0' : 'rgba(255,255,255,0.1)',
                  color: '#fff',
                }}
              >
                {i + 1}
              </span>
              <span className="text-xs font-semibold text-white hidden sm:inline">{s.title}</span>
              {i < loopSteps.length - 1 && (
                <span className="text-white/30 mx-1 hidden md:inline" aria-hidden>
                  →
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Main: timeline + WhatsApp preview */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Timeline — Figma clarity, improved */}
          <div>
            {loopSteps.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className="w-full text-left flex gap-5 items-start mb-2 rounded-2xl p-3 transition-all"
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                    border: isActive ? '1px solid rgba(0,163,160,0.35)' : '1px solid transparent',
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: s.color }}
                    >
                      {s.icon}
                    </div>
                    {i < loopSteps.length - 1 && (
                      <div
                        className="w-px flex-1 mt-2"
                        style={{ background: 'rgba(0,163,160,0.35)', minHeight: 28 }}
                      />
                    )}
                  </div>
                  <div className="pt-2 pb-4 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#00A3A0' }}>
                        Step {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                        style={{ background: s.color, color: '#0B1220' }}
                      >
                        {s.outcome}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-1">{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {s.desc}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="flex items-center gap-3 ml-4 mt-2 pl-3">
              <div className="w-14 flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A3A0" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 12a9 9 0 0 0 9 9 9 9 0 0 0 6-2.3" />
                  <path d="M21 3v6h-6" />
                  <path d="M21 9a9 9 0 0 0-9-6 9 9 0 0 0-6 2.3" />
                </svg>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#00A3A0' }}>
                Guest returns — loop repeats automatically
              </p>
            </div>
          </div>

          {/* WhatsApp preview — shows what the guest sees */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
              What the guest sees · Step {String(active + 1).padStart(2, '0')}
            </p>
            <div className="flex justify-center">
              <div className="phone phone-secondary" style={{ width: 250, transform: 'none' }} key={active}>
                <div className="phone-wa-shell">
                  <div className="phone-wa-header">
                    <div className="wa-avatar">SG</div>
                    <div>
                      <div className="wa-name">Spice Garden</div>
                      <div className="wa-status">WhatsApp · business</div>
                    </div>
                  </div>
                  <div className="phone-wa-thread" style={{ minHeight: 360 }}>
                    {wa.bubble ? (
                      <div className="wa-incoming">{wa.bubble}</div>
                    ) : (
                      <>
                        <div className="wa-incoming">Thanks for visiting us tonight.</div>
                        <div className="wa-tpl">
                          {wa.img && <img src={wa.img} alt="" />}
                          <div className="wa-tpl-body">
                            <p className="wa-tpl-title">{wa.title}</p>
                            <p className="wa-tpl-text">{wa.text}</p>
                            <div className="wa-tpl-meta">
                              <span className="wa-time">Now</span>
                              <span className="wa-time">✓✓</span>
                            </div>
                          </div>
                          {wa.cta && <div className="wa-tpl-btn">{wa.cta}</div>}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs mt-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Tap a step on the left to preview that message
            </p>
          </div>
        </div>

        <div
          className="mt-14 p-6 rounded-2xl max-w-2xl mx-auto"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-sm text-center" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <span className="font-semibold text-white">Anti-spam built-in.</span> Consent at checkout. STOP
            honoured. Campaigns are UNIT-supervised.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)' }}
          >
            See the loop in action →
          </Link>
        </div>
      </div>
    </div>
  );
}
