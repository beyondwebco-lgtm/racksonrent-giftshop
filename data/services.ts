export interface ServiceSupported {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "packaged" | "beverages" | "healthy" | "display";
}

export const SERVICES_SUPPORTED: ServiceSupported[] = [
  {
    id: "handmade-crafts",
    title: "Handmade Gifts & Crafts",
    description: "Handmade crafts, artisan gifts, candles, pottery, and artistic creations.",
    iconName: "Gift",
    category: "packaged"
  },
  {
    id: "personalized-gifts",
    title: "Personalized Gifts & Custom Products",
    description: "Engraved gifts, photo keepsakes, custom mugs, and bespoke accessories.",
    iconName: "Sparkles",
    category: "packaged"
  },
  {
    id: "stationery-journaling",
    title: "Stationery & Journaling",
    description: "Artisan notebooks, planner sets, greeting cards, and calligraphy tools.",
    iconName: "ShoppingBag",
    category: "beverages"
  },
  {
    id: "home-decor",
    title: "Home Decor & Lifestyle Gifts",
    description: "Scented candles, wall art, ceramic vases, and aesthetic home accents.",
    iconName: "HeartHandshake",
    category: "healthy"
  },
  {
    id: "jewelry-accessories",
    title: "Jewellery & Fashion Accessories",
    description: "Handmade jewelry, tote bags, scarves, and fashion accessories.",
    iconName: "Gift",
    category: "packaged"
  },
  {
    id: "kids-creative",
    title: "Kids Gifts & Creative Toys",
    description: "Wooden toys, craft activity kits, storybooks, and puzzle sets.",
    iconName: "Sparkles",
    category: "display"
  },
  {
    id: "gift-counters",
    title: "Gift Shop Counter Displays",
    description: "Checkout counter display spots placed next to the billing register.",
    iconName: "Store",
    category: "display"
  },
  {
    id: "eye-level-shelves",
    title: "Eye-Level Gift Shelves",
    description: "Dedicated wooden and glass shelves positioned at eye level for high visibility.",
    iconName: "Layers",
    category: "display"
  },
  {
    id: "glass-showcases",
    title: "Glass Showcase Cabinets",
    description: "Protected glass display cabinets for jewelry, keepsakes, and premium items.",
    iconName: "ShieldCheck",
    category: "display"
  }
];


