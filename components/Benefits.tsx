import React from "react";
import { CheckCircle2, Store, Utensils } from "lucide-react";
import { BENEFITS_COMPARISON } from "@/data/benefits";

export default function Benefits() {
  const { gymOwners, wellnessBusinesses } = BENEFITS_COMPARISON;

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FFFBCC] px-4 py-1.5 text-sm font-bold text-[#650000] border border-[#F0E2E4]">
            Mutual Value
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#650000] md:text-5xl">
            A Simple Win for Both Sides
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Discover how space sharing delivers immediate advantages to both gift shop owners and gift entrepreneurs.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Gift Shop Owners */}
          <div className="rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-8 shadow-[0_12px_35px_rgba(101,0,0,0.06)] hover:border-[#650000]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#F0E2E4] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFFBCC] text-[#650000]">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#650000]">
                  {gymOwners.title}
                </h3>
              </div>


              <div className="space-y-4">
                {gymOwners.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#650000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-[#1F1F1F]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wellness Businesses */}
          <div className="rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-8 shadow-[0_12px_35px_rgba(101,0,0,0.06)] hover:border-[#650000]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#F0E2E4] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFFBCC] text-[#650000]">
                  <Utensils className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-black text-[#650000]">
                  {wellnessBusinesses.title}
                </h3>
              </div>

              <div className="space-y-4">
                {wellnessBusinesses.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#650000] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-[#1F1F1F]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
