import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "B&B outlet pricing — Starter ₹2,999 · Growth ₹4,999 · Pro ₹6,999.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
