"use client";

import Image from "next/image";

export default function BasicPrincipleNetworkSpeaker() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">          
          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
The Basic Principle Of Network Speaker
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
             A network speaker implies the ability to send audio to such a device from a network conne
             ction, usually over an Ethernet network or the Internet. In many cases this type of 
             speaker also contains digital signal processing (DSP) to provide the audio crossover and 
             other tonal functions that exist in conventional speakers.
            </p>
            <br />
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
           Network speakers are also known as IP speakers. In many cases the IP speaker is created from 
           an IP audio endpoint — a device with the requisite network connection and ability to process 
           audio packets, but without the actual physical speaker portion — that provides amplified audio 
           to a conventional loudspeaker or unamplified audio (i.e. line-out) to an amplified speaker or system.
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