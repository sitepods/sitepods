"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  Globe,
  Star,
  UtensilsCrossed,
  Stethoscope,
  Building2,
  BookOpen,
  Scale,
  Rocket,
} from "lucide-react";

const categories = ["All", "Restaurant", "Clinic", "Hotel", "Education", "Law & Finance", "Startup"];

const projects = [
  {
    id: 1,
    title: "Spice Garden Restaurant",
    category: "Restaurant",
    description: "A vibrant restaurant website with online menu, reservation system, and gallery.",
    tags: ["Menu", "Reservations", "Gallery"],
    rating: 4.9,
    color: "from-orange-400 to-red-500",
    CardIcon: UtensilsCrossed,
    mockBg: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
  },
  {
    id: 2,
    title: "LifeCare Clinic",
    category: "Clinic",
    description: "A professional medical clinic site with appointment booking and doctor profiles.",
    tags: ["Appointments", "Doctors", "Services"],
    rating: 5.0,
    color: "from-blue-400 to-cyan-500",
    CardIcon: Stethoscope,
    mockBg: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
  },
  {
    id: 3,
    title: "Royal Palms Hotel",
    category: "Hotel",
    description: "A luxury hotel site with room listings, amenities showcase, and booking CTA.",
    tags: ["Rooms", "Amenities", "Booking"],
    rating: 4.8,
    color: "from-amber-400 to-yellow-500",
    CardIcon: Building2,
    mockBg: "from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30",
  },
  {
    id: 4,
    title: "BrightMinds Academy",
    category: "Education",
    description: "A modern coaching institute website with course listings, admissions, and faculty.",
    tags: ["Courses", "Admissions", "Faculty"],
    rating: 4.9,
    color: "from-green-400 to-emerald-500",
    CardIcon: BookOpen,
    mockBg: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
  },
  {
    id: 5,
    title: "Veritas Law Partners",
    category: "Law & Finance",
    description: "A trust-inspiring law firm website with practice areas, team, and case studies.",
    tags: ["Practice Areas", "Team", "Contact"],
    rating: 5.0,
    color: "from-indigo-400 to-purple-500",
    CardIcon: Scale,
    mockBg: "from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30",
  },
  {
    id: 6,
    title: "NexGen Solutions",
    category: "Startup",
    description: "A modern SaaS startup website with feature showcases, pricing, and lead capture.",
    tags: ["Features", "Pricing", "CTA"],
    rating: 4.9,
    color: "from-violet-400 to-pink-500",
    CardIcon: Rocket,
    mockBg: "from-violet-50 to-pink-50 dark:from-violet-950/30 dark:to-pink-950/30",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 card-hover soft-shadow"
    >
      {/* Mock website preview */}
      <div className={`h-48 bg-gradient-to-br ${project.mockBg} relative overflow-hidden`}>
        {/* Browser chrome */}
        <div className="absolute top-3 left-3 right-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="flex items-center gap-1.5 px-3 py-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="flex-1 mx-2 h-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center px-2">
              <Globe className="w-2.5 h-2.5 text-gray-400 mr-1" />
              <span className="text-gray-400 text-[9px] truncate">sitepods.in/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="absolute inset-0 flex items-center justify-center pt-14">
          <div className="text-center">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-xl mx-auto mb-2`}>
              <project.CardIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-xs font-bold text-gray-600 dark:text-gray-400">
              {project.title}
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-lg text-sm font-semibold text-gray-900 dark:text-white">
            <ExternalLink className="w-4 h-4" />
            View Demo
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-gray-900 dark:text-white text-base">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            {project.rating}
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Premium Websites We&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Each website is custom-designed and built for the specific industry. No templates — all original.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? "btn-gradient text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Want a website like these for your business?
          </p>
          <Link
            href="/pricing"
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-base shadow-xl hover:shadow-indigo-500/40 transition-all duration-300"
          >
            Get Your Website Now
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
