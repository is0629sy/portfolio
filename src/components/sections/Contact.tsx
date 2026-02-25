"use client";

import { Mail, Github, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
    return (
        <section id="contact" className="py-28 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center mb-16">
                        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                            Contact
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            お問い合わせ
                        </h2>
                        <p className="mt-4 text-muted max-w-xl mx-auto">
                            お仕事のご相談やご質問など、お気軽にご連絡ください。
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="max-w-lg mx-auto">
                        <div className="bg-white rounded-2xl border border-border p-8 space-y-4">
                            {/* Email */}
                            <a
                                href="mailto:is0629sy.freedom180@gmail.com"
                                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-indigo-50/50 transition-all duration-300"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Mail size={22} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-foreground">Email</p>
                                    <p className="text-sm text-muted">is0629sy.freedom180@gmail.com</p>
                                </div>
                                <ArrowUpRight
                                    size={18}
                                    className="text-muted-light group-hover:text-primary transition-colors"
                                />
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/is0629sy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-indigo-50/50 transition-all duration-300"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Github size={22} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-foreground">GitHub</p>
                                    <p className="text-sm text-muted">@is0629sy</p>
                                </div>
                                <ArrowUpRight
                                    size={18}
                                    className="text-muted-light group-hover:text-primary transition-colors"
                                />
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
