const fs = require('fs');
const path = require('path');

// 路徑配置
const DATA_DIR = path.join(__dirname, '../data');
const OUTPUT_FILE = path.join(__dirname, '../data.js');

// 讀取 JSON 文件
function readJson(filename) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error(`讀取 ${filename} 失敗:`, err.message);
    process.exit(1);
  }
}

// 主函數
function build() {
  console.log('📦 開始構建 data.js...');

  const dietary = readJson('dietary.json');
  const images = readJson('images.json');
  const brands = readJson('brands.json');
  const stores = readJson('stores.json');

  const content = `/**
 * 香港健康餐商家數據 (自動生成)
 * 生成時間: ${new Date().toISOString()}
 * 
 * ⚠️ 請勿直接編輯此文件！
 * 請編輯 data/ 目錄下的 JSON 文件，然後運行 'npm run build' 更新。
 */

// 特殊飲食需求選項（供篩選用）
const DIETARY_OPTIONS = ${JSON.stringify(dietary, null, 2)};

// 食物圖片（Unsplash，按類型）
const FOOD_IMAGES = ${JSON.stringify(images, null, 2)};

// 品牌（門店數 ≥ 3 的會顯示在品牌牆）
const BRANDS = ${JSON.stringify(brands, null, 2)};

// 門店（含 brandId、image、dietary；dietary 繼承自品牌或單獨設定）
const STORES = ${JSON.stringify(stores, null, 2)};

// 兼容舊版：RESTAURANTS = 所有門店（供 app.js 篩選用）
const RESTAURANTS = STORES;
`;

  fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
  console.log(`✅ 成功生成 ${OUTPUT_FILE}`);
  console.log(`📊 統計: ${brands.length} 個品牌, ${stores.length} 間門店`);
}

build();
