"use client";

import {
  Volume2,
  Zap,
  ShieldCheck,
  SlidersHorizontal,
  Shuffle,
} from "lucide-react";

const features = [
  {
    icon: Volume2,
    label: "Sound Clarity and Quality",
    description:
      "Power amplifiers ensure that the audio remains distortion-free, even when played at higher volume levels. For live events or recordings, clear, high-fidelity sound is critical for audience satisfaction or professional production results.",
  },
  {
    icon: Zap,
    label: "Adequate Power for Large Spaces",
    description:
      "For large venues like stadiums, conference halls, and concert stages, your speakers need sufficient power to project sound across distances effectively. A high-quality power amplifier provides that extra boost.",
  },
  {
    icon: ShieldCheck,
    label: "Reliable Performance",
    description:
      "Professional amplifiers are built to handle continuous and heavy use, making them a reliable choice for demanding environments like tours or multi-day events.",
  },
  {
    icon: SlidersHorizontal,
    label: "Advanced Features",
    description:
      "Many professional power amps now include integrations like DSP capabilities, which offer sound shaping tools including equalizers, dynamic range control, and delay adjustments.",
  },
  {
    icon: Shuffle,
    label: "Versatility",
    description:
      "Professional power amplifiers cater to a wide range of requirements, from intimate performances to large-scale productions. The ability to integrate seamlessly with other equipment makes them highly versatile.",
  },
];

export default function FeaturesPowersAmplifier() {
  return (
    <section className="bg-white py-10 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Advantages of Power Amplifier
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