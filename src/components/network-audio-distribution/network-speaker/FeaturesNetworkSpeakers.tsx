"use client";

import {
  ShieldCheck,
  Network,
  Volume2,
  ServerCog,
  Zap,
  Speaker,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    description:
      "Professional integrated structure design, good cabinet sealing performance, fast-conducting all-copper nickel-plated grounding post, in line with the use and safety specifications in harsh outdoor environments, and the certification standard of IP54 protection class.",
  },
  {
    icon: Network,
    description:
      "Built-in one network digital audio decoding module, support IP/TCP, UDP and other communication protocols, realize the network transmission of 16-bit CD-quality audio signals.",
  },
  {
    icon: Volume2,
    description:
      "Built-in 25W digital amplifier module, delicate sound quality and strong power.",
  },
  {
    icon: ServerCog,
    description:
      "Support unified server authorization to operate management functions, unified configuration to manage user and password functions, support 100-level custom audio priority mute control function.",
  },
  {
    icon: Zap,
    description:
      "Digital product, easy to extend, no geographical restrictions, no need to add management equipment in the equipment room, no wiring construction for common network, easy installation.",
  },
];

export default function SpeakerFeatureSection({
  title = "Feature of Network Speaker",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            Feature of <span className="text-red-500">Network Speaker</span>
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-300 transition-colors duration-200 overflow-hidden p-5 min-h-50"
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