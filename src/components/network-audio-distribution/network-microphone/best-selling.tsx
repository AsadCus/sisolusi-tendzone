"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Mic2 } from "lucide-react";

const products = [
  {
    title: "Vailink Rectangular Columnar Condenser Microphone",
    description:
      "Amber MV600 is a desktop rectangular columnar condenser microphone that supports both network Vailink and analog output. It has a built-in Chinese ARM chip, audio processing function, and the maximum pickup distance can reach 80cm.",
  },
  {
    title: "Vailink Desktop Embedded Gooseneck Condenser Microphone",
    description:
      "G15C/FV is a cardioid condenser gooseneck microphone suitable for desktop embedded installation. It supports network Vailink output. This microphone is exquisite and compact, simple and generous.",
  },
];

export default function BestSellingNetworkMicrophoneSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
                <Mic2 className="w-3 h-3" />
                Network Microphone
              </Badge>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 leading-snug">
              Our Best-Selling{" "}
              <span className="text-red-500">Network Microphone</span>
            </h2>

            <div className="space-y-6">
              {products.map((product, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1.5 px-3 py-3 rounded-lg border border-transparent hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/30 transition-all duration-200 group"
                >
                  <h3 className="text-sm font-semibold text-gray-600 group-hover:text-red-500 transition-colors duration-200">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-80">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Network Microphone"
              width={400}
              height={200}
              className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end p-6">
              <p className="text-white text-sm font-medium">Network Microphone</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}