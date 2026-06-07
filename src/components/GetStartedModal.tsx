"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  X,
  Send,
  CheckCircle,
  Zap,
  TrendingUp,
  Crown,
  ArrowRight,
} from "lucide-react";

const WEB3FORMS_KEY = "179cbab0-ac47-4631-b2db-f66120797cf5";

const packages = [
  {
    id: "starter",
    label: "Starter — ₹499/month",
    icon: Zap,
    color: "text-blue-500",
    desc: "5 Pages, Hosting, SSL, Contact Form",
  },
  {
    id: "growth",
    label: "Growth — ₹999/month",
    icon: TrendingUp,
    color: "text-indigo-500",
    desc: "10 Pages, SEO, Analytics, Priority Support",
  },
  {
    id: "premium",
    label: "Premium — ₹1999/month",
    icon: Crown,
    color: "text-purple-500",
    desc: "Unlimited Pages, Blog, E-commerce, Dedicated Manager",
  },
];

type Props = { children: React.ReactNode };

export default function GetStartedModal({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Enquiry — ${form.package} Plan — ${form.name}`,
          from_name: "SitePods Get Started Form",
          name: form.name,
          email: form.email,
          phone: form.phone,
          package: form.package,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setError(data.message || "Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        setError("");
        setForm({ name: "", email: "", phone: "", package: "" });
      }, 300);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Panel */}
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-2xl p-6 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">

          {/* Close */}
          <Dialog.Close className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <X className="w-4 h-4" />
          </Dialog.Close>

          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                We&apos;ll be in touch!
              </Dialog.Title>
              <Dialog.Description className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                Aapki enquiry mil gayi. Hum 4 ghante mein contact karenge.
              </Dialog.Description>
              <Dialog.Close className="btn-gradient inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white">
                Done
              </Dialog.Close>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              <div className="mb-5">
                <Dialog.Title className="text-lg font-bold text-gray-900 dark:text-white">
                  Get Your Website Started
                </Dialog.Title>
                <Dialog.Description className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  Fill in below — hum aapko 4 ghante mein call karenge.
                </Dialog.Description>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                {/* Package selector */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                    Package Chunein *
                  </label>
                  <div className="space-y-2">
                    {packages.map(({ id, label, icon: Icon, color, desc }) => (
                      <label
                        key={id}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-150 ${
                          form.package === label
                            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40"
                            : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="package"
                          value={label}
                          checked={form.package === label}
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                        <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-gray-900 dark:text-white">{label}</div>
                          <div className="text-[10px] text-gray-400">{desc}</div>
                        </div>
                        <div className={`ml-auto w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          form.package === label
                            ? "border-indigo-500 bg-indigo-500"
                            : "border-gray-300 dark:border-gray-600"
                        }`}>
                          {form.package === label && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                      Aapka Naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ramesh Kumar"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ramesh@yourbusiness.com"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                {error && (
                  <div className="px-3 py-2.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-xs text-red-600 dark:text-red-400">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gradient flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Enquiry
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-gray-400 text-center">
                  No spam. We&apos;ll only contact you about your website enquiry.
                </p>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
