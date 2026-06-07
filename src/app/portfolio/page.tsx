import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio – SitePods | Website Examples",
  description:
    "Explore our premium website portfolio. We've built professional websites for restaurants, clinics, hotels, schools, law firms, and startups across India.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PortfolioSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
