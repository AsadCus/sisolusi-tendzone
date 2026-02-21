"use client";

import {
  Box,
  Palette,
  MessageCircle,
  Layers,
  CheckCircle,
  SlidersHorizontal,
} from "lucide-react";

export default function OemOdmSection() {
  return (
    <section className="relative w-full bg-linear-to-b from-gray-900 to-black text-white pt-20 pb-40">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            OEM/ODM Service
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Our dedicated customer support team offers reliable technical
            support, quick response times, and preventive maintenance service.
          </p>
        </div>
  <div className="max-w-7xl mx-auto px-6 -mb-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ServiceCard
            title="OEM Service"
            description="We focus on understanding the unique requirements of our clients and identifying technical limitations, space constraints, and budget considerations."
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
            description="Offer client-customized maintenance plans based on usage, equipment types, and preferences to increase reliability and lifespan."
            features={[
              { icon: MessageCircle, label: "Communicating" },
              { icon: CheckCircle, label: "Confirming" },
              { icon: SlidersHorizontal, label: "Customizing" },
            ]}
            buttonText="Start Customizing"
          />
  </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  features,
  buttonText,
}: {
  title: string;
  description: string;
  features: { icon: any; label: string }[];
  buttonText: string;
}) {
  return (
    <div className="bg-white text-gray-900 rounded-2xl p-10 shadow-lg hover:shadow-xl transition duration-300">
      
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <p className="text-gray-600 leading-relaxed mb-8">
        {description}
      </p>

      <div className="flex flex-wrap gap-8 justify-center mb-8">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white">
                <Icon size={20} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
}