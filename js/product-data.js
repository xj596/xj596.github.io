/* ============================================================
   Xiangfeng Tea Group — Product Data & Search Engine
   ============================================================
   - 32 product entries (incl. matcha merged into Green)
   - Structured images: images[standard].{dry,liquor} for
     conventional / eu / organic standards
   - helper accessors: getName, getProductImages, getPrimaryImage,
     getLiquorImage, hasLiquor
   - filterProducts / getProductById / getRelatedProducts /
     featured carousel (startCarousel)
   ============================================================ */

const XF_Products = (() => {
  /* ---------- Full Product Array ---------- */
  const products = [
    {
      "id": "green-gunpowder-3505-a05",
      "name": {
        "en": "Gunpowder 3505 A05",
        "zh": "珠茶 3505 A05",
        "ru": "Gunpowder 3505 A05",
        "de": "Gunpowder 3505 A05"
      },
      "nameKey": "Gunpowder 3505 A05",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/1-3505-A05/1-3505-A05-1-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/1-3505-A05/1-3505-A05-1-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/1-3505-A05/1-3505-A05-1-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/1-3505-A05/1-3505-A05-1-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Gunpowder 3505 A05 — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 3505 A05——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 3505 A05 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505a",
        "green-gunpowder-3505b",
        "green-gunpowder-9372",
        "green-gunpowder-9373",
        "green-gunpowder-9374",
        "green-gunpowder-9375",
        "green-gunpowder-9501",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-3505aaa",
      "name": {
        "en": "Gunpowder 3505AAA",
        "zh": "珠茶 3505AAA",
        "ru": "Gunpowder 3505AAA",
        "de": "Gunpowder 3505AAA"
      },
      "nameKey": "Gunpowder 3505AAA",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/3-3505AA/3-3505AA-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/3-3505AA/3-3505AA-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/3-3505AA/3-3505AA-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/3-3505AA/3-3505AA-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Gunpowder 3505AAA — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 3505AAA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 3505AAA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505a",
        "green-gunpowder-3505b",
        "green-gunpowder-9372",
        "green-gunpowder-9373",
        "green-gunpowder-9374",
        "green-gunpowder-9375",
        "green-gunpowder-9501",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-3505aa",
      "name": {
        "en": "Gunpowder 3505AA",
        "zh": "珠茶 3505AA",
        "ru": "Gunpowder 3505AA",
        "de": "Gunpowder 3505AA"
      },
      "nameKey": "Gunpowder 3505AA",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_2.jpg"
        },
        "eu": {
          "dry": "",
          "liquor": ""
        },
        "organic": {
          "dry": "",
          "liquor": ""
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Gunpowder 3505AA — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 3505AA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 3505AA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505a",
        "green-gunpowder-3505b",
        "green-gunpowder-9372",
        "green-gunpowder-9373",
        "green-gunpowder-9374",
        "green-gunpowder-9375",
        "green-gunpowder-9501",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-3505a",
      "name": {
        "en": "Gunpowder 3505A",
        "zh": "珠茶 3505A",
        "ru": "Gunpowder 3505A",
        "de": "Gunpowder 3505A"
      },
      "nameKey": "Gunpowder 3505A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/4-3505A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/4-3505A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/4-3505A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/4-3505A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Gunpowder 3505A — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 3505A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 3505A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505b",
        "green-gunpowder-9372",
        "green-gunpowder-9373",
        "green-gunpowder-9374",
        "green-gunpowder-9375",
        "green-gunpowder-9501",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-3505b",
      "name": {
        "en": "Gunpowder 3505B",
        "zh": "珠茶 3505B",
        "ru": "Gunpowder 3505B",
        "de": "Gunpowder 3505B"
      },
      "nameKey": "Gunpowder 3505B",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/5-3505B/4-3505A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/5-3505B/4-3505A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/5-3505B/4-3505A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/5-3505B/4-3505A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Gunpowder 3505B — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 3505B——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 3505B — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505a",
        "green-gunpowder-9372",
        "green-gunpowder-9373",
        "green-gunpowder-9374",
        "green-gunpowder-9375",
        "green-gunpowder-9501",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-9372",
      "name": {
        "en": "Gunpowder 9372",
        "zh": "珠茶 9372",
        "ru": "Gunpowder 9372",
        "de": "Gunpowder 9372"
      },
      "nameKey": "Gunpowder 9372",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-3505-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/1-3505-A05/1-3505-A05-1-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/1-3505-A05/1-3505-A05-1-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/1-3505-A05/1-3505-A05-1-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/1-3505-A05/1-3505-A05-1-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Gunpowder 9372 — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 9372——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 9372 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505a",
        "green-gunpowder-3505b",
        "green-gunpowder-9373",
        "green-gunpowder-9374",
        "green-gunpowder-9375",
        "green-gunpowder-9501",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-9373",
      "name": {
        "en": "Gunpowder 9373",
        "zh": "珠茶 9373",
        "ru": "Gunpowder 9373",
        "de": "Gunpowder 9373"
      },
      "nameKey": "Gunpowder 9373",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/7-9373/6-9373-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/7-9373/6-9373-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/7-9373/6-9373-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/7-9373/6-9373-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/7-9373/6-9373-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/7-9373/6-9373-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Gunpowder 9373 — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 9373——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 9373 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505a",
        "green-gunpowder-3505b",
        "green-gunpowder-9372",
        "green-gunpowder-9374",
        "green-gunpowder-9375",
        "green-gunpowder-9501",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-9374",
      "name": {
        "en": "Gunpowder 9374",
        "zh": "珠茶 9374",
        "ru": "Gunpowder 9374",
        "de": "Gunpowder 9374"
      },
      "nameKey": "Gunpowder 9374",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/8-9374/7-9374-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/8-9374/7-9374-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/8-9374/7-9374-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/8-9374/7-9374-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/8-9374/7-9374-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/8-9374/7-9374-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Gunpowder 9374 — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 9374——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 9374 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505a",
        "green-gunpowder-3505b",
        "green-gunpowder-9372",
        "green-gunpowder-9373",
        "green-gunpowder-9375",
        "green-gunpowder-9501",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-9375",
      "name": {
        "en": "Gunpowder 9375",
        "zh": "珠茶 9375",
        "ru": "Gunpowder 9375",
        "de": "Gunpowder 9375"
      },
      "nameKey": "Gunpowder 9375",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/9-9375/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%8F%A0%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/9-9375/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%8F%A0%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/9-9375/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%8F%A0%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/9-9375/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%8F%A0%E8%8C%B6-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/9-9375/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%8F%A0%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/9-9375/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%8F%A0%E8%8C%B6-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Gunpowder 9375 — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 9375——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 9375 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505a",
        "green-gunpowder-3505b",
        "green-gunpowder-9372",
        "green-gunpowder-9373",
        "green-gunpowder-9374",
        "green-gunpowder-9501",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-9501",
      "name": {
        "en": "Gunpowder 9501",
        "zh": "珠茶 9501",
        "ru": "Gunpowder 9501",
        "de": "Gunpowder 9501"
      },
      "nameKey": "Gunpowder 9501",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/10-9501/8-9501-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/10-9501/8-9501-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/10-9501/8-9501-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/10-9501/8-9501-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/10-9501/8-9501-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/10-9501/8-9501-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Gunpowder 9501 — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 9501——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 9501 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505a",
        "green-gunpowder-3505b",
        "green-gunpowder-9372",
        "green-gunpowder-9373",
        "green-gunpowder-9374",
        "green-gunpowder-9375",
        "green-gunpowder-9502"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-gunpowder-9502",
      "name": {
        "en": "Gunpowder 9502",
        "zh": "珠茶 9502",
        "ru": "Gunpowder 9502",
        "de": "Gunpowder 9502"
      },
      "nameKey": "Gunpowder 9502",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/11-9502/9-9502-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/11-9502/9-9502-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/11-9502/9-9502-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/11-9502/9-9502-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/11-9502/9-9502-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/1%E7%8F%A0%E8%8C%B6Gunpowder/11-9502/9-9502-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Gunpowder 9502 — Xiangfeng Tea Group bulk export tea.",
        "zh": "珠茶 9502——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Gunpowder 9502 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-gunpowder-3505-a05",
        "green-gunpowder-3505aaa",
        "green-gunpowder-3505aa",
        "green-gunpowder-3505a",
        "green-gunpowder-3505b",
        "green-gunpowder-9372",
        "green-gunpowder-9373",
        "green-gunpowder-9374",
        "green-gunpowder-9375",
        "green-gunpowder-9501"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-41022aaa",
      "name": {
        "en": "Chummee 41022AAA",
        "zh": "眉茶 41022AAA",
        "ru": "Chummee 41022AAA",
        "de": "Chummee 41022AAA"
      },
      "nameKey": "Chummee 41022AAA",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/1-41022AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/1-41022AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/1-41022AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/1-41022AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Chummee 41022AAA — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 41022AAA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 41022AAA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-41022aa",
      "name": {
        "en": "Chummee 41022AA",
        "zh": "眉茶 41022AA",
        "ru": "Chummee 41022AA",
        "de": "Chummee 41022AA"
      },
      "nameKey": "Chummee 41022AA",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/2-41022AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/2-41022AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/2-41022AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/2-41022AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Chummee 41022AA — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 41022AA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 41022AA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-41022a",
      "name": {
        "en": "Chummee 41022A",
        "zh": "眉茶 41022A",
        "ru": "Chummee 41022A",
        "de": "Chummee 41022A"
      },
      "nameKey": "Chummee 41022A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/3-41022A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/3-41022A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-3_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/3-41022A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/3-41022A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-41022-3_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Chummee 41022A — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 41022A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 41022A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-9371aa",
      "name": {
        "en": "Chummee 9371AA",
        "zh": "眉茶 9371AA",
        "ru": "Chummee 9371AA",
        "de": "Chummee 9371AA"
      },
      "nameKey": "Chummee 9371AA",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/4-9371AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/4-9371AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/4-9371AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/4-9371AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/4-9371AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/4-9371AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Chummee 9371AA — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 9371AA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 9371AA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-9371a",
      "name": {
        "en": "Chummee 9371A",
        "zh": "眉茶 9371A",
        "ru": "Chummee 9371A",
        "de": "Chummee 9371A"
      },
      "nameKey": "Chummee 9371A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/5-9371A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/5-9371A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-4_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/5-9371A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/5-9371A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-4_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/5-9371A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/5-9371A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-4_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Chummee 9371A — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 9371A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 9371A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-9370",
      "name": {
        "en": "Chummee 9370",
        "zh": "眉茶 9370",
        "ru": "Chummee 9370",
        "de": "Chummee 9370"
      },
      "nameKey": "Chummee 9370",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/6-9370/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-9_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/6-9370/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-9_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/6-9370/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-9_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/6-9370/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-9_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/6-9370/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-9_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/6-9370/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9371-9_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Chummee 9370 — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 9370——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 9370 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-9369",
      "name": {
        "en": "Chummee 9369",
        "zh": "眉茶 9369",
        "ru": "Chummee 9369",
        "de": "Chummee 9369"
      },
      "nameKey": "Chummee 9369",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/7-9369/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/7-9369/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/7-9369/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/7-9369/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/7-9369/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/7-9369/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Chummee 9369 — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 9369——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 9369 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-9368",
      "name": {
        "en": "Chummee 9368",
        "zh": "眉茶 9368",
        "ru": "Chummee 9368",
        "de": "Chummee 9368"
      },
      "nameKey": "Chummee 9368",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/8-9368/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/8-9368/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/8-9368/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/8-9368/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/8-9368/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/8-9368/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-9369-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Chummee 9368 — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 9368——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 9368 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-9367",
      "name": {
        "en": "Chummee 9367",
        "zh": "眉茶 9367",
        "ru": "Chummee 9367",
        "de": "Chummee 9367"
      },
      "nameKey": "Chummee 9367",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/9-9367/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/9-9367/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/9-9367/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/9-9367/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/9-9367/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/9-9367/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Chummee 9367 — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 9367——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 9367 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9366",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-9366",
      "name": {
        "en": "Chummee 9366",
        "zh": "眉茶 9366",
        "ru": "Chummee 9366",
        "de": "Chummee 9366"
      },
      "nameKey": "Chummee 9366",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/10-9366/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-9_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/10-9366/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-9_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/10-9366/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-9_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/10-9366/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-9_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/10-9366/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-9_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/10-9366/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-9_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Chummee 9366 — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 9366——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 9366 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-3010",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-3010",
      "name": {
        "en": "Chummee 3010",
        "zh": "眉茶 3010",
        "ru": "Chummee 3010",
        "de": "Chummee 3010"
      },
      "nameKey": "Chummee 3010",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/11-3010/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-10_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/11-3010/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-10_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/11-3010/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-10_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/11-3010/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-10_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/11-3010/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-10_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/11-3010/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-10_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Chummee 3010 — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 3010——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 3010 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3008"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-chummee-3008",
      "name": {
        "en": "Chummee 3008",
        "zh": "眉茶 3008",
        "ru": "Chummee 3008",
        "de": "Chummee 3008"
      },
      "nameKey": "Chummee 3008",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/12-3008/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/12-3008/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/12-3008/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/12-3008/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/12-3008/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/2%E7%9C%89%E8%8C%B6Chummee/12-3008/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E4%BD%8E%E6%A1%A3%E7%9C%89%E8%8C%B6-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Chummee 3008 — Xiangfeng Tea Group bulk export tea.",
        "zh": "眉茶 3008——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Chummee 3008 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-chummee-41022aaa",
        "green-chummee-41022aa",
        "green-chummee-41022a",
        "green-chummee-9371aa",
        "green-chummee-9371a",
        "green-chummee-9370",
        "green-chummee-9369",
        "green-chummee-9368",
        "green-chummee-9367",
        "green-chummee-9366",
        "green-chummee-3010"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-xiu-mei-a",
      "name": {
        "en": "XIU MEI A",
        "zh": "秀眉A",
        "ru": "XIU MEI A",
        "de": "XIU MEI A"
      },
      "nameKey": "XIU MEI A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/1-XIU-MEI-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/1-XIU-MEI-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/1-XIU-MEI-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/1-XIU-MEI-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/1-XIU-MEI-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/1-XIU-MEI-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "XIU MEI A — Xiangfeng Tea Group bulk export tea.",
        "zh": "秀眉A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "XIU MEI A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-xiu-mei"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-xiu-mei",
      "name": {
        "en": "XIU MEI",
        "zh": "秀眉",
        "ru": "XIU MEI",
        "de": "XIU MEI"
      },
      "nameKey": "XIU MEI",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/2-XIU-MEI/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/2-XIU-MEI/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/2-XIU-MEI/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/2-XIU-MEI/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/2-XIU-MEI/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/3%E7%A7%80%E7%9C%89XIU-MEI/2-XIU-MEI/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%A7%80%E7%9C%89-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "XIU MEI — Xiangfeng Tea Group bulk export tea.",
        "zh": "秀眉——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "XIU MEI — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-xiu-mei-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-green-snail-3a",
      "name": {
        "en": "Green Snail 3A",
        "zh": "绿螺3A",
        "ru": "Green Snail 3A",
        "de": "Green Snail 3A"
      },
      "nameKey": "Green Snail 3A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/1-Green-Snail-3A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/1-Green-Snail-3A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/1-Green-Snail-3A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/1-Green-Snail-3A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/1-Green-Snail-3A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/1-Green-Snail-3A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "Green Snail 3A — Xiangfeng Tea Group bulk export tea.",
        "zh": "绿螺3A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Green Snail 3A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "green-green-snail-2a",
        "green-green-snail-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-green-snail-2a",
      "name": {
        "en": "Green Snail 2A",
        "zh": "绿螺2A",
        "ru": "Green Snail 2A",
        "de": "Green Snail 2A"
      },
      "nameKey": "Green Snail 2A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/2-Green-Snail-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/2-Green-Snail-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/2-Green-Snail-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/2-Green-Snail-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/2-Green-Snail-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/2-Green-Snail-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "Green Snail 2A — Xiangfeng Tea Group bulk export tea.",
        "zh": "绿螺2A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Green Snail 2A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "green-green-snail-3a",
        "green-green-snail-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-green-snail-a",
      "name": {
        "en": "Green Snail A",
        "zh": "绿螺A",
        "ru": "Green Snail A",
        "de": "Green Snail A"
      },
      "nameKey": "Green Snail A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/3-Green-Snail-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/3-Green-Snail-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-3_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/3-Green-Snail-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/3-Green-Snail-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-3_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/3-Green-Snail-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea/4%E7%BB%BF%E8%9E%BAGreen-Snail/3-Green-Snail-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E8%9E%BA-3_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "Green Snail A — Xiangfeng Tea Group bulk export tea.",
        "zh": "绿螺A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Green Snail A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "green-green-snail-3a",
        "green-green-snail-2a"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-green-tea-fannings-3a",
      "name": {
        "en": "Green Tea Fannings 3A",
        "zh": "绿碎3A",
        "ru": "Green Tea Fannings 3A",
        "de": "Green Tea Fannings 3A"
      },
      "nameKey": "Green Tea Fannings 3A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/1Green-Tea-Fannings-3A/10-Green-Tea-Fannings-3A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/1Green-Tea-Fannings-3A/10-Green-Tea-Fannings-3A-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/1Green-Tea-Fannings-3A/10-Green-Tea-Fannings-3A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/1Green-Tea-Fannings-3A/10-Green-Tea-Fannings-3A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/1Green-Tea-Fannings-3A/10-Green-Tea-Fannings-3A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/1Green-Tea-Fannings-3A/10-Green-Tea-Fannings-3A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Green Tea Fannings 3A — Xiangfeng Tea Group bulk export tea.",
        "zh": "绿碎3A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Green Tea Fannings 3A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-green-tea-fannings-2a",
        "green-green-tea-fannings-2a-2",
        "green-green-tea-fannings",
        "green-green-tea-fannings-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-green-tea-fannings-2a",
      "name": {
        "en": "Green Tea Fannings 2A",
        "zh": "绿碎2A",
        "ru": "Green Tea Fannings 2A",
        "de": "Green Tea Fannings 2A"
      },
      "nameKey": "Green Tea Fannings 2A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/2-Green-Tea-Fannings-2A/11-Green-Tea-Fannings-2A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/2-Green-Tea-Fannings-2A/11-Green-Tea-Fannings-2A-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/2-Green-Tea-Fannings-2A/11-Green-Tea-Fannings-2A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/2-Green-Tea-Fannings-2A/11-Green-Tea-Fannings-2A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/2-Green-Tea-Fannings-2A/11-Green-Tea-Fannings-2A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/2-Green-Tea-Fannings-2A/11-Green-Tea-Fannings-2A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Green Tea Fannings 2A — Xiangfeng Tea Group bulk export tea.",
        "zh": "绿碎2A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Green Tea Fannings 2A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-green-tea-fannings-3a",
        "green-green-tea-fannings-2a-2",
        "green-green-tea-fannings",
        "green-green-tea-fannings-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-green-tea-fannings-2a-2",
      "name": {
        "en": "Green Tea Fannings 2A",
        "zh": "绿碎2A",
        "ru": "Green Tea Fannings 2A",
        "de": "Green Tea Fannings 2A"
      },
      "nameKey": "Green Tea Fannings 2A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/3-Green-Tea-Fannings-2A/12-Green-Tea-Fannings-2A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/3-Green-Tea-Fannings-2A/12-Green-Tea-Fannings-2A-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/3-Green-Tea-Fannings-2A/12-Green-Tea-Fannings-2A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/3-Green-Tea-Fannings-2A/12-Green-Tea-Fannings-2A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/3-Green-Tea-Fannings-2A/12-Green-Tea-Fannings-2A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/3-Green-Tea-Fannings-2A/12-Green-Tea-Fannings-2A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Green Tea Fannings 2A — Xiangfeng Tea Group bulk export tea.",
        "zh": "绿碎2A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Green Tea Fannings 2A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-green-tea-fannings-3a",
        "green-green-tea-fannings-2a",
        "green-green-tea-fannings",
        "green-green-tea-fannings-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-green-tea-fannings",
      "name": {
        "en": "Green Tea Fannings",
        "zh": "绿碎",
        "ru": "Green Tea Fannings",
        "de": "Green Tea Fannings"
      },
      "nameKey": "Green Tea Fannings",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/4-Green-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E7%A2%8E-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/4-Green-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E7%A2%8E-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/4-Green-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E7%A2%8E-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/4-Green-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E7%A2%8E-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/4-Green-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E7%A2%8E-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/4-Green-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E7%BB%BF%E7%A2%8E-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Green Tea Fannings — Xiangfeng Tea Group bulk export tea.",
        "zh": "绿碎——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Green Tea Fannings — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-green-tea-fannings-3a",
        "green-green-tea-fannings-2a",
        "green-green-tea-fannings-2a-2",
        "green-green-tea-fannings-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-green-tea-fannings-2",
      "name": {
        "en": "Green Tea Fannings",
        "zh": "绿碎",
        "ru": "Green Tea Fannings",
        "de": "Green Tea Fannings"
      },
      "nameKey": "Green Tea Fannings",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/5-Green-Tea-Fannings/13-Green-Tea-Fannings-2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/5-Green-Tea-Fannings/13-Green-Tea-Fannings-2-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/5-Green-Tea-Fannings/13-Green-Tea-Fannings-2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/5-Green-Tea-Fannings/13-Green-Tea-Fannings-2-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/5-Green-Tea-Fannings/13-Green-Tea-Fannings-2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/5%E7%BB%BF%E7%A2%8EGreen-Tea-Fannings/5-Green-Tea-Fannings/13-Green-Tea-Fannings-2-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Green Tea Fannings — Xiangfeng Tea Group bulk export tea.",
        "zh": "绿碎——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Green Tea Fannings — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-green-tea-fannings-3a",
        "green-green-tea-fannings-2a",
        "green-green-tea-fannings-2a-2",
        "green-green-tea-fannings"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-wulu-aaa",
      "name": {
        "en": "WULU AAA",
        "zh": "香茶AAA",
        "ru": "WULU AAA",
        "de": "WULU AAA"
      },
      "nameKey": "WULU AAA",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/1-WULU-AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/1-WULU-AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/1-WULU-AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/1-WULU-AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/1-WULU-AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/1-WULU-AAA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "WULU AAA — Xiangfeng Tea Group bulk export tea.",
        "zh": "香茶AAA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "WULU AAA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "green-wulu-aa",
        "green-wulu"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-wulu-aa",
      "name": {
        "en": "WULU AA",
        "zh": "香茶AA",
        "ru": "WULU AA",
        "de": "WULU AA"
      },
      "nameKey": "WULU AA",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/2-WULU-AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/2-WULU-AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/2-WULU-AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/2-WULU-AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/2-WULU-AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/2-WULU-AA/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "WULU AA — Xiangfeng Tea Group bulk export tea.",
        "zh": "香茶AA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "WULU AA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "green-wulu-aaa",
        "green-wulu"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-wulu",
      "name": {
        "en": "WULU",
        "zh": "香茶",
        "ru": "WULU",
        "de": "WULU"
      },
      "nameKey": "WULU",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/3-WULU/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/3-WULU/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-3_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/3-WULU/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/3-WULU/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-3_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/3-WULU/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/6%E9%A6%99%E8%8C%B6WULU/3-WULU/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E9%A6%99%E8%8C%B6-3_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "WULU — Xiangfeng Tea Group bulk export tea.",
        "zh": "香茶——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "WULU — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "green-wulu-aaa",
        "green-wulu-aa"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-sencha-3a",
      "name": {
        "en": "Sencha 3A",
        "zh": "蒸青3A",
        "ru": "Sencha 3A",
        "de": "Sencha 3A"
      },
      "nameKey": "Sencha 3A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/1Sencha-3A/14-Sencha-3A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/1Sencha-3A/14-Sencha-3A-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/1Sencha-3A/14-Sencha-3A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/1Sencha-3A/14-Sencha-3A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/1Sencha-3A/14-Sencha-3A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/1Sencha-3A/14-Sencha-3A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Sencha 3A — Xiangfeng Tea Group bulk export tea.",
        "zh": "蒸青3A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Sencha 3A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-sencha-3a-2",
        "green-sencha-2a",
        "green-sencha-2a-2",
        "green-sencha-a",
        "green-sencha"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-sencha-3a-2",
      "name": {
        "en": "Sencha 3A",
        "zh": "蒸青3A",
        "ru": "Sencha 3A",
        "de": "Sencha 3A"
      },
      "nameKey": "Sencha 3A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/2-Sencha-3A/15-Sencha-3A-1-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/2-Sencha-3A/15-Sencha-3A-1-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/2-Sencha-3A/15-Sencha-3A-1-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/2-Sencha-3A/15-Sencha-3A-1-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/2-Sencha-3A/15-Sencha-3A-1-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/2-Sencha-3A/15-Sencha-3A-1-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Sencha 3A — Xiangfeng Tea Group bulk export tea.",
        "zh": "蒸青3A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Sencha 3A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-sencha-3a",
        "green-sencha-2a",
        "green-sencha-2a-2",
        "green-sencha-a",
        "green-sencha"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-sencha-2a",
      "name": {
        "en": "Sencha 2A",
        "zh": "蒸青2A",
        "ru": "Sencha 2A",
        "de": "Sencha 2A"
      },
      "nameKey": "Sencha 2A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/3-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/3-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/3-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/3-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/3-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/3-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Sencha 2A — Xiangfeng Tea Group bulk export tea.",
        "zh": "蒸青2A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Sencha 2A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-sencha-3a",
        "green-sencha-3a-2",
        "green-sencha-2a-2",
        "green-sencha-a",
        "green-sencha"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-sencha-2a-2",
      "name": {
        "en": "Sencha 2A",
        "zh": "蒸青2A",
        "ru": "Sencha 2A",
        "de": "Sencha 2A"
      },
      "nameKey": "Sencha 2A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/4-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/4-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-4_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/4-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/4-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-4_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/4-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/4-Sencha-2A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-4_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Sencha 2A — Xiangfeng Tea Group bulk export tea.",
        "zh": "蒸青2A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Sencha 2A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-sencha-3a",
        "green-sencha-3a-2",
        "green-sencha-2a",
        "green-sencha-a",
        "green-sencha"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-sencha-a",
      "name": {
        "en": "Sencha A",
        "zh": "蒸青A",
        "ru": "Sencha A",
        "de": "Sencha A"
      },
      "nameKey": "Sencha A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/5-Sencha-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/5-Sencha-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/5-Sencha-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/5-Sencha-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/5-Sencha-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/5-Sencha-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%92%B8%E9%9D%92-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Sencha A — Xiangfeng Tea Group bulk export tea.",
        "zh": "蒸青A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Sencha A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-sencha-3a",
        "green-sencha-3a-2",
        "green-sencha-2a",
        "green-sencha-2a-2",
        "green-sencha"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-sencha",
      "name": {
        "en": "Sencha",
        "zh": "蒸青",
        "ru": "Sencha",
        "de": "Sencha"
      },
      "nameKey": "Sencha",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/6-Sencha/15-Sencha-3A-2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/6-Sencha/15-Sencha-3A-2-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/6-Sencha/15-Sencha-3A-2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/6-Sencha/15-Sencha-3A-2-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/6-Sencha/15-Sencha-3A-2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/7%E8%92%B8%E9%9D%92Sencha/6-Sencha/15-Sencha-3A-2-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Sencha — Xiangfeng Tea Group bulk export tea.",
        "zh": "蒸青——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Sencha — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-sencha-3a",
        "green-sencha-3a-2",
        "green-sencha-2a",
        "green-sencha-2a-2",
        "green-sencha-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-maofeng-no-1",
      "name": {
        "en": "Premium Famous Green Teas Maofeng No.1",
        "zh": "名优绿茶 毛峰1号",
        "ru": "Premium Famous Green Teas Maofeng No.1",
        "de": "Premium Famous Green Teas Maofeng No.1"
      },
      "nameKey": "Premium Famous Green Teas Maofeng No.1",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/1-Maofeng-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/1-Maofeng-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/1-Maofeng-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/1-Maofeng-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/1-Maofeng-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/1-Maofeng-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Green Teas Maofeng No.1 — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 毛峰1号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Maofeng No.1 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-xiangxi-maojian-a",
        "green-premium-famous-green-teas-xiangxi-maojian",
        "green-premium-famous-green-teas-luosi-maojian",
        "green-premium-famous-green-teas-maojian",
        "green-premium-famous-green-teas-anji-white-tea",
        "green-premium-famous-green-teas-golden-tea",
        "green-premium-famous-green-teas-longjing-aa",
        "green-premium-famous-green-teas-longjing-a",
        "green-premium-famous-green-teas-longjing"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-xiangxi-maojian-a",
      "name": {
        "en": "Premium Famous Green Teas Xiangxi Maojian A",
        "zh": "名优绿茶 湘西毛尖单芽",
        "ru": "Premium Famous Green Teas Xiangxi Maojian A",
        "de": "Premium Famous Green Teas Xiangxi Maojian A"
      },
      "nameKey": "Premium Famous Green Teas Xiangxi Maojian A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/2-Xiangxi-Maojian-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/2-Xiangxi-Maojian-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-3_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/2-Xiangxi-Maojian-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/2-Xiangxi-Maojian-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-3_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/2-Xiangxi-Maojian-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/2-Xiangxi-Maojian-A/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-3_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Green Teas Xiangxi Maojian A — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 湘西毛尖单芽——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Xiangxi Maojian A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-maofeng-no-1",
        "green-premium-famous-green-teas-xiangxi-maojian",
        "green-premium-famous-green-teas-luosi-maojian",
        "green-premium-famous-green-teas-maojian",
        "green-premium-famous-green-teas-anji-white-tea",
        "green-premium-famous-green-teas-golden-tea",
        "green-premium-famous-green-teas-longjing-aa",
        "green-premium-famous-green-teas-longjing-a",
        "green-premium-famous-green-teas-longjing"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-xiangxi-maojian",
      "name": {
        "en": "Premium Famous Green Teas Xiangxi Maojian",
        "zh": "名优绿茶 湘西毛尖一芽一叶",
        "ru": "Premium Famous Green Teas Xiangxi Maojian",
        "de": "Premium Famous Green Teas Xiangxi Maojian"
      },
      "nameKey": "Premium Famous Green Teas Xiangxi Maojian",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/3-Xiangxi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/3-Xiangxi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/3-Xiangxi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/3-Xiangxi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/3-Xiangxi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/3-Xiangxi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Green Teas Xiangxi Maojian — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 湘西毛尖一芽一叶——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Xiangxi Maojian — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-maofeng-no-1",
        "green-premium-famous-green-teas-xiangxi-maojian-a",
        "green-premium-famous-green-teas-luosi-maojian",
        "green-premium-famous-green-teas-maojian",
        "green-premium-famous-green-teas-anji-white-tea",
        "green-premium-famous-green-teas-golden-tea",
        "green-premium-famous-green-teas-longjing-aa",
        "green-premium-famous-green-teas-longjing-a",
        "green-premium-famous-green-teas-longjing"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-luosi-maojian",
      "name": {
        "en": "Premium Famous Green Teas Luosi Maojian",
        "zh": "名优绿茶 螺丝毛尖",
        "ru": "Premium Famous Green Teas Luosi Maojian",
        "de": "Premium Famous Green Teas Luosi Maojian"
      },
      "nameKey": "Premium Famous Green Teas Luosi Maojian",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/4-Luosi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/4-Luosi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/4-Luosi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/4-Luosi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/4-Luosi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/4-Luosi-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Green Teas Luosi Maojian — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 螺丝毛尖——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Luosi Maojian — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-maofeng-no-1",
        "green-premium-famous-green-teas-xiangxi-maojian-a",
        "green-premium-famous-green-teas-xiangxi-maojian",
        "green-premium-famous-green-teas-maojian",
        "green-premium-famous-green-teas-anji-white-tea",
        "green-premium-famous-green-teas-golden-tea",
        "green-premium-famous-green-teas-longjing-aa",
        "green-premium-famous-green-teas-longjing-a",
        "green-premium-famous-green-teas-longjing"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-maojian",
      "name": {
        "en": "Premium Famous Green Teas Maojian",
        "zh": "名优绿茶 毛尖",
        "ru": "Premium Famous Green Teas Maojian",
        "de": "Premium Famous Green Teas Maojian"
      },
      "nameKey": "Premium Famous Green Teas Maojian",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/5-Maojian/16-Maojian-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/5-Maojian/16-Maojian-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/5-Maojian/16-Maojian-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/5-Maojian/16-Maojian-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/5-Maojian/16-Maojian-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/5-Maojian/16-Maojian-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Green Teas Maojian — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 毛尖——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Maojian — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-maofeng-no-1",
        "green-premium-famous-green-teas-xiangxi-maojian-a",
        "green-premium-famous-green-teas-xiangxi-maojian",
        "green-premium-famous-green-teas-luosi-maojian",
        "green-premium-famous-green-teas-anji-white-tea",
        "green-premium-famous-green-teas-golden-tea",
        "green-premium-famous-green-teas-longjing-aa",
        "green-premium-famous-green-teas-longjing-a",
        "green-premium-famous-green-teas-longjing"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-anji-white-tea",
      "name": {
        "en": "Premium Famous Green Teas Anji White Tea",
        "zh": "名优绿茶 安吉白茶",
        "ru": "Premium Famous Green Teas Anji White Tea",
        "de": "Premium Famous Green Teas Anji White Tea"
      },
      "nameKey": "Premium Famous Green Teas Anji White Tea",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/6-Anji-White-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-7_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/6-Anji-White-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-7_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/6-Anji-White-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-7_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/6-Anji-White-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-7_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/6-Anji-White-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-7_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/6-Anji-White-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-7_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Green Teas Anji White Tea — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 安吉白茶——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Anji White Tea — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-maofeng-no-1",
        "green-premium-famous-green-teas-xiangxi-maojian-a",
        "green-premium-famous-green-teas-xiangxi-maojian",
        "green-premium-famous-green-teas-luosi-maojian",
        "green-premium-famous-green-teas-maojian",
        "green-premium-famous-green-teas-golden-tea",
        "green-premium-famous-green-teas-longjing-aa",
        "green-premium-famous-green-teas-longjing-a",
        "green-premium-famous-green-teas-longjing"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-golden-tea",
      "name": {
        "en": "Premium Famous Green Teas Golden Tea",
        "zh": "名优绿茶 黄金茶",
        "ru": "Premium Famous Green Teas Golden Tea",
        "de": "Premium Famous Green Teas Golden Tea"
      },
      "nameKey": "Premium Famous Green Teas Golden Tea",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/7-Golden-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-6_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/7-Golden-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-6_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/7-Golden-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-6_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/7-Golden-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-6_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/7-Golden-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-6_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/7-Golden-Tea/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6-6_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Green Teas Golden Tea — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 黄金茶——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Golden Tea — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-maofeng-no-1",
        "green-premium-famous-green-teas-xiangxi-maojian-a",
        "green-premium-famous-green-teas-xiangxi-maojian",
        "green-premium-famous-green-teas-luosi-maojian",
        "green-premium-famous-green-teas-maojian",
        "green-premium-famous-green-teas-anji-white-tea",
        "green-premium-famous-green-teas-longjing-aa",
        "green-premium-famous-green-teas-longjing-a",
        "green-premium-famous-green-teas-longjing"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-longjing-aa",
      "name": {
        "en": "Premium Famous Green Teas Longjing AA",
        "zh": "名优绿茶 龙井特级",
        "ru": "Premium Famous Green Teas Longjing AA",
        "de": "Premium Famous Green Teas Longjing AA"
      },
      "nameKey": "Premium Famous Green Teas Longjing AA",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/8-Longjing-AA/17-Longjing-AA-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/8-Longjing-AA/17-Longjing-AA-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/8-Longjing-AA/17-Longjing-AA-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/8-Longjing-AA/17-Longjing-AA-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/8-Longjing-AA/17-Longjing-AA-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/8-Longjing-AA/17-Longjing-AA-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "Premium Famous Green Teas Longjing AA — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 龙井特级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Longjing AA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-maofeng-no-1",
        "green-premium-famous-green-teas-xiangxi-maojian-a",
        "green-premium-famous-green-teas-xiangxi-maojian",
        "green-premium-famous-green-teas-luosi-maojian",
        "green-premium-famous-green-teas-maojian",
        "green-premium-famous-green-teas-anji-white-tea",
        "green-premium-famous-green-teas-golden-tea",
        "green-premium-famous-green-teas-longjing-a",
        "green-premium-famous-green-teas-longjing"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-longjing-a",
      "name": {
        "en": "Premium Famous Green Teas Longjing A",
        "zh": "名优绿茶 龙井一级",
        "ru": "Premium Famous Green Teas Longjing A",
        "de": "Premium Famous Green Teas Longjing A"
      },
      "nameKey": "Premium Famous Green Teas Longjing A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/9-Longjing-A/18-Longjing-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/9-Longjing-A/18-Longjing-A-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/9-Longjing-A/18-Longjing-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/9-Longjing-A/18-Longjing-A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/9-Longjing-A/18-Longjing-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/9-Longjing-A/18-Longjing-A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "Premium Famous Green Teas Longjing A — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 龙井一级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Longjing A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-maofeng-no-1",
        "green-premium-famous-green-teas-xiangxi-maojian-a",
        "green-premium-famous-green-teas-xiangxi-maojian",
        "green-premium-famous-green-teas-luosi-maojian",
        "green-premium-famous-green-teas-maojian",
        "green-premium-famous-green-teas-anji-white-tea",
        "green-premium-famous-green-teas-golden-tea",
        "green-premium-famous-green-teas-longjing-aa",
        "green-premium-famous-green-teas-longjing"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-premium-famous-green-teas-longjing",
      "name": {
        "en": "Premium Famous Green Teas Longjing",
        "zh": "名优绿茶 龙井",
        "ru": "Premium Famous Green Teas Longjing",
        "de": "Premium Famous Green Teas Longjing"
      },
      "nameKey": "Premium Famous Green Teas Longjing",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/10-Longjing/19-Longjing-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/10-Longjing/19-Longjing-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/10-Longjing/19-Longjing-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/10-Longjing/19-Longjing-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/10-Longjing/19-Longjing-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/8%E5%90%8D%E4%BC%98%E7%BB%BF%E8%8C%B6Premium-Famous-Green-Teas/10-Longjing/19-Longjing-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "Premium Famous Green Teas Longjing — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优绿茶 龙井——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Green Teas Longjing — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "green-premium-famous-green-teas-maofeng-no-1",
        "green-premium-famous-green-teas-xiangxi-maojian-a",
        "green-premium-famous-green-teas-xiangxi-maojian",
        "green-premium-famous-green-teas-luosi-maojian",
        "green-premium-famous-green-teas-maojian",
        "green-premium-famous-green-teas-anji-white-tea",
        "green-premium-famous-green-teas-golden-tea",
        "green-premium-famous-green-teas-longjing-aa",
        "green-premium-famous-green-teas-longjing-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-others-xiao-maojian-no-1",
      "name": {
        "en": "others Xiao Maojian No.1",
        "zh": "其他 小毛尖1号",
        "ru": "others Xiao Maojian No.1",
        "de": "others Xiao Maojian No.1"
      },
      "nameKey": "others Xiao Maojian No.1",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "others Xiao Maojian No.1 — Xiangfeng Tea Group bulk export tea.",
        "zh": "其他 小毛尖1号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "others Xiao Maojian No.1 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-others-stir-fried-green-tea-super-premium",
        "green-others-stir-fried-green-tea-a",
        "green-others-yunnan-baked-xiao-maojian",
        "green-others-yunnan-straight-leaf-green-tea",
        "green-others-yunnan-straight-leaf-green-tea-grade-1",
        "green-others-8810",
        "green-others-4011"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-others-stir-fried-green-tea-super-premium",
      "name": {
        "en": "others Stir-fried Green Tea Super Premium",
        "zh": "其他 炒绿特优级",
        "ru": "others Stir-fried Green Tea Super Premium",
        "de": "others Stir-fried Green Tea Super Premium"
      },
      "nameKey": "others Stir-fried Green Tea Super Premium",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/2-Stir-fried-Green-Tea-Super-Premium/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/2-Stir-fried-Green-Tea-Super-Premium/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/2-Stir-fried-Green-Tea-Super-Premium/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/2-Stir-fried-Green-Tea-Super-Premium/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/2-Stir-fried-Green-Tea-Super-Premium/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/2-Stir-fried-Green-Tea-Super-Premium/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "others Stir-fried Green Tea Super Premium — Xiangfeng Tea Group bulk export tea.",
        "zh": "其他 炒绿特优级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "others Stir-fried Green Tea Super Premium — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-others-xiao-maojian-no-1",
        "green-others-stir-fried-green-tea-a",
        "green-others-yunnan-baked-xiao-maojian",
        "green-others-yunnan-straight-leaf-green-tea",
        "green-others-yunnan-straight-leaf-green-tea-grade-1",
        "green-others-8810",
        "green-others-4011"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-others-stir-fried-green-tea-a",
      "name": {
        "en": "others Stir-fried Green Tea A",
        "zh": "其他 炒绿A",
        "ru": "others Stir-fried Green Tea A",
        "de": "others Stir-fried Green Tea A"
      },
      "nameKey": "others Stir-fried Green Tea A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/3-Stir-fried-Green-Tea-A/20-Stir-fried-Green-Tea-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/3-Stir-fried-Green-Tea-A/20-Stir-fried-Green-Tea-A-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/3-Stir-fried-Green-Tea-A/20-Stir-fried-Green-Tea-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/3-Stir-fried-Green-Tea-A/20-Stir-fried-Green-Tea-A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/3-Stir-fried-Green-Tea-A/20-Stir-fried-Green-Tea-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/3-Stir-fried-Green-Tea-A/20-Stir-fried-Green-Tea-A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "others Stir-fried Green Tea A — Xiangfeng Tea Group bulk export tea.",
        "zh": "其他 炒绿A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "others Stir-fried Green Tea A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-others-xiao-maojian-no-1",
        "green-others-stir-fried-green-tea-super-premium",
        "green-others-yunnan-baked-xiao-maojian",
        "green-others-yunnan-straight-leaf-green-tea",
        "green-others-yunnan-straight-leaf-green-tea-grade-1",
        "green-others-8810",
        "green-others-4011"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-others-yunnan-baked-xiao-maojian",
      "name": {
        "en": "others Yunnan Baked Xiao Maojian",
        "zh": "其他 云南烘青小毛尖",
        "ru": "others Yunnan Baked Xiao Maojian",
        "de": "others Yunnan Baked Xiao Maojian"
      },
      "nameKey": "others Yunnan Baked Xiao Maojian",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/4-Yunnan-Baked-Xiao-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/4-Yunnan-Baked-Xiao-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-4_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/4-Yunnan-Baked-Xiao-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/4-Yunnan-Baked-Xiao-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-4_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/4-Yunnan-Baked-Xiao-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/4-Yunnan-Baked-Xiao-Maojian/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-4_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "others Yunnan Baked Xiao Maojian — Xiangfeng Tea Group bulk export tea.",
        "zh": "其他 云南烘青小毛尖——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "others Yunnan Baked Xiao Maojian — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "云南",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-others-xiao-maojian-no-1",
        "green-others-stir-fried-green-tea-super-premium",
        "green-others-stir-fried-green-tea-a",
        "green-others-yunnan-straight-leaf-green-tea",
        "green-others-yunnan-straight-leaf-green-tea-grade-1",
        "green-others-8810",
        "green-others-4011"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-others-yunnan-straight-leaf-green-tea",
      "name": {
        "en": "others Yunnan Straight-Leaf Green Tea",
        "zh": "其他 云南直条",
        "ru": "others Yunnan Straight-Leaf Green Tea",
        "de": "others Yunnan Straight-Leaf Green Tea"
      },
      "nameKey": "others Yunnan Straight-Leaf Green Tea",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/5-Yunnan-Straight-Leaf-Green-Tea/21-Yunnan-Straight-Leaf-Green-Tea-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/5-Yunnan-Straight-Leaf-Green-Tea/21-Yunnan-Straight-Leaf-Green-Tea-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/5-Yunnan-Straight-Leaf-Green-Tea/21-Yunnan-Straight-Leaf-Green-Tea-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/5-Yunnan-Straight-Leaf-Green-Tea/21-Yunnan-Straight-Leaf-Green-Tea-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/5-Yunnan-Straight-Leaf-Green-Tea/21-Yunnan-Straight-Leaf-Green-Tea-1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/5-Yunnan-Straight-Leaf-Green-Tea/21-Yunnan-Straight-Leaf-Green-Tea-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "others Yunnan Straight-Leaf Green Tea — Xiangfeng Tea Group bulk export tea.",
        "zh": "其他 云南直条——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "others Yunnan Straight-Leaf Green Tea — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "云南",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-others-xiao-maojian-no-1",
        "green-others-stir-fried-green-tea-super-premium",
        "green-others-stir-fried-green-tea-a",
        "green-others-yunnan-baked-xiao-maojian",
        "green-others-yunnan-straight-leaf-green-tea-grade-1",
        "green-others-8810",
        "green-others-4011"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-others-yunnan-straight-leaf-green-tea-grade-1",
      "name": {
        "en": "others Yunnan Straight-Leaf Green Tea Grade 1",
        "zh": "其他 云南直条一级",
        "ru": "others Yunnan Straight-Leaf Green Tea Grade 1",
        "de": "others Yunnan Straight-Leaf Green Tea Grade 1"
      },
      "nameKey": "others Yunnan Straight-Leaf Green Tea Grade 1",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/6-Yunnan-Straight-Leaf-Green-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-7_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/6-Yunnan-Straight-Leaf-Green-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-7_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/6-Yunnan-Straight-Leaf-Green-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-7_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/6-Yunnan-Straight-Leaf-Green-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-7_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/6-Yunnan-Straight-Leaf-Green-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-7_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/6-Yunnan-Straight-Leaf-Green-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-7_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "others Yunnan Straight-Leaf Green Tea Grade 1 — Xiangfeng Tea Group bulk export tea.",
        "zh": "其他 云南直条一级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "others Yunnan Straight-Leaf Green Tea Grade 1 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "云南",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-others-xiao-maojian-no-1",
        "green-others-stir-fried-green-tea-super-premium",
        "green-others-stir-fried-green-tea-a",
        "green-others-yunnan-baked-xiao-maojian",
        "green-others-yunnan-straight-leaf-green-tea",
        "green-others-8810",
        "green-others-4011"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-others-8810",
      "name": {
        "en": "others 8810",
        "zh": "其他 8810",
        "ru": "others 8810",
        "de": "others 8810"
      },
      "nameKey": "others 8810",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/7-8810/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-6_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/7-8810/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-6_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/7-8810/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-6_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/7-8810/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-6_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/7-8810/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-6_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/7-8810/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-6_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "others 8810 — Xiangfeng Tea Group bulk export tea.",
        "zh": "其他 8810——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "others 8810 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-others-xiao-maojian-no-1",
        "green-others-stir-fried-green-tea-super-premium",
        "green-others-stir-fried-green-tea-a",
        "green-others-yunnan-baked-xiao-maojian",
        "green-others-yunnan-straight-leaf-green-tea",
        "green-others-yunnan-straight-leaf-green-tea-grade-1",
        "green-others-4011"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-others-4011",
      "name": {
        "en": "others 4011",
        "zh": "其他 4011",
        "ru": "others 4011",
        "de": "others 4011"
      },
      "nameKey": "others 4011",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Green%20tea%202/9%E5%85%B6%E4%BB%96others/1-Xiao-Maojian-No.1/%E5%A4%96%E8%B4%B8-%E7%BB%BF%E8%8C%B6-%E8%8C%B6%E5%9D%AF-%E5%A4%A7%E5%8F%B6%E7%A7%8D-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "others 4011 — Xiangfeng Tea Group bulk export tea.",
        "zh": "其他 4011——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "others 4011 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "green-others-xiao-maojian-no-1",
        "green-others-stir-fried-green-tea-super-premium",
        "green-others-stir-fried-green-tea-a",
        "green-others-yunnan-baked-xiao-maojian",
        "green-others-yunnan-straight-leaf-green-tea",
        "green-others-yunnan-straight-leaf-green-tea-grade-1",
        "green-others-8810"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-matcha-5a",
      "name": {
        "en": "Matcha 5A",
        "zh": "抹茶5A",
        "ru": "Matcha 5A",
        "de": "Matcha 5A"
      },
      "nameKey": "Matcha 5A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/39-Matcha-5A-1.jpg",
          "liquor": ""
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/39-Matcha-5A-1.jpg",
          "liquor": ""
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/39-Matcha-5A-1.jpg",
          "liquor": ""
        }
      },
      "has_liquor": false,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Matcha 5A — Xiangfeng Tea Group bulk export tea.",
        "zh": "抹茶5A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Matcha 5A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-matcha-4a",
        "green-matcha-3a",
        "green-matcha-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-matcha-4a",
      "name": {
        "en": "Matcha 4A",
        "zh": "抹茶4A",
        "ru": "Matcha 4A",
        "de": "Matcha 4A"
      },
      "nameKey": "Matcha 4A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/40-Matcha-4A-1.jpg",
          "liquor": ""
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/40-Matcha-4A-1.jpg",
          "liquor": ""
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/40-Matcha-4A-1.jpg",
          "liquor": ""
        }
      },
      "has_liquor": false,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Matcha 4A — Xiangfeng Tea Group bulk export tea.",
        "zh": "抹茶4A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Matcha 4A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-matcha-5a",
        "green-matcha-3a",
        "green-matcha-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-matcha-3a",
      "name": {
        "en": "Matcha 3A",
        "zh": "抹茶3A",
        "ru": "Matcha 3A",
        "de": "Matcha 3A"
      },
      "nameKey": "Matcha 3A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/41-Matcha-3A-1.jpg",
          "liquor": ""
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/41-Matcha-3A-1.jpg",
          "liquor": ""
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/41-Matcha-3A-1.jpg",
          "liquor": ""
        }
      },
      "has_liquor": false,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Matcha 3A — Xiangfeng Tea Group bulk export tea.",
        "zh": "抹茶3A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Matcha 3A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-matcha-5a",
        "green-matcha-4a",
        "green-matcha-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "green-matcha-a",
      "name": {
        "en": "Matcha A",
        "zh": "抹茶A",
        "ru": "Matcha A",
        "de": "Matcha A"
      },
      "nameKey": "Matcha A",
      "catKey": "products.catGreen",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/42-Matcha-A-1.jpg",
          "liquor": ""
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/42-Matcha-A-1.jpg",
          "liquor": ""
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Green%20tea%202/10%E6%8A%B9%E8%8C%B6Matcha/42-Matcha-A-1.jpg",
          "liquor": ""
        }
      },
      "has_liquor": false,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Matcha A — Xiangfeng Tea Group bulk export tea.",
        "zh": "抹茶A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Matcha A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "green-matcha-5a",
        "green-matcha-4a",
        "green-matcha-3a"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-fannings-2a",
      "name": {
        "en": "Black Tea Fannings 2A",
        "zh": "红碎2A",
        "ru": "Black Tea Fannings 2A",
        "de": "Black Tea Fannings 2A"
      },
      "nameKey": "Black Tea Fannings 2A",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/1-Black-Tea-Fannings-2A/22-Black-Tea-Fannings-2A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/1-Black-Tea-Fannings-2A/22-Black-Tea-Fannings-2A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/1-Black-Tea-Fannings-2A/22-Black-Tea-Fannings-2A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/1-Black-Tea-Fannings-2A/22-Black-Tea-Fannings-2A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Fannings 2A — Xiangfeng Tea Group bulk export tea.",
        "zh": "红碎2A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Fannings 2A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-fannings-a",
        "black-black-tea-fannings-a-2",
        "black-black-tea-fannings",
        "black-black-tea-fannings-2",
        "black-black-tea-fannings-black-tea-ctc",
        "black-black-tea-fannings-black-tea-ctc-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-fannings-a",
      "name": {
        "en": "Black Tea Fannings A",
        "zh": "红碎A",
        "ru": "Black Tea Fannings A",
        "de": "Black Tea Fannings A"
      },
      "nameKey": "Black Tea Fannings A",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/2-Black-Tea-Fannings-A/23-Black-Tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/2-Black-Tea-Fannings-A/23-Black-Tea-Fannings-A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/2-Black-Tea-Fannings-A/23-Black-Tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/2-Black-Tea-Fannings-A/23-Black-Tea-Fannings-A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Fannings A — Xiangfeng Tea Group bulk export tea.",
        "zh": "红碎A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Fannings A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-fannings-2a",
        "black-black-tea-fannings-a-2",
        "black-black-tea-fannings",
        "black-black-tea-fannings-2",
        "black-black-tea-fannings-black-tea-ctc",
        "black-black-tea-fannings-black-tea-ctc-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-fannings-a-2",
      "name": {
        "en": "Black Tea Fannings A",
        "zh": "红碎A",
        "ru": "Black Tea Fannings A",
        "de": "Black Tea Fannings A"
      },
      "nameKey": "Black Tea Fannings A",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/3-Black-Tea-Fannings-A/24-Black-Tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/3-Black-Tea-Fannings-A/24-Black-Tea-Fannings-A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/3-Black-Tea-Fannings-A/24-Black-Tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/3-Black-Tea-Fannings-A/24-Black-Tea-Fannings-A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Fannings A — Xiangfeng Tea Group bulk export tea.",
        "zh": "红碎A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Fannings A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-fannings-2a",
        "black-black-tea-fannings-a",
        "black-black-tea-fannings",
        "black-black-tea-fannings-2",
        "black-black-tea-fannings-black-tea-ctc",
        "black-black-tea-fannings-black-tea-ctc-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-fannings",
      "name": {
        "en": "Black Tea Fannings",
        "zh": "红碎",
        "ru": "Black Tea Fannings",
        "de": "Black Tea Fannings"
      },
      "nameKey": "Black Tea Fannings",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/4-Black-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/4-Black-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/4-Black-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/4-Black-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Fannings — Xiangfeng Tea Group bulk export tea.",
        "zh": "红碎——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Fannings — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-fannings-2a",
        "black-black-tea-fannings-a",
        "black-black-tea-fannings-a-2",
        "black-black-tea-fannings-2",
        "black-black-tea-fannings-black-tea-ctc",
        "black-black-tea-fannings-black-tea-ctc-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-fannings-2",
      "name": {
        "en": "Black Tea Fannings",
        "zh": "红碎",
        "ru": "Black Tea Fannings",
        "de": "Black Tea Fannings"
      },
      "nameKey": "Black Tea Fannings",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E7%A2%8E1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/5-Black-Tea-Fannings/25-Black-Tea-Fannings-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/5-Black-Tea-Fannings/25-Black-Tea-Fannings-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/5-Black-Tea-Fannings/25-Black-Tea-Fannings-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/5-Black-Tea-Fannings/25-Black-Tea-Fannings-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Fannings — Xiangfeng Tea Group bulk export tea.",
        "zh": "红碎——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Fannings — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-fannings-2a",
        "black-black-tea-fannings-a",
        "black-black-tea-fannings-a-2",
        "black-black-tea-fannings",
        "black-black-tea-fannings-black-tea-ctc",
        "black-black-tea-fannings-black-tea-ctc-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-fannings-black-tea-ctc",
      "name": {
        "en": "Black Tea Fannings Black Tea CTC",
        "zh": "红碎 红CTC",
        "ru": "Black Tea Fannings Black Tea CTC",
        "de": "Black Tea Fannings Black Tea CTC"
      },
      "nameKey": "Black Tea Fannings Black Tea CTC",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/6-Black-Tea-CTC/26-Black-Tea-CTC-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/6-Black-Tea-CTC/26-Black-Tea-CTC-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/6-Black-Tea-CTC/26-Black-Tea-CTC-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/6-Black-Tea-CTC/26-Black-Tea-CTC-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/6-Black-Tea-CTC/26-Black-Tea-CTC-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/6-Black-Tea-CTC/26-Black-Tea-CTC-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Fannings Black Tea CTC — Xiangfeng Tea Group bulk export tea.",
        "zh": "红碎 红CTC——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Fannings Black Tea CTC — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-fannings-2a",
        "black-black-tea-fannings-a",
        "black-black-tea-fannings-a-2",
        "black-black-tea-fannings",
        "black-black-tea-fannings-2",
        "black-black-tea-fannings-black-tea-ctc-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-fannings-black-tea-ctc-2",
      "name": {
        "en": "Black Tea Fannings Black Tea CTC",
        "zh": "红碎 红CTC",
        "ru": "Black Tea Fannings Black Tea CTC",
        "de": "Black Tea Fannings Black Tea CTC"
      },
      "nameKey": "Black Tea Fannings Black Tea CTC",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/7-Black-Tea-CTC/27-Black-Tea-CTC-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/7-Black-Tea-CTC/27-Black-Tea-CTC-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/7-Black-Tea-CTC/27-Black-Tea-CTC-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/7-Black-Tea-CTC/27-Black-Tea-CTC-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/7-Black-Tea-CTC/27-Black-Tea-CTC-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/1%E7%BA%A2%E7%A2%8EBlack-Tea-Fannings/7-Black-Tea-CTC/27-Black-Tea-CTC-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Fannings Black Tea CTC — Xiangfeng Tea Group bulk export tea.",
        "zh": "红碎 红CTC——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Fannings Black Tea CTC — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-fannings-2a",
        "black-black-tea-fannings-a",
        "black-black-tea-fannings-a-2",
        "black-black-tea-fannings",
        "black-black-tea-fannings-2",
        "black-black-tea-fannings-black-tea-ctc"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-premium-dian-hong-black-tea",
      "name": {
        "en": "Black Tea Premium Dian Hong Black Tea",
        "zh": "红条茶 滇红特级",
        "ru": "Black Tea Premium Dian Hong Black Tea",
        "de": "Black Tea Premium Dian Hong Black Tea"
      },
      "nameKey": "Premium Dian Hong Black Tea",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Premium Dian Hong Black Tea — Xiangfeng Tea Group bulk export tea.",
        "zh": "红条茶 滇红特级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Dian Hong Black Tea — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "云南",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-op",
        "black-black-tea-grade-5",
        "black-black-tea-grade-4",
        "black-black-tea-grade-3",
        "black-black-tea-grade-2",
        "black-black-tea-grade-1",
        "black-black-tea-grade-1-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-op",
      "name": {
        "en": "Black Tea OP",
        "zh": "红条茶 红OP",
        "ru": "Black Tea OP",
        "de": "Black Tea OP"
      },
      "nameKey": "Black Tea OP",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/1-Premium-Dian-Hong-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A11_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Black Tea OP — Xiangfeng Tea Group bulk export tea.",
        "zh": "红条茶 红OP——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea OP — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "black-black-tea-premium-dian-hong-black-tea",
        "black-black-tea-grade-5",
        "black-black-tea-grade-4",
        "black-black-tea-grade-3",
        "black-black-tea-grade-2",
        "black-black-tea-grade-1",
        "black-black-tea-grade-1-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-grade-5",
      "name": {
        "en": "Black Tea Grade 5",
        "zh": "红条茶 红茶五级",
        "ru": "Black Tea Grade 5",
        "de": "Black Tea Grade 5"
      },
      "nameKey": "Black Tea Grade 5",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/3-Black-Tea-Grade-5/29-Black-Tea-Grade-5-1-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/3-Black-Tea-Grade-5/29-Black-Tea-Grade-5-1-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/3-Black-Tea-Grade-5/29-Black-Tea-Grade-5-1-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/3-Black-Tea-Grade-5/29-Black-Tea-Grade-5-1-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/3-Black-Tea-Grade-5/29-Black-Tea-Grade-5-1-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/3-Black-Tea-Grade-5/29-Black-Tea-Grade-5-1-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Grade 5 — Xiangfeng Tea Group bulk export tea.",
        "zh": "红条茶 红茶五级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Grade 5 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-premium-dian-hong-black-tea",
        "black-black-tea-op",
        "black-black-tea-grade-4",
        "black-black-tea-grade-3",
        "black-black-tea-grade-2",
        "black-black-tea-grade-1",
        "black-black-tea-grade-1-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-grade-4",
      "name": {
        "en": "Black Tea Grade 4",
        "zh": "红条茶 红茶四级",
        "ru": "Black Tea Grade 4",
        "de": "Black Tea Grade 4"
      },
      "nameKey": "Black Tea Grade 4",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/4-Black-Tea-Grade-4/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A13_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/4-Black-Tea-Grade-4/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A13_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/4-Black-Tea-Grade-4/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A13_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/4-Black-Tea-Grade-4/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A13_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/4-Black-Tea-Grade-4/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A13_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/4-Black-Tea-Grade-4/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A13_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Grade 4 — Xiangfeng Tea Group bulk export tea.",
        "zh": "红条茶 红茶四级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Grade 4 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-premium-dian-hong-black-tea",
        "black-black-tea-op",
        "black-black-tea-grade-5",
        "black-black-tea-grade-3",
        "black-black-tea-grade-2",
        "black-black-tea-grade-1",
        "black-black-tea-grade-1-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-grade-3",
      "name": {
        "en": "Black Tea Grade 3",
        "zh": "红条茶 红茶三级",
        "ru": "Black Tea Grade 3",
        "de": "Black Tea Grade 3"
      },
      "nameKey": "Black Tea Grade 3",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/5-Black-Tea-Grade-3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A14_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/5-Black-Tea-Grade-3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A14_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/5-Black-Tea-Grade-3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A14_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/5-Black-Tea-Grade-3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A14_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/5-Black-Tea-Grade-3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A14_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/5-Black-Tea-Grade-3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A14_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Grade 3 — Xiangfeng Tea Group bulk export tea.",
        "zh": "红条茶 红茶三级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Grade 3 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-premium-dian-hong-black-tea",
        "black-black-tea-op",
        "black-black-tea-grade-5",
        "black-black-tea-grade-4",
        "black-black-tea-grade-2",
        "black-black-tea-grade-1",
        "black-black-tea-grade-1-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-grade-2",
      "name": {
        "en": "Black Tea Grade 2",
        "zh": "红条茶 红茶二级",
        "ru": "Black Tea Grade 2",
        "de": "Black Tea Grade 2"
      },
      "nameKey": "Black Tea Grade 2",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/6-Black-Tea-Grade-2/29-Black-Tea-Grade-5-2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/6-Black-Tea-Grade-2/29-Black-Tea-Grade-5-2-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/6-Black-Tea-Grade-2/29-Black-Tea-Grade-5-2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/6-Black-Tea-Grade-2/29-Black-Tea-Grade-5-2-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/6-Black-Tea-Grade-2/29-Black-Tea-Grade-5-2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/6-Black-Tea-Grade-2/29-Black-Tea-Grade-5-2-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Grade 2 — Xiangfeng Tea Group bulk export tea.",
        "zh": "红条茶 红茶二级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Grade 2 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-premium-dian-hong-black-tea",
        "black-black-tea-op",
        "black-black-tea-grade-5",
        "black-black-tea-grade-4",
        "black-black-tea-grade-3",
        "black-black-tea-grade-1",
        "black-black-tea-grade-1-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-grade-1",
      "name": {
        "en": "Black Tea Grade 1",
        "zh": "红条茶 红茶一级",
        "ru": "Black Tea Grade 1",
        "de": "Black Tea Grade 1"
      },
      "nameKey": "Black Tea Grade 1",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/7-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A15_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/7-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A15_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/7-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A15_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/7-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A15_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/7-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A15_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/7-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A15_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Grade 1 — Xiangfeng Tea Group bulk export tea.",
        "zh": "红条茶 红茶一级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Grade 1 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-premium-dian-hong-black-tea",
        "black-black-tea-op",
        "black-black-tea-grade-5",
        "black-black-tea-grade-4",
        "black-black-tea-grade-3",
        "black-black-tea-grade-2",
        "black-black-tea-grade-1-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-black-tea-grade-1-2",
      "name": {
        "en": "Black Tea Grade 1",
        "zh": "红条茶 红茶一级",
        "ru": "Black Tea Grade 1",
        "de": "Black Tea Grade 1"
      },
      "nameKey": "Black Tea Grade 1",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/8-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A12_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/8-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A12_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/8-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A12_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/8-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A12_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/8-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A12_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/2%E7%BA%A2%E6%9D%A1%E8%8C%B6Black-Tea/8-Black-Tea-Grade-1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E7%BA%A2%E6%9D%A12_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Black Tea Grade 1 — Xiangfeng Tea Group bulk export tea.",
        "zh": "红条茶 红茶一级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Black Tea Grade 1 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "black-black-tea-premium-dian-hong-black-tea",
        "black-black-tea-op",
        "black-black-tea-grade-5",
        "black-black-tea-grade-4",
        "black-black-tea-grade-3",
        "black-black-tea-grade-2",
        "black-black-tea-grade-1"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-premium-famous-black-teas-red-maofeng",
      "name": {
        "en": "Premium Famous Black Teas Red Maofeng",
        "zh": "名优红茶 红毛峰",
        "ru": "Premium Famous Black Teas Red Maofeng",
        "de": "Premium Famous Black Teas Red Maofeng"
      },
      "nameKey": "Premium Famous Black Teas Red Maofeng",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/1-Red-Maofeng/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B61_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/1-Red-Maofeng/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B61_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/1-Red-Maofeng/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B61_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/1-Red-Maofeng/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B61_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/1-Red-Maofeng/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B61_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/1-Red-Maofeng/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B61_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "Premium Famous Black Teas Red Maofeng — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优红茶 红毛峰——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Black Teas Red Maofeng — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "black-premium-famous-black-teas-golden-needle-black-tea",
        "black-premium-famous-black-teas-floral-souchong",
        "black-premium-famous-black-teas-golden-peony-no-1"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-premium-famous-black-teas-golden-needle-black-tea",
      "name": {
        "en": "Premium Famous Black Teas Golden Needle Black Tea",
        "zh": "名优红茶 松针",
        "ru": "Premium Famous Black Teas Golden Needle Black Tea",
        "de": "Premium Famous Black Teas Golden Needle Black Tea"
      },
      "nameKey": "Premium Famous Black Teas Golden Needle Black Tea",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/2-Golden-Needle-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B62_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/2-Golden-Needle-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B62_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/2-Golden-Needle-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B62_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/2-Golden-Needle-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B62_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/2-Golden-Needle-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B62_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/2-Golden-Needle-Black-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B62_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Black Teas Golden Needle Black Tea — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优红茶 松针——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Black Teas Golden Needle Black Tea — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "black-premium-famous-black-teas-red-maofeng",
        "black-premium-famous-black-teas-floral-souchong",
        "black-premium-famous-black-teas-golden-peony-no-1"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-premium-famous-black-teas-floral-souchong",
      "name": {
        "en": "Premium Famous Black Teas Floral Souchong",
        "zh": "名优红茶 花香小种",
        "ru": "Premium Famous Black Teas Floral Souchong",
        "de": "Premium Famous Black Teas Floral Souchong"
      },
      "nameKey": "Premium Famous Black Teas Floral Souchong",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/3-Floral-Souchong/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B63_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/3-Floral-Souchong/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B63_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/3-Floral-Souchong/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B63_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/3-Floral-Souchong/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B63_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/3-Floral-Souchong/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B63_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/3-Floral-Souchong/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B63_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Black Teas Floral Souchong — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优红茶 花香小种——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Black Teas Floral Souchong — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "black-premium-famous-black-teas-red-maofeng",
        "black-premium-famous-black-teas-golden-needle-black-tea",
        "black-premium-famous-black-teas-golden-peony-no-1"
      ],
      "standard": "conventional"
    },
    {
      "id": "black-premium-famous-black-teas-golden-peony-no-1",
      "name": {
        "en": "Premium Famous Black Teas Golden Peony No.1",
        "zh": "名优红茶 金牡丹1号",
        "ru": "Premium Famous Black Teas Golden Peony No.1",
        "de": "Premium Famous Black Teas Golden Peony No.1"
      },
      "nameKey": "Premium Famous Black Teas Golden Peony No.1",
      "catKey": "products.catBlack",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/4-Golden-Peony-No.1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B64_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/4-Golden-Peony-No.1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B64_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/4-Golden-Peony-No.1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B64_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/4-Golden-Peony-No.1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B64_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/4-Golden-Peony-No.1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B64_1.jpg",
          "liquor": "https://video.aultras-tea.com/Black%20tea/3%E5%90%8D%E4%BC%98%E7%BA%A2%E8%8C%B6Premium-Famous-Black-Teas/4-Golden-Peony-No.1/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%90%8D%E4%BC%98%E8%8C%B64_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Premium Famous Black Teas Golden Peony No.1 — Xiangfeng Tea Group bulk export tea.",
        "zh": "名优红茶 金牡丹1号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Premium Famous Black Teas Golden Peony No.1 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "black-premium-famous-black-teas-red-maofeng",
        "black-premium-famous-black-teas-golden-needle-black-tea",
        "black-premium-famous-black-teas-floral-souchong"
      ],
      "standard": "conventional"
    },
    {
      "id": "dark-pu-er-tea-fannings",
      "name": {
        "en": "Pu'er Tea Fannings",
        "zh": "普洱碎",
        "ru": "Pu'er Tea Fannings",
        "de": "Pu'er Tea Fannings"
      },
      "nameKey": "Pu'er Tea Fannings",
      "catKey": "products.catPuer",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/1-%E7%86%9F%E7%A2%8E%E7%9B%AE%E8%8C%B6(%E6%99%AE%E6%B4%B1%E7%A2%8E)%EF%BC%9APu%E2%80%99er-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Dark%20tea/1-%E7%86%9F%E7%A2%8E%E7%9B%AE%E8%8C%B6(%E6%99%AE%E6%B4%B1%E7%A2%8E)%EF%BC%9APu%E2%80%99er-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/1-%E7%86%9F%E7%A2%8E%E7%9B%AE%E8%8C%B6(%E6%99%AE%E6%B4%B1%E7%A2%8E)%EF%BC%9APu%E2%80%99er-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Dark%20tea/1-%E7%86%9F%E7%A2%8E%E7%9B%AE%E8%8C%B6(%E6%99%AE%E6%B4%B1%E7%A2%8E)%EF%BC%9APu%E2%80%99er-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/1-%E7%86%9F%E7%A2%8E%E7%9B%AE%E8%8C%B6(%E6%99%AE%E6%B4%B1%E7%A2%8E)%EF%BC%9APu%E2%80%99er-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Dark%20tea/1-%E7%86%9F%E7%A2%8E%E7%9B%AE%E8%8C%B6(%E6%99%AE%E6%B4%B1%E7%A2%8E)%EF%BC%9APu%E2%80%99er-Tea-Fannings/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Pu'er Tea Fannings — Xiangfeng Tea Group bulk export tea.",
        "zh": "普洱碎——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Pu'er Tea Fannings — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [],
      "standard": "conventional"
    },
    {
      "id": "dark-fermented-pu-er",
      "name": {
        "en": "Fermented Pu'er",
        "zh": "熟普",
        "ru": "Fermented Pu'er",
        "de": "Fermented Pu'er"
      },
      "nameKey": "Fermented Pu'er",
      "catKey": "products.catPuer",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/2-%E7%86%9F%E6%99%AE-Fermented-Pu%E2%80%99er/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Dark%20tea/2-%E7%86%9F%E6%99%AE-Fermented-Pu%E2%80%99er/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-3_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/2-%E7%86%9F%E6%99%AE-Fermented-Pu%E2%80%99er/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Dark%20tea/2-%E7%86%9F%E6%99%AE-Fermented-Pu%E2%80%99er/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-3_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/2-%E7%86%9F%E6%99%AE-Fermented-Pu%E2%80%99er/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Dark%20tea/2-%E7%86%9F%E6%99%AE-Fermented-Pu%E2%80%99er/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-3_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Fermented Pu'er — Xiangfeng Tea Group bulk export tea.",
        "zh": "熟普——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Fermented Pu'er — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [],
      "standard": "conventional"
    },
    {
      "id": "dark-tea-fossil",
      "name": {
        "en": "Tea Fossil",
        "zh": "茶化石",
        "ru": "Tea Fossil",
        "de": "Tea Fossil"
      },
      "nameKey": "Tea Fossil",
      "catKey": "products.catPuer",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/3-%E8%8C%B6%E5%8C%96%E7%9F%B3Tea-Fossil/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Dark%20tea/3-%E8%8C%B6%E5%8C%96%E7%9F%B3Tea-Fossil/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-4_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/3-%E8%8C%B6%E5%8C%96%E7%9F%B3Tea-Fossil/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Dark%20tea/3-%E8%8C%B6%E5%8C%96%E7%9F%B3Tea-Fossil/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-4_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/3-%E8%8C%B6%E5%8C%96%E7%9F%B3Tea-Fossil/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Dark%20tea/3-%E8%8C%B6%E5%8C%96%E7%9F%B3Tea-Fossil/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E9%BB%91%E8%8C%B6-4_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Tea Fossil — Xiangfeng Tea Group bulk export tea.",
        "zh": "茶化石——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Tea Fossil — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [],
      "standard": "conventional"
    },
    {
      "id": "dark-pu-er-tea-cakes-pu-er-cake-1",
      "name": {
        "en": "Pu'er Tea Cakes Pu'er Cake 1",
        "zh": "普洱饼1号",
        "ru": "Pu'er Tea Cakes Pu'er Cake 1",
        "de": "Pu'er Tea Cakes Pu'er Cake 1"
      },
      "nameKey": "Pu'er Tea Cakes Pu'er Cake 1",
      "catKey": "products.catPuer",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/4-%E6%99%AE%E6%B4%B1%E9%A5%BC%EF%BC%9APu%E2%80%99er-Tea-Cakes/%E6%99%AE%E6%B4%B1%E9%A5%BC-1.jpg",
          "liquor": ""
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/4-%E6%99%AE%E6%B4%B1%E9%A5%BC%EF%BC%9APu%E2%80%99er-Tea-Cakes/%E6%99%AE%E6%B4%B1%E9%A5%BC-1.jpg",
          "liquor": ""
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/4-%E6%99%AE%E6%B4%B1%E9%A5%BC%EF%BC%9APu%E2%80%99er-Tea-Cakes/%E6%99%AE%E6%B4%B1%E9%A5%BC-1.jpg",
          "liquor": ""
        }
      },
      "has_liquor": false,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Pu'er Tea Cakes Pu'er Cake 1 — Xiangfeng Tea Group bulk export tea.",
        "zh": "普洱饼1号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Pu'er Tea Cakes Pu'er Cake 1 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "dark-pu-er-tea-cakes-pu-er-cake-2",
        "dark-pu-er-tea-cakes-pu-er-cake-3"
      ],
      "standard": "conventional"
    },
    {
      "id": "dark-pu-er-tea-cakes-pu-er-cake-2",
      "name": {
        "en": "Pu'er Tea Cakes Pu'er Cake 2",
        "zh": "普洱饼2号",
        "ru": "Pu'er Tea Cakes Pu'er Cake 2",
        "de": "Pu'er Tea Cakes Pu'er Cake 2"
      },
      "nameKey": "Pu'er Tea Cakes Pu'er Cake 2",
      "catKey": "products.catPuer",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/4-%E6%99%AE%E6%B4%B1%E9%A5%BC%EF%BC%9APu%E2%80%99er-Tea-Cakes/%E6%99%AE%E6%B4%B1%E9%A5%BC-2.jpg",
          "liquor": ""
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/4-%E6%99%AE%E6%B4%B1%E9%A5%BC%EF%BC%9APu%E2%80%99er-Tea-Cakes/%E6%99%AE%E6%B4%B1%E9%A5%BC-2.jpg",
          "liquor": ""
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/4-%E6%99%AE%E6%B4%B1%E9%A5%BC%EF%BC%9APu%E2%80%99er-Tea-Cakes/%E6%99%AE%E6%B4%B1%E9%A5%BC-2.jpg",
          "liquor": ""
        }
      },
      "has_liquor": false,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Pu'er Tea Cakes Pu'er Cake 2 — Xiangfeng Tea Group bulk export tea.",
        "zh": "普洱饼2号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Pu'er Tea Cakes Pu'er Cake 2 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "dark-pu-er-tea-cakes-pu-er-cake-1",
        "dark-pu-er-tea-cakes-pu-er-cake-3"
      ],
      "standard": "conventional"
    },
    {
      "id": "dark-pu-er-tea-cakes-pu-er-cake-3",
      "name": {
        "en": "Pu'er Tea Cakes Pu'er Cake 3",
        "zh": "普洱饼3号",
        "ru": "Pu'er Tea Cakes Pu'er Cake 3",
        "de": "Pu'er Tea Cakes Pu'er Cake 3"
      },
      "nameKey": "Pu'er Tea Cakes Pu'er Cake 3",
      "catKey": "products.catPuer",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/4-%E6%99%AE%E6%B4%B1%E9%A5%BC%EF%BC%9APu%E2%80%99er-Tea-Cakes/%E6%99%AE%E6%B4%B1%E9%A5%BC-3.jpg",
          "liquor": ""
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/4-%E6%99%AE%E6%B4%B1%E9%A5%BC%EF%BC%9APu%E2%80%99er-Tea-Cakes/%E6%99%AE%E6%B4%B1%E9%A5%BC-3.jpg",
          "liquor": ""
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Dark%20tea/4-%E6%99%AE%E6%B4%B1%E9%A5%BC%EF%BC%9APu%E2%80%99er-Tea-Cakes/%E6%99%AE%E6%B4%B1%E9%A5%BC-3.jpg",
          "liquor": ""
        }
      },
      "has_liquor": false,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Pu'er Tea Cakes Pu'er Cake 3 — Xiangfeng Tea Group bulk export tea.",
        "zh": "普洱饼3号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Pu'er Tea Cakes Pu'er Cake 3 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "dark-pu-er-tea-cakes-pu-er-cake-1",
        "dark-pu-er-tea-cakes-pu-er-cake-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "white-silver-needle-aa",
      "name": {
        "en": "Silver Needle AA",
        "zh": "白毫银针AA",
        "ru": "Silver Needle AA",
        "de": "Silver Needle AA"
      },
      "nameKey": "Silver Needle AA",
      "catKey": "products.catWhite",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/1-Silver-Needle-AA/30-Silver-Needle-AA-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/1-Silver-Needle-AA/30-Silver-Needle-AA-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/1-Silver-Needle-AA/30-Silver-Needle-AA-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/1-Silver-Needle-AA/30-Silver-Needle-AA-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Silver Needle AA — Xiangfeng Tea Group bulk export tea.",
        "zh": "白毫银针AA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Silver Needle AA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "white-silver-needle-a",
        "white-silver-needle"
      ],
      "standard": "conventional"
    },
    {
      "id": "white-silver-needle-a",
      "name": {
        "en": "Silver Needle A",
        "zh": "白毫银针A",
        "ru": "Silver Needle A",
        "de": "Silver Needle A"
      },
      "nameKey": "Silver Needle A",
      "catKey": "products.catWhite",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/2-Silver-Needle-A/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/2-Silver-Needle-A/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/2-Silver-Needle-A/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/2-Silver-Needle-A/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Silver Needle A — Xiangfeng Tea Group bulk export tea.",
        "zh": "白毫银针A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Silver Needle A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "white-silver-needle-aa",
        "white-silver-needle"
      ],
      "standard": "conventional"
    },
    {
      "id": "white-silver-needle",
      "name": {
        "en": "Silver Needle",
        "zh": "白毫银针",
        "ru": "Silver Needle",
        "de": "Silver Needle"
      },
      "nameKey": "Silver Needle",
      "catKey": "products.catWhite",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/3-Silver-Needle/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/3-Silver-Needle/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/3-Silver-Needle/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/1-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88Silver-Needle/3-Silver-Needle/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E6%AF%AB%E9%93%B6%E9%92%88-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Silver Needle — Xiangfeng Tea Group bulk export tea.",
        "zh": "白毫银针——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Silver Needle — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "white-silver-needle-aa",
        "white-silver-needle-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "white-white-peony-aa",
      "name": {
        "en": "White Peony AA",
        "zh": "白牡丹AA",
        "ru": "White Peony AA",
        "de": "White Peony AA"
      },
      "nameKey": "White Peony AA",
      "catKey": "products.catWhite",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-3_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-3_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/1-White-Peony-AA/31-White-Peony-AA-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/1-White-Peony-AA/31-White-Peony-AA-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/1-White-Peony-AA/31-White-Peony-AA-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/1-White-Peony-AA/31-White-Peony-AA-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "organic"
      ],
      "description": {
        "en": "White Peony AA — Xiangfeng Tea Group bulk export tea.",
        "zh": "白牡丹AA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "White Peony AA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Organic"
      },
      "relatedIds": [
        "white-white-peony-a",
        "white-white-peony"
      ],
      "standard": "conventional"
    },
    {
      "id": "white-white-peony-a",
      "name": {
        "en": "White Peony A",
        "zh": "白牡丹A",
        "ru": "White Peony A",
        "de": "White Peony A"
      },
      "nameKey": "White Peony A",
      "catKey": "products.catWhite",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-3_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-3_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/2-White-Peony-A/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-5_1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/2-White-Peony-A/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-5_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/2-White-Peony-A/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-5_1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/2-White-Peony-A/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-5_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "White Peony A — Xiangfeng Tea Group bulk export tea.",
        "zh": "白牡丹A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "White Peony A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "white-white-peony-aa",
        "white-white-peony"
      ],
      "standard": "conventional"
    },
    {
      "id": "white-white-peony",
      "name": {
        "en": "White Peony",
        "zh": "白牡丹",
        "ru": "White Peony",
        "de": "White Peony"
      },
      "nameKey": "White Peony",
      "catKey": "products.catWhite",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-3_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-3_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/3-White-Peony/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/3-White-Peony/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/3-White-Peony/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/2-%E7%99%BD%E7%89%A1%E4%B8%B9White-Peony/3-White-Peony/%E5%A4%96%E8%B4%B8-%E5%9B%BD%E6%A0%87-%E7%99%BD%E7%89%A1%E4%B8%B9-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "White Peony — Xiangfeng Tea Group bulk export tea.",
        "zh": "白牡丹——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "White Peony — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "white-white-peony-aa",
        "white-white-peony-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "white-white-dragon-pearl",
      "name": {
        "en": "White Dragon Pearl",
        "zh": "白龙珠",
        "ru": "White Dragon Pearl",
        "de": "White Dragon Pearl"
      },
      "nameKey": "White Dragon Pearl",
      "catKey": "products.catWhite",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/White%20tea/3-%E7%99%BD%E9%BE%99%E7%8F%A0White-Dragon-Pearl/White-Dragon-Pearl/32-White-Dragon-Pearl-2.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/3-%E7%99%BD%E9%BE%99%E7%8F%A0White-Dragon-Pearl/White-Dragon-Pearl/32-White-Dragon-Pearl-3.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/White%20tea/3-%E7%99%BD%E9%BE%99%E7%8F%A0White-Dragon-Pearl/White-Dragon-Pearl/32-White-Dragon-Pearl-2.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/3-%E7%99%BD%E9%BE%99%E7%8F%A0White-Dragon-Pearl/White-Dragon-Pearl/32-White-Dragon-Pearl-3.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/White%20tea/3-%E7%99%BD%E9%BE%99%E7%8F%A0White-Dragon-Pearl/White-Dragon-Pearl/32-White-Dragon-Pearl-2.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/3-%E7%99%BD%E9%BE%99%E7%8F%A0White-Dragon-Pearl/White-Dragon-Pearl/32-White-Dragon-Pearl-3.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "organic"
      ],
      "description": {
        "en": "White Dragon Pearl — Xiangfeng Tea Group bulk export tea.",
        "zh": "白龙珠——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "White Dragon Pearl — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, Organic"
      },
      "relatedIds": [],
      "standard": "conventional"
    },
    {
      "id": "white-white-tea-fannings-a",
      "name": {
        "en": "White tea Fannings A",
        "zh": "白茶碎A",
        "ru": "White tea Fannings A",
        "de": "White tea Fannings A"
      },
      "nameKey": "White tea Fannings A",
      "catKey": "products.catWhite",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/1-White-tea-Fannings-A/33-White-tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/1-White-tea-Fannings-A/33-White-tea-Fannings-A-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/1-White-tea-Fannings-A/33-White-tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/1-White-tea-Fannings-A/33-White-tea-Fannings-A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/1-White-tea-Fannings-A/33-White-tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/1-White-tea-Fannings-A/33-White-tea-Fannings-A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "White tea Fannings A — Xiangfeng Tea Group bulk export tea.",
        "zh": "白茶碎A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "White tea Fannings A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "white-white-tea-fannings"
      ],
      "standard": "conventional"
    },
    {
      "id": "white-white-tea-fannings",
      "name": {
        "en": "White tea Fannings",
        "zh": "白茶碎",
        "ru": "White tea Fannings",
        "de": "White tea Fannings"
      },
      "nameKey": "White tea Fannings",
      "catKey": "products.catWhite",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/2-White-tea-Fannings/34-White-tea-Fannings-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/2-White-tea-Fannings/34-White-tea-Fannings-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/2-White-tea-Fannings/34-White-tea-Fannings-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/2-White-tea-Fannings/34-White-tea-Fannings-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/2-White-tea-Fannings/34-White-tea-Fannings-1.jpg",
          "liquor": "https://video.aultras-tea.com/White%20tea/4-%E7%99%BD%E8%8C%B6%E7%A2%8EWhite-tea-Fannings/2-White-tea-Fannings/34-White-tea-Fannings-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "White tea Fannings — Xiangfeng Tea Group bulk export tea.",
        "zh": "白茶碎——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "White tea Fannings — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "white-white-tea-fannings-a"
      ],
      "standard": "conventional"
    },
    {
      "id": "flower-large-leaf-scented-tea",
      "name": {
        "en": "Large-leaf Scented Tea",
        "zh": "大叶种花茶",
        "ru": "Large-leaf Scented Tea",
        "de": "Large-leaf Scented Tea"
      },
      "nameKey": "Large-leaf Scented Tea",
      "catKey": "products.catFlower",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🌸",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/1-Large-leaf-Scented-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E8%8A%B1%E8%8C%B61_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/1-Large-leaf-Scented-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E8%8A%B1%E8%8C%B61_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/1-Large-leaf-Scented-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E8%8A%B1%E8%8C%B61_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/1-Large-leaf-Scented-Tea/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%A4%A7%E5%8F%B6%E8%8A%B1%E8%8C%B61_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Large-leaf Scented Tea — Xiangfeng Tea Group bulk export tea.",
        "zh": "大叶种花茶——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Large-leaf Scented Tea — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [],
      "standard": "conventional"
    },
    {
      "id": "flower-jasmine-tea-no-1",
      "name": {
        "en": "Jasmine Tea No.1",
        "zh": "茉莉花茶1号",
        "ru": "Jasmine Tea No.1",
        "de": "Jasmine Tea No.1"
      },
      "nameKey": "Jasmine Tea No.1",
      "catKey": "products.catFlower",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🌸",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/2-Jasmine-Tea-No.1/35-Jasmine-Tea-No.1-1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/2-Jasmine-Tea-No.1/35-Jasmine-Tea-No.1-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/2-Jasmine-Tea-No.1/35-Jasmine-Tea-No.1-1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/2-Jasmine-Tea-No.1/35-Jasmine-Tea-No.1-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Jasmine Tea No.1 — Xiangfeng Tea Group bulk export tea.",
        "zh": "茉莉花茶1号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Jasmine Tea No.1 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "flower-jasmine-tea-no-3"
      ],
      "standard": "conventional"
    },
    {
      "id": "flower-jasmine-tea-no-3",
      "name": {
        "en": "Jasmine Tea No.3",
        "zh": "茉莉花茶3号",
        "ru": "Jasmine Tea No.3",
        "de": "Jasmine Tea No.3"
      },
      "nameKey": "Jasmine Tea No.3",
      "catKey": "products.catFlower",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🌸",
      "images": {
        "conventional": {
          "dry": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_1.jpg",
          "liquor": "https://ik.imagekit.io/Lemon/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/3-Jasmine-Tea-No.3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%B0%8F%E5%8F%B6%E8%8A%B1%E8%8C%B61_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/3-Jasmine-Tea-No.3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%B0%8F%E5%8F%B6%E8%8A%B1%E8%8C%B61_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/3-Jasmine-Tea-No.3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%B0%8F%E5%8F%B6%E8%8A%B1%E8%8C%B61_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/3-Jasmine-Tea-No.3/%E5%A4%96%E8%B4%B8-%E7%BA%A2%E8%8C%B6-%E5%B0%8F%E5%8F%B6%E8%8A%B1%E8%8C%B61_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Jasmine Tea No.3 — Xiangfeng Tea Group bulk export tea.",
        "zh": "茉莉花茶3号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Jasmine Tea No.3 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "flower-jasmine-tea-no-1"
      ],
      "standard": "conventional"
    },
    {
      "id": "flower-jasmine-dragon-pearl",
      "name": {
        "en": "Jasmine Dragon Pearl",
        "zh": "茉莉龙珠",
        "ru": "Jasmine Dragon Pearl",
        "de": "Jasmine Dragon Pearl"
      },
      "nameKey": "Jasmine Dragon Pearl",
      "catKey": "products.catFlower",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🌸",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/4-Jasmine-Dragon-Pearl/36-Jasmine-Dragon-Pearl-1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/4-Jasmine-Dragon-Pearl/36-Jasmine-Dragon-Pearl-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/4-Jasmine-Dragon-Pearl/36-Jasmine-Dragon-Pearl-1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/4-Jasmine-Dragon-Pearl/36-Jasmine-Dragon-Pearl-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/4-Jasmine-Dragon-Pearl/36-Jasmine-Dragon-Pearl-1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/4-Jasmine-Dragon-Pearl/36-Jasmine-Dragon-Pearl-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "eu",
        "organic"
      ],
      "description": {
        "en": "Jasmine Dragon Pearl — Xiangfeng Tea Group bulk export tea.",
        "zh": "茉莉龙珠——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Jasmine Dragon Pearl — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "EU, Organic"
      },
      "relatedIds": [],
      "standard": "conventional"
    },
    {
      "id": "flower-blooming-tea-daqian-rihong-lychee",
      "name": {
        "en": "Blooming Tea Daqian Rihong Lychee",
        "zh": "工艺花茶 大千日红荔枝",
        "ru": "Blooming Tea Daqian Rihong Lychee",
        "de": "Blooming Tea Daqian Rihong Lychee"
      },
      "nameKey": "Blooming Tea Daqian Rihong Lychee",
      "catKey": "products.catFlower",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🌸",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/5-Daqian-Rihong-Lychee/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/5-Daqian-Rihong-Lychee/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/5-Daqian-Rihong-Lychee/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/5-Daqian-Rihong-Lychee/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/5-Daqian-Rihong-Lychee/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/5-Daqian-Rihong-Lychee/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Blooming Tea Daqian Rihong Lychee — Xiangfeng Tea Group bulk export tea.",
        "zh": "工艺花茶 大千日红荔枝——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Blooming Tea Daqian Rihong Lychee — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "flower-blooming-tea-golden-altar",
        "flower-blooming-tea-dragon-pearl",
        "flower-blooming-tea-lily-fairy-jasmine-lily"
      ],
      "standard": "conventional"
    },
    {
      "id": "flower-blooming-tea-golden-altar",
      "name": {
        "en": "Blooming Tea Golden Altar",
        "zh": "工艺花茶 金盏银坛",
        "ru": "Blooming Tea Golden Altar",
        "de": "Blooming Tea Golden Altar"
      },
      "nameKey": "Blooming Tea Golden Altar",
      "catKey": "products.catFlower",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🌸",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/6-Golden-Altar/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/6-Golden-Altar/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/6-Golden-Altar/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/6-Golden-Altar/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/6-Golden-Altar/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/6-Golden-Altar/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Blooming Tea Golden Altar — Xiangfeng Tea Group bulk export tea.",
        "zh": "工艺花茶 金盏银坛——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Blooming Tea Golden Altar — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "flower-blooming-tea-daqian-rihong-lychee",
        "flower-blooming-tea-dragon-pearl",
        "flower-blooming-tea-lily-fairy-jasmine-lily"
      ],
      "standard": "conventional"
    },
    {
      "id": "flower-blooming-tea-dragon-pearl",
      "name": {
        "en": "Blooming Tea Dragon Pearl",
        "zh": "工艺花茶 双龙戏珠",
        "ru": "Blooming Tea Dragon Pearl",
        "de": "Blooming Tea Dragon Pearl"
      },
      "nameKey": "Blooming Tea Dragon Pearl",
      "catKey": "products.catFlower",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🌸",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/7-Dragon-Pearl/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/7-Dragon-Pearl/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-3_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/7-Dragon-Pearl/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/7-Dragon-Pearl/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-3_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/7-Dragon-Pearl/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/7-Dragon-Pearl/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-3_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Blooming Tea Dragon Pearl — Xiangfeng Tea Group bulk export tea.",
        "zh": "工艺花茶 双龙戏珠——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Blooming Tea Dragon Pearl — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "flower-blooming-tea-daqian-rihong-lychee",
        "flower-blooming-tea-golden-altar",
        "flower-blooming-tea-lily-fairy-jasmine-lily"
      ],
      "standard": "conventional"
    },
    {
      "id": "flower-blooming-tea-lily-fairy-jasmine-lily",
      "name": {
        "en": "Blooming Tea Lily Fairy (Jasmine & Lily)",
        "zh": "工艺花茶 百合仙子(茉莉百合)",
        "ru": "Blooming Tea Lily Fairy (Jasmine & Lily)",
        "de": "Blooming Tea Lily Fairy (Jasmine & Lily)"
      },
      "nameKey": "Blooming Tea Lily Fairy (Jasmine & Lily)",
      "catKey": "products.catFlower",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🌸",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/8-Lily-Fairy-(Jasmine-/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/8-Lily-Fairy-(Jasmine-/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-4_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/8-Lily-Fairy-(Jasmine-/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/8-Lily-Fairy-(Jasmine-/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-4_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Flower%20tea/8-Lily-Fairy-(Jasmine-/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-4_1.jpg",
          "liquor": "https://video.aultras-tea.com/Flower%20tea/8-Lily-Fairy-(Jasmine-/%E5%A4%96%E8%B4%B8-%E5%B7%A5%E8%89%BA%E8%8C%B6-4_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Blooming Tea Lily Fairy (Jasmine & Lily) — Xiangfeng Tea Group bulk export tea.",
        "zh": "工艺花茶 百合仙子(茉莉百合)——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Blooming Tea Lily Fairy (Jasmine & Lily) — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [
        "flower-blooming-tea-daqian-rihong-lychee",
        "flower-blooming-tea-golden-altar",
        "flower-blooming-tea-dragon-pearl"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minbei-oolong-floral-da-hong-pao-a",
      "name": {
        "en": "Minbei Oolong Floral Da Hong Pao A",
        "zh": "闵北乌龙 花香大红袍A级",
        "ru": "Minbei Oolong Floral Da Hong Pao A",
        "de": "Minbei Oolong Floral Da Hong Pao A"
      },
      "nameKey": "Minbei Oolong Floral Da Hong Pao A",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/1-Floral-Da-Hong-Pao-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/1-Floral-Da-Hong-Pao-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-3_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/1-Floral-Da-Hong-Pao-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/1-Floral-Da-Hong-Pao-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-3_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/1-Floral-Da-Hong-Pao-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-3_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/1-Floral-Da-Hong-Pao-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-3_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Minbei Oolong Floral Da Hong Pao A — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵北乌龙 花香大红袍A级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minbei Oolong Floral Da Hong Pao A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-minbei-oolong-floral-da-hong-pao",
        "oolong-minbei-oolong-da-hong-pao-no-2",
        "oolong-minbei-oolong-da-hong-pao-no-1"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minbei-oolong-floral-da-hong-pao",
      "name": {
        "en": "Minbei Oolong Floral Da Hong Pao",
        "zh": "闵北乌龙 花香大红袍",
        "ru": "Minbei Oolong Floral Da Hong Pao",
        "de": "Minbei Oolong Floral Da Hong Pao"
      },
      "nameKey": "Minbei Oolong Floral Da Hong Pao",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/2-Floral-Da-Hong-Pao/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/2-Floral-Da-Hong-Pao/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/2-Floral-Da-Hong-Pao/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/2-Floral-Da-Hong-Pao/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/2-Floral-Da-Hong-Pao/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/2-Floral-Da-Hong-Pao/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Minbei Oolong Floral Da Hong Pao — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵北乌龙 花香大红袍——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minbei Oolong Floral Da Hong Pao — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-minbei-oolong-floral-da-hong-pao-a",
        "oolong-minbei-oolong-da-hong-pao-no-2",
        "oolong-minbei-oolong-da-hong-pao-no-1"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minbei-oolong-da-hong-pao-no-2",
      "name": {
        "en": "Minbei Oolong Da Hong Pao No.2",
        "zh": "闵北乌龙 大红袍2号",
        "ru": "Minbei Oolong Da Hong Pao No.2",
        "de": "Minbei Oolong Da Hong Pao No.2"
      },
      "nameKey": "Minbei Oolong Da Hong Pao No.2",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/3-Da-Hong-Pao-No.2/37-Da-Hong-Pao-No.2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/3-Da-Hong-Pao-No.2/37-Da-Hong-Pao-No.2-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/3-Da-Hong-Pao-No.2/37-Da-Hong-Pao-No.2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/3-Da-Hong-Pao-No.2/37-Da-Hong-Pao-No.2-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/3-Da-Hong-Pao-No.2/37-Da-Hong-Pao-No.2-1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/3-Da-Hong-Pao-No.2/37-Da-Hong-Pao-No.2-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Minbei Oolong Da Hong Pao No.2 — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵北乌龙 大红袍2号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minbei Oolong Da Hong Pao No.2 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-minbei-oolong-floral-da-hong-pao-a",
        "oolong-minbei-oolong-floral-da-hong-pao",
        "oolong-minbei-oolong-da-hong-pao-no-1"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minbei-oolong-da-hong-pao-no-1",
      "name": {
        "en": "Minbei Oolong Da Hong Pao No.1",
        "zh": "闵北乌龙 大红袍1号",
        "ru": "Minbei Oolong Da Hong Pao No.1",
        "de": "Minbei Oolong Da Hong Pao No.1"
      },
      "nameKey": "Minbei Oolong Da Hong Pao No.1",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/4-Da-Hong-Pao-No.1/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/4-Da-Hong-Pao-No.1/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/4-Da-Hong-Pao-No.1/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/4-Da-Hong-Pao-No.1/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/4-Da-Hong-Pao-No.1/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/1-%E9%97%B5%E5%8C%97%E4%B9%8C%E9%BE%99Minbei-Oolong/4-Da-Hong-Pao-No.1/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8C%97%E4%B9%8C%E9%BE%99-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Minbei Oolong Da Hong Pao No.1 — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵北乌龙 大红袍1号——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minbei Oolong Da Hong Pao No.1 — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-minbei-oolong-floral-da-hong-pao-a",
        "oolong-minbei-oolong-floral-da-hong-pao",
        "oolong-minbei-oolong-da-hong-pao-no-2"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minnan-oolong-dongding-oolong",
      "name": {
        "en": "Minnan Oolong Dongding Oolong",
        "zh": "闵南乌龙 冻顶乌龙",
        "ru": "Minnan Oolong Dongding Oolong",
        "de": "Minnan Oolong Dongding Oolong"
      },
      "nameKey": "Minnan Oolong Dongding Oolong",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/1-Dongding-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/1-Dongding-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/1-Dongding-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/1-Dongding-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/1-Dongding-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/1-Dongding-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu"
      ],
      "description": {
        "en": "Minnan Oolong Dongding Oolong — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵南乌龙 冻顶乌龙——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minnan Oolong Dongding Oolong — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU"
      },
      "relatedIds": [
        "oolong-minnan-oolong-floral-tieguanyin-a",
        "oolong-minnan-oolong-floral-tieguanyin",
        "oolong-minnan-oolong-green-oolong-aa",
        "oolong-minnan-oolong-green-oolong",
        "oolong-minnan-oolong-rich-aroma-oolong"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minnan-oolong-floral-tieguanyin-a",
      "name": {
        "en": "Minnan Oolong Floral Tieguanyin A",
        "zh": "闵南乌龙 花香铁观音A级",
        "ru": "Minnan Oolong Floral Tieguanyin A",
        "de": "Minnan Oolong Floral Tieguanyin A"
      },
      "nameKey": "Minnan Oolong Floral Tieguanyin A",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/2-Floral-Tieguanyin-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-8_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/2-Floral-Tieguanyin-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-8_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/2-Floral-Tieguanyin-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-8_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/2-Floral-Tieguanyin-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-8_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/2-Floral-Tieguanyin-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-8_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/2-Floral-Tieguanyin-A/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-8_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Minnan Oolong Floral Tieguanyin A — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵南乌龙 花香铁观音A级——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minnan Oolong Floral Tieguanyin A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-minnan-oolong-dongding-oolong",
        "oolong-minnan-oolong-floral-tieguanyin",
        "oolong-minnan-oolong-green-oolong-aa",
        "oolong-minnan-oolong-green-oolong",
        "oolong-minnan-oolong-rich-aroma-oolong"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minnan-oolong-floral-tieguanyin",
      "name": {
        "en": "Minnan Oolong Floral Tieguanyin",
        "zh": "闵南乌龙 花香铁观音",
        "ru": "Minnan Oolong Floral Tieguanyin",
        "de": "Minnan Oolong Floral Tieguanyin"
      },
      "nameKey": "Minnan Oolong Floral Tieguanyin",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/3-Floral-Tieguanyin/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/3-Floral-Tieguanyin/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-2_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/3-Floral-Tieguanyin/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/3-Floral-Tieguanyin/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-2_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/3-Floral-Tieguanyin/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-2_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/3-Floral-Tieguanyin/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-2_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Minnan Oolong Floral Tieguanyin — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵南乌龙 花香铁观音——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minnan Oolong Floral Tieguanyin — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-minnan-oolong-dongding-oolong",
        "oolong-minnan-oolong-floral-tieguanyin-a",
        "oolong-minnan-oolong-green-oolong-aa",
        "oolong-minnan-oolong-green-oolong",
        "oolong-minnan-oolong-rich-aroma-oolong"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minnan-oolong-green-oolong-aa",
      "name": {
        "en": "Minnan Oolong Green Oolong AA",
        "zh": "闵南乌龙 绿乌龙AA",
        "ru": "Minnan Oolong Green Oolong AA",
        "de": "Minnan Oolong Green Oolong AA"
      },
      "nameKey": "Minnan Oolong Green Oolong AA",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/4-Green-Oolong-AA/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-5_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/4-Green-Oolong-AA/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-5_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/4-Green-Oolong-AA/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-5_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/4-Green-Oolong-AA/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-5_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/4-Green-Oolong-AA/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-5_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/4-Green-Oolong-AA/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-5_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Minnan Oolong Green Oolong AA — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵南乌龙 绿乌龙AA——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minnan Oolong Green Oolong AA — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-minnan-oolong-dongding-oolong",
        "oolong-minnan-oolong-floral-tieguanyin-a",
        "oolong-minnan-oolong-floral-tieguanyin",
        "oolong-minnan-oolong-green-oolong",
        "oolong-minnan-oolong-rich-aroma-oolong"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minnan-oolong-green-oolong",
      "name": {
        "en": "Minnan Oolong Green Oolong",
        "zh": "闵南乌龙 绿乌龙",
        "ru": "Minnan Oolong Green Oolong",
        "de": "Minnan Oolong Green Oolong"
      },
      "nameKey": "Minnan Oolong Green Oolong",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/5-Green-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-6_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/5-Green-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-6_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/5-Green-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-6_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/5-Green-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-6_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/5-Green-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-6_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/5-Green-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-6_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Minnan Oolong Green Oolong — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵南乌龙 绿乌龙——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minnan Oolong Green Oolong — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-minnan-oolong-dongding-oolong",
        "oolong-minnan-oolong-floral-tieguanyin-a",
        "oolong-minnan-oolong-floral-tieguanyin",
        "oolong-minnan-oolong-green-oolong-aa",
        "oolong-minnan-oolong-rich-aroma-oolong"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-minnan-oolong-rich-aroma-oolong",
      "name": {
        "en": "Minnan Oolong Rich Aroma Oolong",
        "zh": "闵南乌龙 浓香乌龙",
        "ru": "Minnan Oolong Rich Aroma Oolong",
        "de": "Minnan Oolong Rich Aroma Oolong"
      },
      "nameKey": "Minnan Oolong Rich Aroma Oolong",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/6-Rich-Aroma-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-14_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/6-Rich-Aroma-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-14_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/6-Rich-Aroma-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-14_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/6-Rich-Aroma-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-14_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/6-Rich-Aroma-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-14_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/2-%E9%97%B5%E5%8D%97%E4%B9%8C%E9%BE%99Minnan-Oolong/6-Rich-Aroma-Oolong/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E9%97%BD%E5%8D%97%E4%B9%8C%E9%BE%99-14_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Minnan Oolong Rich Aroma Oolong — Xiangfeng Tea Group bulk export tea.",
        "zh": "闵南乌龙 浓香乌龙——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Minnan Oolong Rich Aroma Oolong — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-minnan-oolong-dongding-oolong",
        "oolong-minnan-oolong-floral-tieguanyin-a",
        "oolong-minnan-oolong-floral-tieguanyin",
        "oolong-minnan-oolong-green-oolong-aa",
        "oolong-minnan-oolong-green-oolong"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-milk-oolong",
      "name": {
        "en": "Milk Oolong",
        "zh": "奶香乌龙",
        "ru": "Milk Oolong",
        "de": "Milk Oolong"
      },
      "nameKey": "Milk Oolong",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/3-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/3-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/3-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/3-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/3-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/3-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E5%A5%B6%E9%A6%99%E4%B9%8C%E9%BE%99-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Milk Oolong — Xiangfeng Tea Group bulk export tea.",
        "zh": "奶香乌龙——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Milk Oolong — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [],
      "standard": "conventional"
    },
    {
      "id": "oolong-ginseng-oolong",
      "name": {
        "en": "Ginseng Oolong",
        "zh": "人参乌龙",
        "ru": "Ginseng Oolong",
        "de": "Ginseng Oolong"
      },
      "nameKey": "Ginseng Oolong",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/4-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/4-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/4-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/4-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/4-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/4-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%BA%BA%E5%8F%82%E4%B9%8C%E9%BE%99-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional"
      ],
      "description": {
        "en": "Ginseng Oolong — Xiangfeng Tea Group bulk export tea.",
        "zh": "人参乌龙——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Ginseng Oolong — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional"
      },
      "relatedIds": [],
      "standard": "conventional"
    },
    {
      "id": "oolong-oolong-tea-fannings-a",
      "name": {
        "en": "Oolong tea Fannings A",
        "zh": "乌龙碎A",
        "ru": "Oolong tea Fannings A",
        "de": "Oolong tea Fannings A"
      },
      "nameKey": "Oolong tea Fannings A",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/1-Oolong-tea-Fannings-A/38-Oolong-tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/1-Oolong-tea-Fannings-A/38-Oolong-tea-Fannings-A-2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/1-Oolong-tea-Fannings-A/38-Oolong-tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/1-Oolong-tea-Fannings-A/38-Oolong-tea-Fannings-A-2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/1-Oolong-tea-Fannings-A/38-Oolong-tea-Fannings-A-1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/1-Oolong-tea-Fannings-A/38-Oolong-tea-Fannings-A-2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Oolong tea Fannings A — Xiangfeng Tea Group bulk export tea.",
        "zh": "乌龙碎A——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Oolong tea Fannings A — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-oolong-tea-fannings"
      ],
      "standard": "conventional"
    },
    {
      "id": "oolong-oolong-tea-fannings",
      "name": {
        "en": "Oolong tea Fannings",
        "zh": "乌龙碎",
        "ru": "Oolong tea Fannings",
        "de": "Oolong tea Fannings"
      },
      "nameKey": "Oolong tea Fannings",
      "catKey": "products.catOolong",
      "region": "products.regionHunan",
      "orderTypes": [
        "products.orderBulk",
        "products.orderSample"
      ],
      "emoji": "🍵",
      "images": {
        "conventional": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/2-Oolong-tea-Fannings/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%B9%8C%E9%BE%99%E7%A2%8E-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/2-Oolong-tea-Fannings/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%B9%8C%E9%BE%99%E7%A2%8E-1_2.jpg"
        },
        "eu": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/2-Oolong-tea-Fannings/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%B9%8C%E9%BE%99%E7%A2%8E-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/2-Oolong-tea-Fannings/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%B9%8C%E9%BE%99%E7%A2%8E-1_2.jpg"
        },
        "organic": {
          "dry": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/2-Oolong-tea-Fannings/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%B9%8C%E9%BE%99%E7%A2%8E-1_1.jpg",
          "liquor": "https://video.aultras-tea.com/Oolong%20tea/5-%E4%B9%8C%E9%BE%99%E7%A2%8E/2-Oolong-tea-Fannings/%E5%A4%96%E8%B4%B8-%E4%B9%8C%E9%BE%99%E8%8C%B6-%E4%B9%8C%E9%BE%99%E7%A2%8E-1_2.jpg"
        }
      },
      "has_liquor": true,
      "certTags": [
        "conventional",
        "eu",
        "organic"
      ],
      "description": {
        "en": "Oolong tea Fannings — Xiangfeng Tea Group bulk export tea.",
        "zh": "乌龙碎——湘丰茶业集团大宗出口茶。"
      },
      "descriptionKey": "Oolong tea Fannings — Xiangfeng Tea Group bulk export tea.",
      "specs": {
        "origin": "China",
        "packaging": "25kg/bag",
        "minOrder": "100kg",
        "certifications": "Conventional, EU, Organic"
      },
      "relatedIds": [
        "oolong-oolong-tea-fannings-a"
      ],
      "standard": "conventional"
    },
    {
        "id": "oem-custom-blending",
        "name": {
            "en": "OEM Custom Tea Blending",
            "zh": "OEM 定制拼配"
        },
        "nameKey": "OEM Custom Tea Blending",
        "catKey": "products.catOEM",
        "region": "products.regionHunan",
        "orderTypes": [
            "products.orderOEM",
            "products.orderBulk"
        ],
        "emoji": "🏭",
        "images": {
            "conventional": {
                "dry": "images/oem-blank-1.svg",
                "liquor": "images/oem-blank-1.svg"
            },
            "eu": {
                "dry": "images/oem-blank-1.svg",
                "liquor": "images/oem-blank-1.svg"
            },
            "organic": {
                "dry": "images/oem-blank-1.svg",
                "liquor": "images/oem-blank-1.svg"
            }
        },
        "has_liquor": false,
        "certTags": [
            "conventional",
            "eu",
            "organic"
        ],
        "description": {
            "en": "OEM Custom Tea Blending - Xiangfeng Tea Group provides tailor-made blending, formulation and private-label packing for global buyers, leveraging our full industry chain and export experience across 60+ countries.",
            "zh": "OEM 定制拼配——依托全产业链与出口 60 多个国家的经验，湘丰茶业集团为全球客户提供量身定制的拼配、配方与贴牌包装服务。"
        },
        "descriptionKey": "OEM Custom Tea Blending - tailored private-label tea solutions.",
        "specs": {
            "origin": "China",
            "packaging": "Custom / Per client",
            "minOrder": "Negotiable",
            "certifications": "Per client requirement"
        },
        "relatedIds": [
            "oem-private-label"
        ],
        "standard": "conventional"
    },
    {
        "id": "oem-private-label",
        "name": {
            "en": "ODM Private Label Service",
            "zh": "ODM 贴牌代工"
        },
        "nameKey": "ODM Private Label Service",
        "catKey": "products.catOEM",
        "region": "products.regionHunan",
        "orderTypes": [
            "products.orderOEM",
            "products.orderBulk"
        ],
        "emoji": "🏷",
        "images": {
            "conventional": {
                "dry": "images/oem-blank-2.svg",
                "liquor": "images/oem-blank-2.svg"
            },
            "eu": {
                "dry": "images/oem-blank-2.svg",
                "liquor": "images/oem-blank-2.svg"
            },
            "organic": {
                "dry": "images/oem-blank-2.svg",
                "liquor": "images/oem-blank-2.svg"
            }
        },
        "has_liquor": false,
        "certTags": [
            "conventional",
            "eu",
            "organic"
        ],
        "description": {
            "en": "ODM Private Label Service - from recipe development to finished branded product, we deliver turnkey tea solutions under your brand with full certification support.",
            "zh": "ODM 贴牌代工——从配方研发到成品品牌交付，我们提供一站式茶叶解决方案，并配套完整的认证支持。"
        },
        "descriptionKey": "ODM Private Label Service - turnkey tea solutions under your brand.",
        "specs": {
            "origin": "China",
            "packaging": "Custom / Per client",
            "minOrder": "Negotiable",
            "certifications": "Per client requirement"
        },
        "relatedIds": [
            "oem-custom-blending"
        ],
        "standard": "conventional"
    }
  ];

  /* ---------- Helper: resolve category/region key to display string ---------- */
  function resolve(key) {
    if (typeof XF_i18n !== 'undefined' && XF_i18n.t) {
      const val = XF_i18n.t(key);
      if (val !== key) return val;
    }
    return key;
  }

  /* ---------- Helper: product display name by current language ---------- */
  function getName(p, lang) {
    if (!p) return '';
    const l = lang || (typeof XF_i18n !== 'undefined' && XF_i18n.getLang ? XF_i18n.getLang() : 'en');
    if (p.name && typeof p.name === 'object') {
      if (p.name[l]) return p.name[l];
      if (l !== 'en' && p.name.en) return p.name.en;
    }
    if (p.nameKey) return p.nameKey;
    return '';
  }

  /* ---------- Helper: structured image block for a standard ---------- */
  function getProductImages(p, std) {
    if (!p || !p.images) return { dry: '', liquor: '' };
    const s = (std && p.images[std]) ? std : 'conventional';
    return p.images[s] || { dry: '', liquor: '' };
  }

  /* ---------- Helper: primary (dry) image ---------- */
  function getPrimaryImage(p, std) {
    const blk = getProductImages(p, std);
    return blk.dry || blk.liquor || '';
  }

  /* ---------- Helper: liquor (tea soup) image ---------- */
  function getLiquorImage(p, std) {
    return getProductImages(p, std).liquor || '';
  }

  /* ---------- Helper: whether product has a tea soup image ---------- */
  function hasLiquor(p) {
    return p && p.has_liquor !== false;
  }

  /* ---------- Helper: description by current language ---------- */
  function getDesc(p, lang) {
    if (!p) return '';
    const l = lang || (typeof XF_i18n !== 'undefined' && XF_i18n.getLang ? XF_i18n.getLang() : 'en');
    const d = p.description || p.desc;
    if (d && typeof d === 'object') {
      if (d[l]) return d[l];
      if (l !== 'en' && d.en) return d.en;
    }
    if (p.descriptionKey) return p.descriptionKey;
    return '';
  }

  /* ---------- Helper: generic four-language text field (req lang -> EN -> '') ---------- */
  function getLangField(obj, field, lang) {
    if (!obj) return '';
    const l = lang || (typeof XF_i18n !== 'undefined' && XF_i18n.getLang ? XF_i18n.getLang() : 'en');
    const v = obj[field];
    if (v && typeof v === 'object') {
      if (v[l]) return v[l];
      if (l !== 'en' && v.en) return v.en;
    }
    if (typeof v === 'string') return v;
    return '';
  }
  function getStandard(p, lang) { return getLangField(p, 'standard', lang); }
  function getSpec(p, lang) { return getLangField(p, 'spec', lang); }
  function getOrigin(p, lang) { return getLangField(p, 'origin', lang); }

  /* ---------- filterProducts ---------- */
  function filterProducts(category, region, orderType, searchText) {
    return products.filter(p => {
      if (category && category !== 'all' && p.catKey !== category) return false;
      if (region && region !== 'all' && p.region !== region) return false;
      if (orderType && orderType !== 'all' && !p.orderTypes.includes(orderType)) return false;
      if (searchText) {
        const q = searchText.toLowerCase();
        const haystack = [
          getName(p),
          (p.name && (p.name.en || '')) + ' ' + (p.name && (p.name.zh || '')),
          resolve(p.catKey),
          resolve(p.region),
          ...p.orderTypes.map(resolve)
        ].join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  /* ---------- getProductById ---------- */
  function getProductById(id) {
    return products.find(p => p.id === id) || null;
  }

  /* ---------- getRelatedProducts ---------- */
  function getRelatedProducts(id) {
    const product = getProductById(id);
    if (!product) return [];
    return (product.relatedIds || [])
      .map(rid => getProductById(rid))
      .filter(Boolean);
  }

  /* ---------- Featured Products (Carousel) ---------- */
  const featuredIds = [
    "green-gunpowder-3505-a05",
    "black-black-tea-fannings-2a",
    "dark-pu-er-tea-fannings",
    "white-silver-needle-aa",
    "flower-large-leaf-scented-tea",
    "oolong-minbei-oolong-floral-da-hong-pao-a"
  ];

  function getFeaturedProducts() {
    return featuredIds
      .map(id => {
        let p = getProductById(id);
        if (!p) p = products.find(x => x.id.indexOf(id + '-') === 0) || null; // resolve split family to its first SKU
        return p;
      })
      .filter(Boolean);
  }

  /* ---------- Carousel Controller ---------- */
  let carouselInterval = null;
  let currentSlide = 0;

  function startCarousel(containerSelector, options = {}) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const items = getFeaturedProducts();
    const autoRotate = options.autoRotate !== false;
    const intervalMs = options.intervalMs || 4000;

    function render() {
      const html = items.map((item, i) => {
        const active = i === currentSlide ? 'active' : '';
        const img = getPrimaryImage(item) || 'images/placeholder-dry.svg';
        return `
          <div class="carousel-slide ${active}" data-index="${i}">
            <div class="carousel-card">
              <div class="carousel-img-wrap">
                <img src="${img}" alt="${getName(item)}" loading="lazy">
                <span class="carousel-emoji">${item.emoji}</span>
              </div>
              <div class="carousel-info">
                <h3>${getName(item)}</h3>
                <p class="carousel-cat">${resolve(item.catKey)}</p>
                <p class="carousel-region">${resolve(item.region)}</p>
                <a href="product-detail.html?id=${item.id}" class="carousel-btn" data-i18n="products.viewDetails">${resolve('products.viewDetails')}</a>
              </div>
            </div>
          </div>`;
      }).join('');

      const dots = items.map((_, i) =>
        `<span class="carousel-dot ${i === currentSlide ? 'active' : ''}" data-index="${i}"></span>`
      ).join('');

      container.innerHTML = `
        <div class="carousel-track">
          ${html}
        </div>
        <button class="carousel-prev" aria-label="Previous">‹</button>
        <button class="carousel-next" aria-label="Next">›</button>
        <div class="carousel-dots">${dots}</div>`;

      container.querySelector('.carousel-prev').addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetAutoRotate();
      });
      container.querySelector('.carousel-next').addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetAutoRotate();
      });
      container.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          goToSlide(parseInt(dot.dataset.index, 10));
          resetAutoRotate();
        });
      });
    }

    function goToSlide(index) {
      const track = container.querySelector('.carousel-track');
      if (!track) return;
      currentSlide = ((index % items.length) + items.length) % items.length;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      container.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentSlide);
      });
      container.querySelectorAll('.carousel-slide').forEach((s, i) => {
        s.classList.toggle('active', i === currentSlide);
      });
    }

    function resetAutoRotate() {
      if (!autoRotate) return;
      clearInterval(carouselInterval);
      carouselInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, intervalMs);
    }

    render();
    if (autoRotate) {
      carouselInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, intervalMs);
    }
  }

  function stopCarousel() {
    clearInterval(carouselInterval);
  }

  /* ---------- Public API ---------- */
  return {
    products,
    getName,
    getDesc,
    getStandard,
    getSpec,
    getOrigin,
    getProductImages,
    getPrimaryImage,
    getLiquorImage,
    hasLiquor,
    filterProducts,
    getProductById,
    getRelatedProducts,
    getFeaturedProducts,
    startCarousel,
    stopCarousel,
    resolve
  };
})();
