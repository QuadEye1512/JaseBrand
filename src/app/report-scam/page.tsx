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
        <div className="min-h-screen bg-slate-50 dark:bg-background pb-20">
            <ReportForm />
        </div>
    );
}
