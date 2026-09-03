"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Sparkles, Store, ShoppingBag } from "lucide-react";
import {
  HowItWorksData,
  giftShopHowItWorksData,
} from "@/data/howItWorksConfig";

import HowItWorksHero from "./HowItWorksHero";
import FeatureHighlights from "./FeatureHighlights";
import JourneySelector from "./JourneySelector";
import JourneyInfographic from "./JourneyInfographic";
import ImageLightbox from "./ImageLightbox";

interface HowItWorksPageProps {
  data?: HowItWorksData;
}

export default function HowItWorksPage({ data }: HowItWorksPageProps) {
  const currentData = data || giftShopHowItWorksData;
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<"owner" | "brand">("owner");
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Sync tab with URL search parameter ?role=owner | ?role=brand
  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam === "brand") {
      setActiveTab("brand");
      scrollToJourneySection();
    } else if (roleParam === "owner") {
      setActiveTab("owner");
      scrollToJourneySection();
    }
  }, [searchParams]);

  const scrollToJourneySection = () => {
    setTimeout(() => {
      const element = document.getElementById("explore-journey");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const currentJourney =
    activeTab === "owner" ? currentData.spaceOwner : currentData.brand;

  return (
    <div className="bg-[#FFFDF5] min-h-screen pt-8 sm:pt-14 pb-20 overflow-x-hidden">
      {/* 1. Hero Section */}
      <HowItWorksHero hero={currentData.hero} />

      {/* 2. Feature Highlights Banner */}
      <FeatureHighlights features={currentData.features} />

      {/* 3. Explore the Journey Section */}
      <section
        id="explore-journey"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-24"
      >
        <JourneySelector
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
          ownerTabLabel={currentData.spaceOwner.tabLabel}
          brandTabLabel={currentData.brand.tabLabel}
        />

        <JourneyInfographic
          journey={currentJourney}
          onOpenModal={() => setIsLightboxOpen(true)}
        />
      </section>

      {/* 4. Final CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#650000] via-[#650000] to-[#4A0000] rounded-[2.5rem] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden border-2 border-[#FAFA33]/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAFA33]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAFA33] px-4 py-1 text-xs font-extrabold text-[#650000] mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#650000]" />
              <span>{currentData.cta.badge}</span>
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              {currentData.cta.title}
            </h2>

            <p className="text-[#FFFBCC] text-sm sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
              {currentData.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FAFA33] px-7 py-3.5 text-sm sm:text-base font-black text-[#650000] shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300 btn-press-feedback"
              >
                <Store className="w-5 h-5 text-[#650000]" />
                <span>{currentData.cta.ownerButton}</span>
              </Link>

              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border-2 border-white/20 px-7 py-3.5 text-sm sm:text-base font-black text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 btn-press-feedback"
              >
                <ShoppingBag className="w-5 h-5 text-[#FFFBCC]" />
                <span>{currentData.cta.brandButton}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Fullscreen Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        journey={currentJourney}
      />
    </div>
  );
}
