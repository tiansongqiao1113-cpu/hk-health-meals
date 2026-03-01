# 🥗 香港健康餐收錄 (HK Health Meals)

收錄香港各區健康餐商家，方便用戶按地區選擇並透過官網、Foodpanda、Keeta 下單。

🔗 **在線演示**：[https://hk-health-meals.netlify.app](https://hk-health-meals.netlify.app) (示例)

## 🚀 快速開始

1.  **下載代碼**
    ```bash
    git clone https://github.com/你的用戶名/hk-health-meals.git
    cd hk-health-meals
    ```

2.  **本地預覽**
    無需安裝任何依賴，直接使用 Python 啟動：
    ```bash
    # Mac/Linux
    python3 -m http.server 8000
    
    # Windows
    python -m http.server 8000
    ```
    然後打開瀏覽器訪問 [http://localhost:8000](http://localhost:8000)。

## 🌐 如何發佈到網上？

只需三步，無需寫代碼：

1.  打開 [Netlify Drop](https://app.netlify.com/drop)。
2.  將本項目的文件夾直接拖進去。
3.  獲得你的專屬網址，發送給朋友即可！

詳細教程請見 [DEPLOY.md](DEPLOY.md)。

## 🛠 數據維護

本項目採用數據分離架構，所有餐廳數據位於 `data/` 目錄。
如果想新增餐廳，請查看 [MAINTENANCE.md](MAINTENANCE.md)。

簡單來說：
1. 編輯 `data/stores.json`
2. 運行 `python3 scripts/build-data.py`
3. 提交代碼

## 📊 功能亮點

- **雙層展示**：首頁展示熱門品牌牆 + 詳細門店列表
- **多維篩選**：支持按地區、品牌、特殊飲食需求（純素、生酮、無麩質等）篩選
- **智能搜索**：支持搜索餐廳名、地址、產品關鍵字
- **一鍵下單**：集成 Foodpanda / Keeta / 官網直達鏈接
- **掃碼點餐**：自帶 QR Code 生成器，方便手機快速訪問

## 📄 版權

MIT License. 歡迎 Fork 和提交 PR！
