'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IMAGES, INR } from '@/lib/images';

const processSteps = [
  {
    number: '01',
    title: 'Create touchpoints',
    body: 'Capture consent at close. Send a branded GST bill on WhatsApp — not a forgotten slip in a wallet.',
    points: ['Name + phone at settlement', 'Table QR for walk-ins', 'WhatsApp GST in ~30s'],
    phoneTitle: 'Bill closed.',
    waStatus: 'online',
    wa: {
      img: IMAGES.brunch,
      title: 'Your GST bill is ready',
      text: `Table 14 · Total ${INR}1,840. Pay securely with UPI.`,
      cta: 'Pay with UPI',
      time: '8:42 PM',
    },
  },
  {
    number: '02',
    title: 'Build guest memory',
    body: 'RFM personas, loyalty stars, visit history — auto-built from every bill. No loyalty app download.',
    points: ['RFM scoring', 'LOYAL / AT RISK tags', 'Stars without an app'],
    phoneTitle: 'Guest memory.',
    waStatus: 'typing…',
    wa: {
      img: IMAGES.latte,
      title: 'How was your experience?',
      text: 'Tap a star. 5★ goes to Google. Anything less comes straight to the owner.',
      cta: 'Rate your visit ★★★★★',
      time: '8:45 PM',
    },
  },
  {
    number: '03',
    title: 'Launch the right campaign',
    body: 'Weekend rush, birthdays, wine nights — UNIT-supervised and anti-spam. You focus on service.',
    points: ['Occasion packs', 'Approve audience + offer', 'UNIT handles send'],
    phoneTitle: 'Next best reason.',
    waStatus: 'business account',
    wa: {
      img: IMAGES.cocktail,
      title: 'Friday wine night · 20% off',
      text: 'Your usual table is waiting. Bring a friend — first pour on us.',
      cta: 'Book a table',
      time: '10:12 AM',
    },
  },
];

const flowSteps = [
  {
    num: '01',
    title: 'Staff runs the floor',
    desc: 'Android POS — table-mapped, offline-first. Orders punch straight to the pass.',
    img: IMAGES.fineDining,
  },
  {
    num: '02',
    title: 'Kitchen cooks on KDS',
    desc: 'Every ticket live. Priority alerts, prep timers, station routing.',
    img: IMAGES.kitchen,
  },
  {
    num: '03',
    title: 'Close bill with consent',
    desc: 'Name + phone at checkout. One tap. The guest loop begins.',
    img: IMAGES.cafe,
  },
  {
    num: '04',
    title: 'WhatsApp GST bill + UPI',
    desc: 'Branded bill lands fast. Guest pays via UPI inline.',
    img: IMAGES.barWine,
  },
  {
    num: '05',
    title: 'Review → loyalty → return',
    desc: 'Auto review invite. Stars credited. Guest redeems next visit at the table.',
    img: IMAGES.party,
  },
];

