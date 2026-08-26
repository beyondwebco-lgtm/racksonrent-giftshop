import React from "react";
import { Users, ShieldCheck, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function TopBar() {
  return (
    <div className="bg-[#650000] text-white text-[10px] sm:text-xs border-b border-[#4A0000] py-2 px-4 font-semibold relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side */}
        <div className="flex items-center gap-1.5 text-[#FFFBCC] min-w-0 flex-1 sm:flex-initial">
          <Users className="w-3.5 h-3.5 text-[#FAFA33] flex-shrink-0" />
          <span className="truncate">{SITE_CONFIG.topBarTextLeft}</span>
        </div>

        {/* Center Side (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 text-white font-medium flex-shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FAFA33] flex-shrink-0" />
          <span>{SITE_CONFIG.topBarTextCenter}</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 text-[#FFFBCC]">
          <a
            href={SITE_CONFIG.telLink}
            className="flex items-center gap-1 hover:text-[#FAFA33] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#FAFA33] rounded px-1"
            aria-label={`Call ${SITE_CONFIG.phoneFormatted}`}
          >
            <Phone className="w-3 h-3 text-[#FAFA33] flex-shrink-0" />
            <span className="whitespace-nowrap">{SITE_CONFIG.phoneFormatted}</span>
          </a>

          <span className="text-[#FAFA33]/40 hidden sm:inline">•</span>

          <a
            href={SITE_CONFIG.mailtoLink}
            className="hidden sm:flex items-center gap-1 hover:text-[#FAFA33] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#FAFA33] rounded px-1"
            aria-label={`Email ${SITE_CONFIG.email}`}
          >
            <Mail className="w-3 h-3 text-[#FAFA33] flex-shrink-0" />
            <span className="truncate">{SITE_CONFIG.email}</span>
          </a>
        </div>

      </div>
    </div>
  );
}

