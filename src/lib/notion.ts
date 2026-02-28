import { Client } from "@notionhq/client";
import { Work } from "@/data/works";

const notion = new Client({
    auth: process.env.NOTION_API_KEY || "dummy",
});

export const getWorks = async (): Promise<Work[]> => {
    // 認証情報やデータベースIDが設定されていない場合は空の配列を返す（ビルドエラー回避）
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        console.warn("Notion API Key or Database ID is missing. Returning empty Works array.");
        return [];
    }

    try {
        const response = await notion.dataSources.query({
            data_source_id: process.env.NOTION_DATABASE_ID,
            // Notionデータベースの並び順などを指定する場合はここでsortsを追加します
        });

        return response.results.map((page: any) => {
            return {
                id: page.id,
                title: page.properties["名前"]?.title[0]?.plain_text || "No Title",
                description: page.properties["Description"]?.rich_text[0]?.plain_text || "",
                // 画像はファイル&メディアプロパティにアップロードされたものか、URLプロパティから取得
                image:
                    page.properties["Image"]?.files[0]?.file?.url ||
                    page.properties["Image"]?.files[0]?.external?.url ||
                    "",
                // マルチセレクトの場合
                techStack: page.properties["TechStack"]?.multi_select?.map((tag: any) => tag.name) || [],
                url: page.properties["URL"]?.url || "",
            };
        });
    } catch (error) {
        console.error("Error fetching works from Notion:", error);
        return [];
    }
};
