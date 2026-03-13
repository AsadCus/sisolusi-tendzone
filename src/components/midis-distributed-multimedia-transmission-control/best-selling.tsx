"use client";

import Image from "next/image";
import { Network, Radio } from "lucide-react";

const products = [
  {
    icon: Network,
    tag: "01",
    title: "MIDIS AV Over IP Systems",
    description:
      "MIDIS AV Over IP Systems refers to the transmission of audio and video signals over network infrastructure using Internet Protocol (IP). Each connection typically requires its own cable, and scaling the system means adding more physical infrastructure.",
  },
  {
    icon: Radio,
    tag: "02",
    title: "AV Over IP Encoder Decoder",
    description:
      "AV over IP encoder decoder play a crucial role in the realm of radio and television broadcasting, serving as essential components that enable seamless transmission and reception of signals. They are designed to handle various frequencies and signal types, ensuring high-quality audio and visual content.",
  },
];

export default function BestSellingMIDIS() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-500 mb-3">
              Product Range
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 leading-snug">
              Our Best-Selling{" "}
              <span className="text-red-500">MIDIS AV Over IP Systems Types</span>
            </h2>
            <div className="w-10 h-0.5 bg-red-500 mb-8" />

            <div className="flex flex-col gap-0">
              {products.map((product, i) => {
                const Icon = product.icon;
                return (
                  <div
                    key={i}
                    className="group flex gap-4 items-start py-5 border-b border-gray-100 last:border-b-0 hover:pl-2 transition-all duration-300 cursor-default"
                  >
                    <div className="shrink-0 mt-0.5 w-9 h-9 flex items-center justify-center border border-gray-100 bg-gray-50 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                      <Icon size={15} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-gray-300 tracking-widest tabular-nums">
                          {product.tag}
                        </span>
                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                          {product.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden border border-gray-100 bg-white flex items-center justify-center h-100">
            <Image
              src="https://www.tendzone.net/uploads/43135/dual-8-full-range-point-source-speaker4b804.jpg?size=380x0"
              alt="MIDIS AV Over IP Systems"
              width={400}
              height={300}
              className="object-contain w-full h-full p-10 transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>

        </div>
      </div>
    </section>
  );
}