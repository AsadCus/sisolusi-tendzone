"use client";

import { useState } from "react";
import { Mic2 } from "lucide-react";

const products = [
  {
    id: "rectangular",
    label: "Delegate Rectangular",
    icon: Mic2,
    heading: "Wireless Desktop Delegate Rectangular Columnar Unit Features",
    features: [
      "Full metal microphone pedestal plus rectangular column microphone stem, simple and elegant.",
      "14mm diameter gilded capacitance microphone with cardioid directed electret, can deliver clear sound effect.",
      "Built-in windproof cotton, optimizing the structure design of the acoustic chamber, and bringing better sound quality.",
      "Adjustable microphone angle, convenient for collecting the sound. Highly resistant to mobile phone interference.",
      "Black full metal pedestal covered by low-reflectance and grinding coatings.",
      "Stable and thick pedestal with shock-proof insulating rubber pad, effectively reducing friction vibration and mechanical noise.",
      "3-pin nickel-plated XLR male socket on the back of the pedestal serves as the output terminal of audio signal.",
      "Microphone supports 48V phantom power supply.",
      "Self-locking ON/OFF button is available — red indicator lights confirm microphone is on, press again to turn off.",
      "Suitable for conference, lecture, teaching and other occasions.",
      "It can co-work directly with audio processor or mixer.",
    ],
  },
  {
    id: "gooseneck",
    label: "Delegate Gooseneck",
    icon: Mic2,
    heading: "Wireless Desktop Delegate Gooseneck Unit Features",
    features: [
      "Optimized and enhanced — the connection is more stable, 2.4G frequency hopping technology can coexist with WiFi routers.",
      "Directional condenser microphone with high sensitivity, wide frequency response and clear sound quality.",
      "Built-in DSP audio processing module with howling suppression function to prevent system feedback.",
      "The sound pickup distance can reach 50cm.",
      "Anti-mobile phone interference.",
      "Red matte halo indicates the microphone's speaking status.",
      "OLCD display screen shows microphone power, signal strength, number, speaking time, and working status in real time.",
      "When the chairman microphone priority button is pressed, the delegate microphone is automatically turned off.",
      "The chairman's microphone is not restricted and can be connected in series to control delegate microphones.",
      "Supports multiple chairmen online at the same time.",
      "Supports free setting of VIP or representative identity for microphone.",
      "Dual powered — supports NiMH rechargeable batteries (standard) or ordinary AA batteries.",
    ],
  },
];

export default function DigitalConferenceFeatureSection() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active) ?? products[0];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex justify-center mb-10">
          <div className="inline-flex border border-gray-200 divide-x divide-gray-200 w-full max-w-sm">
            {products.map((p) => {
              const TabIcon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none ${
                    active === p.id
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-500 hover:text-red-500"
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5 shrink-0" />
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-snug">
          {product.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
          {product.features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white px-5 py-4 hover:bg-red-50/40 transition-colors duration-150 group"
            >
              <div className="w-3 h-[2px] bg-red-500 mt-[9px] shrink-0" />
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-150">
                {f}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}