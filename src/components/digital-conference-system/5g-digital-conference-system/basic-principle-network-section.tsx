"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Speaker } from "lucide-react";

export default function BasicPrincipleNetworkSpeaker() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
                <Speaker className="w-3 h-3" />
                Network Speaker
              </Badge>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 leading-snug">
              The Basic Principle Of{" "}
              <span className="text-red-500">Network Speaker</span>
            </h2>

            <div className="space-y-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                A network speaker implies the ability to send audio to such a device from a network
                connection, usually over an Ethernet network or the Internet. In many cases this type of
                speaker also contains digital signal processing (DSP) to provide the audio crossover and
                other tonal functions that exist in conventional speakers.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Network speakers are also known as IP speakers. In many cases the IP speaker is created from
                an IP audio endpoint — a device with the requisite network connection and ability to process
                audio packets, but without the actual physical speaker portion — that provides amplified audio
                to a conventional loudspeaker or unamplified audio (i.e. line-out) to an amplified speaker or system.
              </p>
            </div>
          </div>

          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-80">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Network Speaker"
              width={400}
              height={200}
              className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end p-6">
              <p className="text-white text-sm font-medium">Network Speaker</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}