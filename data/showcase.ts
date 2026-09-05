export interface ShowcaseCategory {
  id: string;
  eyebrow: string;
  title: string;
  shortName: string;
  description: string;
  suitableFor: string[];
  benefits: string[];
  primaryCta: string;
  secondaryCta: string;
  image: string;
  iconName: string;
  rolePrimary: "gym-owner" | "wellness";
  spaceTypePrimary: string;
  roleSecondary: "gym-owner" | "wellness";
  categorySecondary: string;
}

export const SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: "handmade-gifts",
    eyebrow: "Category 01",
    title: "Handmade Gifts & Crafts",
    shortName: "Handmade Gifts & Crafts",
    description:
      "Display handmade gifts, artisan crafts, candles, handcrafted decor, pottery, artistic creations, and unique specialty products on attractive gift-shop shelves and display counters.",
    suitableFor: [
      "Handmade crafts",
      "Artisan gifts",
      "Candles",
      "Handcrafted decor",
      "Pottery",
      "Artistic creations",
      "Specialty gift items",
    ],
    benefits: [
      "Prime gift-shop shelf placement",
      "High visibility among active shoppers",
      "Product discovery and impulse purchases",
      "Additional rental income for shop owners",
      "Affordable offline exposure for emerging gift brands",
    ],
    primaryCta: "List Gift Shop Space",
    secondaryCta: "Find Space for Handmade Gifts",
    image: "/images/artisanal-products.png",
    iconName: "Gift",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Eye-Level Gift Shelf",
    roleSecondary: "wellness",
    categorySecondary: "Handmade Gifts & Crafts",
  },
  {
    id: "personalized-gifts",
    eyebrow: "Category 02",
    title: "Personalized Gifts & Custom Products",
    shortName: "Personalized Gifts & Custom Products",
    description:
      "Showcase customized mugs, engraved keepsakes, bespoke hampers, photo frames, personalized accessories, and creative gift products inside popular gift stores.",
    suitableFor: [
      "Custom photo frames",
      "Engraved keepsakes",
      "Customized mugs",
      "Personalized hampers",
      "Nameplates & plaques",
      "Custom stationery",
      "Monogrammed items",
    ],
    benefits: [
      "High-margin custom gifting demand",
      "Great seasonal & festive sales volume",
      "Impulse orders from shoppers seeking unique gifts",
      "Low space footprint on gift shop shelves",
      "Direct customer contact for customized orders",
    ],
    primaryCta: "List Gift Shop Space",
    secondaryCta: "Find Space for Personalized Gifts",
    image: "/images/homemade-items.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Gift Shop Counter Display",
    roleSecondary: "wellness",
    categorySecondary: "Personalized Gifts & Custom Products",
  },
  {
    id: "stationery-journaling",
    eyebrow: "Category 03",
    title: "Stationery & Journaling",
    shortName: "Stationery & Journaling",
    description:
      "Display aesthetic notebooks, planner journals, artisan calligraphy pens, washi tapes, greeting cards, bookmarks, and desk organizers on dedicated gift shop counters and racks.",
    suitableFor: [
      "Aesthetic notebooks",
      "Planner journals",
      "Greeting cards",
      "Calligraphy & artisan pens",
      "Washi tapes & stickers",
      "Bookmarks",
      "Desk organizers",
    ],
    benefits: [
      "Consistent year-round demand",
      "High repeat purchases from students & professionals",
      "Aesthetic visual appeal on checkout counters",
      "Compact display footprint with high item density",
      "Quick impulse add-on gift purchase",
    ],
    primaryCta: "List Gift Shop Space",
    secondaryCta: "Find Space for Stationery",
    image: "/images/packaged-products.png",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Eye-Level Gift Shelf",
    roleSecondary: "wellness",
    categorySecondary: "Stationery & Journaling",
  },
  {
    id: "home-decor-lifestyle",
    eyebrow: "Category 04",
    title: "Home Decor & Lifestyle Gifts",
    shortName: "Home Decor & Lifestyle Gifts",
    description:
      "Feature scented soy candles, ceramic vases, artistic table lamps, aroma diffusers, and chic lifestyle decor pieces in eye-level gift shop showcases.",
    suitableFor: [
      "Scented soy candles",
      "Ceramic vases",
      "Artistic table lamps",
      "Aroma diffusers & oils",
      "Wall hangings & frames",
      "Resin art decor",
      "Indoor plant planters",
    ],
    benefits: [
      "High average order transaction value",
      "Appeals to housewarming & celebration shoppers",
      "Enhances gift shop ambiance and aesthetic",
      "Strong gifting demand during festive seasons",
      "Flexible shelf and display cabinet formats",
    ],
    primaryCta: "List Gift Shop Space",
    secondaryCta: "Find Space for Home Decor",
    image: "/images/lifestyle-accessories.png",
    iconName: "Layers",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Tabletop Display",
    roleSecondary: "wellness",
    categorySecondary: "Home Decor & Lifestyle Gifts",
  },
  {
    id: "jewellery-accessories",
    eyebrow: "Category 05",
    title: "Jewellery, Accessories & Fashion Gifts",
    shortName: "Jewellery, Accessories & Fashion Gifts",
    description:
      "Showcase handcrafted jewellery, stylish scrunchies, silk scarves, keychains, sunglasses, watches, and fashion accessories right by the store counter and glass cabinets.",
    suitableFor: [
      "Handcrafted earrings & jewellery",
      "Trendy scrunchies & hairbands",
      "Silk scarves & bandanas",
      "Aesthetic keychains & charms",
      "Fashion sunglasses & pouches",
      "Boutique gift jewellery boxes",
    ],
    benefits: [
      "Prime impulse checkout counter purchases",
      "High profit margin per square inch",
      "Compact glass showcase display",
      "Strong appeal across gift shoppers of all ages",
      "Instant product pickup and high sales turnover",
    ],
    primaryCta: "List Gift Shop Space",
    secondaryCta: "Find Space for Jewellery & Accessories",
    image: "/images/seasonal-specials.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Glass Showcase Cabinet",
    roleSecondary: "wellness",
    categorySecondary: "Jewellery, Accessories & Fashion Gifts",
  },
  {
    id: "kids-gifts-toys",
    eyebrow: "Category 06",
    title: "Kids Gifts, Toys & Creative Products",
    shortName: "Kids Gifts, Toys & Creative Products",
    description:
      "Display educational toys, board games, creative DIY craft kits, soft plush toys, puzzles, and novelty gifts inside active family-friendly gift shops.",
    suitableFor: [
      "Educational wooden toys",
      "Board games & puzzles",
      "DIY craft & painting kits",
      "Plush soft toys",
      "Novelty stationery gifts",
      "Storybooks & activity kits",
      "Kids party return gifts",
    ],
    benefits: [
      "High emotional gift appeal for birthdays & family visits",
      "High basket value and repeat parent footfall",
      "Interactive display encourages shopper engagement",
      "Steady demand all 12 months of the year",
      "Helps gift stores attract family shoppers",
    ],
    primaryCta: "List Gift Shop Space",
    secondaryCta: "Find Space for Kids Gifts",
    image: "/images/desserts-chocolates.png",
    iconName: "HeartHandshake",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Gift Shop Counter Display",
    roleSecondary: "wellness",
    categorySecondary: "Kids Gifts, Toys & Creative Products",
  },
];

export const SHOWCASE_TRUST_ITEMS = [
  { label: "Verified Gift Shop Spaces", desc: "Curated & shopper-checked", iconName: "ShieldCheck" },
  { label: "High Customer Footfall", desc: "Active gift-shop customers", iconName: "Users" },
  { label: "Flexible Display Formats", desc: "Shelves, counters & display corners", iconName: "Layers" },
  { label: "Dedicated Seller Support", desc: "Pan-India matching team", iconName: "Headphones" },
  { label: "Pan India Expansion", desc: "Growing gift-shop partner network", iconName: "MapPin" },
];
