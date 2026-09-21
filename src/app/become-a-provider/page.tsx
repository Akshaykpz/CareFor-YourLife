"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Clock,
  Award,
  CheckCircle2,
  FileCheck,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";

export default function BecomeProviderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    experienceYears: "1-3",
    serviceCategory: "Elder Care",
    qualification: "",
    idProof: "Aadhaar Card",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <section className="hero-mesh py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full mb-3">
            Join Our Support Network
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy max-w-3xl mx-auto">
            Want to Provide Care & Assistance?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Join the Care For Your Life 24/7 provider network and help people with meaningful everyday needs. Enjoy verified client requests, flexible schedules, and guaranteed timely payouts.
          </p>
        </div>
      </section>

      {/* Benefits for Providers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-primary flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-navy mb-1">Flexible Schedule</h3>
            <p className="text-xs text-slate-500">
              Accept requests that align with your availability, daily routines, and location radius.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-navy mb-1">Verified Clients</h3>
            <p className="text-xs text-slate-500">
              Work with pre-screened individuals and families on a secure, accountable platform.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-navy mb-1">Guaranteed Payouts</h3>
            <p className="text-xs text-slate-500">
              Direct digital disbursements with transparent rate cards and zero hidden deductions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-navy mb-1">Respect & Dignity</h3>
            <p className="text-xs text-slate-500">
              Be part of a compassionate community delivering real impact to seniors and vulnerable patients.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-brand-navy">
                Application Submitted Successfully!
              </h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for applying to join the Care For Your Life 24/7 support network. Our onboarding team will contact you within 24–48 hours for document verification and orientation.
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="px-6 py-3 bg-brand-primary text-white font-bold text-xs rounded-btn inline-block"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-navy">
                  Provider Application Form
                </h2>
                <p className="text-slate-500 text-xs mt-1">
                  Please submit accurate details. All applications require government ID and background validation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      City / Operational Area *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune, Mumbai, Bangalore"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Primary Service Focus *
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceCategory: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white"
                    >
                      <option value="Elder Care">Elder Care & Senior Companionship</option>
                      <option value="Hospital Assistance">Hospital Visit Assistance</option>
                      <option value="Daily Assistance">Daily Errands & Supervision</option>
                      <option value="Medicine Delivery">Medicine Pickup & Delivery</option>
                      <option value="Lab Test Logistics">Diagnostic Phlebotomy / Sample Transit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Experience in Care / Logistics *
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          experienceYears: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white"
                    >
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1-3">1 to 3 years</option>
                      <option value="3-5">3 to 5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    ID Document Available for Verification *
                  </label>
                  <select
                    value={formData.idProof}
                    onChange={(e) =>
                      setFormData({ ...formData, idProof: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white"
                  >
                    <option value="Aadhaar Card">Aadhaar Card</option>
                    <option value="Driving License">Driving License</option>
                    <option value="Voter ID">Voter ID</option>
                    <option value="Passport">Passport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Relevant Qualifications or Previous Background (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any nursing, caregiver training, or previous customer service background..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  ></textarea>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500">
                  By submitting this form, you confirm that your provided information is accurate and agree to participate in our background verification process.
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-primary hover:bg-brand-deep text-white font-bold text-sm rounded-btn shadow-md transition-colors"
                >
                  Submit Provider Application
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
