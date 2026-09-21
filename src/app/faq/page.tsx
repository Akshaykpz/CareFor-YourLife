"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQS } from "@/data/siteData";
import { ChevronDown, ChevronUp, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <section className="hero-mesh py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full mb-3">
            Knowledge & Clarifications
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy max-w-3xl mx-auto">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Everything you need to know about our services, booking process, safety protocols, and provider verification.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-brand-navy pr-4">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-primary" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 bg-brand-ice border border-sky-200 rounded-3xl p-8 text-center">
          <HelpCircle className="w-8 h-8 text-brand-primary mx-auto mb-2" />
          <h2 className="text-xl font-bold text-brand-navy">
            Still have questions?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-md mx-auto">
            Our 24/7 care coordination desk is ready to answer specific questions regarding your location and medical requirements.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-brand-primary hover:bg-brand-deep text-white text-xs font-bold rounded-btn transition-colors"
            >
              Contact Support Desk
            </Link>
            <a
              href="tel:+918000000000"
              className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold rounded-btn transition-colors flex items-center"
            >
              <PhoneCall className="w-3.5 h-3.5 mr-1 text-brand-primary" />
              Call Helpline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
