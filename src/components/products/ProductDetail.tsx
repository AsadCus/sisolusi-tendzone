"use client";

import { useState, useEffect } from "react";



const STATIC = {
  model: "Z-3001",
  sku: "TZ-Z3001-WCH",
  tagline:
    "Complete digital wireless conference system based on 2.4G standard, combining high-quality audio with powerful interactive wireless data transmission.",
  description: `Shenzhen Tendzone Intelligent Technology Co., Ltd. is one of the most reliable manufacturers and suppliers of 2.4G wireless conference host in China. Please feel free to wholesale high quality 2.4G wireless conference host made in China here from our factory. We also accept customized orders.

Overview

The Tendzone Z-3001 digital wireless conference system is a complete set of systems based on 2.4G standard, combining high-quality audio and video technology with powerful interactive wireless data transmission function. Based on core DSP audio technology and 2.4G wireless transmission technology, it creatively uses distributed multi-point intelligent transmission technology to solve the distribution control of control signals, greatly improves the reliability of control signal transmission, and provides a stable, reliable, economical, practical and powerful wireless conference system for various application environments.`,
  features: [
    "The host supports connecting 128 microphones and can be expanded as needed",
    "System host supports 4 microphones working at the same time, number of microphones can be set",
    "Pure digital 2.4G wireless transmission technology, supports effective range of 25 meters without obstruction",
    "Supports a three-input and one-output video matrix — connect 1–3 cameras for automatic video tracking",
    "LCD display (128×64) shows complete prompt texts for simple and clear operation",
    "Built-in DSP audio processing module to prevent howling",
    "Unique system detection: auto-detects microphone unit code and connects frequency on startup",
    "32-bit address code frequency matching technology with strong anti-interference ability",
    "Enhanced data confidentiality to prevent malicious radio interference and eavesdropping",
    "Wireless microphone units — easy to connect, reduces project cost and improves maintainability",
    "Easy to operate: delegates speak by pressing a single button",
    "RS-232 serial port for central control system integration",
    "Standard 2U cold-rolled steel chassis with spray-painted finish and optimized heat dissipation",
  ],
  specifications: [
    {
      group: "General Performance",
      rows: [
        { label: "Frequency Response", value: "20Hz – 20kHz" },
        { label: "Signal-to-Noise Ratio", value: "> 80dB(A)" },
        { label: "Dynamic Range", value: "> 90dB" },
        { label: "Total Harmonic Distortion", value: "≤ 0.01%" },
        { label: "Modulation", value: "DSSS + GFSK" },
        { label: "Display", value: "128 × 64 LCD" },
      ],
    },
    {
      group: "Wireless",
      rows: [
        { label: "Frequency Band", value: "2400 – 2479 MHz (ISM)" },
        { label: "Available Channels", value: "79 channels" },
        { label: "RF Output Power", value: "1mW (0dBm, 7-level adj.)" },
        { label: "Receiving Sensitivity", value: "-96dBm" },
        { label: "Transmission Range", value: "Up to 25 meters" },
        { label: "Max Microphones", value: "128 units (expandable)" },
      ],
    },
    {
      group: "Electrical & Physical",
      rows: [
        { label: "Power Supply", value: "115/230VAC (±5%) – 50/60Hz" },
        { label: "Power Consumption", value: "< 50W" },
        { label: "Dimensions", value: "482 × 88 × 270 mm (2U)" },
        { label: "Weight", value: "4 kg" },
        { label: "Operating Temperature", value: "-20°C – 60°C" },
        { label: "Relative Humidity", value: "0% – 95% (no condensation)" },
      ],
    },
    {
      group: "Connectivity",
      rows: [
        { label: "Video Matrix", value: "3 inputs / 1 output" },
        { label: "Camera Support", value: "1–3 cameras (auto tracking)" },
        { label: "Serial Port", value: "RS-232 for central control" },
        { label: "Chassis", value: "Standard 2U rack-mount" },
        { label: "Simultaneous Mics", value: "Up to 4 (configurable)" },
        { label: "Expansion", value: "Expandable as needed" },
      ],
    },
  ],
  highlights: [
    { label: "Max Microphones", value: "128 Units" },
    { label: "Frequency Band", value: "2.4GHz ISM" },
    { label: "Transmission", value: "25 Meters" },
    { label: "SNR", value: "> 80dB(A)" },
  ],
};



interface ApiProduct {
  id: number;
  name: string;
  description: string;
  supplier: { name: string };
  galleries: { file_url: string }[];
  category: { name: string } | null;
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



function DescriptionPanel() {
  return (
    <div className="space-y-5">
      {STATIC.description.split("\n\n").map((para, i) => {
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

      <div className="pt-1">
        <h3
          className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-5"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Features
        </h3>

        <ul className="space-y-3">
          {STATIC.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] text-gray-500 leading-[1.85] text-justify">
              <span className="mt-[10px] w-1 h-1 bg-[#D0021B] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SpecificationPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {STATIC.specifications.map((group) => (
        <div key={group.group} className="border border-gray-200 overflow-hidden">
          <div className="bg-[#D0021B] px-5 py-3">
            <h3
              className="text-[10px] font-bold text-white tracking-widest uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {group.group}
            </h3>
          </div>
          <table className="w-full">
            <tbody>
              {group.rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-5 py-3 text-xs text-gray-400 w-[48%] font-medium align-top border-r border-gray-100">
                    {row.label}
                  </td>
                  <td className="px-5 py-3 text-xs text-gray-800 font-semibold align-top">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}



export default function ProductDetail({ id }: { id: string }) {
  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    fetch(`https://product-admin-panel.nterco.id/api/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        const p = data.data || data;
        setProduct({
          id: p.id,
          name: p.name,
          description: p.description ?? "",
          supplier: { name: p.supplier?.name ?? "TendZone" },
          galleries: p.galleries ?? [],
          category: p.category ?? null,
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingState />;
  if (!product) return <NotFoundState />;

  const galleries = product.galleries ?? [];
  const supplierName = product.supplier?.name ?? "TendZone";
  const categoryName = product.category?.name ?? "Conference System";

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
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-16 border overflow-hidden shrink-0 transition-all ${activeImg === i
                      ? "border-[#D0021B]"
                      : "border-gray-200 hover:border-gray-400"
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

         
          <p className="text-xs text-gray-400 mb-6">
            Model: {STATIC.model}&nbsp;·&nbsp;SKU: {STATIC.sku}&nbsp;·&nbsp;ID: #{product.id}
          </p>

      
          <p className="text-sm text-gray-500 leading-relaxed mb-8 border-l-2 border-[#D0021B] pl-4">
            {STATIC.tagline}
          </p>

      
          <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 mb-8">
            {STATIC.highlights.map((s) => (
              <div key={s.label} className="bg-white px-5 py-4">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5">{s.label}</p>
                <p
                  className="text-sm font-bold text-gray-900"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>

      
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
                className={`relative px-9 py-4 text-sm font-semibold whitespace-nowrap transition-all duration-150 ${activeTab === tab.key
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
            {activeTab === "description" && <DescriptionPanel />}
            {activeTab === "specification" && <SpecificationPanel />}
          </div>
        </div>
      </div>

      <div className="h-[3px] bg-[#D0021B]" />
    </div>
  );
}