"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  ShieldCheck,
  HeartHandshake,
  Hospital,
  Pill,
  TestTube2,
  Clock,
  AlertCircle,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceSublinks = [
    {
      name: "Hospital Assistance",
      href: "/services/hospital-assistance",
      desc: "OPD navigation, check-in & escort",
      icon: Hospital,
    },
    {
      name: "Elder Care",
      href: "/services/elder-care",
      desc: "Senior companionship & wellness check-ins",
      icon: HeartHandshake,
    },
    {
      name: "Medicine Delivery",
      href: "/services/medicine-delivery",
      desc: "Prescription verification & doorstep drops",
      icon: Pill,
    },
    {
      name: "Lab Test Visit",
      href: "/services/lab-test-visit",
      desc: "Hygienic at-home sample collection",
      icon: TestTube2,
    },
    {
      name: "Daily Assistance",
      href: "/services/daily-assistance",
      desc: "Errands, banking & home supervision",
      icon: Clock,
    },
    {
      name: "Emergency SOS",
      href: "/services/emergency-sos",
      desc: "Priority assistance & location alerts",
      icon: AlertCircle,
    },
  ];

  return (
    <>
      {/* Main Cool White & Narayana Royal Blue Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "cool-glass-nav shadow-sm py-2.5"
            : "bg-white border-b border-slate-200/80 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-10 w-44 sm:h-11 sm:w-52">
                <Image
                  src="/images/logo/app_logo_clean.png"
                  alt="Care For Your Life 24/7 Logo"
                  fill
                  sizes="(max-width: 768px) 180px, 220px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.hasDropdown && pathname.startsWith("/services"));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`px-4 py-2.5 text-[15px] font-semibold rounded-lg flex items-center transition-colors ${
                          isActive
                            ? "text-[#034EA2] bg-sky-50"
                            : "text-slate-700 hover:text-[#034EA2] hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                      </Link>

                      {servicesDropdownOpen && (
                        <div className="absolute left-0 mt-0 w-[560px] rounded-xl bg-white shadow-xl border border-slate-200 p-3 grid grid-cols-2 gap-1.5 animate-in fade-in duration-150">
                          {serviceSublinks.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-start p-3 rounded-lg hover:bg-sky-50 transition-colors group/item"
                              >
                                <div className="p-2 rounded-lg bg-sky-100 text-[#034EA2] mr-3 flex-shrink-0 group-hover/item:bg-[#034EA2] group-hover/item:text-white transition-colors">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-slate-900 group-hover/item:text-[#034EA2] whitespace-nowrap">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-slate-500 leading-snug mt-0.5">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                          <div className="col-span-2 pt-2.5 mt-1 border-t border-slate-100">
                            <Link
                              href="/services"
                              className="text-sm font-bold text-[#034EA2] hover:underline flex items-center justify-between px-2 py-1"
                            >
                              <span>View All 6 Services</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2.5 text-[15px] font-semibold rounded-lg transition-colors ${
                      isActive
                        ? "text-[#034EA2] bg-sky-50"
                        : "text-slate-700 hover:text-[#034EA2] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA: Narayana Blue Book Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-6 py-2.5 text-base font-bold text-white bg-[#034EA2] hover:bg-[#023774] rounded-btn shadow-sm transition-all duration-200"
              >
                Book a Service
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center lg:hidden space-x-2">
              <Link
                href="/book"
                className="px-3.5 py-1.5 text-sm font-bold text-white bg-[#034EA2] rounded-lg"
              >
                Book
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className={`px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                  pathname === "/" ? "text-[#034EA2] bg-sky-50" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                  pathname === "/about" ? "text-[#034EA2] bg-sky-50" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 text-left"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-3 pr-1 py-1 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100">
                    {serviceSublinks.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-2 rounded-lg text-slate-700 hover:bg-white text-sm font-medium"
                        >
                          <div className="p-1.5 rounded-md bg-sky-100 text-[#034EA2] mr-2.5">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/why-choose-us"
                className={`px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                  pathname === "/why-choose-us" ? "text-[#034EA2] bg-sky-50" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Why Choose Us
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                  pathname === "/contact" ? "text-[#034EA2] bg-sky-50" : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>

              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  href="/book"
                  className="w-full text-center py-3 text-base font-bold text-white bg-[#034EA2] hover:bg-[#023774] rounded-btn shadow-sm"
                >
                  Book a Service
                </Link>
                <a
                  href="tel:+918000000000"
                  className="w-full flex items-center justify-center py-3 text-sm font-bold text-[#0A1B39] bg-slate-100 hover:bg-slate-200 rounded-btn transition-colors space-x-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#034EA2]" />
                  <span>Call 1800-000-2470 (24/7 Helpline)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
