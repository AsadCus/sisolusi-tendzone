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
  { id: 1, name: "2K60 HDMI Extender 70M",              slug: "all-in-one", description: "Using advanced power design (PoC) technology, only power is supplied to the transmitter.",   image: "https://www.tendzone.net/uploads/43135/small/2k60-hdmi-extender-70mec0f6.jpg?size=380x0",               badge: { label: "Best Selling", type: "bestselling" } },
  { id: 2, name: "4CH 8K60 4:2:0 HDR HDMI Switcher",   slug: "all-in-one", description: "The Tendzone SW41-HD860 is an auto switcher with four HDMI video inputs.",                  image: "https://www.tendzone.net/uploads/43135/small/4ch-8k60-4-2-0-hdr-hdmi-switcherc4893.jpg?size=380x0",     badge: { label: "Best Selling", type: "bestselling" } },
  { id: 3, name: "16CH 4K60 4:4:4 HDR HDMI Distributor",slug: "all-in-one", description: "The Tendzone SP116-HD460U is a 1x16 HDMI splitter for A/V solutions.",                     image: "https://www.tendzone.net/uploads/43135/small/16ch-4k60-4-4-4-hdr-hdmi-distributor897bb.jpg?size=380x0", badge: { label: "Best Selling", type: "bestselling" } },
  { id: 4, name: "4CH 4K60 4:4:4 HDR HDMI Distributor", slug: "all-in-one", description: "It supports HDMI video resolutions up to 4K@60Hz 4:4:4, HDR10, Dolby Vision.",              image: "https://www.tendzone.net/uploads/43135/small/4ch-4k60-4-4-4-hdr-hdmi-distributored7e8.jpg?size=380x0",  badge: { label: "Best Selling", type: "bestselling" } },
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

export default function HdmiProduct() {
  return (
    <LazyMotion features={domAnimation}>
      <style>{`
        .card-img { transition: transform 600ms cubic-bezier(.25,.46,.45,.94); }
        .product-card:hover .card-img { transform: scale(1.06); }
        .overlay { transform: translateY(100%); transition: transform 320ms ease-out; }
        .product-card:hover .overlay { transform: translateY(0); }
      `}</style>

      <section className="w-full py-2">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

          {/* About */}
          <div className="text-center max-w-6xl mx-auto mb-8">
            <h1 className="text-2xl md:text-xl font-medium text-red-600">
              Your Professional HDMI Products Supplier!
            </h1>
            <p className="mt-4 text-gray-600 text-xs md:text-sm">
              Tendzone, established in 2010, is a global leader in providing advanced audio-visual (AV)
              solutions and manufacturing high-quality AV products. We specialize in a wide range of
              cutting-edge technologies, including audio processors, microphones, speakers, power amplifiers,
              AV over IP systems, digital conference systems, and MIDIS Distributed Multimedia Transmission
              Control Systems. Our solutions are trusted across industries such as conference rooms, command
              centers, education, multi-functional halls, and stadiums.
            </p>
            {/* Badge — di bawah about */}
            <div className="flex items-center justify-center mt-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase bg-red-50 text-red-500 border border-red-200">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                HDMI Collection
              </span>
            </div>
          </div>

          {/* Grid */}
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