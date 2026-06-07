"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Server,
  Shield,
  MessageCircle,
  FormInput,
  Smartphone,
  Search,
  Headphones,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Website Design & Development",
    description: "Stunning, custom-designed websites tailored to your brand and industry.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Server,
    title: "Hosting Included",
    description: "Fast, reliable cloud hosting included in your plan. No extra fees.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "SSL Security",
    description: "Free SSL certificate for HTTPS on your domain. Keep visitors safe.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "One-click WhatsApp button so customers can reach you instantly.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: FormInput,
    title: "Contact Forms",
    description: "Professional lead capture forms with email notifications.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive Design",
    description: "Looks perfect on every screen — phones, tablets, and desktops.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Search,
    title: "SEO Ready Structure",
    description: "Built with Google in mind. Proper meta tags, sitemaps, and schema.",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Dedicated support team to help you with any website issue, fast.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: RefreshCw,
    title: "Monthly Updates",
    description: "Regular content updates, security patches, and performance improvements.",
    color: "from-teal-500 to-cyan-600",
  },
];

export default function Solution() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4"
          >
            The Solution
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Everything You Need In{" "}
            <span className="gradient-text">One Monthly Plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We handle everything from design to deployment so you can focus on running your business.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 card-hover"
            >
              <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${color} items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
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
