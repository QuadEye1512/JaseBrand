import { ReportForm } from "@/components/sections/report-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Report Jase Brand Scam | Submit Fraud Report Against Jason Perez (2026)",
    description: "Securely report your experience with Jase Brand (Jason Perez). Document fraudulent investment activity, upfront fee demands, and blocked communication. Help warn others and contribute to the active fraud investigation. Anonymous reporting available.",
    keywords: ["report Jase Brand", "Jase Brand fraud report", "report Jason Perez scam", "submit scam report", "Jase Brand complaint"],
    alternates: {
        canonical: "https://jasebrand-awareness.com/report-scam",
    },
};

export default function ReportScamPage() {
    return (
        <div className="min-h-screen bg-slate-950 pb-20 relative overflow-hidden">
            {/* Background grid texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-red-950/10 z-0" />
            <div className="relative z-10">
                <ReportForm />
            </div>
        </div>
    );
}
