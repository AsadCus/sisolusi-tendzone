"use client";

import { useState } from "react";

const bestSelling = [
  {
    id: 1,
    title: "8x8 Vailink I/O Interface",
    tag: "Amber NV880",
    description:
      "Amber NV880 is a distributed network audio input and output node, providing 8 channels analog audio input and 8 channels analog output. It supports Tendzone Vailink protocol with 8x8 channels. It is managed and set by the platform software as part of an integrated system. This device is usually placed near the front-end multimedia source or the back-end power amplifier, as a bridge for signal connection.",
  },
  {
    id: 2,
    title: "Vailink 2CH Analog Input Adapter",
    tag: "Amber NV200",
    description:
      "Amber NV200 is a network adapter independently developed by TENDZONE, which can connect analog audio signals to the Vailink network, provide analog audio input, control, and transmit high-quality network audio through TENDZONE Vailink protocol. This device is usually placed near the front-end multimedia source, microphone and other equipment, as a bridge for audio signal connection.",
  },
  {
    id: 3,
    title: "Vailink Rectangular Columnar Condenser Microphone",
    tag: "Amber MV600",
    description:
      "Amber MV600 is a desktop rectangular columnar condenser microphone that supports both network Vailink and analog output. It has a built-in Chinese ARM chip, audio processing function, and the maximum pickup distance can reach 80cm. It is one of the components of the TENDZONE distributed network audio system, which can be directly connected to the distributed network audio system through a network cable and supports PoE power supply.",
  },
  {
    id: 4,
    title: "12' Vailink Network Powered Full-range Speaker",
    tag: "The Amber SM12",
    description:
      "The Amber SM12 powered speaker is designed for smart network system architecture, featuring both digital and analog dual-link backup inputs. It utilizes TENDZONE's unique audio processing technology to deliver natural sound reproduction while maintaining the brand's high sound quality standards. The speaker employs the TENDZONE Vailink network transmission protocol for audio streaming via the RJ45 network interface.",
  },
];

export default function BestSellingNetworkAudioSection() {
  const [active, setActive] = useState(0);
  const current = bestSelling[active];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight">
            Our Best-Selling Network Audio Distribution
          </h2>
          <div className="flex justify-center mt-3">
            <span className="block w-10 h-1 rounded-full bg-red-500" />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
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
                <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center shadow-md">
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