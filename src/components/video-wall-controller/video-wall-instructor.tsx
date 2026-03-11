"use client";

import { Monitor, Tv, Plug, CheckCircle2, ShieldAlert, BookOpen, Archive, AlertTriangle, ListChecks, Droplets, Wind, Thermometer, Cable, PackageCheck, CloudLightning, Shirt } from "lucide-react";


const connectionSteps = [
  {
    icon: Monitor,
    tag: "01",
    title: "Connect Graphics Card",
    description: "The computer graphics card output is connected to the video wall controller input.",
  },
  {
    icon: Tv,
    tag: "02",
    title: "Connect Display Devices",
    description: "The video wall controller output is connected to the display device. Each output port number corresponds to the matching display.",
  },
  {
    icon: Plug,
    tag: "03",
    title: "Power Supply",
    description: "Connect the video wall controller to a 220V power supply.",
  },
  {
    icon: CheckCircle2,
    tag: "04",
    title: "Verify Connection",
    description: "After correct connection, the power light, signal light, and output light will all remain continuously on.",
  },
];

export default function VideoWallConstructionSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 space-y-16">

        {/* Connection Instructions */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
            Setup Guide
          </p>
          <div className="flex items-end justify-between gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
              Video Wall Controller{" "}
              <span className="text-red-500">Connection Instructions</span>
            </h2>
            <span className="hidden md:block flex-1 h-px bg-gray-100" />
          </div>
          <div className="w-10 h-0.5 bg-red-500 mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {connectionSteps.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative flex gap-4 items-start bg-white px-5 py-5 hover:bg-red-50/30 transition-colors duration-300 cursor-default"
                >
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-gray-100 bg-gray-50 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                    <Icon size={14} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-gray-200 tabular-nums tracking-widest">
                        {item.tag}
                      </span>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}