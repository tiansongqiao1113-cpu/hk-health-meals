/**
 * OpenRice 香港健康餐 / 沙律餐廳爬蟲
 * 目標：素食、沙律、輕食等分類
 *
 * 使用方式：
 * 1. cd scraper && npm install
 * 2. npx playwright install chromium
 * 3. node scrape-openrice.js
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const DELAY_MS = 3000; // OpenRice 可能較敏感，間隔長一點
const OUTPUT_FILE = '../scraped-openrice.json';

const URLS_TO_SCRAPE = [
  { url: 'https://www.openrice.com/zh-cn/hongkong/restaurants/dish/素食', category: '素食' },
  { url: 'https://www.openrice.com/zh-cn/hongkong/restaurants/dish/沙律', category: '沙律' },
  { url: 'https://www.openrice.com/zh-cn/hongkong/restaurants/dish/健康', category: '健康' },
];

async function scrapeOpenRice() {
  console.log('啟動瀏覽器...');
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'zh-HK,zh;q=0.9,en;q=0.8',
    });

    const allRestaurants = [];

    for (const { url, category } of URLS_TO_SCRAPE) {
      console.log(`爬取 ${category}: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await sleep(DELAY_MS);

      await autoScroll(page);

      const items = await page.evaluate((cat) => {
        const results = [];
        // OpenRice 常見結構：.sr1-restaurant-list, .poi-list, [data-type="restaurant"]
        const cards =
          document.querySelectorAll('.sr1-restaurant-list .poi-info') ||
          document.querySelectorAll('[data-type="restaurant"]') ||
          document.querySelectorAll('.poi-list .poi') ||
          document.querySelectorAll('article.poi');

        cards.forEach((card) => {
          const link = card.querySelector('a[href*="/r-"]') || card.querySelector('a.poi-title');
          const href = link?.href || '';
          const name = link?.textContent?.trim() || card.querySelector('.title-name')?.textContent?.trim() || '';
          const address = card.querySelector('.address')?.textContent?.trim() || '';
          const district = card.querySelector('.district')?.textContent?.trim() || '';

          if (name) {
            results.push({
              name,
              address,
              district,
              openrice: href,
              category: cat,
            });
          }
        });
        return results;
      }, category);

      allRestaurants.push(...items);
      console.log(`  → ${items.length} 間`);
      await sleep(DELAY_MS);
    }

    // 去重
    const seen = new Set();
    const unique = allRestaurants.filter((r) => {
      const key = r.name + r.address;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    console.log(`共 ${unique.length} 間不重複餐廳`);

    const output = {
      scrapedAt: new Date().toISOString(),
      sources: URLS_TO_SCRAPE.map((u) => u.url),
      count: unique.length,
      restaurants: unique,
    };

    writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`已儲存至 ${OUTPUT_FILE}`);

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
      }, 150);
    });
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

scrapeOpenRice().catch((err) => {
  console.error('爬取失敗:', err);
  process.exit(1);
});
