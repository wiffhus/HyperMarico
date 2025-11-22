// Cloudflare Pages Functions
// 将来的にAPIキーを使ってサーバーサイド処理をするための雛形です

export async function onRequest(context) {
  // 環境変数の取得例 (Cloudflareダッシュボードで設定した場合)
  const apiKey = context.env.API_KEY || "NO_KEY";

  const data = {
    message: "Hyper Marico API is ready!",
    status: "ok",
    keyCheck: apiKey !== "NO_KEY" ? "Key Set" : "No Key"
  };

  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
