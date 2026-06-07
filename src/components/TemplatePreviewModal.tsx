"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, ExternalLink, UtensilsCrossed, Stethoscope, Building2, BookOpen, Scale, Rocket, Phone, Mail, MapPin, Star, Check } from "lucide-react";
import GetStartedModal from "./GetStartedModal";

/* ─── Mini reusable UI pieces ─────────────────────────────────────── */
function NavBar({ name, links, accent }: { name: string; links: string[]; accent: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className={`font-bold text-sm ${accent}`}>{name}</div>
      <div className="hidden sm:flex gap-4">
        {links.map((l) => <span key={l} className="text-xs text-gray-500 cursor-pointer hover:text-gray-900">{l}</span>)}
      </div>
      <div className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white" style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}>
        Contact Us
      </div>
    </div>
  );
}

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="text-center mb-6">
      <h3 className="text-base font-extrabold text-gray-900">{title}</h3>
      <p className="text-xs text-gray-400 mt-1">{sub}</p>
    </div>
  );
}

/* ─── Template 1: Restaurant ───────────────────────────────────────── */
function RestaurantTemplate() {
  return (
    <div className="bg-white text-gray-900 overflow-y-auto max-h-[60vh]">
      <NavBar name="🍽 Spice Garden" links={["Menu", "About", "Gallery", "Reserve"]} accent="text-orange-600" />
      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-500 to-red-600 px-6 py-10 text-white text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 opacity-80">Est. 2015 · Ahmedabad</p>
        <h1 className="text-2xl font-extrabold mb-2">Authentic Indian Cuisine</h1>
        <p className="text-sm opacity-80 mb-5 max-w-sm mx-auto">Fresh ingredients, traditional recipes, unforgettable flavours. Dine in or order online.</p>
        <div className="flex justify-center gap-3">
          <button className="bg-white text-orange-600 text-xs font-bold px-4 py-2 rounded-xl">View Menu</button>
          <button className="border border-white text-white text-xs font-bold px-4 py-2 rounded-xl">Reserve Table</button>
        </div>
      </div>
      {/* Menu highlights */}
      <div className="px-6 py-8">
        <SectionTitle title="Today's Specials" sub="Chef's recommended dishes" />
        <div className="grid grid-cols-3 gap-3">
          {[["Dal Makhani","₹280"],["Paneer Tikka","₹320"],["Butter Naan","₹60"],["Biryani","₹380"],["Gulab Jamun","₹120"],["Lassi","₹80"]].map(([n,p]) => (
            <div key={n} className="rounded-xl bg-orange-50 border border-orange-100 p-3 text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs font-bold text-gray-800">{n}</p>
              <p className="text-xs text-orange-500 font-semibold">{p}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Gallery */}
      <div className="px-6 pb-8">
        <SectionTitle title="Our Ambience" sub="A feast for the eyes too" />
        <div className="grid grid-cols-4 gap-2">
          {["from-orange-300 to-red-400","from-amber-300 to-orange-400","from-red-300 to-pink-400","from-yellow-300 to-amber-400"].map((c,i) => (
            <div key={i} className={`h-16 rounded-xl bg-gradient-to-br ${c}`} />
          ))}
        </div>
      </div>
      {/* Contact */}
      <div className="bg-gray-900 text-white px-6 py-6 text-center">
        <p className="text-xs font-bold mb-3">Visit Us</p>
        <div className="flex justify-center gap-6 text-xs text-gray-300">
          <span>📍 CG Road, Ahmedabad</span><span>📞 +91 98765 43210</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Template 2: Clinic ────────────────────────────────────────────── */
function ClinicTemplate() {
  return (
    <div className="bg-white overflow-y-auto max-h-[60vh]">
      <NavBar name="⚕ LifeCare Clinic" links={["Home", "Doctors", "Services", "Book"]} accent="text-blue-600" />
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 px-6 py-10 text-white text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 opacity-80">Trusted Healthcare Since 2010</p>
        <h1 className="text-2xl font-extrabold mb-2">Your Health, Our Priority</h1>
        <p className="text-sm opacity-80 mb-5 max-w-sm mx-auto">Expert doctors, modern facilities, and compassionate care — all under one roof.</p>
        <button className="bg-white text-blue-600 text-xs font-bold px-5 py-2.5 rounded-xl shadow">Book Appointment</button>
      </div>
      {/* Services */}
      <div className="px-6 py-8">
        <SectionTitle title="Our Specialities" sub="Comprehensive medical care" />
        <div className="grid grid-cols-3 gap-3">
          {[["Cardiology","❤️"],["Orthopaedics","🦴"],["Paediatrics","👶"],["Dermatology","🌟"],["Dentistry","🦷"],["General OPD","🩺"]].map(([name, emoji]) => (
            <div key={name} className="rounded-xl border border-blue-100 bg-blue-50 p-3 text-center">
              <div className="text-2xl mb-1">{emoji}</div>
              <p className="text-[10px] font-bold text-gray-700">{name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Doctors */}
      <div className="px-6 pb-8">
        <SectionTitle title="Our Doctors" sub="Experienced specialists" />
        <div className="grid grid-cols-3 gap-3">
          {[["Dr. Mehta","Cardiologist","from-blue-400 to-cyan-500"],["Dr. Sharma","Orthopaedic","from-indigo-400 to-blue-500"],["Dr. Patel","Paediatrician","from-cyan-400 to-teal-500"]].map(([name,spec,color]) => (
            <div key={name} className="rounded-xl border border-gray-100 p-3 text-center">
              <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs font-bold text-gray-800">{name}</p>
              <p className="text-[10px] text-gray-400">{spec}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-600 text-white px-6 py-5 text-center">
        <p className="text-sm font-bold mb-1">24/7 Emergency Line</p>
        <p className="text-xs opacity-80">📞 +91 98765 43210</p>
      </div>
    </div>
  );
}

/* ─── Template 3: Hotel ─────────────────────────────────────────────── */
function HotelTemplate() {
  return (
    <div className="bg-white overflow-y-auto max-h-[60vh]">
      <NavBar name="🏨 Royal Palms" links={["Rooms", "Amenities", "Gallery", "Book"]} accent="text-amber-700" />
      <div className="bg-gradient-to-br from-amber-500 to-yellow-600 px-6 py-10 text-white text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 opacity-80">5-Star Luxury · Jaipur</p>
        <h1 className="text-2xl font-extrabold mb-2">Where Luxury Meets Comfort</h1>
        <p className="text-sm opacity-80 mb-5 max-w-sm mx-auto">Experience royal hospitality in the heart of the Pink City. Book direct for best rates.</p>
        <button className="bg-white text-amber-700 text-xs font-bold px-5 py-2.5 rounded-xl shadow">Check Availability</button>
      </div>
      {/* Rooms */}
      <div className="px-6 py-8">
        <SectionTitle title="Our Rooms & Suites" sub="Luxury accommodation for every need" />
        <div className="grid grid-cols-3 gap-3">
          {[["Standard","₹3,499/night","from-amber-200 to-yellow-300"],["Deluxe","₹5,999/night","from-orange-300 to-amber-400"],["Suite","₹9,999/night","from-yellow-400 to-amber-500"]].map(([type,price,color]) => (
            <div key={type} className="rounded-xl overflow-hidden border border-amber-100">
              <div className={`h-14 bg-gradient-to-br ${color}`} />
              <div className="p-2 text-center">
                <p className="text-xs font-bold text-gray-800">{type}</p>
                <p className="text-[10px] text-amber-600 font-semibold">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Amenities */}
      <div className="px-6 pb-8">
        <SectionTitle title="Amenities" sub="Everything you need" />
        <div className="flex flex-wrap gap-2 justify-center">
          {["🏊 Pool","🧖 Spa","🍽 Restaurant","🏋 Gym","🚗 Valet","📶 Free WiFi","🍳 Breakfast","🌿 Garden"].map((a) => (
            <span key={a} className="text-[10px] bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full text-amber-700 font-medium">{a}</span>
          ))}
        </div>
      </div>
      <div className="bg-amber-800 text-white px-6 py-5 text-center">
        <p className="text-xs font-bold mb-1">📍 MI Road, Jaipur · 📞 +91 98765 43210</p>
      </div>
    </div>
  );
}

/* ─── Template 4: Education ─────────────────────────────────────────── */
function EducationTemplate() {
  return (
    <div className="bg-white overflow-y-auto max-h-[60vh]">
      <NavBar name="📚 BrightMinds" links={["Courses", "Faculty", "Results", "Admissions"]} accent="text-green-700" />
      <div className="bg-gradient-to-br from-green-600 to-emerald-500 px-6 py-10 text-white text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 opacity-80">Top Coaching · Since 2008</p>
        <h1 className="text-2xl font-extrabold mb-2">Shape Your Future with Us</h1>
        <p className="text-sm opacity-80 mb-5 max-w-sm mx-auto">Expert faculty, proven results, and personalised learning — from Class 8 to IIT/NEET.</p>
        <button className="bg-white text-green-700 text-xs font-bold px-5 py-2.5 rounded-xl shadow">Apply Now</button>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 px-6 py-6 bg-green-50">
        {[["1200+","Students"],["95%","Pass Rate"],["50+","Faculty"],["15","Years"]].map(([v,l]) => (
          <div key={l} className="text-center">
            <p className="text-lg font-extrabold text-green-600">{v}</p>
            <p className="text-[10px] text-gray-500">{l}</p>
          </div>
        ))}
      </div>
      {/* Courses */}
      <div className="px-6 py-8">
        <SectionTitle title="Our Courses" sub="Expert coaching for every exam" />
        <div className="grid grid-cols-2 gap-3">
          {[["IIT-JEE","Physics, Chemistry, Maths","from-green-400 to-emerald-500"],["NEET","Biology, Chemistry","from-teal-400 to-green-500"],["Board Exams","Class 10 & 12","from-emerald-400 to-cyan-500"],["Foundation","Class 8 & 9","from-cyan-400 to-teal-500"]].map(([name,sub,color]) => (
            <div key={name} className="rounded-xl border border-green-100 p-3 flex items-center gap-3">
              <div className={`w-9 h-9 bg-gradient-to-br ${color} rounded-xl flex-shrink-0 flex items-center justify-center`}>
                <BookOpen className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">{name}</p>
                <p className="text-[10px] text-gray-400">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-green-700 text-white px-6 py-5 text-center">
        <p className="text-xs font-bold mb-1">Admissions Open · Limited Seats</p>
        <p className="text-[10px] opacity-80">📞 +91 98765 43210</p>
      </div>
    </div>
  );
}

/* ─── Template 5: Law Firm ─────────────────────────────────────────── */
function LawTemplate() {
  return (
    <div className="bg-white overflow-y-auto max-h-[60vh]">
      <NavBar name="⚖ Veritas Law" links={["Practice Areas", "Team", "Cases", "Contact"]} accent="text-indigo-800" />
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 px-6 py-10 text-white text-center">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 opacity-60">Advocates & Legal Consultants</p>
        <h1 className="text-2xl font-extrabold mb-2">Justice. Integrity. Excellence.</h1>
        <p className="text-sm opacity-70 mb-5 max-w-sm mx-auto">25 years of courtroom experience. Trusted by 500+ clients across India for all legal matters.</p>
        <button className="bg-white text-indigo-900 text-xs font-bold px-5 py-2.5 rounded-xl shadow">Book Consultation</button>
      </div>
      {/* Practice Areas */}
      <div className="px-6 py-8">
        <SectionTitle title="Practice Areas" sub="Expert legal counsel across domains" />
        <div className="grid grid-cols-3 gap-3">
          {[["Corporate Law","🏢"],["Criminal Defence","🔒"],["Family Law","👨‍👩‍👧"],["Property Law","🏠"],["Civil Litigation","📋"],["IPR","💡"]].map(([a,e]) => (
            <div key={a} className="rounded-xl border border-indigo-100 bg-indigo-50 p-3 text-center">
              <div className="text-xl mb-1">{e}</div>
              <p className="text-[10px] font-bold text-gray-800">{a}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Team */}
      <div className="px-6 pb-8">
        <SectionTitle title="Our Advocates" sub="Experienced legal professionals" />
        <div className="grid grid-cols-3 gap-3">
          {[["Adv. Sharma","Senior Partner"],["Adv. Gupta","Criminal Law"],["Adv. Verma","Corporate"]].map(([name,role]) => (
            <div key={name} className="rounded-xl border border-gray-100 p-3 text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <p className="text-[10px] font-bold text-gray-800">{name}</p>
              <p className="text-[9px] text-gray-400">{role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-indigo-900 text-white px-6 py-5 text-center">
        <p className="text-xs font-bold mb-1">Free Initial Consultation</p>
        <p className="text-[10px] opacity-70">📞 +91 98765 43210 · Monday to Saturday</p>
      </div>
    </div>
  );
}

/* ─── Template 6: Startup ─────────────────────────────────────────── */
function StartupTemplate() {
  return (
    <div className="bg-white overflow-y-auto max-h-[60vh]">
      <NavBar name="⚡ NexGen" links={["Features", "Pricing", "About", "Sign Up"]} accent="text-violet-600" />
      <div className="bg-gradient-to-br from-violet-600 to-pink-600 px-6 py-10 text-white text-center">
        <span className="text-xs bg-white/20 rounded-full px-3 py-1 font-semibold mb-3 inline-block">🚀 Now in Beta</span>
        <h1 className="text-2xl font-extrabold mb-2 mt-2">Supercharge Your Business Growth</h1>
        <p className="text-sm opacity-80 mb-5 max-w-sm mx-auto">AI-powered tools to automate your workflow, track leads, and close deals faster.</p>
        <div className="flex justify-center gap-3">
          <button className="bg-white text-violet-600 text-xs font-bold px-4 py-2 rounded-xl">Start Free Trial</button>
          <button className="border border-white text-white text-xs font-bold px-4 py-2 rounded-xl">Watch Demo</button>
        </div>
      </div>
      {/* Features */}
      <div className="px-6 py-8">
        <SectionTitle title="Why Businesses Love Us" sub="Everything you need to grow" />
        <div className="grid grid-cols-2 gap-3">
          {[["Lead Tracking","Capture & manage every lead","from-violet-400 to-purple-500"],["AI Analytics","Smart insights & reports","from-pink-400 to-rose-500"],["Automation","Save 10+ hours a week","from-purple-400 to-violet-500"],["Team Collab","Work together seamlessly","from-fuchsia-400 to-pink-500"]].map(([t,d,c]) => (
            <div key={t} className="rounded-xl border border-purple-100 bg-purple-50 p-3">
              <div className={`w-8 h-8 bg-gradient-to-br ${c} rounded-xl mb-2`} />
              <p className="text-xs font-bold text-gray-800">{t}</p>
              <p className="text-[10px] text-gray-400">{d}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Pricing */}
      <div className="px-6 pb-8">
        <SectionTitle title="Simple Pricing" sub="No hidden fees" />
        <div className="grid grid-cols-3 gap-3">
          {([["Free","₹0/mo",["5 Users","Basic Reports"],"border-gray-200"],["Pro","₹999/mo",["50 Users","All Features"],"border-violet-400"],["Enterprise","Custom",["Unlimited","Dedicated Support"],"border-pink-400"]] as [string,string,string[],string][]).map(([plan,price,feats,border]) => (
            <div key={plan} className={`rounded-xl border-2 ${border} p-3 text-center`}>
              <p className="text-xs font-extrabold text-gray-900">{plan}</p>
              <p className="text-sm font-bold text-violet-600 my-1">{price}</p>
              {feats.map((f) => <p key={f} className="text-[9px] text-gray-400">{f}</p>)}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-violet-600 to-pink-600 text-white px-6 py-5 text-center">
        <p className="text-xs font-bold">30-day free trial · No credit card required</p>
      </div>
    </div>
  );
}

/* ─── Template map ─────────────────────────────────────────────────── */
const templateMap: Record<number, { component: React.FC; title: string; color: string }> = {
  1: { component: RestaurantTemplate, title: "Restaurant Template", color: "from-orange-500 to-red-600" },
  2: { component: ClinicTemplate,    title: "Clinic Template",     color: "from-blue-500 to-cyan-600" },
  3: { component: HotelTemplate,     title: "Hotel Template",      color: "from-amber-500 to-yellow-600" },
  4: { component: EducationTemplate, title: "Education Template",  color: "from-green-500 to-emerald-600" },
  5: { component: LawTemplate,       title: "Law Firm Template",   color: "from-indigo-600 to-purple-700" },
  6: { component: StartupTemplate,   title: "Startup Template",    color: "from-violet-500 to-pink-600" },
};

/* ─── Main modal ───────────────────────────────────────────────────── */
type Props = {
  projectId: number;
  children: React.ReactNode;
};

export default function TemplatePreviewModal({ projectId, children }: Props) {
  const tpl = templateMap[projectId];
  if (!tpl) return <>{children}</>;
  const TemplateComponent = tpl.component;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white dark:bg-gray-950 shadow-2xl border border-gray-100 dark:border-gray-800 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 overflow-hidden">

          {/* Top bar */}
          <div className={`bg-gradient-to-r ${tpl.color} px-5 py-3.5 flex items-center justify-between`}>
            <div>
              <Dialog.Title className="text-sm font-bold text-white">{tpl.title}</Dialog.Title>
              <Dialog.Description className="text-xs text-white/70">Sample template preview</Dialog.Description>
            </div>
            <Dialog.Close className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white">
              <X className="w-4 h-4" />
            </Dialog.Close>
          </div>

          {/* Browser chrome */}
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white dark:bg-gray-700 rounded-md px-3 py-1 flex items-center gap-1.5 max-w-xs mx-auto">
              <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              <span className="text-[10px] text-gray-400 truncate">sitepods.in/your-business</span>
            </div>
          </div>

          {/* Template preview */}
          <TemplateComponent />

          {/* CTA footer */}
          <div className="flex items-center justify-between px-5 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Want this design?</p>
              <p className="text-xs text-gray-400">Starting ₹499/month — fully managed</p>
            </div>
            <GetStartedModal>
              <button className="inline-flex items-center gap-2 btn-gradient px-4 py-2.5 rounded-xl text-sm font-bold text-white shadow-md">
                Get Started <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </GetStartedModal>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
