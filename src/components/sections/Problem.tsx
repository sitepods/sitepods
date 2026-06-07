"use client";

import { motion } from "framer-motion";
import { DollarSign, Code2, Server, Wrench } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Expensive Development Costs",
    description:
      "Traditional web development costs ₹30,000–₹2,00,000 upfront. Most small businesses simply can't afford this.",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-900",
  },
  {
    icon: Code2,
    title: "Technical Complexity",
    description:
      "Building and managing a website requires technical skills most business owners don't have — and hiring is costly.",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-900",
  },
  {
    icon: Server,
    title: "Hosting Confusion",
    description:
      "Figuring out domains, hosting, SSL, DNS, and servers is overwhelming. One wrong move and your site goes down.",
    color: "from-yellow-500 to-orange-600",
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-yellow-200 dark:border-yellow-900",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance Issues",
    description:
      "Websites need constant updates, security patches, and backups. Without ongoing care, they break and become liabilities.",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-900",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 text-sm font-semibold mb-4"
          >
            The Problem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Why Most Businesses Still Don&apos;t Have a{" "}
            <span className="gradient-text">Professional Website</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            These are the four biggest barriers that stop business owners from
            going online — and we&apos;ve solved every single one.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map(({ icon: Icon, title, description, color, bg, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl ${bg} border ${border} card-hover overflow-hidden`}
            >
              {/* Background glow */}
              <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

              <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${color} items-center justify-center mb-5 shadow-lg`}>
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
