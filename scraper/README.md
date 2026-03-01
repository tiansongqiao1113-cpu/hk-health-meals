# 健康餐爬蟲使用說明

用 Playwright 模擬瀏覽器，爬取 Foodpanda、OpenRice 的健康餐餐廳列表。

## 前置準備

1. **安裝 Node.js**（建議 v18+）
2. **進入目錄並安裝依賴**：

```bash
cd scraper
npm install
npx playwright install chromium
```

## 執行爬取

### Foodpanda（健康餐分類）

```bash
npm run scrape:foodpanda
# 或
node scrape-foodpanda.js
```

結果輸出至 `../scraped-foodpanda.json`

### OpenRice（素食 / 沙律 / 健康）

```bash
npm run scrape:openrice
# 或
node scrape-openrice.js
```

結果輸出至 `../scraped-openrice.json`

## 若爬不到數據

網站結構可能已變更，需手動檢查 DOM：

1. 用瀏覽器打開目標頁面
2. 按 F12 → Elements，找到餐廳卡片的 HTML 結構
3. 編輯 `scrape-foodpanda.js` 或 `scrape-openrice.js` 中的 `page.evaluate()` 內選擇器

常見選擇器範例：

```javascript
// 餐廳卡片
document.querySelectorAll('[data-testid="restaurant-card"]')
document.querySelectorAll('a[href*="/restaurant/"]')

// 餐廳名稱
card.querySelector('h2')
card.querySelector('[class*="name"]')
```

## 合併到網站

爬取後的 JSON 需手動整理成 `data.js` 格式，補上：

- `district`（地區）
- `hours`（營業時間）
- `products`（產品類型）
- `dietary`（飲食標籤）
- `keeta` 連結

可寫簡單腳本把 `scraped-*.json` 轉成 STORES 陣列格式。

## 注意事項

- **控制頻率**：腳本內已設 2–3 秒延遲，勿再縮短
- **遵守 ToS**：僅供個人學習與數據整理，勿大量、高頻爬取
- **數據核對**：爬取結果需人工核對地址、營業時間等
