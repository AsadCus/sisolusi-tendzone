"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Mic2, Speaker, ChevronRight } from "lucide-react";

const products = [
  {
    id: "microphone",
    label: "Condenser Microphone",
    icon: Mic2,
    heading: "Our Best-Selling Condenser Microphone",
    subheading: "Vailink Rectangular Columnar Condenser Microphone",
    description:
      "The Vailink Rectangular Columnar Condenser Microphone combines elegant full-metal construction with professional-grade audio performance. Designed for conferences, lectures, and teaching environments, it delivers crystal-clear sound with outstanding interference rejection.",
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
    image: "/images/product/condenser-mic.png",
    imageAlt: "Vailink Rectangular Columnar Condenser Microphone",
  },
  {
    id: "speaker",
    label: "12″ Network Speaker",
    icon: Speaker,
    heading: "Our Best-Selling 12″ Full-range Speaker",
    subheading: "12″ Vailink Network Powered Full-range Speaker",
    description:
      "The Vailink 12″ Network Powered Full-range Speaker delivers powerful, even coverage with 1000-watt Class D amplification. Built for touring and installed sound alike, its DMT™ technology ensures uniform sound distribution across the entire coverage field.",
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
    image: "/images/product/speaker-12.png",
    imageAlt: "12-inch Vailink Network Powered Full-range Speaker",
  },
];

export default function ProductFeatureSection() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active) ?? products[0];
  const Icon = product.icon;

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        {/* Segmented Button */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-full border border-gray-300 overflow-hidden divide-x divide-gray-300 shadow-sm">
            {products.map((p) => {
              const TabIcon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none
                    ${active === p.id
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
                    }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Text */}
          <div>
            {/* Heading badge with icon */}
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
                <Icon className="w-3 h-3" />
                {product.label}
              </Badge>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-3 leading-snug">
              {product.heading}
            </h2>

            <h3 className="text-base font-medium text-gray-400 mb-4">
              {product.subheading}
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm mb-8">
              {product.description}
            </p>

            {/* Feature List */}
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li
                  key={f.title}
                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg border border-transparent hover:border-t-red-300 hover:border-t-2 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/40 transition-all duration-200 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-600 group-hover:text-red-500 transition-colors duration-200">{f.title}: </span>
                    {f.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Image */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 flex items-center justify-center sticky top-24">
            <Image
              src={product.image}
              alt={product.imageAlt}
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}