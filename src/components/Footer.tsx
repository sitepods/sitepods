"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MessageCircle } from "lucide-react";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const footerLinks = {
  Company: [
    { label: "Home",           href: "/" },
    { label: "Why SitePods?",  href: "/why-sitepods" },
    { label: "About Us",       href: "/about" },
    { label: "Portfolio",      href: "/portfolio" },
    { label: "Blog",           href: "/blog" },
    { label: "Contact",        href: "/contact" },
  ],
  Services: [
    { label: "Pricing Plans",       href: "/pricing" },
    { label: "Starter — ₹499/mo",  href: "/pricing" },
    { label: "Growth — ₹999/mo",   href: "/pricing" },
    { label: "Premium — ₹1999/mo", href: "/pricing" },
  ],
  Industries: [
    { label: "Restaurant Website", href: "/website-for/restaurant" },
    { label: "Clinic Website",     href: "/website-for/clinic" },
    { label: "Hotel Website",      href: "/website-for/hotel" },
    { label: "Coaching Website",   href: "/website-for/coaching" },
    { label: "Startup Website",    href: "/website-for/startup" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy",    href: "#" },
  ],
};

const stats = ["500+ Websites Built", "7-Day Delivery", "From ₹499/mo"];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">

      {/* CTA strip */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-gray-900 dark:text-white font-semibold text-sm text-center sm:text-left">
              Ready to get your business website?
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 text-center sm:text-left">
              Delivered in 7 days · Fully managed · Cancel anytime
            </p>
          </div>
          <a
            href="https://wa.me/+917566236471?text=Hi!%20I%27d%20like%20to%20build%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold shadow-md whitespace-nowrap flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">

          {/* ── Brand column ── */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center shadow-md">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Site<span className="gradient-text">Pods</span>
              </span>
            </Link>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 max-w-[260px]">
              Professional business websites on a simple monthly subscription. Zero upfront cost, fully managed.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {stats.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-300 font-medium shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-2.5 mb-6">
              <a
                href="mailto:hello@sitepods.in"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/40 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                  <Mail className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                hello@sitepods.in
              </a>
              <a
                href="tel:+917566236471"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/40 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                  <Phone className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                +91 75662 36471
              </a>
              <a
                href="https://wa.me/+917566236471"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-800 group-hover:bg-green-50 dark:group-hover:bg-green-900/30 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                  <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                </div>
                WhatsApp Us
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {[
                { Icon: IconInstagram, href: "#", label: "Instagram" },
                { Icon: IconLinkedIn,  href: "#", label: "LinkedIn" },
                { Icon: IconX,         href: "#", label: "X" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-gray-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 border border-gray-200 dark:border-gray-700 hover:border-indigo-600 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200 shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Link columns ── */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-gray-400 dark:text-gray-500 font-semibold text-xs uppercase tracking-widest mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 dark:text-gray-500 text-xs">
            © {new Date().getFullYear()} SitePods. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs flex items-center gap-1">
            Made with <span className="text-red-400 text-sm">♥</span> in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
