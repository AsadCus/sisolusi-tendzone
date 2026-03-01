"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

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
    badge: "Flagship",
  },
  {
    id: 2,
    name: "Audio Processor",
    description:
      "High-performance DSP engine with multi-channel matrix mixing, equalization, and dynamic control for professional installations.",
    image: "/images/categories/audio-processor.jpg",
    slug: "audio-processor",
    badge: "Processing",
  },
  {
    id: 3,
    name: "Network Audio Distribution",
    description:
      "IP-based audio transport delivering lossless multi-zone sound over standard Ethernet infrastructure with ultra-low latency.",
    image: "/images/categories/network-audio-distributor.jpg",
    slug: "network-audio-distribution",
    badge: "Distribution",
  },
  {
    id: 4,
    name: "Digital Conference System",
    description:
      "Delegate and chairman units with built-in DSP, voting modules, and simultaneous interpretation for boardrooms and assemblies.",
    image: "/images/categories/conference.jpg",
    slug: "digital-conference-system",
    badge: "Conference",
  },
  {
    id: 5,
    name: "Wireless Microphone",
    description:
      "UHF diversity handheld and bodypack systems with encrypted transmission, auto-frequency scanning, and long-range stability.",
    image: "/images/categories/wireless-mic.png",
    slug: "wireless-microphone",
    badge: "Wireless",
  },
  {
    id: 6,
    name: "Power Amplifier",
    description:
      "Class-D multi-channel amplifiers with DSP pre-sets and energy-efficient operation for 70V/100V or low-impedance systems.",
    image: "/images/categories/amplifier.png",
    slug: "power-amplifier",
    badge: "Amplification",
  },
  {
    id: 7,
    name: "Wall Controller",
    description:
      "Touch-panel wall controllers for intuitive room-level volume, source selection, and scene recall in any commercial environment.",
    image: "/images/categories/wall-controller.png",
    slug: "wall-controller",
    badge: "Control",
  },
  {
    id: 8,
    name: "PA Loudspeaker",
    description:
      "Full-range and subwoofer enclosures engineered for clarity, coverage, and durability across indoor and outdoor installations.",
    image: "/images/categories/pa-speaker.png",
    slug: "pa-loudspeaker",
    badge: "Speakers",
  },
];

export default function ProductCategoriesSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-none">
              Products 
              <span className="text-red-600"> Categories</span>
            </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-none hover:shadow-xl hover:shadow-gray-200/80 hover:-translate-y-1 transition-all duration-300">

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
        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-red-600 transition-colors duration-200 border-b border-transparent hover:border-red-600 pb-0.5"
          >
            View All Products
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}