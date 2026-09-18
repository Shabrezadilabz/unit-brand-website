'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* â”€â”€â”€ Reveal hook â”€â”€â”€ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* â”€â”€â”€ Count-up hook â”€â”€â”€ */
function useCountUp(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(eased * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
}

/* â”€â”€â”€ SECTION: Hero â”€â”€â”€ */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ background: '#0C0C0C' }}
    >
      {/* Orange glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-glow-pulse"
        style={{
          width: 700, height: 700,
          background: 'radial-gradient(ellipse at center, rgba(240,124,51,0.22) 0%, rgba(240,124,51,0.06) 55%, transparent 75%)',
          borderRadius: '50%',
        }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left â€” copy */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{ background: 'rgba(0,163,160,0.15)', color: '#00A3A0', border: '1px solid rgba(0,163,160,0.25)' }}>
              ðŸ‡®ðŸ‡³ South-first Restaurant OS
            </div>
            <h1 className="font-display font-black text-white leading-[0.92] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
              GROW YOUR<br />
              <span style={{ color: '#FFB38E' }}>LOYAL GUESTS</span><br />
              BY&nbsp;<span style={{ color: '#FFB38E' }}>3Ã—</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              POS + Kitchen KDS + WhatsApp bill â†’ review â†’ loyalty. One OS for South dine-in â€” built in Bengaluru, for Bengaluru restaurants.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/book-demo"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ background: '#F07C33', boxShadow: '0 6px 24px rgba(240,124,51,0.4)' }}>
                Request demo â†’
              </Link>
              <Link href="/how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
                style={{ color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.2)' }}>
                See how it works
              </Link>
            </div>
          </div>

          {/* Right â€” floating collage */}
          <div className="relative h-[480px] hidden lg:block" style={{ animationDelay: '0.3s' }}>
            {/* Guest profile card */}
            <div className="absolute top-0 right-8 w-52 rounded-2xl p-4 animate-float shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #2D1B69, #4C1D95)', border: '1px solid rgba(255,255,255,0.15)', animationDelay: '0s' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center text-xs font-bold text-purple-900">AR</div>
                <div>
                  <p className="text-white text-xs font-semibold">Arjun R.</p>
                  <p className="text-purple-300 text-[10px]">TOP SPENDER Â· LOYAL</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 mt-3">
                <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <p className="text-white text-sm font-bold">28</p>
                  <p className="text-purple-300 text-[9px]">Visits</p>
                </div>
                <div className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <p className="text-white text-sm font-bold">â‚¹18k</p>
                  <p className="text-purple-300 text-[9px]">Spent</p>
                </div>
              </div>
              <div className="mt-2 flex gap-1">
                {['â˜…','â˜…','â˜…','â˜…','â˜…'].map((s,i)=><span key={i} className="text-yellow-400 text-xs">{s}</span>)}
              </div>
            </div>

            {/* Offer tile */}
            <div className="absolute top-12 left-0 w-44 rounded-2xl overflow-hidden animate-float2 shadow-2xl"
              style={{ animationDelay: '0.8s' }}>
              <img src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=240&fit=crop&auto=format" alt="Dosa" className="w-full h-20 object-cover"/>
              <div className="p-3" style={{ background: '#FEE6E0' }}>
                <p className="font-display font-black text-xl" style={{ color: '#E11D48' }}>25% OFF</p>
                <p className="text-xs text-gray-600 mt-0.5">Spice Garden Â· Indiranagar</p>
              </div>
            </div>

            {/* Rating card */}
            <div className="absolute top-48 right-0 w-48 rounded-2xl p-3.5 animate-float shadow-xl"
              style={{ background: 'white', animationDelay: '1.2s' }}>
              <p className="text-xs font-medium text-gray-600 mb-1.5">How was your experience?</p>
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i=>(
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[10px] text-gray-400">via WhatsApp Â· Spice Garden</p>
            </div>

            {/* Donut / revenue card */}
            <div className="absolute bottom-16 left-4 w-44 rounded-2xl p-4 animate-float3 shadow-2xl"
              style={{ background: '#001F25', animationDelay: '0.4s' }}>
              <p className="text-xs font-medium mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Repeat Revenue</p>
              <p className="font-display font-bold text-2xl text-white">â‚¹2,12,355</p>
              <div className="flex items-center gap-1 mt-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#00A3A0">
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
                <span className="text-xs font-semibold" style={{ color: '#00A3A0' }}>+34% this month</span>
              </div>
              {/* Mini bars */}
              <div className="flex items-end gap-1 mt-3 h-8">
                {[40,60,50,80,65,90,75].map((h,i)=>(
                  <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i===6?'#00A3A0':'rgba(0,163,160,0.3)' }}/>
                ))}
              </div>
            </div>

            {/* WhatsApp strip */}
            <div className="absolute bottom-4 right-4 w-48 rounded-2xl p-3.5 animate-float2 shadow-xl"
              style={{ background: '#0A3622', animationDelay: '1.6s' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#25D366' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <p className="text-white text-xs font-semibold">Spice Garden</p>
              </div>
              <div className="rounded-lg p-2 text-xs leading-relaxed" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)' }}>
                Your GST bill is ready âœ…<br/>
                <span style={{ color: '#25D366' }}>Pay via UPI â†’</span>
              </div>
            </div>

            {/* Repeat donut badge */}
            <div className="absolute top-[200px] left-14 w-20 h-20 rounded-full animate-float shadow-xl flex items-center justify-center flex-col"
              style={{ background: 'white', animationDelay: '2s' }}>
              <svg width="56" height="56" viewBox="0 0 56 56" className="absolute">
                <circle cx="28" cy="28" r="22" fill="none" stroke="#E7ECF2" strokeWidth="5"/>
                <circle cx="28" cy="28" r="22" fill="none" stroke="#00A3A0" strokeWidth="5"
                  strokeDasharray="93 138" strokeLinecap="round"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}/>
              </svg>
              <p className="font-display font-black text-sm text-ink z-10">68%</p>
              <p className="text-[8px] text-gray-500 z-10">repeat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <p className="text-white text-xs uppercase tracking-widest" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Scroll</p>
        <div className="w-px h-8 bg-white animate-pulse"/>
      </div>
    </section>
  );
}

