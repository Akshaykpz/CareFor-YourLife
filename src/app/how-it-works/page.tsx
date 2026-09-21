import React from "react";
import Link from "next/link";
import {
  MousePointerClick,
  FileEdit,
  UserCheck,
  CheckCircle2,
  ShieldCheck,
  PhoneCall,
  Clock,
  ArrowRight,
  Smartphone,
  Lock,
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/siteData";

export const metadata = {
  title: "How It Works | Care For Your Life 24/7",
  description:
    "Discover how simple it is to arrange reliable healthcare assistance, elder care, and daily support in 4 transparent steps.",
};

export default function HowItWorksPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <section className="hero-mesh py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full mb-3">
            Transparency & Simplicity
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy max-w-3xl mx-auto">
            How Care For Your Life 24/7 Works
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            From initial booking to on-ground care delivery, our digital process guarantees total transparency, constant family communication, and dependable service.
          </p>
        </div>
      </section>

      {/* 4 Core Steps in Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <span className="text-5xl font-black text-brand-primary/20">01</span>
              <h2 className="text-2xl font-bold text-brand-navy mt-2">Choose a Service</h2>
              <p className="text-xs text-brand-teal font-semibold mt-1">Select the support you need</p>
            </div>
            <div className="lg:col-span-8 text-slate-600 text-sm leading-relaxed space-y-3">
              <p>
                Browse through our six essential offerings — Hospital Assistance, Elder Care, Medicine Delivery, Lab Test Visit, Daily Assistance, or Emergency SOS.
              </p>
              <p>
                Each service clearly highlights included features, scope of assistance, and flexible scheduling options for one-time needs or recurring routines.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <span className="text-5xl font-black text-brand-teal/25">02</span>
              <h2 className="text-2xl font-bold text-brand-navy mt-2">Tell Us What You Need</h2>
              <p className="text-xs text-brand-teal font-semibold mt-1">Provide the required details</p>
            </div>
            <div className="lg:col-span-8 text-slate-600 text-sm leading-relaxed space-y-3">
              <p>
                Fill out our quick 60-second booking form. Enter recipient details (yourself or family members), address, landmark, preferred date, and required time slot.
              </p>
              <p>
                You can attach doctor prescription photos, doctor appointment slips, or special instructions (such as wheelchair requirements or specific language preferences).
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <span className="text-5xl font-black text-brand-green/25">03</span>
              <h2 className="text-2xl font-bold text-brand-navy mt-2">Get Matched</h2>
              <p className="text-xs text-brand-green font-semibold mt-1">We connect you with verified providers</p>
            </div>
            <div className="lg:col-span-8 text-slate-600 text-sm leading-relaxed space-y-3">
              <p>
                Our system assigns an appropriate, background-verified service assistant or certified healthcare partner trained for your requirement.
              </p>
              <p>
                You receive provider details, photo, and direct phone contact on your mobile device, allowing seamless coordination before arrival.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <span className="text-5xl font-black text-brand-bright/25">04</span>
              <h2 className="text-2xl font-bold text-brand-navy mt-2">Receive Support</h2>
              <p className="text-xs text-brand-bright font-semibold mt-1">Reliable care delivered on time</p>
            </div>
            <div className="lg:col-span-8 text-slate-600 text-sm leading-relaxed space-y-3">
              <p>
                Your assistant arrives on time at the designated location — whether meeting you at the hospital gate or arriving at your parents&apos; residence.
              </p>
              <p>
                Once completed, family members receive visit summaries, doctor slips, or completion photos directly through the app.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Safety & Protocol Guarantees */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Safety & Verification Architecture
            </h2>
            <p className="text-slate-300 text-xs mt-2">
              Every step is engineered to protect vulnerable seniors and give remote families total confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-8 h-8 text-brand-lightGreen mx-auto mb-3" />
              <h3 className="text-base font-bold text-white">Government ID Checks</h3>
              <p className="text-xs text-slate-300 mt-2">
                All providers submit verified Aadhaar and legal identity credentials before onboarding.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Lock className="w-8 h-8 text-brand-sky mx-auto mb-3" />
              <h3 className="text-base font-bold text-white">End-to-End Privacy</h3>
              <p className="text-xs text-slate-300 mt-2">
                Medical slips, prescriptions, and personal contact info are encrypted and accessible only to assigned coordinators.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Clock className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-white">Live Status Alerts</h3>
              <p className="text-xs text-slate-300 mt-2">
                Real-time tracking of assistant dispatch, arrival, and completion timestamps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
          Experience the Ease of Professional Assistance
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/book"
            className="px-6 py-3.5 bg-brand-primary hover:bg-brand-deep text-white font-bold text-xs rounded-btn transition-colors"
          >
            Book Your First Service
          </Link>
          <Link
            href="/app"
            className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-btn transition-colors"
          >
            Download Mobile App
          </Link>
        </div>
      </section>
    </div>
  );
}
