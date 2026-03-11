"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";


type SubItem = {
  label: string;
  href: string;
};

type Category = {
  label: string;
  items: SubItem[];
};


const categories: Category[] = [
  {
    label: "All-In-One Solution",
    items: [
      { label: "Conference All-In-One", href: "/products/all-in-one/conference" },
      { label: "Education All-In-One", href: "/products/all-in-one/education" },
      { label: "Portable Solution", href: "/products/all-in-one/portable" },
    ],
  },
  {
    label: "Audio Processor",
    items: [
      { label: "Web Based Audio Processors", href: "/products/audio-processor/web-based" },
      { label: "DSP Audio Processors", href: "/products/audio-processor/dsp" },
      { label: "Dante Audio Processors", href: "/products/audio-processor/dante" },
      { label: "AEC Processors", href: "/products/audio-processor/aec" },
    ],
  },
  {
    label: "Network Audio Distribution",
    items: [
      { label: "Dante Devices", href: "/products/network-audio/dante" },
      { label: "AoIP Solutions", href: "/products/network-audio/aoip" },
      { label: "Network Switches", href: "/products/network-audio/switches" },
    ],
  },
  {
    label: "Digital Conference System",
    items: [
      { label: "Wired Conference", href: "/products/conference/wired" },
      { label: "Wireless Conference", href: "/products/conference/wireless" },
      { label: "Interpretation System", href: "/products/conference/interpretation" },
    ],
  },
  {
    label: "Wireless Microphone System",
    items: [
      { label: "UHF Wireless", href: "/products/wireless-mic/uhf" },
      { label: "Digital Wireless", href: "/products/wireless-mic/digital" },
      { label: "In-Ear Monitor", href: "/products/wireless-mic/iem" },
    ],
  },
  {
    label: "Microphone",
    items: [
      { label: "Gooseneck Microphone", href: "/products/microphone/gooseneck" },
      { label: "Boundary Microphone", href: "/products/microphone/boundary" },
      { label: "Hanging Microphone", href: "/products/microphone/hanging" },
    ],
  },
  {
    label: "Power Amplifier",
    items: [
      { label: "Class-D Amplifier", href: "/products/amplifier/class-d" },
      { label: "Network Amplifier", href: "/products/amplifier/network" },
      { label: "Power Amplifier 2CH", href: "/products/amplifier/2ch" },
    ],
  },
  {
    label: "Speaker",
    items: [
      { label: "Ceiling Speaker", href: "/products/speaker/ceiling" },
      { label: "Column Speaker", href: "/products/speaker/column" },
      { label: "Subwoofer", href: "/products/speaker/subwoofer" },
    ],
  },
  {
    label: "Audio Accessories",
    items: [
      { label: "Cables & Connectors", href: "/products/audio-accessories/cables" },
      { label: "Rack Accessories", href: "/products/audio-accessories/rack" },
    ],
  },
  {
    label: "MIDIS AV Over IP Systems",
    items: [
      { label: "4K Encoders", href: "/products/av-over-ip/encoders" },
      { label: "4K Decoders", href: "/products/av-over-ip/decoders" },
      { label: "AV Switchers", href: "/products/av-over-ip/switchers" },
    ],
  },
  {
    label: "Video Matrix",
    items: [
      { label: "HDMI Matrix", href: "/products/video-matrix/hdmi" },
      { label: "SDI Matrix", href: "/products/video-matrix/sdi" },
    ],
  },
  {
    label: "Video Wall Controller",
    items: [
      { label: "2x2 Controller", href: "/products/video-wall/2x2" },
      { label: "4x4 Controller", href: "/products/video-wall/4x4" },
      { label: "Custom Layout", href: "/products/video-wall/custom" },
    ],
  },
  {
    label: "HDMI Products",
    items: [
      { label: "HDMI Splitter", href: "/products/hdmi/splitter" },
      { label: "HDMI Extender", href: "/products/hdmi/extender" },
      { label: "HDMI Switch", href: "/products/hdmi/switch" },
    ],
  },
  {
    label: "Video Accessories",
    items: [
      { label: "Mounting Brackets", href: "/products/video-accessories/brackets" },
      { label: "Signal Converters", href: "/products/video-accessories/converters" },
    ],
  },
  {
    label: "Education Solution",
    items: [
      { label: "Classroom Audio", href: "/products/education/classroom-audio" },
      { label: "Discussion System", href: "/products/education/discussion" },
      { label: "Campus PA System", href: "/products/education/campus-pa" },
    ],
  },
];


function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}


function CategoryItem({
  category,
  isOpen,
  onToggle,
}: {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={onToggle}
        className={[
          "inline-flex items-center gap-1.5 px-3.5 py-1.75",
          "text-[13px] font-medium rounded-md border-[1.5px]",
          "transition-all duration-150 whitespace-nowrap select-none cursor-pointer",
          isOpen
            ? "border-red-600 text-red-600 bg-red-50"
            : "border-gray-200 text-gray-600 bg-white hover:border-red-500 hover:text-red-600",
        ].join(" ")}
      >
        {category.label}
        <ChevronIcon open={isOpen} />
      </button>

      <div
        className={[
          "absolute top-full left-0 mt-1.5 z-50",
          "min-w-52.5 bg-white border border-gray-100 rounded-md overflow-hidden",
          "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
          "transition-all duration-150 origin-top",
          isOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none",
        ].join(" ")}
      >
        {category.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onToggle}
            className="
              flex items-center gap-2.5 px-4 py-2.5
              text-[13px] text-gray-600 border-b border-gray-50 last:border-b-0
              hover:bg-red-50 hover:text-red-600 transition-colors duration-100
              group
            "
          >
            <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors duration-100 shrink-0" />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}


export default function CategoryNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div
      ref={navRef}
      className="w-full bg-white px-5 py-5 shadow-sm"
    >
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat, index) => (
          <CategoryItem
            key={cat.label}
            category={cat}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
          />
        ))}
      </div>
    </div>
  );
}