"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Mic2, ChevronRight } from "lucide-react";

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
      "Stable and thick pedestal with shock-proof insulating rubber pad, effectively reducing friction vibration and mechanical noise on the installation surface.",
      "3-pin nickel-plated XLR male socket on the back of the pedestal serves as the output terminal of audio signal.",
      "Microphone supports 48V phantom power supply.",
      "Self-locking ON/OFF button is available, press the button, and see the red indicator lights, then the microphone is on, press again, the microphone is off.",
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
      "Optimized and enhanced, the connection is more stable, and the 2.4G frequency hopping technology can coexist with WiFi routers.",
      "The microphone adopts a directional condenser microphone with high sensitivity, wide frequency response and clear sound quality.",
      "The system has a built-in DSP audio processing module with a howling suppression function to prevent the system from \"howling\".",
      "The sound pickup distance can reach 50cm.",
      "Anti-mobile phone interference.",
      "The red matte halo indicates the microphone's speaking status.",
      "Environmentally friendly and energy-saving high-definition OLCD display screen displays microphone power, signal strength, microphone number, speaking time, microphone working status and other information in real time.",
      "When the chairman microphone priority button is pressed, the delegate microphone is automatically turned off.",
      "The chairman's microphone is not restricted and can be connected in series in the system to control the delegate microphones.",
      "Support multiple chairmen online at the same time.",
      "Supports free setting of VIP or representative identity for microphone.",
      "The microphone is dual powered and can use three NiMH rechargeable batteries (standard) or ordinary AA batteries.",
    ],
  },
];

export default function ProductFeatureSection() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active) ?? products[0];
  const Icon = product.icon;

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-gray-100 p-1 rounded-none w-full max-w-sm">
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
        
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 leading-snug">
            {product.heading}
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {product.features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-3 px-3 py-2.5 rounded-lg border border-transparent hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/40 transition-all duration-200 group"
              >
                <ChevronRight className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-500 leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}