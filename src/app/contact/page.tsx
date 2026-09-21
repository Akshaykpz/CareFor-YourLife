"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  Building,
  ShieldCheck,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Service Enquiry",
    message: "",
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
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy max-w-3xl mx-auto">
            We&apos;re Here to Help.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Have questions about our healthcare assistance, elder care, or enterprise partnership opportunities? Our 24/7 care team is always accessible.
          </p>
        </div>
      </section>

      {/* Main Grid: Channels & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-brand-navy">
              Direct Contact Options
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Reach out via phone for urgent inquiries, WhatsApp for quick coordination, or email for detailed service requests.
            </p>

            <div className="space-y-4 pt-2">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-brand-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-navy">24/7 Helpline</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Toll-free customer support</p>
                  <a
                    href="tel:+918000000000"
                    className="text-sm font-bold text-brand-primary hover:underline mt-1 inline-block"
                  >
                    +91 (800) 000-2470
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-navy">WhatsApp Support</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Quick text coordination & prescription sharing</p>
                  <a
                    href="https://wa.me/918000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-emerald-600 hover:underline mt-1 inline-block"
                  >
                    Chat on WhatsApp (24/7)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-navy">Email Support</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Responses typically within 2 hours</p>
                  <a
                    href="mailto:support@careforyourlife247.com"
                    className="text-sm font-bold text-indigo-600 hover:underline mt-1 inline-block"
                  >
                    support@careforyourlife247.com
                  </a>
                </div>
              </div>

              {/* Business & Provider Enquiries */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-navy">Corporate & Hospital Enquiries</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Healthcare institutional tie-ups & bulk assistance</p>
                  <a
                    href="mailto:partners@careforyourlife247.com"
                    className="text-sm font-bold text-brand-teal hover:underline mt-1 inline-block"
                  >
                    partners@careforyourlife247.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Working Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">
                  Thank You! We Received Your Message.
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  A Care For Your Life 24/7 coordinator will review your inquiry and reach out shortly via your provided phone number or email.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-brand-navy">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Fill out this form and our support coordinators will get back to you promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sen"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Subject / Department *
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white"
                      >
                        <option value="Service Enquiry">General Service Enquiry</option>
                        <option value="Elder Care Inquiry">Elder Care Dedicated Support</option>
                        <option value="Hospital Booking Help">Hospital Visit Coordination</option>
                        <option value="Provider Enquiries">Provider Network Onboarding</option>
                        <option value="Business Enquiries">Hospital & Corporate Partnership</option>
                        <option value="Feedback / Support">Feedback & Help Desk</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Message or Special Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please let us know how we can assist you or your family..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-primary hover:bg-brand-deep text-white font-bold text-sm rounded-btn shadow-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
