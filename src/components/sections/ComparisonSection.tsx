"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { feature: "Setup Cost",       sitepods: "Zero",          freelancer: "₹20,000–₹1 Lakh", wix: "Zero" },
  { feature: "Monthly Cost",     sitepods: "₹499/mo",       freelancer: "₹2,000+ (hosting + fixes)", wix: "₹1,200–₹3,000/mo" },
  { feature: "Hosting Included", sitepods: true,            freelancer: false,                wix: true },
  { feature: "SSL Certificate",  sitepods: true,            freelancer: "Extra cost",         wix: true },
  { feature: "Maintenance",      sitepods: true,            freelancer: "You pay extra",      wix: "DIY only" },
  { feature: "Mobile Responsive",sitepods: true,            freelancer: "Depends on dev",    wix: true },
  { feature: "SEO Ready",        sitepods: true,            freelancer: "Depends on dev",    wix: "Basic only" },
  { feature: "Delivery Time",    sitepods: "7 Days",        freelancer: "30–90 Days",         wix: "You do it yourself" },
  { feature: "Ongoing Support",  sitepods: true,            freelancer: false,                wix: "Community only" },
  { feature: "Content Updates",  sitepods: true,            freelancer: "Paid per change",    wix: "DIY only" },
];

type CellValue = string | boolean;

function Cell({ val, highlight }: { val: CellValue; highlight?: boolean }) {
  if (val === true)
    return (
      <div className={`flex justify-center ${highlight ? "text-white" : "text-green-500"}`}>
        <Check className="w-5 h-5" strokeWidth={2.5} />
      </div>
    );
  if (val === false)
    return (
      <div className="flex justify-center text-red-400">
        <X className="w-5 h-5" strokeWidth={2.5} />
      </div>
    );
  return (
    <span className={`text-sm font-medium text-center block ${highlight ? "text-white" : "text-gray-700 dark:text-gray-300"}`}>
      {val}
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4"
          >
            Why SitePods?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            SitePods vs{" "}
            <span className="gradient-text">The Alternatives</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto"
          >
            See why hundreds of Indian businesses chose SitePods over hiring a freelancer or using DIY builders.
          </motion.p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl"
        >
          {/* Column headers */}
          <div className="grid grid-cols-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="p-5 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Feature
            </div>
            <div className="p-5 text-center bg-gradient-to-b from-indigo-600 to-purple-700 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-green-400 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                  BEST VALUE
                </span>
              </div>
              <div className="text-white font-extrabold text-base">SitePods</div>
              <div className="text-indigo-200 text-xs mt-0.5">from ₹499/mo</div>
            </div>
            <div className="p-5 text-center">
              <div className="font-bold text-gray-900 dark:text-white text-base">Freelancer</div>
              <div className="text-gray-400 text-xs mt-0.5">one-time + ongoing</div>
            </div>
            <div className="p-5 text-center">
              <div className="font-bold text-gray-900 dark:text-white text-base">Wix / Squarespace</div>
              <div className="text-gray-400 text-xs mt-0.5">DIY builder</div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 border-b border-gray-100 dark:border-gray-800 last:border-0 ${
                i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/50"
              }`}
            >
              <div className="p-4 text-sm text-gray-600 dark:text-gray-400 font-medium flex items-center">
                {row.feature}
              </div>
              <div className="p-4 bg-indigo-600/5 dark:bg-indigo-500/10 flex items-center justify-center">
                <Cell val={row.sitepods} highlight />
              </div>
              <div className="p-4 flex items-center justify-center">
                <Cell val={row.freelancer} />
              </div>
              <div className="p-4 flex items-center justify-center">
                <Cell val={row.wix} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
