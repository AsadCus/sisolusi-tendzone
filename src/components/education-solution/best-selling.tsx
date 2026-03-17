"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";

type BadgeType = "flagship" | "hot" | "bestselling" | "new";

interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image: string;
  badge?: { label: string; type: BadgeType };
}

const badgeGradient: Record<BadgeType, string> = {
  bestselling: "linear-gradient(135deg,#111,#333)",
  flagship: "linear-gradient(135deg,#111,#333)",
  hot: "linear-gradient(135deg,#dc2626,#9f1010)",
  new: "linear-gradient(135deg,#dc2626,#9f1010)",
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Conference Microphone",
    description: "Professional wireless delegate unit with 2.4G frequency hopping technology and clear sound quality.",
    image: "https://www.tendzone.net/uploads/43135/small/hybrid-modular-video-matrix557ba.jpg?size=380x0",
    slug: "wireless-conference-microphone",
    badge: { label: "Best Selling", type: "bestselling" },
  },
  {
    id: 2,
    name: "Digital Conference Controller",
    description: "Advanced DSP audio processing module with howling suppression function.",
    image: "https://www.tendzone.net/uploads/43135/small/fixed-seamless-video-matrixac1a6.jpg?size=380x0",
    slug: "digital-conference-controller",
    badge: { label: "Hot", type: "hot" },
  },
  {
    id: 3,
    name: "Delegate Gooseneck Unit",
    description: "High sensitivity directional condenser microphone with OLCD display screen.",
    image: "https://www.tendzone.net/uploads/43135/small/8x8-fixed-seamless-video-matrix5bf8c.jpg?size=380x0",
    slug: "delegate-gooseneck-unit",
    badge: { label: "Flagship", type: "flagship" },
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link href={"/products/" + product.slug} className="group block">
      <div className="border border-gray-100 bg-white hover:border-red-200 transition-colors duration-200 overflow-hidden h-full flex flex-col">

        {/* Image */}
        <div className="relative overflow-hidden bg-white aspect-[4/3]">
          <Image
            unoptimized
            fill
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
          {product.description && (
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
              {product.description}
            </p>
          )}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-red-300 transition-colors duration-200">
              Tendzone
            </span>
            <span className="text-xs font-semibold text-gray-600 group-hover:text-red-600 transition-colors duration-200 uppercase tracking-wide">
              Selengkapnya
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
}

export default function BestSellingEducationSolution() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full pt-4 pb-4 bg-white">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              Best Selling
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {products.map((product, i) => (
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