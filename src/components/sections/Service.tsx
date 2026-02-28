"use client";

import { Code, FileSpreadsheet, Bot } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
    {
        icon: Code,
        title: "Web制作・コーディング代行",
        description:
            "Next.js / Tailwind CSS を用いたモダンなWebサイト・Webアプリケーションの設計・開発。レスポンシブ対応、SEO最適化、高速表示を標準装備。",
        tags: ["HTML", "CSS", "JavaScript", "Next.js", "TypeScript"],
    },
    {
        icon: FileSpreadsheet,
        title: "事務作業・業務効率化",
        description:
            "Excel VBA・関数やGoogle Apps Scriptを活用した業務自動化。データ集計、レポート生成、定型作業の効率化で生産性を劇的に向上。",
        tags: ["Excel", "VBA", "GAS"],
    },
    {
        icon: Bot,
        title: "AI導入・コーディング伴走サポート",
        description:
            "AIツールの導入支援から、プロンプトエンジニアリング、AIを活用したコーディングの伴走サポートまで。初心者の方でも安心。",
        tags: ["AI Prompting", "ChatGPT", "Gemini", "Claude"],
    },
];

export default function Service() {
    return (
        <section id="service" className="py-28 sm:py-32 bg-surface">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center mb-16">
                        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                            Service
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            できること
                        </h2>
                        <p className="mt-4 text-muted max-w-xl mx-auto">
                            確かな技術力とAIの力を掛け合わせ、幅広いニーズにお応えします。
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={service.title} delay={0.1 * (index + 1)}>
                            <div className="group relative bg-white rounded-2xl p-8 border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 h-full">
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed mb-5">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
