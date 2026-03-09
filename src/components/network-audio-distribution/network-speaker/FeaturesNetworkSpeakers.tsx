"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Network,
  Volume2,
  ServerCog,
  Zap,
  Speaker,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    description:
      "Professional integrated structure design, good cabinet sealing performance, fast-conducting all-copper nickel-plated grounding post, in line with the use and safety specifications in harsh outdoor environments, and the certification standard of IP54 protection class.",
  },
  {
    icon: Network,
    description:
      "Built-in one network digital audio decoding module, support IP/TCP, UDP and other communication protocols, realize the network transmission of 16-bit CD-quality audio signals.",
  },
  {
    icon: Volume2,
    description:
      "Built-in 25W digital amplifier module, delicate sound quality and strong power.",
  },
  {
    icon: ServerCog,
    description:
      "Support unified server authorization to operate management functions, unified configuration to manage user and password functions, support 100-level custom audio priority mute control function.",
  },
  {
    icon: Zap,
    description:
      "Digital product, easy to extend, no geographical restrictions, no need to add management equipment in the equipment room, no wiring construction for common network, easy installation.",
  },
];

export default function SpeakerFeatureSection({
  title = "Feature of Network Speaker",
}: {
  title?: string;
}) {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center gap-3 mb-12">
          <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
            <Speaker className="w-3 h-3" />
            Network Speaker
          </Badge>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
            Feature of <span className="text-red-500">Network Speaker</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            const num = String(index + 1).padStart(2, "0");

            return (
              <Card
                key={index}
                className="relative overflow-hidden border border-gray-100 rounded-2xl shadow-none transition-all duration-200 group"
              >
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-500 ease-out z-10" />
                <CardContent className="flex flex-col items-center text-center px-5 pt-8 pb-10 gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-red-500" strokeWidth={1.75} />
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-600 transition-colors duration-200">
                    {item.description}
                  </p>

                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-6xl font-black text-red-100 select-none pointer-events-none leading-none group-hover:text-red-200 transition-colors duration-200">
                    {num}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}