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
    default: "SCAM ALERT: Jase Brand (Jason Perez) | Investment Fraud Warning",
    template: "%s | Jase Brand Scam Alert",
  },
  description: "URGENT WARNING: Do not invest with Jase Brand or Jason Perez. Read verified reports of scam activity, stolen funds, and investment fraud.",
  keywords: ["Jase Brand scam", "Jason Perez fraud", "stolen money", "investment scam", "Jase Brand cheat", "Jason Perez thief", "scammer alert", "financial fraud"],
  authors: [{ name: "Consumer Protection Group" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jasebrand-awareness.com/",
    title: "SCAM ALERT: Jase Brand (Jason Perez) | Investment Fraud",
    description: "WARNING: Multiple reports of stolen funds. Read the evidence before you invest.",
    siteName: "Jase Brand Scam Alert",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCAM ALERT: Jase Brand / Jason Perez",
    description: "Urgent investment fraud warning. See the reports.",
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
