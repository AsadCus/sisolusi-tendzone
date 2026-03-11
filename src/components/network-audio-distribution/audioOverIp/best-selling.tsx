"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Wifi } from "lucide-react";

export default function BestSellingSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-2 mb-4">
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-3 leading-snug">
              Our Best-Selling{" "}
              <span className="text-red-500">Audio Over IP</span>
            </h2>

            <h3 className="text-base font-medium text-gray-400 mb-4">
              Distributor Audio over IP System
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm">
              Amber SV500 is a audio over IP distributed network audio system
              processing service center. It is an enterprise-level core AI audio
              algorithm processing platform that integrates powerful hardware
              processing capabilities and rich and powerful audio algorithms.
              It adopts the first self-developed audio transmission Tendzone
              Vialink protocol in the domestic professional AV field, providing
              72x72 channels of ultra-low latency, uncompressed network audio
              input, output and processing capabilities, and supports 16x16 RTSP
              network streaming audio, audio matrix routing can reach 88x88.
            </p>
          </div>

          <div className="relative group cursor-pointer rounded-none overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-80">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Distributor Audio Over IP"
              width={400}
              height={200}
              className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end p-6">
              <p className="text-white text-sm font-medium">Distributor Audio Over IP</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}