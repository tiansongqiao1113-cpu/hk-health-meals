#!/usr/bin/env python3
"""
Happy Cow 香港素食/健康餐廳爬蟲
https://www.happycow.net/asia/china/hong_kong/
防護較寬鬆，較易爬取
"""

import json
import re
import time
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("請先安裝: pip install playwright && playwright install chromium")
    exit(1)

OUTPUT = Path(__file__).parent.parent / "scraped-happycow.json"
URL = "https://www.happycow.net/asia/china/hong_kong/hong_kong_island/"


def scrape():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        print("前往 Happy Cow 香港島...")
        page.goto(URL, wait_until="domcontentloaded", timeout=45000)
        time.sleep(5)

        # 滾動載入更多
        for _ in range(5):
            page.evaluate("window.scrollBy(0, 800)")
            time.sleep(1)

        restaurants = page.evaluate("""
            () => {
                const results = [];
                const links = document.querySelectorAll('a[href*="/reviews/"]');
                links.forEach(a => {
                    const href = a.href;
                    const nameEl = a.querySelector('.venue-name, .title, h3, h4');
                    const name = nameEl ? nameEl.textContent.trim() : a.textContent.trim().split('\\n')[0];
                    const addrEl = a.closest('li')?.querySelector('.address, .location, [class*="addr"]');
                    const address = addrEl ? addrEl.textContent.trim() : '';
                    const locEl = a.closest('li')?.querySelector('.location, .region');
                    const location = locEl ? locEl.textContent.trim() : '';
                    if (name && name.length > 2 && name.length < 80) {
                        results.push({
                            name: name,
                            address: address,
                            location: location,
                            happycow: href
                        });
                    }
                });
                return results;
            }
        """)

        # 備用選擇器
        if len(restaurants) < 5:
            restaurants = page.evaluate("""
                () => {
                    const results = [];
                    document.querySelectorAll('li, .venue, [class*="listing"]').forEach(el => {
                        const a = el.querySelector('a[href*="happycow"]');
                        if (!a) return;
                        const href = a.href;
                        const name = (a.querySelector('.venue-name') || a.querySelector('h3, h4') || a).textContent.trim();
                        const addr = el.querySelector('.address, .location')?.textContent?.trim() || '';
                        if (name && name.length > 2) {
                            results.push({ name, address: addr, happycow: href });
                        }
                    });
                    return results;
                }
            """)

        browser.close()

    seen = set()
    unique = []
    for r in restaurants:
        k = r.get("name", "") + r.get("happycow", "")
        if k and k not in seen:
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
