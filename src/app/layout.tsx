import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "UNIT — Run the floor. Own the guest.",
    template: "%s · UNIT",
  },
  description:
    "UNIT is the South-first restaurant OS — POS, kitchen KDS, and WhatsApp bill → review → loyalty. Bengaluru pilots open.",
  metadataBase: new URL("https://unit.restaurant"),
  openGraph: {
    title: "UNIT — Run the floor. Own the guest.",
    description:
      "POS + kitchen + WhatsApp guest loop for Indian dine-in. Built for South density first.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${figtree.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
