import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
  icons: {
    icon: "/unit-logo.png",
    apple: "/unit-logo.png",
  },
  openGraph: {
    title: "UNIT — Run the floor. Own the guest.",
    description:
      "POS + kitchen + WhatsApp guest loop for Indian dine-in. Built for South density first.",
    type: "website",
    images: ["/unit-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jakarta.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
