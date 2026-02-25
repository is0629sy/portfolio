export interface Work {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    url: string;
}

export const works: Work[] = [
    {
        id: "1",
        title: "AI天気予報アプリ",
        description:
            "Open-Meteo APIを活用したPWA対応の天気予報アプリ。ドラッグ&ドロップでの地点並び替え、詳細モーダル表示など直感的なUIを実装。",
        image: "/works/weather-app.webp",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
        url: "#",
    },
    {
        id: "2",
        title: "業務効率化ダッシュボード",
        description:
            "Google Apps Scriptと連携した社内業務効率化ツール。データの自動集計・可視化により、月次レポート作成時間を80%削減。",
        image: "/works/dashboard.webp",
        techStack: ["GAS", "Excel VBA", "Chart.js"],
        url: "#",
    },
    {
        id: "3",
        title: "コーポレートサイト制作",
        description:
            "中小企業向けのモダンなコーポレートサイト。SSGによる高速表示とSEO最適化を実現。CMS連携で更新も容易に。",
        image: "/works/corporate-site.webp",
        techStack: ["Next.js", "Tailwind CSS", "Notion API"],
        url: "#",
    },
];
