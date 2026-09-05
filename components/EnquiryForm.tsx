"use client";

import React, { useState } from "react";
import { Store, Gift, HelpCircle, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";

type RoleType = "gym-owner" | "wellness" | "general";

interface EnquiryFormProps {
  selectedRole?: RoleType;
  initialSearchValues?: {
    location?: string;
    spaceType?: string;
    rackSize?: string;
    category?: string;
  };
  onRoleChange?: (role: RoleType) => void;
}

export default function EnquiryForm({ selectedRole = "gym-owner", initialSearchValues, onRoleChange }: EnquiryFormProps) {
  const [internalRole, setInternalRole] = useState<RoleType | null>(null);

  const role = internalRole ?? selectedRole;

  const [formData, setFormData] = useState({
    fullName: "",
    shopName: "",
    brandName: "",
    phone: "",
    city: initialSearchValues?.location || "",
    availableSpace: initialSearchValues?.spaceType || "Gift Shop Counter Display",
    requiredSpace: initialSearchValues?.spaceType || "Gift Shop Counter Display",
    rackSize: initialSearchValues?.rackSize || "Small — Up to 2×1 ft",
    category: initialSearchValues?.category || "Handmade Gifts & Crafts",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleRoleSelect = (newRole: RoleType) => {
    setInternalRole(newRole);
    if (onRoleChange) {
      onRoleChange(newRole);
    }
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (role === "gym-owner" && !formData.shopName.trim()) newErrors.shopName = "Gift Shop Name is required";
    if (role === "wellness" && !formData.brandName.trim()) newErrors.brandName = "Brand Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.city.trim() && !initialSearchValues?.location) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const activeCity = formData.city || initialSearchValues?.location || "";
    const activeSpaceType = formData.availableSpace || initialSearchValues?.spaceType || "Gift Shop Counter Display";
    const activeRequiredSpace = formData.requiredSpace || initialSearchValues?.spaceType || "Gift Shop Counter Display";
    const activeRackSize = formData.rackSize || initialSearchValues?.rackSize || "Small — Up to 2×1 ft";
    const activeCategory = formData.category || initialSearchValues?.category || "Handmade Gifts & Crafts";

    let roleText = "Gift Shop Owner";
    let detailsText = "";

    if (role === "gym-owner") {
      roleText = "Gift Shop Owner";
      detailsText = `Name: ${formData.fullName}\nGift Shop Name: ${formData.shopName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nAvailable Display Space Type: ${activeSpaceType}\nDisplay Space Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else if (role === "wellness") {
      roleText = "Gift Entrepreneur / Brand";
      detailsText = `Name: ${formData.fullName}\nBrand Name: ${formData.brandName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nGift Category: ${activeCategory}\nRequired Display Space: ${activeRequiredSpace}\nDisplay Space Size: ${activeRackSize}\nMessage: ${formData.message || "N/A"}`;
    } else {
      roleText = "General Enquiry";
      detailsText = `Name: ${formData.fullName}\nPhone: ${formData.phone}\nCity: ${activeCity}\nMessage: ${formData.message || "N/A"}`;
    }

    const messageText = `Hello Racks on Rent,

I am interested in gift shop display space opportunities.

Role: ${roleText}
${detailsText}`;

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="GET IN TOUCH"
          title={
            <>
              Tell Us <span className="text-[#B8913A]">What You Are Looking For</span>
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              Choose your role, enter your gift shop or product details, and continue directly on WhatsApp.
            </span>
          }
        />

        <div className="max-w-3xl mx-auto">
          {/* Role Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center p-1.5 bg-[#FFFBCC]/30 rounded-2xl mb-8 gap-1.5 border border-[#F0E2E4] shadow-xs">
            <button
              type="button"
              onClick={() => handleRoleSelect("gym-owner")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
                role === "gym-owner"
                  ? "bg-[#740202] text-[#FAFA33] shadow-xs"
                  : "text-[#740202] hover:bg-[#FFFBCC]"
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Gift Shop Owner</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("wellness")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
                role === "wellness"
                  ? "bg-[#740202] text-[#FAFA33] shadow-xs"
                  : "text-[#740202] hover:bg-[#FFFBCC]"
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>Gift Entrepreneur</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleSelect("general")}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] ${
                role === "general"
                  ? "bg-[#740202] text-[#FAFA33] shadow-xs"
                  : "text-[#740202] hover:bg-[#FFFBCC]"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>General Enquiry</span>
            </button>
          </div>

          {/* Form Box */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-6 sm:p-10 shadow-[0_12px_35px_rgba(116,2,2,0.06)]"
          >
            {submitted && (
              <div className="bg-[#FFFBCC] border border-[#740202]/30 text-[#740202] p-4 rounded-2xl flex items-center gap-3 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#740202] flex-shrink-0" />
                <span>Opening WhatsApp with your gift shop enquiry details...</span>
              </div>
            )}

            {/* Common Field: Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                  errors.fullName ? "border-red-500 bg-red-50/30" : ""
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
            </div>

            {/* Gift Shop Owner specific field */}
            {role === "gym-owner" && (
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="shopName">
                  Gift Shop Name *
                </label>
                <input
                  id="shopName"
                  name="shopName"
                  type="text"
                  value={formData.shopName}
                  onChange={handleChange}
                  placeholder="e.g. Celebrations Gift Boutique"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                    errors.shopName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.shopName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.shopName}</p>}
              </div>
            )}

            {/* Gift Entrepreneur specific field */}
            {role === "wellness" && (
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="brandName">
                  Brand or Business Name *
                </label>
                <input
                  id="brandName"
                  name="brandName"
                  type="text"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="e.g. Clay & Craft Handmade Gifts"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                    errors.brandName ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.brandName && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.brandName}</p>}
              </div>
            )}

            {/* Phone & City Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="7995424477"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                    errors.phone ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="city">
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city || initialSearchValues?.location || ""}
                  onChange={handleChange}
                  placeholder="e.g. Hyderabad"
                  className={`w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm ${
                    errors.city ? "border-red-500 bg-red-50/30" : ""
                  }`}
                />
                {errors.city && <p className="text-xs text-red-600 mt-1 font-semibold">{errors.city}</p>}
              </div>
            </div>

            {/* Gift Shop Owner Space & Size Fields */}
            {role === "gym-owner" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="availableSpace">
                    Available Display Space Type
                  </label>
                  <select
                    id="availableSpace"
                    name="availableSpace"
                    value={formData.availableSpace || initialSearchValues?.spaceType || "Gift Shop Counter Display"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#B8913A] font-semibold italic outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                  >
                    <option value="Gift Shop Counter Display" className="text-[#B8913A] font-semibold italic">Gift Shop Counter Display</option>
                    <option value="Eye-Level Gift Shelf" className="text-[#B8913A] font-semibold italic">Eye-Level Gift Shelf</option>
                    <option value="Checkout Counter Space" className="text-[#B8913A] font-semibold italic">Checkout Counter Space</option>
                    <option value="Glass Showcase Cabinet" className="text-[#B8913A] font-semibold italic">Glass Showcase Cabinet</option>
                    <option value="Tabletop Display" className="text-[#B8913A] font-semibold italic">Tabletop Display</option>
                    <option value="Entrance & Window Display" className="text-[#B8913A] font-semibold italic">Entrance & Window Display</option>
                    <option value="Custom Space" className="text-[#B8913A] font-semibold italic">Custom Space</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Display Space Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small — Up to 2×1 ft"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#B8913A] font-semibold italic outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                  >
                    <option value="Small — Up to 2×1 ft" className="text-[#B8913A] font-semibold italic">Small — Up to 2×1 ft</option>
                    <option value="Medium — Up to 3×2 ft" className="text-[#B8913A] font-semibold italic">Medium — Up to 3×2 ft</option>
                    <option value="Large — Up to 5×2 ft" className="text-[#B8913A] font-semibold italic">Large — Up to 5×2 ft</option>
                    <option value="Countertop" className="text-[#B8913A] font-semibold italic">Countertop</option>
                    <option value="Custom" className="text-[#B8913A] font-semibold italic">Custom</option>
                  </select>
                </div>
              </div>
            )}

            {/* Gift Entrepreneur Category, Space & Size Fields */}
            {role === "wellness" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="category">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category || initialSearchValues?.category || "Handmade Gifts & Crafts"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#740202] outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                    >
                      <option value="Handmade Gifts & Crafts" className="text-[#740202]">Handmade Gifts & Crafts</option>
                      <option value="Personalized Gifts & Custom Products" className="text-[#740202]">Personalized Gifts & Custom Products</option>
                      <option value="Stationery & Journaling" className="text-[#740202]">Stationery & Journaling</option>
                      <option value="Home Decor & Lifestyle Gifts" className="text-[#740202]">Home Decor & Lifestyle Gifts</option>
                      <option value="Jewellery, Accessories & Fashion Gifts" className="text-[#740202]">Jewellery, Accessories & Fashion Gifts</option>
                      <option value="Kids Gifts, Toys & Creative Products" className="text-[#740202]">Kids Gifts, Toys & Creative Products</option>
                      <option value="Artisanal Products" className="text-[#740202]">Artisanal Products</option>
                      <option value="Other Gift Products" className="text-[#740202]">Other Gift Products</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="requiredSpace">
                      Available Display Space Type
                    </label>
                    <select
                      id="requiredSpace"
                      name="requiredSpace"
                      value={formData.requiredSpace || initialSearchValues?.spaceType || "Gift Shop Counter Display"}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#B8913A] font-semibold italic outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                    >
                      <option value="Gift Shop Counter Display" className="text-[#B8913A] font-semibold italic">Gift Shop Counter Display</option>
                      <option value="Eye-Level Gift Shelf" className="text-[#B8913A] font-semibold italic">Eye-Level Gift Shelf</option>
                      <option value="Checkout Counter Space" className="text-[#B8913A] font-semibold italic">Checkout Counter Space</option>
                      <option value="Glass Showcase Cabinet" className="text-[#B8913A] font-semibold italic">Glass Showcase Cabinet</option>
                      <option value="Tabletop Display" className="text-[#B8913A] font-semibold italic">Tabletop Display</option>
                      <option value="Entrance & Window Display" className="text-[#B8913A] font-semibold italic">Entrance & Window Display</option>
                      <option value="Custom Space" className="text-[#B8913A] font-semibold italic">Custom Space</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="rackSize">
                    Display Space Size
                  </label>
                  <select
                    id="rackSize"
                    name="rackSize"
                    value={formData.rackSize || initialSearchValues?.rackSize || "Small — Up to 2×1 ft"}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#B8913A] font-semibold italic outline-none transition focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
                  >
                    <option value="Small — Up to 2×1 ft" className="text-[#B8913A] font-semibold italic">Small — Up to 2×1 ft</option>
                    <option value="Medium — Up to 3×2 ft" className="text-[#B8913A] font-semibold italic">Medium — Up to 3×2 ft</option>
                    <option value="Large — Up to 5×2 ft" className="text-[#B8913A] font-semibold italic">Large — Up to 5×2 ft</option>
                    <option value="Countertop" className="text-[#B8913A] font-semibold italic">Countertop</option>
                    <option value="Custom" className="text-[#B8913A] font-semibold italic">Custom</option>
                  </select>
                </div>
              </div>
            )}

            {/* Message Field */}
            <div>
              <label className="block text-xs font-bold text-[#740202] uppercase tracking-wider mb-1.5" htmlFor="message">
                Short Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your available gift shop space, product category, rental preference, or any additional requirements..."
                className="w-full rounded-xl border border-[#F0E2E4] bg-[#FFFDF5] px-4 py-3 text-[#1F1F1F] outline-none transition placeholder:text-[#5F5F5F]/70 focus:border-[#740202] focus:ring-4 focus:ring-[#FFFBCC] text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3.5 px-6 font-extrabold text-base shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Submit & Continue on WhatsApp</span>
              </button>

              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xs text-[#1F1F1F] text-center mt-3 flex items-center justify-center gap-1 font-medium"
              >
                <AlertCircle className="w-3.5 h-3.5 text-[#740202]" />
                <span>Your information is used only to respond to your gift shop space enquiry.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
