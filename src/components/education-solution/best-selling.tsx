"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useState, useEffect } from "react";


type BadgeType = "bestselling" | "hot" | "new" | "flagship";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  badge?: { label: string; type: BadgeType };
category:{
    id: number;
    name: string;
  }
  galleries?: { file_url: string }[];
}



const badgeGradient: Record<BadgeType, string> = {
  bestselling: "linear-gradient(135deg,#111,#333)",
  flagship: "linear-gradient(135deg,#111,#333)",
  hot: "linear-gradient(135deg,#dc2626,#9f1010)",
  new: "linear-gradient(135deg,#dc2626,#9f1010)",
};


function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link href={`/catalogue/${product?.category?.name}/${product.id}`} className="group block">
      <div className="border border-gray-100 bg-white hover:border-red-200 transition-colors duration-200 overflow-hidden h-full flex flex-col">

 
        <div className="relative overflow-hidden bg-white aspect-[4/3]">
          <Image
            unoptimized
            fill
            src={getImage(product)}
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

\
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

const getImage = (p: Product) => p.galleries?.[0]?.file_url ?? "/images/categories/placeholder.jpg";
const hasImage = (p: Product) => !!p.galleries?.[0]?.file_url;


export default function BestSellingEducationSolutions() {
 const [products, setProducts] = useState<Product[]>([]);
  

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_PRODUCT_URL || "")
      .then((r) => r.json())
      .then((data) => {
        const list: Product[] = data.data || data;
        const withImage = list.filter(hasImage);
        const withoutImage = list.filter((p) => !hasImage(p));
        setProducts([...withImage, ...withoutImage].slice(0, 3));
      })
      .catch(console.error);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-white py-8">
        <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

          {/* Header */}
             <div className="max-w-7xl mx-auto px-6 lg:px-16">
 <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-xl mx-15 font-medium text-black">
            Our Best-Selling EducationSolutions
          </h2>
        </div>
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