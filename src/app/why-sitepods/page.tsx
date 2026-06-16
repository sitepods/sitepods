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
  title: "Why Choose SitePods? Custom Website Development Services",
  description:
    "Why Choose SitePods for Custom Website Development Services? We provide mobile-responsive web development services without Paying Huge Upfront Costs.",
  keywords: [
    "website development company",
    "best web development companies",
    "top web development companies",
    "custom website development",
    "custom website developer",
    "website customization services",
    "custom web development",
    "custom web development company",
    "custom website development services",
    "custom ecommerce website development",
    "custom web design agency",
    "custom website development company",
  ],
  openGraph: {
    title: "Why Choose SitePods? Custom Website Development Services",
    description:
      "Why Choose SitePods for Custom Website Development Services? We provide mobile-responsive web development services without Paying Huge Upfront Costs.",
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
