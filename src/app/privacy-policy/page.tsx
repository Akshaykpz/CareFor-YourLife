import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Care For Your Life 24/7",
  description:
    "Privacy Policy and data protection commitments of Care For Your Life 24/7.",
};

export default function PrivacyPolicyPage() {
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
          Legal & Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-3">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-xs mt-2">
          Effective Date: September 2026 | Last Updated: September 2026
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
        <p>
          At <strong>Care For Your Life 24/7</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we take your privacy and the confidentiality of personal health information with the highest degree of seriousness. This Privacy Policy governs the collection, storage, use, and protection of information when you access our website and mobile applications.
        </p>

        <h2 className="text-lg font-bold text-brand-navy">1. Information We Collect</h2>
        <p>
          To deliver healthcare accompaniment, prescription delivery, and at-home diagnostic visits, we may collect:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li><strong>Personal Contact Information:</strong> Name, mobile phone number, email address, and home delivery address.</li>
          <li><strong>Beneficiary Information:</strong> Names and age groups of elderly family members or patients receiving assistance.</li>
          <li><strong>Prescription & Medical Records:</strong> Scanned copies of doctor prescriptions, diagnostic requisition slips, and patient support notes uploaded by users.</li>
          <li><strong>Location Information:</strong> Real-time GPS location data when triggering the Emergency SOS feature or enabling service arrival tracking.</li>
        </ul>

        <h2 className="text-lg font-bold text-brand-navy">2. How We Use Your Information</h2>
        <p>
          We utilize your data strictly for legitimate operational purposes:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>To match and dispatch background-verified service assistants and certified partners to your address.</li>
          <li>To transmit prescription orders securely to registered, licensed partner pharmacies.</li>
          <li>To relay urgent GPS coordinates to designated emergency contacts during SOS activations.</li>
          <li>To provide real-time updates and digital visit summary reports to family members.</li>
        </ul>

        <h2 className="text-lg font-bold text-brand-navy">3. Information Sharing & Disclosure</h2>
        <p>
          We do not sell, rent, or trade your personal data to third-party marketing brokers. Data is shared exclusively with:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li><strong>Assigned Service Providers:</strong> Only the relevant location, name, and service instruction required to execute the booking.</li>
          <li><strong>Licensed Pharmacy & Diagnostic Partners:</strong> Solely to dispense verified medicines and conduct scheduled sample collections.</li>
          <li><strong>Statutory Authorities:</strong> Only when strictly mandated by Indian law or during life-threatening emergency coordination.</li>
        </ul>

        <h2 className="text-lg font-bold text-brand-navy">4. Data Security</h2>
        <p>
          We employ industry-standard encryption protocols (SSL/TLS in transit and encrypted data storage) to protect all sensitive health slips and customer identities. Access to administrative systems is restricted strictly to authorized operations personnel.
        </p>

        <h2 className="text-lg font-bold text-brand-navy">5. Contact Our Privacy Officer</h2>
        <p>
          For queries, data correction, or deletion requests, please contact our privacy compliance desk at:
          <br />
          Email: <a href="mailto:privacy@careforyourlife247.com" className="text-brand-primary underline">privacy@careforyourlife247.com</a>
        </p>
      </div>
    </div>
  );
}
