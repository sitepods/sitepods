import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog – SitePods | Website Tips for Indian Businesses",
  description:
    "Guides, tips, and insights to help small and medium businesses in India grow online. Learn about websites, SEO, and digital marketing.",
};

const posts = [
  {
    slug: "restaurant-website-india",
    title: "Why Your Restaurant Needs a Website in 2025 (Not Just Zomato)",
    excerpt:
      "Zomato and Swiggy take 20–30% commission on every order. A website lets you own your customers, run direct promotions, and build your brand — starting at ₹499/month.",
    category: "Restaurant",
    readTime: "5 min read",
    date: "June 2025",
    gradient: "from-orange-400 to-red-500",
  },
  {
    slug: "clinic-website-benefits",
    title: "5 Reasons Every Clinic Should Have a Website (With Appointment Booking)",
    excerpt:
      "Patients Google their doctor before visiting. A professional website with online appointment booking builds trust and fills your calendar automatically.",
    category: "Clinic",
    readTime: "4 min read",
    date: "May 2025",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    slug: "website-vs-social-media",
    title: "Website vs Instagram Page: Which Is Better for Your Business?",
    excerpt:
      "Social media is rented land — algorithms change and accounts get banned. Your website is an asset you own forever. Here's why both matter, but one matters more.",
    category: "Strategy",
    readTime: "6 min read",
    date: "May 2025",
    gradient: "from-violet-500 to-pink-500",
  },
  {
    slug: "seo-for-small-business-india",
    title: "Beginner's Guide to SEO for Small Businesses in India",
    excerpt:
      "SEO is how customers find you on Google without paying for ads. Learn the basics — local SEO, keywords, and page speed — in plain language.",
    category: "SEO",
    readTime: "8 min read",
    date: "April 2025",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    slug: "hotel-website-direct-bookings",
    title: "How Hotels Can Get More Direct Bookings and Skip OTA Commissions",
    excerpt:
      "OTAs like MakeMyTrip take 15–25% per booking. A well-designed hotel website with a clear booking CTA can dramatically increase direct revenue.",
    category: "Hotel",
    readTime: "5 min read",
    date: "April 2025",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    slug: "website-cost-india-2025",
    title: "How Much Does a Business Website Cost in India? (2025 Guide)",
    excerpt:
      "Freelancers charge ₹20,000–₹1 lakh. Agencies charge even more. SitePods offers fully managed websites starting ₹499/month with zero setup cost. Full breakdown inside.",
    category: "Pricing",
    readTime: "7 min read",
    date: "March 2025",
    gradient: "from-indigo-500 to-purple-600",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
              SitePods Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
              Grow Your Business{" "}
              <span className="gradient-text">Online</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Practical guides for Indian business owners on websites, SEO, and digital growth.
            </p>
          </div>

          {/* Featured post */}
          <div className="mb-8">
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group block rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${posts[0].gradient} relative flex items-center justify-center`}>
                <span className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-white/20 text-[8rem] font-black select-none leading-none">
                  {posts[0].category.charAt(0)}
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Tag className="w-3 h-3" /> {posts[0].category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="w-3 h-3" /> {posts[0].readTime}
                  </span>
                  <span className="text-xs text-gray-400">{posts[0].date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {posts[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className={`h-32 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <span className="text-white/20 text-[5rem] font-black select-none leading-none">
                    {post.category.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
