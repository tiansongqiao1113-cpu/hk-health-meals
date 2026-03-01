# 🌐 如何將網站發佈到網上

這個項目是一個純靜態網站（HTML + CSS + JS），因此發佈非常簡單且免費。以下推薦兩種最常用的方式：

## 方法一：Netlify Drop（最簡單，無需代碼知識）

這是最快的方法，無需註冊 GitHub 帳號，直接拖拽文件夾即可。

1.  打開瀏覽器，訪問 [Netlify Drop](https://app.netlify.com/drop)。
2.  在電腦上找到你的項目文件夾 `hk-health-meals`。
3.  將整個文件夾直接拖入網頁中的虛線框區域。
4.  等待幾秒鐘，網站就會上線，你會獲得一個類似 `https://random-name-123456.netlify.app` 的網址。
5.  你可以點擊網址分享給朋友。

## 方法二：GitHub Pages（推薦，適合長期維護）

如果你有 GitHub 帳號，這是最標準的做法，方便日後更新代碼。

1.  **初始化 Git（如果尚未初始化）**：
    打開終端機（Terminal），進入項目目錄：
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **創建 GitHub 倉庫**：
    *   登錄 [GitHub](https://github.com)。
    *   點擊右上角的 "+" -> "New repository"。
    *   輸入 Repository name（例如 `hk-health-meals`）。
    *   確保選擇 "Public"。
    *   點擊 "Create repository"。

3.  **推送代碼**：
    根據 GitHub 頁面的提示，執行類似以下的命令：
    ```bash
    git remote add origin https://github.com/你的用戶名/hk-health-meals.git
    git branch -M main
    git push -u origin main
    ```

4.  **開啟 GitHub Pages**：
    *   在 GitHub 倉庫頁面，點擊 "Settings"（設置）。
    *   在左側菜單找到 "Pages"。
    *   在 "Source" 下選擇 `Deploy from a branch`。
    *   在 "Branch" 下選擇 `main` 分支，文件夾選擇 `/ (root)`。
    *   點擊 "Save"。
    *   等待幾分鐘，頂部會顯示你的網站網址（通常是 `https://你的用戶名.github.io/hk-health-meals/`）。

## 方法三：Vercel（速度快，自動化）

如果你有 Vercel 帳號（可用 GitHub 登錄）：

1.  安裝 Vercel CLI：`npm i -g vercel`
2.  在項目目錄執行：`vercel`
3.  一路按 Enter 默認選項即可。
4.  完成後會獲得一個 `https://hk-health-meals.vercel.app` 的網址。

---

### 注意事項
*   **本地預覽**：在發佈前，建議先在本地使用 `python3 -m http.server 8000` 預覽，確保一切正常。
*   **數據更新**：如果更新了 `data.js` 中的餐廳數據，需要重新執行上述發佈步驟（Netlify 重新拖拽，或 GitHub 重新 push）。
