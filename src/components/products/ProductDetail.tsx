"use client";

import { useState, useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Gallery {
  id: number;
  file_url: string;
  order: number;
}

interface ApiProduct {
  id: number;
  name: string;
  description: string;
  supplier: { id: number; name: string; desc: string };
  category: { id: number; name: string; description: string } | null;
  galleries: Gallery[];
}

interface ApiSpec {
  id: number;
  name: string | null;
  value: string;
  image_url: string;
  order: number;
}

type Tab = "description" | "specification";

function LoadingState() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#D0021B] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs text-gray-400 tracking-widest uppercase">Loading product...</p>
      </div>
    </div>
  );
}

function NotFoundState() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm text-gray-400">Product not found.</p>
        <a href="/catalogue" className="text-xs text-[#D0021B] mt-2 inline-block hover:underline">
          Back to Catalogue
        </a>
      </div>
    </div>
  );
}

function DescriptionPanel({ description }: { description: string }) {
  return (
    <div className="space-y-5">
      {description.split("\n\n").map((para, i) => {
        const isHeading = para.trim().length < 60 && !para.includes(".");
        return isHeading ? (
          <h3
            key={i}
            className="text-xs font-bold text-gray-900 uppercase tracking-wider pt-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {para.trim()}
          </h3>
        ) : (
          <p key={i} className="text-[15px] text-gray-500 leading-[1.85] text-justify">
            {para}
          </p>
        );
      })}
    </div>
  );
}

function SpecificationPanel({ specs, loading }: { specs: ApiSpec[]; loading: boolean }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-6 h-6 border-2 border-[#D0021B] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (specs.length === 0) {
    return (
      <p className="text-sm text-gray-400 text-center py-10">No specifications available.</p>
    );
  }

  return (
    <div className="border border-gray-200 overflow-hidden">
      <div className="bg-[#D0021B] px-5 py-3">
        <h3
          className="text-[10px] font-bold text-white tracking-widest uppercase"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Specifications
        </h3>
      </div>
      <table className="w-full">
        <tbody>
          {specs
            .sort((a, b) => a.order - b.order)
            .map((spec, i) => {
              const label =
                spec.name ??
                spec.image_url
                  .split("/")
                  .pop()
                  ?.replace(".svg", "")
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase()) ??
                "Spec";

              return (
                <tr
                  key={spec.id}
                  className={`border-b border-gray-100 last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-5 py-3 text-xs text-gray-400 w-[48%] font-medium align-top border-r border-gray-100">
                    {label}
                  </td>
                  <td className="px-5 py-3 text-xs text-gray-800 font-semibold align-top">
                    {spec.value}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
export default function ProductDetail({ id }: { id: string }) {
  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [specs, setSpecs] = useState<ApiSpec[]>([]);
  const [loading, setLoading] = useState(true);
  const [specsLoading, setSpecsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    fetch(`${API_BASE}/api/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        const p = data.data || data;
        setProduct({
          id: p.id,
          name: p.name,
          description: p.description ?? "",
          supplier: p.supplier,
          galleries: p.galleries ?? [],
          category: p.category ?? null,
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (activeTab !== "specification" || specs.length > 0) return;
    setSpecsLoading(true);
    fetch(`${API_BASE}/api/products/${id}/specifications`)
      .then((r) => r.json())
      .then((data) => setSpecs(data.data || data))
      .catch(console.error)
      .finally(() => setSpecsLoading(false));
  }, [activeTab, id]);

  if (loading) return <LoadingState />;
  if (!product) return <NotFoundState />;

  const galleries = product.galleries.sort((a, b) => a.order - b.order);
  const supplierName = product.supplier?.name ?? "TendZone";
  const categoryName = product.category?.name ?? "Product";

  const tabs: { key: Tab; label: string }[] = [
    { key: "description", label: "Description" },
    { key: "specification", label: "Specification" },
  ];

  return (
    <div className="min-h-screen bg-white pt-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="h-[3px] bg-[#D0021B]" />

      <div className="max-w-7xl mx-auto px-6 pt-5 pb-2">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          {["Home", "Catalogue", categoryName].map((crumb, i, arr) => (
            <span key={crumb} className="flex items-center gap-2">
              <a href="#" className="hover:text-[#D0021B] transition-colors">{crumb}</a>
              {i < arr.length - 1 && <span className="text-gray-200">/</span>}
            </span>
          ))}
          <span className="text-gray-200">/</span>
          <span className="text-gray-700 font-medium truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      <div className="border-t border-gray-100" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="bg-gray-50 border border-gray-200 overflow-hidden aspect-square flex items-center justify-center mb-3">
            {galleries[activeImg] ? (
              <img
                src={galleries[activeImg].file_url}
                alt={product.name}
                className="w-full h-full object-contain p-10"
              />
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-dashed border-gray-300 mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-300">No Image</p>
              </div>
            )}
          </div>

          {galleries.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {galleries.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-16 border overflow-hidden shrink-0 transition-all ${
                    activeImg === i ? "border-[#D0021B]" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img src={img.file_url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-start pt-2">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-bold tracking-widest uppercase text-white bg-[#D0021B] px-3 py-1">
              {supplierName}
            </span>
            <span className="text-[11px] text-gray-400 font-medium tracking-wide">{categoryName}</span>
          </div>

          <h1
            className="text-2xl font-extrabold text-gray-900 leading-snug mb-2"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
          >
            {product.name}
          </h1>

          <p className="text-xs text-gray-400 mb-8">ID: #{product.id}</p>

          <p className="text-sm text-gray-500 leading-relaxed mb-8 border-l-2 border-[#D0021B] pl-4">
            {product.description}
          </p>

          <button className="w-full bg-[#D0021B] hover:bg-[#a80016] text-white text-sm font-bold py-4 transition-colors tracking-widest uppercase">
            Send Inquiry
          </button>
        </div>
      </div>

      <div className="border-t border-gray-100" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="border border-gray-200">
          <div className="flex border-b border-gray-200 bg-gray-50">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-9 py-4 text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                  activeTab === tab.key
                    ? "text-[#D0021B] bg-white border-r border-l border-gray-200 -mb-px"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#D0021B]" />
                )}
              </button>
            ))}
          </div>

          <div className="p-9 bg-white">
            {activeTab === "description" && (
              <DescriptionPanel description={product.description} />
            )}
            {activeTab === "specification" && (
              <SpecificationPanel specs={specs} loading={specsLoading} />
            )}
          </div>
        </div>
      </div>

      <div className="h-[3px] bg-[#D0021B]" />
    </div>
  );
}