"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WA_NUMBER = "628XXXXXXXXX";

type BadgeType = "bestselling" | "hot" | "new" | "flagship";

interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image: string;
  badge?: { label: string; type: BadgeType };
}

// buat ganti style badges

const badgeStyles: Record<BadgeType, string> = {
  bestselling: "bg-gray-50 text-gray-600 border border-gray-200 rounded-xl",
  hot: "bg-red-50 text-red-500 border border-red-200 rounded-xl",
  flagship: "bg-blue-50 text-blue-600 border border-blue-200 rounded-xl",
  new: "bg-amber-50 text-amber-600 border border-amber-200 rounded-xl",
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Hybrid Modular Video Matrix",
    slug: "hybrid-modular-video-matrix",
    description: "High-performance professional switching device that effectively manages audio and video signals.",
    image: "https://www.tendzone.net/uploads/43135/small/hybrid-modular-video-matrix557ba.jpg?size=380x0",
    badge: { label: "Best Selling", type: "bestselling" },
  },
  {
    id: 2,
    name: "Fixed Seamless Video Matrix",
    slug: "fixed-seamless-video-matrix",
    description: "High-performance 4K HDMI seamless switching matrix for professional AV environments.",
    image: "https://www.tendzone.net/uploads/43135/small/fixed-seamless-video-matrixac1a6.jpg?size=380x0",
    badge: { label: "Hot", type: "hot" },
  },
  {
    id: 3,
    name: "8x8 Fixed Seamless Video Matrix",
    slug: "8x8-fixed-seamless-video-matrix",
    description: "Professional 4K HD fixed seamless switching matrix with 8 inputs and 8 outputs.",
    image: "https://www.tendzone.net/uploads/43135/small/8x8-fixed-seamless-video-matrix5bf8c.jpg?size=380x0",
    badge: { label: "Best Selling", type: "bestselling" },
  },
  {
    id: 4,
    name: "4x4 Fixed Seamless Video Matrix",
    slug: "4x4-fixed-seamless-video-matrix",
    description: "Professional 4K HD fixed seamless switching matrix supporting 4 inputs and 4 outputs.",
    image: "https://www.tendzone.net/uploads/43135/small/4x4-fixed-seamless-video-matrixdddf2.jpg?size=380x0",
    badge: { label: "New", type: "new" },
  },
  {
    id: 5,
    name: "Hybrid Modular Video Matrix Pro",
    slug: "hybrid-modular-video-matrix-pro",
    description: "Advanced modular design with flexible I/O configuration for large-scale installations.",
    image: "https://www.tendzone.net/uploads/43135/small/hybrid-modular-video-matrix557ba.jpg?size=380x0",
  },
  {
    id: 6,
    name: "Fixed Seamless Video Matrix 16x16",
    slug: "fixed-seamless-video-matrix-16x16",
    description: "Enterprise-grade 16x16 seamless switching matrix for command centers and studios.",
    image: "https://www.tendzone.net/uploads/43135/small/fixed-seamless-video-matrixac1a6.jpg?size=380x0",
    badge: { label: "Flagship", type: "flagship" },
  },
  {
    id: 7,
    name: "8x8 Fixed Seamless Matrix HD",
    slug: "8x8-fixed-seamless-matrix-hd",
    description: "HD variant of the 8x8 matrix with enhanced color processing and low latency output.",
    image: "https://www.tendzone.net/uploads/43135/small/8x8-fixed-seamless-video-matrix5bf8c.jpg?size=380x0",
  },
  {
    id: 8,
    name: "4x4 Seamless Matrix Compact",
    slug: "4x4-seamless-matrix-compact",
    description: "Compact form factor matrix ideal for portable setups and small venue installations.",
    image: "https://www.tendzone.net/uploads/43135/small/4x4-fixed-seamless-video-matrixdddf2.jpg?size=380x0",
    badge: { label: "Hot", type: "hot" },
  },
];

const ProductCard = ({
  product,
  alwaysShowWa = false,
}: {
  product: Product;
  alwaysShowWa?: boolean;
}) => (
  <Link href={`/products/${product.slug}`} className="group">
    <Card className="h-full overflow-hidden rounded-none border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">

      <div className="relative h-56 w-full bg-white overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {product.badge ? (
            <span className={`text-[10px] font-semibold px-2 py-0.5 tracking-wide ${badgeStyles[product.badge.type]}`}>
              {product.badge.label}
            </span>
          ) : (
            <span />
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(
                `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name}`)}`,
                "_blank"
              );
            }}
            className={`w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
              alwaysShowWa
                ? ""
                : "opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
            }`}
          >
            <MessageCircle size={15} className="text-white" fill="white" />
          </button>
        </div>

        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      <CardContent className="p-5 flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-red-600 transition-colors duration-300">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-xs font-light text-gray-500 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="mt-1 flex items-center justify-end pt-3 border-t border-gray-100">
          <span className="text-xs font-semibold text-gray-700 group-hover:text-red-600 transition-colors duration-300 tracking-wide uppercase">
            Selengkapnya
          </span>
        </div>
      </CardContent>

    </Card>
  </Link>
);

export default function ProductGrid() {
  return (
    <section className="w-full pt-12 pb-4 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              alwaysShowWa={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}