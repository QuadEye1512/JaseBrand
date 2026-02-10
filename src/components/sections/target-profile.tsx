"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { UserX, Globe, AlertCircle, ChevronLeft, ChevronRight, Fingerprint, FileWarning } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder images - in a real scenario, this would be a list of different image paths
const evidenceImages = [
    "/JB.png",
    "/JB.png", // Duplicate for demo
    "/JB.png"  // Duplicate for demo
];

export function TargetProfile() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % evidenceImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + evidenceImages.length) % evidenceImages.length);
    };

    return (
        <section className="py-24 bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
            {/* Background Texture - 'Paper' feel */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply dark:mix-blend-overlay"></div>

            <Container className="relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b-4 border-slate-300 dark:border-slate-800 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-red-600 text-white p-3 rounded-md shadow-lg transform -rotate-2">
                                <FileWarning className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-800 dark:text-slate-100 tracking-tighter">
                                    Subject Profile
                                </h2>
                                <p className="font-mono text-red-600 font-bold tracking-widest uppercase">
                                    Case File #8921-FRAUD
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 px-6 py-2 border-4 border-red-600 rounded-lg transform rotate-2">
                            <span className="text-2xl font-black text-red-600 uppercase tracking-widest">
                                CONFIRMED SCAMMER
                            </span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* LEFT COLUMN: Gallery & ID */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Evidence Photo Gallery */}
                            <div className="relative bg-white dark:bg-slate-800 p-2 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 transform -rotate-1">
                                {/* 'Attached' Paperclip visual */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 border-4 border-slate-400 rounded-full z-20 bg-transparent border-b-0"></div>

                                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-900">
                                    <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
                                        Surveillance
                                    </div>
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex}
                                            src={evidenceImages[currentImageIndex]}
                                            alt={`Suspect Image ${currentImageIndex + 1}`}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                                        />
                                    </AnimatePresence>

                                    {/* Navigation Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 hover:opacity-100 transition-opacity">
                                        <Button size="icon" variant="ghost" className="bg-black/50 text-white hover:bg-black/70 hover:text-white" onClick={prevImage}>
                                            <ChevronLeft className="w-6 h-6" />
                                        </Button>
                                        <Button size="icon" variant="ghost" className="bg-black/50 text-white hover:bg-black/70 hover:text-white" onClick={nextImage}>
                                            <ChevronRight className="w-6 h-6" />
                                        </Button>
                                    </div>

                                    {/* Pagination Dots */}
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                        {evidenceImages.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-red-600 scale-125' : 'bg-white/50'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-3 text-center font-mono text-xs text-slate-400 uppercase">
                                    Image {currentImageIndex + 1} of {evidenceImages.length} • Source: Social Media
                                </div>
                            </div>

                            {/* Fingerprint ID Card */}
                            <div className="bg-slate-200 dark:bg-slate-800 p-4 rounded-lg flex items-center gap-4 opacity-80">
                                <Fingerprint className="w-12 h-12 text-slate-400" />
                                <div>
                                    <h4 className="font-bold text-sm uppercase text-slate-600 dark:text-slate-400">Digital Fingerprint</h4>
                                    <p className="text-xs text-slate-500">ID: JB-882-X9</p>
                                    <p className="text-xs text-slate-500">Status: FLAGGED</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Dossier Data */}
                        <div className="lg:col-span-7">
                            <div className="bg-white dark:bg-slate-950 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                                <div className="bg-slate-100 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                    <h3 className="font-black uppercase text-lg text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                        <UserX className="w-5 h-5 text-red-500" />
                                        Suspect Dossier
                                    </h3>
                                    <div className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-bold uppercase rounded">
                                        High Risk
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 space-y-8">
                                    {/* Known Aliases */}
                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 dark:border-slate-800 pb-1">
                                            Primary Aliases
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded border-l-4 border-red-500 shadow-sm">
                                                <span className="block text-lg font-black text-slate-900 dark:text-white">JASE BRAND</span>
                                                <span className="text-[10px] uppercase text-slate-500 font-bold">Most Active</span>
                                            </div>
                                            <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded border-l-4 border-orange-400 shadow-sm">
                                                <span className="block text-lg font-black text-slate-900 dark:text-white">Jason Perez</span>
                                                <span className="text-[10px] uppercase text-slate-500 font-bold">Legal Name (Alleged)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* False Claims */}
                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 dark:border-slate-800 pb-1">
                                            Fabricated Credentials
                                        </h4>
                                        <p className="font-serif italic text-lg text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-slate-300 pl-4">
                                            "I am a Venture Capitalist." <br />
                                            "I run a private Angel Fund." <br />
                                            "I specialize in 50x returns."
                                        </p>
                                    </div>

                                    {/* Modus Operandi */}
                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-100 dark:border-slate-800 pb-1">
                                            Tactical Analysis (Modus Operandi)
                                        </h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="flex gap-3 bg-red-50 dark:bg-red-950/10 p-4 rounded-lg">
                                                <Globe className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                                <div>
                                                    <h5 className="font-bold text-red-700 dark:text-red-400 text-sm uppercase mb-1">Lifestyle Luring</h5>
                                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                                        Posts photos of rented luxury cars/villas to fabricate success.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 bg-red-50 dark:bg-red-950/10 p-4 rounded-lg">
                                                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                                <div>
                                                    <h5 className="font-bold text-red-700 dark:text-red-400 text-sm uppercase mb-1">Vague Contracts</h5>
                                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                                        Refuses video calls. Documents are non-binding PDF templates.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Platforms */}
                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 dark:border-slate-800 pb-1">
                                            Area of Operations
                                        </h4>
                                        <div className="flex gap-2">
                                            {['Instagram', 'Telegram', 'WhatsApp'].map(platform => (
                                                <span key={platform} className="px-3 py-1 bg-slate-800 text-white text-xs font-bold uppercase rounded-sm">
                                                    {platform}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
