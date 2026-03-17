"use client";

import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Landmark,
  Shuffle,
  Sliders,
  Mic,
  Radio,
} from "lucide-react";

const products = [
  {
    id: "dante-interface",
    label: "Dante Interface",
    applications: [
      { icon: Briefcase, description: "Enterprise boardrooms and advanced conference rooms." },
      { icon: GraduationCap, description: "Education lecture halls and auditoriums." },
      { icon: Landmark, description: "Governmental large facilities with advanced audio mixing applications." },
      { icon: Shuffle, description: "Any application with hybrid analog and digital audio mixing and cross-connection needs." },
    ],
  },
  {
    id: "dante-adapter",
    label: "Dante Adapter",
    applications: [
      { icon: Sliders, description: "Connect legacy mixers and consoles to a Dante network." },
      { icon: Shuffle, description: "Patch favorite DSPs, analog compressors and equalizers into a Dante system using a combination of Dante adapters." },
      { icon: Mic, description: "Connect stage DI boxes and keyboard instruments directly to a Dante network." },
      { icon: Radio, description: "Connect your wireless mic receiver to a Dante network." },
    ],
  },
];

export default function AudioAccessoriesApplication() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active) ?? products[0];

  return (
    <section className="w-full bg-white px-10 py-16 max-w-6xl mx-auto">

      <div className="flex flex-col items-center text-center mb-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Application of{" "}
          <span className="text-red-500">{product.label}</span>
        </h2>
        <div className="mt-2 flex gap-1">
          <span className="w-2 h-0.5 bg-red-500 rounded-full" />
          <span className="w-2 h-0.5 bg-red-500 rounded-full" />
          <span className="w-2 h-0.5 bg-red-500 rounded-full" />
        </div>
      </div>


      <div className="flex justify-center mb-10">
        <div className="flex border border-gray-200 overflow-hidden">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-6 py-2 text-xs font-medium tracking-wide transition-colors duration-150 focus:outline-none
                ${i !== 0 ? "border-l border-gray-200" : ""}
                ${active === p.id
                  ? "bg-red-500 text-white"
                  : "text-gray-500 hover:text-red-500 bg-white"
                }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-200">
        {product.applications.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group border-r border-b border-gray-200 px-6 pt-6 pb-4 flex flex-col items-center text-center gap-3 hover:bg-gray-50 transition-colors duration-150"
            >
              <Icon
                className="text-red-500 group-hover:text-red-600 transition-colors"
                size={28}
                strokeWidth={1.5}
              />
              <p className="text-xs text-gray-500 group-hover:text-gray-700 leading-relaxed transition-colors flex-1">
                {item.description}
              </p>
              <span className="text-3xl font-bold text-red-100 group-hover:text-red-200 leading-none select-none transition-colors mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>

    </section>
  );
}