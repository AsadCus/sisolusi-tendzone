"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: number;
  name: string;
  description?: string;
  category?: { name: string };
  galleries?: { file_url: string }[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getImage = (p: Product) =>
  p.galleries?.[0]?.file_url ?? "/images/categories/placeholder.jpg";

const hasImage = (p: Product) => !!p.galleries?.[0]?.file_url;

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="border border-gray-100 overflow-hidden animate-pulse">
      <div className="aspect-square bg-gray-100" />
      <div className="p-3 space-y-2">
        <div className="h-3 bg-gray-100 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-1/2" />
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/catalogue/${product.category?.name}/${product.id}`}
      className="product-card group block"
    >
      <div className="relative overflow-hidden bg-white aspect-square">
        <Image
          unoptimized fill
          src={getImage(product)}
          alt={product.name}
          className="card-img object-contain px-4 pt-4 pb-4 sm:px-5"
        />
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />
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

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function PopularProductsCarousel() {
  const [products, setProducts]       = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [loading, setLoading]         = useState(true);

  useEffect(() => {
    function updateItems() {
      setItemsPerView(window.innerWidth < 640 ? 2 : 4);
    }
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    fetch("https://product-admin-panel.nterco.id/api/products?supplier_id=2")
      .then((r) => r.json())
      .then((data) => {
        const list: Product[] = data.data || data;
        // Prioritaskan produk yang punya gambar
        const withImage    = list.filter(hasImage);
        const withoutImage = list.filter((p) => !hasImage(p));
        setProducts([...withImage, ...withoutImage]);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - itemsPerView));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + itemsPerView));

  return (
    <LazyMotion features={domAnimation}>
      <style>{`
        .card-img { transition: transform 600ms cubic-bezier(.25,.46,.45,.94); }
        .product-card:hover .card-img { transform: scale(1.06); }
      `}</style>

      <section className="w-full py-6 bg-white">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-4 h-[2px] bg-red-500 rounded-full" />
                <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-red-400">
                  Our Collection
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight">
                Popular Products
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-full hover:border-red-500 hover:text-red-500 transition-colors disabled:opacity-30"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                disabled={currentIndex >= maxIndex}
                className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-full hover:border-red-500 hover:text-red-500 transition-colors disabled:opacity-30"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : (
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)` }}
              >
                {products.map((product, i) => (
                  <div
                    key={product.id}
                    className="shrink-0 px-2"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <m.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (i % itemsPerView) * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </m.div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dot indicator */}
          {!loading && products.length > itemsPerView && (
            <div className="flex justify-center gap-1.5 mt-6">
              {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * itemsPerView)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerView) === i
                      ? "w-5 bg-red-500"
                      : "w-1.5 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </section>
    </LazyMotion>
  );
}