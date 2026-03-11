"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Mic2, Cable, Mic } from "lucide-react";

const products = [
  {
    icon: Mic2,
    title: "Wireless Desktop Delegate Rectangular Columnar Unit",
    desc: "The Tendzone Z-3101C/Z-3101D rectangular columnar unit is an ultra-directional wireless condenser microphone that uses 2.4G frequency hopping technology to connect to the host.",
  },
  {
    icon: Cable,
    title: "Wireless Desktop Delegate Gooseneck Unit",
    desc: "Built-in DSP audio processing capabilities, howling suppression function, and a built-in 2000mA rechargeable nickel-hydrogen battery. Working time up to 7 hours. Maximum pickup distance of the gooseneck microphone is 50cm.",
  },
  {
    icon: Mic,
    title: "Wireless Desktop Chairman Gooseneck Unit",
    desc: "Built-in DSP audio processing capabilities, supports feedback suppression function, and a built-in 1600mA rechargeable lithium battery. Working time up to 8 hours. Maximum pickup distance of the rectangular columnar microphone is 50cm.",
  },
];

export default function BestSellingWirelessDigitalSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 leading-snug">
              Our Best-Selling{" "}
              <span className="text-red-500">2.4G Wireless Digital Conference System</span>
            </h2>

            <div className="space-y-2">
              {products.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-3 py-3 rounded-none border border-transparent hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/40 transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-none bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors duration-200">
                      <Icon className="w-3.5 h-3.5 text-red-400" strokeWidth={1.75} />
                    </div>
                    <span className="text-sm text-gray-400 leading-relaxed">
                      <span className="font-semibold text-gray-600 group-hover:text-red-500 transition-colors duration-200">
                        {p.title}:{" "}
                      </span>
                      {p.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative group cursor-pointer rounded-none overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-80">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="2.4G Wireless Digital Conference System"
              width={600}
              height={400}
              className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end p-6">
              <p className="text-white text-sm font-medium">2.4G Wireless Digital Conference System</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}