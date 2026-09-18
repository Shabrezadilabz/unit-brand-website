"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { IMAGES } from "@/lib/images";

function FloatCard({
  children,
  className,
  delay = 0,
  float = "float-y",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  float?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`${float} ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

/** Fudr-style floating product collage */
export function HeroCollage() {
  return (
    <div className="relative mx-auto mt-10 h-[420px] w-full max-w-[920px] sm:h-[480px] lg:mt-14 lg:h-[520px]">
      <div className="glow-orb pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/30 blur-3xl sm:h-[360px] sm:w-[360px]" />

      {/* Guest profile — center */}
      <FloatCard
        delay={0.15}
        className="absolute left-1/2 top-[38%] z-20 w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#3b2a6e] p-4 text-white shadow-[var(--shadow)] sm:w-[240px]"
      >
        <div className="flex items-center gap-3">
          <Image
            src={IMAGES.guest2}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-bold">Arjun R.</p>
            <p className="text-[10px] text-white/70">Spice Garden · Indiranagar</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-ember px-2 py-0.5 text-[9px] font-bold">TOP SPENDER</span>
          <span className="rounded-full bg-leaf px-2 py-0.5 text-[9px] font-bold">LOYAL</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-center">
          <div className="rounded-xl bg-white/10 py-2">
            <p className="text-lg font-extrabold">48</p>
            <p className="text-[9px] text-white/60">Visits</p>
          </div>
          <div className="rounded-xl bg-white/10 py-2">
            <p className="text-lg font-extrabold">₹62k</p>
            <p className="text-[9px] text-white/60">Spend</p>
          </div>
        </div>
      </FloatCard>

      <FloatCard
        delay={0.25}
        float="float-y-delayed"
        className="absolute left-[2%] top-[8%] z-10 w-[118px] overflow-hidden rounded-2xl bg-emerald-500 shadow-[var(--shadow)] sm:left-[6%] sm:w-[140px]"
      >
        <div className="relative aspect-square">
          <Image src={IMAGES.latte} alt="" fill className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <p className="absolute bottom-2 left-2 text-xs font-extrabold text-white">25% OFF</p>
        </div>
      </FloatCard>

      <FloatCard
        delay={0.3}
        float="float-y-slow"
        className="absolute right-[4%] top-[6%] z-10 w-[130px] overflow-hidden rounded-2xl bg-sky-500 shadow-[var(--shadow)] sm:right-[8%] sm:w-[150px]"
      >
        <div className="relative aspect-square">
          <Image src={IMAGES.dessert} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
          <p className="absolute bottom-2 left-2 text-xs font-extrabold text-white">30% OFF</p>
        </div>
      </FloatCard>

      <FloatCard
        delay={0.35}
        className="absolute left-[4%] top-[42%] z-30 w-[150px] rounded-2xl bg-white p-3 shadow-[var(--shadow)] sm:left-[8%] sm:w-[170px]"
      >
        <p className="text-[10px] font-semibold text-ink-soft">How was your experience?</p>
        <p className="mt-1 text-lg tracking-wide">★★★★★</p>
      </FloatCard>

      <FloatCard
        delay={0.4}
        float="float-y-delayed"
        className="absolute right-[2%] top-[36%] z-30 w-[150px] rounded-2xl bg-white p-3 shadow-[var(--shadow)] sm:right-[5%] sm:w-[175px]"
      >
        <p className="text-[10px] font-bold text-ink-soft">Repeat orders</p>
        <div className="mt-2 flex items-center gap-3">
          <div className="relative grid h-14 w-14 place-items-center rounded-full border-[5px] border-ember">
            <span className="text-sm font-extrabold text-ink">68%</span>
          </div>
          <p className="text-[10px] leading-snug text-ink-soft">Guests returning in 30 days</p>
        </div>
      </FloatCard>

      <FloatCard
        delay={0.45}
        className="absolute bottom-[6%] left-[12%] z-20 w-[160px] overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-[var(--shadow)] sm:left-[18%] sm:w-[180px]"
      >
        <div className="relative h-16">
          <Image src={IMAGES.filterCoffee} alt="" fill className="object-cover opacity-80" />
        </div>
        <p className="p-2.5 text-[11px] font-bold text-white">FREE FILTER COFFEE</p>
      </FloatCard>

      <FloatCard
        delay={0.5}
        float="float-y-slow"
        className="absolute bottom-[10%] right-[10%] z-20 w-[168px] rounded-2xl bg-white p-3 shadow-[var(--shadow)] sm:right-[14%] sm:w-[190px]"
      >
        <p className="text-[10px] font-bold text-ink-soft">Repeat revenue</p>
        <p className="display mt-1 text-xl font-extrabold text-ink">₹2,12,355</p>
        <div className="mt-2 flex h-8 items-end gap-1">
          {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-ember/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </FloatCard>

      <FloatCard
        delay={0.55}
        className="absolute bottom-[2%] left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-[var(--shadow)]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-wa text-xs font-bold text-white">
          WA
        </span>
        <p className="max-w-[200px] text-[11px] font-semibold text-ink">
          GST bill sent · Pay with UPI · ★ review invite
        </p>
      </FloatCard>
    </div>
  );
}
