"use client";

import Image from "next/image";

export default function BasicCompositionNetwork() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">          
          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
           Basic Composition of Network Digital Conference System
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
           The equipment required for a complete network digital conference system 
           is a conference automation management system that integrates computer, 
           communication, automatic control, multimedia, image, audio and other technologies.
           <br />
           <br />
           The network digital conference system is generally composed of network, projection 
           display, audio, monitoring, conference speech, lighting effects and central control.
           <br />
           <br />
    All systems use computer network as a platform to share data and control information, decentralize work, 
    and centralize control, enabling equipment operators to monitor and control all equipment easily and quickly.
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