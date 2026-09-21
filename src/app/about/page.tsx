import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Heart,
  Users,
  Compass,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Us | Care For Your Life 24/7",
  description:
    "Learn about Care For Your Life 24/7, our mission to simplify healthcare and daily assistance, and our human-first values.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero Header */}
      <section className="hero-mesh py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full mb-4">
            Who We Are
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight max-w-3xl mx-auto">
            About Care For Your Life 24/7
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Care For Your Life 24/7 is designed to make everyday assistance and healthcare-related support easier to access. We connect people who need assistance with trusted service providers through a simple digital platform.
          </p>
          <div className="mt-6 flex justify-center items-center space-x-3 text-sm text-brand-teal font-semibold">
            <span>Support</span>
            <span>•</span>
            <span>Connect</span>
            <span>•</span>
            <span>Simplify</span>
          </div>
        </div>
      </section>

      {/* Origin & Human Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3 py-1 rounded-full">
              Our Purpose
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy">
              Practical Assistance for Everyday Life.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              In an increasingly fast-paced world, families are often separated across cities and busy work schedules. When an elderly parent needs to visit a crowded hospital, when routine prescriptions run out, or when important local errands need supervision, distance and lack of time become heavy burdens.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Care For Your Life 24/7 was created to eliminate this anxiety. We provide an organized, verified network of assistants and certified healthcare partners who step in with kindness, empathy, and professional integrity.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Transparent verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Round-the-clock coordination</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Indian-market family focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Dignified care for seniors</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-tr from-brand-ice to-teal-50/50 rounded-3xl p-8 border border-sky-100 shadow-card">
            <h3 className="text-xl font-bold text-brand-navy mb-4">
              The 4 Pillars of Our Platform
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-2xs">
                <h4 className="text-sm font-bold text-brand-primary">1. Support</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Active, hands-on assistance tailored to vulnerable individuals, busy professionals, and seniors.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-2xs">
                <h4 className="text-sm font-bold text-brand-teal">2. Connection</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Connecting families with verified helpers and keeping all parties updated in real time.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-2xs">
                <h4 className="text-sm font-bold text-brand-bright">3. Convenience</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Single digital interface for lab tests, hospital visits, medicine deliveries, and daily errands.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-2xs">
                <h4 className="text-sm font-bold text-emerald-600">4. Reliability</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Strict vetting, background validation, and predictable service standards with 24/7 help desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-brand-primary flex items-center justify-center mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Our Mission
                </span>
                <h2 className="text-2xl font-extrabold text-brand-navy mt-2 mb-4">
                  To make essential assistance easier to access.
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We are committed to connecting people with reliable, dignified support whenever they need it — removing administrative headaches, fear of unattended hospital queues, and the isolation of seniors.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                  Our Vision
                </span>
                <h2 className="text-2xl font-extrabold text-brand-navy mt-2 mb-4">
                  A trusted support ecosystem for all.
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To build a widely trusted support ecosystem that helps individuals and families manage everyday care, health logistics, and urgent assistance effortlessly across every community we touch.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3 py-1 rounded-full">
            Our Guiding Principles
          </span>
          <h2 className="text-3xl font-extrabold text-brand-navy mt-3">
            Values That Drive Us Forward
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Every feature we design and every service provider we approve reflects these four core commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-1">Care</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We put people&apos;s needs first. Compassion and respect guide every interaction.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-1">Trust</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We focus on responsible and transparent service with thorough background vetting.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-primary flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-1">Connection</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We bridge families and service providers through intuitive, real-time technology.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-1">Simplicity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We make accessing assistance intuitive, transparent, and hassle-free.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Want to learn more or speak with our team?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
            Our 24/7 care coordination desk is always happy to answer your questions and help you configure customized care plans.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-brand-bright hover:bg-sky-600 text-white font-bold text-xs rounded-btn transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-btn transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
