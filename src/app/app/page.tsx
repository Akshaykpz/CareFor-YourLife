import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  CheckCircle2,
  Bell,
  MapPin,
  Calendar,
  ShieldCheck,
  Download,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Mobile App | Care For Your Life 24/7",
  description:
    "Download the Care For Your Life 24/7 mobile app for iOS and Android. Book services, track assistants, and access emergency SOS on the go.",
};

export default function AppPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <section className="hero-mesh py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full mb-3">
            Mobile Technology
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy max-w-3xl mx-auto">
            Care Is Always Within Reach.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Manage bookings, monitor visits in real-time, order prescription medicines, and trigger urgent SOS alerts directly from your smartphone.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3.5 bg-brand-navy hover:bg-slate-800 text-white rounded-btn text-xs font-bold flex items-center space-x-2 transition-colors shadow-sm">
              <Smartphone className="w-5 h-5 text-brand-sky" />
              <div className="text-left">
                <div className="text-[9px] text-slate-300">DOWNLOAD ON</div>
                <div className="text-xs font-bold">Google Play Store</div>
              </div>
            </button>

            <button className="px-6 py-3.5 bg-brand-navy hover:bg-slate-800 text-white rounded-btn text-xs font-bold flex items-center space-x-2 transition-colors shadow-sm">
              <Smartphone className="w-5 h-5 text-brand-teal" />
              <div className="text-left">
                <div className="text-[9px] text-slate-300">DOWNLOAD ON</div>
                <div className="text-xs font-bold">Apple App Store</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* App Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-brand-primary flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">Instant Booking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Schedule hospital visits, elder care sessions, diagnostic tests, or prescription pickups in just 60 seconds.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">Live Assistant Tracking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              See your assigned assistant&apos;s photo, credentials, live arrival status, and estimated arrival window.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">Real-Time Visit Summaries</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Receive digital doctor slips, diagnostic report alerts, and caregiver notes right when each task is finished.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">One-Tap Emergency SOS</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              High-priority broadcast instantly notifies your emergency contacts and our 24/7 coordination team with GPS coordinates.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">Recurring Schedules</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Set weekly recurring elder companionship or monthly automatic prescription refills with zero manual hassle.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">Family Multi-User Access</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Add siblings and family members to a shared family account so everyone stays informed about parents&apos; well-being.
            </p>
          </div>

        </div>
      </section>

      {/* QR Code & Web Booking fallback */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-ice border border-sky-200 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-brand-navy">
            Don&apos;t have the app yet?
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-lg mx-auto">
            You can still book any service directly on our website without waiting. All website bookings sync automatically when you install the app later.
          </p>
          <div className="mt-6">
            <Link
              href="/book"
              className="px-6 py-3 bg-brand-primary hover:bg-brand-deep text-white font-bold text-xs rounded-btn transition-colors inline-block"
            >
              Book Directly on Website
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
