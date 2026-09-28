import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Plus_Jakarta_Sans } from "next/font/google";
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

const cormorant = Cormorant_Garamond({
  variable: "--font-bb",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "B&B — Be a Brand",
    template: "%s · B&B",
  },
  description:
    "B&B is the restaurant OS — POS, kitchen KDS, and WhatsApp bill → review → loyalty. Be a Brand.",
  metadataBase: new URL("https://unit.restaurant"),
  icons: {
    icon: "/bb-mark.svg",
    apple: "/bb-logo.png",
  },
  openGraph: {
    title: "B&B — Be a Brand",
    description:
      "POS + kitchen + WhatsApp guest loop for cafes, restaurants, pubs and nightlife.",
    type: "website",
    images: ["/bb-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jakarta.variable} ${cormorant.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
