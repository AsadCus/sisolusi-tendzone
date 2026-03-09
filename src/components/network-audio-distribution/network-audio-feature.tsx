"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Mic2, Speaker, ChevronRight } from "lucide-react";

const products = [
  {
    id: "microphone",
    label: "Condenser Microphone",
    icon: Mic2,
    heading: "Our Best-Selling Condenser Microphone",  
    features: [
      { title: "Premium Build", desc: "Full metal pedestal plus rectangular column stem — simple and elegant design" },
      { title: "14mm Gilded Capsule", desc: "Cardioid directed electret capsule delivers clear, natural sound reproduction" },
      { title: "Built-in Windproof Cotton", desc: "Optimized acoustic chamber structure for superior sound quality" },
      { title: "Adjustable Angle", desc: "Flexible microphone angle for convenient sound collection" },
      { title: "Anti-Interference", desc: "Highly resistant to mobile phone interference" },
      { title: "Low-Reflectance Coating", desc: "Black full metal pedestal with grinding coating for a refined appearance" },
      { title: "Shock-Proof Base", desc: "Stable thick pedestal with insulating rubber pad reduces vibration and mechanical noise" },
      { title: "3-Pin XLR Output", desc: "Nickel-plated XLR male socket on the back serves as audio signal output terminal" },
      { title: "48V Phantom Power", desc: "Compatible with standard 48V phantom power supply" },
      { title: "Self-Locking ON/OFF", desc: "Press button to activate — red indicator lights confirm microphone is on" },
      { title: "Versatile Use", desc: "Suitable for conference, lecture, teaching — works directly with audio processor or mixer" },
    ],
  },
  {
    id: "speaker",
    label: "12″ Network Speaker",
    icon: Speaker,
    heading: "Our Best-Selling 12″ Full-range Speaker",
    features: [
      { title: "12-inch Woofer", desc: "Paired with a 1.75-inch diaphragm compression driver for full-range performance" },
      { title: "75° DMT™ Coverage", desc: "Conical DMT™ pattern ensures uniform coverage across the entire sound field" },
      { title: "131 dB Peak SPL", desc: "Maximum output of 131 dB for high-impact sound reinforcement" },
      { title: "Floor Monitor Ready", desc: "Also functions as a monitor floor wedge for stage use" },
      { title: "1000W Class D Power", desc: "2 × 500W continuous Class D amplification modules in all models" },
      { title: "Onboard Mixer", desc: "Two combo XLR/¼\" inputs, stereo RCA inputs, two direct channel outputs, one summed balanced output" },
      { title: "Rugged Enclosure", desc: "Texture-painted birch construction for tour-grade durability" },
      { title: "Tour-Grade Grilles", desc: "Heavy-duty 16 gauge steel grilles for long-term protection" },
      { title: "Four-Position Gain", desc: "Mic/Line gain switch for versatile input level matching (full-range models)" },
      { title: "Easy Installation", desc: "35mm pole sockets, M10 rigging points for suspended installation, ergonomic handles" },
    ],
  },
];

export default function ProductFeatureSection() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active) ?? products[0];
  const Icon = product.icon;

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex justify-center mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-gray-100 p-1 rounded-lg w-full max-w-sm">
            {products.map((p) => {
              const TabIcon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap focus:outline-none
                    ${active === p.id
                      ? "bg-red-500 text-white shadow-sm"
                      : "text-gray-600 hover:text-red-500"
                    }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
              <Icon className="w-3 h-3" />
              {product.label}
            </Badge>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-2 leading-snug">
            {product.heading}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {product.features.map((f) => (
              <li
                key={f.title}
                className="flex items-start gap-3 px-3 py-2.5 rounded-lg border border-transparent hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/40 transition-all duration-200 group"
              >
                <ChevronRight className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-600 group-hover:text-red-500 transition-colors duration-200">
                    {f.title}:{" "}
                  </span>
                  {f.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}