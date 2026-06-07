import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import CityHero from "@/components/sections/CityHero";

const BASE_URL = "https://sitepods.in";

type CityData = {
  name: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  headline: string;
  subtext: string;
  areas: string[];
};

const cities: Record<string, CityData> = {
  mumbai: {
    name: "Mumbai",
    state: "Maharashtra",
    metaTitle: "Website Design in Mumbai – Starting ₹499/month",
    metaDescription:
      "Professional website design for Mumbai businesses. Hosting, SSL & maintenance included. 7-day delivery for restaurants, clinics, hotels & startups in Mumbai.",
    keywords: [
      "website design mumbai",
      "website development mumbai",
      "business website mumbai",
      "affordable website design mumbai",
      "restaurant website mumbai",
      "clinic website mumbai",
      "hotel website mumbai",
      "website subscription mumbai",
    ],
    headline: "Professional Business Websites for Mumbai",
    subtext:
      "Mumbai ke har chhote-bade business ke liye professionally managed website — hosting, SSL, maintenance aur support — sirf ek simple monthly subscription mein.",
    areas: ["Andheri", "Bandra", "BKC", "Powai", "Thane", "Navi Mumbai"],
  },
  delhi: {
    name: "Delhi",
    state: "Delhi NCR",
    metaTitle: "Website Design in Delhi NCR – Starting ₹499/month",
    metaDescription:
      "Affordable website design for Delhi, Noida & Gurgaon businesses. Fully managed websites with hosting, SSL, and support. 7-day delivery.",
    keywords: [
      "website design delhi",
      "website development delhi",
      "business website delhi ncr",
      "website design noida",
      "website design gurgaon",
      "affordable website delhi",
      "website subscription delhi",
      "small business website delhi",
    ],
    headline: "Professional Business Websites for Delhi NCR",
    subtext:
      "Delhi, Noida aur Gurgaon ke businesses ke liye fully managed website — hosting, SSL, maintenance sab included — ek simple monthly subscription mein.",
    areas: ["Connaught Place", "Karol Bagh", "Noida", "Gurgaon", "Dwarka", "Laxmi Nagar"],
  },
  bangalore: {
    name: "Bangalore",
    state: "Karnataka",
    metaTitle: "Website Design in Bangalore – Starting ₹499/month",
    metaDescription:
      "Professional website design for Bangalore startups, restaurants & businesses. Fully managed with hosting, SSL & SEO. 7-day delivery.",
    keywords: [
      "website design bangalore",
      "website development bangalore",
      "business website bangalore",
      "startup website bangalore",
      "affordable website bangalore",
      "website subscription bangalore",
      "restaurant website bangalore",
      "it company website bangalore",
    ],
    headline: "Professional Business Websites for Bangalore",
    subtext:
      "Bangalore ke startups, restaurants aur businesses ke liye fully managed website — hosting, SSL, SEO-ready structure — ek simple monthly plan mein.",
    areas: ["Indiranagar", "Koramangala", "Whitefield", "HSR Layout", "MG Road", "Electronic City"],
  },
  hyderabad: {
    name: "Hyderabad",
    state: "Telangana",
    metaTitle: "Website Design in Hyderabad – Starting ₹499/month",
    metaDescription:
      "Affordable website design for Hyderabad businesses. Restaurants, clinics, IT companies & more. Hosting, SSL & maintenance included.",
    keywords: [
      "website design hyderabad",
      "website development hyderabad",
      "business website hyderabad",
      "affordable website hyderabad",
      "restaurant website hyderabad",
      "website subscription hyderabad",
      "it company website hyderabad",
      "clinic website hyderabad",
    ],
    headline: "Professional Business Websites for Hyderabad",
    subtext:
      "Hyderabad ke IT companies, restaurants aur local businesses ke liye professionally managed website — hosting, SSL, maintenance all included.",
    areas: ["Banjara Hills", "Jubilee Hills", "HITEC City", "Gachibowli", "Secunderabad", "Kukatpally"],
  },
  pune: {
    name: "Pune",
    state: "Maharashtra",
    metaTitle: "Website Design in Pune – Starting ₹499/month",
    metaDescription:
      "Professional website design for Pune businesses & startups. Fully managed with hosting, SSL, SEO & support. 7-day delivery.",
    keywords: [
      "website design pune",
      "website development pune",
      "business website pune",
      "startup website pune",
      "affordable website pune",
      "website subscription pune",
      "restaurant website pune",
      "small business website pune",
    ],
    headline: "Professional Business Websites for Pune",
    subtext:
      "Pune ke startups, cafes, clinics aur businesses ke liye fully managed website — zero upfront cost, simple monthly subscription.",
    areas: ["Hinjewadi", "Koregaon Park", "Viman Nagar", "Kothrud", "Aundh", "Baner"],
  },
  chennai: {
    name: "Chennai",
    state: "Tamil Nadu",
    metaTitle: "Website Design in Chennai – Starting ₹499/month",
    metaDescription:
      "Affordable website design for Chennai businesses. Restaurants, clinics, IT firms & more. Hosting, SSL & maintenance included. 7-day delivery.",
    keywords: [
      "website design chennai",
      "website development chennai",
      "business website chennai",
      "affordable website chennai",
      "restaurant website chennai",
      "website subscription chennai",
      "it company website chennai",
      "small business website chennai",
    ],
    headline: "Professional Business Websites for Chennai",
    subtext:
      "Chennai ke manufacturers, IT firms, restaurants aur local businesses ke liye professionally managed website — hosting, SSL, maintenance sab included.",
    areas: ["T. Nagar", "Anna Nagar", "OMR", "Adyar", "Velachery", "Porur"],
  },
  ahmedabad: {
    name: "Ahmedabad",
    state: "Gujarat",
    metaTitle: "Website Design in Ahmedabad – Starting ₹499/month",
    metaDescription:
      "Professional website design for Ahmedabad businesses. Traders, manufacturers, restaurants & more. Hosting, SSL & maintenance included.",
    keywords: [
      "website design ahmedabad",
      "website development ahmedabad",
      "business website ahmedabad",
      "affordable website ahmedabad",
      "trader website ahmedabad",
      "website subscription ahmedabad",
      "restaurant website ahmedabad",
      "manufacturer website ahmedabad",
    ],
    headline: "Professional Business Websites for Ahmedabad",
    subtext:
      "Ahmedabad ke traders, manufacturers, restaurants aur businesses ke liye fully managed website — zero upfront cost, monthly subscription.",
    areas: ["CG Road", "SG Highway", "Navrangpura", "Satellite", "Maninagar", "Vastral"],
  },
  jaipur: {
    name: "Jaipur",
    state: "Rajasthan",
    metaTitle: "Website Design in Jaipur – Starting ₹499/month",
    metaDescription:
      "Affordable website design for Jaipur businesses. Hotels, handicrafts, restaurants & more. Hosting, SSL & maintenance included.",
    keywords: [
      "website design jaipur",
      "website development jaipur",
      "business website jaipur",
      "affordable website jaipur",
      "hotel website jaipur",
      "website subscription jaipur",
      "handicraft website jaipur",
      "restaurant website jaipur",
    ],
    headline: "Professional Business Websites for Jaipur",
    subtext:
      "Jaipur ke hotels, handicraft stores, restaurants aur local businesses ke liye fully managed website — hosting, SSL, maintenance all included.",
    areas: ["MI Road", "Malviya Nagar", "Vaishali Nagar", "C Scheme", "Mansarovar", "Jagatpura"],
  },
};

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = cities[city];

  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: {
      canonical: `/website-design/${city}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${BASE_URL}/website-design/${city}`,
      siteName: "SitePods",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = cities[city];

  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SitePods",
    description: data.metaDescription,
    url: `${BASE_URL}/website-design/${city}`,
    areaServed: {
      "@type": "City",
      name: data.name,
      containedInPlace: {
        "@type": "State",
        name: data.state,
      },
    },
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI",
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
      ],
    },
  };

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
        <CityHero
          cityName={data.name}
          state={data.state}
          headline={data.headline}
          subtext={data.subtext}
          areas={data.areas}
        />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
