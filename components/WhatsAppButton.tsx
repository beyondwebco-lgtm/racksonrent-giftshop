"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-40 flex items-center justify-center gap-2 bg-[#FAFA33] hover:bg-[#650000] text-[#650000] hover:text-[#FAFA33] p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl border border-[#650000]/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FAFA33]/50 cursor-pointer min-w-[48px] min-h-[48px]"
    >
      <MessageCircle className="w-6 h-6 fill-current text-current flex-shrink-0" />
      <span className="font-extrabold text-sm hidden sm:inline-block pr-1">
        Enquire on WhatsApp
      </span>
    </a>
  );
}
