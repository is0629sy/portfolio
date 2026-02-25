"use client";

import { ArrowRight, ChevronRight, Terminal } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full -z-10 overflow-hidden hidden lg:block">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 via-indigo-50/5 to-transparent rounded-full blur-3xl" />
                {/* Abstract "Code" visual */}
                <div className="absolute top-1/4 left-1/4 w-full h-full opacity-[0.03] font-mono text-[10px] leading-relaxed rotate-[15deg]">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="whitespace-nowrap">
                            {`const developer = { name: "AI Native", features: ["Speed", "Quality", "AI Prompting"], goals: "Innovation" };`}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-accent bg-accent/5 rounded-full border border-accent/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Available for Work
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.9]">
                            AI Native
                            <span className="block text-accent">Engineer.</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="mt-10 text-lg sm:text-xl text-muted leading-relaxed max-w-lg">
                            確かな基礎力と最新AIを駆使した
                            <span className="text-foreground font-semibold"> 爆速開発 </span>
                            で、アイデアを形にします。
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="mt-12 flex flex-wrap items-center gap-6">
                            <a
                                href="#works"
                                className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-foreground rounded-2xl hover:bg-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/40"
                            >
                                View Works
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="group flex items-center gap-1 text-sm font-bold text-muted hover:text-foreground transition-all"
                            >
                                Let's talk
                                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </FadeIn>
                </div>

                {/* Right side visual for mobile/tablet fallback or desktop content */}
                <div className="hidden lg:flex flex-col gap-4">
                    {/* Floating elements to break symmetry */}
                    <FadeIn delay={0.8} direction="left" className="self-end">
                        <div className="p-6 rounded-3xl bg-white border border-border shadow-2xl shadow-indigo-500/10 max-w-xs backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
                                    <Terminal size={16} />
                                </div>
                                <span className="text-xs font-mono font-bold text-muted-light">status.sh</span>
                            </div>
                            <div className="font-mono text-[11px] text-muted space-y-1">
                                <div className="text-indigo-600 italic">// Optimization complete</div>
                                <div>$ deploy --smart-contract</div>
                                <div className="text-accent">✓ Success: All systems GO</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
