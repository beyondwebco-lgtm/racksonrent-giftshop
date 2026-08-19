# Task List - Racks on Rent Gift Shop Vertical Conversion

- [x] **1. Data Layer Conversion (`data/`)**
  - [x] `data/config.ts`: Updated top bar text ("For Gift Shop Owners & Gift Entrepreneurs", "Verified Gift Shop Spaces. Trusted Partners.") & tagline ("SHARE SPACE. GROW TOGETHER.")
  - [x] `data/navigation.ts`: Updated nav links, footer links, WhatsApp message template for Gift Shop vertical
  - [x] `data/stats.ts`: Updated "Gift Shop Spaces Listed", "Growing Gift Shop Partner Network", "Pan India Gift Shop Network", "Verified Gift Shop Display Spaces"
  - [x] `data/spaceTypes.ts`: Updated gift shop display spaces (Gift Shop Counter Display, Eye-Level Gift Shelf, Glass Showcase Cabinet, etc.) & space sizes
  - [x] `data/categories.ts`: Updated 6 popular gift shop categories (Handmade Gifts & Crafts, Personalized Gifts, Stationery & Journaling, Home Decor & Lifestyle Gifts, Jewellery & Fashion Accessories, Kids Gifts & Toys)
  - [x] `data/showcase.ts`: Updated 6 showcase categories & trust items for gift shops
  - [x] `data/benefits.ts`: Updated benefits comparison, role cards ("I Own a Gift Shop", "I Am a Gift Brand / Entrepreneur"), and why choose us
  - [x] `data/whyChooseUs.ts`: Updated 10 reasons & trust banner for Gift Shop display space rental
  - [x] `data/journey.ts`: Updated 5-step process for gift shop space sharing
  - [x] `data/faqs.ts`: Replaced all 8 FAQs with exact required gift shop Q&As
  - [x] `data/opportunities.ts`: Updated sample gift shop display opportunities
  - [x] `data/services.ts`: Updated gift shop display services
  - [x] `data/testimonials.ts`: Updated testimonials for gift shop owners and gift brands
  - [x] `data/pricing.ts`: Updated pricing tier descriptions ("Gift Shop Space Listing", "Display Space Placement")

- [x] **2. Component Layer Updates (`components/`)**
  - [x] `components/TopBar.tsx`: Uses updated SITE_CONFIG announcement texts
  - [x] `components/Header.tsx`: Updated CTA to "List Your Gift Shop Space" (desktop & mobile) and tagline "SHARE SPACE. GROW TOGETHER."
  - [x] `components/Hero.tsx`: Updated eyebrow, heading ("Give Your Products a Place Inside a Busy Gift Shop."), description, 4 benefits, 2 CTAs ("Find Gift Shop Space", "List Your Gift Shop Space")
  - [x] `components/HeroStats.tsx`: Uses updated stats labels ("Gift Shop Spaces Listed")
  - [x] `components/SpaceSearch.tsx`: Updated default space types, space sizes, default category ("Handmade Gifts & Crafts")
  - [x] `components/GymSpaceShowcase.tsx`: Updated section headers ("Gift Shop Display Opportunities") & gift shop text/CTAs
  - [x] `components/PopularCategories.tsx`: Updated section header ("Popular Gift Product Categories") & 6 category cards
  - [x] `components/HowItWorks.tsx`: Updated 5 steps text for gift shop space sharing
  - [x] `components/WhyChooseUs.tsx`: Updated section description and feature cards
  - [x] `components/EnquiryForm.tsx`: Updated role labels ("Gift Shop Owner", "Gift Entrepreneur"), "Gift Shop Name *", dropdown options, placeholders, WhatsApp payload
  - [x] `components/FAQ.tsx`: Updated section description and FAQ accordion
  - [x] `components/TrustStrip.tsx`: Uses updated trust strip items
  - [x] `components/Footer.tsx`: Preserved brand identity & contact info, updated navigation & tagline
  - [x] `components/AboutUs.tsx`: Updated text & venue tags to gift shops, handicraft boutiques, souvenir stores, etc.
  - [x] `components/Benefits.tsx`: Updated section description & comments
  - [x] `components/SpaceTypes.tsx`: Updated section description
  - [x] `components/Pricing.tsx`: Updated section description

- [x] **3. SEO & Layout (`app/`)**
  - [x] `app/layout.tsx`: Updated title ("Gift Shop Display Space for Rent in India | Racks on Rent"), meta description, keywords, OpenGraph, JSON-LD schema

- [x] **4. Verification & QA**
  - [x] Running `npx next build` (Passes 100% cleanly)
  - [x] Project-wide grep search audit for leftover café terms (Clean)
  - [x] Responsive UI verification
