"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ShieldAlert, FileText, Phone, Users, Ban } from "lucide-react";

const actionSteps = [
    {
        number: "01",
        icon: Ban,
        title: "Avoid Transferring Funds",
        description: "Do not transfer any funds upfront — no matter what label is used (liquidity proof, tax clearance, legal retainer, etc.).",
        color: "text-red-500",
        bgColor: "bg-red-500/10",
    },
    {
        number: "02",
        icon: FileText,
        title: "Document Everything",
        description: "Save all communications — screenshots of messages, emails, transaction receipts, and any documents shared by the scammer.",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
    },
    {
        number: "03",
        icon: Phone,
        title: "Report to Authorities",
        description: "Report the interaction to official fraud reporting agencies such as the FTC, IC3 (FBI Internet Crime Complaint Center), or your local authorities.",
        color: "text-sky-500",
        bgColor: "bg-sky-500/10",
    },
    {
        number: "04",
        icon: Users,
        title: "Share Your Experience",
        description: "Share your experience via community reporting tools to help others. Every report strengthens the collective defense against fraud.",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
];

export function CtaSection() {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-red-950/20" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-950/40 text-red-400 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-red-900/30">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            <span>Take Action</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                            What to Do If You{" "}
                            <span className="text-red-500">Encounter Jase Brand</span>
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            If you have been contacted by someone claiming to represent Jase Brand with investment opportunities, follow these steps immediately:
                        </p>
                    </div>

                    {/* Action Steps */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-14">
                        {actionSteps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={step.number}
                                    className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800 hover:border-red-900/40 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-xs font-mono text-red-500/60 font-bold">{step.number}</span>
                                            <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                                                <Icon className={`w-6 h-6 ${step.color}`} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-slate-400 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Buttons */}
                    <div className="text-center">
                        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-3">Have You Been Affected?</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Your report helps build a clearer picture of these activities and may prevent others from falling victim.
                                If you have had contact with Jase Brand or Jason Perez regarding investment opportunities, please share your experience.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" variant="destructive" className="w-full sm:w-auto text-lg px-8 font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.3)]" asChild>
                                    <Link href="/report-scam">
                                        Submit a Report
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900 hover:border-transparent font-bold uppercase tracking-wider" asChild>
                                    <Link href="/reports">
                                        View Existing Evidence
                                    </Link>
                                </Button>
                            </div>
                            <p className="mt-6 text-sm text-slate-500">
                                All reports can be submitted anonymously. We prioritize your privacy.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