/* â”€â”€â”€ SECTION: Trust marquee â”€â”€â”€ */
const brandLogos = [
  'House of Tikka', 'Filter & Co.', 'Spice Garden', 'Dosa Hub', 'Chai Walah',
  'Coastal Kitchen', 'Briyani Bros', 'South Story', 'Masala Monk', 'The Udupi Co.',
];

function TrustLogos() {
  const doubled = [...brandLogos, ...brandLogos];
  return (
    <section className="py-10 overflow-hidden border-y" style={{ background: '#F4F6F9', borderColor: '#E7ECF2' }}>
      <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#526072' }}>
        Trusted by leading restaurant chains
      </p>
      <div className="relative flex">
        <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-display font-semibold text-sm"
              style={{ background: 'white', color: '#526072', border: '1px solid #E7ECF2', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#00A3A0' }}/>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€ SECTION: How we do it â”€â”€â”€ */
const howSteps = [
  {
    num: '01',
    title: 'CREATE TOUCHPOINTS',
    desc: 'Waiter takes name + phone at bill close. WhatsApp GST bill lands in 30 seconds. Table QR for walk-ins.',
    color: '#D8F5EF',
    phone: (
      <div className="bg-gray-900 rounded-3xl p-3 h-full flex flex-col gap-2">
        <div className="flex items-center gap-2 p-2 rounded-xl" style={{ background: '#0A3622' }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs" style={{ background: '#25D366', color: 'white', fontFamily: 'Outfit' }}>SG</div>
          <div>
            <p className="text-white text-xs font-semibold">Spice Garden</p>
            <p className="text-green-400 text-[10px]">GST Bill Ready âœ…</p>
          </div>
        </div>
        <div className="p-2 rounded-xl text-xs text-white" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <p className="text-gray-400 text-[10px] mb-1">Today Â· 8:43 PM</p>
          <p>Your bill for â‚¹840 is ready.</p>
          <p className="text-green-400 mt-1">Pay via UPI â†’</p>
        </div>
      </div>
    ),
  },
  {
    num: '02',
    title: 'BUILD GUEST MEMORY',
    desc: 'RFM scoring, loyalty stars, visit history â€” all auto-built from the bill. No loyalty app download needed.',
    color: '#FFF2A8',
    phone: (
      <div className="bg-gray-900 rounded-3xl p-3 h-full flex flex-col gap-2">
        <p className="text-white text-xs font-bold mb-1" style={{ fontFamily: 'Outfit' }}>Guest Profile</p>
        <div className="flex items-center justify-between p-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div>
            <p className="text-white text-xs font-semibold">Arjun R.</p>
            <p className="text-teal-300 text-[10px]">LOYAL Â· TOP SPENDER</p>
          </div>
          <div className="text-yellow-400 text-xs">â˜…â˜…â˜…â˜…â˜…</div>
        </div>
        <div className="grid grid-cols-3 gap-1 mt-1">
          {[['28','Visits'],['â‚¹18k','Spent'],['4.8','Avg â˜…']].map(([v,l])=>(
            <div key={l} className="rounded-lg p-1.5 text-center" style={{ background: 'rgba(0,163,160,0.15)' }}>
              <p className="text-white text-xs font-bold">{v}</p>
              <p className="text-[9px]" style={{ color: '#00A3A0' }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'LAUNCH THE RIGHT CAMPAIGNS',
    desc: 'South festivals, win-back flows, birthday offers â€” all UNIT-supervised and anti-spam. You focus on cooking.',
    color: '#EBE7FF',
    phone: (
      <div className="bg-gray-900 rounded-3xl p-3 h-full flex flex-col gap-2">
        <p className="text-white text-xs font-bold mb-1" style={{ fontFamily: 'Outfit' }}>Campaign Â· Onam 2025</p>
        <div className="p-2 rounded-xl text-xs" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <p className="text-gray-300">ðŸŽ‰ Onam Sadhya Special!</p>
          <p className="text-gray-400 text-[10px] mt-1">20% off on sadhya platters Â· Book now</p>
          <div className="mt-2 flex gap-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold" style={{ background: '#F07C33', color: 'white' }}>Book now</span>
            <span className="px-2 py-0.5 rounded text-[10px]" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}>Later</span>
          </div>
        </div>
        <div className="flex gap-2 text-[10px]">
          <span className="px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,163,160,0.2)', color: '#00A3A0' }}>482 sent</span>
          <span className="px-2 py-0.5 rounded-full" style={{ background: 'rgba(37,211,102,0.15)', color: '#25D366' }}>68% opened</span>
        </div>
      </div>
    ),
  },
];

function HowWeDoIt() {
  const [active, setActive] = useState(0);
  const ref = useReveal();

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % 3), 3500);
    return () => clearInterval(t);
  }, []);

  const step = howSteps[active];

  return (
    <section className="py-24" style={{ background: '#0C0C0C' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal" ref={ref}>
          <p className="text-center font-display font-black text-white text-4xl md:text-5xl mb-4" style={{ letterSpacing: '-0.03em' }}>
            HOW WE DO IT
          </p>
          <p className="text-center text-lg mb-12" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Three steps. Zero friction. One WhatsApp thread.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Step tabs */}
          <div className="flex flex-col gap-4">
            {howSteps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 ${active === i ? 'scale-100' : 'opacity-50 hover:opacity-70 scale-[0.97]'}`}
                style={{
                  background: active === i ? s.color : 'rgba(255,255,255,0.04)',
                  border: active === i ? 'none' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <p className="font-display font-black text-xs mb-1" style={{ color: active === i ? '#526072' : 'rgba(255,255,255,0.3)' }}>STEP {s.num}</p>
                <p className="font-display font-black text-lg mb-1" style={{ color: active === i ? '#0B1220' : 'rgba(255,255,255,0.7)' }}>{s.title}</p>
                {active === i && <p className="text-sm leading-relaxed" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.desc}</p>}
              </button>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center" key={active}>
            <div className="relative w-64 h-[420px] animate-scale-in">
              <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl"
                style={{ background: '#111', border: '3px solid rgba(255,255,255,0.12)' }}>
                {/* Phone notch */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-20 h-5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}/>
                </div>
                <div className="px-3 pb-3 flex-1" style={{ height: 'calc(100% - 48px)' }}>
                  {step.phone}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0,1,2].map(i => (
            <button key={i} onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: active===i?28:8, height: 8, background: active===i?'#00A3A0':'rgba(255,255,255,0.2)' }}/>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€ SECTION: How UNIT helps (pastel panels) â”€â”€â”€ */
const panels = [
  {
    bg: '#FFF2A8',
    headline: 'Build a loyal base that drives revenue',
    bullets: ['RFM-scored guest profiles, auto-built from every bill', 'Loyalty stars that guests redeem at the table â€” no app download', 'Floor POS + KDS talking to one guest record'],
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&h=700&fit=crop&auto=format',
    href: '/guest-loop',
    alt: 'Filter coffee South India',
  },
  {
    bg: '#FEE6E0',
    headline: 'Turn every bill into a lasting relationship',
    bullets: ['WhatsApp GST bill in 30 seconds â€” no extra hardware', 'Review invite lands while the flavour is fresh', 'Win-back flows for guests who drifted away'],
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=700&fit=crop&auto=format',
    href: '/guest-loop',
    alt: 'Banana leaf meal South India',
    reverse: true,
  },
  {
    bg: '#D8F5EF',
    headline: 'Stay top-of-mind â€” South festival packs included',
    bullets: ['Pre-built Ugadi, Onam, Pongal, Vishu, Diwali campaigns', 'UNIT-supervised â€” no spam, no brand risk', 'Branded PWA â€” no Play Store tax'],
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=700&fit=crop&auto=format',
    href: '/features',
    alt: 'South Indian restaurant',
  },
];

function HowUnitHelps() {
  return (
    <section className="py-20" style={{ background: '#F4F6F9' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>
            How UNIT helps
          </h2>
          <p className="text-lg" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Not another CRM bolt-on. An OS that owns the floor and runs the loop.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {panels.map((p, i) => (
            <PanelCard key={i} p={p} delay={i+1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PanelCard({ p, delay }: { p: typeof panels[0]; delay: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} rounded-3xl overflow-hidden grid md:grid-cols-2 items-center`}
      style={{ background: p.bg, boxShadow: '0 14px 40px -16px rgba(11,18,32,0.12)' }}
    >
      <div className={`p-10 lg:p-14 ${p.reverse ? 'md:order-2' : ''}`}>
        <h3 className="font-display font-black text-2xl md:text-3xl mb-5 leading-tight" style={{ color: '#0B1220', letterSpacing: '-0.02em' }}>
          {p.headline}
        </h3>
        <ul className="space-y-3 mb-8">
          {p.bullets.map((b, j) => (
            <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <span className="mt-1 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: '#00A3A0' }}>
                <svg width="8" height="8" viewBox="0 0 12 12" fill="white"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              </span>
                        {b}
            </li>
          ))}
        </ul>
        <Link href={p.href}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
          style={{ color: '#00A3A0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Learn more <span>â†’</span>
        </Link>
      </div>
      <div className={`relative h-60 md:h-full min-h-[280px] ${p.reverse ? 'md:order-1' : ''}`}>
        <img src={p.img} alt={p.alt} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(to right, ${p.bg}, transparent)` }}/>
      </div>
    </div>
  );
}

/* â”€â”€â”€ SECTION: All the tools â”€â”€â”€ */
const tools = [
  {
    id: 'pos',
    label: 'Floor POS',
    icon: 'ðŸ½ï¸',
    title: 'The floor is yours',
    bullets: ['Table-mapped waiter app â€” Android POS', 'Split bills, merge tables, custom modifiers', 'Works offline â€” service never stops'],
    color: '#D8F5EF',
  },
  {
    id: 'kds',
    label: 'Kitchen KDS',
    icon: 'ðŸ”¥',
    title: 'Chef sees every ticket',
    bullets: ['Real-time order display for kitchen', 'Priority alerts, prep timers, station routing', 'Integrated with floor POS â€” no double entry'],
    color: '#FFF2A8',
  },
  {
    id: 'wa',
    label: 'WhatsApp loop',
    icon: 'ðŸ’¬',
    title: 'The loop starts at the bill',
    bullets: ['Branded WhatsApp GST bill + UPI pay', 'Auto review invite â€” 5-star to Google, <4 to you', 'Loyalty star credit on every visit'],
    color: '#FEE6E0',
  },
  {
    id: 'crm',
    label: 'Guest CRM',
    icon: 'ðŸ‘¤',
    title: 'Know every regular',
    bullets: ['RFM scoring, visit history, spend tiers', 'Auto-tagged LOYAL / AT RISK / LOST', 'Filter, export, and action in one screen'],
    color: '#EBE7FF',
  },
  {
    id: 'campaigns',
    label: 'Campaigns',
    icon: 'ðŸ“£',
    title: 'UNIT-supervised. Spam-free.',
    bullets: ['South festival packs â€” Ugadi, Onam, Pongal, Vishu', 'Win-back + birthday automation', 'Per-send pricing â€” no monthly blast bloat'],
    color: '#D8F5EF',
  },
  {
    id: 'ai',
    label: 'AI insights',
    icon: 'ðŸ“Š',
    title: 'The numbers tell you what to do',
    bullets: ['Daily ops summary â€” floor, kitchen, guests', 'Revenue trend + repeat rate dashboard', 'Best-seller, peak-hour, churn risk alerts'],
    color: '#FFF2A8',
  },
];

function AllTools() {
  const [active, setActive] = useState(0);
  const ref = useReveal();
  const tool = tools[active];

  return (
    <section className="py-24" style={{ background: '#001F25' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-14" ref={ref}>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-3" style={{ letterSpacing: '-0.03em' }}>
            All the tools
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            One OS. Six modules. Zero separate subscriptions.
          </p>
        </div>

        {/* Tab row */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tools.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${active === i ? 'text-ink' : 'text-white/50 hover:text-white/80'}`}
              style={{
                background: active === i ? tool.color : 'rgba(255,255,255,0.06)',
                border: active === i ? 'none' : '1px solid rgba(255,255,255,0.09)',
              }}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        {/* Active tool card */}
        <div className="tab-panel rounded-3xl p-10 md:p-14 max-w-2xl mx-auto"
          key={active}
          style={{ background: tool.color, boxShadow: '0 28px 70px -24px rgba(0,31,37,0.45)' }}>
          <p className="font-display font-black text-3xl md:text-4xl mb-6 leading-tight" style={{ color: '#0B1220', letterSpacing: '-0.02em' }}>
            {tool.title}
          </p>
          <ul className="space-y-4 mb-8">
            {tool.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-base" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                <span className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: '#00A3A0' }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
          <Link href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all hover:scale-105"
            style={{ background: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Explore {tool.label} â†’
          </Link>
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€ SECTION: Stats â”€â”€â”€ */
function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { val, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display font-black text-5xl md:text-6xl stat-number" style={{ color: '#0B1220', letterSpacing: '-0.04em' }}>
        {val}{suffix}
      </p>
      <p className="text-sm mt-2" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{label}</p>
    </div>
  );
}

function Stats() {
  const ref = useReveal();
  return (
    <section className="py-20 border-y" style={{ background: '#fff', borderColor: '#E7ECF2' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-12" ref={ref}>
          <h2 className="font-display font-black text-3xl mb-2" style={{ color: '#0B1220', letterSpacing: '-0.02em' }}>Why restaurants love UNIT</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <Stat target={91} suffix="%" label="Floor ops accuracy after UNIT go-live" />
          <Stat target={45} suffix="%" label="Increase in repeat guest visits" />
          <Stat target={3} suffix="Ã—" label="Revenue from loyal guest base" />
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€ SECTION: Results carousel â”€â”€â”€ */
const results = [
  { name: 'Spice Garden', location: 'Indiranagar, Bengaluru', metric: 'â‚¹4.2L', label: 'repeat revenue / month', quote: 'UNIT turned our bill into a marketing channel. We didn\'t change a thing â€” the loop just works.', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=500&fit=crop&auto=format' },
  { name: 'Filter & Co.', location: 'Koramangala, Bengaluru', metric: '68%', label: 'repeat visit rate', quote: 'We went from zero guest data to knowing every regular by name, spend, and favourite dish.', img: 'https://images.unsplash.com/photo-1529543545094-091fcb97c4a6?w=800&h=500&fit=crop&auto=format' },
  { name: 'House of Tikka', location: 'JP Nagar, Bengaluru', metric: '2.8Ã—', label: 'loyal guest growth', quote: 'The Onam campaign drove 34 table bookings in 48 hours. UNIT knew exactly who to reach.', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format' },
];

function RealResults() {
  const [active, setActive] = useState(0);
  const r = results[active];
  const ref = useReveal();

  return (
    <section className="py-20" style={{ background: '#F4F6F9' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-12" ref={ref}>
          <h2 className="font-display font-black text-4xl mb-3" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>Real results</h2>
          <p style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>South India pilots â€” fictional data, real outcomes.</p>
        </div>
        <div className="rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-xl tab-panel" key={active}
          style={{ background: 'white' }}>
          <img src={r.img} alt={r.name} className="w-full h-52 md:h-full object-cover"/>
          <div className="p-10">
            <p className="font-display font-black text-5xl mb-1" style={{ color: '#00A3A0', letterSpacing: '-0.04em' }}>{r.metric}</p>
            <p className="text-sm mb-6" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{r.label}</p>
            <blockquote className="text-base leading-relaxed mb-6 italic" style={{ color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              "{r.quote}"
            </blockquote>
            <div>
              <p className="font-semibold text-sm" style={{ color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{r.name}</p>
              <p className="text-xs" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{r.location}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {results.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="rounded-full transition-all"
              style={{ width: active===i?28:8, height: 8, background: active===i?'#00A3A0':'#D5F5F3' }}/>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€ SECTION: Testimonials â”€â”€â”€ */
const testimonials = [
  { name: 'Priya Nair', role: 'Owner Â· Coastal Kitchen, Koramangala', quote: 'We\'d tried three other systems. UNIT is the first one where the waiter and the owner see the same picture.', stars: 5 },
  { name: 'Ravi Shankar', role: 'GM Â· Briyani Bros, Jayanagar', quote: 'The WhatsApp bill alone saved us â‚¹6,000/month in paper bills. The guest loop is a bonus we didn\'t expect.', stars: 5 },
  { name: 'Deepika M.', role: 'Owner Â· South Story, HSR Layout', quote: 'Onam campaign sent by UNIT. 40 covers booked in 2 days. I didn\'t write a single message.', stars: 5 },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useReveal();

  return (
    <section className="py-20" style={{ background: 'white' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-12" ref={ref}>
          <h2 className="font-display font-black text-4xl mb-3" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>What restaurateurs say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className={`rounded-2xl p-7 transition-all duration-300 cursor-pointer ${active===i?'shadow-xl scale-[1.02]':'hover:shadow-md'}`}
              style={{ background: active===i?'#D5F5F3':'#F4F6F9', border: active===i?'1px solid #00A3A0':'1px solid transparent' }}
              onClick={() => setActive(i)}>
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s=>(
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s<=t.stars?'#F59E0B':'#E7ECF2'}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{t.name}</p>
                <p className="text-xs mt-0.5" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€ SECTION: Pricing teaser â”€â”€â”€ */
const plans = [
  { name: 'Starter', price: 'â‚¹2,999', alias: 'BASIC', features: ['Floor POS (1 outlet)', 'Kitchen KDS', 'WhatsApp GST bill', 'Guest CRM (up to 1,000)'] },
  { name: 'Growth', price: 'â‚¹4,999', alias: 'GROWTH', popular: true, features: ['Everything in Starter', 'Unlimited guest CRM', 'Campaigns + festival packs', 'AI insights dashboard'] },
  { name: 'Pro', price: 'â‚¹6,999', alias: 'PRO', features: ['Everything in Growth', 'Multi-outlet dashboard', 'Influencer & managed IG', 'Priority UNIT onboarding'] },
];

function PricingTeaser() {
  const ref = useReveal();
  return (
    <section className="py-20" style={{ background: '#F4F6F9' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-12" ref={ref}>
          <h2 className="font-display font-black text-4xl mb-3" style={{ color: '#0B1220', letterSpacing: '-0.03em' }}>Simple outlet pricing</h2>
          <p style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Per outlet / per month. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <div key={i}
              className={`rounded-3xl p-8 relative transition-all hover:scale-[1.02] ${p.popular ? 'pricing-popular' : ''}`}
              style={{ background: 'white', boxShadow: p.popular ? undefined : '0 4px 20px rgba(0,0,0,0.06)' }}>
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: '#00A3A0' }}>Most popular</span>
              )}
              <p className="font-display font-bold text-lg mb-1" style={{ color: '#0B1220' }}>{p.name}</p>
              <p className="font-display font-black text-4xl mb-1" style={{ color: '#0B1220', letterSpacing: '-0.04em' }}>{p.price}</p>
              <p className="text-xs mb-6" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>per outlet / month</p>
              <ul className="space-y-2.5 mb-7">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill={p.popular?'#00A3A0':'#D5F5F3'}/>
                      <path d="M4 7l2 2 4-4" stroke={p.popular?'white':'#0F766E'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/book-demo"
                className="flex items-center justify-center w-full py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                style={{
                  background: p.popular ? '#F07C33' : '#0B1220',
                  color: 'white',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}>
                Request demo
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-6" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Razorpay MDR at cost Â· WhatsApp overages metered Â· Influencer & print kit separate
        </p>
      </div>
    </section>
  );
}

/* â”€â”€â”€ SECTION: FAQ â”€â”€â”€ */
const faqs = [
  { q: 'Do guests need to download an app?', a: 'No. The entire guest loop â€” bill, review, loyalty, redemption â€” happens on WhatsApp. No app download, no friction.' },
  { q: 'Does UNIT work offline?', a: 'Yes. The floor POS and KDS work offline. Bills sync to WhatsApp when connectivity returns.' },
  { q: 'What hardware do I need?', a: 'Android tablets for POS + KDS. Kitchen screen can be a TV with Android stick. No proprietary hardware required.' },
  { q: 'Is this available outside Bengaluru?', a: 'UNIT is doing 10 Bengaluru pilot restaurants first. South India expansion (Chennai, Hyderabad, Kochi) follows.' },
  { q: 'Who sends the campaigns?', a: 'UNIT supervises all campaigns. You approve the audience and offer â€” we handle timing, compliance, and delivery.' },
  { q: 'Can I connect Swiggy / Zomato orders?', a: 'Yes. UNIT bridges Swiggy and Zomato orders into the same KDS and guest record. UNIT is source of truth.' },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section className="py-20" style={{ background: '#001F25' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal text-center mb-12" ref={ref}>
          <h2 className="font-display font-black text-4xl text-white mb-3" style={{ letterSpacing: '-0.03em' }}>Frequently asked</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ background: 'white' }}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-3 transition-colors hover:bg-mist"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm" style={{ color: '#0B1220', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{f.q}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`flex-shrink-0 transition-transform duration-300 ${open===i?'rotate-180':''}`}>
                  <path d="M5 8l5 5 5-5" stroke="#526072" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <div className={`accordion-content ${open===i?'open':''}`}>
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#526072', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* â”€â”€â”€ SECTION: Final CTA â”€â”€â”€ */
function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1440&h=560&fit=crop&auto=format"
        alt="Restaurant dining"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(11,18,32,0.75)' }}/>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
          Ready for your next dinner rush?
        </h2>
        <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          10 Bengaluru pilot spots available. UNIT onboards you end-to-end â€” no self-serve setup.
        </p>
        <Link href="/book-demo"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105 hover:shadow-2xl"
          style={{ background: '#F07C33', boxShadow: '0 8px 30px rgba(240,124,51,0.45)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Book a South pilot demo â†’
        </Link>
      </div>
    </section>
  );
}

/* â”€â”€â”€ Home page assembly â”€â”€â”€ */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustLogos />
      <HowWeDoIt />
      <HowUnitHelps />
      <AllTools />
      <Stats />
      <RealResults />
      <Testimonials />
      <PricingTeaser />
      <FAQ />
      <FinalCTA />
    </>
  );
}


