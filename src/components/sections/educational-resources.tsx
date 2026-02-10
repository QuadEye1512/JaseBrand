"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EducationalResources() {
    return (
        <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Protecting Yourself</h2>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-trust" />
                            <CardTitle className="text-lg">How to Verify Investment Opportunities</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                        <p>
                            Legitimate investment professionals and firms must be registered with financial regulatory bodies.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                <span>Check the <strong>SEC EDGAR Database</strong> (US) for company filings.</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                <span>Verify licensure via <strong>FINRA BrokerCheck</strong>.</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                <span>In the UK, strict checking via the <strong>FCA Register</strong> is recommended.</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="border-warning/50 bg-warning/5 dark:bg-warning/10">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-warning" />
                            <CardTitle className="text-lg">Red Flags of Advance-Fee Fraud</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                        <ul className="list-disc pl-4 space-y-2">
                            <li>
                                <strong>Upfront Payments:</strong> Legitimate investors deduct fees from the investment capital or profits, they do not ask you to wire money beforehand.
                            </li>
                            <li>
                                <strong>Pressure:</strong> &quot;Act now or lose the deal&quot; is a classic manipulation tactic. Real deals allow time for due diligence.
                            </li>
                            <li>
                                <strong>Guaranteed Returns:</strong> No investment is risk-free. Anyone promising fixed, high returns is likely operating a Ponzi scheme or simple theft.
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Official Resources</h2>
                <Card>
                    <CardContent className="pt-6 space-y-6">
                        <p className="text-sm text-muted-foreground">
                            If you have sent money to Jase Brand / Jason Perez, contact your bank immediately and file reports with the following agencies.
                        </p>

                        <div className="grid gap-3">
                            <Button variant="outline" className="justify-start h-auto py-3" asChild>
                                <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">
                                    <div className="text-left">
                                        <div className="font-semibold">FTC Report Fraud</div>
                                        <div className="text-xs text-muted-foreground">United States Federal Trade Commission</div>
                                    </div>
                                </a>
                            </Button>

                            <Button variant="outline" className="justify-start h-auto py-3" asChild>
                                <a href="https://www.actionfraud.police.uk" target="_blank" rel="noopener noreferrer">
                                    <div className="text-left">
                                        <div className="font-semibold">Action Fraud UK</div>
                                        <div className="text-xs text-muted-foreground">National Fraud & Cyber Crime Reporting Centre</div>
                                    </div>
                                </a>
                            </Button>

                            <Button variant="outline" className="justify-start h-auto py-3" asChild>
                                <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer">
                                    <div className="text-left">
                                        <div className="font-semibold">FBI IC3</div>
                                        <div className="text-xs text-muted-foreground">Internet Crime Complaint Center</div>
                                    </div>
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
