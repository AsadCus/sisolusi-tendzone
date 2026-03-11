"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Cpu } from "lucide-react";

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
    image: "/images/product/2x2-dante.png",
    slug: "audio-processor",
    badge: "Processing",
  },
];

export default function ProductAudioIpPage() {
  return (
    <section className="w-full py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center gap-3 mb-4 text-center max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Your Professional{" "}
            <span className="text-red-500">Audio Over IP</span> Supplier!
          </h1>
          <p className="text-sm text-gray-400 leading-7 text-center">
            Tendzone, established in 2010, is a global leader in providing
            advanced audio-visual (AV) solutions and manufacturing high-quality
            AV products. We specialize in a wide range of cutting-edge technologies,
            including audio processors, microphones, speakers, power amplifiers,
            AV over IP systems, digital conference systems, and MIDIS Distributed
            Multimedia Transmission Control Systems. Our solutions are trusted
            across industries such as conference rooms, command centers, education,
            multi-functional halls, and stadiums.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <span className="block w-12 h-0.5 rounded-full bg-red-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/products/${category.slug}`} className="group">
              <Card className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-none hover:shadow-md transition-all duration-300">
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