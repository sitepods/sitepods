"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Users } from "lucide-react";

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "₹499", label: "Starting/Month" },
  { value: "7 Days", label: "Avg. Delivery" },
  { value: "24/7", label: "Support" },
];

const highlights = [
  "Zero upfront cost",
  "Fully managed by us",
  "SEO-ready from day one",
  "Cancel anytime",
];

export default function WhySitePodsHero() {
  return (
    <section className="relative hero-bg py-20 sm:py-28 overflow-hidden">
      {/* bg blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-200/40 dark:bg-indigo-900/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-200/35 dark:bg-blue-900/15 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 mb-6 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            Trusted by 500+ Indian Businesses
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-5xl md:text-[3.2rem] font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-5"
        >
          The Smartest Way for{" "}
          <span className="gradient-text">Indian Businesses</span>{" "}
          to Get Online
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8"
        >
          No ₹50,000 upfront bills. No DIY headaches. Just a professionally built,
          fully managed website — delivered in 7 days from ₹499/month.
        </motion.p>

        {/* Highlight chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="flex flex-wrap justify-center gap-2.5 mb-8"
        >
          {highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-xs font-semibold text-gray-700 dark:text-gray-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
              {h}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Link
            href="/pricing"
            className="btn-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg"
          >
            View Plans &amp; Pricing <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors shadow-sm"
          >
            Book Free Consultation
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="text-center py-4 px-3 rounded-2xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 shadow-sm"
            >
              <div className="text-xl font-extrabold gradient-text">{value}</div>
              <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.52 }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <span className="font-bold text-gray-800 dark:text-gray-200">4.9/5</span> from 500+ happy businesses
          </span>
        </motion.div>
      </div>
    </section>
  );
}
