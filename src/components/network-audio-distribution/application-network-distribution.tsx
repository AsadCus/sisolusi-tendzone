"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Plug, Volume2, ChevronRight } from "lucide-react";

const applications = [
  {
    id: 1,
    badge: "Analog Adapter",
    icon: Plug,
    title: "Applications Of Vailink 2CH Analog Input Adapter",
    subtitle: "Applications",
    image: "/images/product/2k60-hdmi.png",
    imageAlt: "Vailink 2CH Analog Input Adapter",
    imageLeft: false,
    features: [
      { label: "Analog Mixers", desc: "Connect analog mixers and consoles to a Dante network" },
      { label: "DSP Patching", desc: "Patch DSPs, analog compressors and equalizers into a Dante system using Dante AVIO Input and Output adapters" },
      { label: "Stage DI Boxes", desc: "Connect stage DI boxes and keyboard instruments directly to a Dante network" },
      { label: "Wireless Mic", desc: "Connect wireless mic receiver to a Dante network" },
    ],
  },
  {
    id: 2,
    badge: "Network Speaker",
    icon: Volume2,
    title: "12' Vailink Network Powered Full-Range Speaker Applications",
    subtitle: "Applications",
    image: "/images/product/2x2-dante.png",
    imageAlt: "Vailink Network Powered Speaker",
    imageLeft: true,
    features: [
      { label: "Live Sound", desc: "Live sound reinforcement for concerts and events" },
      { label: "Theatre Sound", desc: "Professional theatre sound installations" },
      { label: "Corporate AV", desc: "Corporate AV events and presentations" },
      { label: "Fixed Install", desc: "Fixed installations in concert halls, ballrooms and HoW" },
      { label: "Stage Monitor", desc: "Stage monitor and infill applications" },
    ],
  },
];

export default function ProductApplicationNetworkAudio() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 space-y-12">
        {applications.map((product) => {
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
                <p className="text-white text-sm font-medium">{product.imageAlt}</p>
              </div>
            </div>
          );

          const contentCol = (
            <div className="flex flex-col justify-center h-full">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
                  <Icon className="w-3 h-3" />
                  {product.badge}
                </Badge>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-snug">
                {product.title}{" "}
                <span className="text-red-500">{product.subtitle}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
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