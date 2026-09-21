import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, RefreshCw, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Cancellation & Refund Policy | Care For Your Life 24/7",
  description:
    "Cancellation and Refund terms for service requests booked through Care For Your Life 24/7.",
};

export default function CancellationPolicyPage() {
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
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full">
          Customer Fair Practices
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-3">
          Cancellation & Refund Policy
        </h1>
        <p className="text-slate-500 text-xs mt-2">
          Effective Date: September 2026 | Last Updated: September 2026
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
        <p>
          We understand that hospital appointments, travel schedules, and family plans can change unpredictably. Our cancellation policy is designed to be fair, accommodating, and transparent.
        </p>

        <h2 className="text-lg font-bold text-brand-navy">1. Cancelling Scheduled Assistance (Hospital / Elder Care / Daily Errands)</h2>
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong>More than 3 hours before scheduled start:</strong> Free cancellation with a 100% full refund to original payment source.
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong>Between 1 to 3 hours before start:</strong> A minimal nominal convenience fee (up to ₹150) may apply to compensate the assigned assistant for scheduled travel blocking.
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong>Assistant has already arrived at site:</strong> A standard basic visitation charge applies; remaining hourly balance is refunded in full.
          </div>
        </div>

        <h2 className="text-lg font-bold text-brand-navy">2. Medicine Delivery Cancellations</h2>
        <p>
          Prescription orders may be cancelled at no charge before the partner pharmacy has packed and dispatched the medicines. Once medications have left the pharmacy under temperature-controlled seals, returns are governed by pharmacy safety regulations (unopened non-perishables may be refunded upon partner inspection).
        </p>

        <h2 className="text-lg font-bold text-brand-navy">3. Lab Test Visits</h2>
        <p>
          Home sample collection appointments may be rescheduled or cancelled up to 2 hours prior to the phlebotomist&apos;s arrival without any deduction.
        </p>

        <h2 className="text-lg font-bold text-brand-navy">4. Refund Timelines</h2>
        <p>
          Approved refunds are processed automatically back to the original payment source (UPI, Credit/Debit card, or Net Banking) within 3–5 business days.
        </p>

        <h2 className="text-lg font-bold text-brand-navy">5. Assistance with Rescheduling</h2>
        <p>
          In most situations, we encourage rescheduling rather than cancelling. If your doctor changes OPD hours or dates, our 24/7 coordination team will gladly re-assign your booked assistant to the new slot at no additional charge.
        </p>
      </div>
    </div>
  );
}
