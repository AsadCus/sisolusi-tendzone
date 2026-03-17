"use client";

import { useState } from "react";

const bestSellingMicrophones = [
  {
    id: 1,
    title: "Desktop Embedded Gooseneck Condenser Microphone",
    tag: "Tendzone G15C/F3",
    description:
      "The Tendzone G15C/F3 is a desktop embedded fixed-mount gooseneck condenser microphone with a compact and elegant appearance. It is mainly used in conference rooms, lecture halls, multi-function halls, command centers and other conference and speech venues.",
  },
  {
    id: 2,
    title: "Rectangular Columnar Analog Condenser Microphone",
    tag: "Tendzone PVS-24",
    description:
      "The Tendzone PVS-24 is a condenser analog microphone with supercardioid polar pattern and 24 cm short boom. It has strong anti-interference ability with mobile phones and simple and fast desktop installation, which is suitable for conference, TV broadcast, professional recording and other high-quality sound pickup applications. The boom and base of this microphone adopt an integrated design and are made of all metal.",
  },
  {
    id: 3,
    title: "Rectangular Columnar Analog Condenser Microphone",
    tag: "Tendzone MQ22",
    description:
      "The Tendzone MQ22 rectangular columnar condenser conference microphone, designed for professional speaking environments such as conference rooms, auditoriums, multifunctional halls, and command centers. The boom and base of this microphone adopt an integrated design and are made of all metal.",
  },
  {
    id: 4,
    title: "Gooseneck Analog Condenser Microphone",
    tag: "Tendzone MQ42",
    description:
      "The Tendzone MQ42 gooseneck conference microphone, designed for professional speaking environments such as conference rooms, auditoriums, multifunctional halls, and command centers. This state-of-the-art microphone features a detachable gooseneck design and utilizes a standard XLR connector for seamless integration into any audio system.",
  },
];

export default function BestSellingMicrophoneSection() {
  const [active, setActive] = useState(0);
  const current = bestSellingMicrophones[active];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight">
            Our Best-Selling Microphone
          </h2>
          <div className="flex justify-center mt-3">
            <span className="block w-10 h-1 rounded-full bg-red-500" />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

          {/* Tab bar */}
          <div className="relative bg-gray-50">
            <div className="flex overflow-x-auto border-b border-gray-100
              md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden
              [scrollbar-width:thin] [scrollbar-color:#fca5a5_transparent]
              [&::-webkit-scrollbar]:h-[3px]
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-red-300
              [&::-webkit-scrollbar-thumb]:rounded-full">
              {bestSellingMicrophones.map((item, i) => (
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
          </div>

          {/* Content */}
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
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}