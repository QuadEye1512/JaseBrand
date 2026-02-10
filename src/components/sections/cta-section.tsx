"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
    return (
        <section className="py-16 bg-slate-900 text-white">
            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Have You Been Affected?</h2>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        Your report helps build a clearer picture of these activities and may prevent others from falling victim.
                        If you have had contact with Jase Brand or Jason Perez regarding investment opportunities, please share your experience.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" variant="destructive" className="w-full sm:w-auto text-lg px-8" asChild>
                            <Link href="/report-scam">
                                Submit a Report
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-slate-900 hover:border-transparent" asChild>
                            <Link href="/reports">
                                View Existing Evidence
                            </Link>
                        </Button>
                    </div>
                    <p className="mt-8 text-sm text-slate-500">
                        All reports can be submitted anonymously. We prioritize your privacy.
                    </p>
                </div>
            </Container>
        </section>
    );
}
