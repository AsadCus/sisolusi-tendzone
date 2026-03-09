"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Mic2, MonitorSpeaker, Cable } from "lucide-react";

const products = [
  {
    icon: Mic2,
    title: "Desktop Delegate Rectangular Columnar Unit",
    desc: "The Tendzone MTZ-921C&MTZ-921D all-digital network conference system microphone units are pure conference discussion speaking units.",
  },
  {
    icon: Cable,
    title: "Desktop Delegate Gooseneck Unit",
    desc: "The host and units, and units and units are directly connected by network cables, supporting ring links. The speaking unit provides chairman unit and delegate unit. The delegate unit can be set as VIP.",
  },
  {
    icon: MonitorSpeaker,
    title: "Desktop Delegate Rectangular Columnar Unit",
    desc: "The Tendzone AMH-N72C&AMH-N72D all-digital network conference system microphone units are pure conference discussion speaking units. The host and units, and units and units are directly connected by network cables, supporting ring links.",
  },
];

export default function BestSellingNetworkDigital() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-80">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="Network Digital Conference System"
              width={400}
              height={200}
              className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end p-6">
              <p className="text-white text-sm font-medium">Network Digital Conference System</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
                <Mic2 className="w-3 h-3" />
                Digital Conference
              </Badge>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 leading-snug">
              Our Best-Selling{" "}
              <span className="text-red-500">Network Digital Conference System</span>
            </h2>

            <div className="space-y-2">
              {products.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-3 py-3 rounded-lg border border-transparent hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/40 transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors duration-200">
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

        </div>
      </div>
    </section>
  );
}