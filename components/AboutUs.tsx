"use client";

import React from "react";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Building2,
  Store,
  Compass,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function AboutUs() {
  const coreValues = [
    {
      name: "Innovation",
      desc: "Driving the future of commercial space utilization through technology and creative thinking.",
      icon: Zap,
    },
    {
      name: "Trust",
      desc: "Building long-lasting relationships through integrity, transparency, and reliability.",
      icon: ShieldCheck,
    },
    {
      name: "Growth",
      desc: "Creating opportunities that enable businesses and entrepreneurs to achieve sustainable success.",
      icon: TrendingUp,
    },
    {
      name: "Collaboration",
      desc: "Connecting commercial establishments and businesses through a mutually beneficial ecosystem.",
      icon: Users,
    },
    {
      name: "Excellence",
      desc: "Delivering exceptional service, seamless experiences, and professional support at every stage.",
      icon: Award,
    },
  ];

  const whyChooseItems = [
    "India's First Gift Shop Display Space Marketplace",
    "Innovative Gift Store Space-Sharing Model",
    "Affordable Retail Expansion for Gift Brands",
    "High Daily Footfall Gift Shop Locations",
    "Flexible Daily, Weekly & Monthly Rentals",
    "Verified Gift Shops & Display Cabinets",
    "Direct Communication & Transparent Agreements",
    "No Expensive Standalone Retail Leases",
    "Dedicated Gift Brand & Seller Support",
    "Scalable Across Multiple Local Gift Outlets",
  ];

  const venueTypes = [
    "Gift Shops",
    "Handicraft Boutiques",
    "Souvenir Stores",
    "Lifestyle Gift Outlets",
    "Custom Gift Boutiques",
    "Artisan Gift Hubs",
    "Curio Shops",
    "Craft Stores",
  ];


  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-b border-[#F0E2E4]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="India's First Commercial Display Space Marketplace"
          title={
            <>
              About <span className="text-[#FAFA33] font-black drop-shadow-[0_1.5px_1.5px_rgba(101,0,0,0.4)]">Racks on Rent</span>
            </>
          }
          subtitle={
            <span className="text-lg font-bold text-[#650000] sm:text-xl block text-center">
              Transforming Unused Commercial Space into Business Opportunities
            </span>
          }
        />

        {/* Intro Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Intro Text Box (#650000 Maroon) */}
          <div className="lg:col-span-7 bg-[#650000] text-white rounded-3xl border-2 border-black/20 p-6 sm:p-8 shadow-[0_16px_40px_rgba(101,0,0,0.20)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-[#FAFA33] uppercase tracking-wider block mb-2">
                Who We Are
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#FFFBCC] mb-4">
                Redefining the Future of Commercial Space Utilization
              </h3>
              <p className="text-sm sm:text-base text-[#FFFDF5]/90 leading-relaxed font-medium mb-4">
                At <strong className="text-[#FAFA33] font-black">RACKS ON RENT</strong>, we are redefining the future of commercial space utilization by transforming underutilized racks, shelves, kiosks, display counters, and business corners into revenue-generating business opportunities.
              </p>
              <p className="text-sm sm:text-base text-[#FFFDF5]/90 leading-relaxed font-medium">
                Our technology-driven marketplace connects commercial space owners with brands, startups, entrepreneurs, and retailers seeking affordable, high-visibility locations to showcase their products and services. By unlocking the value of existing infrastructure, we create a sustainable ecosystem where businesses expand faster while commercial establishments generate recurring income from previously unused spaces.
              </p>
            </div>

            {/* Venue Types Badge List */}
            <div className="mt-6 pt-6 border-t border-[#FFFBCC]/20">
              <span className="text-xs font-extrabold text-[#FAFA33] uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#FAFA33]" />
                <span>Empowering Every Commercial Establishment</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {venueTypes.map((venue, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-black/30 text-[#FFFBCC] text-xs font-extrabold border border-[#FAFA33]/30"
                  >
                    {venue}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Purpose & Why We Exist Right Cards (#650000 Maroon) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Our Purpose Card */}
            <div className="bg-[#650000] text-[#FFFBCC] rounded-3xl p-6 sm:p-8 shadow-[0_16px_40px_rgba(101,0,0,0.20)] border-2 border-black/20 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#FAFA33] text-[#650000]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FAFA33]">
                    Our Purpose
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#FFFBCC] mb-3">
                  Creating Shared Success Through Smart Space Utilization
                </h4>
                <p className="text-xs sm:text-sm text-[#FFFDF5]/90 leading-relaxed font-medium">
                  Every commercial space has untapped potential. While businesses face rising costs to establish a retail presence, thousands of commercial spaces remain underutilized. RACKS ON RENT bridges this gap by creating a trusted digital marketplace where space owners monetize unused display areas and entrepreneurs gain affordable access to premium customer locations.
                </p>
              </div>
            </div>

            {/* Why We Exist Card */}
            <div className="bg-[#650000] text-[#FFFBCC] rounded-3xl p-6 sm:p-8 shadow-[0_16px_40px_rgba(101,0,0,0.20)] border-2 border-black/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-[#FAFA33] text-[#650000]">
                  <Store className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#FAFA33]">
                  Why We Exist
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#FFFDF5] leading-relaxed font-bold italic">
                &quot;Every unused commercial space represents an untapped opportunity. Our goal is to transform vacant display areas into thriving business destinations where commercial establishments earn more, entrepreneurs grow faster, and customers discover new products in the places they already visit every day.&quot;
              </p>
            </div>

          </div>
        </div>

        {/* Vision & Mission Cards (#650000 Maroon) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision Card */}
          <div className="bg-[#650000] rounded-3xl border-2 border-black/20 p-6 sm:p-8 shadow-[0_16px_40px_rgba(101,0,0,0.20)] hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#FAFA33] text-[#650000]">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#FAFA33] uppercase tracking-wider block">
                  Future Roadmap
                </span>
                <h3 className="text-xl font-extrabold text-[#FFFBCC]">Our Vision</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#FFFDF5]/90 leading-relaxed font-medium">
              To build India&apos;s largest and most trusted commercial display space marketplace, transform underutilized commercial spaces into thriving business opportunities while empowering entrepreneurs, retailers, and commercial establishments to grow together.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#650000] rounded-3xl border-2 border-black/20 p-6 sm:p-8 shadow-[0_16px_40px_rgba(101,0,0,0.20)] hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#FAFA33] text-[#650000]">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#FAFA33] uppercase tracking-wider block">
                  Our Commitment
                </span>
                <h3 className="text-xl font-extrabold text-[#FFFBCC]">Our Mission</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#FFFDF5]/90 leading-relaxed font-medium">
              To revolutionize commercial space utilization through an innovative technology platform that connects businesses with unused display spaces, creates sustainable income opportunities, and accelerates business growth through trust, transparency, and collaboration.
            </p>
          </div>

        </div>

        {/* Our Core Values Section (#650000 Maroon Cards) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#650000] uppercase tracking-wider block">
              What Drives Us
            </span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#650000]">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#650000] rounded-2xl border-2 border-black/20 p-5 shadow-[0_8px_24px_rgba(101,0,0,0.18)] hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FAFA33] flex items-center justify-center text-[#650000] mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-extrabold text-base text-[#FFFBCC] mb-2">
                      {val.name}
                    </h4>
                    <p className="text-xs text-[#FFFDF5]/90 leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Racks on Rent Section Box (#650000 Maroon Container) */}
        <div className="bg-[#650000] rounded-3xl border-2 border-black/20 p-6 sm:p-10 shadow-[0_20px_50px_rgba(101,0,0,0.25)]">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-flex rounded-full bg-[#FAFA33] px-3.5 py-1 text-xs font-extrabold text-[#650000] mb-2">
              Competitive Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFBCC]">
              Why Choose RACKS ON RENT?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#FFFDF5]/90 font-medium">
              A Smarter Way to Expand Your Business — Unlike traditional retail expansion that demands high investment and long-term commitments, RACKS ON RENT offers a flexible and cost-effective alternative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 max-w-4xl mx-auto">
            {whyChooseItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-black/25 p-3.5 rounded-xl border border-[#FAFA33]/30 shadow-2xs hover:border-[#FAFA33]/60 transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-[#FAFA33] text-[#650000] flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#FFFBCC]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
