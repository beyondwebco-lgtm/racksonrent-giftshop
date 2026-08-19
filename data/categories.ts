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
    description: "Handmade crafts, artisan gifts, candles, handcrafted decor, pottery, and artistic creations.",
    iconName: "Gift",
    image: "/categories/packaged-snacks.png",
    alt: "Handmade gifts and artisan crafts displayed on gift shop shelves",
    badge: "High Demand",
  },
  {
    id: "personalized-gifts",
    name: "Personalized Gifts & Custom Products",
    description: "Custom printed keepsakes, engraved gifts, bespoke photo products, and personalized accessories.",
    iconName: "Sparkles",
    image: "/categories/desserts-chocolates.png",
    alt: "Personalized gifts and custom products inside gift store",
    badge: "Popular",
  },
  {
    id: "stationery-journaling",
    name: "Stationery & Journaling",
    description: "Artisan notebooks, planner sets, calligraphy tools, greeting cards, and creative paper products.",
    iconName: "ShoppingBag",
    image: "/categories/healthy-foods.png",
    alt: "Stationery, planners, and journaling accessories display",
    badge: "Top Seller",
  },
  {
    id: "home-decor-gifts",
    name: "Home Decor & Lifestyle Gifts",
    description: "Scented candles, wall art, ceramic vases, desk decor, and aesthetic home accents.",
    iconName: "HeartHandshake",
    image: "/categories/beverages.png",
    alt: "Home decor items and lifestyle gifts in store display",
    badge: "Trending",
  },
  {
    id: "jewellery-fashion-accessories",
    name: "Jewellery, Accessories & Fashion Gifts",
    description: "Handmade jewelry, tote bags, scarves, fashion accessories, and artisanal trinkets.",
    iconName: "Gift",
    image: "/categories/artisanal-products.png",
    alt: "Handmade jewelry and fashion accessories on display",
    badge: "Popular",
  },
  {
    id: "kids-creative-gifts",
    name: "Kids Gifts, Toys & Creative Products",
    description: "Wooden toys, craft kits, storybooks, puzzle sets, and creative gifts for children.",
    iconName: "Sparkles",
    image: "/categories/lifestyle-accessories.png",
    alt: "Kids gifts and creative toys displayed on gift shop racks",
    badge: "Creative",
  },
];


