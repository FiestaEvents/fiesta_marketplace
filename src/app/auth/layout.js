"use client";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Branding */}
      <div className="hidden lg:flex flex-col justify-between bg-orange-50 p-12 relative overflow-hidden">
        <Link href="/">
          <Image
            src="/fiesta-logo.png"
            alt="Fiesta"
            width={120}
            height={50}
            className="relative z-10"
          />
        </Link>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Manage your events with confidence.
          </h2>
          <p className="text-gray-600 text-lg">
            Join thousands of venues and service providers transforming their
            business in Tunisia.
          </p>
        </div>
        {/* Abstract Circle Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[80%] bg-orange-200/50 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Right: Content */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
