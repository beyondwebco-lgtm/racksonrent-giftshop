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
    image: "/categories/packaged-snacks.png",
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
      "Showcase custom printed keepsakes, engraved gifts, bespoke photo products, custom mugs, and personalized accessories right near the checkout counter and main store display.",
    suitableFor: [
      "Custom engraved gifts",
      "Personalized photo frames",
      "Bespoke mugs & cups",
      "Customized gift boxes",
      "Monogrammed accessories",
      "Name-engraved items",
      "Custom keepsakes",
    ],
    benefits: [
      "Top checkout counter impulse purchases",
      "Direct reach to active gift shoppers",
      "High margin personalized gift items",
      "Strong local brand recognition",
      "Flexible weekly & monthly gift store rentals",
    ],
    primaryCta: "List Gift Counter Space",
    secondaryCta: "Find Space for Personalized Gifts",
    image: "/categories/desserts-chocolates.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Checkout Counter Space",
    roleSecondary: "wellness",
    categorySecondary: "Personalized Gifts & Custom Products",
  },
  {
    id: "stationery-journaling",
    eyebrow: "Category 03",
    title: "Stationery & Journaling",
    shortName: "Stationery & Journaling",
    description:
      "Showcase artisan notebooks, planner sets, calligraphy tools, greeting cards, bookmarks, and creative paper products to gift-shop customers looking for thoughtful stationery.",
    suitableFor: [
      "Artisan notebooks",
      "Planner sets & journals",
      "Greeting cards",
      "Calligraphy tools",
      "Artistic bookmarks",
      "Fancy pens & stationery",
      "Custom gift tags",
    ],
    benefits: [
      "Reach creative & stationery-loving shoppers",
      "High impulse purchase rate near checkout",
      "Premium product positioning inside top gift shops",
      "High repeat-purchase potential",
      "Great for emerging indie stationery brands",
    ],
    primaryCta: "List Stationery Display Space",
    secondaryCta: "Find Space for Stationery",
    image: "/categories/healthy-foods.png",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Eye-Level Gift Shelf",
    roleSecondary: "wellness",
    categorySecondary: "Stationery & Journaling",
  },
  {
    id: "home-decor-gifts",
    eyebrow: "Category 04",
    title: "Home Decor & Lifestyle Gifts",
    shortName: "Home Decor & Lifestyle Gifts",
    description:
      "Rent showcase shelf space inside gift stores for scented soy candles, mini wall art, ceramic vases, desk decor, photo displays, and aesthetic home accents.",
    suitableFor: [
      "Scented soy candles",
      "Mini wall art & prints",
      "Ceramic vases & planters",
      "Aesthetic desk decor",
      "Diffusers & room sprays",
      "Decorative showpieces",
    ],
    benefits: [
      "High margin home decor gift sales",
      "Elevates overall gift shop visual appeal",
      "Broad appeal to home styling & gift shoppers",
      "Zero product expiration risk",
      "Flexible display cabinet options",
    ],
    primaryCta: "List Decor Space",
    secondaryCta: "Find Space for Home Decor",
    image: "/categories/beverages.png",
    iconName: "HeartHandshake",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Glass Showcase Cabinet",
    roleSecondary: "wellness",
    categorySecondary: "Home Decor & Lifestyle Gifts",
  },
  {
    id: "jewellery-fashion",
    eyebrow: "Category 05",
    title: "Jewellery, Accessories & Fashion Gifts",
    shortName: "Jewellery, Accessories & Fashion Gifts",
    description:
      "Feature handmade jewelry, aesthetic tote bags, printed scarves, fashion accessories, and artisanal trinkets on gift-shop wall displays and glass cabinets.",
    suitableFor: [
      "Handmade jewelry",
      "Artisanal earrings & rings",
      "Aesthetic tote bags",
      "Printed scarves",
      "Hair accessories",
      "Fashion trinkets",
    ],
    benefits: [
      "Consistently high average order value",
      "Great fit for boutique gift shoppers",
      "Long shelf-life accessory items",
      "High profit margin per unit",
      "Complements gift store aesthetic",
    ],
    primaryCta: "List Jewelry Space",
    secondaryCta: "Find Space for Accessories",
    image: "/categories/artisanal-products.png",
    iconName: "Gift",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Glass Showcase Cabinet",
    roleSecondary: "wellness",
    categorySecondary: "Jewellery, Accessories & Fashion Gifts",
  },
  {
    id: "kids-gifts",
    eyebrow: "Category 06",
    title: "Kids Gifts, Toys & Creative Products",
    shortName: "Kids Gifts, Toys & Creative Products",
    description:
      "Display eco-friendly wooden toys, craft activity kits, illustrated storybooks, puzzle sets, and creative gifts for children inside popular gift shops.",
    suitableFor: [
      "Eco-friendly wooden toys",
      "DIY craft activity kits",
      "Illustrated storybooks",
      "Brain teaser puzzles",
      "Kids creative gift sets",
    ],
    benefits: [
      "Attract family & parent shoppers",
      "High perceived brand value & gift appeal",
      "Strong impulse buying during birthday gift runs",
      "Zero product expiration risk",
      "Enhances store variety & family footfall",
    ],
    primaryCta: "List Kids Gift Space",
    secondaryCta: "Find Space for Kids Products",
    image: "/categories/lifestyle-accessories.png",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Tabletop Display",
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


