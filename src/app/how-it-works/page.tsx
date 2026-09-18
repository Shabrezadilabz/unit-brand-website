'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const processSteps = [
  {
    number: '01',
    title: 'Create touchpoints',
    body: 'Capture consent at close. Send a branded GST bill on WhatsApp — not a forgotten slip in a wallet.',
    points: ['Name + phone at settlement', 'Table QR for walk-ins', 'WhatsApp GST in ~30s'],
    phoneTitle: 'Bill closed.',
    color: '#D8F5EF',
  },
  {
    number: '02',
    title: 'Build guest memory',
    body: 'RFM personas, loyalty stars, visit history — auto-built from every bill. No loyalty app download.',
    points: ['RFM scoring', 'LOYAL / AT RISK tags', 'Stars without an app'],
    phoneTitle: 'Guest memory.',
    color: '#FFF2A8',
  },
  {
    number: '03',
    title: 'Launch the right campaign',
    body: 'South festivals, win-back, birthdays — UNIT-supervised and anti-spam. You focus on cooking.',
    points: ['Ugadi · Onam · Pongal · Vishu', 'Approve audience + offer', 'UNIT handles send'],
    phoneTitle: 'Next best reason.',
    color: '#EBE7FF',
  },
];

const flowSteps = [
  { num: '01', title: 'Waiter runs the floor', desc: 'Android POS — table-mapped, offline-first. Waiter punches order, sends to KDS.', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=640&h=480&fit=crop&auto=format', color: '#D8F5EF' },
  { num: '02', title: 'Chef cooks on KDS', desc: 'Kitchen Display shows every ticket in real time. Priority alerts, prep timers, station routing.', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=640&h=480&fit=crop&auto=format', color: '#FFF2A8' },
  { num: '03', title: 'Close bill with consent', desc: 'Waiter takes name + phone at checkout. One tap. Consent captured. Guest loop begins.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=480&fit=crop&auto=format', color: '#FEE6E0' },
  { num: '04', title: 'WhatsApp GST bill + UPI', desc: 'Branded WhatsApp GST bill lands fast. Guest pays via UPI inline.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&h=480&fit=crop&auto=format', color: '#EBE7FF' },
  { num: '05', title: 'Review → loyalty → return', desc: 'Auto review invite. Stars credited. Guest redeems next visit at the table.', img: 'https://images.unsplash.com/photo-1529543545094-091fcb97c4a6?w=640&h=480&fit=crop&auto=format', color: '#D8F5EF' },
];

export default function HowItWorksPage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % processSteps.length), 4000);
    return () => clearInterval(id);
  }, []);

  const active = processSteps[step];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Replit-style light process (combined with Figma motion) */}
      <section className="pt-28 pb-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: '#00A3A0' }}>
                How we do it
              </p>
              <h1 className="font-display font-black text-4xl md:text-5xl leading-[1.05]" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>
                Good service<br />should compound.
              </h1>
            </div>
            <p className="max-w-md text-base" style={{ color: '#526072' }}>
              UNIT connects the moments your team already owns, so each visit makes the next one easier to earn.
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
                  background: index === step ? '#00A3A0' : '#FFFFFF',
                  color: index === step ? '#FFFFFF' : '#0B1220',
                  border: index === step ? 'none' : '1px solid #E7ECF2',
                  boxShadow: index === step ? '0 10px 28px -12px rgba(0,163,160,0.55)' : undefined,
                }}
              >
                {item.number} / {item.title}
              </button>
            ))}
            <span className="ml-auto text-xs font-semibold" style={{ color: '#526072' }}>
              0{step + 1} — 03
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[28px] p-6 md:p-10" style={{ background: '#F4F6F9' }}>
            <div key={step} className="animate-fade-up">
              <p className="font-display font-black text-6xl mb-2" style={{ color: '#00A3A0', letterSpacing: '-0.04em' }}>
                {active.number}
              </p>
              <h2 className="font-display font-black text-3xl mb-3" style={{ color: '#0B1220' }}>
                {active.title}.
              </h2>
              <p className="text-base mb-5" style={{ color: '#526072' }}>{active.body}</p>
              <ul className="space-y-2">
                {active.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm" style={{ color: '#526072' }}>
                    <span style={{ color: '#00A3A0' }}>✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <div
                className="w-[260px] rounded-[2rem] p-3 shadow-2xl animate-scale-in"
                style={{ background: '#111', border: '3px solid rgba(255,255,255,0.12)' }}
                key={`phone-${step}`}
              >
                <div className="flex justify-between text-[10px] text-white/50 px-2 py-2">
                  <span>9:41</span>
                  <span>UNIT / {active.number}</span>
                </div>
                <div className="rounded-2xl p-4 min-h-[320px]" style={{ background: active.color }}>
                  <h4 className="font-display font-black text-xl mb-4" style={{ color: '#0B1220' }}>
                    {active.phoneTitle}
                  </h4>
                  {step === 0 && (
                    <>
                      <div className="rounded-xl bg-white p-3 mb-3 text-sm space-y-2" style={{ color: '#0B1220' }}>
                        <div className="flex justify-between"><span>Masala dosa × 2</span><b>₹320</b></div>
                        <div className="flex justify-between"><span>Filter coffee × 2</span><b>₹140</b></div>
                        <div className="flex justify-between border-t pt-2"><span>Total</span><b>₹460</b></div>
                      </div>
                      <div className="rounded-xl p-3 text-sm" style={{ background: '#DCFCE7', color: '#166534' }}>
                        Your GST bill from Spice Garden is ready. Pay securely with UPI.
                      </div>
                    </>
                  )}
                  {step === 1 && (
                    <>
                      <div className="rounded-xl p-4 mb-3" style={{ background: '#EBE7FF' }}>
                        <p className="font-bold text-sm">Arjun R.</p>
                        <p className="text-xs mt-1" style={{ color: '#665e83' }}>12 visits · 4.8 rating</p>
                        <p className="mt-3 tracking-widest" style={{ color: '#F07C33' }}>★★★★☆</p>
                      </div>
                      <div className="rounded-xl p-3 text-sm" style={{ background: '#D8F5EF', color: '#0F766E' }}>
                        You have 80 UNIT stars to redeem on your next visit.
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <div className="rounded-xl p-4 mb-3" style={{ background: '#FFF2A8' }}>
                        <p className="text-[11px] font-bold">Suggested for 42 guests</p>
                        <p className="font-display font-black text-2xl mt-2">Pongal week</p>
                        <p className="text-[10px] mt-2" style={{ color: '#755f00' }}>Approved · low frequency · local</p>
                      </div>
                      <div className="rounded-xl p-3 text-sm" style={{ background: '#FEE6E0', color: '#8e4938' }}>
                        Your table is waiting. Celebrate Pongal with us.
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figma-style five beats with lifestyle images */}
      <section className="py-20" style={{ background: '#F4F6F9' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: '#D5F5F3', color: '#0F766E' }}>Five beats</span>
            <h2 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>
              From waiter to WhatsApp<br />to return visit.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {flowSteps.map((s) => (
              <article
                key={s.num}
                className="grid md:grid-cols-[1fr_280px] gap-0 overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="p-7 md:p-9 flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-lg flex-shrink-0"
                    style={{ background: s.color, color: '#0F766E' }}>{s.num}</div>
                  <div>
                    <h3 className="font-display font-black text-xl mb-2" style={{ color: '#0B1220' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#526072' }}>{s.desc}</p>
                  </div>
                </div>
                <div className="relative min-h-[160px] md:min-h-full">
                  <Image src={s.img} alt={s.title} fill className="object-cover" sizes="280px" />
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)' }}>
              Book a South pilot demo →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
