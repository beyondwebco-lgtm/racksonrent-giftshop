export interface HowItWorksFeature {
  icon: "zap" | "users" | "building" | "shield" | string;
  title: string;
  description: string;
}

export interface HowItWorksJourney {
  label: string;
  tabLabel: string;
  badge: string;
  heading: string;
  image: string;
  alt: string;
  downloadName: string;
  caption: string;
}

export interface HowItWorksHeroConfig {
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  stepsLabel: string;
  partnershipLabel: string;
}

export interface HowItWorksCtaConfig {
  badge: string;
  title: string;
  description: string;
  ownerButton: string;
  brandButton: string;
}

export interface HowItWorksData {
  categoryName: string;
  hero: HowItWorksHeroConfig;
  spaceOwner: HowItWorksJourney;
  brand: HowItWorksJourney;
  features: HowItWorksFeature[];
  cta: HowItWorksCtaConfig;
}

/**
 * Default Configurable Master Template Placeholder Data
 */
export const defaultHowItWorksData: HowItWorksData = {
  categoryName: "[CATEGORY NAME]",

  hero: {
    badge: "[CATEGORY] RETAIL PARTNERSHIP",
    title: "How It Works",
    description: "[INSERT CATEGORY-SPECIFIC DESCRIPTION]",
    image: "/images/placeholders/how-it-works-hero.svg",
    alt: "[CATEGORY] retail partnership",
    stepsLabel: "6 Simple Steps",
    partnershipLabel: "Win-Win Partnership",
  },

  spaceOwner: {
    label: "[SPACE OWNER TYPE]",
    tabLabel: "For [SPACE OWNER TYPE]",
    badge: "[SPACE OWNER TYPE] GUIDE",
    heading: "[OWNER JOURNEY HEADLINE]",
    image: "/images/placeholders/owner-journey.svg",
    alt: "[SPACE OWNER TYPE] journey infographic",
    downloadName: "RacksOnRent_Owner_Guide.png",
    caption: "[OWNER JOURNEY SUMMARY]",
  },

  brand: {
    label: "[BRAND / STARTUP TYPE]",
    tabLabel: "For [BRAND / STARTUP TYPE]",
    badge: "BRANDS & STARTUPS GUIDE",
    heading: "[BRAND JOURNEY HEADLINE]",
    image: "/images/placeholders/brand-journey.svg",
    alt: "[BRAND / STARTUP TYPE] journey infographic",
    downloadName: "RacksOnRent_Brand_Guide.png",
    caption: "[BRAND JOURNEY SUMMARY]",
  },

  features: [
    {
      icon: "zap",
      title: "[FAST SETUP BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
    {
      icon: "users",
      title: "[FOOTFALL BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
    {
      icon: "building",
      title: "[SPACE OWNER BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
    {
      icon: "shield",
      title: "[LOW RISK BENEFIT]",
      description: "[INSERT FEATURE DESCRIPTION]",
    },
  ],

  cta: {
    badge: "[START TODAY]",
    title: "Ready to Turn Space Into Opportunity?",
    description: "[INSERT CATEGORY-SPECIFIC CTA DESCRIPTION]",
    ownerButton: "List Your Space",
    brandButton: "Showcase Your Brand",
  },
};

/**
 * Gift Shop Vertical Specific Data Configuration
 */
export const giftShopHowItWorksData: HowItWorksData = {
  categoryName: "Gift Shop",

  hero: {
    badge: "GIFT SHOP RETAIL PARTNERSHIP",
    title: "How It Works",
    description: "Connecting gift shop owners with artisanal gift brands, handcrafted creators, and product entrepreneurs to share high-visibility retail display space.",
    image: "/images/placeholders/how-it-works-hero.svg",
    alt: "Gift shop display space retail partnership",
    stepsLabel: "6 Simple Steps",
    partnershipLabel: "Win-Win Partnership",
  },

  spaceOwner: {
    label: "Gift Shop Owners",
    tabLabel: "For Gift Shop Owners",
    badge: "GIFT SHOP OWNERS GUIDE",
    heading: "Sublet Space. Share Success.",
    image: "/images/placeholders/owner-journey.svg",
    alt: "How It Works for Gift Shop Owners Infographic",
    downloadName: "RacksOnRent_GiftShop_Owners_Guide.png",
    caption: "6 Easy Steps to Turn Unused Gift Shop Display Space Into Steady Income",
  },

  brand: {
    label: "Gift Brands & Entrepreneurs",
    tabLabel: "For Gift Brands & Startups",
    badge: "GIFT BRANDS & STARTUPS GUIDE",
    heading: "Your Product. Your Brand. Your Growth.",
    image: "/images/placeholders/brand-journey.svg",
    alt: "How It Works for Gift Brands & Entrepreneurs Infographic",
    downloadName: "RacksOnRent_Gift_Brands_Guide.png",
    caption: "6 Easy Steps to Showcase Products in Top Gift Shops Without Opening a Store",
  },

  features: [
    {
      icon: "zap",
      title: "Fast Setup",
      description: "Get display racks active in high-traffic gift shops within days.",
    },
    {
      icon: "users",
      title: "Built-In Footfall",
      description: "Tap into thousands of daily gift buyers looking for unique items.",
    },
    {
      icon: "building",
      title: "Passive Display Income",
      description: "Monetize underutilized counters, shelves, and showcases into monthly rent.",
    },
    {
      icon: "shield",
      title: "Low Risk Growth",
      description: "Showcase products with minimal overhead and zero permanent store costs.",
    },
  ],

  cta: {
    badge: "START TODAY",
    title: "Ready to Turn Gift Space Into Opportunity?",
    description: "Whether you own a gift shop or want to showcase your gift brand, we connect you for mutual success.",
    ownerButton: "List Your Gift Shop Space",
    brandButton: "Showcase Your Gift Brand",
  },
};
