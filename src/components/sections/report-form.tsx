"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    CheckCircle2,
    AlertTriangle,
    Loader2,
    ShieldCheck,
    User,
    FileText,
    Flag,
    ArrowRight,
    ArrowLeft,
    Lock,
    Copy,
    Check,
    UploadCloud,
    X,
    Image as ImageIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { createReport } from "@/lib/api";

const SCAM_FLAGS = [
    "Advance Fee",
    "Crypto Payment",
    "Pressure Tactics",
    "Identity Theft",
    "Romance Scam",
    "Investment Fraud",
    "Fake Documents",
    "Phishing",
    "Pig Butchering",
    "Mentorship Scam",
] as const;

const COUNTRY_MAP: Record<string, string> = {
    US: "United States",
    UK: "United Kingdom",
    CA: "Canada",
    AU: "Australia",
    IN: "India",
    AE: "UAE",
    SG: "Singapore",
    Other: "Other",
};

const AMOUNT_MAP: Record<string, string> = {
    "0-1000": "Less than $1,000",
    "1000-5000": "$1,000 - $5,000",
    "5000-10000": "$5,000 - $10,000",
    "10000-50000": "$10,000 - $50,000",
    "50000+": "$50,000+",
};

const STEPS = [
    { label: "IDENTITY", icon: User, description: "Optional personal details" },
    { label: "INCIDENT", icon: FileText, description: "What happened" },
    { label: "EVIDENCE", icon: UploadCloud, description: "Upload proof" },
    { label: "FLAGS & SUBMIT", icon: Flag, description: "Categorize & send" },
];

const inputClass =
    "flex h-11 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:border-red-500/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all";
const selectClass =
    "flex h-11 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:border-red-500/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all";
const labelClass = "text-sm font-bold text-slate-300 uppercase tracking-wider";

