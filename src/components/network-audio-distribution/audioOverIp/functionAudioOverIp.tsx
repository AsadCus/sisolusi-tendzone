"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Network } from "lucide-react";

const functions = [
  {
    number: "01",
    title: "Dynamic Routing",
    description:
      "Unlike fixed point-to-point connections, audio over IP allows any input to be routed to any output without physical recabling. This enables instant reconfiguration of audio paths through software interfaces rather than physical patching.",
  },
  {
    number: "02",
    title: "Format Agnosticism",
    description:
      "Audio over IP systems can simultaneously handle multiple audio formats, sample rates, and bit depths within the same network infrastructure, automatically managing format conversion when needed.",
  },
  {
    number: "03",
    title: "Distance Independence",
    description:
      "Audio over IP can transmit high-quality audio across buildings, campuses, or even cities using standard network infrastructure without degradation.",
  },
  {
    number: "04",
    title: "Integration Capabilities",
    description:
      "Audio over IP readily interfaces with software-based audio processing, virtual sound cards, and cloud services, creating workflow possibilities that would be impractical with conventional connections.",
  },
];

export default function AudioIpFunctionsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center gap-3 mb-12">
          <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
            <Network className="w-3 h-3" />
            Audio Over IP
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            Functions Of <span className="text-red-500">Audio Over IP</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {functions.map((item, index) => (
            <Card
              key={index}
              className="border border-gray-100 shadow-none rounded-2xl hover:border-t-2 hover:border-t-red-300 hover:border-x-transparent hover:border-b-transparent hover:bg-red-50/30 transition-all duration-200 group"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <span className="text-3xl font-bold text-red-200 group-hover:text-red-300 transition-colors duration-200">
                  {item.number}
                </span>
                <h3 className="text-sm font-semibold text-gray-600 group-hover:text-red-500 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}