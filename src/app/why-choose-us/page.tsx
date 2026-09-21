import React from "react";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  Smartphone,
  Receipt,
  BellRing,
  Heart,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";
import { WHY_CHOOSE_US_ITEMS } from "@/data/siteData";

export const metadata = {
  title: "Why Choose Us | Care For Your Life 24/7",
  description:
    "Discover what makes Care For Your Life 24/7 the preferred assistance platform for families: 24/7 support, verified providers, human dignity, and transparent pricing.",
};

const iconMap = {
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  Smartphone: Smartphone,
  Receipt: Receipt,
  BellRing: BellRing,
  Heart: Heart,
};

export default function WhyChooseUsPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <section className="hero-mesh py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full mb-3">
            The Care For Your Life Difference
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy max-w-3xl mx-auto">
            Why Choose Care For Your Life 24/7?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            We are not just a digital platform — we are a compassionate bridge that brings reliable, verified assistance to your family with the utmost respect and care.
          </p>
        </div>
      </section>

      {/* 6 Key Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Clock;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-brand-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200">
                      0{item.id}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-brand-teal font-semibold flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-brand-green" />
                  Verified Standard
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deep Comparison Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Unmatched Dependability
            </h2>
            <p className="text-slate-500 text-xs mt-1">
              Compare informal, unvetted assistance with our structured service network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-red-100 shadow-2xs">
              <h3 className="text-base font-bold text-red-600 mb-4">
                Informal / Unorganized Helpers
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Uncertain background checks or identification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>No accountability if assistant arrives late or cancels</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Unpredictable pricing and surprise fee demands</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>No digital tracking or summary reports for remote family members</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-2xs">
              <h3 className="text-base font-bold text-emerald-700 mb-4">
                Care For Your Life 24/7 Platform
              </h3>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% ID and background-checked service assistants</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>24/7 dedicated coordination desk with live backup support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Transparent, fixed upfront rates with receipts provided</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Instant digital visit reports and photo confirmations for families</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
          Experience the Peace of Mind You Deserve
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/book"
            className="px-6 py-3.5 bg-brand-primary hover:bg-brand-deep text-white font-bold text-xs rounded-btn transition-colors"
          >
            Book a Service Now
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-btn transition-colors"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
