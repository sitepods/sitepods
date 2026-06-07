"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Globe, Code2, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MousePointerClick,
    title: "Choose Your Plan",
    description:
      "Pick the Starter, Growth, or Premium plan based on your business needs and budget.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    step: "02",
    icon: Globe,
    title: "Purchase Domain",
    description:
      "Buy your preferred domain name (we guide you through it) or use an existing one.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    step: "03",
    icon: Code2,
    title: "We Build Your Website",
    description:
      "Our team designs and develops your professional website — typically ready in 7 days.",
    color: "from-violet-500 to-purple-600",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch Your Business Online",
    description:
      "Your website goes live! We handle hosting, SSL, and ongoing maintenance — you focus on business.",
    color: "from-pink-500 to-rose-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            From Sign Up to{" "}
            <span className="gradient-text">Live Website</span> in 4 Steps
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900" style={{ left: '12.5%', right: '12.5%' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, icon: Icon, title, description, color }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-300 dark:border-indigo-700 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{i + 1}</span>
                  </div>
                </div>

                <div className="text-4xl font-black text-gray-100 dark:text-gray-800 mb-3 leading-none">
                  {step}
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
      </div>
    </section>
  );
}
