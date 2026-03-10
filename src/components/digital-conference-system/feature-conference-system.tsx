"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Radio, Mic2, Check } from "lucide-react";

const sections = [
  {
    badge: "Conference Host",
    icon: Radio,
    title: "2.4G Wireless Conference Host",
    subtitle: "Features",
    image: "/images/product/expansion-midis.png",
    imageAlt: "2.4G Wireless Conference Host",
    imageLeft: false,
    features: [
      "Wireless Conference System host (receiver)",
      "2.4G universal wireless control and transmission technology",
      "One system can support up to 255 wireless microphones (chairman units / delegate units)",
      "Mature self-adaptive FHSS technology, high privacy and ability of avoiding interference",
      "Can be used with Wi-Fi and Bluetooth devices without interfering each other",
      "4 conference modes: First in first out free mode (1–4 speakers programmable), Chairman mode, Time-limiting speech mode",
      "Support camera tracking function, 4 camera inputs, 2 video outputs",
      "Support multiple camera communication protocols: PELCO-D, PELCO-P, VISCA",
      "Intelligent power management — when host is shut down, wireless microphone shuts down automatically",
      "240×28 display screen with friendly menu setting, easy to use",
      "Working distance ≥60m",
    ],
  },
  {
    badge: "Chairman Unit",
    icon: Mic2,
    title: "Desktop Chairman Rectangular Columnar Unit",
    subtitle: "Features",
    image: "/images/product/premium-recording.png",
    imageAlt: "Desktop Chairman Rectangular Columnar Unit",
    imageLeft: true,
    features: [
      "Elegant and ergonomic design with exquisite tabletop form factor for ease of use and transport",
      "Cable coming out of the base for tidier wiring",
      "Hi-Fi loudspeaker, priority button, and microphone On/Off button",
      "Braille present on all physical buttons",
      "Rectangular columnar microphone with adjustable pitching angle",
      "OLED screen with high brightness, high contrast, wide viewing angle, and low power consumption",
      "\"Closed Loop – Daisy Chain\" connection topology",
      "Transmits up to 64 channels of high-quality digital audio on a dedicated 8-pin cable",
      "Supports 48kHz audio sampling rate — all 64 channels reproduce frequencies between 30Hz and 20kHz",
      "Excellent immunity to RF interference from mobile phones",
      "Separate adjustment of gain and EQ (5-band) per microphone for perfect sound",
      "Supports \"PnP\" (plug and play)",
    ],
  },
];

export default function ProductApplicationFeatureConference() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {sections.map((section, idx) => {
          const Icon = section.icon;

          const imageCol = (
            <div className="relative group cursor-pointer rounded-none overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-80">
              <Image
                src={section.image}
                alt={section.imageAlt}
                width={420}
                height={280}
                className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-none flex items-end p-6">
                <p className="text-white text-sm font-medium">{section.imageAlt}</p>
              </div>
            </div>
          );

          const contentCol = (
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 leading-snug">
                {section.title}{" "}
                <span className="text-red-500">{section.subtitle}</span>
              </h2>

              <ul className="space-y-1">
                {section.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 px-3 rounded-none border border-transparent hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/40 transition-all duration-200 group"
                  >
                    <Check className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );

          return (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {section.imageLeft ? (
                <>
                  {imageCol}
                  {contentCol}
                </>
              ) : (
                <>
                  <div className="order-2 lg:order-1">{contentCol}</div>
                  <div className="order-1 lg:order-2">{imageCol}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}