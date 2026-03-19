"use client";

import { useState } from "react";

const bestSelling = [
  {
    id: 1,
    title: "Wireless Desktop Delegate Rectangular Columnar Unit",
    tag: "The Tendzone Z-3101C/Z-3101D",
    description:
      "The Tendzone Z-3101C/Z-3101D rectangular columnar unit is an ultra-directional wireless condenser microphone that uses 2.4G frequency hopping technology to connect to the host. It has built-in DSP audio processing capabilities, supports feedback suppression function, and a built-in 1600 mA rechargeable lithium battery. The working time can reach 8 hours. The maximum pickup distance of the rectangular columnar microphone is 50cm.",
  },
  {
    id: 2,
    title: "Wireless Desktop Delegate Gooseneck Unit",
    tag: "The Tendzone Z-3001C/Z-3001D ",
    description:
      "The Tendzone Z-3001C/Z-3001D gooseneck unit is a wireless condenser microphone that uses 2.4G frequency hopping technology to connect to the host. It has built-in DSP audio processing capabilities, supports feedback suppression function, and a built-in 1600 mA rechargeable lithium battery. The working time can reach 8 hours. The maximum pickup distance of the gooseneck microphone is 50cm.",
  },
  {
    id: 3,
    title: "2.4G Wireless Conference Host",
    tag: "The Tendzone Z-3001",
    description:
      "The Tendzone Z-3001 digital wireless conference system is a complete set of systems based on 2.4G standard, combining high-quality audio and video technology with powerful interactive wireless data transmission function. Based on core DSP audio technology and 2.4G wireless transmission technology, it creatively uses distributed multi-point intelligent transmission technology to solve the distribution control of control signals, greatly improves the reliability of control signal transmission.",
  },
  {
    id: 4,
    title: "Desktop Chairman Rectangular Columnar Unit",
    tag: "The Tendzone AMH-N72C&AMH-N72D",
    description:
      "The Tendzone AMH-N72C&AMH-N72D all-digital network conference system microphone units are pure conference discussion speaking units. The host and units, and units and units are directly connected by network cables, supporting ring links. The speaking unit switch button and microphone stem are both equipped with blue LED status feedback indicators, provide a 3.5mm stereo headphone output interface , and the volume is independently adjustable.",
  },
];

export default function BestSellingDigitalConferenceSection() {
  const [active, setActive] = useState(0);
  const current = bestSelling[active];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-8 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight">
         Our Best-Selling Digital Conference System
          </h2>
          <div className="flex justify-center mt-3">
            <span className="block w-10 h-1 rounded-full bg-red-500" />
          </div>
        </div>

        <div className="rounded-none overflow-hidden border border-gray-100 shadow-sm">
          <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50">
            {bestSelling.map((item, i) => (
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
                <div className="w-10 h-10 rounded-none bg-red-500 flex items-center justify-center shadow-md">
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