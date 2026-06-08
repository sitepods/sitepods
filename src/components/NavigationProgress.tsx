"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [complete, setComplete] = useState(false);
  const prevPath = useRef(pathname);
  const doneTimer = useRef<ReturnType<typeof setTimeout>>();

  // Start bar when an internal link is clicked
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      try {
        const dest = new URL(anchor.href);
        if (dest.origin !== location.origin) return; // external link
        if (dest.hash && dest.pathname === pathname) return; // same-page anchor
        if (dest.pathname === pathname) return; // same route
      } catch {
        return;
      }
      setComplete(false);
      setActive(true);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // Complete bar when route finishes loading
  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname;
      setComplete(true);
      doneTimer.current = setTimeout(() => setActive(false), 500);
    }
    return () => clearTimeout(doneTimer.current);
  }, [pathname]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] h-[3px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
            boxShadow: "0 0 10px rgba(99, 102, 241, 0.55)",
          }}
          initial={{ width: "0%", opacity: 1 }}
          animate={
            complete
              ? { width: "100%", opacity: 0 }
              : { width: "82%" }
          }
          transition={
            complete
              ? {
                  width: { duration: 0.18, ease: "easeOut" },
                  opacity: { delay: 0.18, duration: 0.2 },
                }
              : { width: { duration: 0.9, ease: [0.1, 0.9, 0.2, 1] } }
          }
        />
      )}
    </AnimatePresence>
  );
}
