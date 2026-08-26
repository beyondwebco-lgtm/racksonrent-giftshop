"use client";

import React, { useState } from "react";

import { Store, Utensils, TrendingUp, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Hero({ onSelectRole }: HeroProps) {
  const [btn1Pos, setBtn1Pos] = useState({ x: 0, y: 0 });
  const [btn2Pos, setBtn2Pos] = useState({ x: 0, y: 0 });

  const handleRoleClick = (role: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(role);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMoveBtn1 = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const shiftX = Math.max(-3, Math.min(3, relX * 0.04));
    const shiftY = Math.max(-3, Math.min(3, relY * 0.04));
    setBtn1Pos({ x: shiftX, y: shiftY });
  };

  const handleMouseLeaveBtn1 = () => {
    setBtn1Pos({ x: 0, y: 0 });
  };

  const handleMouseMoveBtn2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const shiftX = Math.max(-3, Math.min(3, relX * 0.04));
    const shiftY = Math.max(-3, Math.min(3, relY * 0.04));
    setBtn2Pos({ x: shiftX, y: shiftY });
  };

  const handleMouseLeaveBtn2 = () => {
    setBtn2Pos({ x: 0, y: 0 });
  };

  const benefitItems = [
    { text: "Extra Gift Shop Space. Extra Income.", icon: <TrendingUp className="w-4 h-4 text-[#650000]" /> },
    { text: "Connect with Local Brands & Creators.", icon: <ShieldCheck className="w-4 h-4 text-[#650000]" /> },
    { text: "Verified, Trusted Gift Shop Locations.", icon: <Lock className="w-4 h-4 text-[#650000]" /> },
    { text: "Hassle-Free Direct Space Sharing.", icon: <CheckCircle2 className="w-4 h-4 text-[#650000]" /> },
  ];

  return (
    <section className="relative pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-16 lg:pb-20 bg-[radial-gradient(circle_at_80%_20%,rgba(101,0,0,0.08),transparent_40%),linear-gradient(180deg,#fffdf5_0%,#fffbcc_25%,#fffdf5_100%)] border-b border-[#F0E2E4] overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#FFFBCC] px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold text-[#650000] border border-[#F0E2E4] max-w-full truncate">
                For Gift Shop Owners & Gift Entrepreneurs
              </span>
            </div>

            <h1 className="text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#650000] leading-[1.18] sm:leading-[1.15]">
              Give Your Products a Place{" "}
              <span className="text-[#FAFA33] font-black drop-shadow-[0_1.5px_1.5px_rgba(101,0,0,0.4)]">
                Inside a Busy Gift Shop.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#5F5F5F] leading-relaxed max-w-2xl font-medium">
              Rent display space inside trusted gift shops and put your gifts, handmade products, stationery, lifestyle products, accessories, and specialty items directly in front of shoppers.
            </p>

            {/* 4 Small Benefit Items */}
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
              {benefitItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-[#FFFDF5] p-2.5 rounded-xl border border-[#F0E2E4] shadow-2xs">
                  <div className="p-1.5 rounded-lg bg-[#FFFBCC] flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#1F1F1F] leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Animated 2 Primary CTAs */}
            <div className="relative pt-3 sm:pt-4">
              <div className="w-16 h-0.5 bg-[#650000]/30 rounded-full animate-accent-line mb-3" />

              <div className="absolute inset-0 -top-1 bg-[radial-gradient(ellipse_at_center,rgba(250,250,51,0.30),transparent_70%)] pointer-events-none rounded-3xl blur-md animate-cta-pulse-group" />

              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 z-10">
                
                {/* Button 1: Find Gift Shop Space (For Gift Brands) */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("wellness")}
                  onMouseMove={handleMouseMoveBtn1}
                  onMouseLeave={handleMouseLeaveBtn1}
                  className="animate-cta-btn-1 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl bg-[#FAFA33] border-2 border-[#650000]/20 px-4 sm:px-6 py-3.5 text-[#650000] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.018] hover:shadow-[0_14px_30px_rgba(101,0,0,0.22)] active:scale-[0.97] focus:outline-none cursor-pointer group min-h-[52px]"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                  <div
                    style={{
                      transform: `translate(${btn1Pos.x}px, ${btn1Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-sm sm:text-base font-black">
                      <Utensils className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300 flex-shrink-0" />
                      <span>Find Gift Shop Space</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider opacity-80 mt-0.5 text-center">
                      For Gift Brands & Entrepreneurs
                    </span>
                  </div>
                </button>

                {/* Button 2: List Your Gift Shop Space */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("gym-owner")}
                  onMouseMove={handleMouseMoveBtn2}
                  onMouseLeave={handleMouseLeaveBtn2}
                  className="animate-cta-btn-2 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl border-2 border-[#650000] bg-[#650000] px-4 sm:px-6 py-3.5 text-[#FFFBCC] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.018] hover:shadow-[0_14px_30px_rgba(101,0,0,0.35)] active:scale-[0.97] focus:outline-none cursor-pointer group min-h-[52px]"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[#FAFA33]/30 to-transparent pointer-events-none" />

                  <div
                    style={{
                      transform: `translate(${btn2Pos.x}px, ${btn2Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-sm sm:text-base font-black">
                      <Store className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFFBCC] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300 flex-shrink-0" />
                      <span>List Your Gift Shop Space</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#FAFA33] mt-0.5 text-center">
                      For Gift Shop Owners
                    </span>
                  </div>
                </button>

              </div>
            </div>
          </div>

          {/* Right Column (High Quality Gift Shop Showcase Image / Video) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="animate-hero-video-entrance rounded-[1.5rem] sm:rounded-[2rem] border-2 border-[#F0E2E4] bg-[#FFFDF5] p-2.5 sm:p-3 shadow-[0_24px_70px_rgba(101,0,0,0.10)] relative overflow-hidden transition-all duration-350 hover:scale-[1.015] hover:shadow-[0_28px_80px_rgba(101,0,0,0.18)] hover:border-[#FAFA33]/60 group">
                <div className="relative aspect-4/3 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FFFBCC]/30">
                  <video
                    src="/Racks_On_Rent_connects_bakery.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Dark Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-[#650000] text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border border-sm:border-2 border-[#FAFA33] shadow-xl flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-bold tracking-wide z-10">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FAFA33] animate-ping" />
                    <span>Extra Space. Extra Profit.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

