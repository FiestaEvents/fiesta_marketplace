"use client";

// We don't need to import Navbar/Footer here because RootLayout handles them.
// We just define the background color.

export default function MarketplaceLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>{children}</main>
    </div>
  );
}
