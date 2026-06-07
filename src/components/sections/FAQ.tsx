"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does website delivery take?",
    a: "We typically deliver your website within 5–7 business days after receiving your brand materials, content, and domain access. Complex or custom projects may take slightly longer.",
  },
  {
    q: "Do I need to buy a domain?",
    a: "Yes, you'll need to purchase your domain separately (usually ₹500–₹1,200/year from registrars like GoDaddy or Namecheap). We'll guide you through the entire process and connect it to your website.",
  },
  {
    q: "Can I upgrade plans later?",
    a: "Absolutely! You can upgrade from Starter to Growth or Premium at any time. The upgrade takes effect in the next billing cycle and we'll implement all additional features seamlessly.",
  },
  {
    q: "Is hosting included in the subscription?",
    a: "Yes! All our plans include fast cloud hosting on premium servers. You never have to worry about hosting, server maintenance, or performance — it's all covered.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, all plans include technical support via WhatsApp, email, and phone. Growth and Premium plans get priority response. We're here to help whenever you need us.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription anytime with 30 days notice. There are no long-term contracts or cancellation fees. Your website remains active until the end of your billing period.",
  },
  {
    q: "Will my website look professional?",
    a: "Absolutely. Every SitePods website is professionally designed by our expert team tailored to your specific industry and brand. We don't use generic templates — each site is custom crafted.",
  },
  {
    q: "What if I need changes to my website?",
    a: "Starter plan includes minor updates on request. Growth plan includes monthly content updates, and Premium includes unlimited changes and blog management as part of the subscription.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        open
          ? "border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/30"
          : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-indigo-200 dark:hover:border-indigo-800"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
          {q}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${
          open
            ? "bg-indigo-600 text-white"
            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
        }`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400"
          >
            Everything you need to know before getting started.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
