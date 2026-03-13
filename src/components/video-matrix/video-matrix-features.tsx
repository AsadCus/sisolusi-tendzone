"use client";

import {
  LayoutGrid,
  Shuffle,
  SlidersHorizontal,
  Zap,
  Volume2,
  Monitor,
  Package,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    description:
      "Route signals from multiple sources to various displays within a single unified system, accommodating diverse video sources and display configurations.",
  },
  {
    icon: Shuffle,
    description:
      "Simultaneously distribute any input signal to any output port. Flexible 4×2 and other matrix notations allow full routing freedom across all connected devices.",
  },
  {
    icon: SlidersHorizontal,
    description:
      "Select which input signal routes to which output via a physical control panel or digital software interface for an intuitive, interactive experience.",
  },
  {
    icon: Zap,
    description:
      "Switch between channels instantly without glitches or interruptions — essential for live broadcasting, command centers, and professional environments.",
  },
  {
    icon: Volume2,
    description:
      "Synchronize audio signals with video output to maintain consistent quality across presentations, conferences, and entertainment applications.",
  },
  {
    icon: Monitor,
    description:
      "Flexible control options including remote control, touchscreen interface, or web-based control — adapting to both simple and complex operational needs.",
  },
  {
    icon: Package,
    description:
      "More efficient than direct cabling, the compact form factor is easy to transport and ideal for portable setups like event staging and conferences.",
  },
];

export default function VideoMatrixFeatureSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            Feature of <span className="text-red-500">Video Matrix</span>
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-300 transition-colors duration-200 overflow-hidden p-5 min-h-48"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-5 h-5 text-red-500" strokeWidth={1.7} />
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400 transition-colors duration-200" />
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors duration-200 flex-1">
                  {item.description}
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