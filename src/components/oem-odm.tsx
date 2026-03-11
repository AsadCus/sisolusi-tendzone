"use client";

import {
  Box,
  Palette,
  MessageCircle,
  Layers,
  CheckCircle,
  SlidersHorizontal,
} from "lucide-react";
import { TextureOverlay } from "@/components/ui/texture-overlay";

export default function OemOdmSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111] text-white py-20">
      <TextureOverlay texture="crosshatch" opacity={8} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">
            OEM / ODM Service
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Tailored manufacturing solutions built around your brand, product, and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ServiceCard
            tag="OEM"
            title="Your Brand, Our Factory"
            description="We manufacture products based on your specifications — from logo and packaging to materials and colors. Ideal for brands looking to sell under their own identity."
            features={[
              { icon: Layers, label: "Logo Branding" },
              { icon: Box, label: "Custom Package" },
              { icon: Palette, label: "Color Options" },
              { icon: SlidersHorizontal, label: "Materials" },
            ]}
            buttonText="Start OEM Project"
          />
          <ServiceCard
            tag="ODM"
            title="Design to Delivery"
            description="From concept to production, we handle everything. Share your requirements and we'll develop a solution tailored to your market and user needs."
            features={[
              { icon: MessageCircle, label: "Communicate" },
              { icon: CheckCircle, label: "Confirm Specs" },
              { icon: SlidersHorizontal, label: "Customize" },
            ]}
            buttonText="Start ODM Project"
          />
        </div>
      </div>
    </section>
  );
}

type Feature = { icon: any; label: string };

function ServiceCard({
  tag,
  title,
  description,
  features,
  buttonText,
}: {
  tag: string;
  title: string;
  description: string;
  features: Feature[];
  buttonText: string;
}) {
  return (
    <div className="bg-white p-8 flex flex-col gap-6">
      <div>
        <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full">
          {tag}
        </span>
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-6">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <Icon size={22} className="text-red-500" />
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
          );
        })}
      </div>

      <button className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors duration-200">
        {buttonText}
      </button>
    </div>
  );
}