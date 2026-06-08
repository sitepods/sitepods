"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MessageCircle, Share2, Globe2, ExternalLink } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Pricing", href: "/pricing" },
    { label: "Starter Plan", href: "/pricing" },
    { label: "Growth Plan", href: "/pricing" },
    { label: "Premium Plan", href: "/pricing" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 dark:bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Site<span className="gradient-text">Pods</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Professional business websites on a simple monthly subscription. Zero upfront cost, fully managed.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="mailto:hello@sitepods.in"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                hello@sitepods.in
              </a>
              <a
                href="tel:++917566236471"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-indigo-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-indigo-500" />
                +917566236471
              </a>
              <a
                href="https://wa.me/+917566236471"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                WhatsApp Us
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: ExternalLink, href: "#", color: "hover:bg-blue-600" },
                { Icon: Share2, href: "#", color: "hover:bg-pink-600" },
                { Icon: Globe2, href: "#", color: "hover:bg-blue-700" },
              ].map(({ Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`w-9 h-9 rounded-lg bg-gray-800 ${color} flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} SitePods. All rights reserved.
          </p>
          <p className="text-gray-700 text-sm">
            Made with love in India
          </p>
        </div>
      </div>
    </footer>
  );
}
