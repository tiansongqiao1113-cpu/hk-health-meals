# 🔄 網站動態更新指南

我們為你準備了兩種「動態更新」方案，你可以根據喜好選擇。

## 方案一：使用 Google Sheets（推薦，最簡單）✨

這個方案讓你可以**直接在 Excel 表格中管理數據**，改完數據後，**刷新網頁就能看到變化**，完全不需要重新部署網站！

### 步驟：

1.  **複製模板**：
    我們為你準備了一個 Google Sheet 模板。請新建一個 Google Sheet，並設置首行（標題行）為以下字段：
    `id`, `brandId`, `name`, `district`, `address`, `phone`, `hours`, `products`, `dietary`, `image`, `website`, `foodpanda`, `keeta`, `dietaryNote`

    *   `products` 和 `dietary` 用逗號分隔，例如：`純素漢堡,沙律`
    *   `image` 填寫關鍵字（如 `poke`, `salad`, `vegan`）

2.  **發佈到網絡**：
    在 Google Sheet 中，點擊左上角 **文件 (File)** -> **分享 (Share)** -> **發佈到網絡 (Publish to web)**。
    *   選擇 **整個文檔** 或 **工作表1**。
    *   格式選擇 **逗號分隔值 (.csv)**。
    *   點擊 **發佈**，並複製生成的鏈接。

3.  **填入網站配置**：
    打開項目中的 `data.js` 文件，找到第 11 行：
    ```javascript
    const GOOGLE_SHEET_CSV_URL = "這裡填入你剛才複製的鏈接";
    ```

4.  **重新部署一次**：
    將修改後的項目重新拖拽到 Netlify。

**以後怎麼更新？**
只需要打開那個 Google Sheet 修改內容，網頁就會自動同步！（可能有 1-5 分鐘緩存延遲）

---

## 方案二：使用 GitHub 自動部署（專業）

如果你希望保留代碼管理的習慣，可以使用 GitHub。

1.  將代碼推送到 GitHub 倉庫（參見 README.md）。
2.  登錄 Netlify，點擊 **"New site from Git"**。
3.  選擇 GitHub，並選中你的 `hk-health-meals` 倉庫。
4.  點擊 **Deploy Site**。

**以後怎麼更新？**
只需要在本地修改 `data/stores.json`，運行 `python3 scripts/build-data.py`，然後 `git push`。Netlify 會自動檢測到代碼變更並重新發佈網站。
