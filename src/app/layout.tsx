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
    "基本情報技術者・全商情報処理1級の確かな基礎力と、最新AIを駆使した開発スピードを掛け合わせ、アイデアを形にします。",
  metadataBase: new URL("https://is0629sy.com"),
  openGraph: {
    title: "is0629sy | AI Native Engineer",
    description: "確かな基礎力と最新AIを駆使した爆速開発で、アイデアを形にします。",
    url: "https://is0629sy.com",
    siteName: "is0629sy.com",
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
