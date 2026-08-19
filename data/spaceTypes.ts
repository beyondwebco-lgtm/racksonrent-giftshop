export interface SpaceTypeItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const COMPACT_SPACE_TYPES: SpaceTypeItem[] = [
  {
    id: "gift-counter",
    name: "Gift Shop Counter Display",
    description: "Checkout counter display spot capturing every gift shop customer during purchase.",
    iconName: "Store",
  },
  {
    id: "eye-level-shelf",
    name: "Eye-Level Gift Shelf",
    description: "Dedicated eye-level wooden or glass shelf for handmade gifts, decor, and accessories.",
    iconName: "Layers",
  },
  {
    id: "checkout-counter",
    name: "Checkout Counter Space",
    description: "High-visibility point-of-sale display right beside the billing counter.",
    iconName: "Store",
  },
  {
    id: "showcase-cabinet",
    name: "Glass Showcase Cabinet",
    description: "Protected showcase glass cabinet for jewelry, keepsakes, and premium artisan items.",
    iconName: "ShieldCheck",
  },
  {
    id: "tabletop-display",
    name: "Tabletop Display",
    description: "Promotional tabletop stand placed in high-footfall store areas for maximum engagement.",
    iconName: "Gift",
  },
  {
    id: "entrance-stand",
    name: "Entrance & Window Display",
    description: "Front store window or entrance display rack attracting browsing shoppers.",
    iconName: "Box",
  },
];

export const RACK_SIZES = [
  { id: "small", name: "Small Display", dimensions: "Up to 2x1 ft" },
  { id: "medium", name: "Medium Display", dimensions: "Up to 3x2 ft" },
  { id: "large", name: "Large Display", dimensions: "Up to 5x2 ft" },
  { id: "countertop", name: "Countertop Space", dimensions: "Billing Counter Area" },
  { id: "custom", name: "Custom Space", dimensions: "Full Gift Store Corner" },
];


