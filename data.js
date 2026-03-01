/**
 * 香港健康餐商家數據 (自動生成)
 * 生成時間: 2026-03-01T16:35:03.179888
 * 
 * ⚠️ 請勿直接編輯此文件！
 * 請編輯 data/ 目錄下的 JSON 文件，然後運行 'python3 scripts/build-data.py' 更新。
 */

// 特殊飲食需求選項（供篩選用）
const DIETARY_OPTIONS = [
  {
    "id": "vegan",
    "label": "純素",
    "desc": "無動物製品"
  },
  {
    "id": "vegetarian",
    "label": "素食",
    "desc": "無肉類"
  },
  {
    "id": "gluten-free",
    "label": "無麩質",
    "desc": "適合麩質敏感"
  },
  {
    "id": "dairy-free",
    "label": "無奶",
    "desc": "無乳製品"
  },
  {
    "id": "nut-free",
    "label": "無堅果",
    "desc": "適合堅果過敏"
  },
  {
    "id": "organic",
    "label": "有機",
    "desc": "有機食材"
  },
  {
    "id": "low-sugar",
    "label": "低糖",
    "desc": "少糖選項"
  },
  {
    "id": "high-protein",
    "label": "高蛋白",
    "desc": "高蛋白質"
  }
];

// 食物圖片（Unsplash，按類型）
const FOOD_IMAGES = {
  "bowl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=280&fit=crop",
  "poke": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=280&fit=crop",
  "vegan": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=280&fit=crop",
  "drink": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=280&fit=crop",
  "cake": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=280&fit=crop",
  "coffee": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=280&fit=crop",
  "salad": "https://images.unsplash.com/photo-1540189545976-70a97f0259e2?w=400&h=280&fit=crop",
  "dimsum": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=280&fit=crop",
  "acai": "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=280&fit=crop",
  "sushi": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=280&fit=crop",
  "curry": "https://images.unsplash.com/photo-1585937421612-70a05835626b?w=400&h=280&fit=crop",
  "pizza": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=280&fit=crop",
  "wrap": "https://images.unsplash.com/photo-1606755962775-9f9c2e86c9b5?w=400&h=280&fit=crop",
  "soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=280&fit=crop"
};

// 品牌（門店數 ≥ 3 的會顯示在品牌牆）
const BRANDS = [
  {
    "id": "treehouse",
    "name": "Treehouse",
    "storeCount": 4,
    "website": "https://www.treehouse.eco/",
    "foodpanda": "https://www.foodpanda.hk/chain/cn4nh/treehouse",
    "products": [
      "自選碗",
      "捲餅",
      "漢堡",
      "純素甜品"
    ],
    "dietary": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ]
  },
  {
    "id": "mother-pearl",
    "name": "Mother Pearl",
    "storeCount": 3,
    "website": "https://motherpearl.com.hk/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "products": [
      "純素珍珠奶茶",
      "植物奶飲品"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ]
  },
  {
    "id": "nuttea",
    "name": "Nuttea",
    "storeCount": 4,
    "website": "https://nuttea.net/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "products": [
      "五堅果奶蓋茶",
      "純素飲品"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "note": "含堅果，堅果過敏者請注意"
  },
  {
    "id": "the-cakery",
    "name": "The Cakery / Maya Bakery",
    "storeCount": 4,
    "website": "https://www.thecakery.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "products": [
      "純素蛋糕",
      "純素蛋撻",
      "菠蘿包",
      "咖啡"
    ],
    "dietary": [
      "vegan",
      "dairy-free",
      "gluten-free"
    ]
  },
  {
    "id": "18-grams",
    "name": "18 Grams",
    "storeCount": 3,
    "website": "https://www.18grams.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "products": [
      "素食輕食",
      "燕麥奶咖啡",
      "豆腐牛油果貝果",
      "全日早餐"
    ],
    "dietary": [
      "vegetarian",
      "dairy-free"
    ]
  },
  {
    "id": "years",
    "name": "Years Group",
    "storeCount": 3,
    "website": "https://www.yearshk.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "products": [
      "純素漢堡",
      "壽司",
      "日式便當",
      "川味意粉"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ]
  },
  {
    "id": "mana",
    "name": "MANA!",
    "storeCount": 2,
    "website": "https://www.mana.hk/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "products": [
      "自選沙律",
      "純素漢堡",
      "植物奶"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ]
  },
  {
    "id": "poke-go",
    "name": "Poké Go",
    "storeCount": 2,
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "products": [
      "夏威夷魚生飯",
      "自選碗",
      "有機食材"
    ],
    "dietary": [
      "organic",
      "high-protein"
    ]
  },
  {
    "id": "ahimsabuffet",
    "name": "無肉食",
    "storeCount": 3,
    "website": "https://ahimsabuffet.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "products": [
      "素食自助餐",
      "熱食",
      "點心",
      "甜品"
    ],
    "dietary": [
      "vegetarian"
    ]
  }
];

