"use client";

import { useState } from "react";

const bestSellingWirelessSystems = [
  {
    id: 1,
    title: "8CH Wireless Handheld Microphone System",
    tag: "8CH System",
    specs: ["UHF Band", "4 Antennas", "8 Channels", "200 Optional Channels", "8 Condenser Mics"],
    description:
      "The wireless system uses UHF band wireless transmission signals, four antennas and eight channels to receive signals, and has 200 optional channels, which is convenient for multiple systems to be used at the same time and easily avoid various interferences. It is equipped with eight handheld condenser microphones, uses high-quality dynamic pickups, and advanced voice transmission technology to ensure that the conference unit has clear sound quality and high fidelity.",
  },
  {
    id: 2,
    title: "4CH Wireless Handheld Microphone System",
    tag: "4CH System",
    specs: ["UHF Band", "4 Antennas", "4 Channels", "200 Optional Channels", "4 Condenser Mics"],
    description:
      "The wireless system uses UHF band wireless transmission signals, four antennas and four channels to receive signals, and has 200 optional channels, which is convenient for multiple systems to be used at the same time and easily avoid various interferences. It is equipped with four handheld condenser microphones, uses high-quality dynamic pickups, and advanced voice transmission technology to ensure that the conference unit has clear sound quality and high fidelity.",
  },
  {
    id: 3,
    title: "2CH Wireless Handheld Microphone System",
    tag: "2CH System",
    specs: ["UHF Band", "2 Antennas", "2 Channels", "200 Optional Channels", "2 Condenser Mics"],
    description:
      "The wireless system uses UHF band wireless transmission signals, two antennas and two channels to receive signals, and has 200 optional channels, which is convenient for multiple systems to be used at the same time and easily avoid various interferences. It is equipped with two handheld condenser microphones, uses high-quality dynamic pickups, and advanced voice transmission technology to ensure that the conference unit has clear sound quality and high fidelity.",
  },
];

export default function BestSellingWirelessSection() {
  const [active, setActive] = useState(0);
  const current = bestSellingWirelessSystems[active];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight">
            Our Best-Selling Wireless Microphone System
          </h2>
          <div className="flex justify-center mt-3">
            <span className="block w-10 h-1 rounded-full bg-red-500" />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50">
            {bestSellingWirelessSystems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`shrink-0 px-5 py-4 text-[12px] font-semibold tracking-wide transition-all duration-200 border-b-2 whitespace-nowrap ${
                  active === i
                    ? "border-red-500 text-red-600 bg-white"
                    : "border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className={`mr-2 text-[10px] font-black ${active === i ? "text-red-400" : "text-gray-300"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.tag}
              </button>
            ))}
          </div>

          <div key={active} className="bg-white p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-red-500 flex items-center justify-center shadow-md">
                  <span className="text-[13px] font-black text-white">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[18px] font-medium text-gray-900 mb-4 leading-snug">
                  {current.title}
                </h3>
                <p className="text-[13.5px] text-gray-800 leading-7" style={{ textAlign: "justify" }}>
                  {current.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {current.specs.map((spec) => (
                    <span
                      key={spec}
                      className="flex items-center gap-1.5 text-[12px] font-medium text-gray-500 bg-gray-50 border border-gray-100 rounded-md px-2.5 py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}