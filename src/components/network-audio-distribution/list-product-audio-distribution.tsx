"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

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

const badgeGradient: Record<BadgeType, string> = {
  bestselling: "linear-gradient(135deg,#111,#333)",
  flagship:    "linear-gradient(135deg,#111,#333)",
  hot:         "linear-gradient(135deg,#dc2626,#9f1010)",
  new:         "linear-gradient(135deg,#dc2626,#9f1010)",
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Distributor Audio over IP System",
    slug: "network-audio-distribution",
    description: "Amber SV500 is a audio over IP distributed network audio system.",
    image: "https://www.tendzone.net/uploads/43135/small/distributor-audio-over-ip-system.jpg?size=380x0",
  },
  {
    id: 2,
    name: "8x8 Vailink I/O Interface",
    slug: "network-audio-distribution",
    description: "Amber NV880 is a distributed network audio input and output node.",
    image: "https://www.tendzone.net/uploads/43135/small/8x8-vailink-i-o-interface.jpg?size=380x0",
    badge: { label: "Hot", type: "hot" },
  },
  {
    id: 3,
    name: "Vailink 2CH Analog Input Adapter",
    slug: "network-audio-distribution",
    description: "Amber NV200 is a network adapter independently developed by Tendzone.",
    image: "https://www.tendzone.net/uploads/43135/small/vailink-2ch-analog-input-adapter.jpg?size=380x0",
  },
  {
    id: 4,
    name: "Vailink 2CH Analog Output Adapter",
    slug: "network-audio-distribution",
    description: "The Amber NV020 is a network adapter developed independently by Tendzone.",
    image: "https://www.tendzone.net/uploads/43135/small/vailink-2ch-analog-output-adapter.jpg?size=380x0",
  },
  {
    id: 5,
    name: "Vailink 2x2 UAC Adapter",
    slug: "network-audio-distribution",
    description: "Amber NV 22U is a node of the distributed network audio system.",
    image: "https://www.tendzone.net/uploads/43135/small/vailink-2x2-uac-adapter.jpg?size=380x0",
  },
  {
    id: 6,
    name: "Vailink Rectangular Columnar Condenser Microphone",
    slug: "network-audio-distribution",
    description: "Amber MV600 is a desktop rectangular columnar condenser microphone.",
    image: "https://www.tendzone.net/uploads/43135/small/vailink-rectangular-columnar-condenser-microphone.jpg?size=380x0",
  },
  {
    id: 7,
    name: "Vailink Desktop Embedded Gooseneck Condenser Microphone",
    slug: "network-audio-distribution",
    description: "G15C/FV is a cardioid condenser gooseneck microphone suitable for professional use.",
    image: "https://www.tendzone.net/uploads/43135/small/vailink-desktop-embedded-gooseneck-condenser-microphone.jpg?size=380x0",
  },
  {
    id: 8,
    name: "4.5' Vailink Network Powered Column Speaker",
    slug: "network-audio-distribution",
    description: "Amber series powered speakers are designed for intelligent network systems.",
    image: "https://www.tendzone.net/uploads/43135/small/4-5-vailink-network-powered-column-speaker.jpg?size=380x0",
  },
  {
    id: 9,
    name: "8' Vailink Network Powered Full-range Speaker",
    slug: "network-audio-distribution",
    description: "Amber SM8 powered speakers are designed for smart network systems.",
    image: "https://www.tendzone.net/uploads/43135/small/8-vailink-network-powered-full-range-speaker.jpg?size=380x0",
  },
  {
    id: 10,
    name: "12' Vailink Network Powered Full-range Speaker",
    slug: "network-audio-distribution",
    description: "The Amber SM12 powered speaker is designed for smart network systems.",
    image: "https://www.tendzone.net/uploads/43135/small/12-vailink-network-powered-full-range-speaker.jpg?size=380x0",
  },
  {
    id: 11,
    name: "6' Vailink Network Coaxial Ceiling Speaker",
    slug: "network-audio-distribution",
    description: "Utilizing TENOZONE's exclusive audio processing technology, this series delivers clarity.",
    image: "https://www.tendzone.net/uploads/43135/small/6-vailink-network-coaxial-ceiling-speaker.jpg?size=380x0",
  },
  {
    id: 12,
    name: "8' Vailink Network Coaxial Ceiling Speaker",
    slug: "network-audio-distribution",
    description: "Amber series powered speakers are designed for intelligent network systems.",
    image: "https://www.tendzone.net/uploads/43135/small/8-vailink-network-coaxial-ceiling-speaker.jpg?size=380x0",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card group block">
      <div className="relative overflow-hidden bg-white aspect-square">
        <Image
          unoptimized fill
          src={product.image}
          alt={product.name}
          className="card-img object-contain px-4 pt-10 pb-4 sm:px-5 sm:pt-11 sm:pb-5"
        />

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

        <div className="overlay absolute inset-x-0 bottom-0 z-20">
          <div className="flex items-center justify-end gap-2 px-3 py-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name}`)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-red-500 hover:bg-red-600 transition-colors duration-150 rounded shrink-0"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            >
              <MessageCircle size={15} color="white" />
            </a>
          </div>
        </div>

        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-30" />
      </div>

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

export default function NetworkAudioProduct() {
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