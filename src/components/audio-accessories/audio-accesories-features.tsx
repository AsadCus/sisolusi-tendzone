"use client";

import { useState } from "react";
import {
  ShieldAlert,
  Network,
  Mic,
  Sliders,
  Terminal,
  Signal,
  Zap,
  Plug,
  GitBranch,
  Settings,
  Package,
  Radio,
  Gauge,
  BarChart2,
  SlidersHorizontal,
  Globe,
  Power,
  Server,
} from "lucide-react";

const products = [
  {
    id: "dante-interface",
    label: "Dante Interface",
    features: [
      { icon: Network, text: "Four input and output Dante interface." },
      { icon: Mic, text: "Connect microphones or line level inputs." },
      { icon: Sliders, text: "Four-step gain control and 24V phantom power per channel." },
      { icon: Terminal, text: "Terminal blocks for all analogue connections." },
      { icon: Signal, text: "Signal indicators on each channel." },
      { icon: Zap, text: "Use PoE or an external power supply." },
      { icon: Plug, text: "Use as a PoE injector to power another networked device." },
      { icon: GitBranch, text: "Daisy-chain Dante devices together." },
      { icon: Settings, text: "Easy front panel configuration and user lock." },
    ],
  },
  {
    id: "dante-adapter",
    label: "Dante Adapters",
    features: [
      { icon: Mic, text: "Analog Input, 2 Channel." },
      { icon: Package, text: "Plug and play operation." },
      { icon: Radio, text: "Built for the road." },
      { icon: Gauge, text: "Sample rates up to 96 kHz." },
      { icon: BarChart2, text: "16, 24, and 32 bit audio support." },
      { icon: Signal, text: "Excellent dynamic range, SNR and THD performance." },
      { icon: SlidersHorizontal, text: "Configurable gain/attenuation." },
      { icon: Globe, text: "Dante Audio over IP and AES67 RTP transport formats." },
      { icon: Power, text: "Power over Ethernet (PoE) support." },
      { icon: Server, text: "Dante Domain Manager ready." },
    ],
  },
];

export default function AudioAccesoriesFeatures() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active) ?? products[0];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
          Key Features
        </p>
        <div className="flex items-end justify-between gap-4 mb-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug flex items-center gap-3">
            <ShieldAlert size={22} className="text-red-500 shrink-0" strokeWidth={1.75} />
            {product.label} <span className="text-red-500">Key Features</span>
          </h2>
          <span className="hidden md:block flex-1 h-px bg-gray-100" />
        </div>
        <div className="w-10 h-0.5 bg-red-500 mb-8" />

        <div className="flex justify-start mb-8">
          <div className="grid grid-cols-2 gap-1 bg-gray-100 p-1 rounded-none">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-4 py-2 text-xs font-medium rounded-none transition-all duration-200 whitespace-nowrap focus:outline-none
                  ${active === p.id
                    ? "bg-red-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-red-500"
                  }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
          {product.features.map((item, i) => {
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