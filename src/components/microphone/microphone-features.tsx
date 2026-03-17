"use client";

import {
  Mic, Wind, RotateCcw, Package, Shield,
  Unplug, Zap, ToggleRight, Users, SlidersHorizontal,
} from "lucide-react";

const features = [
  { icon: Mic, description: "Capacitance microphone with cardioid directed electret, can deliver clear sound effect." },
  { icon: Wind, description: "Built-in windproof cotton, optimizing the structure design of the acoustic chamber, and bringing better sound quality." },
  { icon: RotateCcw, description: "Adjustable microphone angle, convenient for collecting the sound. Highly resistant to mobile phone interference." },
  { icon: Package, description: "Black full metal pedestal covered by low-reflectance and grinding coatings." },
  { icon: Shield, description: "Stable and thick pedestal with shock-proof insulating rubber pad, effectively reducing friction vibration and mechanical noise." },
  { icon: Unplug, description: "3-pin nickel-plated male socket on the back of the pedestal serves as the output terminal of audio signal." },
  { icon: Zap, description: "Microphone supports 48V phantom power supply." },
  { icon: ToggleRight, description: "Self-locking ON/OFF button available; red indicator lights confirm active status." },
  { icon: Users, description: "Suitable for conference, lecture, teaching and other occasions." },
  { icon: SlidersHorizontal, description: "Can co-work directly with audio processor or mixer." },
];

export default function MicrophoneFeatureSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Feature of <span className="text-red-500">Microphone</span>
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group flex items-start gap-4 bg-white px-5 py-4 hover:bg-red-50 transition-colors duration-150"
              >
                <div className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center bg-red-50 group-hover:bg-red-100 transition-colors duration-150">
                  <Icon className="w-4 h-4 text-red-500" strokeWidth={1.7} />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-150">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}