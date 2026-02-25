"use client";

import { ExternalLink } from "lucide-react";
import { Work } from "@/data/works";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface WorkCardProps {
    work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="group relative bg-white rounded-[2rem] border border-border overflow-hidden hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-30 transition duration-300"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(8, 217, 255, 0.1), transparent 80%)`,
                    opacity,
                }}
            />

            {/* Thumbnail Area */}
            <div className="relative aspect-[16/10] bg-[#f8fafc] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center animate-pulse-slow">
                            <span className="text-3xl font-black text-accent">{work.title.charAt(0)}</span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-white text-[10px] font-bold">
                            {work.techStack.length}+
                        </div>
                    </div>
                </div>

                {/* Abstract pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-8">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-accent bg-accent/5 px-2 py-0.5 rounded">
                        Project / 0{work.id}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {work.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1 opacity-80">
                    {work.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                    {work.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-[10px] font-mono font-bold text-muted-light bg-foreground/[0.03] rounded border border-border/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Link */}
                <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-foreground group/link"
                >
                    Explore Case Study
                    <div className="p-1 rounded-full bg-foreground text-white group-hover/link:bg-accent transition-colors">
                        <ExternalLink size={10} />
                    </div>
                </a>
            </div>
        </div>
    );
}
