"use client";

import { useState } from "react";

const functions = [
  {
    id: 1,
    tag: "5G Wi-Fi Technology",
    title: "5G Wi-Fi Conference System Technology",
    description:
      "Based on touch technology and Wi-Fi communication technology, successfully launched 5G Wi-Fi wireless conference system through independent research and development. The design of the conference unit has a proprietary appearance patent and a unique curved touch screen, which not only increases the viewing angle, but also enhances the sense of texture and technology.",
  },
  {
    id: 2,
    tag: "Zero Interference",
    title: "Zero Interference Communication",
    description:
      "Wi-Fi wireless conference system adopts standard Wi-Fi communication technology and is compatible with standard Wi-Fi 2.4/5G wireless network, which enables the system to switch freely on 40 legal channels. Packet loss retransmission and intelligent channel management function ensure that even when there is external channel overlap, it has sufficient anti-interference ability to avoid affecting system audio transmission.",
  },
  {
    id: 3,
    tag: "Easy Installation",
    title: "Simple Setup and Installation",
    description:
      "After simple connection of wireless point to central unit, the whole system will work. Each unit has a signal strength indicator, allowing you to place the units according to the position of each person and follow the signal indicator for optimal placement and performance.",
  },
  {
    id: 4,
    tag: "Perfect Sound",
    title: "Perfect Sound Quality",
    description:
      "Each unit comes with a high-fidelity built-in loudspeaker for clear sound. When mainly using an external loudspeaker, the system provides a built-in DSP processor with AFC automatic feedback suppression to suppress feedback noise and ensure crystal-clear audio throughout the conference environment.",
  },
  {
    id: 5,
    tag: "Battery & Power",
    title: "Large Battery Capacity and Energy Saving",
    description:
      "The conference unit uses a detachable 4900mAh ultra-capacity battery. When the microphone or speaker is turned on, the unit can work continuously for 24 hours with a standby life of 60 hours. The OLED display has 5 power indicators with a low-power icon to remind users. Administrators can also directly replace the battery or use a DC adapter to directly supply power to the unit.",
  },
  {
    id: 6,
    tag: "Modern Meeting",
    title: "Compatible with Modern Meeting Requirements",
    description:
      "Each wireless conference unit provides an audio input interface, which allows the audio of mobile phones and notebooks to be easily accessed to the local conference system for mobile video conferencing and sharing of mobile device audio, meeting all modern collaboration needs.",
  },
  {
    id: 7,
    tag: "Multi-Function",
    title: "Different Functions by Models",
    description:
      "The wireless conference system uses 48K, 16-bit uncompressed audio transmission, capable of transmitting 8 channels of voice and control signals simultaneously. Based on this technology, different solutions are provided including wireless pure discussion units, wireless discussion with voting, simultaneous interpretation, wireless discussion with dual simultaneous channels, and other models covering different market needs.",
  },
  {
    id: 8,
    tag: "Wired/Wireless Mix",
    title: "Wired and Wireless Units Working Together",
    description:
      "For multi-functional conference rooms, training rooms, and release halls that often need to be reconfigured, the chairman unit is generally wired and fixed while other audience seats can temporarily increase or decrease conference units as needed. The wired and wireless mixed conference system offers great flexibility — wireless units require no cabling and can be placed directly as needed.",
  },
  {
    id: 9,
    tag: "HD Camera",
    title: "HD Camera Auto Tracking",
    description:
      "The system main unit comes with a camera tracking function, which can send control codes to cameras or seamless matrix systems to realize automatic tracking and high-definition recording, ensuring that all participants are captured clearly and efficiently throughout the conference.",
  },
];

export default function DigitalConferenceFunctionWirelessSection() {
  const [active, setActive] = useState(0);
  const current = functions[active];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight">
            5G Digital Conference System Advantages
          </h2>
          <div className="flex justify-center mt-3">
            <span className="block w-10 h-1 rounded-full bg-red-500" />
          </div>
        </div>

        {/* Segmented Button Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-2 mb-6">
          {functions.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center justify-center gap-1 px-2 py-3 rounded-none text-center transition-all duration-200 border ${
                active === i
                  ? "bg-red-500 border-red-500 text-white shadow-md"
                  : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100 hover:border-gray-300"
              }`}
            >
              <span
                className={`text-[10px] font-black ${
                  active === i ? "text-red-200" : "text-gray-300"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-semibold leading-tight">
                {item.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="rounded-none border border-gray-100 shadow-sm bg-white p-8">
          <div key={active} className="flex flex-col md:flex-row gap-8 items-start">
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
              <p
                className="text-[13.5px] text-gray-800 leading-7"
                style={{ textAlign: "justify" }}
              >
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}