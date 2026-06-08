"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const STORAGE_KEY = "sitepods-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:left-auto md:w-96 z-[9990] glass-card rounded-2xl p-5 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍪</span>
              <span className="font-bold text-gray-900 dark:text-white text-sm">
                We use cookies
              </span>
            </div>
            <button
              onClick={decline}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            We use cookies to enhance your browsing experience and analyse site
            traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.
          </p>
          <div className="flex gap-2">
            <button
              onClick={accept}
              className="flex-1 btn-gradient px-4 py-2.5 rounded-xl text-xs font-bold text-white"
            >
              Accept All
            </button>
            <button
              onClick={decline}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
