import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-red-900 py-16 mt-auto text-slate-400">
            <Container>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-white text-lg font-black uppercase tracking-wider flex items-center gap-2">
                            <span className="text-red-600">⚠️</span> Consumer Warning
                        </h3>
                        <p className="text-sm leading-relaxed max-w-md text-slate-500">
                            This is not a promotional site — it is a <span className="text-white font-bold">community-driven alert platform</span> designed to help people identify potential scams involving <span className="text-white font-bold">Jase Brand / Jason Perez</span> and protect themselves from financial loss.
                        </p>
                        <p className="text-xs border-l-2 border-red-900 pl-4 italic text-slate-600">
                            "All claims are based on consumer reports and active fraud warnings. This is a community protection effort, not a legal entity. 2026 Update."
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Navigation</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-wide">
                                    &gt; Home Base
                                </Link>
                            </li>
                            <li>
                                <Link href="/reports" className="hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-wide">
                                    &gt; View Evidence
                                </Link>
                            </li>
                            <li>
                                <Link href="/report-scam" className="hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-wide">
                                    &gt; Submit Report
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Official Channels</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="https://reportfraud.ftc.gov"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                                    FTC Report Use (US)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.actionfraud.police.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                                    Action Fraud (UK)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.ic3.gov"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                    FBI IC3 (Cyber)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Jase Brand Scam Alert.</p>
                    <p className="mt-2 md:mt-0">Community-Driven Alert Platform • 2026 Update</p>
                </div>
            </Container>
        </footer>
    );
}
