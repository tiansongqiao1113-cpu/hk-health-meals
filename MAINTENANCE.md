# 🛠 網站維護與數據更新指南

本項目採用「數據驅動」的開發模式，所有餐廳數據存儲在 `data/` 目錄下的 JSON 文件中，通過構建腳本自動生成 `data.js`。

## 📂 數據文件結構

所有數據位於 `data/` 目錄：

- `data/stores.json`：**主要文件**，存放所有門店的詳細信息。
- `data/brands.json`：存放品牌信息（用於品牌牆）。
- `data/dietary.json`：定義特殊飲食需求標籤（如 vegan, gluten-free）。
- `data/images.json`：定義食物類型的默認圖片 URL。

## ➕ 如何新增餐廳

### 步驟 1：編輯 `data/stores.json`

打開 `data/stores.json`，在數組中添加一個新的對象。請參考現有格式：

```json
{
  "id": 100,  // 確保 ID 唯一
  "brandId": null, // 如果是連鎖品牌，填入對應的 brandId；如果是單店，填 null
  "name": "餐廳名稱",
  "district": "地區（如：中環）",
  "address": "完整地址",
  "phone": "電話號碼",
  "hours": "營業時間",
  "products": ["產品1", "產品2"],
  "dietary": ["vegan", "high-protein"], // 參考 dietary.json
  "image": "poke", // 參考 images.json (如 poke, salad, dimsum)
  "website": "https://...",
  "foodpanda": "https://...",
  "keeta": "https://..."
}
```

### 步驟 2：生成 `data.js`

編輯完成後，**必須**運行構建腳本來更新網站數據：

**方式 A（如果你安裝了 npm）：**
```bash
npm run build
```

**方式 B（直接使用 Python）：**
```bash
python3 scripts/build-data.py
```

### 步驟 3：預覽確認

運行本地服務器查看效果：
```bash
python3 -m http.server 8000
```
打開瀏覽器訪問 `http://localhost:8000`。

## 🚀 發佈更新

確認無誤後，將代碼提交到 GitHub 或重新上傳到 Netlify（詳見 [DEPLOY.md](DEPLOY.md)）。

```bash
git add .
git commit -m "Add new restaurant: 餐廳名稱"
git push
```

## ❓ 常見問題

**Q: 為什麼我改了 JSON 但網頁沒變？**
A: 你可能忘記運行 `npm run build` 或 `python3 scripts/build-data.py` 了。網頁讀取的是 `data.js`，不是 JSON 文件。

**Q: 如何新增一種食物圖片類型？**
A: 先在 `data/images.json` 添加新的鍵值對（URL），然後在 `stores.json` 中引用該鍵名。
