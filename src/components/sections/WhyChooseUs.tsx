"use client";

import { motion } from "framer-motion";
import {
  IndianRupee,
  Sparkles,
  Timer,
  Headphones,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

const reasons = [
  {
    icon: IndianRupee,
    title: "No Large Upfront Cost",
    description:
      "Start your online presence for just ₹499/month. No ₹50,000 development bills. Zero hidden fees.",
    color: "from-green-500 to-emerald-600",
    stat: "₹0 setup",
  },
  {
    icon: Sparkles,
    title: "Professional Design",
    description:
      "Premium-quality websites designed by experts to reflect your brand and convert visitors to customers.",
    color: "from-indigo-500 to-violet-600",
    stat: "100% custom",
  },
  {
    icon: Timer,
    title: "Fast Delivery",
    description:
      "Your website is live within 7 business days. We don't keep you waiting while your competitors grow.",
    color: "from-blue-500 to-cyan-600",
    stat: "7 days avg.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Dedicated support via WhatsApp, email, and phone. We're always available when you need us.",
    color: "from-orange-500 to-amber-600",
    stat: "24/7 support",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description:
      "Start with Starter, upgrade to Premium as your business grows. Your website grows with you.",
    color: "from-purple-500 to-pink-600",
    stat: "3 plan tiers",
  },
  {
    icon: BadgeCheck,
    title: "Affordable Pricing",
    description:
      "The most cost-effective way to have a professional web presence. Pay monthly, cancel anytime.",
    color: "from-teal-500 to-cyan-600",
    stat: "₹499/mo",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4"
          >
            Why SitePods
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Why 500+ Businesses{" "}
            <span className="gradient-text">Choose SitePods</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We&apos;re not just a website company — we&apos;re your long-term digital growth partner.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description, color, stat }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-indigo-200 dark:hover:border-indigo-800 card-hover"
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full">
                  {stat}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
