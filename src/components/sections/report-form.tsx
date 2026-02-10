"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";

export function ReportForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    }

    if (isSuccess) {
        return (
            <Container className="max-w-2xl py-12">
                <Card className="border-green-500/50 bg-green-50/50 dark:bg-green-900/10">
                    <CardHeader className="text-center">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-2xl text-green-700 dark:text-green-400">Report Submitted Securely</CardTitle>
                        <CardDescription className="text-lg">
                            Thank you for sharing your experience. Your report has been encrypted and stored.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                        <p className="text-muted-foreground">
                            Your contribution helps prevent others from becoming victims.
                            We may contact you if we need further verification, but you will remain anonymous in public data.
                        </p>
                        <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                            Submit Another Report
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        );
    }

    return (
        <Container className="max-w-3xl py-12">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold mb-4">Submit a Fraud Report</h1>
                <p className="text-muted-foreground">
                    Use this form to document your experience with Jase Brand or Jason Perez.
                </p>
            </div>

            <Card>
                <CardHeader className="border-b bg-slate-50 dark:bg-slate-900/50">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-5 h-5 text-warning mt-1" />
                        <div className="space-y-1">
                            <CardTitle className="text-base">Privacy Notice</CardTitle>
                            <CardDescription>
                                Your personal details (Name, Email) are optional and will NEVER be published.
                                Only anonymized details (Date, Method, Amount) are added to the public register.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6 pt-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Your Name (Optional)</label>
                                <input
                                    id="name"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email Address (Optional)</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="country" className="text-sm font-medium">Country *</label>
                                <select
                                    id="country"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Select Country</option>
                                    <option value="US">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="CA">Canada</option>
                                    <option value="AU">Australia</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="amount" className="text-sm font-medium">Amount Lost (Approximate USD) *</label>
                                <select
                                    id="amount"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Select Range</option>
                                    <option value="0-1000">Less than $1,000</option>
                                    <option value="1000-5000">$1,000 - $5,000</option>
                                    <option value="5000-10000">$5,000 - $10,000</option>
                                    <option value="10000-50000">$10,000 - $50,000</option>
                                    <option value="50000+">$50,000+</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="method" className="text-sm font-medium">How were you contacted? *</label>
                            <input
                                id="method"
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="e.g., Instagram DM, LinkedIn, WhatsApp Group"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="text-sm font-medium">Incident Description *</label>
                            <textarea
                                id="description"
                                required
                                rows={6}
                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Please describe what happened in detail. How did the conversation start? What promises were made? How was payment requested?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Upload Evidence (Optional)</label>
                            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer">
                                <p className="text-sm text-muted-foreground">
                                    Drag and drop screenshots or documents here, or click to browse.
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    (Screenshots of chat logs, transfer receipts, specific profiles)
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-slate-50 dark:bg-slate-900/50 flex justify-end py-4 rounded-b-lg">
                        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Encrypting & Submitting...
                                </>
                            ) : (
                                "Submit Secure Report"
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </Container>
    );
}
