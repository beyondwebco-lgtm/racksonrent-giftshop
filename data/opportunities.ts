export interface OpportunityExample {
  id: string;
  title: string;
  location: string;
  spaceType: string;
  suitableFor: string;
  approxSize: string;
  arrangement: string;
  badgeText: string;
  description: string;
  bgGradient: string;
}

export const SAMPLE_OPPORTUNITIES: OpportunityExample[] = [
  {
    id: "premium-gift-shelf",
    title: "Eye-Level Shelf Display inside Gift Boutique",
    location: "Hyderabad (Banjara Hills / Jubilee Hills)",
    spaceType: "Prime wooden shelf inside high-footfall gift store",
    suitableFor: "Handmade crafts, scented candles, pottery & artisan gifts",
    approxSize: "4 ft x 1.5 ft shelf space",
    arrangement: "Monthly Space Sublet",
    badgeText: "Featured Boutique",
    description: "Prime eye-level shelf space inside a popular lifestyle gift store serving enthusiastic gift shoppers.",
    bgGradient: "from-[#3D0710] to-[#6B0F1A]"
  },
  {
    id: "gift-counter-display",
    title: "Gift Shop Checkout Counter Space",
    location: "Vijayawada (MG Road area)",
    spaceType: "High-visibility point-of-sale display beside billing counter",
    suitableFor: "Handcrafted jewellery, keychains, greeting cards & accessories",
    approxSize: "3 ft countertop area",
    arrangement: "Weekly / Monthly Space Rental",
    badgeText: "Impulse Buy Spot",
    description: "Top impulse-buy counter display right beside the billing cash desk capturing every customer checkout.",
    bgGradient: "from-yellow-950/90 to-amber-950/90"
  },
  {
    id: "glass-showcase-cabinet",
    title: "Glass Showcase Cabinet Display",
    location: "Bengaluru (Indiranagar / HSR Layout)",
    spaceType: "Secure illuminated glass cabinet inside gift shop",
    suitableFor: "Personalized keepsakes, silver jewellery & luxury gift hampers",
    approxSize: "4 ft x 2 ft glass cabinet",
    arrangement: "Monthly Space Rental",
    badgeText: "Premium Showcase",
    description: "Elegant and secure glass cabinet with LED spot lighting in the main store walkway.",
    bgGradient: "from-[#3D0710] to-[#6B0F1A]"
  },
  {
    id: "stationery-gift-rack",
    title: "Aesthetic Stationery & Journaling Display",
    location: "Visakhapatnam (Siripuram / Beach Road)",
    spaceType: "Dedicated wooden wall display stand for stationery products",
    suitableFor: "Journals, artisan calligraphy pens, washi tapes & bookmarks",
    approxSize: "3.5 ft x 2 ft display stand",
    arrangement: "Monthly Space Sublet",
    badgeText: "High Demand",
    description: "Compact high-density stationery display unit attracting young creators, students, and professionals.",
    bgGradient: "from-amber-900/90 to-stone-900/90"
  },
  {
    id: "home-decor-lifestyle-corner",
    title: "Home Decor & Lifestyle Display Corner",
    location: "Chennai (Adyar / T. Nagar)",
    spaceType: "Curated display corner with ambient warm lighting",
    suitableFor: "Aroma diffusers, soy candles, ceramic vases & art frames",
    approxSize: "5 ft x 3 ft display corner",
    arrangement: "Monthly Space Rental",
    badgeText: "High Margin",
    description: "Curated gift and home lifestyle corner inside a bustling boutique store with steady customer footfall.",
    bgGradient: "from-rose-950/90 to-pink-950/90"
  },
  {
    id: "entrance-gift-showcase",
    title: "Store Entrance & Window Gift Showcase",
    location: "Guntur (Lakshmipuram area)",
    spaceType: "Front street-facing glass window showcase",
    suitableFor: "Seasonal specials, festival hampers & creative kids gifts",
    approxSize: "4 ft x 2 ft showcase unit",
    arrangement: "Flexible Monthly Rental",
    badgeText: "Max Visibility",
    description: "Entrance retail showcase in a premier shopping hub designed for instant discovery and footfall attraction.",
    bgGradient: "from-purple-950/90 to-rose-950/90"
  }
];
