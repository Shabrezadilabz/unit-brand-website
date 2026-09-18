"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PageShell({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.main
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-[72px]"
    >
      {children}
    </motion.main>
  );
}
