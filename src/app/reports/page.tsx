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
        <div className="min-h-screen bg-slate-50 dark:bg-background pb-24">
            <div className="bg-white dark:bg-slate-900 border-b py-12 md:py-20 mb-12">
                <Container>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Reported Evidence</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A collection of user-submitted reports detailing contact methods, requested amounts, and fraudulent behavior patterns.
                    </p>
                </Container>
            </div>

            <Container>
                <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
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
