"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Store } from "lucide-react";
import { NAV_LINKS } from "@/data/config";

interface HeaderProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Header({ onSelectRole }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    closeMenu();
    if (href.includes("#") && typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.split("#")[1];

      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  const handleListYourRack = () => {
    closeMenu();
    if (onSelectRole) {
      onSelectRole("gym-owner");
    }
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.location.href = "/#contact";
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b border-[#F0E2E4] bg-[#FFFDF5]/95 backdrop-blur-md ${
        scrolled ? "py-2 shadow-md bg-[#FFFDF5]/98" : "py-3 sm:py-4 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Far Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group focus:outline-none min-w-0"
          aria-label="Racks on Rent Home"
        >
          {/* Square Rack-Icon Logo */}
          <div className="relative w-9 h-9 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#650000]/20 shadow-2xs group-hover:scale-[1.03] transition-transform">
            <Image
              src="/images/logo.webp"
              alt="Racks on Rent Logo Icon"
              fill
              sizes="(max-width: 640px) 36px, (max-width: 1024px) 48px, 52px"
              priority
              className="object-contain"
            />
          </div>

          {/* Separate Horizontal Logo Lockup */}
          <div className="flex flex-col justify-center min-w-0">
            {/* Main Brand Title */}
            <div className="flex items-baseline font-black tracking-tighter leading-none text-lg sm:text-2xl lg:text-3xl">
              <span className="text-[#650000] font-black italic">Racks</span>
              <span className="text-[#FAFA33] font-bold italic lowercase mx-0.5 sm:mx-1 text-[0.8em]" style={{ fontFamily: "Georgia, serif" }}>on</span>
              <span className="text-[#FAFA33] font-black italic">Rent</span>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 text-[7.5px] min-[360px]:text-[8.5px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-none whitespace-nowrap">
              <span className="h-[1.5px] w-2 sm:w-3 bg-[#650000] inline-block flex-shrink-0" />
              <span className="text-[#650000]">SHARE SPACE.</span>
              <span className="text-[#FAFA33]">GROW TOGETHER.</span>
              <span className="h-[1.5px] w-2 sm:w-3 bg-[#650000] inline-block flex-shrink-0" />
            </div>
          </div>
        </Link>

        {/* Desktop Main Navigation Items (>= 1024px) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-extrabold text-[#650000] hover:text-[#650000] hover:bg-[#FFFBCC]/60 transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#FAFA33]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button (>= 1024px) */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <button
            type="button"
            onClick={handleListYourRack}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FAFA33] px-5 py-2.5 text-xs xl:text-sm font-extrabold text-[#650000] transition-all hover:bg-[#650000] hover:text-[#FAFA33] shadow-sm hover:shadow-md border border-[#650000]/20 cursor-pointer active:scale-95 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#650000]"
          >
            <Store className="w-4 h-4" />
            <span>List Your Gift Shop Space</span>
          </button>
        </div>

        {/* Mobile Right Controls (< 1024px) */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden flex-shrink-0">
          <button
            type="button"
            onClick={handleListYourRack}
            className="inline-flex items-center gap-1.5 px-2.5 min-[360px]:px-3.5 py-2 rounded-full bg-[#FAFA33] text-[#650000] text-[11px] min-[360px]:text-xs font-extrabold shadow-xs hover:bg-[#650000] hover:text-[#FAFA33] transition-colors cursor-pointer whitespace-nowrap"
          >
            <Store className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden min-[380px]:inline">List Gift Shop Space</span>
            <span className="inline min-[380px]:hidden">List Space</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
            className="p-2 sm:p-2.5 rounded-xl text-[#650000] hover:text-[#650000] hover:bg-[#FFFBCC]/60 border border-[#F0E2E4] transition-colors cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px]"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Full-Screen Mobile Drawer (< 1024px) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#FFFDF5] lg:hidden flex flex-col justify-between overflow-y-auto h-[100dvh] w-full"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Drawer */}
          <div className="py-3 px-4 sm:px-6 flex items-center justify-between border-b border-[#F0E2E4] bg-[#FFFDF5] sticky top-0 z-10">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2 flex-shrink-0 group focus:outline-none"
              aria-label="Racks on Rent Home"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#650000]/20 shadow-2xs">
                <Image
                  src="/images/logo.webp"
                  alt="Racks on Rent Logo Icon"
                  fill
                  sizes="40px"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline font-black tracking-tighter leading-none text-lg">
                  <span className="text-[#650000] font-black italic">Racks</span>
                  <span className="text-[#FAFA33] font-bold italic lowercase mx-0.5 text-[0.8em]" style={{ fontFamily: "Georgia, serif" }}>on</span>
                  <span className="text-[#FAFA33] font-black italic">Rent</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5 text-[8px] font-black uppercase tracking-[0.15em] leading-none whitespace-nowrap">
                  <span className="h-[1px] w-2 bg-[#650000] inline-block" />
                  <span className="text-[#650000]">SHARE.</span>
                  <span className="text-[#FAFA33]">GROW.</span>
                  <span className="h-[1px] w-2 bg-[#650000] inline-block" />
                </div>
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="p-2 sm:p-2.5 rounded-xl text-[#650000] hover:bg-[#FFFBCC]/60 border border-[#F0E2E4] transition-colors cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links inside Mobile Drawer */}
          <nav className="p-4 sm:p-6 space-y-1.5 flex-1 overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3.5 rounded-xl font-bold text-base sm:text-lg text-[#650000] hover:bg-[#FFFBCC]/60 active:bg-[#FFFBCC] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom Action CTA button inside Drawer */}
          <div className="p-4 sm:p-6 border-t border-[#F0E2E4] bg-[#FFFBCC]/40 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <button
              type="button"
              onClick={handleListYourRack}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FAFA33] py-3.5 text-base font-extrabold text-[#650000] shadow-xs hover:bg-[#650000] hover:text-[#FAFA33] transition-colors cursor-pointer min-h-[48px]"
            >
              <Store className="w-5 h-5" />
              <span>List Your Gift Shop Space</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

