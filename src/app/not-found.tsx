"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowRight, MessageCircle, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const links = [
  { href: "/", label: "Back to Home", icon: Home },
  { href: "/pricing", label: "View Pricing", icon: ArrowRight },
  { href: "/contact", label: "Contact Us", icon: MessageCircle },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500/8 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/6 blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Floating icon */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center shadow-xl">
                  <Search className="w-10 h-10 text-indigo-500" strokeWidth={1.5} />
                </div>
                {/* Ping rings */}
                <span className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-indigo-400" />
              </div>
            </motion.div>

            {/* 404 heading */}
            <h1 className="text-[8rem] leading-none font-black gradient-text select-none mb-2">
              404
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Page Not Found
            </h2>

            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-md mx-auto">
              Looks like this page went on a vacation. It doesn&apos;t exist or
              may have been moved.
            </p>
          </motion.div>

          {/* CTA links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {links.map(({ href, label, icon: Icon }, i) => (
              <Link
                key={href}
                href={href}
                className={
                  i === 0
                    ? "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
                    : "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 glass-card hover:shadow-lg transition-all duration-200"
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
