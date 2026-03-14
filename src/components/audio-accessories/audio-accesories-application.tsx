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
  ChevronRight,
} from "lucide-react";

const products = [
  {
    id: "dante-interface",
    label: "Dante Interface",
    applications: [
      {
        icon: Briefcase,
        description: "Enterprise boardrooms and advanced conference rooms.",
      },
      {
        icon: GraduationCap,
        description: "Education lecture halls and auditoriums.",
      },
      {
        icon: Landmark,
        description: "Governmental large facilities with advanced audio mixing applications.",
      },
      {
        icon: Shuffle,
        description: "Any application with hybrid analog and digital audio mixing and cross-connection needs.",
      },
    ],
  },
  {
    id: "dante-adapter",
    label: "Dante Adapter",
    applications: [
      {
        icon: Sliders,
        description: "Connect legacy mixers and consoles to a Dante network.",
      },
      {
        icon: Shuffle,
        description: "Patch favorite DSPs, analog compressors and equalizers into a Dante system using a combination of Dante adapters.",
      },
      {
        icon: Mic,
        description: "Connect stage DI boxes and keyboard instruments directly to a Dante network.",
      },
      {
        icon: Radio,
        description: "Connect your wireless mic receiver to a Dante network.",
      },
    ],
  },
];

export default function AudioAccesoriesApplication() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active) ?? products[0];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Application of <span className="text-red-500">{product.label}</span>
          </h2>
          <div className="mt-3 w-7 h-0.5 bg-red-500" />
        </div>

        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-2 gap-1 bg-gray-100 p-1">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-4 py-2 text-xs font-medium transition-all duration-200 whitespace-nowrap focus:outline-none
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {product.applications.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between bg-white border border-gray-200 hover:border-red-300 transition-colors duration-200 overflow-hidden p-5 min-h-48"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-5 h-5 text-red-500" strokeWidth={1.7} />
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400 transition-colors duration-200" />
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors duration-200 flex-1">
                  {item.description}
                </p>

                <span className="self-end text-[28px] font-bold text-gray-100 group-hover:text-red-100 leading-none select-none transition-colors duration-200 mt-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}