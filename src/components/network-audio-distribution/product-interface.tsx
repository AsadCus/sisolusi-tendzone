"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Layers, Plug, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    badge: "I/O Interface",
    icon: Layers,
    title: "8x8 Vailink I/O Interface",
    subtitle: "Features",
    image: "/images/product/2x2-dante.png",
    imageAlt: "8x8 Vailink I/O Interface",
    imageLeft: true,
    features: [
      { label: "Video Matrix", desc: "Connect any of the 8 inputs to any of the 8 outputs" },
      { label: "Multiple Control Options", desc: "Front panel buttons, IR remote, RS232, Web Interface, and Control 4" },
      { label: "Audio De-embedding", desc: "De-embed audio from any of the 8 Coax S/PDIF outputs up to 7.1 channel" },
      { label: "HDCP 2.2", desc: "High-Bandwidth Digital Content Protection supported" },
      { label: "Crystal Clear Images", desc: "Stunning image quality up to 4K@60Hz 4:4:4" },
      { label: "EDID Management", desc: "Smart EDID to ensure reliable signal quality" },
    ],
  },
  {
    id: 2,
    badge: "Analog Adapter",
    icon: Plug,
    title: "Vailink 2CH Analog Input Adapter",
    subtitle: "Features",
    image: "/images/product/2k60-hdmi.png",
    imageAlt: "Vailink 2CH Analog Input Adapter",
    imageLeft: false,
    features: [
      { label: "2-Channel Input", desc: "2 XLR connectors with 2-channel analog audio input" },
      { label: "Network Config", desc: "Supports DHCP & static IP configuration" },
      { label: "High Sample Rate", desc: "Input up to 96kHz, Output up to 48kHz (firmware update required)" },
      { label: "Audio Quality", desc: "S/N ratio >90dB, THD+N <0.005%, excellent dynamic range" },
      { label: "Dante / AES67", desc: "Dante audio over IP and AES67 RTP transport formats" },
      { label: "Dual Power", desc: "Dual power input options: POE / USB, power consumption <1W" },
    ],
  },
];

export default function ProductInterfaceSection() {
  return (
    <section className="w-full bg-white py-22">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        {products.map((product) => {
          const Icon = product.icon;
          const imageCol = (
            <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-80">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={400}
                height={300}
                className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end p-6">
              </div>
            </div>
          );

          const contentCol = (
            <div className="flex flex-col justify-center h-full">
              <div className="flex items-center gap-2 mb-4">
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-snug">
                {product.title}{" "}
                <span className="text-red-500">{product.subtitle}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 bg-gray-50 rounded-none px-4 py-3 border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-200"
                  >
                    <div>
                      <p className="text-xs font-semibold text-gray-800 leading-snug">{f.label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

          return (
            <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {product.imageLeft ? (
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