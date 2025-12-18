"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Store, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated Icon/Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block">
            <h1 className="text-9xl font-black text-gray-200">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🤔</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
            Oops! This party doesn't exist.
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            The page you are looking for might have been moved, deleted, or
            possibly never existed.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Back to Home */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold hover:border-orange-200 hover:text-orange-600 hover:shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          {/* Go to Marketplace */}
          <Link
            href="/marketplace"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-200/50 transition-all"
          >
            <Store className="w-4 h-4" />
            Browse Marketplace
          </Link>
        </motion.div>

        {/* Helper Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-400">
            Looking for something specific?
            <Link
              href="/marketplace"
              className="text-orange-600 hover:underline ml-1 font-medium"
            >
              Search the marketplace
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
