"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, MapPin, DollarSign } from "lucide-react";
import { reports } from "@/lib/data";

export function ReportsList() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
                <div>
                    <h2 className="text-2xl font-bold">Recent Incident Reports</h2>
                    <p className="text-muted-foreground">
                        Verified submissions from victims and whistleblowers.
                    </p>
                </div>
                <div className="text-sm text-muted-foreground bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    Total Reports Displayed: {reports.length}
                </div>
            </div>

            <div className="grid gap-6">
                {reports.map((report) => (
                    <Card key={report.id} className="overflow-hidden border-l-4 border-l-slate-400 dark:border-l-slate-600">
                        <CardHeader className="bg-slate-50 dark:bg-slate-900/50 pb-3">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs font-bold text-slate-500 bg-white dark:bg-black border px-2 py-0.5 rounded">
                                        {report.id}
                                    </span>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {report.date}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {report.flags.map((flag) => (
                                        <span key={flag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-destructive/10 text-destructive border border-destructive/20">
                                            {flag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="grid md:grid-cols-[1fr_200px] gap-6">
                                <div>
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-warning"></span>
                                        Incident Summary
                                    </h3>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                                        {report.summary}
                                    </p>

                                    <div className="mt-4 pt-4 border-t flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {report.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="font-semibold">Contact Method:</span> {report.method}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg flex flex-col justify-center items-center text-center border">
                                    <DollarSign className="w-6 h-6 text-slate-400 mb-1" />
                                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Reported Loss</span>
                                    <span className="font-bold text-lg text-slate-900 dark:text-slate-100">{report.amountRange}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
