"use client";

import React, { useState, use } from "react";
import {
  Filter,
  Star,
  Heart,
  MapPin,
  ArrowUpDown,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// --- 1. DATA CONSTANTS ---

const TUNISIAN_GOVERNORATES = [
  "Ariana",
  "Béja",
  "Ben Arous",
  "Bizerte",
  "Gabès",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kebili",
  "Kef",
  "Mahdia",
  "Manouba",
  "Medenine",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Tozeur",
  "Tunis",
  "Zaghouan",
];

const EVENT_TYPES = [
  "Soirée jeune",
  "EVJF",
  "Anniversaire",
  "Mariage",
  "Lancement de produit",
  "Événement professionnel",
];

const CATEGORY_FILTERS = [
  { label: "Lieu de l'événement", value: "venues" },
  { label: "Restauration", value: "catering" },
  { label: "Ambiance & Animation", value: "music" },
  { label: "Décoration", value: "decor" },
  { label: "Photographie", value: "photography" }, // Added for completeness
];

// --- 2. MOCK DATA GENERATOR ---
const getMockListings = (category) => {
  const images = {
    venues:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
    catering:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800",
    default:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
  };

  return Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title:
      category === "venues"
        ? `Espace ${i + 1} - Luxury`
        : `Service Pro ${i + 1}`,
    location: TUNISIAN_GOVERNORATES[i % TUNISIAN_GOVERNORATES.length],
    price: (i + 1) * 200 + 500,
    rating: (4.0 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 100),
    tags: i % 3 === 0 ? ["Superhost"] : [],
    image: images[category] || images.default,
  }));
};

