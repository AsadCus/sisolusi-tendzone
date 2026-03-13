"use client";

import Image from "next/image";
import { Cable, ShieldCheck, Zap, Layers } from "lucide-react";

const points = [
  {
    icon: Zap,
    tag: "01",
    title: "Improved Transfer Quality",
    description:
      "HDMI products improve audio and video transfer quality and speed, guaranteeing constant media playback using stable connections that reduce signal loss and interference.",
  },
  {
    icon: ShieldCheck,
    tag: "02",
    title: "Gold-Plated Connectors",
    description:
      "Gold-plated connectors lower oxidation and maintain reliable connections over time, ensuring consistent signal delivery.",
  },
  {
    icon: Layers,
    tag: "03",
    title: "Shielding Technology",
    description:
      "Shielding preserves signal integrity by resisting outside interference, keeping your audio and video feed clean and stable.",
  },
  {
    icon: Cable,
    tag: "04",
    title: "Braided Jacket Design",
    description:
      "Braided jackets provide flexibility and safety, fitting many installation situations while guaranteeing the best multimedia experience.",
  },
];

export default function HDMIProductsFunctions() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
              Overview
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 leading-snug">
              Functions of{" "}
              <span className="text-red-500">HDMI Products</span>
            </h2>
            <div className="w-10 h-0.5 bg-red-500 mb-8" />

            <div className="flex flex-col gap-0">
              {points.map((point, i) => {
                const Icon = point.icon;
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
                          {point.tag}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden border border-gray-100 bg-white flex items-center justify-center h-100">
            <Image
              src="https://www.tendzone.net/uploads/43135/byod-video-switcherd85ff.jpg"
              alt="HDMI Products"
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