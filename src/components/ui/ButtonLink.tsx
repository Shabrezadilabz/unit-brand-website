"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "brass";

const styles: Record<Variant, string> = {
  primary:
    "bg-leaf text-white hover:bg-leaf-deep shadow-[0_14px_34px_-18px_rgba(13,92,69,0.8)]",
  secondary:
    "bg-transparent text-ink border border-[color:var(--line-strong)] hover:bg-paper",
  ghost: "bg-white/10 text-white border border-white/25 hover:bg-white/18",
  brass: "bg-brass text-ink hover:brightness-105 shadow-[0_14px_34px_-18px_rgba(201,162,39,0.7)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const reduce = useReducedMotion();
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold tracking-tight transition will-change-transform",
    styles[variant],
    className,
  );

  const inner = (
    <motion.span
      className="inline-flex items-center gap-2"
      whileHover={reduce ? undefined : { y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
