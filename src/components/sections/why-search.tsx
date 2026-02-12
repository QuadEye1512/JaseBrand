"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Search, ShieldCheck, FileWarning, Users, HelpCircle } from "lucide-react";

const searchReasons = [
    {
        icon: ShieldCheck,
        title: "Verify Legitimacy",
        description: "Checking whether Jase Brand is a legitimate investment opportunity before committing funds.",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
    },
    {
        icon: Search,
        title: "Find Scam Reports",
        description: "Looking for scam reports or user experiences from others who have interacted with Jase Brand.",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/20",
    },
    {
        icon: HelpCircle,
        title: "Learn to Protect Themselves",
        description: "Understanding how to protect themselves from online fraud and recognize warning signs.",
        color: "text-sky-500",
        bgColor: "bg-sky-500/10",
        borderColor: "border-sky-500/20",
    },
    {
        icon: FileWarning,
        title: "Report Potential Scams",
        description: "Seeking ways to report potential scams to authorities or community platforms to help others.",
        color: "text-red-500",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/20",
    },
];

export function WhySearch() {
    return (
        <section id="why-search-jase-brand" className="py-20 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />

            <Container className="relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-slate-200 dark:border-slate-800">
                            <Users className="w-3.5 h-3.5" />
                            <span>Search Intent Analysis</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white uppercase tracking-tight">
                            Why Search for{" "}
                            <span className="text-red-600">&ldquo;Jase Brand&rdquo;</span>?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            People searching for Jase Brand online are often trying to protect themselves. This content helps connect those search intents with accurate and informative guidance.
                        </p>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {searchReasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`group relative p-6 rounded-xl border ${reason.borderColor} ${reason.bgColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl ${reason.bgColor} flex items-center justify-center shrink-0`}>
                                            <Icon className={`w-6 h-6 ${reason.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                                {reason.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* SEO Note
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-sm text-slate-500 dark:text-slate-500 italic max-w-xl mx-auto">
                            This SEO content helps connect those search intents with accurate and informative guidance — ensuring that people looking for answers find trustworthy, community-driven information.
                        </p>
                    </motion.div> */}
                </div>
            </Container>
        </section>
    );
}
