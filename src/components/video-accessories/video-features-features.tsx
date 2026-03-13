"use client";

import {
  ArrowLeftRight,
  ScanSearch,
  ListOrdered,
  MonitorPlay,
  Tv2,
} from "lucide-react";
import { ChevronRight } from "lucide-react";

const features = [
  {
    icon: ArrowLeftRight,
    description:
      "Supports Lightning, USB-C, MINI DP, DP, HDMI type-A, and HDMI type-D input signals to be converted to HDMI signals.",
  },
  {
    icon: ScanSearch,
    description:
      "Auto-detects the input signal, the last connected signal source will be switched to the output automatically.",
  },
  {
    icon: ListOrdered,
    description:
      "Starts to scan from Lightning to HDMI type-D and switch the first detected source to the output.",
  },
  {
    icon: MonitorPlay,
    description:
      "Supports HDMI, DP and USB input video resolution up to 4Kx2K@30 Hz.",
  },
  {
    icon: Tv2,
    description:
      "Supports HDMI output video resolutions up to 4Kx2K@30Hz 4:4:4.",
  },
];

export default function VideoAccessoriesFeatures() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Features
            </span>
          </div>
          <h2 className="text-2xl md:text-xl font-medium text-red-600">
            BYOD Video Switcher Features
          </h2>
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