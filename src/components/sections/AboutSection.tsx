"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Heart,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Award,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Making professional web presence accessible to every Indian SMB, not just enterprises.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is guided by what is best for our customers and their growth.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "We take your business seriously. 99.9% uptime, proactive monitoring, and rapid support.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly evolve our tools, designs, and processes to deliver better results.",
    color: "from-amber-500 to-orange-600",
  },
];

const team = [
  {
    name: "Arjun Sharma",
    role: "Co-Founder & CEO",
    bio: "10+ years in digital marketing and web technology. Passionate about helping Indian SMBs grow online.",
    color: "from-indigo-500 to-purple-600",
    initials: "AS",
  },
  {
    name: "Priya Verma",
    role: "Co-Founder & Design Lead",
    bio: "Award-winning UI/UX designer with expertise in conversion-focused design for service businesses.",
    color: "from-pink-500 to-rose-600",
    initials: "PV",
  },
  {
    name: "Rahul Mehta",
    role: "Head of Technology",
    bio: "Full-stack developer with 8 years of experience building scalable web applications.",
    color: "from-cyan-500 to-blue-600",
    initials: "RM",
  },
  {
    name: "Divya Patel",
    role: "Head of Customer Success",
    bio: "Dedicated to ensuring every client gets maximum value from their SitePods subscription.",
    color: "from-green-500 to-teal-600",
    initials: "DP",
  },
];

const milestones = [
  { year: "2022", event: "SitePods founded in Ahmedabad, Gujarat" },
  { year: "2023", event: "Crossed 100 active clients across 15 cities" },
  { year: "2024", event: "Launched Growth & Premium plans, expanded team to 20+" },
  { year: "2025", event: "500+ businesses served, launched AI SEO features" },
];

export default function AboutSection() {
  return (
    <section className="bg-white dark:bg-gray-950">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            We Believe Every Business
            <br />
            <span className="gradient-text">Deserves a Great Website</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            SitePods was born from a simple frustration: why should only large corporations
            have access to professional websites? We built a platform to change that.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Businesses Served", icon: Users },
              { value: "18+", label: "Cities Covered", icon: Globe },
              { value: "4.9", label: "Average Rating", icon: Award },
              { value: "98%", label: "Client Retention", icon: TrendingUp },
            ].map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-2xl btn-gradient flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-extrabold gradient-text mb-1">{value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                India has millions of small and medium businesses — restaurants, clinics, salons,
                schools, and more — that deserve a strong online presence but are held back by
                high costs and technical barriers.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                SitePods removes every one of those barriers. We design, host, maintain, and support
                your website so you can focus on what you do best — running your business.
              </p>
              <div className="space-y-3">
                {[
                  "Zero upfront development cost",
                  "All-inclusive monthly subscription",
                  "Dedicated support at every step",
                  "Websites that actually convert visitors",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Years Experience", value: "3+", color: "from-indigo-500 to-purple-600" },
                { label: "Team Members", value: "25+", color: "from-cyan-500 to-blue-600" },
                { label: "Websites Built", value: "500+", color: "from-green-500 to-emerald-600" },
                { label: "Satisfaction Rate", value: "98%", color: "from-pink-500 to-rose-600" },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${color} text-white`}
                >
                  <div className="text-4xl font-black mb-2">{value}</div>
                  <div className="text-sm opacity-80">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Our <span className="gradient-text">Core Values</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                The people behind SitePods who work tirelessly for your success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map(({ name, role, bio, color, initials }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center card-hover"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg text-xl font-bold text-white`}>
                    {initials}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
                  <div className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-3">{role}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{bio}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Our <span className="gradient-text">Journey</span>
              </h2>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600" />
              <div className="space-y-8">
                {milestones.map(({ year, event }, i) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 pl-4"
                  >
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full btn-gradient flex items-center justify-center shadow-lg flex-shrink-0 z-10 relative">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="pb-2">
                      <div className="text-sm font-bold text-indigo-500 dark:text-indigo-400 mb-1">{year}</div>
                      <div className="text-gray-700 dark:text-gray-300 font-medium">{event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
