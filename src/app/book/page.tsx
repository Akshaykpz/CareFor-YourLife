"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Hospital,
  HeartHandshake,
  Pill,
  TestTube2,
  Clock,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar,
  MapPin,
  User,
  Phone,
  Mail,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";

const iconMap = {
  Hospital: Hospital,
  HeartHandshake: HeartHandshake,
  Pill: Pill,
  TestTube2: TestTube2,
  Clock: Clock,
  AlertCircle: AlertCircle,
};

function BookingForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "hospital-assistance";

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const [details, setDetails] = useState({
    // Step 2: Customer
    fullName: "",
    phone: "",
    email: "",
    isForFamily: false,
    beneficiaryName: "",
    // Step 3: Location
    address: "",
    city: "Pune",
    landmark: "",
    pincode: "",
    // Step 4: Date & Time
    preferredDate: "",
    preferredTime: "Morning (09:00 AM - 12:00 PM)",
    // Step 5: Additional Info
    additionalNotes: "",
    prescriptionUploaded: false,
  });

  useEffect(() => {
    const s = searchParams.get("service");
    if (s && SERVICES_DATA.some((item) => item.id === s)) {
      setSelectedService(s);
    }
  }, [searchParams]);

  const activeServiceObj =
    SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 150, behavior: "smooth" });
    } else {
      // Complete booking
      const generatedRef = "CFYL-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(generatedRef);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Header */}
      <section className="hero-mesh py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3.5 py-1.5 rounded-full mb-3">
            Service Request Portal
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Book a Service in 5 Easy Steps
          </h1>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2">
            Schedule hospital accompaniment, senior care, prescriptions, or at-home diagnostics with verified professionals.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step Progress Bar */}
        {!isSubmitted && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-500">
              <span className={currentStep >= 1 ? "text-brand-primary" : ""}>
                1. Service
              </span>
              <span className={currentStep >= 2 ? "text-brand-primary" : ""}>
                2. Contact
              </span>
              <span className={currentStep >= 3 ? "text-brand-primary" : ""}>
                3. Location
              </span>
              <span className={currentStep >= 4 ? "text-brand-primary" : ""}>
                4. Schedule
              </span>
              <span className={currentStep >= 5 ? "text-brand-primary" : ""}>
                5. Review
              </span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-brand-primary h-full transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Confirmation State */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Request Registered Successfully
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-3">
                Thank You, {details.fullName || "Valued Customer"}!
              </h2>
              <p className="text-slate-600 text-sm max-w-lg mx-auto mt-2">
                Your service request has been received. Our coordination team has been notified and will call you shortly to confirm assistant assignment.
              </p>
            </div>

            {/* Booking Receipt Summary Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-md mx-auto text-left space-y-3 text-xs text-slate-700">
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-500">Booking Reference:</span>
                <span className="font-mono font-bold text-brand-primary text-sm">
                  {bookingRef}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold">{activeServiceObj.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Beneficiary:</span>
                <span className="font-semibold">
                  {details.isForFamily && details.beneficiaryName
                    ? `${details.beneficiaryName} (Family)`
                    : details.fullName}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-semibold">
                  {details.preferredDate || "Earliest Available"} •{" "}
                  {details.preferredTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">City / Address:</span>
                <span className="font-semibold">
                  {details.city}, {details.address || "Address noted"}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-200 text-[11px] text-emerald-700 flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1.5 flex-shrink-0" />
                <span>Verified Assistant Assignment in Progress</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 bg-brand-primary hover:bg-brand-deep text-white font-bold text-xs rounded-btn transition-colors"
              >
                Return to Homepage
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-btn transition-colors"
              >
                Book Another Service
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Interactive Form */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card">
            <form onSubmit={handleNext}>
              
              {/* STEP 1: SELECT SERVICE */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-brand-navy">
                      Step 1: Select the Service You Need
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Pick from our six verified assistance programs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES_DATA.map((service) => {
                      const Icon = iconMap[service.iconName] || Hospital;
                      const isSelected = selectedService === service.id;
                      const isEmergency = service.isEmergency;

                      return (
                        <div
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex items-start space-x-3.5 ${
                            isSelected
                              ? isEmergency
                                ? "border-red-500 bg-red-50/50 shadow-sm"
                                : "border-brand-primary bg-sky-50/50 shadow-sm"
                              : "border-slate-200 hover:border-slate-300 bg-white"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              isEmergency
                                ? "bg-red-600 text-white"
                                : isSelected
                                ? "bg-brand-primary text-white"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="text-sm font-bold text-brand-navy">
                                {service.title}
                              </h3>
                              {isSelected && (
                                <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                              )}
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                              {service.shortDesc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: CUSTOMER DETAILS */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-brand-navy">
                      Step 2: Customer & Contact Details
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Who is booking and who will receive the care?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kulkarni"
                        value={details.fullName}
                        onChange={(e) =>
                          setDetails({ ...details, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Mobile Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={details.phone}
                          onChange={(e) =>
                            setDetails({ ...details, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={details.email}
                          onChange={(e) =>
                            setDetails({ ...details, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>
                    </div>

                    {/* Booking for family toggle */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <label className="flex items-center space-x-2 text-xs font-bold text-brand-navy cursor-pointer">
                        <input
                          type="checkbox"
                          checked={details.isForFamily}
                          onChange={(e) =>
                            setDetails({
                              ...details,
                              isForFamily: e.target.checked,
                            })
                          }
                          className="w-4 h-4 text-brand-primary rounded"
                        />
                        <span>I am booking this for a family member / elderly parent</span>
                      </label>

                      {details.isForFamily && (
                        <div className="mt-3 pt-3 border-t border-slate-200">
                          <label className="block text-xs font-semibold text-slate-600 mb-1">
                            Beneficiary / Patient Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Smt. Asha Kulkarni (Mother)"
                            value={details.beneficiaryName}
                            onChange={(e) =>
                              setDetails({
                                ...details,
                                beneficiaryName: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: LOCATION */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-brand-navy">
                      Step 3: Service Address & Location
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Where should our assistant or provider arrive?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Street Address / Apartment & House No. *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Flat 402, Green Meadows, Senapati Bapat Road"
                        value={details.address}
                        onChange={(e) =>
                          setDetails({ ...details, address: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Pune"
                          value={details.city}
                          onChange={(e) =>
                            setDetails({ ...details, city: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Prominent Landmark
                        </label>
                        <input
                          type="text"
                          placeholder="Near Symbiosis College"
                          value={details.landmark}
                          onChange={(e) =>
                            setDetails({ ...details, landmark: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          PIN Code *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="411016"
                          value={details.pincode}
                          onChange={(e) =>
                            setDetails({ ...details, pincode: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: DATE & TIME */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-brand-navy">
                      Step 4: Date & Preferred Time Window
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Choose when you want the service delivered.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={details.preferredDate}
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            preferredDate: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Time Slot *
                      </label>
                      <select
                        value={details.preferredTime}
                        onChange={(e) =>
                          setDetails({
                            ...details,
                            preferredTime: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white"
                      >
                        <option value="Early Morning (07:00 AM - 09:00 AM)">
                          Early Morning (07:00 AM - 09:00 AM) - Best for Lab Tests
                        </option>
                        <option value="Morning (09:00 AM - 12:00 PM)">
                          Morning (09:00 AM - 12:00 PM) - OPD Consultations
                        </option>
                        <option value="Afternoon (12:00 PM - 03:00 PM)">
                          Afternoon (12:00 PM - 03:00 PM)
                        </option>
                        <option value="Evening (03:00 PM - 07:00 PM)">
                          Evening (03:00 PM - 07:00 PM) - Medicine Delivery
                        </option>
                        <option value="Urgent / As Soon As Possible">
                          Urgent / As Soon As Possible
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: ADDITIONAL INFO & REVIEW */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <h2 className="text-xl font-bold text-brand-navy">
                      Step 5: Review & Special Instructions
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Check your request details and add any special care notes.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2 text-xs text-slate-700">
                    <div className="flex justify-between font-bold text-brand-navy pb-2 border-b border-slate-200">
                      <span>Selected: {activeServiceObj.title}</span>
                      <span className="text-brand-primary">Care For Your Life 24/7</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Contact:</span>{" "}
                      {details.fullName} ({details.phone})
                    </div>
                    {details.isForFamily && (
                      <div>
                        <span className="text-slate-500">Beneficiary:</span>{" "}
                        {details.beneficiaryName || "Family member"}
                      </div>
                    )}
                    <div>
                      <span className="text-slate-500">Destination:</span>{" "}
                      {details.address}, {details.city} ({details.pincode})
                    </div>
                    <div>
                      <span className="text-slate-500">Schedule:</span>{" "}
                      {details.preferredDate || "Earliest slot"} ({details.preferredTime})
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Special Requirements or Medical Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Wheelchair required, doctor OPD ticket already booked, patient speaks Marathi/Hindi, prescription attached..."
                      value={details.additionalNotes}
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          additionalNotes: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-btn flex items-center space-x-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  className="px-7 py-3.5 bg-brand-primary hover:bg-brand-deep text-white font-bold text-xs rounded-btn shadow-md transition-colors flex items-center space-x-2"
                >
                  <span>{currentStep === 5 ? "Submit Service Request" : "Continue"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-xs">Loading booking portal...</div>}>
      <BookingForm />
    </Suspense>
  );
}
