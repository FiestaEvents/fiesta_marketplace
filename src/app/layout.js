import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ClientProviders from "./ClientProviders";

export const metadata = {
  title: "Fiesta - Venue Management System & Marketplace",
  description:
    "The all-in-one platform for venues & wedding planning in Tunisia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <ClientProviders>
          {/* <--- Wrap everything here */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
