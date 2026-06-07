"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Owner, Sharma's Kitchen",
    category: "Restaurant",
    avatar: "PS",
    avatarColor: "from-pink-500 to-rose-600",
    rating: 5,
    text: "SitePods gave us a beautiful restaurant website in under a week! Our online orders have increased by 40% since launch. The WhatsApp integration is a game-changer for customer inquiries.",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Pediatrician, KidsFirst Clinic",
    category: "Clinic",
    avatar: "RK",
    avatarColor: "from-blue-500 to-cyan-600",
    rating: 5,
    text: "As a doctor, I had no time or knowledge to manage a website. SitePods handled everything — from design to hosting. Patients can now book appointments directly from my site!",
  },
  {
    name: "Anita Patel",
    role: "Director, Patel Beauty Salon",
    category: "Salon",
    avatar: "AP",
    avatarColor: "from-purple-500 to-violet-600",
    rating: 5,
    text: "Finally, a website service that actually understands small businesses. ₹999/month for everything — design, hosting, updates, support. It's unbeatable value in India.",
  },
  {
    name: "Vikram Singh",
    role: "Founder, TechStart Solutions",
    category: "Startup",
    avatar: "VS",
    avatarColor: "from-indigo-500 to-blue-600",
    rating: 5,
    text: "Our startup needed a professional web presence quickly without spending huge on development. SitePods delivered in 5 days! The SEO setup helped us rank on Google within weeks.",
  },
  {
    name: "Meena Gupta",
    role: "Principal, Bright Future Academy",
    category: "School",
    avatar: "MG",
    avatarColor: "from-green-500 to-emerald-600",
    rating: 5,
    text: "The school website looks incredibly professional. Parents can find admission info, fee structure, and contact details easily. Enrollment inquiries went up 60% after launch.",
  },
  {
    name: "Ravi Mehta",
    role: "Senior Partner, Mehta & Associates",
    category: "Law Firm",
    avatar: "RM",
    avatarColor: "from-amber-500 to-orange-600",
    rating: 5,
    text: "We needed a trust-inspiring website for our law firm. SitePods delivered a premium design that reflects our brand perfectly. Client leads from the website have been outstanding.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Loved by{" "}
            <span className="gradient-text">Businesses Like Yours</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400"
          >
            Real results from real businesses across India.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(
            ({ name, role, category, avatar, avatarColor, rating, text }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 card-hover soft-shadow"
              >
                {/* Quote mark */}
                <div className="text-5xl font-serif text-indigo-200 dark:text-indigo-900 leading-none mb-3">&ldquo;</div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {text}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                    >
                      {avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        {name}
                      </div>
                      <div className="text-xs text-gray-500">{role}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <StarRating count={rating} />
                    <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                      {category}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center"
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "500+", label: "Happy Clients" },
            { value: "100%", label: "Would Recommend" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="text-3xl font-extrabold gradient-text">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
