"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Wifi } from "lucide-react";

export default function CompositionWirelessDigitalSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center h-80">
            <Image
              src="/images/product/2k60-hdmi.png"
              alt="2.4G Wireless Digital Conference System"
              width={400}
              height={200}
              className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl flex items-end p-6">
              <p className="text-white text-sm font-medium">2.4G Wireless Digital Conference System</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
                <Wifi className="w-3 h-3" />
                Wireless Conference
              </Badge>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 leading-snug">
              2.4G Wireless Digital Conference{" "}
              <span className="text-red-500">System Composition</span>
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              The 2.4G wireless digital conference system consists of a conference unit system,
              video matrix system, central control system, and professional sound reinforcement system.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}