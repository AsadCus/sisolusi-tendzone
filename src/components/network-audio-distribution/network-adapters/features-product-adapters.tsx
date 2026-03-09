"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Network, ChevronRight } from "lucide-react";

const features = [
  "Cost-effective solution for adapting analog gear to your Dante network",
  "Plug-and-play operation",
  "Replaces multiple analog or multi-core cables with only a network cable",
  "Balanced, line-level dual-channel analog input adapter",
  "Compact design, easy to use",
  "Sample rates up to 96 kHz",
  "Extends uncompressed high-quality audio signal with near-zero latency",
  "Wide dynamic range",
  "High signal-to-noise ratio",
  "Low total harmonic distortion",
  "Configurable gain and attenuation",
  "Dante Audio over IP and AES67 RTP transport formats",
  "Power over Ethernet (PoE) support",
  "Compatible with Dante Domain Manager (DDM)",
];

export default function FeaturesNetworkAdaptersSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
                <Network className="w-3 h-3" />
                Network Adapter
              </Badge>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3 leading-snug">
              Features of <span className="text-red-500">Network Adapter</span>
            </h2>

            <ul className="">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 px-3 py-2 rounded-lg border border-transparent hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/30 transition-all duration-200 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-full min-h-80">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Network Adapter"
              width={420}
              height={220}
              className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end p-6">
              <p className="text-white text-sm font-medium">Network Adapter</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}