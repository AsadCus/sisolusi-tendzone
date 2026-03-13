"use client";

import Image from "next/image";
import { Building2, Trees } from "lucide-react";

export default function BasicPrincipleMidis() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group cursor-pointer overflow-hidden border border-gray-100 bg-white flex items-center justify-center h-100">
            <Image
              src="https://www.tendzone.net/uploads/43135/4k-av-over-ip-encoder-decoder95fed.jpg"
              alt="Dual 8-inch Speaker"
              width={400}
              height={300}
              className="object-contain w-full h-full p-10 transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
         The Basic Principle Of 
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 leading-snug">
              MIDIS AV Over IP Systems{" "}
            </h2>
            <div className="w-10 h-0.5 bg-red-500 mb-8" />

            <div className="flex flex-col gap-0">
              <p className="text-xs text-gray-400 leading-relaxed">
             MIDIS AV over IP systems is a technology to transport audio and video over a network. The encoder, also known as a transmitter. It can be one source to one display, or many sources to many displays. Along with audio and video, MIDIS AV over IP systems commonly provides extension/distribution of IR, RS-232, USB, and LAN, allowing KVM applications, control of sources/displays, and extension of the network.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}