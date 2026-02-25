"use client";

import { Code, FileSpreadsheet, Bot, Terminal, Cpu, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const items = [
    {
        title: "Web Production",
        description: "Next.js / Tailwind CSS / TypeScriptによる高速・高精細なWeb実装。",
        icon: Code,
        className: "md:col-span-2 md:row-span-2 bg-indigo-50/50",
        tags: ["Next.js", "v4", "App Router"],
    },
    {
        title: "Business Automation",
        description: "Excel VBA & GASによる職人芸的な自動化。",
        icon: FileSpreadsheet,
        className: "md:col-span-2 md:row-span-1 border-accent/20 bg-white",
    },
    {
        title: "AI Native Style",
        description: "プロンプトを武器に開発を加速。",
        icon: Bot,
        className: "md:col-span-1 md:row-span-1 bg-accent/5",
    },
    {
        title: "Specialist Info",
        description: "基本情報技術者・全商1級保持の信頼性。",
        icon: Cpu,
        className: "md:col-span-1 md:row-span-1 border-indigo-100",
    },
];

const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "Excel VBA", "GAS", "AI Prompting", "Git"
];

export default function BentoGrid() {
    return (
        <section id="service" className="py-28 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <FadeIn>
                    <div className="mb-16">
                        <p className="text-xs font-mono font-medium tracking-widest uppercase text-accent mb-3">
                            Capabilities
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground font-sans">
                            Service & Expertise
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-min">
                    {items.map((item, i) => (
                        <FadeIn key={item.title} delay={0.1 * i} className={item.className}>
                            <div className="h-full p-8 rounded-3xl border border-border overflow-hidden relative group">
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm text-accent">
                                        <item.icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        {item.description}
                                    </p>

                                    {item.tags && (
                                        <div className="mt-auto pt-6 flex flex-wrap gap-2">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-100/50 text-indigo-600">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
                            </div>
                        </FadeIn>
                    ))}

                    {/* Skill Ticker Area */}
                    <FadeIn className="md:col-span-4 mt-6" delay={0.5}>
                        <div className="p-8 rounded-3xl border border-border bg-foreground/[0.02] flex flex-wrap items-center gap-4">
                            <span className="text-xs font-mono font-bold text-muted-light mr-4 flex items-center gap-2">
                                <Zap size={14} className="text-accent" />
                                TECH STACK
                            </span>
                            {skills.map(skill => (
                                <span key={skill} className="px-4 py-2 text-sm font-medium bg-white border border-border rounded-xl shadow-sm hover:border-accent/40 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
