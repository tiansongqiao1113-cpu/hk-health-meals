import json
import os
import datetime

# 路徑配置
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'data')
OUTPUT_FILE = os.path.join(BASE_DIR, 'data.js')

def read_json(filename):
    file_path = os.path.join(DATA_DIR, filename)
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"讀取 {filename} 失敗: {e}")
        exit(1)

def build():
    print('📦 開始構建 data.js...')

    dietary = read_json('dietary.json')
    images = read_json('images.json')
    brands = read_json('brands.json')
    stores = read_json('stores.json')

    content = f"""/**
 * 香港健康餐商家數據 (自動生成)
 * 生成時間: {datetime.datetime.now().isoformat()}
 * 
 * ⚠️ 請勿直接編輯此文件！
 * 請編輯 data/ 目錄下的 JSON 文件，然後運行 'python3 scripts/build-data.py' 更新。
 */

// 特殊飲食需求選項（供篩選用）
const DIETARY_OPTIONS = {json.dumps(dietary, indent=2, ensure_ascii=False)};

// 食物圖片（Unsplash，按類型）
const FOOD_IMAGES = {json.dumps(images, indent=2, ensure_ascii=False)};

// 品牌（門店數 ≥ 3 的會顯示在品牌牆）
const BRANDS = {json.dumps(brands, indent=2, ensure_ascii=False)};

// 門店（含 brandId、image、dietary；dietary 繼承自品牌或單獨設定）
const STORES = {json.dumps(stores, indent=2, ensure_ascii=False)};

// 兼容舊版：RESTAURANTS = 所有門店（供 app.js 篩選用）
const RESTAURANTS = STORES;
"""

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ 成功生成 {OUTPUT_FILE}")
    print(f"📊 統計: {len(brands)} 個品牌, {len(stores)} 間門店")

if __name__ == "__main__":
    build()
