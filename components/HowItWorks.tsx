import React from "react";
import { Store, Search, Calendar, ShoppingBag, TrendingUp, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "List Gift Shop Space",
      description: "Gift shop owners list available shelves, counters, racks, showcases, tabletop spaces, or display corners.",
      icon: Store,
    },
    {
      number: 2,
      title: "Browse Gift Shop Spaces",
      description: "Brands and entrepreneurs search available spaces by city, location, size, and display type.",
      icon: Search,
    },
    {
      number: 3,
      title: "Reserve a Space",
      description: "Choose a suitable gift-shop display location and agree on a daily, weekly, or monthly rental arrangement.",
      icon: Calendar,
    },
    {
      number: 4,
      title: "Display & Sell",
      description: "Products are displayed inside the gift shop where customers can discover, interact with, and purchase them.",
      icon: ShoppingBag,
    },
    {
      number: 5,
      title: "Shared Success",
      description: "Gift shop owners earn from unused display space while brands gain valuable offline visibility and customer access.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF6A3]/30 border-y border-[#F0E2E4]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-[#FFFDF5] px-4 py-1.5 text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
            5-Step Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Five simple steps to connect gift shop owners with brands, creators, artists, and entrepreneurs looking for physical retail display space.
          </p>
        </div>

        {/* 5 Step Cards with Desktop Arrows and Mobile Flow Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-5 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col group">
                <div className="rounded-2xl sm:rounded-3xl border border-[#F0E2E4] bg-[#FFFDF5] p-5 shadow-[0_12px_35px_rgba(107,15,26,0.06)] flex flex-col items-center text-center relative group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:border-[#6B0F1A]/50 group-hover:shadow-[0_20px_45px_rgba(107,15,26,0.12)] transition-all duration-300 h-full">
                  
                  {/* Step Number Circle */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6B0F1A] font-black text-[#FFF6A3] mb-4 shadow-sm text-base border-2 border-[#F4E409] group-hover:scale-110 group-hover:bg-[#F4E409] group-hover:text-[#3D0710] group-hover:border-[#6B0F1A] transition-all duration-300">
                    {step.number}
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF6A3] mb-3 text-[#6B0F1A] group-hover:bg-[#6B0F1A] group-hover:text-[#FFF6A3] transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-black text-[#6B0F1A] mb-2 group-hover:text-[#3D0710] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#5F5F5F] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Desktop Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#F4E409] text-[#3D0710] shadow-sm border border-[#6B0F1A]/20 group-hover:translate-x-1 group-hover:bg-[#3D0710] group-hover:text-[#F4E409] transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* Mobile Step Flow Connector Indicator (< 1024px) */}
                {idx < steps.length - 1 && (
                  <div className="flex lg:hidden justify-center my-1.5 text-[#6B0F1A]/40">
                    <div className="w-0.5 h-4 bg-[#6B0F1A]/20 rounded-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

