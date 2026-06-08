"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9998] h-[3px] origin-left pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
        boxShadow: "0 0 8px rgba(99, 102, 241, 0.5)",
      }}
    />
  );
}
