export interface ServiceSupported {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "handmade" | "stationery" | "decor" | "display";
}

export const SERVICES_SUPPORTED: ServiceSupported[] = [
  {
    id: "handmade-crafts",
    title: "Handmade Gifts & Artisan Crafts",
    description: "Artisan crafts, scented candles, pottery, and unique handcrafted decor.",
    iconName: "Gift",
    category: "handmade"
  },
  {
    id: "personalized-gifts",
    title: "Personalized & Custom Products",
    description: "Custom mugs, engraved keepsakes, bespoke hampers, and personalized items.",
    iconName: "Sparkles",
    category: "handmade"
  },
  {
    id: "stationery-journaling",
    title: "Stationery & Journaling",
    description: "Aesthetic notebooks, journals, calligraphy pens, washi tapes, and cards.",
    iconName: "ShoppingBag",
    category: "stationery"
  },
  {
    id: "home-decor",
    title: "Home Decor & Lifestyle Gifts",
    description: "Aroma diffusers, soy candles, ceramic vases, and artistic wall decor.",
    iconName: "Layers",
    category: "decor"
  },
  {
    id: "jewellery-accessories",
    title: "Jewellery & Fashion Gifts",
    description: "Handcrafted earrings, scrunchies, silk scarves, keychains, and accessories.",
    iconName: "Sparkles",
    category: "handmade"
  },
  {
    id: "kids-gifts",
    title: "Kids Gifts & Creative Toys",
    description: "Wooden educational toys, DIY craft kits, board games, and plush toys.",
    iconName: "HeartHandshake",
    category: "handmade"
  },
  {
    id: "counter-displays",
    title: "Gift Shop Counter Displays",
    description: "Point-of-sale displays and checkout counter space for impulse gift buys.",
    iconName: "Store",
    category: "display"
  },
  {
    id: "showcase-cabinets",
    title: "Glass Showcase Cabinets",
    description: "Secure, illuminated glass cabinet display for premium gifts and jewellery.",
    iconName: "Layers",
    category: "display"
  },
  {
    id: "window-showcases",
    title: "Entrance & Window Showcases",
    description: "Street-facing front window display areas attracting walking shoppers.",
    iconName: "Maximize",
    category: "display"
  }
];
