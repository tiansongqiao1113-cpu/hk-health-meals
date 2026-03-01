/**
 * 將爬取結果轉成 data.js 可用的格式
 * 用法：node merge-to-data.js
 *
 * 會讀取 scraped-foodpanda.json、scraped-openrice.json
 * 輸出 merge-output.js，可複製到 data.js 的 STORES 陣列
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

let nextId = 60; // 從現有最大 id 之後開始

function parseDistrict(address) {
  if (!address) return '香港';
  const districts = [
    '中環', '金鐘', '灣仔', '銅鑼灣', '上環', '西營盤', '尖沙咀', '旺角', '深水埗',
    '佐敦', '北角', '鰂魚涌', '荔枝角', '觀塘', '沙田', '荃灣', '將軍澳', '黃竹坑',
  ];
  for (const d of districts) {
    if (address.includes(d)) return d;
  }
  return '香港';
}

function loadAndConvert(filename) {
  try {
    const raw = readFileSync(join(ROOT, filename), 'utf-8');
    const data = JSON.parse(raw);
    const stores = data.restaurants || [];
    return stores.map((r) => {
      const id = nextId++;
      const district = r.district || parseDistrict(r.address);
      return {
        id,
        brandId: null,
        name: r.name,
        district,
        address: r.address || '請查 Google Maps',
        phone: null,
        hours: '請查 Google Maps 或致電確認',
        products: ['健康餐'],
        dietary: ['vegetarian'],
        image: 'bowl',
        website: null,
        foodpanda: r.foodpanda || 'https://www.foodpanda.hk/zh/city/hong-kong',
        keeta: 'https://www.keeta.com.hk',
      };
    });
  } catch (e) {
    console.warn(`無法讀取 ${filename}:`, e.message);
    return [];
  }
}

function loadOpenRice() {
  try {
    const raw = readFileSync(join(ROOT, 'scraped-openrice.json'), 'utf-8');
    const data = JSON.parse(raw);
    const stores = data.restaurants || [];
    return stores.map((r) => {
      const id = nextId++;
      const district = r.district || parseDistrict(r.address);
      return {
        id,
        brandId: null,
        name: r.name,
        district,
        address: r.address || '請查 Google Maps',
        phone: null,
        hours: '請查 Google Maps 或致電確認',
        products: ['健康餐'],
        dietary: ['vegetarian'],
        image: 'bowl',
        website: null,
        foodpanda: 'https://www.foodpanda.hk/zh/city/hong-kong', // OpenRice 無直達，需自行搜尋
        keeta: 'https://www.keeta.com.hk',
      };
    });
  } catch (e) {
    console.warn('無法讀取 scraped-openrice.json:', e.message);
    return [];
  }
}

const fp = loadAndConvert('scraped-foodpanda.json');
const or = loadOpenRice();

const all = [...fp, ...or];

// 去重（同名+同地址）
const seen = new Set();
const unique = all.filter((r) => {
  const key = `${r.name}|${r.address}`;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

const output = `// 由爬蟲自動生成，請核對後加入 data.js 的 STORES 陣列
// 生成時間: ${new Date().toISOString()}
// 共 ${unique.length} 間

${JSON.stringify(unique, null, 2)}
`;

writeFileSync(join(ROOT, 'merge-output.js'), output, 'utf-8');
console.log(`已輸出 ${unique.length} 間至 merge-output.js`);
console.log('請複製內容到 data.js 的 STORES 陣列末尾');
