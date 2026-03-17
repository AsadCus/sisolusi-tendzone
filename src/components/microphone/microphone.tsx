"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

// ─── Config ───────────────────────────────────────────────────────────────────

const WA_NUMBER = "628XXXXXXXXX";

// ─── Types ────────────────────────────────────────────────────────────────────

type BadgeType = "bestselling" | "hot" | "new" | "flagship";

interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image: string;
  badge?: { label: string; type: BadgeType };
}

// ─── Badge styles ─────────────────────────────────────────────────────────────

const badgeGradient: Record<BadgeType, string> = {
  bestselling: "linear-gradient(135deg,#111,#333)",
  flagship:    "linear-gradient(135deg,#111,#333)",
  hot:         "linear-gradient(135deg,#dc2626,#9f1010)",
  new:         "linear-gradient(135deg,#dc2626,#9f1010)",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "2CH 2K60 4:4:4 Network AV Encoder/Decoder",
    slug: "all-in-one",
    description: "The Tendzone SKY-2622 is a multimedia distributed interactive",
    image: "https://www.tendzone.net/uploads/43135/small/2ch-2k60-4-4-4-network-av-encoder-decodera4f07.jpg?size=380x0",
    badge: { label: "Best Selling", type: "bestselling" },
  },
  {
    id: 2,
    name: "2K60 4:4:4 Network AV Encoder/Decoder",
    slug: "all-in-one",
    description: "The Tendzone SKY-2611 is a multimedia distributed interactive system",
    image: "https://www.tendzone.net/uploads/43135/small/2k60-4-4-4-network-av-encoder-decoder5d963.jpg?size=380x0",
    badge: { label: "Best Selling", type: "bestselling" },
  },
  {
    id: 3,
    name: "8K60 Network AV Encoder/Decoder",
    slug: "all-in-one",
    description: "The Tendzone SKY-8611 is a multimedia distributed interactive system",
    image: "https://www.tendzone.net/uploads/43135/small/16ch-4k60-4-4-4-hdr-hdmi-distributor897bb.jpg?size=380x0",
    badge: { label: "Best Selling", type: "bestselling" },
  },
  {
    id: 4,
    name: "4K AV Over IP Encoder Decoder",
    slug: "all-in-one",
    description: "The Tendzone MCN-4611 is a multimedia distributed interactive",
    image: "https://www.tendzone.net/uploads/43135/small/4k-av-over-ip-encoder-decoder1d38f.jpg?size=380x0",
    badge: { label: "Best Selling", type: "bestselling" },
  },
  {
    id: 5,
    name: "Expansion MIDIS System Server",
    slug: "all-in-one",
    description: "The Tendzone MCU-1000 platform is the server of MIDIS AV over IP system",
    image: "https://www.tendzone.net/uploads/43135/small/expansion-midis-system-serveredbbf.jpg?size=380x0",
    badge: { label: "Best Selling", type: "bestselling" },
  },
];

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card group block">

      {/* Image area */}
      <div className="relative overflow-hidden bg-white aspect-square">

        <Image
          unoptimized
          fill
          src={product.image}
          alt={product.name}
          className="card-img object-contain px-4 pt-10 pb-4 sm:px-5 sm:pt-11 sm:pb-5"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 z-10">
            <span
              className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 text-white leading-none"
              style={{ background: badgeGradient[product.badge.type] }}
            >
              {product.badge.label}
            </span>
          </div>
        )}

        {/* WA overlay */}
        <div className="overlay absolute inset-x-0 bottom-0 z-20">
          <div className="flex items-center justify-end gap-2 px-3 py-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                `Hi, I'm interested in: ${product.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-red-500 hover:bg-red-600 transition-colors duration-150 rounded shrink-0"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            >
              <MessageCircle size={15} color="white" />
            </a>
          </div>
        </div>

        {/* Bottom red line */}
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-30" />
      </div>

      {/* Text area */}
      <div className="pt-3 px-0.5 pb-1">
        <p className="text-[13px] font-bold text-gray-900 line-clamp-1 group-hover:text-red-600 transition-colors duration-200">
          {product.name}
        </p>
        {product.description && (
          <p className="text-[11px] text-gray-400 mt-0.5 font-light leading-relaxed line-clamp-2">
            {product.description}
          </p>
        )}
      </div>

    </Link>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function MicrophoneProduct() {
  return (
    <LazyMotion features={domAnimation}>
      <style>{`
        .card-img { transition: transform 600ms cubic-bezier(.25,.46,.45,.94); }
        .product-card:hover .card-img { transform: scale(1.06); }
        .overlay { transform: translateY(100%); transition: transform 320ms ease-out; }
        .product-card:hover .overlay { transform: translateY(0); }
      `}</style>

      <section className="w-full bg-white py-4">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

          {/* Collection badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              MIDIS Collection
            </span>
          </div>

          {/* Grid — 2 col mobile, 3 col tablet, 4 col desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {PRODUCTS.map((product, i) => (
              <m.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </m.div>
            ))}
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}