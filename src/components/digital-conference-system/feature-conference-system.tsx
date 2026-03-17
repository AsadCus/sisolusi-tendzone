"use client";

import Image from "next/image";
import { Radio, Mic2 } from "lucide-react";

const sections = [
  {
    icon: Radio,
    label: "Conference Host",
    title: "2.4G Wireless Conference Host",
    image: "/images/product/expansion-midis.png",
    imageAlt: "2.4G Wireless Conference Host",
    imageLeft: false,
    features: [
      "Wireless Conference System host (receiver)",
      "2.4G universal wireless control and transmission technology",
      "One system supports up to 255 wireless microphones (chairman + delegate units)",
      "Mature self-adaptive FHSS technology — high privacy and strong interference avoidance",
      "Compatible with Wi-Fi and Bluetooth devices without mutual interference",
      "4 conference modes: Free mode (1–4 speakers), Chairman mode, Time-limiting speech mode",
      "Camera tracking support — 4 inputs, 2 video outputs; PELCO-D, PELCO-P, VISCA protocols",
      "Intelligent power management — microphones auto shut down with host",
      "240×28 display with friendly menu for easy operation",
      "Working distance ≥ 60m",
    ],
  },
  {
    icon: Mic2,
    label: "Chairman Unit",
    title: "Desktop Chairman Rectangular Columnar Unit",
    image: "/images/product/premium-recording.png",
    imageAlt: "Desktop Chairman Rectangular Columnar Unit",
    imageLeft: true,
    features: [
      "Elegant ergonomic design with cable exit from base for tidier wiring",
      "Hi-Fi loudspeaker, priority button, and microphone On/Off button",
      "Braille present on all physical buttons",
      "Rectangular columnar microphone with adjustable pitching angle",
      "OLED screen — high brightness, high contrast, wide viewing angle, low power consumption",
      "\"Closed Loop – Daisy Chain\" connection topology",
      "Transmits up to 64 channels of high-quality digital audio on dedicated 8-pin cable",
      "48kHz audio sampling rate — all channels reproduce 30Hz to 20kHz",
      "Excellent immunity to RF interference from mobile phones",
      "Separate gain and 5-band EQ adjustment per microphone",
      "Supports Plug and Play (PnP)",
    ],
  },
];

export default function ProductApplicationFeatureConference() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 space-y-16">
        {sections.map((section, idx) => {
          const Icon = section.icon;

          const imageCol = (
            <div className="bg-white border border-gray-100 flex items-center justify-center aspect-square w-full overflow-hidden group">
              <Image
                unoptimized
                src={section.image}
                alt={section.imageAlt}
                width={480}
                height={480}
                className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          );

          const contentCol = (
            <div className="flex flex-col justify-center gap-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-red-500 shrink-0" />
                <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-red-400 flex items-center gap-1.5">
                  <Icon className="w-3 h-3" />
                  {section.label}
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-2xl md:text-[26px] font-bold text-gray-900 leading-snug tracking-tight">
                  {section.title}
                </h2>
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="w-7 h-[3px] bg-red-500 rounded-full" />
                  <span className="w-2.5 h-[3px] bg-red-300 rounded-full" />
                  <span className="w-1.5 h-[3px] bg-red-100 rounded-full" />
                </div>
              </div>

              {/* Feature list */}
              <div className="grid grid-cols-1 gap-px bg-gray-100 border border-gray-100">
                {section.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white px-4 py-3 hover:bg-red-50/40 transition-colors duration-150 group"
                  >
                    <div className="w-3 h-[2px] bg-red-500 mt-[9px] shrink-0" />
                    <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-150">
                      {f}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );

          return (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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