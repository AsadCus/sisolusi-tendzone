"use client";

import Image from "next/image";
import { MonitorPlay, Layers, LayoutGrid, Move, Cpu } from "lucide-react";

const functions = [
  {
    icon: Cpu,
    tag: "01",
    title: "Signal Processing",
    description:
      "Receives different input signals through HDMI, DVI, SDI, video, or LAN cables, acting as a compatible computer chassis with OS handling all inputs and outputs.",
  },
  {
    icon: Layers,
    tag: "02",
    title: "Multiple Display Outputs",
    description:
      "Controls multiple monitors or screens simultaneously — supporting coherent arrangements like 4×4, 6×2, 8×2, or up to 172×44 display configurations.",
  },
  {
    icon: LayoutGrid,
    tag: "03",
    title: "Unified Resolution",
    description:
      "The total resolution of the video wall is the sum of all individual monitors, allowing content to span seamlessly across any position regardless of monitor borders.",
  },
  {
    icon: MonitorPlay,
    tag: "04",
    title: "Windows Desktop Display",
    description:
      "Displays a large coherent Windows 11 or Windows Server 2022 desktop across the entire video wall, enabling any standard application to be rendered on screen.",
  },
  {
    icon: Move,
    tag: "05",
    title: "Drag & Drop Management",
    description:
      "Any window or application can be freely moved and repositioned across the entire video wall surface with a simple drag and drop operation.",
  },
];

export default function FunctionVideoWall() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 leading-snug">
              Function of{" "}
              <span className="text-red-500">Video Wall Controllers</span>
            </h2>
            <div className="w-10 h-0.5 bg-red-500 mb-8" />

            <div className="flex flex-col gap-0">
              {functions.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group flex gap-4 items-start py-5 border-b border-gray-100 last:border-b-0 hover:pl-2 transition-all duration-300 cursor-default"
                  >
                    <div className="shrink-0 mt-0.5 w-9 h-9 flex items-center justify-center border border-gray-100 bg-gray-50 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                      <Icon size={15} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-gray-300 tracking-widest tabular-nums">
                          {item.tag}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative group cursor-pointer overflow-hidden border border-gray-100 bg-white flex items-center justify-center h-100">
            <Image
              src="https://www.tendzone.net/uploads/43135/dual-8-full-range-point-source-speaker4b804.jpg?size=380x0"
              alt="Video Wall Controller"
              width={400}
              height={300}
              className="object-contain w-full h-full p-10 transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>

        </div>
      </div>
    </section>
  );
}