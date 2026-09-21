import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  AlertCircle,
  ThumbsUp,
  PhoneCall,
  Calendar,
} from "lucide-react";
import {
  SERVICES_DATA,
  HOW_IT_WORKS_STEPS,
  FAQS,
} from "@/data/siteData";
import ServiceCard from "@/components/ServiceCard";

export default function HomePage() {
  return (
    <div className="space-y-14 md:space-y-18 pb-20 bg-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Narayana Health Inspired Fresh White & Cool Blue */}
      {/* ========================================================================= */}
      <section className="relative hero-narayana-gradient pt-8 pb-14 md:pt-12 md:pb-16 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Focused Messaging */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-[#034EA2] text-sm font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-[#034EA2] animate-pulse" />
                <span>Trusted Healthcare & Everyday Life Assistance</span>
              </div>

              {/* Primary Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1B39] tracking-tight leading-tight">
                Care For Your Life,{" "}
                <span className="text-[#034EA2]">
                  Every Step of the Way.
                </span>
              </h1>

              {/* Supporting Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Reliable support for hospital visits, elder care, medicine delivery, at-home lab tests and daily errands. When you cannot be there in person, our verified caregivers step in with kindness.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/book"
                  className="w-full sm:w-auto px-7 py-4 text-base font-bold text-white bg-[#034EA2] hover:bg-[#023774] rounded-btn shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Service</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="tel:+918000000000"
                  className="w-full sm:w-auto px-6 py-4 text-base font-bold text-[#0A1B39] bg-white hover:bg-slate-50 border border-slate-200 rounded-btn shadow-xs transition-colors flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-5 h-5 text-[#034EA2]" />
                  <span>1800-000-2470</span>
                </a>
              </div>

              {/* Micro Trust Strip */}
              <div className="pt-5 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-700 font-medium">
                <span className="flex items-center">
                  <ShieldCheck className="w-5 h-5 text-[#034EA2] mr-2" />
                  100% Verified Staff
                </span>
                <span className="flex items-center">
                  <Clock className="w-5 h-5 text-[#034EA2] mr-2" />
                  24/7 Helpline
                </span>
                <span className="flex items-center">
                  <ThumbsUp className="w-5 h-5 text-emerald-600 mr-2" />
                  Clear Transparent Pricing
                </span>
              </div>
            </div>

            {/* Right Column: Real Professional Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white">
                <div className="relative h-80 sm:h-[420px] w-full">
                  <Image
                    src="/images/hero_care_family.jpg"
                    alt="Care For Your Life Caregiver assisting Indian elderly couple"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge on Image (Responsive) */}
                  <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-lg border border-slate-200 flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2.5 sm:space-x-3.5 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-100 text-[#034EA2] flex items-center justify-center flex-shrink-0">
                        <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-base font-bold text-slate-900 truncate">
                          Compassionate Family Support
                        </div>
                        <div className="text-[11px] sm:text-sm text-slate-600 font-medium truncate">
                          Hospital Escort • Elder Care • Home Diagnostics
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/book"
                      className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#034EA2] hover:bg-[#023774] text-white text-xs sm:text-sm font-bold rounded-lg transition-colors flex-shrink-0"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST STATS STRIP (Clean Cool White) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-6 sm:p-7 shadow-xs border border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-3 md:pt-0">
              <div className="text-[#034EA2] font-bold text-base sm:text-lg">24/7 Support</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Always active team</p>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-[#034EA2] font-bold text-base sm:text-lg">Verified Helpers</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">ID & background cleared</p>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-[#034EA2] font-bold text-base sm:text-lg">Safe & Reliable</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">Safety-first client care</p>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-[#034EA2] font-bold text-base sm:text-lg">Easy Booking</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">60-second online portal</p>
            </div>
            <div className="pt-3 md:pt-0 col-span-2 md:col-span-1">
              <div className="text-[#034EA2] font-bold text-base sm:text-lg">Transparent Pricing</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">No surprise charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR SERVICES: Real Photography Cards */}
      {/* ========================================================================= */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-bold uppercase tracking-wider text-[#034EA2] bg-sky-50 px-4 py-1.5 rounded-full border border-sky-200">
            Our Core Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1B39] mt-3">
            Services Designed Around Real Lives
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Practical, compassionate assistance for everyday healthcare and essential tasks.
          </p>
        </div>

        {/* 6 Real Image Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. NARAYANA STYLE: 3-COLUMN CARE & HEALTH MONITORING SHOWCASE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1B39]">
            Care For Your Life: A Smarter Path to Complete Family Well-Being
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Structured, transparent healthcare accompaniment and diagnostic care designed for peace of mind.
          </p>
        </div>

        {/* 3-Column Layout: Left Specs | Center Photo | Right Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-10 border border-slate-200">
          
          {/* Left Column (4 items with subtle horizontal line dividers) */}
          <div className="lg:col-span-4 divide-y divide-slate-100 space-y-4">
            <div className="pt-4 first:pt-0">
              <h3 className="text-base sm:text-lg font-bold text-[#0A1B39]">
                Hospital-grade verified diagnostics
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Certified phlebotomists and accredited pathology partners.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0A1B39]">
                Reports coordinated with veteran specialists
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Seamless sharing with family doctors and consulting physicians.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0A1B39]">
                Calm, respectful home environment
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Dignified, comfortable care scheduled strictly by appointment.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0A1B39]">
                Screening completed at your preferred timing*
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                (*Flexible morning and evening slots for senior comfort)
              </p>
            </div>
          </div>

          {/* Center Image with rounded corners and gentle shadow */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border-2 border-slate-100">
              <Image
                src="/images/services/lab_test_visit.jpg"
                alt="Care For Your Life Health Examination and Diagnostics"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column (4 items with subtle horizontal line dividers) */}
          <div className="lg:col-span-4 divide-y divide-slate-100 space-y-4">
            <div className="pt-4 first:pt-0">
              <h3 className="text-base sm:text-lg font-bold text-[#0A1B39]">
                All-in-one: visits, tests, medicines
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Single unified dashboard for every family assistance requirement.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0A1B39]">
                Doorstep convenience, zero queue hassle
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Eliminate early morning traveling and crowded clinic waiting rooms.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0A1B39]">
                Backed by 24/7 dedicated helpline support
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Real-time human coordination whenever assistance is requested.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0A1B39]">
                Digital visit summaries on mobile app
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Keep family members informed instantly across every city.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FOR FAMILIES & SENIORS (Streamlined Spotlight) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#034EA2] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
              For Families & Elders
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1B39] leading-tight">
              Because Your Loved Ones Deserve Reliable Support.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you are in the same city or living far away, Care For Your Life 24/7 provides empathetic care assistants who visit parents, assist at medical check-ups, and ensure medicine refills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium pt-1">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#034EA2] flex-shrink-0" />
                <span>Hospital queue & wheelchair support</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#034EA2] flex-shrink-0" />
                <span>Live digital visit summaries for children</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#034EA2] flex-shrink-0" />
                <span>Elder companionship & wellness checks</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#034EA2] flex-shrink-0" />
                <span>Prescriptions delivered to the doorstep</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-3.5">
              <Link
                href="/book?service=elder-care"
                className="px-6 py-3 text-sm font-bold text-white bg-[#034EA2] hover:bg-[#023774] rounded-btn transition-colors"
              >
                Arrange Elder Care
              </Link>
              <Link
                href="/services/hospital-assistance"
                className="px-6 py-3 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-btn transition-colors"
              >
                Hospital Assistance
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-xl overflow-hidden shadow-xs border border-slate-200">
            <Image
              src="/images/services/elder_care.jpg"
              alt="Elder Care assistance"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. QUICK FAQ & STREAMLINED CTA */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1B39]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 4).map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs text-left"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#0A1B39] mb-2">
                {faq.q}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/faq"
            className="text-sm sm:text-base font-bold text-[#034EA2] hover:underline"
          >
            View all questions & answers →
          </Link>
        </div>
      </section>

      {/* Final Booking Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#034EA2] text-white rounded-2xl p-8 sm:p-10 text-center shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to arrange trusted support for your family?
          </h2>
          <p className="text-sky-100 text-sm sm:text-base max-w-lg mx-auto mt-2.5">
            Book assistance in 60 seconds or call our 24/7 helpline to speak with a care coordinator.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/book"
              className="px-7 py-3.5 bg-white text-[#034EA2] hover:bg-sky-50 text-sm sm:text-base font-bold rounded-btn transition-colors"
            >
              Book a Service
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-[#023774] hover:bg-[#012652] text-white text-sm sm:text-base font-bold rounded-btn transition-colors"
            >
              Contact Support Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
