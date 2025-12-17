"use client";

import i18n from "@/lib/i18n";
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  // FIX: Derive isRTL directly. No useState or useEffect needed for this.
  const isRTL = language === "ar";

  useEffect(() => {
    // Only perform side effects here (DOM updates & Library updates)
    i18n.changeLanguage(language);
    document.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
