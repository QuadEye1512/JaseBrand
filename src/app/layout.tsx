import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jase Brand Scam Alert: What You Need to Know (2026 Update)",
    template: "%s | Jase Brand Scam Alert 2026",
  },
  description: "⚠️ Jase Brand Scam Alert (2026 Update): Community-driven alert platform highlighting active fraud warnings, reported losses of $500,000+, and consumer protection guidance. Not a promotional site.",
  keywords: ["Jase Brand scam", "Jase Brand scam alert", "Jason Perez fraud", "Jase Brand 2026", "investment scam warning", "Jase Brand fraud investigation", "online investment fraud", "scammer alert", "financial fraud", "Jase Brand review", "is Jase Brand legit"],
  authors: [{ name: "Community Alert Platform" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jasebrand-awareness.com/",
    title: "Jase Brand Scam Alert: What You Need to Know (2026 Update)",
    description: "Community-driven alert platform: Active fraud investigation involving reported losses of $500,000+ tied to Jase Brand (aka Jason Perez). Do not transfer funds.",
    siteName: "Jase Brand Scam Alert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jase Brand Scam Alert (2026 Update)",
    description: "Community-driven fraud alert: $500K+ in reported losses. Protect yourself.",
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
