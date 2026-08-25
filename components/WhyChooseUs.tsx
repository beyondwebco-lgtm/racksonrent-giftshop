import React from "react";
import { ShieldCheck, Lock, Headphones, TrendingUp } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/benefits";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ShieldCheck,
    Lock,
    Headphones,
    TrendingUp,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FFFBCC] px-4 py-1.5 text-sm font-bold text-[#650000] border border-[#F0E2E4]">
            Platform Advantages
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#650000] md:text-5xl">
            Why Choose Racks on Rent?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            We provide a transparent platform designed to simplify gift-shop display-space discovery, rental, and direct collaboration between gift shop owners and growing brands.
          </p>

        </div>

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-2xl sm:rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-5 sm:p-6 shadow-[0_12px_35px_rgba(101,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(101,0,0,0.14)] hover:border-[#650000]/50 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#FFFBCC] mb-4 sm:mb-5 shadow-xs group-hover:bg-[#650000] transition-colors duration-300">
                    <IconComp className="w-6 h-6 sm:w-8 sm:h-8 text-[#650000] group-hover:text-[#FFFBCC] group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#650000] mb-2 sm:mb-2.5 group-hover:text-[#650000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