function WhatsAppPhone({
  template,
  status,
}: {
  template: { img: string; title: string; text: string; cta: string; time: string };
  status: string;
}) {
  return (
    <div className="phone phone-secondary" key={template.title}>
      <div className="phone-wa-shell">
        <div className="phone-wa-header">
          <div className="wa-avatar">SG</div>
          <div>
            <div className="wa-name">Spice Garden</div>
            <div className="wa-status">{status}</div>
          </div>
        </div>
        <div className="phone-wa-thread">
          <div className="wa-incoming">Thanks for dining with us tonight.</div>
          <div className="wa-tpl">
            <img src={template.img} alt="" />
            <div className="wa-tpl-body">
              <p className="wa-tpl-title">{template.title}</p>
              <p className="wa-tpl-text">{template.text}</p>
              <div className="wa-tpl-meta">
                <span className="wa-time">{template.time}</span>
                <span className="wa-time">✓✓</span>
              </div>
            </div>
            <div className="wa-tpl-btn">{template.cta}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % processSteps.length), 4500);
    return () => clearInterval(id);
  }, []);

  const active = processSteps[step];

  return (
    <div style={{ minHeight: '100vh', background: '#0C0C0C' }}>
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none opacity-80"
          style={{
            width: 640,
            height: 640,
            background:
              'radial-gradient(ellipse at center, rgba(240,124,51,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: '#00A3A0' }}>
                How we do it
              </p>
              <h1
                className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-white"
                style={{ letterSpacing: '-0.03em' }}
              >
                Good service
                <br />
                <span style={{ color: '#FFB38E' }}>should compound.</span>
              </h1>
            </div>
            <p className="max-w-md text-base" style={{ color: 'rgba(255,255,255,0.55)' }}>
              UNIT connects floor, kitchen, and WhatsApp — so every visit makes the next one easier to earn.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-10">
            {processSteps.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setStep(index)}
                className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all"
                style={{
                  background: index === step ? '#00A3A0' : 'rgba(255,255,255,0.06)',
                  color: index === step ? '#FFFFFF' : 'rgba(255,255,255,0.65)',
                  border: index === step ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {item.number} / {item.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold mb-2" style={{ color: '#00A3A0' }}>
                STEP {active.number}
              </p>
              <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
                {active.title}
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {active.body}
              </p>
              <ul className="space-y-2">
                {active.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F07C33' }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="phone-stage">
              <div className="phone" key={`ops-${step}`}>
                <div className="phone-top">
                  <span>9:41</span>
                  <span>UNIT / {active.number}</span>
                </div>
                <h4>{active.phoneTitle}</h4>
                {step === 0 && (
                  <>
                    <div className="ticket">
                      <div className="ticket-row">
                        <span>Truffle pasta × 2</span>
                        <b>{INR}1,280</b>
                      </div>
                      <div className="ticket-row">
                        <span>House wine × 2</span>
                        <b>{INR}560</b>
                      </div>
                      <div className="ticket-row">
                        <span>Total</span>
                        <b>{INR}1,840</b>
                      </div>
                    </div>
                    <div className="wa-bubble">Your GST bill is ready. Pay securely with UPI.</div>
                  </>
                )}
                {step === 1 && (
                  <>
                    <div className="ticket" style={{ background: 'var(--lilac)' }}>
                      <div style={{ fontWeight: 800, fontSize: 12 }}>Arjun R.</div>
                      <div style={{ marginTop: 8, color: '#665e83' }}>12 visits · 4.8 rating</div>
                      <div style={{ marginTop: 14, color: 'var(--orange)', letterSpacing: 2 }}>★★★★☆</div>
                    </div>
                    <div className="wa-bubble" style={{ background: 'var(--mint)', color: 'var(--teal-deep)' }}>
                      You have 80 UNIT stars to redeem on your next visit.
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="ticket" style={{ background: 'var(--butter)' }}>
                      <div style={{ fontWeight: 800, fontSize: 11 }}>Suggested for 42 guests</div>
                      <div style={{ marginTop: 11, fontFamily: 'var(--app-font-display)', fontSize: 22 }}>
                        Wine Friday
                      </div>
                      <div style={{ marginTop: 7, color: '#755f00', fontSize: 9 }}>
                        Approved · low frequency
                      </div>
                    </div>
                    <div className="wa-bubble" style={{ background: '#fce9e1', color: '#8e4938' }}>
                      Your table is waiting. Celebrate Friday with us.
                    </div>
                  </>
                )}
              </div>
              <WhatsAppPhone template={active.wa} status={active.waStatus} />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24" style={{ background: '#001F25' }}>
        <div className="max-w-6xl mx-auto px-6 pt-16">
          <h2 className="font-display font-black text-3xl text-white mb-10 text-center" style={{ letterSpacing: '-0.03em' }}>
            From first order to return visit
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {flowSteps.map((s) => (
              <div key={s.num} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <img src={s.img} alt="" className="w-full h-28 object-cover" />
                <div className="p-4">
                  <p className="text-xs font-bold mb-1" style={{ color: '#00A3A0' }}>
                    {s.num}
                  </p>
                  <p className="font-display font-bold text-sm text-white mb-1">{s.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/book-demo"
              className="inline-flex items-center px-8 py-3.5 rounded-full font-semibold text-white text-sm hover:scale-105 transition-all"
              style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)' }}
            >
              Request demo →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
