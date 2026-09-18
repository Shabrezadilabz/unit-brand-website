'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IMAGES, INR } from '@/lib/images';

const CYCLE_MS = 3000;

type CardId =
  | 'profile'
  | 'brunch'
  | 'wine'
  | 'review'
  | 'latte'
  | 'pub'
  | 'revenue'
  | 'wa'
  | 'dessert'
  | 'donut';

const ORDER: CardId[] = [
  'brunch',
  'profile',
  'wine',
  'review',
  'latte',
  'pub',
  'revenue',
  'wa',
  'dessert',
  'donut',
];

function SpotCard({
  id,
  active,
  className,
  children,
  baseRotate = 0,
  style,
}: {
  id: CardId;
  active: CardId;
  className?: string;
  children: React.ReactNode;
  baseRotate?: number;
  style?: React.CSSProperties;
}) {
  const isActive = active === id;
  return (
    <div
      className={`hero-spot-card ${isActive ? 'is-featured' : ''} ${className ?? ''}`}
      style={{
        ...style,
        ['--spot-r' as string]: `${baseRotate}deg`,
        // Inline animation so each feature cycle always restarts (no Framer / reduced-motion gate)
        animation: isActive
          ? 'hero-spot-feature 2.9s cubic-bezier(0.22, 1, 0.36, 1) forwards'
          : 'hero-spot-idle 4.5s ease-in-out infinite',
      }}
    >
      {children}
    </div>
  );
}

