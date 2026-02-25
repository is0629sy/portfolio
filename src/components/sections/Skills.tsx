"use client";

import FadeIn from "@/components/FadeIn";

const skillCategories = [
    {
        category: "Frontend",
        skills: [
            { name: "Next.js", level: 90 },
            { name: "HTML / CSS", level: 95 },
            { name: "Tailwind CSS", level: 90 },
            { name: "TypeScript", level: 80 },
        ],
    },
    {
        category: "Automation",
        skills: [
            { name: "Excel (VBA / 関数)", level: 90 },
            { name: "Google Apps Script", level: 85 },
        ],
    },
    {
        category: "AI / Other",
        skills: [
            { name: "AI Prompting", level: 95 },
            { name: "Git / GitHub", level: 80 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-28 sm:py-32 bg-surface">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center mb-16">
                        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                            Skills
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            スキルセット
                        </h2>
                        <p className="mt-4 text-muted max-w-xl mx-auto">
                            フロントエンド開発から業務効率化、AI活用まで幅広く対応します。
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <FadeIn key={category.category} delay={0.1 * (catIndex + 1)}>
                            <div className="bg-white rounded-2xl p-8 border border-border h-full">
                                <h3 className="text-sm font-semibold tracking-widest uppercase text-primary mb-6">
                                    {category.category}
                                </h3>
                                <div className="space-y-5">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-foreground">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs text-muted-light">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-1000"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
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
