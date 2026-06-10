"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Setup Cost",        sitepods: "Zero",                    freelancer: "₹20,000–₹1 Lakh",           wix: "Zero" },
  { feature: "Monthly Cost",      sitepods: "₹499/mo",                 freelancer: "₹2,000+ (hosting + fixes)",  wix: "₹1,200–₹3,000/mo" },
  { feature: "Hosting Included",  sitepods: true,                      freelancer: false,                        wix: true },
  { feature: "SSL Certificate",   sitepods: true,                      freelancer: "Extra cost",                 wix: true },
  { feature: "Maintenance",       sitepods: true,                      freelancer: "You pay extra",              wix: "DIY only" },
  { feature: "Mobile Responsive", sitepods: true,                      freelancer: "Depends on dev",             wix: true },
  { feature: "SEO Ready",         sitepods: true,                      freelancer: "Depends on dev",             wix: "Basic only" },
  { feature: "Delivery Time",     sitepods: "7 Days",                  freelancer: "30–90 Days",                 wix: "You do it yourself" },
  { feature: "Ongoing Support",   sitepods: true,                      freelancer: false,                        wix: "Community only" },
  { feature: "Content Updates",   sitepods: true,                      freelancer: "Paid per change",            wix: "DIY only" },
];

type CellValue = string | boolean;

function Cell({ val, highlight }: { val: CellValue; highlight?: boolean }) {
  if (val === true)
    return (
      <div className={`flex justify-center ${highlight ? "text-indigo-600 dark:text-indigo-400" : "text-green-500"}`}>
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
    <span
      className={`text-sm font-medium text-center block leading-snug ${
        highlight
          ? "text-indigo-700 dark:text-indigo-300 font-semibold"
          : "text-gray-600 dark:text-gray-400"
      }`}
    >
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

        {/* Scrollable table wrapper for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0"
        >
          <div className="min-w-[540px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl">

            {/* Column headers */}
            <div className="grid grid-cols-4 border-b border-gray-200 dark:border-gray-800">
              <div className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide bg-gray-50 dark:bg-gray-900 flex items-center">
                Feature
              </div>
              {/* SitePods — highlighted header */}
              <div className="p-4 sm:p-5 text-center bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 flex flex-col items-center justify-center gap-1.5">
                <span className="bg-green-400 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow whitespace-nowrap">
                  BEST VALUE
                </span>
                <div className="text-white font-extrabold text-sm sm:text-base leading-tight">SitePods</div>
                <div className="text-blue-100 text-[11px]">from ₹499/mo</div>
              </div>
              <div className="p-4 sm:p-5 text-center bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
                <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base leading-tight">Freelancer</div>
                <div className="text-gray-400 text-[11px] mt-0.5">one-time + ongoing</div>
              </div>
              <div className="p-4 sm:p-5 text-center bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
                <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base leading-tight">Wix / Squarespace</div>
                <div className="text-gray-400 text-[11px] mt-0.5">DIY builder</div>
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
                {/* Feature label */}
                <div className="p-3 sm:p-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium flex items-center leading-snug">
                  {row.feature}
                </div>
                {/* SitePods value — soft indigo tint */}
                <div className="p-3 sm:p-4 bg-indigo-50/70 dark:bg-indigo-900/15 flex items-center justify-center">
                  <Cell val={row.sitepods} highlight />
                </div>
                <div className="p-3 sm:p-4 flex items-center justify-center">
                  <Cell val={row.freelancer} />
                </div>
                <div className="p-3 sm:p-4 flex items-center justify-center">
                  <Cell val={row.wix} />
                </div>
              </div>
            ))}

          </div>
        </motion.div>

        {/* Mobile hint */}
        <p className="text-center text-xs text-gray-400 mt-3 sm:hidden">
          Swipe left to see full comparison
        </p>
      </div>
    </section>
  );
}
