"use client";

import FadeIn from "@/components/FadeIn";
import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

export default function Works() {
    return (
        <section id="works" className="py-28 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center mb-16">
                        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                            Works
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            制作実績
                        </h2>
                        <p className="mt-4 text-muted max-w-xl mx-auto">
                            AIを活用し、スピードと品質を両立させたプロジェクトの一部です。
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {works.map((work, index) => (
                        <FadeIn key={work.id} delay={0.1 * (index + 1)}>
                            <WorkCard work={work} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
