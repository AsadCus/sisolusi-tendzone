"use client";

import {
  Mic,
  Wind,
  RotateCcw,
  Package,
  Shield,
  Unplug,
  Zap,
  ToggleRight,
  Users,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    description:
      "Capacitance microphone with cardioid directed electret, can deliver clear sound effect.",
  },
  {
    icon: Wind,
    description:
      "Built-in windproof cotton, optimizing the structure design of the acoustic chamber, and bringing better sound quality.",
  },
  {
    icon: RotateCcw,
    description:
      "Adjustable microphone angle, convenient for collecting the sound. Highly resistant to mobile phone interference.",
  },
  {
    icon: Package,
    description:
      "Black full metal pedestal covered by low-reflectance and grinding coatings.",
  },
  {
    icon: Shield,
    description:
      "Stable and thick pedestal with shock-proof insulating rubber pad, effectively reducing friction vibration and mechanical noise on the installation surface.",
  },
  {
    icon: Unplug,
    description:
      "3-pin nickel-plated male socket on the back of the pedestal serves as the output terminal of audio signal.",
  },
  {
    icon: Zap,
    description:
      "Microphone supports 48V phantom power supply.",
  },
  {
    icon: ToggleRight,
    description:
      "Self-locking ON/OFF button available; red indicator lights confirm active status. Press again to turn the microphone off.",
  },
  {
    icon: Users,
    description:
      "Suitable for conference, lecture, teaching and other occasions.",
  },
  {
    icon: SlidersHorizontal,
    description:
      "Can co-work directly with audio processor or mixer.",
  },
];

export default function MicrophoneFeatureSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Feature of <span className="text-red-500">Microphone</span>
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