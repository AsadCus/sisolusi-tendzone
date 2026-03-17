"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";

type BadgeType = "bestselling" | "hot" | "new" | "flagship";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  badge?: { label: string; type: BadgeType };
}

const badgeGradient: Record<BadgeType, string> = {
  bestselling: "linear-gradient(135deg,#111,#333)",
  flagship:    "linear-gradient(135deg,#111,#333)",
  hot:         "linear-gradient(135deg,#dc2626,#9f1010)",
  new:         "linear-gradient(135deg,#dc2626,#9f1010)",
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "8CH Digital Power Amplifier",
    slug: "all-in-one",
    description:
      "The Tendzone AMD8150 amplifier is a 8-channel fixed impedance digital amplifier, using advanced Class D technology, designed for users who pursue excellent sound quality and convenience.",
    image: "https://www.tendzone.net/uploads/43135/8ch-digital-power-amplifier2bd3e.jpg?size=750x0",
    badge: { label: "Flagship", type: "flagship" },
  },
  {
    id: 2,
    name: "4CH Digital Power Amplifier",
    slug: "audio-processor",
    description:
      "The Tendzone AMD4350 amplifier is a 4-channel fixed impedance digital amplifier, using advanced Class D technology. The conversion efficiency exceeds 90%, ensuring stable output even under high load conditions.",
    image: "https://www.tendzone.net/uploads/43135/4ch-digital-power-amplifier12b9f0.jpg?size=750x0",
  },
  {
    id: 3,
    name: "2CH Digital Power Amplifier",
    slug: "network-adapters",
    description:
      "The Tendzone AMD21500 is a high-power fixed resistance digital amplifier with multi-loop control technology, offering more than 95% efficiency and excellent stability.",
    image: "https://www.tendzone.net/uploads/43135/4ch-digital-power-amplifier16e6e4.jpg?size=750x0",
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="border border-gray-100 bg-white hover:border-red-200 transition-colors duration-200 overflow-hidden h-full flex flex-col">

        {/* Image */}
        <div className="relative overflow-hidden bg-white aspect-[4/3]">
          <Image
            unoptimized fill
            src={product.image}
            alt={product.name}
            className="object-contain px-6 pt-8 pb-4 transition-transform duration-500 group-hover:scale-105"
          />

          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span
                className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 text-white leading-none"
                style={{ background: badgeGradient[product.badge.type] }}
              >
                {product.badge.label}
              </span>
            </div>
          )}

          <div className="absolute bottom-3 right-3 z-10">
            <span className="text-[28px] font-black text-gray-100 leading-none select-none group-hover:text-red-100 transition-colors duration-200">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-red-300 transition-colors duration-200">
              Tendzone
            </span>
            <span className="text-xs font-semibold text-gray-600 group-hover:text-red-600 transition-colors duration-200 uppercase tracking-wide">
              Selengkapnya →
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
}

export default function BestSellingPowerAmplifiersPage() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-white py-8">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-xl font-medium text-red-600">
              Our Best-Selling Power Amplifier
            </h2>
            <div className="flex justify-center mt-3">
              <span className="block w-8 h-0.5 bg-red-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {PRODUCTS.map((product, i) => (
              <m.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ProductCard product={product} index={i} />
              </m.div>
            ))}
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}