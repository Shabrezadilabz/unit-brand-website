"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "brass";

const styles: Record<Variant, string> = {
  primary:
    "bg-leaf text-white hover:bg-leaf-deep shadow-[0_16px_40px_-18px_rgba(15,118,110,0.85)]",
  secondary: "bg-white text-ink border border-[color:var(--line-strong)] hover:bg-mist",
  ghost: "bg-white/12 text-white border border-white/30 hover:bg-white/20",
  brass: "bg-leaf text-white hover:bg-leaf-deep",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold tracking-tight transition will-change-transform",
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
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
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
