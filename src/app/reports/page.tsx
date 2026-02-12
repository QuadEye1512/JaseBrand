import { Container } from "@/components/ui/container";
import { ReportsList } from "@/components/sections/reports-list";
import { EducationalResources } from "@/components/sections/educational-resources";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jase Brand Victim Reports & Evidence | Jason Perez Fraud Cases (2026)",
    description: "Browse verified consumer reports and evidence of investment scams linked to Jase Brand (aka Jason Perez). Read victim stories, identify red flags like 'liquidity proof' and 'tax clearance' fees, and learn how to protect yourself from advance-fee fraud.",
    keywords: ["Jase Brand reports", "Jase Brand evidence", "Jason Perez victim reports", "Jase Brand fraud cases", "investment scam reports", "Jase Brand victim stories"],
    alternates: {
        canonical: "https://jasebrand-awareness.com/reports",
    },
};

export default function ReportsPage() {
    return (
        <div className="min-h-screen bg-slate-950 pb-24 relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-red-950/10 z-0" />

            {/* Hero */}
            <div className="relative z-10 border-b border-slate-800 py-14 md:py-16 mb-10">
                <Container>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-950/40 text-red-400 text-xs font-bold uppercase tracking-widest rounded-full mb-5 border border-red-900/30">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                            </span>
                            <span>Evidence Database</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                            Reported <span className="text-red-500">Evidence</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                            A live database of user-submitted reports documenting contact methods, financial demands, and fraudulent behavior patterns associated with Jase Brand.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
                    <ReportsList />
                    <aside>
                        <div className="lg:sticky lg:top-24">
                            <EducationalResources />
                        </div>
                    </aside>
                </div>
            </Container>
        </div>
    );
}