/** Figma dark hero — CSS spotlight collage (one card enlarges, floats, then next) */
export function FigmaHero() {
  const [active, setActive] = useState<CardId>('brunch');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((current) => {
        const i = ORDER.indexOf(current);
        return ORDER[(i + 1) % ORDER.length];
      });
      setTick((n) => n + 1);
    }, CYCLE_MS);
    return () => window.clearInterval(t);
  }, []);

  const focus = (id: CardId) => {
    setActive(id);
    setTick((n) => n + 1);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ background: '#0C0C0C' }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-glow-pulse"
        style={{
          width: 700,
          height: 700,
          background:
            'radial-gradient(ellipse at center, rgba(240,124,51,0.22) 0%, rgba(240,124,51,0.06) 55%, transparent 75%)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-up">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: 'rgba(0,163,160,0.15)',
                color: '#00A3A0',
                border: '1px solid rgba(0,163,160,0.25)',
              }}
            >
              Restaurant OS
            </div>
            <h1
              className="font-display font-black text-white leading-[0.92] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
            >
              GROW YOUR
              <br />
              <span style={{ color: '#FFB38E' }}>LOYAL GUESTS</span>
              <br />
              BY&nbsp;<span style={{ color: '#FFB38E' }}>3×</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              POS + Kitchen KDS + WhatsApp bill → review → loyalty. One OS for cafes, restaurants, pubs
              &amp; nightlife.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)' }}
              >
                Request demo →
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                See how it works
              </Link>
            </div>
          </div>

          {/* Desktop spotlight collage */}
          <div className="relative h-[560px] hidden lg:block overflow-visible" aria-hidden>
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none z-[5]"
              style={{
                background: 'radial-gradient(circle at 55% 45%, transparent 18%, rgba(0,0,0,0.45) 78%)',
              }}
            />

            <SpotCard
              key={active === 'profile' ? `profile-${tick}` : 'profile'}
              id="profile"
              active={active}
              baseRotate={2}
              className="absolute top-0 right-4 w-52 cursor-pointer"
              style={{ zIndex: 12 }}
            >
              <button type="button" className="w-full text-left" onClick={() => { focus('profile'); }}>
                <div
                  className="rounded-2xl p-4 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #2D1B69, #4C1D95)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={IMAGES.guest2}
                      alt=""
                      className="w-9 h-9 rounded-full object-cover border-2 border-white/30"
                    />
                    <div>
                      <p className="text-white text-xs font-semibold">Arjun R.</p>
                      <p className="text-purple-300 text-[10px]">TOP SPENDER · LOYAL</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 mt-3">
                    <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <p className="text-white text-sm font-bold">28</p>
                      <p className="text-purple-300 text-[9px]">Visits</p>
                    </div>
                    <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <p className="text-white text-sm font-bold">{INR}18k</p>
                      <p className="text-purple-300 text-[9px]">Spent</p>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </SpotCard>

            <SpotCard
              key={active === 'brunch' ? `brunch-${tick}` : 'brunch'}
              id="brunch"
              active={active}
              baseRotate={-5}
              className="absolute top-8 left-0 w-44 cursor-pointer"
              style={{ zIndex: 14 }}
            >
              <button type="button" className="w-full text-left" onClick={() => focus('brunch')}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={IMAGES.brunch} alt="" className="w-full h-28 object-cover" />
                  <div className="p-3" style={{ background: '#FEE6E0' }}>
                    <p className="font-display font-black text-xl" style={{ color: '#E11D48' }}>
                      25% OFF
                    </p>
                    <p
                      className="text-sm mt-0.5"
                      style={{
                        color: '#0F766E',
                        fontFamily: 'var(--font-unit), Caveat, cursive',
                        fontWeight: 700,
                      }}
                    >
                      Spice Garden
                    </p>
                  </div>
                </div>
              </button>
            </SpotCard>

            <SpotCard
              key={active === 'wine' ? `wine-${tick}` : 'wine'}
              id="wine"
              active={active}
              baseRotate={6}
              className="absolute top-0 left-[40%] w-28 cursor-pointer"
              style={{ zIndex: 13 }}
            >
              <button type="button" className="w-full" onClick={() => focus('wine')}>
                <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                  <img src={IMAGES.barWine} alt="" className="w-full h-40 object-cover" />
                  <div
                    className="absolute inset-x-0 bottom-0 p-2 text-[10px] font-bold text-white"
                    style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}
                  >
                    Wine night
                  </div>
                </div>
              </button>
            </SpotCard>

            <SpotCard
              key={active === 'review' ? `review-${tick}` : 'review'}
              id="review"
              active={active}
              baseRotate={3}
              className="absolute top-48 right-0 w-48 cursor-pointer"
              style={{ zIndex: 15 }}
            >
              <button type="button" className="w-full text-left" onClick={() => focus('review')}>
                <div className="rounded-2xl p-3.5 shadow-xl bg-white">
                  <p className="text-xs font-medium text-gray-600 mb-1.5">How was your experience?</p>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400">via WhatsApp · Spice Garden</p>
                </div>
              </button>
            </SpotCard>

            <SpotCard
              key={active === 'latte' ? `latte-${tick}` : 'latte'}
              id="latte"
              active={active}
              baseRotate={-7}
              className="absolute top-[220px] left-0 w-32 cursor-pointer"
              style={{ zIndex: 16 }}
            >
              <button type="button" className="w-full" onClick={() => focus('latte')}>
                <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                  <img src={IMAGES.latte} alt="" className="w-full h-32 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-[10px] font-extrabold text-white">FREE LATTE</p>
                </div>
              </button>
            </SpotCard>

            <SpotCard
              key={active === 'pub' ? `pub-${tick}` : 'pub'}
              id="pub"
              active={active}
              baseRotate={4}
              className="absolute bottom-32 right-14 w-36 cursor-pointer"
              style={{ zIndex: 17 }}
            >
              <button type="button" className="w-full text-left" onClick={() => focus('pub')}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={IMAGES.pubNight} alt="" className="w-full h-28 object-cover" />
                  <div className="p-2" style={{ background: '#EBE7FF' }}>
                    <p className="font-display font-black text-sm" style={{ color: '#4C1D95' }}>
                      HAPPY HOUR
                    </p>
                  </div>
                </div>
              </button>
            </SpotCard>

            <SpotCard
              key={active === 'revenue' ? `revenue-${tick}` : 'revenue'}
              id="revenue"
              active={active}
              baseRotate={-2}
              className="absolute bottom-12 left-6 w-44 cursor-pointer"
              style={{ zIndex: 18 }}
            >
              <button type="button" className="w-full text-left" onClick={() => focus('revenue')}>
                <div className="rounded-2xl p-4 shadow-2xl" style={{ background: '#001F25' }}>
                  <p className="text-xs font-medium mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Repeat Revenue
                  </p>
                  <p className="font-display font-bold text-2xl text-white">{INR}2,12,355</p>
                  <span className="text-xs font-semibold" style={{ color: '#00A3A0' }}>
                    +34% this month
                  </span>
                  <div className="flex items-end gap-1 mt-3 h-8">
                    {[40, 60, 50, 80, 65, 90, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 6 ? '#00A3A0' : 'rgba(0,163,160,0.3)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </button>
            </SpotCard>

            <SpotCard
              key={active === 'wa' ? `wa-${tick}` : 'wa'}
              id="wa"
              active={active}
              baseRotate={-3}
              className="absolute bottom-0 right-0 w-52 cursor-pointer"
              style={{ zIndex: 19 }}
            >
              <button type="button" className="w-full text-left" onClick={() => focus('wa')}>
                <div className="rounded-2xl p-3.5 shadow-xl" style={{ background: '#0A3622' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: '#25D366' }}
                    >
                      <span className="text-[9px] font-bold text-white">WA</span>
                    </div>
                    <p
                      className="text-white text-sm"
                      style={{ fontFamily: 'var(--font-unit), Caveat, cursive', fontWeight: 700 }}
                    >
                      Spice Garden
                    </p>
                  </div>
                  <div
                    className="rounded-lg p-2 text-xs leading-relaxed"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)' }}
                  >
                    Your GST bill is ready ✅
                    <br />
                    <span style={{ color: '#25D366' }}>Pay via UPI →</span>
                  </div>
                </div>
              </button>
            </SpotCard>

            <SpotCard
              key={active === 'dessert' ? `dessert-${tick}` : 'dessert'}
              id="dessert"
              active={active}
              baseRotate={8}
              className="absolute top-[150px] left-[36%] w-24 cursor-pointer"
              style={{ zIndex: 20 }}
            >
              <button type="button" className="w-full" onClick={() => focus('dessert')}>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img src={IMAGES.dessert} alt="" className="w-full h-24 object-cover" />
                </div>
              </button>
            </SpotCard>

            <SpotCard
              key={active === 'donut' ? `donut-${tick}` : 'donut'}
              id="donut"
              active={active}
              baseRotate={0}
              className="absolute top-[240px] left-[48%] w-20 h-20 cursor-pointer"
              style={{ zIndex: 21 }}
            >
              <button
                type="button"
                className="w-20 h-20 rounded-full shadow-xl flex items-center justify-center flex-col bg-white relative"
                onClick={() => focus('donut')}
              >
                <svg width="56" height="56" viewBox="0 0 56 56" className="absolute">
                  <circle cx="28" cy="28" r="22" fill="none" stroke="#E7ECF2" strokeWidth="5" />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="none"
                    stroke="#00A3A0"
                    strokeWidth="5"
                    strokeDasharray="93 138"
                    strokeLinecap="round"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                  />
                </svg>
                <p className="font-display font-black text-sm z-10" style={{ color: '#0B1220' }}>
                  68%
                </p>
                <p className="text-[8px] text-gray-500 z-10">repeat</p>
              </button>
            </SpotCard>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-[70]">
              {ORDER.map((id) => (
                <button
                  key={id}
                  type="button"
                  aria-label={`Focus ${id}`}
                  onClick={() => focus(id)}
                  className="rounded-full transition-all"
                  style={{
                    width: active === id ? 18 : 6,
                    height: 6,
                    background: active === id ? '#F07C33' : 'rgba(255,255,255,0.25)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mobile — one card at a time, pop in */}
          <div className="lg:hidden relative h-72">
            <div
              key={`${active}-${tick}`}
              className="hero-mobile-spot absolute inset-x-4 top-4 bottom-8 rounded-3xl overflow-hidden shadow-2xl"
            >
              {active === 'brunch' ||
              active === 'wine' ||
              active === 'latte' ||
              active === 'pub' ||
              active === 'dessert' ? (
                <img
                  src={
                    active === 'brunch'
                      ? IMAGES.brunch
                      : active === 'wine'
                        ? IMAGES.barWine
                        : active === 'latte'
                          ? IMAGES.latte
                          : active === 'pub'
                            ? IMAGES.pubNight
                            : IMAGES.dessert
                  }
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center p-6"
                  style={{
                    background:
                      active === 'profile'
                        ? 'linear-gradient(135deg, #2D1B69, #4C1D95)'
                        : active === 'wa'
                          ? '#0A3622'
                          : active === 'revenue'
                            ? '#001F25'
                            : '#fff',
                  }}
                >
                  <p
                    className="font-display font-black text-2xl text-center"
                    style={{ color: active === 'review' || active === 'donut' ? '#0B1220' : '#fff' }}
                  >
                    {active === 'profile' && 'Arjun R. · Loyal'}
                    {active === 'review' && '★★★★★ via WhatsApp'}
                    {active === 'revenue' && `${INR}2,12,355 repeat`}
                    {active === 'wa' && 'GST bill · Pay UPI'}
                    {active === 'donut' && '68% repeat guests'}
                  </p>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5">
              {ORDER.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => focus(id)}
                  className="rounded-full"
                  style={{
                    width: active === id ? 16 : 6,
                    height: 6,
                    background: active === id ? '#F07C33' : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <p className="text-white text-xs uppercase tracking-widest">Scroll</p>
        <div className="w-px h-8 bg-white animate-pulse" />
      </div>
    </section>
  );
}
