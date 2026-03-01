# 數據核對流程

本站資料來自 **Healthy HKG**、**Green Queen 2025** 等，部分欄位尚待核對。請按下列步驟定期更新，保持「最全又最準」。

## 一、資料在哪裡維護

- **data-collection.json**：完整收集表，含來源、待核對項目（`needs_verification`）。
- **data.js**：網站實際使用的列表，從收集表整理後手動同步過來。

新增或修改商家時，建議先改 `data-collection.json`，再依相同格式更新 `data.js`。

## 二、如何取得「直達下單連結」

目前 Foodpanda / Keeta 多數為首頁連結，用戶需自行搜尋店名。若要改成**直達該店頁面**：

1. 打開 [foodpanda.hk](https://www.foodpanda.hk/zh/city/hong-kong)，搜尋**店名**。
2. 點進該餐廳頁面，複製瀏覽器網址列 URL。
3. 把該 URL 貼到 `data-collection.json` 與 `data.js` 的 `foodpanda` 欄位。
4. 對 [keeta.com.hk](https://www.keeta.com.hk) 重複以上步驟，更新 `keeta` 欄位。

## 三、如何核對地址與營業時間

1. 在 **Google Maps** 搜尋店名或地址，確認仍營業、地址正確。
2. 營業時間以 Google Maps 或**店家官網 / Facebook / IG** 為準，填回 `hours`。
3. 若某店已結業，可從 `data-collection.json` 與 `data.js` 中移除，或標註停業。

## 四、建議更新頻率

- **每 1–3 個月**：檢查一輪直達連結是否仍有效、營業時間是否變更。
- **新增商家時**：先加入 `data-collection.json`，填好 `source`、`source_url`、`needs_verification`，再同步到 `data.js`。

## 五、資料來源連結

- [Healthy Hong Kong 餐廳目錄](https://healthyhkg.com/directory-restaurants/)
- [Green Queen 香港純素/素食餐廳 2025](https://www.greenqueen.com.hk/best-vegan-vegetarian-restaurants-hong-kong-2025/)
