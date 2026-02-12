"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Calendar,
    MapPin,
    DollarSign,
    Loader2,
    AlertTriangle,
    RefreshCw,
    ChevronDown,
    ChevronUp,
    Search,
    FileText,
    Shield,
    ImageIcon,
    Maximize2,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchReports, ApiReport, ApiPagination } from "@/lib/api";
import { reports as fallbackReports } from "@/lib/data";



export function ReportsList() {
    const [reports, setReports] = useState<ApiReport[]>([]);
    const [pagination, setPagination] = useState<ApiPagination | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [locationSearch, setLocationSearch] = useState("");
    const [selectedReport, setSelectedReport] = useState<ApiReport | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    const loadReports = useCallback(async (pageNum: number, location: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetchReports({
                page: pageNum,
                limit: 10,
                sortBy: "createdAt",
                sortOrder: "desc",
                ...(location && { location }),
            });
            setReports(response.data);
            setPagination(response.pagination || null);
        } catch (err) {
            console.error("Failed to fetch reports from API:", err);
            setError("Could not connect to the report database. Showing cached reports.");
            setReports(
                fallbackReports.map((r) => ({
                    reportId: r.id,
                    date: r.date,
                    location: r.location,
                    amountRange: r.amountRange,
                    method: r.method,
                    summary: r.summary,
                    evidence: [], // Added empty array for fallback
                    flags: r.flags,
                    isDeleted: false,
                    deletedAt: null,
                    createdAt: r.date,
                    updatedAt: r.date,
                }))
            );
            setPagination(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadReports(page, locationSearch);
    }, [page, locationSearch, loadReports]);

    function handleSearch() {
        setPage(1);
        loadReports(1, locationSearch);
    }

    function formatDate(dateStr: string): string {
        try {
            const d = new Date(dateStr);
            if (isNaN(d.getTime())) return dateStr;
            return d.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        } catch {
            return dateStr;
        }
    }

    return (
        <div className="space-y-6">
            {/* Filter Bar */}
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-5 backdrop-blur-sm">

                {/* Search + Stats Row */}

                <div className="flex flex-col md:flex-row gap-3 items-end">
                    <div className="flex-1 flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                value={locationSearch}
                                onChange={(e) => setLocationSearch(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                placeholder="Search by location..."
                                className="w-full h-10 pl-10 pr-3 rounded-lg border border-slate-700 bg-slate-900/80 text-sm text-slate-200 placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
                            />
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleSearch}
                            className="h-10 bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                        >
                            <Search className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => loadReports(page, locationSearch)}
                            className="text-slate-500 hover:text-white hover:bg-slate-800"
                        >
                            <RefreshCw className="w-3.5 h-3.5 mr-1" />
                            Refresh
                        </Button>
                        <div className="text-sm text-slate-500 bg-slate-800 px-4 py-2 rounded-lg font-mono">
                            <FileText className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                            {pagination ? `${pagination.totalRecords} records` : `${reports.length} records`}
                        </div>
                    </div>
                </div>
            </div>

            {/* Error banner */}
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-amber-950/30 border border-amber-900/30 rounded-xl px-5 py-3 text-sm text-amber-400"
                >
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    {error}
                </motion.div>
            )}

            {/* Loading Skeletons */}
            {loading && (
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden animate-pulse">
                            <div className="bg-slate-900 px-6 py-4 flex items-center gap-3">
                                <div className="w-24 h-5 bg-slate-800 rounded" />
                                <div className="w-32 h-4 bg-slate-800 rounded" />
                                <div className="flex-1" />
                                <div className="w-16 h-5 bg-slate-800 rounded-full" />
                            </div>
                            <div className="px-6 py-5 space-y-3">
                                <div className="w-3/4 h-4 bg-slate-800 rounded" />
                                <div className="w-full h-3 bg-slate-800 rounded" />
                                <div className="w-2/3 h-3 bg-slate-800 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Reports Grid */}
            {!loading && (
                <div className="space-y-4">
                    {reports.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-slate-900/60 border border-slate-800 rounded-xl p-16 text-center"
                        >
                            <Shield className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                            <p className="text-slate-500 text-lg font-bold">No reports found</p>
                            <p className="text-slate-600 text-sm mt-1">Try adjusting filters or be the first to submit a report.</p>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {reports.map((report, index) => {
                                const hasEvidence = report.evidence && report.evidence.length > 0;

                                return (
                                    <motion.div
                                        key={report.reportId}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                    >
                                        <Card
                                            className="overflow-hidden bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-600 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer group h-full flex flex-col relative"
                                            onClick={() => setSelectedReport(report)}
                                        >
                                            <div className="absolute top-0 left-0 w-1 h-full bg-slate-800 group-hover:bg-red-500/50 transition-colors" />

                                            <CardHeader className="bg-slate-950/30 pb-3 px-5 pt-4 border-b border-slate-800/50">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-mono text-[10px] font-black text-slate-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded group-hover:text-red-400 group-hover:border-red-900/30 transition-colors">
                                                            {report.reportId}
                                                        </span>
                                                        <div className="flex items-center text-xs text-slate-500">
                                                            <Calendar className="w-3 h-3 mr-1" />
                                                            {formatDate(report.date)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardHeader>

                                            <CardContent className="pt-4 px-5 pb-5 flex-1 flex flex-col">
                                                {/* Labels */}
                                                <div className="flex flex-wrap gap-1.5 mb-3">
                                                    {report.flags.slice(0, 3).map((flag) => (
                                                        <span
                                                            key={flag}
                                                            className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800/50 text-slate-400 border border-slate-700/50 uppercase tracking-wider"
                                                        >
                                                            {flag}
                                                        </span>
                                                    ))}
                                                    {report.flags.length > 3 && (
                                                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-500">
                                                            +{report.flags.length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="font-bold mb-2 flex items-center gap-2 text-slate-200 text-sm uppercase tracking-wide group-hover:text-red-400 transition-colors">
                                                    Incident Summary
                                                </h3>
                                                <p className="text-slate-400 leading-relaxed text-xs mb-4 line-clamp-3">
                                                    {report.summary}
                                                </p>

                                                <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-800/50">
                                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                        <MapPin className="w-3 h-3" />
                                                        {report.location}
                                                    </div>
                                                    {hasEvidence && (
                                                        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                                                            <ImageIcon className="w-3 h-3" />
                                                            <span>{report.evidence.length} Evidence</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 pt-6">
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={!pagination.hasPrevPage}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        className="bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white disabled:opacity-30"
                    >
                        ← Previous
                    </Button>
                    <span className="text-sm text-slate-500 font-mono">
                        {pagination.currentPage} / {pagination.totalPages}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        disabled={!pagination.hasNextPage}
                        onClick={() => setPage((p) => p + 1)}
                        className="bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white disabled:opacity-30"
                    >
                        Next →
                    </Button>
                </div>
            )}

            {/* Report Detail Modal */}
            <AnimatePresence>
                {selectedReport && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setSelectedReport(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="bg-slate-950/80 px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
                                <div>
                                    <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                        <span className="font-mono text-sm bg-red-950/30 text-red-500 border border-red-900/30 px-2 py-1 rounded">
                                            {selectedReport.reportId}
                                        </span>
                                        <span className="uppercase tracking-wide text-sm text-slate-400">Case Evidence File</span>
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setSelectedReport(null)}
                                    className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Content - Scrollable */}
                            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                                <div className="grid md:grid-cols-[1fr_300px] gap-8">
                                    {/* Left Column: Details & Evidence */}
                                    <div className="space-y-8">
                                        {/* Victim Narrative */}
                                        <div className="space-y-3">
                                            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-300 uppercase tracking-wider">
                                                <FileText className="w-4 h-4 text-red-500" />
                                                Incident Report
                                            </h3>
                                            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/50">
                                                <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                                                    {selectedReport.summary}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Evidence Gallery */}
                                        <div className="space-y-4">
                                            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-300 uppercase tracking-wider">
                                                <ImageIcon className="w-4 h-4 text-red-500" />
                                                Attached Evidence ({selectedReport.evidence?.length || 0})
                                            </h3>

                                            {selectedReport.evidence && selectedReport.evidence.length > 0 ? (
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                    {selectedReport.evidence.map((item, i) => {
                                                        // Ensure API URL doesn't have /api/v1 suffix for static files
                                                        const cleanApiUrl = API_URL.replace(/\/api\/v1\/?$/, '');
                                                        const url = `${cleanApiUrl}${item.startsWith('/') ? '' : '/'}${item}`;

                                                        const lowerItem = item.toLowerCase();
                                                        const isVideo = lowerItem.endsWith('.webm') || lowerItem.endsWith('.mp4');
                                                        const isAudio = lowerItem.endsWith('.mp3') || lowerItem.endsWith('.wav') || lowerItem.endsWith('.ogg');

                                                        return (
                                                            <div
                                                                key={i}
                                                                className="relative aspect-video bg-slate-950 rounded border border-slate-800 overflow-hidden cursor-pointer group/img flex items-center justify-center"
                                                                onClick={() => !isAudio && setSelectedImage(url)}
                                                            >
                                                                {isVideo ? (
                                                                    <video src={url} className="w-full h-full object-cover" />
                                                                ) : isAudio ? (
                                                                    <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-slate-900">
                                                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mb-1">
                                                                            <FileText className="w-4 h-4 text-slate-400" />
                                                                        </div>
                                                                        <audio controls src={url} className="w-full h-6" onClick={e => e.stopPropagation()} />
                                                                    </div>
                                                                ) : (
                                                                    <img
                                                                        src={url}
                                                                        alt={`Evidence ${i + 1}`}
                                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                                                    />
                                                                )}

                                                                {!isAudio && (
                                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                                                        <Maximize2 className="w-6 h-6 text-white" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                <p className="text-slate-500 text-sm italic p-4 border border-slate-800/50 rounded-lg text-center bg-slate-950/30">
                                                    No visual evidence was submitted with this report.
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column: Key Stats & Metadata */}
                                    <div className="space-y-6">
                                        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                                            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                                                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800">
                                                    <DollarSign className="w-5 h-5 text-green-500" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">Reported Loss</p>
                                                    <p className="text-lg font-bold text-white">{selectedReport.amountRange}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                                                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800">
                                                    <MapPin className="w-5 h-5 text-blue-500" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">Location</p>
                                                    <p className="text-sm font-bold text-white">{selectedReport.location}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800">
                                                    <Calendar className="w-5 h-5 text-amber-500" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">Date Reported</p>
                                                    <p className="text-sm font-bold text-white">{formatDate(selectedReport.date)}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-2">Scam Types / Flags</p>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedReport.flags.map(flag => (
                                                    <span
                                                        key={flag}
                                                        className="bg-red-950/30 text-red-400 border border-red-900/40 px-3 py-1.5 rounded-lg text-xs font-bold"
                                                    >
                                                        {flag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono mb-1">Contact Method</p>
                                            <p className="text-sm text-slate-300 font-medium">{selectedReport.method}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Modal (Full Screen) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-slate-400 hover:text-white"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        {(() => {
                            const lowerImg = selectedImage?.toLowerCase() || '';
                            const isVideo = lowerImg.endsWith('.webm') || lowerImg.endsWith('.mp4');

                            if (isVideo) {
                                return (
                                    <video
                                        src={selectedImage}
                                        controls
                                        autoPlay
                                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-slate-800"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                );
                            }
                            return (
                                <motion.img
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    src={selectedImage || undefined}
                                    alt="Full size evidence"
                                    className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-slate-800"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            );
                        })()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
