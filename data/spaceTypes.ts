export interface SpaceTypeItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const COMPACT_SPACE_TYPES: SpaceTypeItem[] = [
  {
    id: "counter-display",
    name: "Gift Shop Counter Display",
    description: "Dedicated counter display space inside gift shops for gifts, impulse buys, and specialty items.",
    iconName: "Store",
  },
  {
    id: "eye-level-shelf",
    name: "Eye-Level Gift Shelf",
    description: "Prime eye-level wooden or glass shelf space for handmade gifts, decor, stationery, and packaged products.",
    iconName: "Layers",
  },
  {
    id: "checkout-counter",
    name: "Checkout Counter Space",
    description: "High-visibility point-of-sale display right beside the billing counter for impulse gift products.",
    iconName: "Store",
  },
  {
    id: "glass-showcase",
    name: "Glass Showcase Cabinet",
    description: "Secure, well-lit glass cabinet display for premium gifts, jewellery, crafts, and luxury keepsakes.",
    iconName: "Sparkles",
  },
  {
    id: "tabletop-display",
    name: "Tabletop Display",
    description: "Center table or promotional tabletop stand for curated gift collections, hampers, and creative products.",
    iconName: "Gift",
  },
  {
    id: "entrance-window",
    name: "Entrance & Window Display",
    description: "Front store window showcase area attracting footfall directly from pedestrians and shoppers.",
    iconName: "Eye",
  },
  {
    id: "custom-space",
    name: "Custom Space",
    description: "Full gift store corner or bespoke display arrangement for growing gift brands.",
    iconName: "Target",
  },
];

export const RACK_SIZES = [
  { id: "small", name: "Small Display (Up to 2x1 ft)", dimensions: "Up to 2x1 ft" },
  { id: "medium", name: "Medium Display (Up to 3x2 ft)", dimensions: "Up to 3x2 ft" },
  { id: "large", name: "Large Display (Up to 5x2 ft)", dimensions: "Up to 5x2 ft" },
  { id: "countertop", name: "Countertop Space (Billing Counter Area)", dimensions: "Billing Counter Area" },
  { id: "custom", name: "Custom Space (Full Gift Store Corner)", dimensions: "Full Gift Store Corner" },
];
