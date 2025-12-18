"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Heart,
  Settings,
  LogOut,
  MessageSquare,
  FileText,
  CreditCard,
} from "lucide-react";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: CalendarDays, label: "Bookings", href: "/dashboard/bookings" },
  { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
  { icon: Heart, label: "Saved Items", href: "/dashboard/saved" },
  { icon: FileText, label: "Invoices", href: "/dashboard/invoices" },
  { icon: CreditCard, label: "Payments", href: "/dashboard/payments" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
      {/* 1. FIXED SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col fixed inset-y-0 z-40">
        {/* Logo Area */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <Link href="/">
            <Image
              src="/fiesta-logo-01.png"
              alt="Fiesta"
              width={100}
              height={32}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-2">
            Menu
          </p>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                  isActive
                    ? "bg-orange-50 text-orange-700 shadow-sm ring-1 ring-orange-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isActive ? "text-orange-600" : "text-gray-400"
                  }`}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 w-full rounded-xl transition-colors text-sm font-medium">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      {/* Added lg:ml-64 to push content right on desktop to account for fixed sidebar */}
      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        {/* Specialized Dashboard Header */}
        <DashboardHeader />

        {/* Scrollable Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
