import React from "react";
import Image from "next/image";
import { Sparkles, Maximize2, Download, CheckCircle2 } from "lucide-react";
import { HowItWorksJourney } from "@/data/howItWorksConfig";

interface JourneyInfographicProps {
  journey: HowItWorksJourney;
  onOpenModal: () => void;
}

export default function JourneyInfographic({
  journey,
  onOpenModal,
}: JourneyInfographicProps) {
  return (
    <div className="bg-white rounded-3xl border-2 border-[#F0E2E4] p-4 sm:p-8 shadow-xl relative overflow-hidden group">
      {/* Header Badge & Title */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F0E2E4]">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#650000] bg-[#FFFBCC] px-3.5 py-1 rounded-full border border-[#FAFA33]/40 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#650000]" />
            <span>{journey.badge}</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#650000]">
            {journey.heading}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Full Screen View Button */}
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFFBCC] text-[#650000] border border-[#FAFA33] text-xs font-extrabold hover:bg-[#FAFA33] transition-all cursor-pointer shadow-xs btn-press-feedback"
          >
            <Maximize2 className="w-4 h-4 text-[#650000]" />
            <span>Full Screen View</span>
          </button>

          {/* Dynamic Download Button */}
          <a
            href={journey.image}
            download={journey.downloadName}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#650000] text-white border border-[#650000] text-xs font-extrabold hover:bg-[#4A0000] transition-all cursor-pointer shadow-xs btn-press-feedback"
          >
            <Download className="w-4 h-4 text-[#FAFA33]" />
            <span>Download Guide</span>
          </a>
        </div>
      </div>

      {/* Main Infographic Image */}
      <div
        onClick={onOpenModal}
        className="relative w-full rounded-2xl overflow-hidden border border-[#F0E2E4] bg-[#FFFDF5] cursor-zoom-in shadow-inner group/img transition-all duration-300 hover:shadow-2xl"
      >
        <Image
          src={journey.image}
          alt={journey.alt}
          width={1200}
          height={900}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover/img:scale-[1.01]"
        />

        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-[#650000] text-[#FFFBCC] border border-[#FAFA33] px-5 py-2.5 rounded-full text-xs font-extrabold shadow-2xl flex items-center gap-2">
            <Maximize2 className="w-4 h-4 text-[#FAFA33]" />
            <span>Click to Expand Full Screen</span>
          </span>
        </div>
      </div>

      {/* Bottom Caption Bar */}
      <div className="mt-6 pt-4 border-t border-[#F0E2E4] flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-[#5F5F5F] gap-2">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[#650000] shrink-0" />
          <span>{journey.caption}</span>
        </span>
        <button
          type="button"
          onClick={onOpenModal}
          className="text-[#650000] font-extrabold cursor-pointer hover:underline bg-transparent border-0 p-0"
        >
          Tap Image for High Resolution View →
        </button>
      </div>
    </div>
  );
}
