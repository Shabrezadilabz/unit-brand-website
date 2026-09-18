'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { FigmaHero } from '@/components/home/FigmaHero';

import { IMAGES, INR } from '@/lib/images';

const photos = {
  dosa: IMAGES.brunch,
  coffee: IMAGES.latte,
  dining: IMAGES.fineDining,
  kitchen: IMAGES.kitchen,
  thali: IMAGES.barWine,
  offer: IMAGES.cocktail,
  festival: IMAGES.party,
};

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

type WaTemplate = {
  img: string;
  title: string;
  text: string;
  cta: string;
  time: string;
};

function WhatsAppPhone({ template, status }: { template: WaTemplate; status: string }) {
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
          <div className="wa-incoming">Hi Arjun — thanks for dining with us tonight.</div>
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

function HowWeDoIt() {
  const [step, setStep] = useState(0);
  const steps = useMemo(
    () => [
      {
        number: '01',
        title: 'Create touchpoints.',
        body: 'Capture consent at close. Send a branded GST bill on WhatsApp, not a forgotten slip in a wallet.',
        points: ['Consent at the bill', 'GST bill + UPI in one tap', 'Table QR when the floor needs it'],
        phoneTitle: 'Bill closed.',
        waStatus: 'online',
        wa: {
          img: photos.dosa,
          title: 'Your GST bill is ready',
          text: `Masala bowl ×2 · House wine ×2 · Total ${INR}460. Pay securely with UPI.`,
          cta: 'Pay with UPI',
          time: '8:42 PM',
        },
      },
      {
        number: '02',
        title: 'Build guest memory.',
        body: 'UNIT turns an ordinary visit into useful memory: preference, frequency, spend and the next good reason to return.',
        points: ['RFM segments that make sense', 'Stars that guests can redeem', 'A profile your floor can use'],
        phoneTitle: 'Guest memory.',
        waStatus: 'typing…',
        wa: {
          img: photos.coffee,
          title: 'How was your experience?',
          text: 'Tap a star. 5★ goes to Google. Anything less comes straight to the owner.',
          cta: 'Rate your visit ★★★★★',
          time: '8:45 PM',
        },
      },
      {
        number: '03',
        title: 'Launch the right campaign.',
        body: 'Win back a Tuesday regular. Remember a birthday. Show up for Ugadi. UNIT keeps the message useful and the volume human.',
        points: ['Occasion packs', 'UNIT-supervised sends', 'STOP-first, anti-spam by design'],
        phoneTitle: 'Next best reason.',
        waStatus: 'business account',
        wa: {
          img: photos.offer,
          title: 'Pongal week · 20% off',
          text: 'Your table is waiting. Celebrate Pongal with us — limited sadhya covers.',
          cta: 'Book a table',
          time: '10:12 AM',
        },
      },
    ],
    [],
  );

  useEffect(() => {
    const timer = window.setInterval(() => setStep((c) => (c + 1) % 3), 5200);
    return () => window.clearInterval(timer);
  }, []);

  const current = steps[step];

  return (
    <section className="section how" id="how">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">How we do it</span>
            <h2 className="section-title">
              Good service
              <br />
              should compound.
            </h2>
          </div>
          <p className="section-copy">
            UNIT connects the moments your team already owns, so each visit makes the next one easier
            to earn.
          </p>
        </div>

        <div className="process-top">
          <div className="step-pills">
            {steps.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={`step-pill ${index === step ? 'active' : ''}`}
                onClick={() => setStep(index)}
              >
                {item.number} / {item.title.replace('.', '')}
              </button>
            ))}
          </div>
          <span className="eyebrow" style={{ color: 'var(--ink-soft)' }}>
            01 — 03
          </span>
        </div>

        <div className="step-stage reveal">
          <div>
            <div className="step-number">{current.number}</div>
            <h3>{current.title}</h3>
            <p>{current.body}</p>
            <ul className="step-points">
              {current.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="phone-stage">
            <div className="phone" key={`ops-${step}`}>
              <div className="phone-top">
                <span>9:41</span>
                <span>UNIT / {current.number}</span>
              </div>
              <h4>{current.phoneTitle}</h4>
              {step === 0 && (
                <>
                  <div className="ticket">
                    <div className="ticket-row">
                      <span>Truffle pasta × 2</span>
                      <b>{INR}320</b>
                    </div>
                    <div className="ticket-row">
                      <span>House wine × 2</span>
                      <b>{INR}140</b>
                    </div>
                    <div className="ticket-row">
                      <span>Total</span>
                      <b>{INR}460</b>
                    </div>
                  </div>
                  <div className="wa-bubble">
                    Your GST bill from Spice Garden is ready. Pay securely with UPI.
                  </div>
                </>
              )}
              {step === 1 && (
                <>
                  <div className="ticket" style={{ background: 'var(--lilac)' }}>
                    <div style={{ fontWeight: 800, fontSize: 12 }}>Arjun R.</div>
                    <div style={{ marginTop: 8, color: '#665e83' }}>12 visits · 4.8 rating</div>
                    <div style={{ marginTop: 14, color: 'var(--orange)', letterSpacing: 2 }}>
                      ★★★★☆
                    </div>
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
                      Pongal week
                    </div>
                    <div style={{ marginTop: 7, color: '#755f00', fontSize: 9 }}>
                      Approved · low frequency · local
                    </div>
                  </div>
                  <div className="wa-bubble" style={{ background: '#fce9e1', color: '#8e4938' }}>
                    Your table is waiting. Celebrate Pongal with us.
                  </div>
                </>
              )}
            </div>

            <WhatsAppPhone template={current.wa} status={current.waStatus} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useReveal();
  const [tool, setTool] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [resultSlide, setResultSlide] = useState(0);
  const [stats, setStats] = useState([0, 0, 0]);
  const resultRef = useRef<HTMLElement>(null);

  const tools = useMemo(
    () => [
      {
        name: 'Floor POS',
        title: 'The floor, in your hands.',
        body: 'Fast waiter flows for tables, modifiers, split bills and a clean handoff to the pass.',
        bullets: ['Table-first ordering', 'Live bill ownership', 'Works when the rush is loud'],
        color: 'var(--butter)',
        image: photos.dining,
        chip: 'Table 14 · closing',
      },
      {
        name: 'Kitchen KDS',
        title: 'A calmer kitchen pass.',
        body: 'Tickets move with the meal. Every station sees what matters now.',
        bullets: ['Course-aware tickets', 'Station-ready views', 'Fewer calls across the pass'],
        color: 'var(--peach)',
        image: photos.kitchen,
        chip: '12 tickets · 08:42',
      },
      {
        name: 'WhatsApp loop',
        title: 'The bill is the beginning.',
        body: 'Close the loop with a GST bill, UPI payment, review invite and a reason to come back.',
        bullets: ['Branded WhatsApp GST bill', 'Review invite at the right moment', 'UPI without a detour'],
        color: 'var(--mint)',
        image: photos.coffee,
        chip: 'Delivered · 8:42 PM',
      },
      {
        name: 'Guest CRM',
        title: 'Remember the people.',
        body: 'A practical guest memory layer for operators who want more than a phone number in a spreadsheet.',
        bullets: ['Visit and spend timeline', 'Loyalty stars', 'Redeem in the waiter app'],
        color: 'var(--lilac)',
        image: photos.thali,
        chip: 'Arjun R. · loyal',
      },
      {
        name: 'Campaigns',
        title: 'Less blast. More reason.',
        body: 'UNIT helps you show up around local moments, with campaigns your team can stand behind.',
        bullets: ['Win-back and birthday packs', 'Festival-ready templates', 'Approval before every send'],
        color: 'var(--peach)',
        image: photos.dosa,
        chip: 'Ugadi pack · ready',
      },
      {
        name: 'AI insights',
        title: 'Signals, not theatre.',
        body: 'See what is changing across a shift, an outlet or a guest cohort, then decide what to do next.',
        bullets: ['Repeat revenue view', 'Menu and shift patterns', 'Plain-language prompts'],
        color: 'var(--butter)',
        image: photos.dining,
        chip: 'Repeat revenue +18%',
      },
    ],
    [],
  );

  const testimonials = [
    {
      quote: 'Our team stopped treating the bill as the goodbye. It is now the start of the next visit.',
      name: 'Nikhil Rao',
      role: 'Owner, Filter & Co. · Indiranagar',
      initials: 'NR',
    },
    {
      quote: 'The KDS gave my chef a quieter pass and gave me a clearer evening. That is a real system.',
      name: 'Meera Krishnan',
      role: 'Operator, House of Tikka · Chennai',
      initials: 'MK',
    },
    {
      quote:
        'Guests understand the WhatsApp bill instantly. The loyalty part feels like hospitality, not homework.',
      name: 'Arjun Shetty',
      role: 'Founder, Spice Garden · Bengaluru',
      initials: 'AS',
    },
  ];

  const faqs: [string, string][] = [
    [
      'Is UNIT another loyalty CRM?',
      'No. UNIT owns the floor and kitchen first. The guest loop starts when your team closes the bill.',
    ],
    [
      'Do we need to replace our current POS?',
      'UNIT is designed to be the source of truth for your floor. We map the right migration path during your pilot.',
    ],
    [
      'Can guests pay on WhatsApp?',
      'Yes. UNIT sends a branded GST bill with a UPI payment path, then follows up with a review invite.',
    ],
    [
      'How do campaigns avoid becoming spam?',
      'Campaigns are supervised. Consent, STOP controls, sensible frequency and local moments such as Ugadi and Onam.',
    ],
    [
      'Is there a consumer app to download?',
      'No private-label Play Store tax. UNIT gives your guests a branded PWA and WhatsApp-first experience.',
    ],
    [
      'Where are you starting?',
      'We are onboarding a focused group of dine-in pilots first.',
    ],
  ];

  useEffect(() => {
    const target = resultRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const values = [91, 45, 100];
          values.forEach((value, index) => {
            let current = 0;
            const timer = window.setInterval(() => {
              current += Math.ceil(value / 22);
              if (current >= value) {
                current = value;
                window.clearInterval(timer);
              }
              setStats((previous) =>
                previous.map((item, itemIndex) => (itemIndex === index ? current : item)),
              );
            }, 48);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FigmaHero />

      <section className="py-10 overflow-hidden border-y" style={{ background: '#F4F6F9', borderColor: '#E7ECF2' }}>
        <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#526072' }}>
          Made for the tables that matter
        </p>
        <div className="relative flex overflow-hidden">
          <div className="flex items-center gap-10 animate-marquee whitespace-nowrap" style={{ animation: 'marquee 22s linear infinite' }}>
            {[
              'SPICE GARDEN',
              'FILTER & CO.',
              'HOUSE OF TIKKA',
              'SOUTH SOCIAL',
              'SPICE GARDEN',
              'FILTER & CO.',
              'HOUSE OF TIKKA',
              'SOUTH SOCIAL',
            ].map((name, i) => (
              <span
                key={i}
                className="font-display font-bold text-base"
                style={{ color: 'rgba(11,18,32,0.55)' }}
              >
                {name} ·
              </span>
            ))}
          </div>
        </div>
      </section>

      <HowWeDoIt />

      <section className="section pastel-wrap" id="guest-loop">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The UNIT loop</span>
              <h2 className="section-title">
                Every bill can
                <br />
                leave a trace.
              </h2>
            </div>
            <p className="section-copy">
              Not a bolt-on loyalty CRM. A practical operating layer that connects a waiter&apos;s
              close to a guest&apos;s return.
            </p>
          </div>
          <div className="pastel-grid">
            <article className="pastel-panel reveal" style={{ background: 'var(--butter)' }}>
              <div className="panel-copy">
                <span className="eyebrow" style={{ color: '#927d00' }}>
                  01 / Remember
                </span>
                <h3>Build a base that drives revenue.</h3>
                <p>
                  Your regulars are already telling you what they value. UNIT gives the team a useful
                  view before the next order lands.
                </p>
                <ul>
                  <li>Guest profiles that update at close</li>
                  <li>Visits, spend and preference in one view</li>
                  <li>Stars guests can actually redeem</li>
                </ul>
              </div>
              <div className="panel-image">
                <img src={photos.dining} alt="Busy restaurant dining floor" />
                <span className="image-chip">Guest memory · live</span>
              </div>
            </article>
            <article className="pastel-panel reveal" style={{ background: 'var(--peach)' }}>
              <div className="panel-copy">
                <span className="eyebrow" style={{ color: '#b95c45' }}>
                  02 / Close well
                </span>
                <h3>Turn every bill into a hello.</h3>
                <p>
                  A branded WhatsApp GST bill makes payment simple, invites an honest review and keeps
                  the relationship warm after the table leaves.
                </p>
                <ul>
                  <li>UPI without a separate detour</li>
                  <li>Review invite at the right moment</li>
                  <li>Consent and STOP built in</li>
                </ul>
              </div>
              <div className="panel-image">
                <img src={photos.coffee} alt="Cafe latte service" />
                <span className="image-chip">GST bill · paid</span>
              </div>
            </article>
            <article className="pastel-panel reveal" style={{ background: 'var(--mint)' }}>
              <div className="panel-copy">
                <span className="eyebrow" style={{ color: 'var(--teal-deep)' }}>
                  03 / Return
                </span>
                <h3>Stay top-of-mind, not in the way.</h3>
                <p>
                  Win back a quiet Tuesday. Celebrate a birthday. Fill Friday wine night. UNIT helps your team
                  show up with a reason, not a blast.
                </p>
                <ul>
                  <li>Occasion & weekend packs</li>
                  <li>Supervised campaigns only</li>
                  <li>Redeem in the waiter app</li>
                </ul>
              </div>
              <div className="panel-image">
                <img src={photos.thali} alt="Wine bar dining" />
                <span className="image-chip">Redeem · 80 stars</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section tools" id="tools">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">All the tools</span>
              <h2 className="section-title">
                One rhythm.
                <br />
                Every station.
              </h2>
            </div>
            <p className="section-copy">
              From first order to final follow-up, UNIT gives the people running the shift the same
              source of truth.
            </p>
          </div>
          <div className="tool-tabs">
            {tools.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`tool-tab ${tool === index ? 'active' : ''}`}
                onClick={() => setTool(index)}
              >
                {String(index + 1).padStart(2, '0')}
                <br />
                {item.name}
              </button>
            ))}
          </div>
          <div className="tool-card tab-panel" style={{ background: tools[tool].color }} key={tool}>
            <span className="eyebrow" style={{ color: 'var(--teal-deep)' }}>
              {tools[tool].name}
            </span>
            <h3>{tools[tool].title}</h3>
            <p>{tools[tool].body}</p>
            <ul>
              {tools[tool].bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="tool-visual">
              <img src={tools[tool].image} alt={`${tools[tool].name} in a restaurant`} />
              <span className="tool-mini">{tools[tool].chip}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section results" id="results" ref={resultRef}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">The operator view</span>
              <h2 className="section-title">
                Proof in the
                <br />
                busy bits.
              </h2>
            </div>
            <p className="section-copy">
              The best metric is a team that gets through service with more control — and guests who
              choose to come back.
            </p>
          </div>
          <div className="result-grid reveal">
            <article className="result-card result-feature">
              <img src={photos.kitchen} alt="Chef at kitchen pass" />
              <div className="result-content">
                <span className="eyebrow" style={{ color: 'var(--butter)' }}>
                  Spice Garden · Bengaluru
                </span>
                <h3>Fewer loose ends after last order.</h3>
                <p>One connected system from floor to follow-up.</p>
              </div>
            </article>
            <article className="result-card stat-card">
              <b>{stats[0]}%</b>
              <span>of guests rate their experience when asked at the right time.</span>
            </article>
            <article className="result-card stat-card">
              <b>~{stats[1]}%</b>
              <span>more repeat revenue from guests who use loyalty stars.</span>
            </article>
            <article className="result-card stat-card">
              <b>{stats[2]}%</b>
              <span>floor ownership from one connected operating rhythm.</span>
            </article>
            <article className="result-card quote-card">
              <p>“Our rush got louder. The operation didn&apos;t.”</p>
              <small>— Meera, House of Tikka</small>
            </article>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Operator notes</span>
              <h2 className="section-title">
                Built for people
                <br />
                in the room.
              </h2>
            </div>
            <div className="carousel-controls">
              <button
                type="button"
                className="round-btn"
                onClick={() =>
                  setResultSlide((c) => (c + testimonials.length - 1) % testimonials.length)
                }
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                type="button"
                className="round-btn"
                onClick={() => setResultSlide((c) => (c + 1) % testimonials.length)}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
          <div className="testimonial-track">
            {[0, 1, 2].map((offset) => {
              const item = testimonials[(resultSlide + offset) % testimonials.length];
              return (
                <article className="testimonial reveal" key={`${item.name}-${resultSlide}-${offset}`}>
                  <div>
                    <div className="stars">★★★★★</div>
                    <q>{item.quote}</q>
                  </div>
                  <div className="person">
                    <div className="avatar">{item.initials}</div>
                    <div>
                      <b>{item.name}</b>
                      <small>{item.role}</small>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Simple outlet pricing</span>
              <h2 className="section-title">
                Pick your
                <br />
                starting line.
              </h2>
            </div>
            <p className="section-copy">
              No public self-serve signup. UNIT onboards you properly, with the right modules for your
              floor.
            </p>
          </div>
          <div className="pricing-grid reveal">
            {[
              {
                name: 'Starter',
                price: `${INR}2,999`,
                note: 'For a focused single outlet',
                items: ['Floor POS', 'Kitchen KDS', 'WhatsApp GST bills'],
              },
              {
                name: 'Growth',
                price: `${INR}4,999`,
                note: 'For teams ready to compound',
                items: ['Everything in Starter', 'Guest memory + loyalty', 'Review and redeem loop'],
                featured: true,
              },
              {
                name: 'Pro',
                price: `${INR}6,999`,
                note: 'For operators with more to run',
                items: ['Everything in Growth', 'Supervised campaigns', 'Multi-outlet insights'],
              },
            ].map((plan) => (
              <article
                className={`price-card ${plan.featured ? 'featured' : ''}`}
                key={plan.name}
              >
                {plan.featured && <span className="popular">MOST POPULAR</span>}
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  <span> / outlet / month</span>
                </div>
                <p
                  style={{
                    color: plan.featured ? 'rgba(255,255,255,.58)' : 'var(--ink-soft)',
                    fontSize: 11,
                  }}
                >
                  {plan.note}
                </p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href="/book-demo" className="outline-btn" style={{ display: 'block', textAlign: 'center' }}>
                  Talk to UNIT →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">No small print</span>
              <h2 className="section-title">
                Questions operators
                <br />
                ask first.
              </h2>
            </div>
            <p className="section-copy">
              If your question is not here, ask it in the demo. We prefer a useful answer to a polished
              dodge.
            </p>
          </div>
          <div className="faq-grid reveal">
            {faqs.map(([question, answer], index) => (
              <div className="faq-item" key={question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  aria-expanded={faqOpen === index}
                >
                  <span style={{ fontSize: 12, fontWeight: 800 }}>{question}</span>
                  <span>{faqOpen === index ? '−' : '+'}</span>
                </button>
                {faqOpen === index && <div className="faq-answer">{answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <img src={photos.dining} alt="Restaurant dining room" />
        <div className="cta-content">
          <span className="eyebrow" style={{ color: 'var(--butter)' }}>
            Pilots open now
          </span>
          <h2 className="section-title">Ready for your next dinner rush?</h2>
          <p>Bring the floor, kitchen and guest loop into one rhythm.</p>
          <Link href="/book-demo" className="orange-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Request a pilot demo →
          </Link>
        </div>
      </section>
    </>
  );
}
