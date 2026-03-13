"use client";

import {
  LucideIcon,
  Box,
  Palette,
  MessageCircle,
  Layers,
  CheckCircle,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";

const oemFeatures: { icon: LucideIcon; label: string }[] = [
  { icon: Layers, label: "Logo Branding" },
  { icon: Box, label: "Custom Packaging" },
  { icon: Palette, label: "Color Options" },
  { icon: SlidersHorizontal, label: "Materials" },
];

const odmFeatures: { icon: LucideIcon; label: string }[] = [
  { icon: MessageCircle, label: "Communicate" },
  { icon: CheckCircle, label: "Confirm Specs" },
  { icon: SlidersHorizontal, label: "Customize" },
];

export default function OemOdmSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-700 mb-2">
            Our Services
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            OEM / ODM Service
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card
            tag="OEM"
            tagline="Your Brand, Our Factory"
            description="We manufacture products to your exact specs — logo, packaging, colors, and materials. Built for brands that want to sell under their own identity."
            features={oemFeatures}
            buttonText="Start OEM Project"
          />
          <Card
            tag="ODM"
            tagline="Design to Delivery"
            description="From concept to production, we handle everything. Share your requirements and we'll engineer a solution tailored to your market."
            features={odmFeatures}
            buttonText="Start ODM Project"
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  tag,
  tagline,
  description,
  features,
  buttonText,
}: {
  tag: string;
  tagline: string;
  description: string;
  features: { icon: LucideIcon; label: string }[];
  buttonText: string;
}) {
  return (
    <div className="border border-gray-100 bg-gray-50 p-8 flex flex-col gap-6 hover:border-red-200 hover:shadow-sm transition-all duration-300">
      <div className="space-y-2">
        <span
          className="inline-block bg-red-700 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1"
          style={{ transform: "skewX(-12deg)" }}
        >
          <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>
            {tag}
          </span>
        </span>
        <h3 className="text-[21px] font-bold text-gray-900 leading-snug">
          {tagline}
        </h3>
        <p className="text-gray-400 text-[13.5px] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="h-px bg-gray-100" />

      <div className="flex flex-wrap gap-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2 bg-white px-3 py-2 border border-gray-100 shadow-sm"
            >
              <Icon size={13} className="text-red-700 shrink-0" />
              <span className="text-[12.5px] font-semibold text-gray-700">
                {f.label}
              </span>
            </div>
          );
        })}
      </div>

      <button className="mt-auto flex items-center justify-center gap-2 w-full bg-red-700 hover:bg-red-800 text-white py-2.5 text-[13px] font-semibold transition-all duration-200">
        {buttonText}
        <ArrowRight size={13} />
      </button>
    </div>
  );
}
