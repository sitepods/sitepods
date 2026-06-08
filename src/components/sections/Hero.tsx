"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Globe,
  Shield,
  Smartphone,
  Zap,
  TrendingUp,
  Star,
  Users,
  CheckCircle2,
  BarChart3,
  Clock,
} from "lucide-react";

function useCountUp(target: number, duration = 1.8, enabled = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, enabled]);
  return count;
}

function StatCard({ num, prefix, suffix, label }: { num: number; prefix: string; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(num, 1.8, inView);
  return (
    <div
      ref={ref}
      className="relative text-center py-4 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden group hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-xl font-extrabold gradient-text mb-0.5">
          {prefix}{count}{suffix}
        </div>
        <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">{label}</div>
      </div>
    </div>
  );
}

const features = [
  { icon: Check,       label: "Zero Setup Cost" },
  { icon: Globe,       label: "Hosting Included" },
  { icon: Shield,      label: "SSL Security" },
  { icon: Smartphone,  label: "Mobile Responsive" },
  { icon: TrendingUp,  label: "SEO Ready" },
  { icon: Zap,         label: "Fast Delivery" },
];

const stats = [
  { num: 500, prefix: "",  suffix: "+",     label: "Businesses" },
  { num: 499, prefix: "₹", suffix: "",      label: "Starting/mo" },
  { num: 7,   prefix: "",  suffix: " Days", label: "Avg Delivery" },
  { num: 24,  prefix: "",  suffix: "/7",    label: "Support" },
];

/* ─── Floating badge wrapper ─── */
function FloatBadge({
  children,
  delay = 0,
  duration = 4,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute z-20 ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg">
      {/* bg blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-200/40 dark:bg-indigo-900/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-200/40 dark:bg-purple-900/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center pt-28 pb-8 lg:pt-32 lg:pb-10">

          {/* ══ LEFT ══════════════════════════════════════ */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 mb-5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                India&apos;s #1 Website Subscription Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-[2rem] sm:text-[2.4rem] lg:text-[2.2rem] xl:text-[2.6rem] font-extrabold text-gray-900 dark:text-white leading-[1.2] tracking-tight mb-4"
            >
              Get Your Professional{" "}
              <span className="gradient-text">Business Website</span>{" "}
              Without Paying Huge Upfront Costs
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-[0.95rem] text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-[500px]"
            >
              Launch your business online with a fully managed website — hosting,
              maintenance, SSL, and SEO-ready structure for one simple monthly subscription.
            </motion.p>

            {/* Feature chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6"
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 truncate">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="flex flex-wrap gap-3 mb-7"
            >
              <Link
                href="/pricing"
                className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-lg"
              >
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors shadow-sm"
              >
                View Portfolio
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["from-indigo-500 to-blue-500","from-pink-500 to-rose-500","from-green-500 to-emerald-500","from-amber-500 to-orange-500","from-purple-500 to-violet-500"].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${c} border-2 border-white dark:border-gray-950 flex items-center justify-center`}>
                    <Users className="w-3 h-3 text-white" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200 ml-1">4.9</span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  Trusted by <span className="font-bold text-gray-800 dark:text-gray-200">500+</span> businesses
                </p>
              </div>
            </motion.div>
          </div>

          {/* ══ RIGHT ═════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            {/* outer glow */}
            <div className="absolute inset-8 bg-indigo-300/20 dark:bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

            {/* ─── card container with enough breathing room for badges ─── */}
            <div className="relative mx-6 mt-8 mb-10">

              {/* ── Badge 1: Website Live (top-left, overlaps edge) ── */}
              <FloatBadge className="-top-5 -left-5" delay={0} duration={4}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-3.5 py-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-sm flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">Website Live!</p>
                    <p className="text-[10px] text-green-500 font-semibold">Just deployed ✓</p>
                  </div>
                </div>
              </FloatBadge>

              {/* ── Badge 2: Rating (top-right, overlaps edge) ── */}
              <FloatBadge className="-top-5 -right-5" delay={0.7} duration={3.8}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-3.5 py-2.5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-[13px] font-black text-gray-900 dark:text-white leading-tight">4.9 / 5</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="fill-amber-400 text-amber-400" style={{width:9,height:9}} />)}
                    </div>
                  </div>
                </div>
              </FloatBadge>

              {/* ── Main browser card ── */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl"
              >
                {/* Browser bar */}
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2.5 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-700 rounded-md px-3 py-1 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span className="text-[11px] text-gray-400 truncate">sitepods.in/your-business</span>
                  </div>
                </div>

                {/* Navbar mockup */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600" />
                    <div className="h-2 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
                  </div>
                  <div className="flex gap-3">
                    {[28,20,32,18].map((w,i) => <div key={i} className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full" style={{width:w}} />)}
                  </div>
                  <div className="h-6 w-14 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600" />
                </div>

                {/* Hero area mockup */}
                <div className="px-5 py-5 bg-gradient-to-br from-slate-50 to-indigo-50/40 dark:from-gray-900 dark:to-indigo-950/20">
                  <div className="flex gap-5 items-center">
                    <div className="flex-1 min-w-0">
                      <div className="h-1.5 w-10 bg-indigo-400 rounded-full mb-3" />
                      <div className="space-y-1.5 mb-3">
                        <div className="h-3 w-full bg-gray-800 dark:bg-gray-100 rounded" />
                        <div className="h-3 w-5/6 bg-gray-800 dark:bg-gray-100 rounded" />
                        <div className="h-3 w-2/3 bg-gray-800 dark:bg-gray-100 rounded" />
                      </div>
                      <div className="space-y-1 mb-4">
                        <div className="h-1.5 w-full bg-gray-300 dark:bg-gray-600 rounded-full" />
                        <div className="h-1.5 w-4/5 bg-gray-300 dark:bg-gray-600 rounded-full" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-7 w-20 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600" />
                        <div className="h-7 w-16 rounded-lg border border-indigo-200 dark:border-indigo-700" />
                      </div>
                    </div>
                    <div className="w-24 h-28 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex-shrink-0" />
                  </div>
                </div>

                {/* Feature cards mockup */}
                <div className="px-5 pb-5 pt-1">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "from-indigo-500 to-blue-600",
                      "from-purple-500 to-pink-500",
                      "from-cyan-500 to-teal-500",
                    ].map((color, i) => (
                      <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                        <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${color} mb-2`} />
                        <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full mb-1" />
                        <div className="h-1.5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ── Badge 3: Traffic (bottom-left) ── */}
              <FloatBadge className="-bottom-5 -left-5" delay={0.4} duration={4.5}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-3.5 py-2.5">
                  <div className="flex items-center justify-between gap-6 mb-2">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Traffic</span>
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <BarChart3 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="text-lg font-black text-gray-900 dark:text-white mb-1.5">+340%</div>
                  <div className="flex items-end gap-0.5 h-6">
                    {[3,5,4,7,6,9,8,12].map((h, i) => (
                      <div key={i} className="flex-1 rounded-[2px]" style={{
                        height: `${h * 3.5}px`,
                        background: i >= 5 ? "linear-gradient(to top,#6366f1,#8b5cf6)" : "linear-gradient(to top,#c7d2fe,#ddd6fe)",
                      }} />
                    ))}
                  </div>
                </div>
              </FloatBadge>

              {/* ── Badge 4: Delivery (bottom-right) ── */}
              <FloatBadge className="-bottom-5 -right-5" delay={1} duration={4.2}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-3.5 py-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[13px] font-black text-gray-900 dark:text-white leading-tight">7 Days</p>
                    <p className="text-[10px] text-gray-400">Avg. delivery</p>
                  </div>
                </div>
              </FloatBadge>

            </div>
          </motion.div>

        </div>

        {/* ══ Stats bar ══════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="pb-12 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
