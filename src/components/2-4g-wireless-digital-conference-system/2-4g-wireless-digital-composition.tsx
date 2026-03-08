"use client";

import Image from "next/image";

export default function CompositionWirelessDigitalSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">          
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 flex items-center justify-center">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Distributor Audio Over IP"
              width={400}
              height={200}
              className="object-contain"
            />
          </div>
          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
             2.4G Wireless Digital Conference System Composition
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
           The 2.4G wireless digital conference system consists of a conference unit system, video matrix system, central control system, and professional sound reinforcement system.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}