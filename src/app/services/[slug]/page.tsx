import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SERVICES_DATA,
  ServiceItem,
} from "@/data/siteData";
import {
  Hospital,
  HeartHandshake,
  Pill,
  TestTube2,
  Clock,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Calendar,
  Sparkles,
} from "lucide-react";

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Care For Your Life 24/7`,
    description: service.shortDesc,
  };
}

const iconMap = {
  Hospital: Hospital,
  HeartHandshake: HeartHandshake,
  Pill: Pill,
  TestTube2: TestTube2,
  Clock: Clock,
  AlertCircle: AlertCircle,
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Hospital;
  const isEmergency = service.isEmergency;

  return (
    <div className="space-y-20 pb-24">
      {/* Service Hero Header */}
      <section
        className={`py-16 sm:py-24 border-b ${
          isEmergency
            ? "bg-gradient-to-b from-red-50/70 to-white border-red-100"
            : "hero-mesh border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  isEmergency
                    ? "bg-red-600 text-white"
                    : "bg-sky-100 text-brand-primary"
                }`}
              >
                {service.category}
              </span>
              {service.badge && (
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {service.badge}
                </span>
              )}
            </div>

            <h1
              className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                isEmergency ? "text-red-700" : "text-brand-navy"
              }`}
            >
              {service.title}
            </h1>

            <p className="text-lg text-slate-600 mt-4 leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/book?service=${service.id}`}
                className={`px-7 py-3.5 text-sm font-bold rounded-btn transition-colors shadow-sm flex items-center space-x-2 ${
                  isEmergency
                    ? "bg-red-600 hover:bg-red-700 text-white shadow-red-200"
                    : "bg-brand-primary hover:bg-brand-deep text-white shadow-sky-200"
                }`}
              >
                <span>{service.actionText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+918000000000"
                className="px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-btn transition-colors flex items-center space-x-2"
              >
                <PhoneCall className="w-4 h-4 text-brand-primary" />
                <span>Call 24/7 Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Key Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Features Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-subtle">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">
              Included Features & Scope
            </h2>
            <div className="space-y-4">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50/70 border border-slate-100"
                >
                  <CheckCircle2
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      isEmergency ? "text-red-600" : "text-emerald-500"
                    }`}
                  />
                  <div>
                    <span className="text-sm font-semibold text-slate-800">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-brand-navy mb-3">
                Key Benefits for Clients
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Summary Booking Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-ice via-white to-sky-50 rounded-3xl p-8 border border-sky-100 shadow-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isEmergency
                      ? "bg-red-600 text-white"
                      : "bg-brand-primary text-white"
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-navy">
                    {service.title}
                  </h3>
                  <span className="text-xs text-brand-teal font-semibold">
                    Care For Your Life 24/7 Verified
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-2xs space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400">Response Window:</span>
                  <span className="font-semibold text-slate-800">
                    {isEmergency ? "Priority Immediate" : "Scheduled / Same-day"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Provider Verification:</span>
                  <span className="font-semibold text-emerald-600">100% Cleared</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tracking:</span>
                  <span className="font-semibold text-slate-800">Real-time status updates</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Helpline:</span>
                  <span className="font-semibold text-brand-primary">24/7 Desk Support</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 leading-relaxed">
                Need urgent guidance? Our coordinators are standing by to connect you with verified assistance immediately.
              </div>
            </div>

            <div className="pt-6">
              <Link
                href={`/book?service=${service.id}`}
                className={`w-full py-3.5 text-center text-sm font-bold rounded-btn transition-colors block shadow-sm ${
                  isEmergency
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-brand-primary hover:bg-brand-deep text-white"
                }`}
              >
                Proceed to Book {service.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Delivery Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3 py-1 rounded-full">
              Execution Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-2">
              How {service.title} Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.howItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs relative"
              >
                <div className="text-3xl font-extrabold text-brand-bright/25 mb-2">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to all services & Next Service links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-bold">
        <Link
          href="/services"
          className="text-brand-primary hover:text-brand-deep flex items-center"
        >
          ← Back to All Services
        </Link>
        <Link
          href="/book"
          className="text-emerald-700 hover:text-emerald-900 flex items-center"
        >
          Request Service Online →
        </Link>
      </section>
    </div>
  );
}
