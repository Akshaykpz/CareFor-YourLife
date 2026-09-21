"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, Calendar, HelpCircle, ShieldCheck } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl flex items-center justify-between gap-2 safe-area-pb">
      <a
        href="tel:+918000000000"
        className="flex-1 flex items-center justify-center py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-[#0A1B39] font-bold text-xs rounded-xl transition-colors gap-1.5"
      >
        <PhoneCall className="w-4 h-4 text-[#034EA2]" />
        <span>1800-000-2470</span>
      </a>

      <Link
        href="/book"
        className="flex-1 flex items-center justify-center py-2.5 px-3 bg-[#034EA2] hover:bg-[#023774] text-white font-bold text-xs rounded-xl shadow-sm transition-colors gap-1.5"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Service</span>
      </Link>
    </div>
  );
}
