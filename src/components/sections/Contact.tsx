"use client";

import { useState } from "react";
import { Mail, Github, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const email = "info@is0629sy.com";
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email);
        } else {
            // Fallback for older browsers or non-HTTPS contexts
            const textArea = document.createElement("textarea");
            textArea.value = email;
            // 画面外に配置
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand("copy");
            } catch (err) {
                console.error("Fallback: Oops, unable to copy", err);
            }
            document.body.removeChild(textArea);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // フォームのステート管理
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        setIsSuccess(false);

        // Web3Formsのアクセスキー（後で本物のキーに置き換えてください）
        const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    ...formData,
                    // 件名を設定
                    subject: `${formData.name}様からのポートフォリオ経由のお問い合わせ`,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setIsSuccess(true);
                // フォームをリセット
                setFormData({ name: "", email: "", message: "" });
            } else {
                setError(data.message || "送信に失敗しました。時間をおいて再度お試しください。");
            }
        } catch (err) {
            console.error("Form submission error:", err);
            setError("通信エラーが発生しました。ネットワーク環境をご確認ください。");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                        {/* 左側：連絡先情報 */}
                        <div className="lg:col-span-2 space-y-4">
                            {/* Email */}
                            <div
                                onClick={copyToClipboard}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === 'Space') {
                                        copyToClipboard();
                                    }
                                }}
                                className="w-full text-left group flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition-all duration-300 border border-transparent hover:border-indigo-100/50 bg-white shadow-sm"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Mail size={22} className={copied ? "hidden" : "block"} />
                                    <Check size={22} className={copied ? "block" : "hidden"} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-foreground">Email</p>
                                    <p className="text-sm text-muted">info@is0629sy.com</p>
                                </div>
                                {copied ? (
                                    <span className="text-xs font-medium text-primary bg-indigo-50 px-2 py-1 rounded-md">
                                        Copied!
                                    </span>
                                ) : (
                                    <Copy
                                        size={18}
                                        className="text-muted-light group-hover:text-primary transition-colors"
                                    />
                                )}
                            </div>

                            {/* GitHub */}
                            <a
                                href="https://github.com/is0629sy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-200/50 bg-white shadow-sm"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                                    <Github size={22} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-foreground">GitHub</p>
                                    <p className="text-sm text-muted">@is0629sy</p>
                                </div>
                                <ArrowUpRight
                                    size={18}
                                    className="text-muted-light group-hover:text-slate-800 transition-colors"
                                />
                            </a>
                        </div>

                        {/* 右側：お問い合わせフォーム */}
                        <div className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-6 sm:p-8 space-y-6 shadow-sm">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                                        お名前
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="山田 太郎"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm disabled:opacity-50"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                                        メールアドレス
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="hello@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm disabled:opacity-50"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                                        メッセージ
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="ご相談内容をご記入ください..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-sm resize-none disabled:opacity-50"
                                        required
                                    ></textarea>
                                </div>

                                {/* Honeypot スパム対策 */}
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                                {error && (
                                    <p className="text-sm text-red-500 bg-red-50 p-3 rounded-xl">
                                        {error}
                                    </p>
                                )}

                                {isSuccess && (
                                    <p className="text-sm text-green-600 bg-green-50 p-3 rounded-xl border border-green-200">
                                        お問い合わせありがとうございます。メッセージは正常に送信されました。
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl font-medium transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>送信中...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            <span>送信する</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
