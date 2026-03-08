"use client";

import Image from "next/image";

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
    <section className="w-full bg-white py-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
              Features of Network Adapter
            </h2>

            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-xs md:text-base">
                  <span className="mt-1 w-2 h-2 bg-red-600 rounded-full shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-center justify-center">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Network Adapter"
              width={420}
              height={220}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}