export default function CategoryPage({ params }) {
  const { category } = use(params);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const listings = getMockListings(category);
  const title = category.charAt(0).toUpperCase() + category.slice(1);

  // State for collapsible sections
  const [openSections, setOpenSections] = useState({
    eventType: true,
    categories: true,
    governorates: true,
    status: true,
    budget: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 border-b border-gray-200 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Link
                href="/marketplace"
                className="hover:text-orange-600 transition-colors"
              >
                Marketplace
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium capitalize">
                {title}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight capitalize">
              {title} in Tunisia
            </h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Found {listings.length} verified listings.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:border-gray-300 transition-all shadow-sm">
              <ArrowUpDown className="w-4 h-4" />{" "}
              <span className="hidden sm:inline">Trier par:</span> Recommandé
            </button>

            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-bold shadow-md"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* --- SIDEBAR FILTERS (Custom UI) --- */}
          <aside className="hidden lg:block w-72 flex-shrink-0 space-y-8">
            {/* 1. Event Type */}
            <div className="border-b border-gray-100 pb-6">
              <button
                onClick={() => toggleSection("eventType")}
                className="flex items-center justify-between w-full font-bold text-lg mb-4 text-gray-900 hover:text-orange-600 transition-colors"
              >
                Type d'événement
                {openSections.eventType ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {openSections.eventType && (
                <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
                  {EVENT_TYPES.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-orange-500 transition-colors bg-white relative">
                        <input
                          type="checkbox"
                          className="peer appearance-none absolute inset-0 cursor-pointer"
                        />
                        <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 bg-orange-500 w-full h-full rounded transition-all" />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Categories (Accordion Style) */}
            <div className="border-b border-gray-100 pb-6">
              <button
                onClick={() => toggleSection("categories")}
                className="flex items-center justify-between w-full font-bold text-lg mb-4 text-gray-900 hover:text-orange-600 transition-colors"
              >
                Catégories
                {openSections.categories ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {openSections.categories && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
                  {CATEGORY_FILTERS.map((cat) => (
                    <div
                      key={cat.value}
                      className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                    >
                      <button className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                        {cat.label}
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Governorats (Scrollable List) */}
            <div className="border-b border-gray-100 pb-6">
              <button
                onClick={() => toggleSection("governorates")}
                className="flex items-center justify-between w-full font-bold text-lg mb-4 text-gray-900 hover:text-orange-600 transition-colors"
              >
                Gouvernorats
                {openSections.governorates ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {openSections.governorates && (
                <div className="relative animate-in slide-in-from-top-2 duration-200">
                  {/* Scrollable Container */}
                  <div className="max-h-48 overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                    {TUNISIAN_GOVERNORATES.map((city) => (
                      <label
                        key={city}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-orange-500 transition-colors bg-white relative">
                          <input
                            type="checkbox"
                            className="peer appearance-none absolute inset-0 cursor-pointer"
                          />
                          <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 bg-orange-500 w-full h-full rounded transition-all" />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">
                          {city}
                        </span>
                      </label>
                    ))}
                  </div>
                  {/* Fade effect at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                </div>
              )}
            </div>

            {/* 4. Status */}
            <div className="border-b border-gray-100 pb-6">
              <button
                onClick={() => toggleSection("status")}
                className="flex items-center justify-between w-full font-bold text-lg mb-4 text-gray-900 hover:text-orange-600 transition-colors"
              >
                Statut
                {openSections.status ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {openSections.status && (
                <div className="animate-in slide-in-from-top-2 duration-200">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="mt-0.5 w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-orange-500 transition-colors bg-white relative flex-shrink-0">
                      <input
                        type="checkbox"
                        className="peer appearance-none absolute inset-0 cursor-pointer"
                      />
                      <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 bg-orange-500 w-full h-full rounded transition-all" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 block">
                        Prestataire(s) vérifié(s)
                      </span>
                      <span className="inline-block mt-1 bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Recommandé
                      </span>
                    </div>
                  </label>
                </div>
              )}
            </div>

            {/* 5. Budget (Range) */}
            <div>
              <button
                onClick={() => toggleSection("budget")}
                className="flex items-center justify-between w-full font-bold text-lg mb-4 text-gray-900 hover:text-orange-600 transition-colors"
              >
                Budget (TND)
                {openSections.budget ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {openSections.budget && (
                <div className="space-y-4 animate-in slide-in-from-top-2 duration-200">
                  <div className="flex justify-between text-sm text-gray-500 font-medium">
                    <span>0 TND</span>
                    <span>500 000 TND</span>
                  </div>

                  {/* Fake Slider Visual */}
                  <div className="relative h-2 bg-gray-200 rounded-full">
                    <div className="absolute left-0 right-0 h-full bg-gray-800 rounded-full opacity-20"></div>{" "}
                    {/* Inactive track */}
                    <div className="absolute left-0 w-1/2 h-full bg-gray-900 rounded-full"></div>{" "}
                    {/* Active track demo */}
                    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-white rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <label className="text-xs text-gray-500 mb-1 block">
                        Minimum
                      </label>
                      <input
                        type="number"
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-gray-900 outline-none"
                        defaultValue={0}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-xs text-gray-500 mb-1 block">
                        Maximum
                      </label>
                      <input
                        type="number"
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-gray-900 outline-none"
                        defaultValue={500000}
                      />
                    </div>
                  </div>

                  <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors">
                    Effacer les filtres
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* --- RESULTS GRID --- */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {listings.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white/70 backdrop-blur-md rounded-full hover:bg-white text-gray-700 hover:text-red-500 transition-all shadow-sm z-10">
                      <Heart className="w-4 h-4" />
                    </button>
                    {item.tags.includes("Superhost") && (
                      <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold text-gray-900 uppercase tracking-wide shadow-sm flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />{" "}
                        Superhost
                      </span>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-orange-600 transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                        <Star className="w-3.5 h-3.5 fill-black" />{" "}
                        {item.rating}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />{" "}
                      {item.location}
                    </p>

                    <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-lg font-bold text-gray-900">
                        {item.price}{" "}
                        <span className="text-xs font-normal text-gray-500">
                          TND
                        </span>
                      </p>
                      <button className="text-sm font-semibold text-gray-900 underline decoration-gray-300 hover:decoration-orange-500 hover:text-orange-600 transition-all">
                        Voir détails
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-white border border-gray-300 rounded-full font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-900 transition-all shadow-sm">
                Charger plus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FILTERS DRAWER */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[2000] backdrop-blur-sm lg:hidden flex justify-end"
            onClick={() => setIsMobileFilterOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full sm:w-[400px] h-full bg-white p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8 sticky top-0 bg-white z-10 pb-4 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Filtres</h2>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Reuse the desktop sidebar content here for mobile logic */}
              <div className="space-y-8 pb-20">
                {/* Simply copying event types for demo */}
                <div>
                  <h3 className="font-bold mb-4">Type d'événement</h3>
                  <div className="space-y-3">
                    {EVENT_TYPES.map((t) => (
                      <label key={t} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />{" "}
                        <span>{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 left-0 w-full bg-white pt-4 pb-2 border-t border-gray-100">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-colors"
                >
                  Afficher {listings.length} Résultats
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
