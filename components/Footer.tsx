import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-black/20 bg-[#650000] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/15">
          
          {/* Footer Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group focus:outline-none"
            aria-label="Racks on Rent Home"
          >
            {/* Square Rack-Icon Logo */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#FAFA33]/30 shadow-2xs">
              <Image
                src="/images/navbar-logo.jpeg"
                alt="Racks on Rent Logo Icon"
                fill
                sizes="(max-width: 640px) 44px, 48px"
                priority
                className="object-contain"
              />
            </div>

            {/* Separate Horizontal Logo Lockup */}
            <div className="flex flex-col justify-center">
              {/* Main Brand Title */}
              <div className="flex items-baseline font-black tracking-tighter leading-none text-xl sm:text-2xl">
                <span className="text-[#FFFDF5] font-black italic">Racks</span>
                <span className="text-[#FAFA33] font-bold italic lowercase mx-1 text-[0.8em]" style={{ fontFamily: "Georgia, serif" }}>on</span>
                <span className="text-[#FAFA33] font-black italic">Rent</span>
              </div>

              {/* Tagline */}
              <div className="flex items-center gap-1 mt-0.5 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.18em] leading-none whitespace-nowrap">
                <span className="h-[1.5px] w-3 bg-[#FAFA33] inline-block" />
                <span className="text-[#FFFDF5]">SHARE SPACE.</span>
                <span className="text-[#FAFA33]">GROW TOGETHER.</span>
                <span className="h-[1.5px] w-3 bg-[#FAFA33] inline-block" />
              </div>
            </div>
          </Link>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#FFFBCC] hover:text-[#FAFA33] transition-colors py-1 px-1.5 focus:outline-none focus:ring-1 focus:ring-[#FAFA33]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold">
            <a
              href={SITE_CONFIG.telLink}
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#FAFA33] transition-colors py-1 px-1"
            >
              <Phone className="w-4 h-4 text-[#FAFA33] flex-shrink-0" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <span className="text-white/30 hidden min-[360px]:inline">•</span>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#FAFA33] transition-colors py-1 px-1"
            >
              <MessageCircle className="w-4 h-4 text-[#FAFA33] fill-current flex-shrink-0" />
              <span>WhatsApp</span>
            </a>

            <span className="text-white/30 hidden sm:inline">•</span>

            <a
              href={SITE_CONFIG.mailtoLink}
              className="inline-flex items-center gap-1.5 text-[#FFFDF5] hover:text-[#FAFA33] transition-colors py-1 px-1"
            >
              <Mail className="w-4 h-4 text-[#FAFA33] flex-shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none">{SITE_CONFIG.email}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-[#FFFBCC]/80 font-medium">
          <p>© 2026 Racks on Rent. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
