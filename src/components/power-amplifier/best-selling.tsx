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
    name: "8CH Digital Power Amplifier",
    description:
      "The Tendzone AMD8150 amplifier is a 8-channel fixed impedance digital amplifier, using advanced Class D technology, designed for users who pursue excellent sound quality and convenience.",
    image: "https://www.tendzone.net/uploads/43135/8ch-digital-power-amplifier2bd3e.jpg?size=750x0",
    slug: "all-in-one",
    badge: "Flagship",
  },
  {
    id: 2,
    name: "4CH Digital Power Amplifier",
    description:
      "The Tendzone AMD4350 amplifier is a 4-channel fixed impedance digital amplifier, using advanced Class D technology, designed for users who pursue excellent sound quality and convenience. The conversion efficiency of this amplifier exceeds 90%, ensuring stable output even under high load conditions, providing strong support for your audio equipment.",
    image: "https://www.tendzone.net/uploads/43135/4ch-digital-power-amplifier12b9f0.jpg?size=750x0",
    slug: "audio-processor",
    badge: "Processing",
  },
  {
    id: 3,
    name: "2CH Digital Power Amplifier",
    description:
      "The Tendzone AMD21500 is a high-power fixed resistance digital amplifier. It adopts the multi-loop control technology independently developed by the company, with excellent technical indicators, especially for the power amplification technology under low impedance and high current working conditions, which makes the amplifier have more than 95% efficiency and excellent stability.2",
    image: "https://www.tendzone.net/uploads/43135/4ch-digital-power-amplifier16e6e4.jpg?size=750x0",
    slug: "network-adapters",
    badge: "Processing",
  },
];

export default function BestSellingPowerAmplifiersPage() {
  return (
    <section className="w-full py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-6xl mx-auto mb-8">
          <h1 className="text-2xl md:text-xl font-medium text-red-600">
          Our Best-Selling Power Amplifer
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center ">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden rounded-none border border-gray-100 bg-gray-50 shadow-xl hover:shadow-xl hover:shadow-gray-200/80 hover:-translate-y-1 transition-all duration-300">

                <div className="relative h-56 w-full flex items-center justify-center bg-white overflow-hidden">
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