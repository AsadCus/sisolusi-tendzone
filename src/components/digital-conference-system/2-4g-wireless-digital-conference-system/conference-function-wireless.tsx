"use client";

import { useState } from "react";

const functions = [
  {
    id: 1,
    tag: "Audio Pickup",
    title: "2.4G Wireless Audio Pickup System",
    description:
      "The system adopts a 2.4G wireless conference system, utilizing the ISM frequency band with 2.4G full-digital frequency-hopping (DSSS) modulation technology, ensuring strong anti-interference capability and full coexistence with WiFi. The system features automatic camera tracking and video switching functions, as well as one-touch control of equipment, lighting, air conditioning, and curtain switches. This system does not require complex cable installation and can be used without any frequency application during installation and operation.",
  },
  {
    id: 2,
    tag: "Speech Modes",
    title: "Flexible Speech Mode Management",
    description:
      "Supports three speech modes: FIFO (First In, First Out), Normal Mode, and Chairman Mode, with a maximum of four microphone units active simultaneously, facilitating orderly meeting management. Advanced 2.4G frequency-hopping modulation communication technology and digital transmission technology significantly reduce interference, ensuring stable system operation and maximizing the security of conference content.",
  },
  {
    id: 3,
    tag: "Control Section",
    title: "Digital Mixer & Audio Matrix Control",
    description:
      "The system utilizes a digital mixer, digital audio matrix, and feedback suppressor to manage overall system control, ensuring clear sound reproduction without distortion or feedback. Additionally, various audio effects processing functions further enhance the audio experience throughout the conference environment.",
  },
  {
    id: 4,
    tag: "Sound Reinforcement",
    title: "Professional Sound Reinforcement System",
    description:
      "Equipped with four 250W professional speakers, providing full venue coverage for comprehensive sound reinforcement across the entire conference environment. The system ensures consistent audio quality and optimal sound distribution for all participants regardless of seating position.",
  },
];

export default function ConferenceFunctionWirelessSection() {
  const [active, setActive] = useState(0);
  const current = functions[active];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight">
            2.4G Wireless Digital Conference System Function
          </h2>
          <div className="flex justify-center mt-3">
            <span className="block w-10 h-1 rounded-full bg-red-500" />
          </div>
        </div>

        <div className="rounded-none overflow-hidden border border-gray-100 shadow-sm">
          <div className="flex overflow-x-auto border-b border-gray-100 bg-gray-50">
            {functions.map((item, i) => (
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