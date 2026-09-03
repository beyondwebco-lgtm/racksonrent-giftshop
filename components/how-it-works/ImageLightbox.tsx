"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Download } from "lucide-react";
import { HowItWorksJourney } from "@/data/howItWorksConfig";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  journey: HowItWorksJourney;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  journey,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="High resolution infographic preview"
      onClick={onClose}
    >
      {/* Close Button & Download Header */}
      <div
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={journey.image}
          download={journey.downloadName}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAFA33] text-[#650000] text-xs font-black hover:bg-white transition shadow-lg btn-press-feedback"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download High Res</span>
        </a>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#650000] transition-all cursor-pointer shadow-lg btn-press-feedback"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl p-2 bg-[#FFFDF5]/10 border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={journey.image}
          alt={journey.alt}
          width={1600}
          height={1200}
          priority
          className="w-full h-auto object-contain rounded-xl shadow-2xl mx-auto"
        />
      </div>
    </div>
  );
}
