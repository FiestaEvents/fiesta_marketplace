"use client";

import React from "react";
import Image from "next/image";
import {
  TrendingUp,
  Globe,
  ArrowRight,
  ShieldCheck,
  BarChart,
  ChevronDown,
} from "lucide-react";

export default function PartnerPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-orange-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-20 lg:pb-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-6">
              <span className="block text-orange-600 font-bold tracking-widest uppercase text-xs mb-6">
                For Business Owners
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-[0.95]">
                Scale your <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Business.</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200 -z-0"></span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-md font-light">
                Join the ecosystem defining the future of Tunisian events. From
                venues to honeymoon planners, we connect you with clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button
                  onClick={() =>
                    document
                      .getElementById("join-form")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gray-900 text-white px-8 py-4 font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-3 shadow-xl"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 px-4 py-4 border-l border-gray-200">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"
                      />
                    ))}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Trusted by <br />{" "}
                    <span className="text-gray-900">500+ Pros</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-6 relative h-[500px] lg:h-[600px] w-full">
              <div className="absolute top-0 right-0 w-[90%] h-[90%] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop"
                  alt="Elegant Venue"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[40%] bg-orange-600 z-20 p-8 text-white flex flex-col justify-between">
                <BarChart className="w-8 h-8 opacity-80" />
                <div>
                  <p className="text-3xl font-bold">+35%</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wide">
                    Revenue Growth
                  </p>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-full h-full border-2 border-gray-900 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE METRICS */}
      <section className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              {
                title: "Visibility",
                stat: "15k+",
                desc: "Monthly active planners",
              },
              {
                title: "Efficiency",
                stat: "10hrs",
                desc: "Saved per week on admin",
              },
              {
                title: "Network",
                stat: "50+",
                desc: "Business categories supported",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="py-12 md:px-12 text-center md:text-left hover:bg-gray-50 transition-colors cursor-default"
              >
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  {item.title}
                </p>
                <p className="text-4xl font-bold text-gray-900 mb-1">
                  {item.stat}
                </p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. APPLICATION FORM SECTION */}
      <section id="join-form" className="py-24 bg-gray-900 relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Copy */}
            <div className="text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">
                Partnership Application
              </h2>
              <p className="text-gray-400 text-lg mb-10 font-light">
                From aesthetic doctors to luxury car rentals, we curate the
                entire event ecosystem. Join the waiting list today.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/10">
                    <Globe className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Digital Storefront</h4>
                    <p className="text-sm text-gray-500">
                      Your own dedicated page with SEO optimization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/10">
                    <ShieldCheck className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Verified Badge</h4>
                    <p className="text-sm text-gray-500">
                      Stand out with the Fiesta guarantee seal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <p className="text-sm text-gray-500 mb-2">Already a partner?</p>
                <a
                  href="/auth/login"
                  className="text-white font-bold hover:text-orange-500 transition-colors inline-flex items-center gap-2"
                >
                  Log in to dashboard <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: The Form */}
            <div className="bg-white p-8 md:p-10 shadow-2xl border-t-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Business Details
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 py-2 focus:border-orange-500 outline-none transition-colors bg-transparent text-gray-900 placeholder-gray-300"
                      placeholder="e.g. Carthage Hall"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      City
                    </label>
                    <select className="w-full border-b border-gray-300 py-2 focus:border-orange-500 outline-none bg-transparent text-gray-900">
                      <option>Tunis</option>
                      <option>Sousse</option>
                      <option>Sfax</option>
                      <option>Hammamet</option>
                      <option>Djerba</option>
                      <option>Bizerte</option>
                      <option>Nabeul</option>
                    </select>
                  </div>
                </div>

                {/* EXTENSIVE CATEGORY LIST */}
                <div className="space-y-1 pt-2 relative">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Category
                  </label>
                  <div className="relative">
                    <select className="w-full border-b border-gray-300 py-2 pr-8 focus:border-orange-500 outline-none bg-transparent text-gray-900 appearance-none cursor-pointer">
                      <option value="" disabled defaultValue>
                        Select your industry...
                      </option>

                      <optgroup label="Venues & Spaces">
                        <option>Wedding Hall</option>
                        <option>Private Villa / Estate</option>
                        <option>Hotel Ballroom</option>
                        <option>Farm / Outdoor Space</option>
                      </optgroup>

                      <optgroup label="Food & Drinks">
                        <option>Catering (Traiteur)</option>
                        <option>Pastry & Cakes (Hlow)</option>
                        <option>Bartending & Drinks</option>
                        <option>Fine Dining Chef</option>
                      </optgroup>

                      <optgroup label="Beauty & Attire">
                        <option>Makeup Artist / Zianna</option>
                        <option>Hair Stylist</option>
                        <option>Wedding Dress Rental</option>
                        <option>Suits & Tuxedos</option>
                        <option>Jewelry</option>
                      </optgroup>

                      <optgroup label="Wellness & Health">
                        <option>Aesthetic Doctor</option>
                        <option>Spa & Hammam Center</option>
                        <option>Dermatologist</option>
                        <option>Fitness Coach</option>
                      </optgroup>

                      <optgroup label="Media & Entertainment">
                        <option>Photography</option>
                        <option>Videography</option>
                        <option>Band / Orchestre</option>
                        <option>DJ</option>
                        <option>Traditional Troop (Hadhra)</option>
                      </optgroup>

                      <optgroup label="Logistics & Planning">
                        <option>Wedding Planner</option>
                        <option>Luxury Car / Driver</option>
                        <option>Travel Agency (Honeymoon)</option>
                        <option>Furniture Rental</option>
                        <option>Decoration & Florist</option>
                      </optgroup>
                    </select>
                    {/* Custom Arrow Icon */}
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 py-2 focus:border-orange-500 outline-none transition-colors bg-transparent"
                    placeholder="manager@business.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border-b border-gray-300 py-2 focus:border-orange-500 outline-none transition-colors bg-transparent"
                    placeholder="+216"
                  />
                </div>

                <div className="pt-6">
                  <button className="w-full bg-gray-900 text-white font-bold py-4 hover:bg-orange-600 transition-all flex justify-center gap-2 group">
                    Submit Application
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    By submitting, you agree to our Partner Terms & Conditions.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
