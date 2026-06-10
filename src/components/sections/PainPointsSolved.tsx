"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pains = [
  {
    problem: "Freelancer charged ₹40,000+",
    problemDetail: "Paid a huge amount upfront, waited 2–3 months, and the site still had bugs. No support after delivery.",
    solution: "SitePods: ₹499/month",
    solutionDetail: "Zero setup fee. Site delivered in 7 days. Ongoing support is included in your subscription forever.",
    icon: "💸",
    color: "from-red-500 to-orange-500",
    solveColor: "from-green-500 to-emerald-600",
  },
  {
    problem: "DIY builders are too complex",
    problemDetail: "Wix, Squarespace need you to design, write content, manage SEO, and do everything yourself. It's a second job.",
    solution: "SitePods: We do it all",
    solutionDetail: "You focus on your business. We design, build, maintain, update, and optimise your website for you.",
    icon: "😤",
    color: "from-orange-500 to-amber-500",
    solveColor: "from-blue-500 to-indigo-600",
  },
  {
    problem: "Website goes down, no support",
    problemDetail: "Hosting breaks, SSL expires, the site shows errors — and you're stuck with no one to call at 11pm.",
    solution: "SitePods: Always managed",
    solutionDetail: "Hosting, SSL, backups, uptime monitoring — all handled by us, 24/7. One WhatsApp message and we're on it.",
    icon: "🔴",
    color: "from-rose-500 to-red-600",
    solveColor: "from-violet-500 to-purple-600",
  },
];

export default function PainPointsSolved() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-sm font-semibold mb-4"
          >
            Problems We Solve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Every Business Has Faced These{" "}
            <span className="gradient-text">3 Website Problems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto"
          >
            SitePods was built specifically to eliminate these pain points for Indian small businesses.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map(({ problem, problemDetail, solution, solutionDetail, icon, color, solveColor }, i) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900"
            >
              {/* Problem half */}
              <div className="p-6 border-b border-dashed border-gray-200 dark:border-gray-700">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-[11px] font-bold uppercase tracking-wide mb-2">
                  The Problem
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                  {problem}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {problemDetail}
                </p>
              </div>

              {/* Arrow divider */}
              <div className="flex justify-center -my-0.5">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm z-10">
                  <ArrowRight className="w-4 h-4 text-indigo-500 rotate-90" />
                </div>
              </div>

              {/* Solution half */}
              <div className="p-6 bg-indigo-50/60 dark:bg-indigo-900/10">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 text-[11px] font-bold uppercase tracking-wide mb-2">
                  SitePods Fix
                </div>
                <h3 className="text-base font-bold text-indigo-700 dark:text-indigo-300 mb-1.5">
                  {solution}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {solutionDetail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
