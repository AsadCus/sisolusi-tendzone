"use client";

import Image from "next/image";

export default function BestSellingWirelessDigitalSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">          
          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
             Our Best-Selling 2.4G Wireless Digital Conference System
            </h2>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
           Wireless Desktop Delegate Rectangular Columnar Unit
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            The Tendzone Z-3101C/Z-3101D rectangular columnar unit is an ultra-directional wireless condenser microphone that uses 2.4G frequency hopping technology to connect to the host.
            </p>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
          Wireless Desktop Delegate Gooseneck Unit
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            It has built-in DSP audio processing capabilities, a howling suppression function, and a built-in 2000 mA rechargeable nickel-hydrogen battery. The working time can reach 7 hours. The maximum pickup distance of the gooseneck microphone is 50cm.
            </p>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
         Wireless Desktop Chairman Gooseneck Unit
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            It has built-in DSP audio processing capabilities, supports feedback suppression function, and a built-in 1600 mA rechargeable lithium battery. The working time can reach 8 hours. The maximum pickup distance of the rectangular columnar microphone is 50cm.
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