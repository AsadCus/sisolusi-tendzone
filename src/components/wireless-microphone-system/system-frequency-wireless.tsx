"use client";

import Image from "next/image";
import { Radio, Wifi, Signal } from "lucide-react";

const points = [
  {
    icon: Radio,
    tag: "01",
    title: "UHF-TV Band",
    description:
      "Unused television channels in this range are available for wireless microphones and other wireless audio devices. Most cities have sufficient unused television channels available for most wireless users to find a clear channel. Users may be licensed or unlicensed in the UHF Band.",
  },
  {
    icon: Signal,
    tag: "02",
    title: "900 MHz Range",
    description:
      "This band (902 to 928 MHz) offers additional channels outside of the TV channel range. Users are allowed to operate without a license in this range. Several high quality wireless microphone systems operate here, most of them fully digital.",
  },
  {
    icon: Wifi,
    tag: "03",
    title: "2.4 GHz Band",
    description:
      "Advantages of this band include worldwide license-free operation and very short antennas, with some potential for interference from Wi-Fi devices.",
  },
];

export default function WirelessFrequencyRangeSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                Technical Overview
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 leading-snug">
              Wireless Microphone{" "}
              <span className="text-red-500">System Frequency Range</span>
            </h2>

            <div className="flex flex-col">
              {points.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div
                    key={i}
                    className="group flex gap-4 items-start py-5 border-b border-gray-100 last:border-b-0 hover:pl-2 transition-all duration-300 cursor-default"
                  >
                    <div className="shrink-0 mt-0.5 w-9 h-9 flex items-center justify-center border border-gray-200 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-200">
                      <Icon
                        size={15}
                        className="text-gray-400 group-hover:text-white transition-colors duration-200"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold text-gray-300 tracking-widest tabular-nums">
                          {point.tag}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-500 transition-colors duration-200">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed text-justify">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative group cursor-pointer overflow-hidden border border-gray-100 bg-white flex items-center justify-center h-96 lg:h-[420px]">
            <Image
              src="https://www.tendzone.net/uploads/43135/rectangular-columnar-analog-condenser976dd.jpg"
              alt="Wireless Microphone System Frequency Range"
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