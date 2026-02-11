"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AlertTriangle, Siren, ShieldAlert, Info } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative pt-12 pb-12 md:pt-20 md:pb-24 overflow-hidden bg-slate-950 text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950/20 z-0" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
            </div>

            <Container className="relative z-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        {/* Urgent Alert Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-sm font-bold mb-6 uppercase tracking-widest animate-pulse border border-red-400">
                            <Siren className="w-4 h-4" />
                            <span>Active Fraud Investigation</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 leading-none">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 relative">
                                Jase Brand Scam Alert
                                <span className="absolute -inset-1 text-red-600 opacity-20 blur-sm animate-glitch-1" aria-hidden="true">Jase Brand Scam Alert</span>
                            </span>
                            <span className="block text-xl md:text-2xl font-bold tracking-wide text-slate-400 mt-3">
                                What You Need to Know (2026 Update)
                            </span>
                        </h1>

                        {/* Community Platform Notice */}
                        <div className="flex items-start gap-3 bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 mb-6">
                            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                            <p className="text-sm text-slate-300 leading-relaxed">
                                <span className="text-amber-400 font-bold">⚠️ This is not a promotional site</span> — it is a community-driven alert platform designed to help people identify potential scams and protect themselves from financial loss.
                            </p>
                        </div>

                        <div className="space-y-6 mb-8">
                            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-xl leading-relaxed border-l-4 border-red-600 pl-6">
                                Jase Brand has gained attention online due to <span className="text-red-400 font-bold">consumer reports</span> and <span className="text-red-400 font-bold">active fraud warnings</span> associated with alleged investment schemes and fundraising activity.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="destructive" className="text-lg px-8 py-6 font-black uppercase tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all" asChild>
                                <Link href="/reports">
                                    <AlertTriangle className="mr-2 h-5 w-5" />
                                    View Evidence
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-black uppercase tracking-wider bg-transparent text-white border-2 border-slate-700 hover:bg-white hover:text-black transition-all" asChild>
                                <Link href="/report-scam">
                                    Report Scam
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Hero Image / "WANTED" Poster */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-sm border-4 border-red-600/30 bg-slate-900 p-2 shadow-2xl transition-transform duration-500 h-[600px]">
                            {/* Tape effects */}
                            <div className="absolute -top-3 -left-3 w-16 h-8 bg-yellow-400/80 rotate-[135deg] shadow-sm z-50" />
                            <div className="absolute -bottom-3 -right-3 w-16 h-8 bg-yellow-400/80 rotate-[135deg] shadow-sm z-50" />

                            <div className="relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full bg-red-600 text-white text-center font-black text-xl py-1 z-20 uppercase tracking-[0.2em] shadow-lg">
                                    SCAM ALERT
                                </div>

                                <div
                                    className="aspect-[4/5] bg-cover bg-center transition-all duration-500 align-middle h-[575px] w-[630px]"
                                    style={{ backgroundImage: "url('/JB.png')" }}
                                />

                                {/* Glitch Overlay on Hover */}
                                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 mix-blend-overlay transition-colors duration-300" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Understanding the Jase Brand Scam Alerts - below the hero grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 max-w-4xl mx-auto"
                >
                    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-8 md:p-10 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldAlert className="w-7 h-7 text-red-500" />
                            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                                Understanding the Jase Brand Scam Alerts
                            </h2>
                        </div>
                        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                            The Jase Brand warning page highlights an <span className="text-red-400 font-bold">active fraud investigation</span> involving reported losses of <span className="text-red-400 font-bold">$500,000+</span> tied to individuals operating under the name <span className="text-white font-bold">Jase Brand</span> (also referenced by an alias such as <span className="text-white font-bold">Jason Perez</span>). The page warns visitors <span className="text-red-400 font-bold">not to transfer funds</span> and encourages anyone who may have been contacted or scammed to submit reports.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
