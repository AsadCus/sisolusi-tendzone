"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  badge?: string;
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

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          5G wired and wireless conference system is a new type of conference
          solution that integrates the advantages of 5G technology with
          traditional conference systems, emerging amidst the trend of
          intelligent office environments.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mb-12">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-3 text-sm text-gray-700">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-xl hover:shadow-xl hover:shadow-gray-200/80 hover:-translate-y-1 transition-all duration-300">

                <div className="relative h-56 w-full bg-white overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={300}
                    height={200}
                    className="cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                <CardContent className="p-5 flex flex-col gap-3">
                  <h3 className="text-base font-medium text-gray-900 leading-snug group-hover:text-red-600 transition-colors duration-300">
                    {category.name}
                  </h3>

                  <p className="text-xs font-light text-gray-500 leading-relaxed line-clamp-3">
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