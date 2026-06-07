import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/sections/PricingSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing – SitePods | Starting ₹499/month",
  description:
    "Choose the perfect plan for your business. Starter at ₹499/mo, Growth at ₹999/mo, Premium at ₹1999/mo. All plans include hosting, SSL, and support.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
