"use client";

import React, { use } from "react";
import Image from "next/image";
import {
  Star,
  MapPin,
  Heart,
  Share2,
  Shield,
  Check,
  ChevronRight,
  Calendar,
  Flag,
} from "lucide-react";

export default function ListingDetailsPage({ params }) {
  const { slug } = use(params);

  // Format slug back to title for display (e.g. "carthage-luxury-villa" -> "Carthage Luxury Villa")
  const displayTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  // Mock Data
  const listing = {
    title: displayTitle,
    location: "5 Rue Dar El Jeld, Tunis Medina",
    rating: 4.92,
    reviews: 128,
    price: "5,000",
    unit: "TND",
    description:
      "Experience the magic of the Medina in this restored 18th-century palace. Perfect for intimate weddings and high-end corporate dinners. Our venue combines traditional Tunisian architecture with modern luxury amenities.",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
      "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800",
      "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800",
    ],
    amenities: [
      "Valet Parking",
      "Catering Kitchen",
      "Sound System",
      "Bridal Suite",
      "Wifi",
      "Security",
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            {listing.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1 font-bold text-gray-900">
              <Star className="w-4 h-4 fill-black" /> {listing.rating}
            </span>
            <span className="underline cursor-pointer">
              {listing.reviews} reviews
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {listing.location}
            </span>
            <div className="ml-auto flex gap-4">
              <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors underline">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors underline">
                <Heart className="w-4 h-4" /> Save
              </button>
            </div>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 relative">
          <div className="md:col-span-2 row-span-2 relative cursor-pointer hover:opacity-95 transition-opacity bg-gray-200">
            <Image
              src={listing.images[0]}
              alt="Main"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative cursor-pointer hover:opacity-95 transition-opacity bg-gray-200">
            <Image
              src={listing.images[1]}
              alt="View 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative cursor-pointer hover:opacity-95 transition-opacity bg-gray-200">
            <Image
              src={listing.images[2]}
              alt="View 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative cursor-pointer hover:opacity-95 transition-opacity bg-gray-200">
            <Image
              src={listing.images[3]}
              alt="View 4"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative cursor-pointer hover:opacity-95 transition-opacity bg-gray-200">
            <Image
              src={listing.images[4]}
              alt="View 5"
              fill
              className="object-cover"
            />
            <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:scale-105 transition-transform">
              Show all photos
            </button>
          </div>
        </div>

        {/* CONTENT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: INFO */}
          <div className="lg:col-span-2 space-y-10">
            {/* Host Info */}
            <div className="flex justify-between items-center border-b border-gray-200 pb-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Entire venue hosted by Fiesta Partners
                </h2>
                <p className="text-gray-500">
                  200 Guests • 3 Halls • 4 Bathrooms
                </p>
              </div>
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl">
                FP
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6 border-b border-gray-200 pb-8">
              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="font-bold text-gray-900">Verified Listing</h3>
                  <p className="text-gray-500 text-sm">
                    This venue has been physically inspected by Fiesta agents.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Calendar className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    Free cancellation for 48 hours
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Get a full refund if you change your mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-4">About this place</h2>
              <p className="text-gray-600 leading-relaxed">
                {listing.description}
              </p>
              <button className="mt-4 flex items-center gap-1 font-bold underline">
                Show more <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Amenities */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-6">
                What this place offers
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <Check className="w-5 h-5 text-gray-400" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: STICKY BOOKING CARD */}
          <div className="relative">
            <div className="sticky top-32 border border-gray-200 rounded-2xl p-6 shadow-xl bg-white">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-2xl font-bold">
                    {listing.price} {listing.unit}
                  </span>
                  <span className="text-gray-500 text-sm"> / day</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-black" /> {listing.rating}
                </div>
              </div>

              {/* Date Inputs */}
              <div className="grid grid-cols-2 border border-gray-300 rounded-xl mb-4 overflow-hidden">
                <div className="p-3 border-r border-gray-300">
                  <label className="block text-[10px] font-bold uppercase text-gray-500">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full text-sm outline-none bg-transparent"
                  />
                </div>
                <div className="p-3">
                  <label className="block text-[10px] font-bold uppercase text-gray-500">
                    Guests
                  </label>
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full text-sm outline-none bg-transparent"
                  />
                </div>
              </div>

              <button className="w-full bg-orange-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-orange-700 transition-transform active:scale-95 mb-4">
                Request Quote
              </button>

              <p className="text-center text-xs text-gray-500 mb-6">
                You won&apos;t be charged yet
              </p>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span className="underline">Venue Fee</span>
                  <span>{listing.price} TND</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="underline">Service Fee</span>
                  <span>150 TND</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>5,150 TND</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2 text-gray-400 text-sm">
              <Flag className="w-4 h-4" /> Report this listing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