// 門店（含 brandId、image、dietary；dietary 繼承自品牌或單獨設定）
const STORES = [
  {
    "id": 1,
    "brandId": "treehouse",
    "name": "Treehouse - 中環",
    "district": "中環",
    "address": "中環砵典乍街45號 H Code 地下",
    "phone": "+852 6022 3262",
    "hours": "週一至六 10:00-22:00，週日及假期 11:00-21:00",
    "products": [
      "自選碗",
      "捲餅",
      "漢堡",
      "純素甜品"
    ],
    "dietary": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "image": "bowl",
    "website": "https://www.treehouse.eco/hcode",
    "foodpanda": "https://www.foodpanda.hk/chain/cn4nh/treehouse",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 2,
    "brandId": "treehouse",
    "name": "Treehouse - 銅鑼灣",
    "district": "銅鑼灣",
    "address": "銅鑼灣霎東街7號",
    "phone": "+852 5580 0072",
    "hours": "週一至六 10:00-22:00，週日及假期 11:00-21:00",
    "products": [
      "自選碗",
      "捲餅",
      "漢堡",
      "純素甜品"
    ],
    "dietary": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "image": "bowl",
    "website": "https://www.treehouse.eco/causeway-bay",
    "foodpanda": "https://www.foodpanda.hk/chain/cn4nh/treehouse",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 3,
    "brandId": "treehouse",
    "name": "Treehouse - 尖沙咀",
    "district": "尖沙咀",
    "address": "尖沙咀彌敦道36-44號 重慶大廈地庫 S28舖",
    "phone": "+852 9852 3325",
    "hours": "週一至日 11:00-21:00",
    "products": [
      "自選碗",
      "捲餅",
      "漢堡",
      "純素甜品"
    ],
    "dietary": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "image": "bowl",
    "website": "https://www.treehouse.eco/heath",
    "foodpanda": "https://www.foodpanda.hk/chain/cn4nh/treehouse",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 4,
    "brandId": "treehouse",
    "name": "Treehouse - 太古",
    "district": "鰂魚涌",
    "address": "鰂魚涌英皇道979號 林肯大廈1樓",
    "phone": "+852 6180 6396",
    "hours": "週一至五 09:00-19:30",
    "products": [
      "自選碗",
      "捲餅",
      "Grab & Go 輕食"
    ],
    "dietary": [
      "vegan",
      "gluten-free",
      "dairy-free"
    ],
    "image": "bowl",
    "website": "https://www.treehouse.eco/taikoo",
    "foodpanda": "https://www.foodpanda.hk/chain/cn4nh/treehouse",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 5,
    "brandId": "mother-pearl",
    "name": "Mother Pearl - 中環",
    "district": "中環",
    "address": "中環擺花街25號地下",
    "phone": "+852 9880 1211",
    "hours": "週一至日 11:00-21:00",
    "products": [
      "純素珍珠奶茶",
      "植物奶飲品"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "drink",
    "website": "https://motherpearl.com.hk/",
    "foodpanda": "https://www.foodpanda.hk/restaurant/m7zr/mother-pearl-central",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 6,
    "brandId": "mother-pearl",
    "name": "Mother Pearl - 旺角",
    "district": "旺角",
    "address": "旺角太子道西193號 MOKO M31舖",
    "phone": "+852 9880 1211",
    "hours": "週一至日 12:00-22:00",
    "products": [
      "純素珍珠奶茶",
      "植物奶飲品"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "drink",
    "website": "https://motherpearl.com.hk/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 7,
    "brandId": "mother-pearl",
    "name": "Mother Pearl - 灣仔",
    "district": "灣仔",
    "address": "灣仔大王東街2-4號 安興大廈 3號舖",
    "phone": "+852 9880 1211",
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "純素珍珠奶茶",
      "植物奶飲品"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "drink",
    "website": "https://motherpearl.com.hk/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 8,
    "brandId": "nuttea",
    "name": "Nuttea - 尖沙咀",
    "district": "尖沙咀",
    "address": "尖沙咀彌敦道132號 美麗華廣場1樓 108A舖",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "五堅果奶蓋茶",
      "純素飲品"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "drink",
    "dietaryNote": "含堅果",
    "website": "https://nuttea.net/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 9,
    "brandId": "nuttea",
    "name": "Nuttea - 鰂魚涌",
    "district": "鰂魚涌",
    "address": "鰂魚涌海光街13-15號 海光苑地下6A舖",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "五堅果奶蓋茶",
      "純素飲品"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "drink",
    "dietaryNote": "含堅果",
    "website": "https://nuttea.net/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 10,
    "brandId": "nuttea",
    "name": "Nuttea - 九龍灣",
    "district": "九龍灣",
    "address": "九龍灣宏開道 富洋工業中心 B 座地下 B1B1",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "五堅果奶蓋茶",
      "純素飲品"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "drink",
    "dietaryNote": "含堅果",
    "website": "https://nuttea.net/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 11,
    "brandId": "nuttea",
    "name": "Nuttea - 機場",
    "district": "機場",
    "address": "香港國際機場 客運大樓 5T052 舖",
    "phone": null,
    "hours": "依機場營業時間",
    "products": [
      "五堅果奶蓋茶",
      "純素飲品"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "drink",
    "dietaryNote": "含堅果",
    "website": "https://nuttea.net/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 12,
    "brandId": "the-cakery",
    "name": "The Cakery - IFC",
    "district": "中環",
    "address": "中環金融街8號 IFC 商場 1樓 1105A",
    "phone": "+852 2816 1838",
    "hours": "週一至五 08:00-20:00，週六日 11:00-19:00",
    "products": [
      "純素蛋糕",
      "純素蛋撻",
      "菠蘿包",
      "咖啡"
    ],
    "dietary": [
      "vegan",
      "dairy-free",
      "gluten-free"
    ],
    "image": "cake",
    "website": "https://www.thecakery.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 13,
    "brandId": "the-cakery",
    "name": "The Cakery - 金鐘",
    "district": "金鐘",
    "address": "金鐘金鐘道88號 太古廣場 Great Food Hall",
    "phone": "+852 9166 1290",
    "hours": "週一至日 11:00-19:00",
    "products": [
      "純素蛋糕",
      "純素蛋撻",
      "菠蘿包",
      "咖啡"
    ],
    "dietary": [
      "vegan",
      "dairy-free",
      "gluten-free"
    ],
    "image": "cake",
    "website": "https://www.thecakery.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 14,
    "brandId": "the-cakery",
    "name": "The Cakery - 尖沙咀",
    "district": "尖沙咀",
    "address": "尖沙咀海港城 港威商場 3樓 3001 city'super",
    "phone": "+852 6683 3833",
    "hours": "週一至日 09:00-22:00",
    "products": [
      "純素蛋糕",
      "純素蛋撻",
      "菠蘿包",
      "咖啡"
    ],
    "dietary": [
      "vegan",
      "dairy-free",
      "gluten-free"
    ],
    "image": "cake",
    "website": "https://www.thecakery.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 15,
    "brandId": "the-cakery",
    "name": "The Cakery - 黃竹坑",
    "district": "黃竹坑",
    "address": "黃竹坑業發街6號 怡達工業大廈 14D",
    "phone": "+852 6695 9656",
    "hours": "週一至五 09:00-16:00",
    "products": [
      "純素蛋糕",
      "純素蛋撻",
      "菠蘿包",
      "咖啡"
    ],
    "dietary": [
      "vegan",
      "dairy-free",
      "gluten-free"
    ],
    "image": "cake",
    "website": "https://www.thecakery.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 16,
    "brandId": "18-grams",
    "name": "18 Grams - 銅鑼灣",
    "district": "銅鑼灣",
    "address": "銅鑼灣時代廣場 B1 city'super",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "素食輕食",
      "燕麥奶咖啡",
      "豆腐牛油果貝果",
      "全日早餐"
    ],
    "dietary": [
      "vegetarian",
      "dairy-free"
    ],
    "image": "coffee",
    "website": "https://www.18grams.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 17,
    "brandId": "18-grams",
    "name": "18 Grams - 銅鑼灣 加寧街",
    "district": "銅鑼灣",
    "address": "銅鑼灣加寧街15號 海都樓地下 C 舖",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "素食輕食",
      "燕麥奶咖啡",
      "豆腐牛油果貝果",
      "全日早餐"
    ],
    "dietary": [
      "vegetarian",
      "dairy-free"
    ],
    "image": "coffee",
    "website": "https://www.18grams.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 18,
    "brandId": "18-grams",
    "name": "18 Grams - 沙田",
    "district": "沙田",
    "address": "沙田新城市廣場 2樓 204-214 city'super",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "素食輕食",
      "燕麥奶咖啡",
      "豆腐牛油果貝果",
      "全日早餐"
    ],
    "dietary": [
      "vegetarian",
      "dairy-free"
    ],
    "image": "coffee",
    "website": "https://www.18grams.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 19,
    "brandId": "years",
    "name": "YEARS - 深水埗",
    "district": "深水埗",
    "address": "深水埗福華街191-199號",
    "phone": "+852 6338 3719",
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "純素漢堡",
      "純素餐",
      "咖啡"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "vegan",
    "website": "https://www.yearshk.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 20,
    "brandId": "years",
    "name": "Here - 太古",
    "district": "鰂魚涌",
    "address": "鰂魚涌太古城",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "日式純素便當",
      "川味意粉"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "poke",
    "website": "https://www.yearshk.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 21,
    "brandId": "years",
    "name": "Wanaka - 灣仔",
    "district": "灣仔",
    "address": "灣仔",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "壽司",
      "日式純素"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "poke",
    "website": "https://www.yearshk.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 22,
    "brandId": null,
    "name": "Veggie4Love",
    "district": "中環",
    "address": "中環士丹利街11號10樓",
    "phone": "+852 3902 3902",
    "hours": "11:30-15:00、17:30-22:00（週一至日）",
    "products": [
      "純素漢堡",
      "奶昔",
      "純素拌飯",
      "沙律"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "vegan",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/chain/cc3ix/veggie4love",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 23,
    "brandId": null,
    "name": "Dandy's Organic Cafe",
    "district": "上環",
    "address": "上環樂善里32號 華冠大廈地下",
    "phone": "+852 2838 6166",
    "hours": "週二至日 11:30-20:00",
    "products": [
      "有機輕食",
      "素食選項",
      "咖啡"
    ],
    "dietary": [
      "vegetarian",
      "gluten-free",
      "organic"
    ],
    "image": "salad",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/chain/cf5ft/dandys-organic-cafe",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 24,
    "brandId": null,
    "name": "Root Vegan",
    "district": "中環",
    "address": "中環威靈頓街112-114號 新威大廈1樓102-103舖",
    "phone": "+852 9850 9558",
    "hours": "週一至日 12:00-21:30",
    "products": [
      "泛亞純素",
      "泰式咖喱",
      "純素蛋糕"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 25,
    "brandId": null,
    "name": "LockCha",
    "district": "中環",
    "address": "中環荷李活道10號大館 01 座 G06-07",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "素食茶館",
      "點心",
      "素燒賣"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "dimsum",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 26,
    "brandId": null,
    "name": "Isoya",
    "district": "灣仔",
    "address": "灣仔灣仔道83號",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "日式純素",
      "豆腐",
      "壽司",
      "試菜套餐"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 27,
    "brandId": null,
    "name": "Emerald",
    "district": "中環",
    "address": "中環威靈頓街2-8號 威靈頓 place M88 6樓",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "粵法純素",
      "新派中菜",
      "純素提拉米蘇"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "vegan",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 28,
    "brandId": null,
    "name": "Veggie Kingdom",
    "district": "尖沙咀",
    "address": "尖沙咀廣東道120號 VIP 商業中心",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "純素點心",
      "港式飲茶"
    ],
    "dietary": [
      "vegan"
    ],
    "image": "dimsum",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 29,
    "brandId": null,
    "name": "LN Fortunate Coffee",
    "district": "西營盤",
    "address": "西營盤第二街118號",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "純素法式多士",
      "格仔餅",
      "熱狗",
      "咖啡"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "coffee",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 30,
    "brandId": null,
    "name": "Thai Vegetarian Food",
    "district": "九龍",
    "address": "九龍南圍路28A號 昌旺大廈",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "泰式素食",
      "猴頭菇",
      "青木瓜沙律",
      "冬蔭功"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "salad",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 31,
    "brandId": null,
    "name": "Fresca",
    "district": "中環",
    "address": "中環荷李活道54-58號",
    "phone": "+852 2770 2282",
    "hours": "週一至六 08:30-17:00，週日休息（請確認是否仍營業）",
    "products": [
      "農場直送沙律",
      "無麩質",
      "素食"
    ],
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "salad",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 32,
    "brandId": "mana",
    "name": "MANA! - 蘇豪",
    "district": "中環",
    "address": "中環士丹頓街8號",
    "phone": "+852 5501 7583",
    "hours": "週一至日 11:00-20:30",
    "products": [
      "自選沙律",
      "純素漢堡",
      "植物奶",
      "全植物飲食"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "salad",
    "website": "https://www.mana.hk/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 33,
    "brandId": "mana",
    "name": "MANA! - 灣仔",
    "district": "灣仔",
    "address": "灣仔皇后大道東8-10號",
    "phone": "+852 5501 7591",
    "hours": "週一至日 11:00-20:30",
    "products": [
      "自選沙律",
      "純素漢堡",
      "植物奶"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "salad",
    "website": "https://www.mana.hk/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 34,
    "brandId": null,
    "name": "Big Dill",
    "district": "西營盤",
    "address": "西營盤第三街123-125號 Espresso Martini 內",
    "phone": "+852 5270 6777",
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "純素漢堡",
      "美式純素",
      "植物肉"
    ],
    "dietary": [
      "vegan",
      "dairy-free"
    ],
    "image": "vegan",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 35,
    "brandId": null,
    "name": "樂園素食 Paradise Veggie",
    "district": "銅鑼灣",
    "address": "銅鑼灣謝斐道535號 Tower 535 地庫 B04",
    "phone": "+852 2633 1386",
    "hours": "週一至日 11:00-16:30、18:00-22:00",
    "products": [
      "素食自助餐",
      "素壽司",
      "素叉燒",
      "Pizza"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "dimsum",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 36,
    "brandId": "ahimsabuffet",
    "name": "無肉食 - 旺角",
    "district": "旺角",
    "address": "旺角洗衣街88號2樓",
    "phone": "+852 2889 2938",
    "hours": "午市 11:30-15:30，晚市 18:00-22:00",
    "products": [
      "素食自助餐",
      "熱食",
      "點心",
      "甜品"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "dimsum",
    "website": "https://ahimsabuffet.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 37,
    "brandId": "ahimsabuffet",
    "name": "無肉食 - 北角",
    "district": "北角",
    "address": "北角",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "素食自助餐",
      "熱食",
      "點心",
      "甜品"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "dimsum",
    "website": "https://ahimsabuffet.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 38,
    "brandId": "ahimsabuffet",
    "name": "無肉食 - 佐敦",
    "district": "佐敦",
    "address": "佐敦",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "素食自助餐",
      "熱食",
      "點心",
      "甜品"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "dimsum",
    "website": "https://ahimsabuffet.com/",
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 39,
    "brandId": null,
    "name": "OVO CAFE",
    "district": "灣仔",
    "address": "灣仔灣仔道1號地下",
    "phone": "+852 6511 4051",
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "蛋奶素",
      "意粉",
      "薄餅",
      "沙律",
      "全日早餐"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "salad",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 40,
    "brandId": null,
    "name": "Yau Veggie Bistro",
    "district": "尖沙咀",
    "address": "尖沙咀廣東道120號 海威商業中心7樓",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "法式素食",
      "素鵝肝",
      "創意素食"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "vegan",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 41,
    "brandId": null,
    "name": "Kailash Parbat",
    "district": "尖沙咀",
    "address": "尖沙咀寶勒巷3號 萬事昌廣場3樓302室",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "印度素食",
      "咖喱",
      "薄餅"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 42,
    "brandId": null,
    "name": "Branto",
    "district": "尖沙咀",
    "address": "尖沙咀樂道9號1樓",
    "phone": "+852 2366 8171",
    "hours": "11:00-15:00、18:00-22:00",
    "products": [
      "印度素食",
      "咖喱",
      "Dosa"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 43,
    "brandId": null,
    "name": "VEDA Café & Bar",
    "district": "中環",
    "address": "中環",
    "phone": "+852 3755 3067",
    "hours": "週一至日 07:00-22:30，週日一 07:00-16:00",
    "products": [
      "印度風素食",
      "Aloo Gobi",
      "全日早餐"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "coffee",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 44,
    "brandId": "poke-go",
    "name": "Poké Go - 深水埗",
    "district": "深水埗",
    "address": "深水埗大南街211號地舖",
    "phone": "+852 3563 8137",
    "hours": "週一至日 12:00-22:00",
    "products": [
      "夏威夷魚生飯",
      "自選碗",
      "有機食材"
    ],
    "dietary": [
      "organic",
      "high-protein"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 45,
    "brandId": "poke-go",
    "name": "Poké Go - 尖沙咀",
    "district": "尖沙咀",
    "address": "尖沙咀漆咸道南81號 南海大廈地下 G 舖",
    "phone": "+852 3590 5059",
    "hours": "週一至日 12:00-22:00",
    "products": [
      "夏威夷魚生飯",
      "自選碗",
      "有機食材"
    ],
    "dietary": [
      "organic",
      "high-protein"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 46,
    "brandId": null,
    "name": "Pickabowl",
    "district": "荔枝角",
    "address": "荔枝角 D2 Place One 1樓102號舖",
    "phone": null,
    "hours": "週一至日 12:00-20:30",
    "products": [
      "Poke Bowl",
      "自選配搭",
      "低卡椰菜花飯"
    ],
    "dietary": [
      "high-protein",
      "low-sugar"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 47,
    "brandId": null,
    "name": "Pololi",
    "district": "中環",
    "address": "中環嘉咸街35-39號地舖",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "夏威夷魚生飯",
      "自選魚生",
      "多款醬料"
    ],
    "dietary": [
      "high-protein"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 48,
    "brandId": null,
    "name": "Peek-A-Poke",
    "district": "銅鑼灣",
    "address": "銅鑼灣希雲街16號地舖",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "夏威夷魚生飯",
      "半飯半沙律",
      "蜜糖香醋汁"
    ],
    "dietary": [
      "high-protein"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 49,
    "brandId": null,
    "name": "Pokéworld",
    "district": "上環",
    "address": "上環禧利街8號地舖",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "Pokiritto",
      "海鮮飯卷",
      "蕎麥麵"
    ],
    "dietary": [
      "high-protein"
    ],
    "image": "poke",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 50,
    "brandId": null,
    "name": "LITE",
    "district": "中環",
    "address": "中環威靈頓街25號地下",
    "phone": null,
    "hours": "週一至六 07:30-20:00",
    "products": [
      "自選沙律",
      "Acai Bowl",
      "牛油果乳酪醬"
    ],
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "image": "salad",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 51,
    "brandId": null,
    "name": "Veggie Kingdom - 銅鑼灣",
    "district": "銅鑼灣",
    "address": "銅鑼灣京都廣場",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "純素點心",
      "港式飲茶"
    ],
    "dietary": [
      "vegan"
    ],
    "image": "dimsum",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/restaurant/sbd6/veggie-kingdom-causeway-bay",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 52,
    "brandId": null,
    "name": "紫竹林素食",
    "district": "觀塘",
    "address": "觀塘成業街19-21號",
    "phone": null,
    "hours": "週一至五 12:00-15:30、18:00-22:00（晚市需預訂）",
    "products": [
      "粵菜素食",
      "港式",
      "私房菜"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "dimsum",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  },
  {
    "id": 53,
    "brandId": null,
    "name": "Anything But Salads",
    "district": "上環",
    "address": "上環",
    "phone": null,
    "hours": "請查 Google Maps 或致電確認",
    "products": [
      "素食",
      "純素選項"
    ],
    "dietary": [
      "vegetarian"
    ],
    "image": "salad",
    "website": null,
    "foodpanda": "https://www.foodpanda.hk/zh/city/hong-kong",
    "keeta": "https://www.keeta.com.hk"
  }
];

// 兼容舊版：RESTAURANTS = 所有門店（供 app.js 篩選用）
const RESTAURANTS = STORES;
