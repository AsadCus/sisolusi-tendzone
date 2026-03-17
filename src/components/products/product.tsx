"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category:{
    id: number;
    name: string;
  }
  galleries?: { file_url: string }[];
}

const BADGES = ["Best Seller", "Hot", "Popular", "New", "Top Pick"];
const TAGLINES = ["Premium Quality", "High Durability", "Best Value", "Trusted Choice", "Top Rated"];

const getImage = (p: Product) => p.galleries?.[0]?.file_url ?? "/images/categories/placeholder.jpg";
const hasImage = (p: Product) => !!p.galleries?.[0]?.file_url;

const WA_NUMBER = "6281234567890";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_PRODUCT_URL || "")
      .then((r) => r.json())
      .then((data) => {
        const list: Product[] = data.data || data;
        const withImage = list.filter(hasImage);
        const withoutImage = list.filter((p) => !hasImage(p));
        setProducts([...withImage, ...withoutImage].slice(0, 8));
      })
      .catch(console.error);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <style>{`
        .card-img { transition: transform 600ms cubic-bezier(.25,.46,.45,.94); }
        .product-card:hover .card-img { transform: scale(1.06); }
        .overlay { transform: translateY(100%); transition: transform 320ms ease-out; }
        .product-card:hover .overlay { transform: translateY(0); }
      `}</style>

      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="flex flex-col items-center text-center mb-14">
            <span className="text-red-500 text-[10px] font-bold tracking-[0.35em] uppercase mb-3">
           Products Categories
            </span>
            <div className="mt-3 w-8 h-0.75 bg-red-500 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <m.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="product-card group"
              >
              <Link key={product.id} href={`/catalogue/${product?.category?.name}/${product.id}`} className="product-card group">
                <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "1/1" }}>
                  <Image
                    unoptimized fill
                    src={getImage(product)}
                    alt={product.name}
                    className="card-img object-cover"
                  />

                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span
                      className="text-[7px] lg:text-[9px] font-black uppercase tracking-widest px-2 py-1 text-white"
                      style={{
                        background: i % 2 === 0
                          ? "linear-gradient(135deg,#dc2626,#9f1010)"
                          : "linear-gradient(135deg,#111,#333)",
                        clipPath: "polygon(0 0,calc(100% - 5px) 0,100% 100%,5px 100%)",
                      }}
                    >
                      {BADGES[i % BADGES.length]}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 z-10">
                    <div className="relative h-5 w-14 bg-white/90 backdrop-blur-sm px-1 py-0.5">
                      <Image
                        src="/images/logo/tendzone.png"
                        alt="Tendzone"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div
                    className="overlay absolute inset-x-0 bottom-0 z-20"
                  >
                    <div className="flex items-center gap-2 px-3 py-3 justify-end">

                      {/* View Detail */}
                      {/* <Link
                        href="/catalogue/23"
                        className="flex flex-1 items-center justify-center gap-1.5 bg-white/15 hover:bg-white/25 transition-colors duration-150 rounded py-1.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest whitespace-nowrap">
                          View Detail
                        </span>
                      </Link> */}

                      <span className="w-px h-5 bg-white/20 shrink-0" />
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 bg-red-500 hover:bg-red-600 transition-colors duration-150 rounded shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                          <MessageCircle size={15} color="white" />
                      </a>

                    </div>
                  </div>
                </div>

                <div className="pt-3 px-0.5 pb-1">
                  <p className="text-[13px] font-bold text-gray-900 line-clamp-1 group-hover:text-red-600 transition-colors duration-200">
                    {product.name}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-light tracking-wide">
                    {TAGLINES[i % TAGLINES.length]}
                  </p>
                </div>

            </Link>
              </m.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="group flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              <span className="border-b border-gray-300 group-hover:border-red-500 pb-px transition-colors duration-200">
                View All Products
              </span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5">
                <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}