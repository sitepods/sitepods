import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ComparisonSection from "@/components/sections/ComparisonSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SitePods",
  url: "https://sitepods.in",
  description:
    "India's website subscription platform. Professional business websites starting ₹499/month.",
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Subscription Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        price: "499",
        priceCurrency: "INR",
        priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
      },
      {
        "@type": "Offer",
        name: "Growth Plan",
        price: "999",
        priceCurrency: "INR",
        priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
      },
      {
        "@type": "Offer",
        name: "Premium Plan",
        price: "1999",
        priceCurrency: "INR",
        priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhyChooseUs />
        <ComparisonSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
