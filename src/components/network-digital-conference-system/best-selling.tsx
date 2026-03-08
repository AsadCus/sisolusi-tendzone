"use client";

import Image from "next/image";

export default function BestSellingNetworkDigital() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">          
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex items-center justify-center">
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

            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
            Our Best-Selling Network Digital Conference System
            </h2>

            <h3 className="text-sm font-medium text-gray-800 mb-4">
          Desktop Delegate Rectangular Columnar Unit
            </h3>
            <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
           The Tendzone MTZ-921C&MTZ-921D all-digital network conference system microphone units are pure conference discussion speaking units.
            </p>
            <h3 className="text-sm font-medium text-gray-800 mb-4">
          Desktop Delegate Gooseneck Unit
            </h3>
            <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
          The host and units, and units and units are directly connected by network cables, supporting ring links. The speaking unit provides chairman unit and delegate unit. The delegate unit can be set as VIP.
            </p>
            <h3 className="text-sm font-medium text-gray-800 mb-4">
          Desktop Delegate Rectangular Columnar Unit
            </h3>
            <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
          The Tendzone AMH-N72C&AMH-N72D all-digital network conference system microphone units are pure conference discussion speaking units. The host and units, and units and units are directly connected by network cables, supporting ring links. The speaking unit provides chairman unit and delegate unit.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}