export function ReportForm() {
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [reportId, setReportId] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [selectedFlags, setSelectedFlags] = useState<string[]>([]);
    const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);
    const [copied, setCopied] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        amount: "",
        method: "",
        description: "",
    });

    function updateField(field: string, value: string) {
        setFormData((prev) => ({ ...prev, [field]: value }));
    }

    function toggleFlag(flag: string) {
        setSelectedFlags((prev) =>
            prev.includes(flag) ? prev.filter((f) => f !== flag) : [...prev, flag]
        );
    }

    function canProceed(): boolean {
        if (step === 0) return true; // identity is optional
        if (step === 1) {
            return !!(formData.country && formData.amount && formData.method && formData.description && formData.description.length >= 20);
        }
        if (step === 2) return true; // Evidence is optional
        if (step === 3) return selectedFlags.length > 0;
        return false;
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            // Limit to 5 files total. Allow images, video, audio.
            const validFiles = newFiles.filter(file =>
                file.type.startsWith('image/') ||
                file.type.startsWith('video/') ||
                file.type.startsWith('audio/')
            );
            setEvidenceFiles(prev => [...prev, ...validFiles].slice(0, 5));
        }
    }

    function removeFile(index: number) {
        setEvidenceFiles(prev => prev.filter((_, i) => i !== index));
    }

    async function handleSubmit() {
        setIsSubmitting(true);
        setError(null);

        try {
            const formDataPayload = new FormData();
            formDataPayload.append("date", new Date().toISOString());
            formDataPayload.append("location", COUNTRY_MAP[formData.country] || formData.country);
            formDataPayload.append("amountRange", AMOUNT_MAP[formData.amount] || formData.amount);
            formDataPayload.append("method", formData.method);
            formDataPayload.append("summary", formData.description);
            selectedFlags.forEach(flag => formDataPayload.append("flags[]", flag));
            evidenceFiles.forEach(file => formDataPayload.append("evidence", file));

            const response = await createReport(formDataPayload);

            setReportId(response.data.reportId);
            setIsSubmitting(false);
            setIsSuccess(true);
        } catch (err) {
            setIsSubmitting(false);
            setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
        }
    }

    function resetForm() {
        setStep(0);
        setIsSuccess(false);
        setReportId("");
        setSelectedFlags([]);
        setEvidenceFiles([]);
        setFormData({ name: "", email: "", country: "", amount: "", method: "", description: "" });
        setError(null);
    }

    async function copyReportId() {
        await navigator.clipboard.writeText(reportId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    // ── SUCCESS STATE ──
    if (isSuccess) {
        return (
            <Container className="max-w-2xl py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/30 border-b border-green-800/50 px-8 py-6 text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="mx-auto w-20 h-20 bg-green-900/50 rounded-full flex items-center justify-center mb-4 border-2 border-green-500/50"
                            >
                                <CheckCircle2 className="w-10 h-10 text-green-400" />
                            </motion.div>
                            <h2 className="text-2xl font-black text-green-400 uppercase tracking-wide">
                                Report Filed Successfully
                            </h2>
                            <p className="text-slate-400 mt-2 text-sm">
                                Your report has been securely stored in our database.
                            </p>
                        </div>

                        {/* Report ID Card */}
                        <div className="p-8 space-y-6">
                            <div className="bg-slate-950 border border-slate-700 rounded-xl p-6 text-center">
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                                    Your Case Reference ID
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    <span className="text-3xl font-black text-white font-mono tracking-wider">
                                        {reportId}
                                    </span>
                                    <button
                                        onClick={copyReportId}
                                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <p className="text-sm text-slate-400 text-center leading-relaxed">
                                Your contribution helps prevent others from becoming victims.
                                The report is now part of the community alert database and may be used to support ongoing investigations.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button
                                    onClick={resetForm}
                                    variant="outline"
                                    className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                                >
                                    Submit Another Report
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        );
    }

    // ── MAIN FORM ──
    return (
        <Container className="max-w-3xl py-12">
            {/* Hero Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 text-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-950/40 text-red-400 text-xs font-bold uppercase tracking-widest rounded-full mb-5 border border-red-900/30">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Secure Report Submission</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3">
                    File a <span className="text-red-500">Fraud Report</span>
                </h1>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Document your experience with Jase Brand or Jason Perez. All submissions are encrypted and stored securely.
                </p>
            </motion.div>

            {/* Step Indicator */}
            <div className="mb-8">
                <div className="flex items-center justify-between max-w-lg mx-auto">
                    {STEPS.map((s, i) => {
                        const Icon = s.icon;
                        const isActive = i === step;
                        const isCompleted = i < step;
                        return (
                            <div key={s.label} className="flex items-center gap-2 flex-1">
                                <div className="flex flex-col items-center flex-1">
                                    <motion.div
                                        animate={{
                                            scale: isActive ? 1.1 : 1,
                                            borderColor: isActive ? "rgb(239 68 68)" : isCompleted ? "rgb(34 197 94)" : "rgb(51 65 85)",
                                        }}
                                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${isActive
                                            ? "bg-red-950/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                                            : isCompleted
                                                ? "bg-green-950/50"
                                                : "bg-slate-900"
                                            }`}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                                        ) : (
                                            <Icon className={`w-5 h-5 ${isActive ? "text-red-400" : "text-slate-500"}`} />
                                        )}
                                    </motion.div>
                                    <span className={`text-[10px] font-mono mt-2 uppercase tracking-widest ${isActive ? "text-red-400" : isCompleted ? "text-green-400" : "text-slate-600"
                                        }`}>
                                        {s.label}
                                    </span>
                                </div>
                                {i < STEPS.length - 1 && (
                                    <div className={`h-0.5 flex-1 mx-1 -mt-5 rounded ${isCompleted ? "bg-green-600" : "bg-slate-800"
                                        }`} />
                                )}
                            </div>
                        );
                    })}
                </div>
                {/* Progress bar */}
                <div className="mt-6 h-1 bg-slate-800 rounded-full overflow-hidden max-w-lg mx-auto">
                    <motion.div
                        className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
                        animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                </div>
            </div>

            {/* Privacy Notice */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 bg-amber-950/20 border border-amber-900/30 rounded-xl px-5 py-4 mb-8"
            >
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                    <p className="text-sm font-bold text-amber-400 mb-1">Privacy Guarantee</p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        Your personal details (Name, Email) are <span className="text-white font-bold">never published</span>.
                        Only anonymized incident data (Date, Method, Amount) appears in the public register.
                    </p>
                </div>
            </motion.div>

            {/* Error */}
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-950/30 border border-red-800/50 rounded-xl px-5 py-4 mb-6 text-sm text-red-400"
                >
                    <strong>Error:</strong> {error}
                </motion.div>
            )}

            {/* Form Card */}
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                            Step {step + 1} of {STEPS.length} — {STEPS[step].description}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-green-500">
                        <Lock className="w-3 h-3" />
                        <span className="font-mono">ENCRYPTED</span>
                    </div>
                </div>

                <div className="p-6 md:p-8 min-h-[380px]">
                    <AnimatePresence mode="wait">
                        {/* STEP 0: Identity */}
                        {step === 0 && (
                            <motion.div
                                key="step-0"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div>
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                                        Personal Information
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        These fields are completely optional. Skip if you prefer to remain anonymous.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className={labelClass}>Your Name</label>
                                        <input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => updateField("name", e.target.value)}
                                            className={inputClass}
                                            placeholder="John Doe (optional)"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className={labelClass}>Email Address</label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => updateField("email", e.target.value)}
                                            className={inputClass}
                                            placeholder="john@example.com (optional)"
                                        />
                                    </div>
                                </div>
                                <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-4 flex items-start gap-3">
                                    <Lock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        If provided, your contact details are stored securely and only used for follow-up verification.
                                        They are <span className="text-slate-300 font-bold">never shared publicly</span>.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 1: Incident Details */}
                        {step === 1 && (
                            <motion.div
                                key="step-1"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div>
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                                        Incident Details
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        Describe the scam encounter. All fields marked * are required.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="country" className={labelClass}>Country *</label>
                                        <select
                                            id="country"
                                            value={formData.country}
                                            onChange={(e) => updateField("country", e.target.value)}
                                            required
                                            className={selectClass}
                                        >
                                            <option value="">Select Country</option>
                                            {Object.entries(COUNTRY_MAP).map(([code, name]) => (
                                                <option key={code} value={code}>{name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="amount" className={labelClass}>Amount Lost *</label>
                                        <select
                                            id="amount"
                                            value={formData.amount}
                                            onChange={(e) => updateField("amount", e.target.value)}
                                            required
                                            className={selectClass}
                                        >
                                            <option value="">Select Range</option>
                                            {Object.entries(AMOUNT_MAP).map(([code, name]) => (
                                                <option key={code} value={code}>{name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="method" className={labelClass}>Contact Method *</label>
                                    <input
                                        id="method"
                                        value={formData.method}
                                        onChange={(e) => updateField("method", e.target.value)}
                                        required
                                        className={inputClass}
                                        placeholder="e.g., Instagram DM → WhatsApp Group"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="description" className={labelClass}>
                                        Incident Description *{" "}
                                        <span className="text-slate-600 normal-case font-normal">(min 20 chars)</span>
                                    </label>
                                    <textarea
                                        id="description"
                                        value={formData.description}
                                        onChange={(e) => updateField("description", e.target.value)}
                                        required
                                        minLength={20}
                                        rows={5}
                                        className={`${inputClass} h-auto resize-none`}
                                        placeholder="Describe what happened in detail — how the conversation started, what promises were made, how payment was requested..."
                                    />
                                    <div className="text-right">
                                        <span className={`text-xs font-mono ${formData.description.length >= 20 ? "text-green-500" : "text-slate-600"
                                            }`}>
                                            {formData.description.length}/20 min
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: EVIDENCE */}
                        {step === 2 && (
                            <motion.div
                                key="step-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div>
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                                        Evidence Upload
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        Upload screenshots of conversations, payments, or profiles. (Max 5 images)
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-700 border-dashed rounded-lg cursor-pointer bg-slate-900/50 hover:bg-slate-800 hover:border-red-500/50 transition-all group">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <UploadCloud className="w-8 h-8 text-slate-500 group-hover:text-red-500 mb-2 transition-colors" />
                                            <p className="text-sm text-slate-400">
                                                <span className="font-bold text-slate-300">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-slate-500">Images, Video, Audio (MAX. 50MB)</p>
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            multiple
                                            accept="image/*,video/*,audio/*"
                                            onChange={handleFileChange}
                                        />
                                    </label>

                                    {/* File List */}
                                    {evidenceFiles.length > 0 && (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {evidenceFiles.map((file, i) => (
                                                <div key={i} className="relative group bg-slate-950 border border-slate-800 rounded-lg p-2 flex items-center gap-2 overflow-hidden">
                                                    <div className="w-10 h-10 bg-slate-900 rounded flex-shrink-0 flex items-center justify-center">
                                                        <ImageIcon className="w-5 h-5 text-slate-500" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-xs text-slate-300 truncate">{file.name}</p>
                                                        <p className="text-[10px] text-slate-600">{(file.size / 1024).toFixed(0)} KB</p>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFile(i)}
                                                        className="p-1 hover:bg-red-900/50 rounded text-slate-500 hover:text-red-500 transition-colors"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Privacy Disclaimer */}
                                    <div className="bg-amber-950/20 border border-amber-900/30 rounded-lg p-3 flex items-start gap-3">
                                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                        <p className="text-xs text-amber-500/80 leading-relaxed">
                                            <strong className="text-amber-500">Public visibility warning:</strong> Any images uploaded will be visible in the public report database. Please redact sensitive personal information before uploading.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Flags & Submit */}
                        {step === 3 && (
                            <motion.div
                                key="step-3"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div>
                                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                                        Scam Categories
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        Select all flags that apply to your experience. At least one is required.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {SCAM_FLAGS.map((flag) => {
                                        const isSelected = selectedFlags.includes(flag);
                                        return (
                                            <motion.button
                                                key={flag}
                                                type="button"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => toggleFlag(flag)}
                                                className={`text-sm font-medium px-4 py-3 rounded-xl border transition-all text-left ${isSelected
                                                    ? "bg-red-950/50 text-red-400 border-red-600 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                                                    : "bg-slate-900 border-slate-700 hover:border-slate-600 text-slate-400 hover:text-slate-300"
                                                    }`}
                                            >
                                                <span className="flex items-center gap-2">
                                                    <span className={`w-4 h-4 rounded border-2 flex items-center justify-center text-[10px] ${isSelected ? "border-red-500 bg-red-600 text-white" : "border-slate-600"
                                                        }`}>
                                                        {isSelected && "✓"}
                                                    </span>
                                                    {flag}
                                                </span>
                                            </motion.button>
                                        );
                                    })}
                                </div>

                                {/* Summary preview */}
                                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 space-y-3">
                                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                                        Report Summary
                                    </h4>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <span className="text-slate-500 block text-xs">Location</span>
                                            <span className="text-white font-bold">{COUNTRY_MAP[formData.country] || "—"}</span>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 block text-xs">Amount</span>
                                            <span className="text-white font-bold">{AMOUNT_MAP[formData.amount] || "—"}</span>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 block text-xs">Method</span>
                                            <span className="text-white font-bold">{formData.method || "—"}</span>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 block text-xs">Flags</span>
                                            <span className="text-red-400 font-bold">{selectedFlags.length} selected</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Navigation */}
                <div className="bg-slate-950/50 border-t border-slate-800 px-6 py-4 flex justify-between items-center">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setStep((s) => s - 1)}
                        disabled={step === 0}
                        className="text-slate-400 hover:text-white hover:bg-slate-800"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                    </Button>

                    {step < STEPS.length - 1 ? (
                        <Button
                            type="button"
                            onClick={() => setStep((s) => s + 1)}
                            disabled={!canProceed()}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.3)] disabled:opacity-40 disabled:shadow-none"
                        >
                            Next Step
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button
                            type="button"
                            onClick={handleSubmit}
                            disabled={!canProceed() || isSubmitting}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.4)] disabled:opacity-40 disabled:shadow-none"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Encrypting & Filing...
                                </>
                            ) : (
                                <>
                                    <ShieldCheck className="mr-2 h-4 w-4" />
                                    Submit Secure Report
                                </>
                            )}
                        </Button>
                    )}
                </div>
            </div>
        </Container>
    );
}
