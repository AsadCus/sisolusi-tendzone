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
    <section className="relative w-full overflow-hidden bg-gray-200 text-white pt-24 pb-44">
      
      <TextureOverlay
        texture="grid"
        opacity={0.4}
        className="absolute inset-0 z-0"
      />

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 
        w-225 h-225 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl text-gray-900 md:text-5xl font-semibold tracking-tight">
            OEM / ODM Service
          </h2>
          <p className="text-gray-600 mt-5 leading-relaxed text-lg">
            Our dedicated customer support team offers reliable technical
            support, quick response times, and preventive maintenance service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ServiceCard
            title="OEM Service"
            description="As a professional AV provider, We focus on understanding the unique requirements of our clients.Identify any technical limitations or challenges the client currently faces, such as space constraints, budget limitations, or specific user needs"
            features={[
              { icon: Layers, label: "Logo" },
              { icon: Box, label: "Package" },
              { icon: Palette, label: "Colors" },
              { icon: SlidersHorizontal, label: "Materials" },
            ]}
            buttonText="Start Your Project"
          />

          <ServiceCard
            title="ODM Service"
            description="Maintenance Services: Offer client-customized maintenance plans based on usage, equipment types, and client preferences.Increased lifespan and reliability of the AV systems, leading to a better overall client experience."
            features={[
              { icon: MessageCircle, label: "Communicating" },
              { icon: CheckCircle, label: "Confirming" },
              { icon: SlidersHorizontal, label: "Customizing" },
            ]}
            buttonText="Start Customizing"
          />
        </div>
      </div>
    </section>
  );
}

type Feature = {
  icon: any;
  label: string;
};

function ServiceCard({
  title,
  description,
  features,
  buttonText,
}: {
  title: string;
  description: string;
  features: Feature[];
  buttonText: string;
}) {
  return (
    <div className="group relative bg-white/95 backdrop-blur-md 
      border border-white/10 rounded-3xl p-12 
      shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]
      hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]
      transition-all duration-500">
      <div className="absolute inset-x-0 top-0 h-0.5 " />
      <h3 className="text-2xl text-center font-semibold mb-5 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-10">
        {description}
      </p>
      <div className="flex flex-wrap gap-10 justify-center mb-10">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full 
                bg-red-600 text-white transition-transform duration-300 
                group-hover:scale-110 shadow-md">
                <Icon size={22} />
              </div>
              <span className="text-sm text-center font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button className="bg-red-600 hover:bg-red-700 text-white 
          px-7 py-3 rounded-xl transition-all duration-300 
          hover:scale-105 active:scale-95 shadow-md">
          {buttonText}
        </button>
      </div>
    </div>
  );
}