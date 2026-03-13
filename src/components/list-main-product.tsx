"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  slug: string;
  galleries?: { file_url: string }[];
}

const BADGES = ["Best Seller", "Hot", "Popular", "New", "Top Pick"];
const TAGLINES = [
  "Premium Quality",
  "High Durability",
  "Best Value",
  "Trusted Choice",
  "Top Rated",
];

const getImage = (p: Product) =>
  p.galleries?.[0]?.file_url ?? "/images/categories/placeholder.jpg";

export default function MainProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_PRODUCT_URL!)
      .then((r) => r.json())
      .then((data) => {
        const list = data.data || data;
        setProducts(list.filter((x: any) => x.supplier?.name === "TendZone"));
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-img {
          transition: transform 600ms cubic-bezier(.25,.46,.45,.94);
        }
        .product-card:hover .card-img {
          transform: scale(1.06);
        }
        .overlay {
          transform: translateY(100%);
          transition: transform 320ms ease-out;
        }
        .product-card:hover .overlay {
          transform: translateY(0);
        }
      `}</style>

      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="flex flex-col items-center text-center mb-14">
            <span className="text-red-500 text-[10px] font-bold tracking-[0.35em] uppercase mb-3">
              Our Collection
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
              Main Product
            </h2>
            <div className="mt-3 w-8 h-[3px] bg-red-500 rounded-full" />
            <p className="mt-4 text-sm text-gray-400 font-light max-w-xs leading-relaxed">
              We promise to find you the right equipment
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <Link
                key={product.id}
                href={`/catalogue/${product.id}`}
                className="product-card group block"
                style={{ animation: `fadeUp .45s ${i * 0.04}s ease both` }}
              >
                <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "1/1" }}>
                  <Image
                    unoptimized fill
                    src={getImage(product)}
                    alt={product.name}
                    className="card-img object-cover"
                  />

                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span
                      className="text-[9px] font-black uppercase tracking-widest px-2 py-1 text-white"
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

                  <div
                    className="overlay absolute inset-x-0 bottom-0"
                    style={{ background: "linear-gradient(to top,rgba(185,17,17,0.94),rgba(220,38,38,0.85))" }}
                  >
                    <div className="flex items-center justify-center gap-2 px-3 py-3">
                      <span className="text-[11px] font-bold text-white uppercase tracking-widest">
                        View Detail
                      </span>
                      <svg width="12" height="12" viewBox="0 0 13 13" fill="none" className="shrink-0">
                        <path d="M1 6.5h11M7 2l5 4.5L7 11"
                          stroke="white" strokeWidth="1.6"
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
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
                <path d="M1 6.5h11M7 2l5 4.5L7 11"
                  stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}