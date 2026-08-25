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
    id: "premium-gift-counter",
    title: "Eye-Level Gift Shop Counter Display",
    location: "Hyderabad (Banjara Hills / Jubilee Hills)",
    spaceType: "Eye-Level Glass Display Shelf inside high-footfall gift boutique",
    suitableFor: "Handmade crafts, personalized gifts, custom keepsakes & candles",
    approxSize: "4 ft x 2 ft display counter",
    arrangement: "Monthly Gift Shop Space Rental",
    badgeText: "Featured Gift Store",
    description: "Prime eye-level display counter inside a popular gift boutique serving 500+ daily shoppers.",
    bgGradient: "from-[#650000] to-[#650000]"
  },
  {
    id: "checkout-gift-rack",
    title: "Checkout Countertop Gift Display",
    location: "Vijayawada (MG Road area)",
    spaceType: "Countertop display stand right beside gift shop checkout register",
    suitableFor: "Artisanal stationery, greeting cards, keychain gifts & trinkets",
    approxSize: "3 ft countertop display rack",
    arrangement: "Weekly / Monthly Space Rental",
    badgeText: "High Footfall",
    description: "Top impulse-buy location right at the billing counter capturing every shopper during checkout.",
    bgGradient: "from-yellow-950/90 to-amber-950/90"
  },
  {
    id: "glass-showcase-cabinet",
    title: "Glass Showcase Display Cabinet",
    location: "Bengaluru (Indiranagar / HSR Layout)",
    spaceType: "Protected glass showcase cabinet near store front",
    suitableFor: "Handmade jewelry, luxury candles, ceramic decor & keepsakes",
    approxSize: "4 ft x 1.5 ft showcase shelf",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Protected Showcase",
    description: "Illuminated glass showcase cabinet positioned right near the main entrance.",
    bgGradient: "from-[#650000] to-[#650000]"
  },
  {
    id: "lifestyle-decor-wall",
    title: "Home Decor & Lifestyle Wall Display",
    location: "Visakhapatnam (Beach Road area)",
    spaceType: "Promotional wall shelf display with spotlighting",
    suitableFor: "Wall art prints, scented diffusers, ceramic planters & aesthetic decor",
    approxSize: "4 ft x 1.5 ft wall rack",
    arrangement: "Monthly Gift Store Sublet",
    badgeText: "Prime Spot",
    description: "Eye-catching illuminated wall display inside a bustling seaside gift store.",
    bgGradient: "from-amber-900/90 to-stone-900/90"
  },
  {
    id: "kids-creative-corner",
    title: "Kids & Creative Gifts Corner",
    location: "Chennai (Velachery area)",
    spaceType: "Tabletop & retail display corner near store entrance",
    suitableFor: "Wooden toys, craft kits, storybooks & creative gift sets",
    approxSize: "3.5 ft retail showcase",
    arrangement: "Monthly Space Rental",
    badgeText: "Family Retail",
    description: "Premium retail display corner ideal for children's gifts and creative activity products.",
    bgGradient: "from-rose-950/90 to-pink-950/90"
  },
  {
    id: "entrance-display-stand",
    title: "Window & Entrance Feature Stand",
    location: "Guntur (Lakshmipuram area)",
    spaceType: "Floor-standing feature display unit near store window",
    suitableFor: "Handmade gifts, seasonal gift hampers, candles & custom products",
    approxSize: "5 ft x 2 ft promotional rack",
    arrangement: "Flexible Monthly Rental",
    badgeText: "High Visibility",
    description: "High-impact entrance spot inside a busy gift lounge attracting store walk-ins.",
    bgGradient: "from-purple-950/90 to-rose-950/90"
  }
];


