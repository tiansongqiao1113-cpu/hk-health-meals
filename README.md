# 香港健康餐收錄

收錄香港各區健康餐商家，方便用戶按地區選擇並透過官網、Foodpanda、Keeta 下單。資料來源：Healthy HKG、Green Queen 2025 等，經收集表核對。

## 數據維護流程

- **data-collection.json**：完整收集表，含來源與待核對項目。
- **data.js**：網站實際顯示的列表，由收集表整理後同步。
- 核對步驟（取得直達連結、營業時間、地址）見 **VERIFICATION.md**。

## 功能

- **地區篩選**：中環、金鐘、灣仔、銅鑼灣、尖沙咀、旺角、油麻地、觀塘、將軍澳、沙田、荃灣
- **關鍵字搜尋**：商家名稱、地址、產品
- **商家資訊**：地址、營業時間、主要產品
- **下單連結**：官網、Foodpanda、Keeta
- **掃碼下單**：點擊「掃碼下單」可顯示 QR 碼，用手機掃描即可下單

## 使用方式

1. 直接用瀏覽器打開 `index.html`
2. 或使用本地伺服器（如 `python -m http.server 8000`）在 `http://localhost:8000` 預覽

## 添加商家

編輯 `data.js`，在 `RESTAURANTS` 陣列中新增物件：

```javascript
{
  id: 13,
  name: "商家名稱",
  district: "地區",
  address: "完整地址",
  hours: "營業時間",
  products: ["產品1", "產品2"],
  website: "https://官網連結",  // 無則填 null
  foodpanda: "https://www.foodpanda.hk/restaurant/xxx",
  keeta: "https://www.keeta.com.hk",
}
```

## 爬取數據

專案內含 `scraper/` 目錄，可用 Playwright 爬取 Foodpanda、OpenRice：

```bash
cd scraper
npm install
npx playwright install chromium
npm run scrape:foodpanda   # 健康餐分類
npm run scrape:openrice   # 素食/沙律/健康
npm run merge             # 轉成 data.js 格式
```

詳見 `scraper/README.md`。

## 部署

可部署至 GitHub Pages、Vercel、Netlify 等靜態託管服務。
