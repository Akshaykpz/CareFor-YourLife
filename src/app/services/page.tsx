import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/siteData";
import ServiceCard from "@/components/ServiceCard";
import { ShieldCheck, HeartHandshake, ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "All Services | Care For Your Life 24/7",
  description:
    "Explore our complete range of healthcare and daily assistance services: Hospital Assistance, Elder Care, Medicine Delivery, Lab Test Visits, Daily Assistance, and Emergency SOS.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <section className="hero-mesh py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full mb-3">
            Our Offerings
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy max-w-3xl mx-auto">
            Comprehensive Services Designed Around Real Lives
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Whether caring for elderly parents, getting through busy hospital procedures, or managing unexpected needs, our verified support network is at your side.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Service Promise Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-ice border border-sky-200 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-navy">Vetted Providers</h3>
                <p className="text-xs text-slate-500 mt-0.5">Thorough identity & police clearances where applicable.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-teal text-white flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-navy">Compassionate Support</h3>
                <p className="text-xs text-slate-500 mt-0.5">Trained to handle vulnerable patients and seniors with care.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-navy">24/7 Coordinator Desk</h3>
                <p className="text-xs text-slate-500 mt-0.5">Round-the-clock help desk ensuring smooth service execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Prompt */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
          Need a customized service package for your family?
        </h2>
        <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
          Contact our support coordinators to arrange tailored weekly routines or multi-service combinations.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/book"
            className="px-6 py-3 bg-brand-primary hover:bg-brand-deep text-white font-bold text-xs rounded-btn transition-colors"
          >
            Start Booking Now
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-btn transition-colors"
          >
            Request Custom Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
