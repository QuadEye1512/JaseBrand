"use client";

import { CheckCircle2, AlertTriangle, ShieldCheck, ExternalLink } from "lucide-react";

const officialResources = [
    {
        name: "FTC Report Fraud",
        description: "United States Federal Trade Commission",
        url: "https://reportfraud.ftc.gov",
    },
    {
        name: "Action Fraud UK",
        description: "National Fraud & Cyber Crime Reporting Centre",
        url: "https://www.actionfraud.police.uk",
    },
    {
        name: "FBI IC3",
        description: "Internet Crime Complaint Center",
        url: "https://www.ic3.gov",
    },
];

export function EducationalResources() {
    return (
        <div className="space-y-6">
            {/* Protecting Yourself */}
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Verification Guide
                    </h3>
                </div>
                <div className="p-5 space-y-3 text-sm text-slate-400">
                    <p className="leading-relaxed">
                        Legitimate investment professionals must be registered with financial regulatory bodies.
                    </p>
                    <ul className="space-y-2.5">
                        <li className="flex gap-2.5 items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span>Check the <strong className="text-slate-200">SEC EDGAR Database</strong> (US) for company filings.</span>
                        </li>
                        <li className="flex gap-2.5 items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span>Verify licensure via <strong className="text-slate-200">FINRA BrokerCheck</strong>.</span>
                        </li>
                        <li className="flex gap-2.5 items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span>In the UK, use the <strong className="text-slate-200">FCA Register</strong>.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Red Flags */}
            <div className="bg-amber-950/20 border border-amber-900/30 rounded-2xl overflow-hidden">
                <div className="bg-amber-950/30 border-b border-amber-900/30 px-5 py-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <h3 className="text-xs font-black text-amber-400 uppercase tracking-widest">
                        Red Flags
                    </h3>
                </div>
                <div className="p-5 space-y-3 text-sm text-slate-400">
                    <ul className="space-y-3">
                        <li className="border-l-2 border-amber-600/50 pl-3">
                            <strong className="text-amber-400 block text-xs uppercase tracking-wider mb-0.5">Upfront Payments</strong>
                            <span>Legitimate investors deduct fees from capital they don&apos;t ask you to wire money beforehand.</span>
                        </li>
                        <li className="border-l-2 border-amber-600/50 pl-3">
                            <strong className="text-amber-400 block text-xs uppercase tracking-wider mb-0.5">High Pressure</strong>
                            <span>&ldquo;Act now or lose the deal&rdquo; is a classic manipulation tactic.</span>
                        </li>
                        <li className="border-l-2 border-amber-600/50 pl-3">
                            <strong className="text-amber-400 block text-xs uppercase tracking-wider mb-0.5">Guaranteed Returns</strong>
                            <span>No investment is risk-free. Anyone promising fixed, high returns is operating fraud.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Official Resources */}
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Report to Authorities
                    </h3>
                </div>
                <div className="p-4 space-y-2">
                    <p className="text-xs text-slate-500 px-1 mb-3">
                        If you have sent money, contact your bank immediately and file reports:
                    </p>
                    {officialResources.map((resource) => (
                        <a
                            key={resource.name}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/50 hover:bg-slate-800 hover:border-slate-700 transition-all group text-left w-full"
                        >
                            <div>
                                <div className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                                    {resource.name}
                                </div>
                                <div className="text-xs text-slate-600">
                                    {resource.description}
                                </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-red-400 shrink-0 transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
