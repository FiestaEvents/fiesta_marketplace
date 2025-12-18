"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Store, Search, MapPin, ArrowRight, User } from "lucide-react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  // 1. ALL HOOKS MUST BE AT THE TOP
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. LOGIC VARIABLES
  const isAuthPage = pathname?.startsWith("/auth");

  const isMarketplaceHome = pathname === "/marketplace";
  const isMarketplaceInner =
    pathname?.startsWith("/marketplace") && pathname !== "/marketplace";
  const isMarketplace = isMarketplaceHome || isMarketplaceInner;
  const isDashboard = pathname?.startsWith("/dashboard");

  // 3. EARLY RETURN (MUST BE AFTER ALL HOOKS)
  if (isAuthPage || isDashboard) return null;

  // 4. HANDLERS
  const handleNavClick = (id, path = "/") => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      router.push(`${path}#${id}`);
    }
  };

  const handlePageNavigation = (path) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  // 5. DYNAMIC STYLES
  let navBackground = "bg-transparent py-4";

  if (isMarketplaceInner || isDashboard) {
    navBackground =
      "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2";
  } else if (scrolled) {
    navBackground = "bg-white/95 backdrop-blur-md shadow-md py-2";
  }

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
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 gap-8">
          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer z-[1000] shrink-0 transition-opacity hover:opacity-80"
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
          {isMarketplace || isDashboard ? (
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
                onClick={() => handlePageNavigation("/fiesta-venue")}
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
            <div className="relative z-[1000]">
              <LanguageSwitcher />
            </div>

            {isDashboard ? (
              <button
                onClick={() => handlePageNavigation("/dashboard")}
                className="flex items-center gap-2 text-gray-700 font-bold border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50"
              >
                <User className="w-4 h-4" />
                <span>Amine</span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => handlePageNavigation("/partner")}
                  className={`text-sm font-semibold transition-colors px-2 ${textColor} ${hoverColor}`}
                >
                  List your business
                </button>
                <button
                  onClick={() => handlePageNavigation("/auth/login")}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 ${
                    useWhiteText
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Sign In
                </button>
              </>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 z-[1000] ${textColor}`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {isDashboard ? (
            <button
              onClick={() => handlePageNavigation("/dashboard")}
              className="flex items-center gap-3 text-lg font-bold text-gray-900"
            >
              <User className="w-5 h-5" /> My Account
            </button>
          ) : (
            <button
              onClick={() => handlePageNavigation("/auth/login")}
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold"
            >
              Sign In
            </button>
          )}

          <button
            onClick={() => handlePageNavigation("/marketplace")}
            className="text-left font-medium p-2 hover:bg-gray-50 rounded-lg"
          >
            Marketplace
          </button>
          <button
            onClick={() => handlePageNavigation("/partner")}
            className="text-left font-medium p-2 text-orange-600 bg-orange-50 rounded-lg"
          >
            List your business
          </button>

          <div className="flex justify-center pt-2 border-t border-gray-100">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
