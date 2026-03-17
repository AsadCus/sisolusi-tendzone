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
  {
    icon: Wifi,
    title: "2.4GHz Digital Wireless",
    text: "Digital wireless system with stable, interference-resistant transmission.",
  },
  {
    icon: Timer,
    title: "Low Latency Audio",
    text: "Ultra-low latency transmission with no video sync issues.",
  },
  {
    icon: MonitorSmartphone,
    title: "Universal Mounting",
    text: "Dual-channel receiver mounts to smartphones, tablets, cameras and tripods via bracket arms, hook-and-loop, 1/4\" adapter, and shoe mount.",
  },
  {
    icon: Smartphone,
    title: "iOS Compatible",
    text: "Plugs directly into iPhone and iOS devices via included Lightning cable.",
  },
  {
    icon: Usb,
    title: "Android Compatible",
    text: "Connects to Android devices via USB Micro B or USB-C cables, both included.",
  },
  {
    icon: Battery,
    title: "13-Hour Receiver Battery",
    text: "Built-in rechargeable lithium-ion battery powers the receiver for up to 13 hours.",
  },
  {
    icon: Volume2,
    title: "Flexible Audio Output",
    text: "Switchable 1/8\" headphone/line and USB audio outputs with volume control.",
  },
  {
    icon: Mic,
    title: "Lavalier Microphone",
    text: "Beltpack transmitter includes an omnidirectional lavalier microphone.",
  },
  {
    icon: Battery,
    title: "20-Hour Transmitter Battery",
    text: "Transmitter runs up to 20 hours on two standard AA batteries.",
  },
  {
    icon: Radio,
    title: "100ft Operating Range",
    text: "Up to 100 feet of reliable line-of-sight wireless range.",
  },
  {
    icon: Headphones,
    title: "Headphone Monitoring",
    text: "Monitor audio in real time via the 1/8\" headphone output on the receiver.",
  },
  {
    icon: Package,
    title: "Complete Kit Included",
    text: "Comes with 1/8\" audio cable, USB charge cable, and power adapter.",
  },
];

export default function WirelessMicFeaturesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Product Highlights
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Plug size={20} className="text-red-500 shrink-0" strokeWidth={1.75} />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              Wireless Microphone{" "}
              <span className="text-red-500">System Features</span>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative flex gap-4 items-start bg-white px-5 py-5 hover:bg-gray-50 transition-colors duration-200 cursor-default"
              >
                {/* Icon */}
                <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-gray-200 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-200">
                  <Icon
                    size={15}
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Hover accent */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}