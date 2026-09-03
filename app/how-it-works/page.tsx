import React, { Suspense } from "react";
import type { Metadata } from "next";
import HowItWorksPage from "@/components/how-it-works/HowItWorksPage";

export const metadata: Metadata = {
  title: "How It Works | Racks on Rent",
  description:
    "Learn how Racks on Rent connects retail space owners with brands and startups in a step-by-step retail partnership.",
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FFFDF5] flex items-center justify-center">
          <div className="animate-pulse text-[#650000] font-bold text-lg">
            Loading How It Works...
          </div>
        </div>
      }
    >
      <HowItWorksPage />
    </Suspense>
  );
}
