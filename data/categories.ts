export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  alt: string;
  badge?: string;
}

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    id: "handmade-gifts",
    name: "Handmade Gifts & Crafts",
    description: "Artisan crafts, scented candles, pottery, handcrafted decor, and unique specialty gift items.",
    iconName: "Gift",
    image: "/images/artisanal-products.png",
    alt: "Handmade gifts and artisan crafts display inside gift shop",
    badge: "Top Demand",
  },
  {
    id: "personalized-gifts",
    name: "Personalized Gifts & Custom Products",
    description: "Customized mugs, engraved keepsakes, bespoke hampers, photo gifts, and personalized products.",
    iconName: "Sparkles",
    image: "/images/homemade-items.png",
    alt: "Personalized gifts and custom products displayed in gift store",
    badge: "Popular",
  },
  {
    id: "stationery-journaling",
    name: "Stationery & Journaling",
    description: "Aesthetic notebooks, planner journals, artisan pens, washi tapes, and premium greeting cards.",
    iconName: "ShoppingBag",
    image: "/images/packaged-products.png",
    alt: "Aesthetic stationery and journaling items displayed on gift shelf",
    badge: "Trending",
  },
  {
    id: "home-decor-lifestyle",
    name: "Home Decor & Lifestyle Gifts",
    description: "Scented candles, ceramic vases, artistic table lamps, aroma diffusers, and chic lifestyle decor.",
    iconName: "Layers",
    image: "/images/lifestyle-accessories.png",
    alt: "Home decor and lifestyle gifts displayed in boutique showcase",
    badge: "High Margin",
  },
  {
    id: "jewellery-accessories",
    name: "Jewellery, Accessories & Fashion Gifts",
    description: "Handcrafted jewellery, stylish scrunchies, silk scarves, keychains, and fashion accessories.",
    iconName: "Sparkles",
    image: "/images/seasonal-specials.png",
    alt: "Jewellery and fashion accessories showcase counter in gift shop",
    badge: "Featured",
  },
  {
    id: "kids-gifts-toys",
    name: "Kids Gifts, Toys & Creative Products",
    description: "Educational toys, board games, DIY craft kits, soft plush toys, and creative kids gifts.",
    iconName: "HeartHandshake",
    image: "/images/desserts-chocolates.png",
    alt: "Kids gifts, toys and creative craft products displayed in gift shop",
    badge: "Family Favorite",
  },
  {
    id: "artisanal-specialties",
    name: "Artisanal Products & Specialty Crafts",
    description: "Handcrafted specialty items, local artisan goods, organic wellness gifts, and bespoke souvenirs.",
    iconName: "Store",
    image: "/images/artisanal-products.png",
    alt: "Artisanal goods and specialty gift products inside gift shop",
    badge: "Unique Finds",
  },
  {
    id: "seasonal-festive",
    name: "Seasonal & Festive Specials",
    description: "Festival hampers, celebration gift packs, holiday decor, and limited-edition gift items.",
    iconName: "Gift",
    image: "/images/seasonal-specials.png",
    alt: "Seasonal and festive gift products displayed on retail counter",
    badge: "Festive Picks",
  },
];
