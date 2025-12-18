"use client";

import React from "react";
import { Search, Bell, MessageSquare, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Left: Page Title or Breadcrumb (Optional) */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-gray-800 hidden md:block">
          Overview
        </h2>
      </div>

      {/* Middle: Global Search */}
      <div className="flex-1 max-w-xl mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search bookings, clients, invoices..."
            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Icons */}
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
          <MessageSquare className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Vertical Divider */}
        <div className="h-8 w-px bg-gray-200 mx-1"></div>

        {/* Profile Dropdown */}
        <button className="flex items-center gap-3 hover:bg-gray-50 p-1.5 pr-3 rounded-lg transition-colors">
          <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-700 font-bold text-sm">
            AM
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-bold text-gray-700 leading-none">
              Amine M.
            </p>
            <p className="text-xs text-gray-500 mt-0.5">Venue Manager</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </header>
  );
}
