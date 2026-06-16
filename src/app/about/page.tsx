import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About SitePods | Website design and development services",
  description:
    "About SitePods. Custom Website Development. Responsive Website Design. Affordable Website Development Solutions for Growing online Businesses.",
  keywords: [
    "website design and development services",
    "website development solution",
  ],
  openGraph: {
    title: "About SitePods | Website design and development services",
    description:
      "About SitePods. Custom Website Development. Responsive Website Design. Affordable Website Development Solutions for Growing online Businesses.",
    type: "website",
  },
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
