"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageCircle, DollarSign, Ban, LockKeyhole } from "lucide-react";

const steps = [
    {
        icon: MessageCircle,
        title: "1. The Hook",
        subtitle: "Unsolicited DM or Group Add",
        description: "It starts with a friendly message on Instagram or Telegram. 'I can help you invest' or 'Join my exclusive signal group'.",
        reality: "REALITY: Scammers bulk-message thousands. You were not 'chosen'. It's a bot or a script."
    },
    {
        icon: DollarSign,
        title: "2. The Bait",
        subtitle: "Guaranteed Huge ROI",
        description: "They promise 10x, 20x, or 50x returns in 24-48 hours. They might show screenshots of 'proof' (fake bank transfers).",
        reality: "REALITY: No legal investment guarantees these returns. The screenshots are Photoshop edits."
    },
    {
        icon: LockKeyhole,
        title: "3. The Sting",
        subtitle: "Unexpected 'Fees' & 'Taxes'",
        description: "You send the money. But before you can withdraw profits, you must pay a 'Withdrawal Fee', 'Tax', or 'Gas Fee'.",
        reality: "REALITY: There are no profits. They are milking you for more money before they disappear."
    },
    {
        icon: Ban,
        title: "4. The Ghost",
        subtitle: "Blocked & Deleted",
        description: "Once you stop paying or ask too many questions, the chat vanishes. You are blocked. The money is gone.",
        reality: "REALITY: This is the end game. They move on to the next victim instantly."
    }
];

export function ReportPatterns() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
            <Container>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-red-600 uppercase tracking-tight">
                        THE SCAM ANATOMY
                    </h2>
                    <p className="text-xl text-slate-700 dark:text-slate-300 font-medium">
                        Does this sound familiar? This is the <span className="text-red-600 font-bold underline decoration-wavy">exact process</span> victims report going through with Jase Brand.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Interactive Steps List */}
                    <div className="space-y-4">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "cursor-pointer transition-all duration-300 transform rounded-xl border-2 p-4 flex items-center gap-4 group",
                                    activeStep === index
                                        ? "bg-red-600 border-red-600 text-white scale-105 shadow-xl"
                                        : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-900"
                                )}
                                onMouseEnter={() => setActiveStep(index)}
                                onClick={() => setActiveStep(index)}
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-lg",
                                    activeStep === index
                                        ? "bg-white text-red-600"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-red-50 dark:group-hover:bg-red-900/30 group-hover:text-red-500"
                                )}>
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className={cn("font-bold text-lg", activeStep === index ? "text-white" : "text-slate-900 dark:text-white")}>
                                        {step.title}
                                    </h3>
                                    <p className={cn("text-sm", activeStep === index ? "text-red-100" : "text-muted-foreground")}>
                                        {step.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Detail View */}
                    <div className="relative h-full min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <Card className="h-full p-8 border-4 border-slate-200 dark:border-slate-800 flex flex-col justify-center relative overflow-hidden bg-white dark:bg-slate-950">
                                    <div className="absolute top-0 right-0 p-32 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                                    {/* Icon */}
                                    <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 mb-8 mx-auto md:mx-0">
                                        {(() => {
                                            const Icon = steps[activeStep].icon;
                                            return <Icon className="w-10 h-10" />;
                                        })()}
                                    </div>

                                    <h3 className="text-3xl font-black mb-4 uppercase text-slate-900 dark:text-white">
                                        {steps[activeStep].subtitle}
                                    </h3>

                                    <div className="prose dark:prose-invert">
                                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                            "{steps[activeStep].description}"
                                        </p>

                                        <div className="bg-red-50 dark:bg-red-950/50 border-l-4 border-red-600 p-6 rounded-r-lg">
                                            <p className="text-red-800 dark:text-red-200 font-bold italic">
                                                {steps[activeStep].reality}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
}
