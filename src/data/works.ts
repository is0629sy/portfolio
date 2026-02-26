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
            "OpenWeatherMap APIを活用したPWA対応の天気予報アプリ。ドラッグ&ドロップでの地点並び替え、詳細モーダル表示など直感的なUIを実装。",
        image: "/works/weather-app.webp",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        url: "https://weather.is0629sy.com",
    },
];
