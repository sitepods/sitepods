import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/sections/PricingSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing | Launch your Business Website Starting at Just ₹499",
  description:
    "Website Development Pricing | Creative Web Development Services | Choose the plan that fits your business. All plans include hosting, SSL and support.",
  keywords: ["creative web development"],
  openGraph: {
    title: "Pricing | Launch your Business Website Starting at Just ₹499",
    description:
      "Website Development Pricing | Creative Web Development Services | Choose the plan that fits your business. All plans include hosting, SSL and support.",
    type: "website",
  },
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
