"use client";

import { Sliders, ShieldCheck, AudioWaveform, Anchor, ChevronRight } from "lucide-react";

const advantages = [
  {
    icon: Sliders,
    title: "Adjustability",
    description:
      "The defining feature of network microphones is their flexible stem, which can be bent into numerous shapes to suit different scenarios.",
  },
  {
    icon: ShieldCheck,
    title: "Durability",
    description:
      "These network microphones are built to withstand regular manipulation and environmental factors like heat, moisture, and the occasional bump or knock.",
  },
  {
    icon: AudioWaveform,
    title: "Sound Quality",
    description:
      "Network microphones are engineered with precision to deliver crisp and clear audio, focusing on the speaker's voice while reducing background noise.",
  },
  {
    icon: Anchor,
    title: "Mounting Options",
    description:
      "They offer various mounting possibilities, such as permanent installations or temporary, easily removable setups.",
  },
];

export default function AdvantagesSection({
  title = "Advantages Of Network Microphone",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            {title.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="text-red-500">{title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-300 transition-colors duration-200 overflow-hidden p-5 min-h-42.5"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-5 h-5 text-red-500" strokeWidth={1.7} />
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400 transition-colors duration-200" />
                </div>

                <div className="flex-1">
                  <h3 className="text-[12px] font-bold text-gray-700 mb-2 group-hover:text-red-500 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
                    {item.description}
                  </p>
                </div>

                <span className="self-end text-[28px] font-bold text-gray-100 group-hover:text-red-100 leading-none select-none transition-colors duration-200 mt-2">
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