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

export default function OemOdmAudioOverIpSection() {
  return (
    <section className="relative w-full overflow-hidden text-white py-8">

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-red-500 text-xl font-medium uppercase tracking-widest mb-2">
            OEM/ODM Service
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
           Our dedicated customer support team offers reliable technical support, quick response times, and preventive maintenance service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ServiceCard
            tag="OEM Service"
            description="As a professional AV provider, We focus on understanding the unique requirements of our clients.Identify any technical limitations or challenges the client currently faces, such as space constraints, budget limitations, or specific user needs."
            features={[
              { icon: Layers, label: "Logo Branding" },
              { icon: Box, label: "Custom Package" },
              { icon: Palette, label: "Color Options" },
              { icon: SlidersHorizontal, label: "Materials" },
            ]}
          />
          <ServiceCard
            tag="ODM Service"
            description="Maintenance Services: Offer client-customized maintenance plans based on usage, equipment types, and client preferences.Increased lifespan and reliability of the AV systems, leading to a better overall client experience."
            features={[
              { icon: MessageCircle, label: "Communicate" },
              { icon: CheckCircle, label: "Confirm Specs" },
              { icon: SlidersHorizontal, label: "Customize" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

type Feature = { icon: any; label: string };

function ServiceCard({
  tag,
  description,
  features,
}: {
  tag: string;
  description: string;
  features: Feature[];
}) {
  return (
    <div className="bg-white p-8 flex flex-col gap-6 rounded-2xl shadow-lg border border-gray-200">
      <div>
        <span className="text-gray-900 font-semibold">
          {tag}
        </span>
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
    </div>
  );
}