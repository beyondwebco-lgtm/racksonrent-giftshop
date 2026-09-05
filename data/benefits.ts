export const WHY_CHOOSE_US = [
  {
    id: "verified-spaces",
    title: "Verified Gift Shop Spaces",
    description: "Gift shop spaces are reviewed based on location, customer footfall, display visibility, store environment, and suitability.",
    iconName: "ShieldCheck"
  },
  {
    id: "secure-process",
    title: "Transparent Rentals",
    description: "Clear rental terms with direct communication between gift shop owners and participating brands.",
    iconName: "Lock"
  },
  {
    id: "dedicated-support",
    title: "Dedicated Assistance",
    description: "Our team supports gift shop owners and brands in finding suitable display spaces and creating smoother rental arrangements.",
    iconName: "Headphones"
  },
  {
    id: "grow-your-business",
    title: "Shared Success",
    description: "Gift shop owners earn additional income while growing brands gain access to real customers in high-visibility retail locations.",
    iconName: "TrendingUp"
  }
];

export const ROLE_CARDS = [
  {
    id: "gym-owner",
    role: "gym-owner" as const,
    heading: "I Own a Gift Shop",
    text: "You have unused shelves, counters, glass showcases, tabletop displays, or corner areas inside your gift store.",
    benefits: [
      "Monetize unused shelves, showcases, or display corners.",
      "Offer customers exciting, unique handmade gifts and lifestyle products.",
      "Attract new footfall from partner gift brands and creators.",
      "Earn steady, hassle-free extra monthly rental income."
    ],
    ctaLabel: "List Your Gift Shop Space",
  },
  {
    id: "wellness",
    role: "wellness" as const,
    heading: "I Am a Gift Brand / Entrepreneur",
    text: "You create or sell gifts, handmade crafts, stationery, lifestyle products, or accessories and need high-visibility retail display space.",
    benefits: [
      "Place your gift products inside trusted, busy gift stores.",
      "Reach active, ready-to-buy shoppers instantly.",
      "Avoid expensive standalone store lease and setup costs.",
      "Build brand discovery in prime gift retail locations."
    ],
    ctaLabel: "Find Gift Shop Space",
  },
];

export const BENEFITS_COMPARISON = {
  gymOwners: {
    title: "Gift Shop Owners & Retail Partners",
    points: [
      "Earn rental income from underutilized display shelves and counters",
      "Offer shoppers a wider variety of unique handmade and lifestyle gifts",
      "Attract fresh shopper footfall from brand collaborations",
      "Build valuable partnerships with emerging creators and brands",
    ],
  },
  wellnessBusinesses: {
    title: "Gift Brands & Creative Entrepreneurs",
    points: [
      "Access active daily gift shop customer footfall",
      "Start physical retail presence with minimal investment",
      "Test new gift collections and product lines in real stores",
      "Scale across multiple gift store locations effortlessly",
    ],
  },
};
