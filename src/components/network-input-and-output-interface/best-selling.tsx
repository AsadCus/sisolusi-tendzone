"use client";

import Image from "next/image";

export default function BestSellingNetworkAudioInputOutputSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">          
          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
             Our Best-Selling Network Input And Output Interface
            </h2>

            <h3 className="text-lg font-medium text-gray-800 mb-4">
            8x8 Vailink I/O Interface
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Amber NV880 is a distributed network audio input and output node, providing 8 channels analog audio input and 8 channels analog output. It supports Tendzone Vailink protocol with 8x8 channels. It is managed and set by the platform software as part of an integrated system. This device is usually placed near the front-end multimedia source or the back-end power amplifier, as a bridge for signal connection.
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