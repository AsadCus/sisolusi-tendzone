"use client";

import {
  Expand,
  MonitorCheck,
  LayoutDashboard,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Expand,
    label: "Scalability",
    description:
      "Easily expand your display setup by adding more screens without losing image quality.",
  },
  {
    icon: MonitorCheck,
    label: "Centralized Control",
    description:
      "Simplify content management with a single control point for all screens.",
  },
  {
    icon: LayoutDashboard,
    label: "Flexibility",
    description:
      "Manage multiple input sources and display configurations effortlessly.",
  },
  {
    icon: Sparkles,
    label: "Enhanced Visual Quality",
    description:
      "Achieve higher resolution and better image clarity by distributing the load across multiple screens.",
  },
  {
    icon: ShieldCheck,
    label: "Reliability",
    description:
      "Robust video wall controllers ensure stable and continuous operation, essential for mission-critical applications.",
  },
];

export default function BnefitVideoWallController() {
  return (
    <section className="bg-white py-10 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
           Benefits of Using Video Wall Controller
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-600 transition-colors duration-200 overflow-hidden px-4 pt-4 pb-3"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <Icon className="w-5 h-5 text-red-500 mb-3" strokeWidth={1.7} />

                <div className="mb-4">
                  <p className="text-[12px] font-semibold text-gray-800 leading-snug mb-1.5 group-hover:text-gray-900 transition-colors duration-200">
                    {f.label}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                    {f.description}
                  </p>
                </div>

                <span className="self-end text-[22px] font-bold text-gray-200 group-hover:text-red-200 leading-none select-none transition-colors duration-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}