"use client";

import {
  Box,
  Palette,
  MessageCircle,
  Layers,
  CheckCircle,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import { TextureOverlay } from "@/components/ui/texture-overlay";

export default function OemOdmSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#111] text-white py-16">
      <TextureOverlay texture="crosshatch" opacity={8} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            OEM/ODM Service
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Our dedicated customer support team offers reliable technical support, quick response times, and preventive maintenance service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5">
          <ServiceCard
            title="OEM Service"
            description="As a professional AV provider, We focus on understanding the unique requirements of our clients. Identify any technical limitations or challenges the client currently faces, such as space constraints, budget limitations, or specific user needs."
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
            description="Maintenance Services: Offer client-customized maintenance plans based on usage, equipment types, and client preferences. Increased lifespan and reliability of the AV systems, leading to a better overall client experience."
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

type Feature = { icon: any; label: string };

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
    <div className="bg-white text-gray-800 p-10 flex flex-col items-center text-center gap-7">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{description}</p>

      <div className="flex flex-wrap justify-center gap-8">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-600 text-white">
                <Icon size={22} />
              </div>
              <span className="text-xs font-medium text-gray-700 flex items-center gap-0.5">
                {item.label}
                <ChevronRight size={12} className="text-gray-400" />
              </span>
            </div>
          );
        })}
      </div>

      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-sm font-semibold transition-colors duration-200">
        {buttonText}
      </button>
    </div>
  );
}