/**
 * Foodpanda 香港健康餐餐廳爬蟲
 * 目標：https://www.foodpanda.hk/city/hong-kong/cuisine/healthy
 *
 * 使用方式：
 * 1. cd scraper && npm install
 * 2. npx playwright install chromium
 * 3. node scrape-foodpanda.js
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const DELAY_MS = 2000; // 每次操作間隔，避免被封
const OUTPUT_FILE = '../scraped-foodpanda.json';

async function scrapeFoodpanda() {
  console.log('啟動瀏覽器...');
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();

    // 模擬真實用戶
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'zh-HK,zh;q=0.9,en;q=0.8',
    });

    console.log('前往 Foodpanda 健康餐分類...');
    await page.goto('https://www.foodpanda.hk/city/hong-kong/cuisine/healthy', {
      waitUntil: 'networkidle',
      timeout: 30000,
    });

    await sleep(DELAY_MS);

    // 滾動頁面觸發懶加載（若有）
    await autoScroll(page);

    // 嘗試多種可能的選擇器（Foodpanda 結構可能變動）
    const restaurants = await page.evaluate(() => {
      const results = [];

      // 方式 1：常見的餐廳卡片 class
      const cards =
        document.querySelectorAll('[data-testid="restaurant-card"]') ||
        document.querySelectorAll('a[href*="/restaurant/"]') ||
        document.querySelectorAll('.vendor-list .vendor') ||
        document.querySelectorAll('[class*="RestaurantCard"]') ||
        document.querySelectorAll('article');

      cards.forEach((card, i) => {
        const link = card.querySelector('a[href*="/restaurant/"]') || card.closest('a');
        const href = link?.href || card.href || '';

        // 提取餐廳 ID（用於組裝 Foodpanda 連結）
        const match = href.match(/\/restaurant\/([^/]+)\/([^/?]+)/);
        const restaurantId = match ? match[1] : '';
        const slug = match ? match[2] : '';

        const nameEl =
          card.querySelector('[class*="name"]') ||
          card.querySelector('h2') ||
          card.querySelector('h3') ||
          card.querySelector('span[class*="title"]');
        const name = nameEl?.textContent?.trim() || '';

        const addressEl = card.querySelector('[class*="address"]') || card.querySelector('[class*="location"]');
        const address = addressEl?.textContent?.trim() || '';

        if (name || href) {
          results.push({
            name: name || `Restaurant ${i + 1}`,
            address,
            foodpanda: href || `https://www.foodpanda.hk/restaurant/${restaurantId}/${slug}`,
            restaurantId,
          });
        }
      });

      return results;
    });

    // 去重
    const seen = new Set();
    const unique = restaurants.filter((r) => {
      const key = r.name + r.foodpanda;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    console.log(`爬取到 ${unique.length} 間餐廳`);

    const output = {
      scrapedAt: new Date().toISOString(),
      source: 'https://www.foodpanda.hk/city/hong-kong/cuisine/healthy',
      count: unique.length,
      restaurants: unique,
    };

    writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`已儲存至 ${OUTPUT_FILE}`);
    console.log('請手動核對並合併到 data.js');

    return unique;
  } finally {
    await browser.close();
  }
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

scrapeFoodpanda().catch((err) => {
  console.error('爬取失敗:', err);
  process.exit(1);
});
