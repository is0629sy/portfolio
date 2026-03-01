import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "is0629sy | AI Native Engineer",
  description:
    "確かな基礎力と最新AIを駆使した開発スピードを掛け合わせ、アイデアを形にします。",
  keywords: [
    "is0629sy",
    "AI Native Engineer",
    "AIエンジニア",
    "AI Native",
    "Generative AI",
    "LLM",
    "Prompt Engineering",
    "プロンプトエンジニアリング",
    "AI活用",
    "高速開発",
    "フルスタックエンジニア",
    "Software Engineer",
    "Web Developer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Zustand",
    "Notion API",
    "Vercel",
    "ポートフォリオ",
    "制作実績",
    "開発者"
  ],
  metadataBase: new URL("https://is0629sy.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      // Googleなどのクローラー互換性のためにPNGも指定（ある場合）
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "is0629sy | AI Native Engineer",
    description: "確かな基礎力と最新AIを駆使した爆速開発で、アイデアを形にします。",
    url: "https://is0629sy.com",
    siteName: "is0629sy",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "is0629sy | AI Native Engineer",
    description: "確かな基礎力と最新AIを駆使した爆速開発で、アイデアを形にします。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
