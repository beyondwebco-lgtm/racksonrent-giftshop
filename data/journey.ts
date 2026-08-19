export interface JourneyStep {
  stepNumber: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  visualTag: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "List Gift Shop Space",
    shortDescription: "Gift shop owners list available shelves, counters, racks, showcases, tabletop spaces, or display corners.",
    detailedDescription: "Gift shop owners post available eye-level racks, glass display counters, tabletop areas, or entrance corners looking for partner gift brands and artists.",
    iconName: "Store",
    visualTag: "Gift Shop Sublet"
  },
  {
    stepNumber: 2,
    title: "Browse Gift Shop Spaces",
    shortDescription: "Brands and entrepreneurs search available spaces by city, location, size, and display type.",
    detailedDescription: "Sellers search by gift shop location, space size, customer footfall, and product category to find the ideal retail display spot.",
    iconName: "Eye",
    visualTag: "Targeted Discovery"
  },
  {
    stepNumber: 3,
    title: "Reserve a Space",
    shortDescription: "Choose a suitable gift-shop display location and agree on a daily, weekly, or monthly rental arrangement.",
    detailedDescription: "Gift brands and creators agree on flexible daily, weekly, or monthly rental terms directly with the gift shop owner with zero heavy standalone store overhead.",
    iconName: "UserCheck",
    visualTag: "Flexible Rental"
  },
  {
    stepNumber: 4,
    title: "Display & Sell",
    shortDescription: "Products are displayed inside the gift shop where customers can discover, interact with, and purchase them.",
    detailedDescription: "Handmade gifts, stationery, candles, home decor, or accessories are attractively arranged with branding inside the store.",
    iconName: "Maximize2",
    visualTag: "Retail Display Setup"
  },
  {
    stepNumber: 5,
    title: "Shared Success",
    shortDescription: "Gift shop owners earn from unused display space while brands gain valuable offline visibility and customer access.",
    detailedDescription: "A thriving win-win relationship: gift shop owners earn rental income from underutilized space while brands scale offline presence across town.",
    iconName: "TrendingUp",
    visualTag: "Shared Success"
  }
];


