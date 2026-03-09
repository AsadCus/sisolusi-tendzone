"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";

export default function BestSellingNetworkAudioInputOutputSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
                <Network className="w-3 h-3" />
                Network I/O Interface
              </Badge>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-3 leading-snug">
              Our Best-Selling{" "}
              <span className="text-red-500">Network Input And Output Interface</span>
            </h2>

            <h3 className="text-base font-medium text-gray-400 mb-4">
              8x8 Vailink I/O Interface
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm">
              Amber NV880 is a distributed network audio input and output node, providing 8 channels analog audio input and 8 channels analog output. It supports Tendzone Vailink protocol with 8x8 channels. It is managed and set by the platform software as part of an integrated system. This device is usually placed near the front-end multimedia source or the back-end power amplifier, as a bridge for signal connection.
            </p>
          </div>

          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-80">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="8x8 Vailink I/O Interface"
              width={600}
              height={400}
              className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end p-6">
              <p className="text-white text-sm font-medium">8x8 Vailink I/O Interface</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}