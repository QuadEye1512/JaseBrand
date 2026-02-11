import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://jasebrand-awareness.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jase Brand Scam Alert: What You Need to Know (2026 Update)",
    template: "%s | Jase Brand Scam Alert 2026",
  },
  description: "⚠️ Jase Brand Scam Alert (2026 Update): Community-driven alert platform highlighting active fraud warnings, consumer reports, and reported losses of $500,000+ tied to Jase Brand (aka Jason Perez). Learn how the scam operates and protect yourself from online investment fraud.",
  keywords: [
    "Jase Brand",
    "Jase Brand scam",
    "Jase Brand scam alert",
    "Jase Brand fraud",
    "Jase Brand warning",
    "Jase Brand review",
    "Jase Brand legit",
    "is Jase Brand legit",
    "Jase Brand investment",
    "Jase Brand 2026",
    "Jason Perez",
    "Jason Perez scam",
    "Jason Perez fraud",
    "Jason Perez scammer",
    "Jason Perez investment scam",
    "Jase Brand aka Jason Perez",
    "Jase Brand Jason Perez",
    "investment scam warning",
    "investment fraud alert",
    "online investment fraud",
    "Jase Brand fraud investigation",
    "Jase Brand stolen money",
    "Jase Brand report",
    "scammer alert",
    "financial fraud warning",
    "liquidity proof scam",
    "tax clearance scam",
    "advance fee fraud",
    "Instagram investment scam",
    "Telegram investment scam",
    "WhatsApp investment scam",
  ],
  authors: [{ name: "Community Alert Platform" }],
  creator: "Community Alert Platform",
  publisher: "Community Alert Platform",
  category: "Consumer Protection",
  classification: "Fraud Alert",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Jase Brand Scam Alert: What You Need to Know (2026 Update)",
    description: "⚠️ Community-driven alert: Active fraud investigation with $500,000+ in reported losses tied to Jase Brand (aka Jason Perez). Do not transfer funds. Learn the scam pattern and protect yourself.",
    siteName: "Jase Brand Scam Alert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jase Brand Scam Alert — 2026 Update | $500K+ Reported Losses",
    description: "⚠️ Active fraud investigation: Jase Brand (Jason Perez) linked to $500K+ in stolen funds. Community-driven alert. Protect yourself.",
    creator: "@jasebrandalert",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    // Add your Google Search Console / Bing Webmaster verification codes here
    // google: "your-google-verification-code",
    // other: { "msvalidate.01": "your-bing-verification-code" },
  },
  other: {
    "dc.title": "Jase Brand Scam Alert: What You Need to Know (2026 Update)",
    "dc.description": "Community-driven alert platform: Active fraud investigation involving Jase Brand (Jason Perez) with reported losses of $500,000+.",
    "dc.subject": "Consumer Protection, Fraud Alert, Scam Warning",
    "dc.language": "en",
    "article:published_time": "2026-01-01T00:00:00Z",
    "article:modified_time": new Date().toISOString(),
    "article:section": "Consumer Protection",
    "article:tag": "Jase Brand, Jason Perez, Scam Alert, Investment Fraud, 2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen flex flex-col bg-background antialiased")}>
        <JsonLd />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
