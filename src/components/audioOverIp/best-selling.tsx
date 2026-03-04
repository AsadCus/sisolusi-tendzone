"use client";

import Image from "next/image";

export default function BestSellingSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">          
          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Our Best-Selling Audio Over IP
            </h2>

            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Distributor Audio over IP System
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 flex items-center justify-center">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Distributor Audio Over IP"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}