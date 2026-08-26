"use client";

import React from "react";
import { CheckCircle2, Utensils, Store } from "lucide-react";
import { ROLE_CARDS } from "@/data/benefits";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface RoleSelectionProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  const handleRoleClick = (role: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(role);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5]" id="choose-role">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeader
          badge="Role Selection"
          title="Choose What Best Describes You"
        />

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ROLE_CARDS.map((card) => {
            const isGymOwner = card.role === "gym-owner";
            return (
              <div
                key={card.id}
                className="rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-8 shadow-[0_12px_35px_rgba(101,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(101,0,0,0.14)] hover:border-[#650000]/40 transition-all hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFFBCC] text-[#650000] mb-6 shadow-xs">
                    {isGymOwner ? <Store className="w-6 h-6" /> : <Utensils className="w-6 h-6" />}
                  </div>


                  <h3 className="text-2xl font-black text-[#650000] mb-3">
                    {card.heading}
                  </h3>

                  <p className="text-base text-[#5F5F5F] leading-relaxed mb-6 font-medium">
                    {card.text}
                  </p>

                  <div className="space-y-3 mb-8">
                    {card.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#650000] flex-shrink-0" />
                        <span className="text-sm font-extrabold text-[#1F1F1F]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRoleClick(card.role)}
                  className={`w-full py-3.5 px-6 rounded-full font-extrabold transition-all shadow-xs cursor-pointer text-center ${
                    isGymOwner
                      ? "bg-[#FAFA33] text-[#650000] border border-[#650000]/20 hover:bg-[#650000] hover:text-[#FAFA33]"
                      : "bg-[#650000] text-[#FFFBCC] hover:bg-[#650000] hover:text-[#FAFA33]"
                  }`}
                >
                  {card.ctaLabel}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
