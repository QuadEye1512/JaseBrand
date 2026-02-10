import { ReportForm } from "@/components/sections/report-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Report a Scam | Jase Brand Fraud Alert",
    description: "Securely report your experience with Jase Brand or Jason Perez. Help warn others by documenting fraudulent investment activities.",
};

export default function ReportScamPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-background pb-20">
            <ReportForm />
        </div>
    );
}
