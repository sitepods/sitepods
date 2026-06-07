import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SitePods – Professional Business Websites on Subscription",
  description:
    "Get your professional business website without paying huge upfront costs. Hosting, SSL, maintenance, and support included. Starting ₹499/month.",
  keywords:
    "website subscription, business website, affordable website, SitePods, professional website India",
  openGraph: {
    title: "SitePods – Professional Business Websites on Subscription",
    description:
      "Launch your business online with a fully managed website. Zero setup cost. Simple monthly subscription.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent dark-mode flash: run before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try{
                  var t=localStorage.getItem('sitepods-theme');
                  var p=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
                  var theme=t||p;
                  if(theme==='dark') document.documentElement.classList.add('dark');
                }catch(e){}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
