import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhySitePodsHero from "@/components/sections/WhySitePodsHero";
import PainPointsSolved from "@/components/sections/PainPointsSolved";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ComparisonSection from "@/components/sections/ComparisonSection";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Why SitePods? | India's Best Website Subscription Service",
  description:
    "Discover why 500+ Indian businesses chose SitePods over freelancers and DIY builders. Professional websites from ₹499/mo — zero setup cost, delivered in 7 days, fully managed.",
  keywords: [
    "why sitepods",
    "best website service india",
    "website subscription india",
    "affordable business website",
    "managed website india",
  ],
  openGraph: {
    title: "Why SitePods? | India's Best Website Subscription Service",
    description:
      "Professional websites from ₹499/mo. Zero setup cost, 7-day delivery, fully managed. See why 500+ Indian businesses chose SitePods.",
    type: "website",
  },
};

export default function WhySitePodsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <WhySitePodsHero />
        <PainPointsSolved />
        <WhyChooseUs />
        <ComparisonSection />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
