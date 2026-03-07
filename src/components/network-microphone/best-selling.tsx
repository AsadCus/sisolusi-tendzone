"use client";

import Image from "next/image";

export default function BestSellingNetworkMicrophoneSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">          
          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">
             Our Best-Selling Network Microphone
            </h2>

            <h3 className="text-lg font-medium text-gray-800 mb-4">
           Vailink Rectangular Columnar Condenser Microphone
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Amber MV600 is a desktop rectangular columnar condenser microphone that supports both network Vailink and analog output. It has a built-in Chinese ARM chip , audio processing function , and the maximum pickup distance can reach 80cm.
            </p>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
           Vailink Desktop Embedded Gooseneck Condenser Microphone
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            G15C/FV is a cardioid condenser gooseneck microphone suitable for desktop embedded installation. It supports network Vailink output. This microphone is exquisite and compact, simple and generous.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 flex items-center justify-center">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Distributor Audio Over IP"
              width={400}
              height={200}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}