"use client";

import { Container } from "@/components/ui/container";
import { MessageCircle, DollarSign, Ban, LockKeyhole, ArrowRight, ShieldAlert } from "lucide-react";

const steps = [
    {
        phase: "PHASE 01",
        title: "INITIAL CONTACT",
        icon: MessageCircle,
        description: "People are approached via unsolicited messages on social platforms — Instagram, WhatsApp, and Telegram. The outreach appears personal but is part of a mass-targeting strategy.",
        status: "ACTIVE"
    },
    {
        phase: "PHASE 02",
        title: "THE PROMISE",
        icon: DollarSign,
        description: "Offers of high-return investment opportunities or exclusive venture deals. Fabricated screenshots of 'profits' are presented to build false credibility.",
        status: "ACTIVE"
    },
    {
        phase: "PHASE 03",
        title: "THE TRAP",
        icon: LockKeyhole,
        description: "Requests for upfront fees labeled as 'liquidity proof,' 'tax clearance,' or 'legal retainers.' Each payment is followed by another demand before any 'withdrawal' can occur.",
        status: "CRITICAL"
    },
    {
        phase: "PHASE 04",
        title: "AFTER PAYMENT",
        icon: Ban,
        description: "Communication ceases and victims are often blocked. Accounts may be deactivated or deleted. The money is gone — the scammer has moved on to the next target.",
        status: "FINAL"
    }
];

export function ScamFlow() {
    return (
        <section className="py-16 bg-slate-950 text-slate-300 border-y border-slate-800 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            <Container className="relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 border border-red-900/50 bg-red-950/20 px-3 py-1 rounded-full text-red-500 text-xs font-mono mb-4">
                        <ShieldAlert className="w-3 h-3" />
                        <span>SYSTEMATIC FRAUD DETECTED</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">
                        OPERATIONAL <span className="text-red-600">BLUEPRINT</span>
                    </h2>
                    <p className="text-lg text-slate-400 font-mono">
                        This pattern matches <span className="text-white font-bold">common tactics</span> used by online investment frauds — emphasizing the importance of caution before sending money or sharing personal details.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[45px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-900/50 to-transparent border-t border-dashed border-red-800/50 z-0" />

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="relative group">
                                    {/* Step Node */}
                                    <div className="flex flex-col items-center mb-6 relative z-10">
                                        <div className="w-24 h-24 bg-slate-900 border-2 border-red-900/30 rounded-full flex items-center justify-center mb-4 group-hover:border-red-500 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.1)] group-hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]">
                                            <Icon className="w-10 h-10 text-slate-500 group-hover:text-red-500 transition-colors" />
                                        </div>
                                        <div className="bg-slate-900 border border-slate-800 px-3 py-1 rounded text-[10px] font-mono text-red-500">
                                            {item.phase}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg hover:bg-slate-900 hover:border-red-900/50 transition-all text-center h-60">
                                        <h3 className="text-xl font-bold mb-3 text-white uppercase">{item.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed font-mono">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Mobile Arrow */}
                                    {index < steps.length - 1 && (
                                        <div className="md:hidden flex justify-center my-4 text-red-900/50">
                                            <ArrowRight className="w-6 h-6 rotate-90" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
