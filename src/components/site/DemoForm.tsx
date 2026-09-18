"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function DemoForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-leaf/30 bg-leaf-soft p-8 text-center"
      >
        <p className="display text-2xl font-bold text-ink">Request received.</p>
        <p className="mt-3 text-ink-soft">
          A UNIT supervisor will WhatsApp you within one business day for Bengaluru / South
          onboarding.
        </p>
        <div className="mt-6 flex justify-center">
          <ButtonLink href="/pricing">Compare plans</ButtonLink>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-[color:var(--line)] bg-paper p-5 shadow-[var(--shadow)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Restaurant name" name="restaurant" required />
        <Field label="City" name="city" placeholder="Bengaluru" required />
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-ink">Outlets</span>
          <select
            name="outlets"
            required
            className="min-h-12 w-full rounded-xl border border-[color:var(--line-strong)] bg-white px-3 text-ink outline-none ring-leaf focus:ring-2"
            defaultValue="1"
          >
            <option value="1">1</option>
            <option value="2-5">2–5</option>
            <option value="6+">6+</option>
          </select>
        </label>
        <Field label="Phone / WhatsApp" name="phone" type="tel" required />
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Plan interest</span>
          <select
            name="plan"
            className="min-h-12 w-full rounded-xl border border-[color:var(--line-strong)] bg-white px-3 text-ink outline-none ring-leaf focus:ring-2"
            defaultValue="growth"
          >
            <option value="starter">Starter · ₹2,999</option>
            <option value="growth">Growth · ₹4,999</option>
            <option value="pro">Pro · ₹6,999</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-xl border border-[color:var(--line-strong)] bg-white px-3 py-3 text-ink outline-none ring-leaf focus:ring-2"
            placeholder="Peak covers, current POS, WhatsApp BSP…"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-leaf px-5 text-[15px] font-semibold text-white transition hover:bg-leaf-deep"
      >
        Request callback
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">
        No public self-serve signup — UNIT onboards you.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="min-h-12 w-full rounded-xl border border-[color:var(--line-strong)] bg-white px-3 text-ink outline-none ring-leaf focus:ring-2"
      />
    </label>
  );
}
