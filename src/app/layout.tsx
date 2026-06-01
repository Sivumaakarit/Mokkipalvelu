import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Schema } from "@/components/seo/Schema";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


import { Header } from "@/components/layout/Header";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

import { DemoBadge } from "@/components/ui/DemoBadge";
import { MobileCTA } from "@/components/ui/MobileCTA";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CrispChat } from "@/components/seo/CrispChat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-stone-50 text-stone-900 font-sans overflow-x-hidden w-full`}
      >
        <Header />
        <DemoBadge />
        <Schema />
        <CrispChat />
        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>
        <MobileCTA />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
