"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Stethoscope,
  Scissors,
  Building2,
  GraduationCap,
  Laptop,
  Briefcase,
  UserCheck,
  Dumbbell,
  Gem,
  Scale,
  HardHat,
  BookOpen,
  ShoppingBag,
  Trees,
  HeartPulse,
} from "lucide-react";

const categories = [
  { Icon: UtensilsCrossed, label: "Restaurants" },
  { Icon: Stethoscope, label: "Clinics" },
  { Icon: Scissors, label: "Salons" },
  { Icon: Building2, label: "Hotels" },
  { Icon: GraduationCap, label: "Schools" },
  { Icon: Laptop, label: "Startups" },
  { Icon: Briefcase, label: "Agencies" },
  { Icon: UserCheck, label: "Consultants" },
  { Icon: Dumbbell, label: "Gyms" },
  { Icon: Gem, label: "Jewelers" },
  { Icon: Scale, label: "Law Firms" },
  { Icon: HardHat, label: "Architects" },
  { Icon: BookOpen, label: "Coaching" },
  { Icon: ShoppingBag, label: "Retail Stores" },
  { Icon: Trees, label: "Resorts" },
  { Icon: HeartPulse, label: "Doctors" },
];

export default function TrustedBy() {
  const doubled = [...categories, ...categories];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2"
        >
          Trusted By
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
        >
          Businesses Across Every Industry
        </motion.h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Use CSS class from globals.css instead of <style jsx> */}
        <div className="marquee-track">
          {doubled.map((cat, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors duration-200 cursor-default"
            >
              <cat.Icon className="w-5 h-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {cat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
