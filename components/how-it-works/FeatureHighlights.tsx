import React from "react";
import { Zap, Users, Building2, ShieldCheck, HelpCircle } from "lucide-react";
import { HowItWorksFeature } from "@/data/howItWorksConfig";

interface FeatureHighlightsProps {
  features: HowItWorksFeature[];
}

const getFeatureIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case "zap":
    case "lightning":
    case "fast":
      return Zap;
    case "users":
    case "footfall":
    case "people":
      return Users;
    case "building":
    case "building2":
    case "income":
    case "store":
      return Building2;
    case "shield":
    case "shieldcheck":
    case "risk":
      return ShieldCheck;
    default:
      return HelpCircle;
  }
};

export default function FeatureHighlights({ features }: FeatureHighlightsProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, idx) => {
          const IconComp = getFeatureIcon(feature.icon);
          return (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-[#F0E2E4] shadow-xs hover:shadow-md hover:border-[#FAFA33]/60 transition-all duration-300 card-hover-system"
            >
              <div className="p-2.5 rounded-xl bg-[#FFFBCC]/60 inline-block mb-3 text-[#650000]">
                <IconComp className="w-6 h-6 text-[#650000]" />
              </div>
              <h3 className="text-base font-extrabold text-[#650000] mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-[#5F5F5F] leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
