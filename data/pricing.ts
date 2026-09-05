export interface PricingTier {
  id: string;
  title: string;
  targetRole: string;
  priceDisplay: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  roleType: "gym-owner" | "wellness";
  highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "gift-shop-listing",
    title: "Gift Shop Space Listing",
    targetRole: "For Gift Shop Owners",
    priceDisplay: "Free",
    period: "Forever",
    description: "List your unused shelves, counters, or display corners and start earning extra monthly income.",
    features: [
      "Zero listing & setup fees",
      "Direct gift brand & creator matching",
      "Set your own rental terms",
      "Full approval over displayed gift products"
    ],
    ctaLabel: "List Your Gift Shop Space",
    roleType: "gym-owner",
    highlighted: true
  },
  {
    id: "gift-space-rental",
    title: "Gift Space Placement",
    targetRole: "For Gift Brands & Entrepreneurs",
    priceDisplay: "Flexible Plans",
    period: "Daily, Weekly or Monthly",
    description: "Display and sell your handmade gifts, crafts, stationery, or decor inside active gift stores.",
    features: [
      "Access high daily gift shop footfall",
      "Flexible shelf & counter display formats",
      "Direct contact with gift shop owners",
      "No heavy standalone store lease overhead"
    ],
    ctaLabel: "Find Gift Shop Space",
    roleType: "wellness",
    highlighted: false
  }
];
