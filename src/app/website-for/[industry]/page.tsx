import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryHero from "@/components/sections/IndustryHero";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  UtensilsCrossed,
  Stethoscope,
  Building2,
  BookOpen,
  Scale,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type IndustryData = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subtext: string;
  benefits: string[];
  icon: LucideIcon;
  gradient: string;
};

const industries: Record<string, IndustryData> = {
  restaurant: {
    name: "Restaurant",
    metaTitle: "Restaurant Website Design – Starting ₹499/month | SitePods",
    metaDescription:
      "Get a professional restaurant website with online menu, gallery, and table reservations. Zero setup cost. Delivery in 7 days. Starting ₹499/month.",
    headline: "Professional Restaurant Websites That Get You More Customers",
    subtext:
      "Stop losing customers to competitors with better online presence. Get a professional restaurant website with your menu, gallery, and reservation system — managed entirely by SitePods.",
    benefits: [
      "Online menu with photos and pricing",
      "Table reservation / booking form",
      "WhatsApp ordering integration",
      "Google Maps & location embed",
      "Food gallery with stunning photos",
      "Customer reviews section",
    ],
    icon: UtensilsCrossed,
    gradient: "from-orange-400 to-red-500",
  },
  clinic: {
    name: "Clinic",
    metaTitle: "Clinic & Hospital Website Design – Starting ₹499/month | SitePods",
    metaDescription:
      "Professional clinic websites with online appointment booking and doctor profiles. Trusted by 100+ clinics in India. Starting ₹499/month.",
    headline: "Clinic Websites That Build Patient Trust and Fill Your Calendar",
    subtext:
      "Patients Google their doctor before visiting. A professional clinic website with appointment booking builds credibility and brings new patients — without paid ads.",
    benefits: [
      "Online appointment booking form",
      "Doctor profile pages with qualifications",
      "Services and treatments listing",
      "Consultation fee information",
      "Location & directions with Google Maps",
      "Patient testimonials section",
    ],
    icon: Stethoscope,
    gradient: "from-blue-400 to-cyan-500",
  },
  hotel: {
    name: "Hotel",
    metaTitle: "Hotel Website Design – Get More Direct Bookings | SitePods",
    metaDescription:
      "Hotel websites designed for direct bookings. Reduce OTA commissions. Beautiful room galleries, amenities showcase, and booking CTAs. Starting ₹999/month.",
    headline: "Hotel Websites Built to Convert Visitors into Direct Bookings",
    subtext:
      "OTAs charge 15–25% commission on every booking. Your SitePods website drives direct bookings and pays for itself with the first reservation you save.",
    benefits: [
      "Stunning room and amenity galleries",
      "Direct booking inquiry form",
      "Best rate guarantee banner",
      "Local attractions page for SEO",
      "Google reviews integration",
      "WhatsApp booking support",
    ],
    icon: Building2,
    gradient: "from-amber-400 to-yellow-500",
  },
  coaching: {
    name: "Coaching Institute",
    metaTitle: "Coaching Institute Website Design – Starting ₹499/month | SitePods",
    metaDescription:
      "Professional websites for coaching institutes and tuition centres. Show your courses, faculty, and results. Online enquiry forms. Starting ₹499/month.",
    headline: "Coaching Institute Websites That Fill Your Batches",
    subtext:
      "Parents and students research online before enrolling. A professional website with your courses, faculty, results, and admission form sets you apart from competitors.",
    benefits: [
      "Course and batch listing",
      "Faculty profiles with qualifications",
      "Student results and achievements",
      "Online admission enquiry form",
      "Fee structure page",
      "Testimonials from parents and students",
    ],
    icon: BookOpen,
    gradient: "from-green-400 to-emerald-500",
  },
  law: {
    name: "Law Firm",
    metaTitle: "Law Firm Website Design – Starting ₹499/month | SitePods",
    metaDescription:
      "Professional law firm websites that build client trust. Practice area pages, attorney profiles, and consultation forms. Starting ₹499/month.",
    headline: "Law Firm Websites That Win Client Trust Before the First Meeting",
    subtext:
      "Clients hiring a lawyer do extensive research. A professional law firm website with practice areas, attorney profiles, and case results builds the credibility that wins retainers.",
    benefits: [
      "Practice area pages with detail",
      "Attorney profiles with credentials",
      "Case results and achievements",
      "Consultation booking form",
      "Client testimonials",
      "Confidential contact form",
    ],
    icon: Scale,
    gradient: "from-indigo-400 to-purple-500",
  },
  startup: {
    name: "Startup",
    metaTitle: "Startup Website Design – Starting ₹499/month | SitePods",
    metaDescription:
      "Modern startup websites with product showcases, pricing tables, and lead capture. Built for growth. Starting ₹499/month.",
    headline: "Startup Websites Built for Growth and Lead Generation",
    subtext:
      "Your website is your best salesperson. A fast, modern startup website with clear messaging, feature showcases, and a strong CTA converts visitors into customers and investors.",
    benefits: [
      "Product / SaaS feature showcase",
      "Pricing table with plan comparison",
      "Lead capture and demo booking",
      "Team and about section",
      "Investor-ready design",
      "Integrations with your tools",
    ],
    icon: Rocket,
    gradient: "from-violet-400 to-pink-500",
  },
};

export function generateStaticParams() {
  return Object.keys(industries).map((industry) => ({ industry }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const data = industries[industry];
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const data = industries[industry];
  if (!data) notFound();

  return (
    <>
      <Navbar />
      <main>
        <IndustryHero
          industryName={data.name}
          headline={data.headline}
          subtext={data.subtext}
          benefits={data.benefits}
          icon={data.icon}
          gradient={data.gradient}
        />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
