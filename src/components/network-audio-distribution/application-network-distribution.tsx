"use client";

import Image from "next/image";

export default function ProductApplicationNetworkAudio() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-8">
              Applications Of Vailink 2CH Analog Input Adapter
            </h2>

            <ul className="space-y-3 text-sm text-gray-600 list-disc list-inside">
              <li>Connect analog mixers and consoles to a Dante network</li>
              <li>
                Patch DSPs, analog compressors and equalizers into a Dante system
                using a combination of Dante AVIO Input and Output adapters
              </li>
              <li>
                Connect stage DI boxes and keyboard instruments directly to a
                Dante network
              </li>
              <li>
                Connect wireless mic receiver to a Dante network
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-10 flex items-center justify-center">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Vailink 2CH Analog Input Adapter"
              width={420}
              height={280}
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="bg-white rounded-2xl border border-gray-200 p-10 flex items-center justify-center">
            <Image
              src="/images/product/2x2-dante.png"
              alt="Vailink Network Powered Speaker"
              width={420}
              height={300}
              className="object-contain"
            />
          </div>

          <div>
            <div className="w-10 h-1 bg-red-600 mb-6 rounded-full" />

            <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-8">
              12' Vailink Network Powered Full-Range Speaker Applications
            </h2>

            <ul className="space-y-3 text-sm text-gray-600 list-disc list-inside">
              <li>Live sound reinforcement</li>
              <li>Theatre sound</li>
              <li>Corporate AV events</li>
              <li>
                Fixed installations in concert halls, ballrooms and HoW
              </li>
              <li>Stage monitor and infill</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}