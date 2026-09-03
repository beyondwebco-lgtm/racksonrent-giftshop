import React from "react";

interface JourneySelectorProps {
  activeTab: "owner" | "brand";
  onSelectTab: (tab: "owner" | "brand") => void;
  ownerTabLabel: string;
  brandTabLabel: string;
}

export default function JourneySelector({
  activeTab,
  onSelectTab,
  ownerTabLabel,
  brandTabLabel,
}: JourneySelectorProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-[#650000] mb-3">
        Explore the Journey
      </h2>
      <p className="text-sm sm:text-base text-[#5F5F5F] font-medium mb-6">
        Select your perspective to view the detailed step-by-step process infographic
      </p>

      <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#F0E2E4] shadow-xs flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => onSelectTab("owner")}
          className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer btn-press-feedback ${
            activeTab === "owner"
              ? "bg-[#650000] text-[#FFFBCC] shadow-md"
              : "text-[#5F5F5F] hover:text-[#650000] hover:bg-[#FFFBCC]/40"
          }`}
          aria-pressed={activeTab === "owner"}
        >
          {ownerTabLabel}
        </button>

        <button
          type="button"
          onClick={() => onSelectTab("brand")}
          className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer btn-press-feedback ${
            activeTab === "brand"
              ? "bg-[#650000] text-[#FFFBCC] shadow-md"
              : "text-[#5F5F5F] hover:text-[#650000] hover:bg-[#FFFBCC]/40"
          }`}
          aria-pressed={activeTab === "brand"}
        >
          {brandTabLabel}
        </button>
      </div>
    </div>
  );
}
