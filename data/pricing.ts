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
    description: "List your unused gift shop shelves, counter space, or display corners and start earning extra monthly income.",
    features: [
      "Zero listing & setup fees",
      "Direct brand enquiry matching",
      "Set your own space rent terms",
      "Full approval over displayed products"
    ],
    ctaLabel: "List Your Gift Shop Space",
    roleType: "gym-owner",
    highlighted: true
  },
  {
    id: "vendor-space-rental",
    title: "Display Space Placement",
    targetRole: "For Gift Brands & Entrepreneurs",
    priceDisplay: "Flexible Plans",
    period: "Daily, Weekly or Monthly",
    description: "Display and sell your handmade gifts, stationery, or accessories inside top local gift shops.",
    features: [
      "Access high daily gift-shop customer footfall",
      "Flexible space sizes & display formats",
      "Direct contact with gift shop owners",
      "No heavy standalone retail overhead"
    ],
    ctaLabel: "Find Gift Shop Space",
    roleType: "wellness",
    highlighted: false
  }
];


