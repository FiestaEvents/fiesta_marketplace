"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Music,
  Utensils,
  Scissors,
  Star,
  Heart,
  ArrowRight,
  MapPin,
  Sparkles,
  Home,
  Flower2,
  Car,
  PartyPopper,
  Shirt,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Category Data
const categories = [
  {
    id: "venues",
    label: "Venues",
    sub: "Halls & Spaces",
    icon: Home,
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
  },
  {
    id: "catering",
    label: "Catering",
    sub: "Buffets & Dinners",
    icon: Utensils,
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800",
  },
  {
    id: "photography",
    label: "Photography",
    sub: "Capture Moments",
    icon: Camera,
    img: "https://images.unsplash.com/photo-1549981832-2ba2ee913334?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "beauty",
    label: "Beauty",
    sub: "Makeup & Hair",
    icon: Scissors,
    img: "https://images.unsplash.com/photo-1560869713-bf165a9cfac1?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "music",
    label: "Music",
    sub: "Live Bands & DJs",
    icon: Music,
    img: "https://images.unsplash.com/photo-1606405112653-809073e30efe?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "decor",
    label: "Decor",
    sub: "Flowers & Design",
    icon: Flower2,
    img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800",
  },
  {
    id: "transport",
    label: "Transport",
    sub: "Luxury Cars",
    icon: Car,
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800",
  },
  {
    id: "attire",
    label: "Attire",
    sub: "Suits & Dresses",
    icon: Shirt,
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800",
  },
  {
    id: "planning",
    label: "Planning",
    sub: "Event Planners",
    icon: PartyPopper,
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
  },
];

const featuredListings = [
  {
    id: 1,
    title: "Dar El Jeld",
    type: "Venue",
    rating: 4.9,
    reviews: 128,
    price: "5000 TND",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800",
    location: "Tunis Medina",
  },
  {
    id: 2,
    title: "Soffra Catering",
    type: "Catering",
    rating: 4.8,
    reviews: 85,
    price: "80 TND/p",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800",
    location: "Sousse",
  },
  {
    id: 3,
    title: "Amine Photography",
    type: "Photography",
    rating: 5.0,
    reviews: 42,
    price: "1200 TND",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
    location: "Tunis",
  },
  {
    id: 4,
    title: "Royal Car Rental",
    type: "Transport",
    rating: 4.7,
    reviews: 210,
    price: "400 TND",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800",
    location: "Hammamet",
  },
];

export default function MarketplaceHome() {
  const [startIndex, setStartIndex] = useState(0);

  // Responsive Configuration
  const itemsPerPage = 5; // Desktop
  const cardGap = 16; // 16px gap (gap-4)

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + 1 >= categories.length - (itemsPerPage - 1) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? categories.length - itemsPerPage : prev - 1
    );
  };

  return (
    <div className="pb-20 font-sans bg-gray-50">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            alt="Celebration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-gray-50/95" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto -mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-orange-300" />
              <span>The premier event marketplace in Tunisia</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
              Plan Your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-200 to-pink-300">
                Perfect Event
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
              Discover curated venues and top-rated service providers.{" "}
              <br className="hidden md:block" /> Verified quality, transparent
              pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY SLIDER - STABLE & CLEAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        <div className="flex justify-between items-end mb-6 px-2">
          <h2 className="text-xl font-bold text-white drop-shadow-md">
            Browse by Category
          </h2>

          {/* Navigation Controls - CLOSE TO CONTENT */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-100 text-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all active:scale-95 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-100 text-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all active:scale-95 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider Window */}
        <div className="overflow-hidden w-full pb-10 px-1">
          {/* Padding for shadows */}
          <motion.div
            className="flex gap-4"
            initial={false}
            animate={{ x: `-${startIndex * (100 / itemsPerPage)}%` }} // Move by percentage
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {categories.map((cat) => (
              <Link
                href={`/marketplace/${cat.id}`}
                key={cat.id}
                className="contents"
              >
                <div
                  key={cat.id}
                  className="shrink-0 w-[calc(20%-13px)] min-w-[200px]" // Dynamic width: 20% minus gap adjustment
                >
                  <div className="relative group h-80 rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/20 transition-transform duration-300 hover:-translate-y-2">
                    <Image
                      src={cat.img}
                      alt={cat.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute bottom-0 left-0 w-full p-5 text-center">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                        <cat.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        {cat.label}
                      </h3>
                      <p className="text-gray-300 text-xs uppercase tracking-wider group-hover:text-white transition-colors">
                        {cat.sub}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. TRENDING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-orange-600 font-bold text-sm tracking-wide uppercase">
              Top Rated
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Trending This Week
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium">
            View All Listings
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredListings.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  {item.rating}{" "}
                  <span className="text-gray-400 font-normal">
                    ({item.reviews})
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {item.location}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-medium">
                      {item.type}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {item.price}
                    </p>
                  </div>
                  <button className="p-2 rounded-full border border-gray-200 text-gray-400 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TRUST SIGNALS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-black text-gray-800">
              WEDDING<span className="text-orange-500">PRO</span>
            </div>
            <div className="text-2xl font-black text-gray-800">
              EVENT<span className="text-blue-500">TUNISIA</span>
            </div>
            <div className="text-2xl font-black text-gray-800">
              CARTHAGE<span className="text-purple-500">HALLS</span>
            </div>
            <div className="text-2xl font-black text-gray-800">
              LUXURY<span className="text-yellow-500">CATERING</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
