import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About – SitePods | India's Website Subscription Platform",
  description:
    "Learn about SitePods — our mission to make professional websites accessible to every small and medium business in India.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AboutSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
