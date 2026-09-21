import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  ShieldCheck,
  Heart,
  AlertTriangle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1B39] text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-48">
                <Image
                  src="/images/logo/app_logo_white.png"
                  alt="Care For Your Life 24/7"
                  fill
                  sizes="200px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            
            <p className="text-sky-400 font-bold text-sm tracking-wide">
              Support • Connect • Simplify
            </p>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Care For Your Life 24/7 connects individuals and families with verified healthcare assistance, elder care, medicine delivery, and urgent support.
            </p>

            <div className="pt-1">
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-sky-200 bg-slate-800/70 p-3 rounded-xl border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>100% Background-Verified Providers & Compliant Partners</span>
              </div>
            </div>
          </div>

          {/* Quick Company Links */}
          <div className="space-y-3.5">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/app" className="hover:text-white transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/become-a-provider" className="hover:text-white transition-colors">
                  Become a Provider
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3.5">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/hospital-assistance"
                  className="hover:text-white transition-colors"
                >
                  Hospital Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/elder-care"
                  className="hover:text-white transition-colors"
                >
                  Elder Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/medicine-delivery"
                  className="hover:text-white transition-colors"
                >
                  Medicine Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/lab-test-visit"
                  className="hover:text-white transition-colors"
                >
                  Lab Test Visit
                </Link>
              </li>
              <li>
                <Link
                  href="/services/daily-assistance"
                  className="hover:text-white transition-colors"
                >
                  Daily Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/emergency-sos"
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  Emergency SOS
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-3.5">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Support & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation-policy"
                  className="hover:text-white transition-colors"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Responsible Medical Advisory */}
        <div className="py-4 border-b border-slate-800 text-[11px] text-slate-400 flex items-start space-x-2">
          <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <p>
            Care For Your Life 24/7 is a digital coordination and assistance service. In case of life-threatening emergencies requiring intensive care, please also contact the national helpline (112 or 108) immediately.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 Care For Your Life 24/7. All rights reserved.</p>
          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-sky-400" />
              Operational 24/7
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Heart className="w-3.5 h-3.5 mr-1 text-red-400" />
              Compassionate Assistance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
