"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";

export default function BasicCompositionNetwork() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
                <Network className="w-3 h-3" />
                Conference System
              </Badge>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 leading-snug">
              Basic Composition of{" "}
              <span className="text-red-500">Network Digital Conference System</span>
            </h2>

            <div className="space-y-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                The equipment required for a complete network digital conference system
                is a conference automation management system that integrates computer,
                communication, automatic control, multimedia, image, audio and other technologies.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                The network digital conference system is generally composed of network, projection
                display, audio, monitoring, conference speech, lighting effects and central control.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                All systems use computer network as a platform to share data and control information,
                decentralize work, and centralize control, enabling equipment operators to monitor
                and control all equipment easily and quickly.
              </p>
            </div>
          </div>

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

        </div>
      </div>
    </section>
  );
}