"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap, TrendingUp, Crown, ArrowRight, Shield } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    icon: Zap,
    price: { monthly: 499, annual: 399 },
    description: "Perfect for small businesses just getting started online.",
    color: "from-blue-500 to-cyan-600",
    borderColor: "border-blue-200 dark:border-blue-900",
    featured: false,
    features: [
      "5 Page Website",
      "Mobile Responsive Design",
      "Contact Form",
      "WhatsApp Integration",
      "Hosting Included",
      "SSL Certificate",
      "Basic SEO Tags",
      "Email Support",
    ],
    notIncluded: [
      "Google Analytics",
      "Advanced SEO",
      "Blog Management",
      "Monthly Reports",
      "Priority Support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    icon: TrendingUp,
    price: { monthly: 999, annual: 799 },
    description: "Most popular for growing businesses that want more visibility.",
    color: "from-indigo-600 to-purple-600",
    borderColor: "border-indigo-400 dark:border-indigo-600",
    featured: true,
    features: [
      "Everything in Starter",
      "Up to 10 Pages",
      "Google Analytics Setup",
      "Google Search Console",
      "Basic SEO Setup",
      "Monthly Content Updates",
      "Performance Reports",
      "Priority Email Support",
    ],
    notIncluded: ["Advanced SEO", "Blog Management", "AI SEO", "Priority Phone Support"],
  },
  {
    id: "premium",
    name: "Premium",
    icon: Crown,
    price: { monthly: 1999, annual: 1599 },
    description: "Full-service solution for businesses serious about digital growth.",
    color: "from-purple-600 to-pink-600",
    borderColor: "border-purple-200 dark:border-purple-900",
    featured: false,
    features: [
      "Everything in Growth",
      "Unlimited Pages",
      "Advanced SEO Optimization",
      "Blog Management",
      "AI SEO Optimization",
      "Monthly Performance Reports",
      "Priority Phone & WhatsApp Support",
      "Dedicated Account Manager",
    ],
    notIncluded: [],
  },
];

const addons = [
  { name: "Extra Pages (per page)", price: "₹199/mo" },
  { name: "E-commerce Integration", price: "₹999/mo" },
  { name: "Logo Design", price: "₹1,999 one-time" },
  { name: "Social Media Kit", price: "₹499 one-time" },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4"
          >
            Simple Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Transparent Pricing,{" "}
            <span className="gradient-text">No Surprises</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Choose the plan that fits your business. All plans include hosting, SSL, and support. Cancel anytime.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                billing === "monthly"
                  ? "btn-gradient text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                billing === "annual"
                  ? "btn-gradient text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Annual
              <span className="text-xs bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map(({ id, name, icon: Icon, price, description, color, borderColor, featured, features, notIncluded }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className={`relative rounded-3xl border-2 ${borderColor} ${
                featured
                  ? "bg-gradient-to-b from-indigo-600 to-purple-700 shadow-2xl shadow-indigo-500/30 scale-105"
                  : "bg-white dark:bg-gray-900 shadow-sm hover:shadow-md"
              } transition-all duration-300`}
            >
              {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="badge-popular px-4 py-1.5 rounded-full text-white font-bold text-xs shadow-lg flex items-center gap-1.5">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-lg font-bold ${featured ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      {name}
                    </div>
                    <div className={`text-xs ${featured ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                      Plan
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-black ${featured ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      ₹{billing === "monthly" ? price.monthly : price.annual}
                    </span>
                    <span className={`text-sm ${featured ? "text-indigo-200" : "text-gray-400"}`}>/mo</span>
                  </div>
                  {billing === "annual" && (
                    <div className="text-sm text-green-400 font-medium mt-1">
                      Save ₹{(price.monthly - price.annual) * 12}/year
                    </div>
                  )}
                </div>

                <p className={`text-sm mb-6 ${featured ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                  {description}
                </p>

                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 mb-8 ${
                    featured
                      ? "bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg"
                      : "btn-gradient text-white"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Features */}
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        featured ? "bg-white/20" : "bg-green-100 dark:bg-green-900/30"
                      }`}>
                        <Check className={`w-3 h-3 ${featured ? "text-white" : "text-green-600 dark:text-green-400"}`} />
                      </div>
                      <span className={`text-sm ${featured ? "text-indigo-100" : "text-gray-700 dark:text-gray-300"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                  {notIncluded.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 opacity-40">
                      <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-400 text-xs">—</span>
                      </div>
                      <span className={`text-sm line-through ${featured ? "text-indigo-300" : "text-gray-400"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Optional Add-ons
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Enhance your plan with additional services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map(({ name, price }) => (
              <div
                key={name}
                className="p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800"
              >
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {name}
                </div>
                <div className="text-lg font-bold gradient-text">{price}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
            <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-left">
              <div className="font-bold text-green-800 dark:text-green-300">
                30-Day Satisfaction Guarantee
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">
                Not satisfied? Get a full refund within 30 days. No questions asked.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
