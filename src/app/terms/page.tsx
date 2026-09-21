import React from "react";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Care For Your Life 24/7",
  description:
    "Terms and Conditions of Service for Care For Your Life 24/7 web and mobile platform.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <Link
        href="/"
        className="inline-flex items-center text-xs font-bold text-brand-primary hover:underline mb-2"
      >
        <ArrowLeft className="w-3.5 h-3.5 mr-1" />
        Back to Home
      </Link>

      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-sky-50 px-3 py-1 rounded-full">
          Platform Agreement
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-3">
          Terms & Conditions
        </h1>
        <p className="text-slate-500 text-xs mt-2">
          Effective Date: September 2026 | Last Updated: September 2026
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Important Notice:</strong> Care For Your Life 24/7 is an assistance coordination platform. We are not a hospital, medical diagnostic laboratory, or registered pharmacy. All medical advice and treatments must be sought directly from licensed medical practitioners.
          </p>
        </div>

        <h2 className="text-lg font-bold text-brand-navy">1. Acceptance of Terms</h2>
        <p>
          By accessing the Care For Your Life 24/7 website, mobile applications, or booking our assistance services, you agree to be bound by these Terms and Conditions. If you do not agree with any portion of these terms, please discontinue using our services.
        </p>

        <h2 className="text-lg font-bold text-brand-navy">2. Nature of Platform & Services</h2>
        <p>
          Care For Your Life 24/7 coordinates logistical, non-clinical healthcare accompaniment, senior companionship, and everyday errand assistance by connecting users with vetted third-party service providers.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li><strong>Hospital Assistance:</strong> Involves physical accompaniment, queue management, and patient escort. Assistants do not provide medical diagnosis or make treatment decisions.</li>
          <li><strong>Medicine Delivery:</strong> Handled in coordination with certified, third-party licensed pharmacies that verify doctor prescriptions prior to dispensing.</li>
          <li><strong>Lab Test Visits:</strong> Home sample collection is conducted by certified phlebotomists affiliated with accredited diagnostic partner laboratories.</li>
          <li><strong>Emergency SOS:</strong> A high-priority logistical broadcast tool that notifies emergency contacts and nearby support. It does not replace statutory governmental emergency rescue helplines (112 or 108).</li>
        </ul>

        <h2 className="text-lg font-bold text-brand-navy">3. User Responsibilities</h2>
        <p>
          Users must provide accurate names, addresses, and medical precautions. In cases where assistance involves elderly or vulnerable beneficiaries, the primary customer must ensure clear briefing of special medical conditions or physical limitations.
        </p>

        <h2 className="text-lg font-bold text-brand-navy">4. Service Fees & Payments</h2>
        <p>
          Service rates are displayed transparently prior to confirmation. Payments may be completed via secure online digital payment gateways or authorized cash-on-service where permitted.
        </p>

        <h2 className="text-lg font-bold text-brand-navy">5. Limitation of Liability</h2>
        <p>
          Care For Your Life 24/7 exercises thorough due diligence in verifying provider backgrounds. However, to the extent permitted by law, the company is not liable for indirect damages, unforeseen delays caused by hospital administrative hold-ups, or road transit traffic conditions beyond reasonable control.
        </p>

        <h2 className="text-lg font-bold text-brand-navy">6. Governing Law</h2>
        <p>
          These Terms and any disputes arising out of the services shall be governed by and construed in accordance with the laws of India.
        </p>
      </div>
    </div>
  );
}
