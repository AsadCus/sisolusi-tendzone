"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Wifi, CheckCircle2 } from "lucide-react";

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "All-in-one Solution",
    description:
      "Integrated audio system in a single rack-mountable chassis. Combines DSP processing, amplification, and network distribution for streamlined deployment.",
    image: "/images/product/2k60-hdmi.png",
    slug: "all-in-one",
  },
  {
    id: 2,
    name: "Audio Processor",
    description:
      "High-performance DSP engine with multi-channel matrix mixing, equalization, and dynamic control for professional installations.",
    image: "/images/product/2x2-dante.png",
    slug: "audio-processor",
  },
];

const features = [
  "Dual Connectivity: Offers wired and 5G wireless options for flexibility.",
  "High-Speed 5G: Ensures low-latency data transmission for efficient meetings.",
  "Interference Avoidance: Features 24 signals for reliable performance.",
  "Touchscreen Interface: 4.3-inch display for easy audio adjustments.",
  "Microphone Support: Up to 5,300 wired and 250 wireless microphones.",
  "High-Fidelity Audio: 48kHz lossless audio for excellent sound quality.",
  "Redundancy Design: Dual host backup prevents meeting disruptions.",
  "Audio Synchronization: Advanced clock sync technology.",
  "Real-Time Monitoring: Displays battery and signal status.",
  "Management Modes: FIFO, NORMAL, VOICE, APPLY.",
  "Channel Processing: Handles 16 audio channels for recordings.",
  "Emergency Alerts: Connects to fire alarms for safety warnings.",
  "Hot Swap: Quick equipment replacement.",
  "4K Video Support: HDMI compatible for presentations.",
];

export default function ProductWirelessEnvironment() {
  return (
    <section className="w-full py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center gap-3 mb-8 text-center">
          <Badge className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 gap-1.5 px-3 py-1 text-xs font-medium">
            <Wifi className="w-3 h-3" />
            5G Wireless Conference
          </Badge>
          <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
            5G wired and wireless conference system is a new type of conference
            solution that integrates the advantages of 5G technology with
            traditional conference systems, emerging amidst the trend of
            intelligent office environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2.5 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
              <span className="text-sm text-gray-400 leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/products/${category.slug}`} className="group">
              <Card className="relative h-full overflow-hidden rounded-none border border-gray-100 bg-gray-50 shadow-none hover:shadow-md transition-all duration-300">
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-red-400 group-hover:w-full transition-all duration-500 ease-out z-10" />

                <div className="relative h-56 w-full bg-white overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-600 leading-snug group-hover:text-red-500 transition-colors duration-200">
                      {category.name}
                    </h3>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400 transition-colors duration-200 shrink-0" />
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}