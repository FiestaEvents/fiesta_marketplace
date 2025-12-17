"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Menu,
  X,
  Store,
  Search,
  MapPin,
  Calendar as CalIcon,
  ArrowRight,
  User,
} from "lucide-react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // LOGIC: Differentiate between the Main Marketplace Home (Dark Hero) and Inner Pages (White Background)
  const isMarketplaceHome = pathname === "/marketplace";
  const isMarketplaceInner =
    pathname?.startsWith("/marketplace") && pathname !== "/marketplace";
  const isMarketplace = isMarketplaceHome || isMarketplaceInner;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id, path = "/") => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      window.location.href = `${path}#${id}`;
    }
  };

  const handlePageNavigation = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  // --- DYNAMIC STYLES ---

  // 1. Background Logic
  let navBackground = "bg-transparent py-4"; // Default Landing Top

  if (isMarketplaceInner) {
    // Inner pages (Category/Details): ALWAYS White, solid, sticky
    navBackground =
      "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2";
  } else if (scrolled) {
    // Scrolled state (Landing or Market Home): White
    navBackground = "bg-white/95 backdrop-blur-md shadow-md py-2";
  }

  // 2. Text Color Logic
  // White text ONLY on Marketplace Home at the top. Everyone else gets Gray/Black.
  const useWhiteText = isMarketplaceHome && !scrolled;

  const textColor = useWhiteText ? "text-white" : "text-gray-700";
  const hoverColor = useWhiteText
    ? "hover:text-orange-200"
    : "hover:text-orange-600";
  const logoFilter = useWhiteText ? "brightness-0 invert" : "";
  const searchBarBg = useWhiteText
    ? "bg-white/90 backdrop-blur-md border-transparent"
    : "bg-gray-100 border-gray-200";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-999 transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 gap-8">
          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer z-1000 shrink-0 transition-opacity hover:opacity-80"
            onClick={() =>
              handlePageNavigation(isMarketplace ? "/marketplace" : "/")
            }
          >
            <Image
              src="/fiesta-logo-01.png"
              alt="Fiesta"
              width={100}
              height={40}
              className={`object-contain transition-all duration-300 ${logoFilter}`}
              priority
            />
          </div>

          {/* CENTER CONTENT */}
          {isMarketplace ? (
            <div className="hidden md:flex flex-1 max-w-xl mx-auto transition-all duration-300">
              <div
                className={`w-full rounded-full border flex items-center p-1.5 transition-all group shadow-sm focus-within:shadow-md focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-100 ${searchBarBg}`}
              >
                <div className="pl-4 pr-2 text-gray-400">
                  <Search className="w-4 h-4 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search venues, catering..."
                  className="flex-1 bg-transparent text-sm outline-none text-gray-800 placeholder:text-gray-400"
                />
                <div className="hidden lg:flex items-center border-l border-gray-300 mx-2 pl-3 pr-2 text-gray-500 text-xs font-medium cursor-pointer hover:text-gray-800">
                  <MapPin className="w-3 h-3 mr-1" />
                  Tunis
                </div>
                <button className="bg-orange-600 text-white rounded-full p-2 hover:bg-orange-700 transition-transform hover:scale-105 active:scale-95">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              <button
                onClick={() => handleNavClick("venue-system")}
                className={`${textColor} ${hoverColor} font-medium text-sm transition-colors`}
              >
                Venue System
              </button>
              <button
                onClick={() => handleNavClick("features")}
                className={`${textColor} ${hoverColor} font-medium text-sm transition-colors`}
              >
                {t("landing.nav.features")}
              </button>
              <button
                onClick={() => handlePageNavigation("/marketplace")}
                className={`${textColor} ${hoverColor} font-medium text-sm transition-colors flex items-center gap-1.5`}
              >
                <Store className="w-4 h-4" />
                {t("landing.nav.marketplace")}
              </button>
            </div>
          )}

          {/* RIGHT ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative z-1000">
              <LanguageSwitcher />
            </div>

            {isMarketplace ? (
              <>
                <button
                  onClick={() => handlePageNavigation("/")}
                  className={`text-sm font-semibold transition-colors px-2 ${textColor} ${hoverColor}`}
                >
                  List your business
                </button>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 ${
                    useWhiteText
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  <User className="w-4 h-4" />
                  Sign In
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavClick("contact")}
                className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition-all font-medium text-sm shadow-md"
              >
                {t("landing.nav.contact")}
              </button>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 z-1000 ${textColor}`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu logic remains same... */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4">
          {/* ... Content ... */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
