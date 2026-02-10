"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top "Ticker" Bar - High Urgency */}
            <div className="bg-red-600 text-white text-[10px] md:text-xs font-black uppercase tracking-widest py-1 overflow-hidden">
                <div className="flex w-full whitespace-nowrap animate-marquee">
                    <span className="mx-4">⚠️ ACTIVE FRAUD INVESTIGATION ⚠️</span>
                    <span className="mx-4">DO NOT TRANSFER FUNDS</span>
                    <span className="mx-4">⚠️ REPORTED LOSSES: $500k+ ⚠️</span>
                    <span className="mx-4">DO NOT TRUST "JASE BRAND"</span>
                    <span className="mx-4">⚠️ ACTIVE FRAUD INVESTIGATION ⚠️</span>
                    <span className="mx-4">DO NOT TRANSFER FUNDS</span>
                    <span className="mx-4">⚠️ REPORTED LOSSES: $500k+ ⚠️</span>
                    <span className="mx-4">DO NOT TRUST "JASE BRAND"</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="border-b-2 border-red-600 supports-[backdrop-filter]:bg-black">
                <Container>
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="group flex items-center gap-3 font-black text-lg md:text-xl text-white transition-colors">
                            <div className="relative flex items-center justify-center">
                                <AlertTriangle className="h-6 w-6 text-red-500 animate-pulse relative z-10" aria-hidden="true" />
                                <div className="absolute inset-0 bg-red-500/20 blur-md rounded-full animate-ping" />
                            </div>
                            <span className="uppercase tracking-tight group-hover:text-red-500 transition-colors">
                                FRAUD ALERT: <span className="text-red-500 group-hover:text-white transition-colors">JASE BRAND</span>
                            </span>
                        </Link>
                        <nav className="flex items-center gap-4 md:gap-6">
                            <Link
                                href="/reports"
                                className="text-sm font-bold text-slate-300 hover:text-white hover:underline decoration-red-500 underline-offset-4 uppercase tracking-wide hidden sm:block transition-all"
                            >
                                View Evidence
                            </Link>
                            <Button variant="destructive" size="sm" className="hidden sm:inline-flex font-black uppercase tracking-wider shadow-[0_0_10px_rgba(220,38,38,0.5)] border border-red-400 animate-pulse-slow" asChild>
                                <Link href="/report-scam">
                                    Report Scammer
                                </Link>
                            </Button>
                            <Link href="/report-scam" className="sm:hidden text-sm font-bold text-red-500 uppercase">
                                Report
                            </Link>
                        </nav>
                    </div>
                </Container>
            </div>
        </header>
    );
}
