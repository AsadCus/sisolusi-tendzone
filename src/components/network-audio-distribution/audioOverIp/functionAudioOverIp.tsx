"use client";

import { GitBranch, Layers, Radio, Puzzle } from "lucide-react";

const functions = [
  {
    number: "01",
    icon: GitBranch,
    title: "Dynamic Routing",
    description:
      "Unlike fixed point-to-point connections, audio over IP allows any input to be routed to any output without physical recabling. This enables instant reconfiguration of audio paths through software interfaces rather than physical patching.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Format Agnosticism",
    description:
      "Audio over IP systems can simultaneously handle multiple audio formats, sample rates, and bit depths within the same network infrastructure, automatically managing format conversion when needed.",
  },
  {
    number: "03",
    icon: Radio,
    title: "Distance Independence",
    description:
      "Audio over IP can transmit high-quality audio across buildings, campuses, or even cities using standard network infrastructure without degradation.",
  },
  {
    number: "04",
    icon: Puzzle,
    title: "Integration Capabilities",
    description:
      "Audio over IP readily interfaces with software-based audio processing, virtual sound cards, and cloud services, creating workflow possibilities that would be impractical with conventional connections.",
  },
];

export default function AudioIpFunctionsSection() {
  return (
    <section className="bg-white py-10 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Functions Of <span className="text-red-500">Audio Over IP</span>
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {functions.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-300 transition-colors duration-200 overflow-hidden p-5 min-h-45"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <Icon className="w-5 h-5 text-red-500 mb-3" strokeWidth={1.7} />
                  <p className="text-[12px] font-semibold text-gray-700 mb-2 group-hover:text-red-500 transition-colors duration-200">
                    {f.title}
                  </p>
                  <p className="text-[11px] text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
                    {f.description}
                  </p>
                </div>

                <span className="self-end text-[28px] font-bold text-gray-100 group-hover:text-red-100 leading-none select-none transition-colors duration-200 mt-2">
                  {f.number}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}