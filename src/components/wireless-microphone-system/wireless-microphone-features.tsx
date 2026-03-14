"use client";

import {
  Wifi,
  Timer,
  Battery,
  Smartphone,
  Headphones,
  Mic,
  Radio,
  Plug,
  Package,
  Usb,
  MonitorSmartphone,
  Volume2,
} from "lucide-react";

const features = [
  { icon: Wifi,             text: "2.4GHz digital wireless system" },
  { icon: Timer,            text: "Low latency audio transmission with no video sync issues" },
  { icon: MonitorSmartphone,text: "Dual-channel receiver mounts directly to smartphones, tablets, digital cameras and tripods via included bracket arms, hook-and-loop fasteners, 1/4\"–20 adapter, shoe mount adapter" },
  { icon: Smartphone,       text: "Plugs directly into iPhone and other iOS devices via included cable" },
  { icon: Usb,              text: "Plugs directly into Android devices via USB Micro B or USB-C cables (both included)" },
  { icon: Battery,          text: "Receiver offers up to 13 hours of battery life via rechargeable lithium-ion battery" },
  { icon: Volume2,          text: "Switchable 1/8\" headphone/line and USB audio outputs with volume control" },
  { icon: Mic,              text: "Beltpack Transmitter with Omnidirectional Lavalier Microphone" },
  { icon: Battery,          text: "Transmitter offers up to 20 hours of battery life using two AA batteries" },
  { icon: Radio,            text: "Up to 100' operating range (line-of-sight)" },
  { icon: Headphones,       text: "Switchable 1/8\" headphone/line and USB audio outputs with volume control" },
  { icon: Package,          text: "1/8\" (3.5mm) audio cable, USB charge cable and power adapter also included" },
];

export default function WirelessMicFeaturesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
          Product Highlights
        </p>
        <div className="flex items-end justify-between gap-4 mb-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug flex items-center gap-3">
            <Plug size={22} className="text-red-500 shrink-0" strokeWidth={1.75} />
            Wireless Microphone <span className="text-red-500">System Features</span>
          </h2>
          <span className="hidden md:block flex-1 h-px bg-gray-100" />
        </div>
        <div className="w-10 h-0.5 bg-red-500 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative flex gap-4 items-start bg-white px-5 py-4 hover:bg-red-50/30 transition-colors duration-300 cursor-default"
              >
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-gray-100 bg-gray-50 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                  <Icon size={14} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1 pt-0.5">
                  <span className="text-[10px] font-bold text-gray-200 tabular-nums tracking-widest mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="inline text-xs text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <span className="absolute bottom-0 left-0 right-0 h-px bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}