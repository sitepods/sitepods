import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";
import NavigationProgress from "@/components/NavigationProgress";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sitepods.in"),
  title: {
    default: "Get your Professional Business Website | SitePods",
    template: "%s | SitePods",
  },
  description:
    "Get a Professional Business Website designed according to your requirements without Paying Huge Upfront Costs for small & medium business. Mobile-responsive, SEO-ready, Hosting, Ongoing Maintenance and Support.",
  keywords: [
    "Professional Website Design",
    "Business Website Development",
    "Responsive Website Design",
    "Web development agency",
    "website designer near me",
    "web development company",
    "affordable web design for small business",
    "custom web design services",
    "custom web design",
    "custom web design company",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Get your Professional Business Website | SitePods",
    description:
      "Get a Professional Business Website designed according to your requirements without Paying Huge Upfront Costs for small & medium business.",
    url: "https://sitepods.in",
    siteName: "SitePods",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get your Professional Business Website | SitePods",
    description:
      "Get a Professional Business Website designed according to your requirements without Paying Huge Upfront Costs for small & medium business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Prevent dark-mode flash: run before paint */}
        <script
          type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('sitepods-theme');var p=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';if((t||p)==='dark')document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <NavigationProgress />
          <ScrollProgress />
          <PageTransition>{children}</PageTransition>
          <BackToTop />
          <WhatsAppButton />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
