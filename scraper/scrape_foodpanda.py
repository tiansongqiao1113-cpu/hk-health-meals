#!/usr/bin/env python3
"""
Foodpanda 香港健康餐爬蟲 (Python 版)
使用方式: pip install playwright && playwright install chromium && python3 scrape_foodpanda.py
"""

import json
import time
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("請先安裝: pip install playwright")
    print("然後執行: playwright install chromium")
    exit(1)

OUTPUT = Path(__file__).parent.parent / "scraped-foodpanda.json"
URL = "https://www.foodpanda.hk/city/hong-kong/cuisine/healthy"


def scrape():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})
        page.set_extra_http_headers({"Accept-Language": "zh-HK,zh;q=0.9"})

        print("前往 Foodpanda 健康餐分類...")
        page.goto(URL, wait_until="networkidle", timeout=30000)
        time.sleep(2)

        # 滾動載入
        page.evaluate("""
            async () => {
                await new Promise(r => {
                    let h = 0;
                    const t = setInterval(() => {
                        window.scrollBy(0, 300);
                        h += 300;
                        if (h >= document.body.scrollHeight) { clearInterval(t); r(); }
                    }, 100);
                });
            }
        """)
        time.sleep(2)

        # 除錯：儲存頁面 HTML 以便檢查結構
        debug_html = Path(__file__).parent.parent / "debug-foodpanda.html"
        debug_html.write_text(page.content(), encoding="utf-8")
        print(f"頁面 HTML 已儲存至 {debug_html}，可檢查 DOM 結構")

        restaurants = page.evaluate("""
            () => {
                const results = [];
                const cards = document.querySelectorAll('a[href*="/restaurant/"]') ||
                    document.querySelectorAll('[data-testid="restaurant-card"]') ||
                    document.querySelectorAll('[class*="RestaurantCard"]') ||
                    document.querySelectorAll('article');
                cards.forEach((card, i) => {
                    const link = card.closest('a') || card.querySelector('a[href*="/restaurant/"]') || card;
                    const href = link.href || '';
                    const nameEl = card.querySelector('h2, h3, [class*="name"], [class*="title"]');
                    const name = nameEl ? nameEl.textContent.trim() : '';
                    const addrEl = card.querySelector('[class*="address"], [class*="location"]');
                    const address = addrEl ? addrEl.textContent.trim() : '';
                    if (name || href) {
                        results.push({
                            name: name || 'Restaurant ' + (i+1),
                            address: address,
                            foodpanda: href
                        });
                    }
                });
                return results;
            }
        """)

        browser.close()

    seen = set()
    unique = []
    for r in restaurants:
        k = r["name"] + r.get("foodpanda", "")
        if k not in seen:
            seen.add(k)
            unique.append(r)

    output = {
        "scrapedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "source": URL,
        "count": len(unique),
        "restaurants": unique,
    }
    OUTPUT.write_text(json.dumps(output, ensure_ascii=False, indent=2))
    print(f"爬取到 {len(unique)} 間餐廳，已儲存至 {OUTPUT}")
    return unique


if __name__ == "__main__":
    scrape()
