"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Store,
  Utensils,
  Sparkles,
  Gift,
  Tag,
  CheckCircle2,
  Filter,
  Layers,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { ALL_18_CATEGORIES, CategoryItem } from "@/data/categories";
import { SITE_CONFIG } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", "High Demand", "Popular", "Top Seller", "Trending", "Bestseller", "Creative"];

  const filteredCategories = useMemo(() => {
    return ALL_18_CATEGORIES.filter((cat) => {
      const matchesSearch =
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.suitableFor?.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFilter =
        selectedFilter === "All" ||
        (cat.badge && cat.badge.toLowerCase().includes(selectedFilter.toLowerCase()));

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedFilter]);

  const handleEnquiry = (categoryName: string) => {
    const text = `Hello Racks on Rent,\n\nI am interested in display space opportunities for the category: "${categoryName}".\n\nPlease share available gift shop spaces and listing details.`;
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="bg-[#FFFDF5] min-h-screen">
      {/* Top Header Banner */}
      <section className="bg-[radial-gradient(circle_at_80%_20%,rgba(101,0,0,0.08),transparent_40%),linear-gradient(180deg,#fffdf5_0%,#fffbcc_30%,#fffdf5_100%)] border-b border-[#F0E2E4] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation Link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#650000] hover:text-[#650000] bg-[#FFFDF5] px-3.5 py-2 rounded-xl border border-[#F0E2E4] shadow-2xs hover:bg-[#FFFBCC]/60 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <SectionHeader
            badge="Complete Gift Shop Product Catalog"
            title="All 18 Gift Shop Display Categories"
            subtitle="Discover all 18 product and display categories connecting gift shop owners with handmade creators, gift brands, stationery artists, home decor brands, and specialty entrepreneurs."
            className="mb-8"
          />

          {/* Search & Filter Controls */}
          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-[#650000] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search categories or products (e.g., candles, stationery, jewelry, chocolates)..."
                className="w-full rounded-2xl border-2 border-[#650000] bg-white pl-12 pr-4 py-3.5 text-[#1F1F1F] text-base outline-none transition focus:ring-4 focus:ring-[#FFFBCC] font-medium shadow-sm"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="text-xs font-bold text-[#650000] uppercase tracking-wider flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold border transition-all cursor-pointer ${
                    selectedFilter === filter
                      ? "bg-[#650000] text-[#FFFBCC] border-[#FAFA33] shadow-xs"
                      : "bg-[#FFFDF5] text-[#650000] border-[#F0E2E4] hover:bg-[#FFFBCC]/60"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Results Count Header */}
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#F0E2E4]">
            <p className="text-sm font-bold text-[#650000]">
              Showing <span className="text-[#650000] font-black">{filteredCategories.length}</span> of 18 Gift Shop Categories
            </p>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-extrabold text-[#650000] underline hover:text-[#650000] cursor-pointer"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* 18 Categories Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCategories.map((cat: CategoryItem, idx: number) => (
              <div
                key={cat.id}
                className="group rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-5 sm:p-6 shadow-[0_12px_35px_rgba(101,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(101,0,0,0.14)] hover:border-[#650000]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Category Header Row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-black text-[#650000] uppercase tracking-wider">
                      Category {String(idx + 1).padStart(2, "0")}
                    </span>
                    {cat.badge && (
                      <span className="inline-block rounded-full bg-[#FFFBCC] px-3 py-1 text-xs font-extrabold text-[#650000] border border-[#650000]/20">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  {/* Image Showcase Box */}
                  <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-[#FFFDF5] border border-[#F0E2E4] mb-4 flex items-center justify-center">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-xl font-black text-[#650000] leading-snug mb-2 group-hover:text-[#650000] transition-colors">
                    {cat.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed font-medium mb-4">
                    {cat.description}
                  </p>

                  {/* Suitable Products Tags */}
                  {cat.suitableFor && cat.suitableFor.length > 0 && (
                    <div className="mb-4">
                      <span className="block text-[11px] font-extrabold text-[#650000] uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        <span>Suitable Products</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.suitableFor.map((item, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded-lg bg-[#FFFBCC]/60 text-[#650000] text-xs font-bold border border-[#650000]/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action CTAs */}
                <div className="mt-4 pt-4 border-t border-[#F0E2E4] flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleEnquiry(cat.name)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#FAFA33] hover:bg-[#650000] text-[#650000] hover:text-[#FAFA33] border border-[#650000]/20 py-2.5 px-4 text-xs font-extrabold transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                    <span>Enquire for {cat.name.split(" ")[0]}</span>
                  </button>

                  <Link
                    href={`/#contact`}
                    className="inline-flex items-center justify-center gap-1 rounded-xl bg-[#650000] text-[#FFFBCC] py-2.5 px-3 text-xs font-extrabold hover:bg-[#650000] transition-colors"
                  >
                    <span>List Space</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Zero Results State */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16 bg-[#FFFDF5] rounded-3xl border-2 border-dashed border-[#F0E2E4] p-8 max-w-xl mx-auto">
              <Gift className="w-12 h-12 text-[#650000] mx-auto mb-3" />
              <h3 className="text-xl font-black text-[#650000] mb-2">No categories found</h3>
              <p className="text-sm text-[#5F5F5F] font-medium mb-4">
                We couldn't find any category matching "{searchQuery}". Try searching for candles, gifts, jewelry, or stationery.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("All");
                }}
                className="px-5 py-2.5 rounded-full bg-[#FAFA33] text-[#650000] font-extrabold text-xs shadow-xs hover:bg-[#650000] hover:text-[#FAFA33] transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Bottom Callout Banner */}
          <div className="mt-16 bg-[#650000] text-white rounded-3xl p-8 sm:p-12 text-center border-2 border-black/20 shadow-xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="inline-flex rounded-full bg-[#FFFBCC] px-4 py-1 text-xs sm:text-sm font-extrabold text-[#650000]">
                Have a Custom Gift Category?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FAFA33] tracking-tight">
                List or Rent Display Space for Any Gift Product
              </h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                Whether you offer handmade crafts, personalized gifts, corporate hampers, seasonal products, or boutique accessories, Racks on Rent connects you directly with top gift shop owners across India.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FAFA33] hover:bg-[#650000] text-[#650000] hover:text-[#FAFA33] px-6 py-3.5 font-extrabold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Store className="w-4 h-4" />
                  <span>List Your Gift Shop Space</span>
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Racks on Rent, I want to enquire about gift shop display space.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFDF5] text-[#650000] hover:bg-[#FFFBCC] px-6 py-3.5 font-extrabold text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#650000]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
