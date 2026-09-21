import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Hospital,
  HeartHandshake,
  Pill,
  TestTube2,
  Clock,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ServiceItem } from "@/data/siteData";

const iconMap = {
  Hospital: Hospital,
  HeartHandshake: HeartHandshake,
  Pill: Pill,
  TestTube2: TestTube2,
  Clock: Clock,
  AlertCircle: AlertCircle,
};

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const IconComponent = iconMap[service.iconName] || Hospital;
  const isEmergency = service.isEmergency;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-card overflow-hidden bg-white transition-card ${
        isEmergency
          ? "border border-red-200 shadow-sm hover:shadow-md hover:border-red-300"
          : "border border-slate-200 shadow-subtle hover:shadow-hover hover:border-[#034EA2]/50"
      }`}
    >
      {/* Real High Quality Photography Banner */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent"></div>

        {/* Floating Category Tag */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${
              isEmergency
                ? "bg-red-600 text-white"
                : "bg-white/95 text-slate-800 border border-slate-200"
            }`}
          >
            {service.category}
          </span>
        </div>

        {service.badge && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#034EA2] text-white shadow-xs">
              {service.badge}
            </span>
          </div>
        )}

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center space-x-2.5">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
              isEmergency
                ? "bg-red-600 text-white"
                : "bg-[#034EA2] text-white"
            }`}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white drop-shadow-sm">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-grow bg-white">
        <div>
          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
            {service.shortDesc}
          </p>

          {/* Key Checklist */}
          <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-center space-x-2.5">
                <CheckCircle2
                  className={`w-4 h-4 flex-shrink-0 ${
                    isEmergency ? "text-red-500" : "text-[#034EA2]"
                  }`}
                />
                <span className="font-medium text-slate-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/services/${service.slug}`}
            className={`text-sm font-bold flex items-center ${
              isEmergency
                ? "text-red-600 hover:text-red-700"
                : "text-[#034EA2] hover:underline"
            }`}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={`/book?service=${service.id}`}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
              isEmergency
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-sky-50 text-[#034EA2] hover:bg-[#034EA2] hover:text-white"
            }`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
