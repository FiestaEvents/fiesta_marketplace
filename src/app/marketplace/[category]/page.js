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
  Users,
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
  {
    label: "Lieu de l'événement",
    value: "venues",
    subcategories: [
      "Salle de fêtes",
      "Espace en plein air",
      "Hôtel",
      "Villa privée",
      "Ferme",
      "Bateau",
    ],
  },
  {
    label: "Restauration",
    value: "catering",
    subcategories: [
      "Traiteur salé",
      "Service de pâtisserie (sucré)",
      "Service de serveur",
      "Cocktails / Boissons",
      "Buffet",
      "Dîner servi",
    ],
  },
  {
    label: "Ambiance & Animation",
    value: "music",
    subcategories: [
      "DJ",
      "Orchestre",
      "Groupe musical",
      "Spectacle de danse",
      "Jeux de lumières",
    ],
  },
  {
    label: "Décoration",
    value: "decor",
    subcategories: [
      "Décoration florale",
      "Décoration de table",
      "Estrade mariés",
      "Éclairage d'ambiance",
    ],
  },
  {
    label: "Photographie & Vidéo",
    value: "photography",
    subcategories: ["Photographe", "Vidéaste", "Drone", "Studio mobile"],
  },
  {
    label: "Beauté & Bien-être",
    value: "beauty",
    subcategories: ["Coiffure", "Maquillage", "Spa & Massage", "Esthétique"],
  },
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

  return Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    // Titles are more realistic to generate good slugs
    title:
      category === "venues"
        ? `Carthage Luxury Villa ${i + 1}`
        : `Premium Service ${i + 1}`,
    location: TUNISIAN_GOVERNORATES[i % TUNISIAN_GOVERNORATES.length],
    price: (i + 1) * 200 + 500,
    unit: category === "venues" ? "TND" : "TND/p",
    rating: (4.0 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 100),
    tags: i % 3 === 0 ? ["Superhost"] : [],
    image: images[category] || images.default,
    capacity: category === "venues" ? "200-500 Guests" : null,
  }));
};

// --- 3. SUB-COMPONENTS ---

const CategoryAccordion = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
      >
        {category.label}
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="bg-white p-3 border-t border-gray-200 animate-in slide-in-from-top-1 duration-150">
          <label className="flex items-center gap-3 cursor-pointer group mb-3">
            <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-orange-500 transition-colors bg-white relative">
              <input
                type="checkbox"
                className="peer appearance-none absolute inset-0 cursor-pointer"
              />
              <Check className="size-full text-white opacity-0 peer-checked:opacity-100 bg-orange-500 rounded transition-all" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Tout sélectionner
            </span>
          </label>

          <div className="space-y-2 ml-1">
            {category.subcategories.map((sub) => (
              <label
                key={sub}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-orange-500 transition-colors bg-white relative">
                  <input
                    type="checkbox"
                    className="peer appearance-none absolute inset-0 cursor-pointer"
                  />
                  <Check className=" text-white opacity-0 peer-checked:opacity-100 bg-orange-500 size-full rounded transition-all" />
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-900">
                  {sub}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function CategoryPage({ params }) {
  const { category } = use(params);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const listings = getMockListings(category);
  const title = category.charAt(0).toUpperCase() + category.slice(1);

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
          {/* --- SIDEBAR FILTERS --- */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-8">
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
                        <Check className="size-full text-white opacity-0 peer-checked:opacity-100 bg-orange-500 rounded transition-all" />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Categories (Nested Accordion) */}
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
                <div className="relative animate-in slide-in-from-top-2 duration-200">
                  <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {CATEGORY_FILTERS.map((cat) => (
                      <CategoryAccordion key={cat.value} category={cat} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Governorats */}
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
                          <Check className="size-full text-white opacity-0 peer-checked:opacity-100 bg-orange-500  rounded transition-all" />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">
                          {city}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
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
                    <div className="mt-0.5 w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-orange-500 transition-colors bg-white relative shrink-0">
                      <input
                        type="checkbox"
                        className="peer appearance-none absolute inset-0 cursor-pointer"
                      />
                      <Check className="size-full text-white opacity-0 peer-checked:opacity-100 bg-orange-500 w-full h-full rounded transition-all" />
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

            {/* 5. Budget */}
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
                    <span>500k TND</span>
                  </div>

                  <div className="relative h-2 bg-gray-200 rounded-full">
                    <div className="absolute left-0 right-0 h-full bg-gray-800 rounded-full opacity-20"></div>
                    <div className="absolute left-0 w-1/2 h-full bg-gray-900 rounded-full"></div>
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
              {listings.map((item) => {
                // GENERATE SLUG
                const itemSlug = item.title.toLowerCase().replace(/ /g, "-");

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative aspect-4/3 bg-gray-100 overflow-hidden">
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

                      {item.capacity && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3 bg-gray-50 w-fit px-2 py-1 rounded-md">
                          <Users className="w-3 h-3" /> {item.capacity}
                        </div>
                      )}

                      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-lg font-bold text-gray-900">
                          {item.price}{" "}
                          <span className="text-xs font-normal text-gray-500">
                            {item.unit}
                          </span>
                        </p>
                        <Link
                          href={`/marketplace/${category}/${itemSlug}`}
                          className="text-sm font-semibold text-gray-900 underline decoration-gray-300 hover:decoration-orange-500 hover:text-orange-600 transition-all"
                        >
                          Voir détails
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-white border border-gray-300 rounded-full font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-900 transition-all shadow-sm">
                Charger plus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FILTERS DRAWER (Simple for now) */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-2000 backdrop-blur-sm lg:hidden flex justify-end"
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
              {/* Add mobile content reuse logic here if needed */}
              <p>Filtres mobiles...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
