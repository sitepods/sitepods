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
    default: "SitePods – Professional Business Websites on Subscription",
    template: "%s | SitePods",
  },
  description:
    "Get your professional business website without paying huge upfront costs. Hosting, SSL, maintenance, and support included. Starting ₹499/month.",
  keywords: [
    "website subscription India",
    "business website India",
    "affordable website design",
    "professional website subscription",
    "SitePods",
    "website design India",
    "small business website",
    "restaurant website",
    "clinic website",
    "hotel website",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SitePods – Professional Business Websites on Subscription",
    description:
      "Launch your business online with a fully managed website. Zero setup cost. Simple monthly subscription.",
    url: "https://sitepods.in",
    siteName: "SitePods",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SitePods – Professional Business Websites on Subscription",
    description:
      "Launch your business online with a fully managed website. Zero setup cost. Simple monthly subscription.",
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
    <html lang="en-IN" suppressHydrationWarning>
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
