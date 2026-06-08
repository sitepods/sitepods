import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";

const posts: Record<string, {
  title: string;
  category: string;
  readTime: string;
  date: string;
  gradient: string;
  content: string;
}> = {
  "restaurant-website-india": {
    title: "Why Your Restaurant Needs a Website in 2025 (Not Just Zomato)",
    category: "Restaurant",
    readTime: "5 min read",
    date: "June 2025",
    gradient: "from-orange-400 to-red-500",
    content: `
Zomato and Swiggy are great for discovery — but they take 20–30% commission on every single order. That's ₹150 off a ₹500 order, every time. For a restaurant doing 100 orders a day, that's ₹15,000 lost daily, or ₹4.5 lakh every month.

**Your website = your own ordering channel.**

## What a Restaurant Website Gives You

- **Direct orders** with zero commission — use WhatsApp or a simple form
- **Online menu** that customers can share with friends
- **Table reservation system** so customers book ahead
- **Google presence** — show up when someone searches "restaurant near me"
- **Your brand, your story** — not just a listing among 200 competitors

## Why "Just Instagram" Isn't Enough

Instagram is great for photos, but:
- Algorithm changes can reduce your reach overnight
- You can't rank on Google with just an Instagram page
- No booking or ordering system built in
- Account bans happen — and you lose everything

A website is an asset you own. Instagram is rented land.

## Getting Started Is Easier Than You Think

SitePods builds restaurant websites starting ₹499/month — with your menu, gallery, reservation form, and WhatsApp integration. Ready in 7 days. No technical knowledge needed.
    `,
  },
  "clinic-website-benefits": {
    title: "5 Reasons Every Clinic Should Have a Website (With Appointment Booking)",
    category: "Clinic",
    readTime: "4 min read",
    date: "May 2025",
    gradient: "from-blue-400 to-cyan-500",
    content: `
Before visiting any doctor today, patients Google them. If your clinic doesn't have a website, you're invisible to the 80% of patients who search online first.

## 5 Reasons Your Clinic Needs a Website

**1. Online Appointment Booking**
Let patients book 24/7 without calling. Reduce no-shows with automatic reminders.

**2. Doctor Profiles Build Trust**
Patients want to know who will treat them. A photo, qualifications, and experience page instantly builds credibility.

**3. Show Your Services Clearly**
Listing your specialities, timings, fees, and insurance accepted reduces calls asking basic questions.

**4. Google My Business + Website = More Patients**
A website dramatically boosts your local Google ranking. Patients searching "best cardiologist in Pune" will find you.

**5. Share Health Tips to Build Authority**
A simple blog with health tips keeps patients engaged and improves your SEO.

## What SitePods Includes for Clinics

- Doctor profile pages
- Online appointment booking form
- Services and fee listing
- Location map and directions
- Mobile-friendly design

Starting ₹499/month. Ready in 7 days.
    `,
  },
  "website-vs-social-media": {
    title: "Website vs Instagram Page: Which Is Better for Your Business?",
    category: "Strategy",
    readTime: "6 min read",
    date: "May 2025",
    gradient: "from-violet-500 to-pink-500",
    content: `
Many Indian business owners ask: "Do I need a website if I already have an Instagram page?" The honest answer: both are important, but they serve very different purposes.

## What Instagram Does Well

- Visual discovery — great for food, fashion, beauty
- Direct DMs from interested customers
- Stories and Reels for engagement
- Free to use

## Where Instagram Falls Short

- **You don't own it.** Instagram can ban your account, reduce reach, or shut down tomorrow
- **Zero Google ranking.** Instagram posts don't show up in Google search results
- **No booking or ordering.** You can't take appointments or orders natively
- **Hard to find specific info.** Menus, prices, service lists — all lost in posts

## What a Website Does Well

- **Google SEO** — customers searching "salon near me" find you
- **Credibility** — a website signals you're a serious business
- **Full control** — your design, your content, your data
- **Booking, ordering, contact forms** — all in one place
- **Portfolio and testimonials** — build trust before they even contact you

## The Answer

Use both, but build your website first. Your website is the foundation — your Instagram sends traffic to it. Without a website, you're building on someone else's platform.

SitePods gets your website live in 7 days, starting ₹499/month.
    `,
  },
  "seo-for-small-business-india": {
    title: "Beginner's Guide to SEO for Small Businesses in India",
    category: "SEO",
    readTime: "8 min read",
    date: "April 2025",
    gradient: "from-green-400 to-emerald-500",
    content: `
SEO (Search Engine Optimization) is how your business shows up on Google when someone searches for what you offer — without paying for ads. Done right, it's the best long-term marketing investment for any small business.

## The Three Pillars of Local SEO

**1. Google My Business (Now Google Business Profile)**
This is the single most important thing you can do. Claim and fully fill out your Google Business Profile with:
- Business name, address, phone
- Category and services
- Opening hours
- Photos (at least 10)
- Respond to all reviews

**2. Your Website**
A website with the right keywords helps you rank. Key pages:
- Home page with clear description of what you do and where
- Services page listing each offering
- Contact page with full address and phone

**3. Local Keywords**
Include your city and neighbourhood in your content. Instead of "best pizza", write "best pizza in Koregaon Park, Pune". Real customers search with location.

## Quick Wins

- Add your business name, address, phone consistently everywhere (website, Google, Justdial, Sulekha)
- Get 5-star reviews on Google — ask happy customers to leave one
- Make your website mobile-friendly and fast

## What SitePods Includes

Every SitePods website comes with basic SEO setup — meta tags, sitemap, mobile optimization, and Google Search Console integration. Premium plans include monthly SEO reports and keyword optimization.
    `,
  },
  "hotel-website-direct-bookings": {
    title: "How Hotels Can Get More Direct Bookings and Skip OTA Commissions",
    category: "Hotel",
    readTime: "5 min read",
    date: "April 2025",
    gradient: "from-amber-400 to-yellow-500",
    content: `
MakeMyTrip, Booking.com, and Goibibo charge hotels 15–25% commission per booking. For a ₹3,000/night room, that's ₹750 per booking going to the OTA.

A direct booking through your own website? Zero commission.

## Why Guests Book Through OTAs (And How to Change That)

Guests book on OTAs because:
- It feels safe (reviews, photos, easy comparison)
- They don't know about your direct booking option
- No incentive to book direct

**Your hotel website can fix all three.**

## What Your Hotel Website Should Have

**1. Best Rate Guarantee**
Show "Book direct for the best rate" prominently. Offer a 5% discount or free breakfast for direct bookings.

**2. High-Quality Photos**
At least 20 professional photos — rooms, amenities, view, restaurant, pool. Photos sell rooms.

**3. Simple Booking Form**
A clear availability form with WhatsApp confirmation. No complex booking engine needed to start.

**4. Guest Reviews**
Embed your Google reviews or display testimonials prominently.

**5. Local Attractions Page**
A page about things to do near your hotel helps with Google SEO and shows guests you care about their experience.

## The Numbers

A hotel doing ₹50 lakh/month through OTAs pays ₹7.5–12.5 lakh in commissions. Converting even 20% to direct saves ₹1.5–2.5 lakh per month.

SitePods builds hotel websites starting ₹999/month. The ROI pays for itself with the first direct booking.
    `,
  },
  "website-cost-india-2025": {
    title: "How Much Does a Business Website Cost in India? (2025 Guide)",
    category: "Pricing",
    readTime: "7 min read",
    date: "March 2025",
    gradient: "from-indigo-500 to-purple-600",
    content: `
One of the most common questions from Indian business owners: "How much does a website cost?" The honest answer: it depends — but here's a full breakdown.

## Option 1: Hire a Freelancer

**Cost: ₹20,000 – ₹1,00,000 upfront**

What you get:
- Custom design (quality varies widely)
- 5-10 pages
- 2-3 rounds of revisions

What you DON'T get:
- Ongoing maintenance
- Hosting (₹3,000–10,000/year extra)
- SSL certificate (often extra)
- Updates after delivery (paid separately, ₹500–₹2,000 per change)
- Support when something breaks

**Hidden costs:** After 1-2 years, most freelancer-built websites break or look dated, requiring another ₹20,000–₹50,000 rebuild.

## Option 2: DIY Website Builder (Wix, Squarespace)

**Cost: ₹1,200–₹3,000/month**

What you get:
- Templates to build yourself
- Hosting included

What you DON'T get:
- Custom design
- Anyone to help you build it
- SEO optimization
- Content updates done for you

**Hidden cost:** Your time. Building and maintaining your own website is a part-time job.

## Option 3: SitePods (Fully Managed Subscription)

**Cost: ₹499–₹1,999/month, zero setup fee**

What you get:
- Professional custom design
- Hosting + SSL included
- Mobile responsive
- SEO ready
- Ongoing maintenance
- Content updates included (Growth & Premium plans)
- Support when you need it

**No hidden costs.** Everything included in one monthly subscription. Cancel anytime.

## The Real Comparison

| | Freelancer | Wix | SitePods |
|---|---|---|---|
| Year 1 cost | ₹70,000+ | ₹18,000–₹36,000 | ₹5,988–₹23,988 |
| Ongoing support | ❌ | ❌ | ✅ |
| Maintenance | ❌ | DIY | ✅ |

SitePods is the most cost-effective option for businesses that want a professional website without the hassle.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.content.slice(0, 160).replace(/[#*\n]/g, " ").trim(),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const paragraphs = post.content
    .trim()
    .split("\n")
    .filter((l) => l.trim() !== "");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24 bg-white dark:bg-gray-950">
        {/* Hero banner */}
        <div className={`w-full h-52 bg-gradient-to-br ${post.gradient} flex items-center justify-center mb-0`}>
          <span className="text-white/15 text-[10rem] font-black select-none leading-none">
            {post.category.charAt(0)}
          </span>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
          {/* Card */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 md:p-12 mb-12">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" /> {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose dark:prose-invert max-w-none">
              {paragraphs.map((line, i) => {
                if (line.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3"
                    >
                      {line.replace("## ", "")}
                    </h2>
                  );
                }
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <p key={i} className="font-bold text-gray-900 dark:text-white mt-4 mb-1">
                      {line.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-400 leading-relaxed ml-4 list-disc"
                    >
                      {line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                    </li>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
