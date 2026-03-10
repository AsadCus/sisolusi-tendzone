"use client";

import {
  Building2,
  GraduationCap,
  Landmark,
  Trophy,
  MonitorPlay,
  Globe,
  ChevronRight,
} from "lucide-react";

const applications = [
  { icon: Building2, label: "Corporate Meetings" },
  { icon: GraduationCap, label: "Academic Conferences and Seminars" },
  { icon: Landmark, label: "Government Meetings" },
  { icon: Trophy, label: "Religious Gatherings" },
  { icon: MonitorPlay, label: "Training Sessions" },
  { icon: Globe, label: "International Conferences and Summits" },
];

export default function DigitalConferenceApplicationSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            2.4G Wireless Digital Conference{" "}
            <span className="text-red-500">System Application</span>
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {applications.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-300 transition-colors duration-200 overflow-hidden p-5 min-h-40"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-5 h-5 text-red-500" strokeWidth={1.7} />
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400 transition-colors duration-200" />
                </div>

                <p className="text-[11.5px] text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-200 flex-1">
                  {item.label}
                </p>

                <span className="self-end text-[28px] font-bold text-gray-100 group-hover:text-red-100 leading-none select-none transition-colors duration-200 mt-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}