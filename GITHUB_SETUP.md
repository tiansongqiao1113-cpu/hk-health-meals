# 🔗 連接 GitHub 與 Netlify 自動部署

這個設置完成後，以後你只需要說「幫我修改代碼並提交」，網站就會自動更新，非常方便！

## 步驟一：創建 GitHub 倉庫

1.  登錄 [GitHub](https://github.com)。
2.  點擊右上角的 "+" -> **New repository**。
3.  輸入 Repository name（例如 `hk-health-meals`）。
4.  **不需要**勾選 "Add a README"（我們本地已經有了）。
5.  點擊 **Create repository**。

6.  複製生成的 HTTPS 鏈接（例如 `https://github.com/你的用戶名/hk-health-meals.git`）。

## 步驟二：推送代碼

在你的電腦終端機（Terminal）中執行以下命令：

```bash
# 1. 添加遠程倉庫地址（請替換為你的真實地址）
git remote add origin https://github.com/你的用戶名/hk-health-meals.git

# 2. 推送代碼
git branch -M main
git push -u origin main
```

## 步驟三：在 Netlify 設置自動化

1.  登錄 [Netlify](https://app.netlify.com)。
2.  點擊 **Add new site** -> **Import an existing project**。
3.  選擇 **GitHub**。
4.  授權 Netlify 訪問你的 GitHub 帳號。
5.  在列表中選擇剛創建的 `hk-health-meals` 倉庫。
6.  Netlify 會自動讀取 `netlify.toml` 中的配置：
    *   **Build command**: `npm run build`
    *   **Publish directory**: `.`
7.  點擊 **Deploy site**。

## 🎉 完成！

以後更新流程：
1.  你讓我修改代碼（例如：「幫我把標題改成...」）。
2.  我會修改並提交代碼到 GitHub。
3.  Netlify 檢測到變更，自動重新構建並發佈網站。
4.  幾分鐘後，你的網站就更新了！
