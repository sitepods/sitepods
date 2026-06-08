"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Globe,
  Shield,
  Smartphone,
  Zap,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const features = [
  { icon: Check,       label: "Zero Setup Cost" },
  { icon: Globe,       label: "Hosting Included" },
  { icon: Shield,      label: "SSL Security" },
  { icon: Smartphone,  label: "Mobile Responsive" },
  { icon: TrendingUp,  label: "SEO Ready" },
  { icon: Zap,         label: "7-Day Delivery" },
];

type Props = {
  industryName: string;
  headline: string;
  subtext: string;
  benefits: string[];
  icon: LucideIcon;
  gradient: string;
};

export default function IndustryHero({
  industryName,
  headline,
  subtext,
  benefits,
  icon: Icon,
  gradient,
}: Props) {
  return (
    <section className="relative overflow-hidden hero-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-200/40 dark:bg-indigo-900/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-200/40 dark:bg-purple-900/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-28 pb-16 lg:pt-36 lg:pb-20">

          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 mb-5 shadow-sm"
            >
              <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <Icon className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                {industryName} Website Specialist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-[2rem] sm:text-[2.4rem] lg:text-[2.2rem] xl:text-[2.6rem] font-extrabold text-gray-900 dark:text-white leading-[1.2] tracking-tight mb-4"
            >
              {headline.split("SitePods").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="gradient-text">SitePods</span>
                  </span>
                ) : (
                  part
                )
              )}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-[0.95rem] text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-[520px]"
            >
              {subtext}
            </motion.p>

            {/* Industry-specific benefits */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="space-y-2 mb-6"
            >
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  {b}
                </li>
              ))}
            </motion.ul>

            {/* Feature chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-7"
            >
              {features.map(({ icon: FIcon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <FIcon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 truncate">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.34 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/pricing"
                className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-lg"
              >
                Get Started — ₹499/mo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors shadow-sm"
              >
                View Examples
              </Link>
            </motion.div>
          </div>

          {/* Right — illustration card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className={`w-64 h-64 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl`}>
              <Icon className="w-28 h-28 text-white/80" strokeWidth={1} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
