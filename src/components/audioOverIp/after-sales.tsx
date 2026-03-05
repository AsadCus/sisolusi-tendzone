"use client";

import {
  Headphones,
  Building2,
  Sun,
  GitMerge
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Headphones,
    title: "Technical Support",
    description:
      "Professional tech support team ensures any issues with the AV system are promptly addressed."
  },
  {
    id: 2,
    icon: Building2,
    title: "Maintenance Services",
    description:
      "Client-customized maintenance plans based on usage, equipment types, and preferences."
  },
  {
    id: 3,
    icon: Sun,
    title: "Upgrades & Updates",
    description:
      "Continuous software upgrades to keep your systems modern and optimized."
  },
  {
    id: 4,
    icon: GitMerge,
    title: "Feedback & Improvement",
    description:
      "Customer feedback drives continuous improvement in our services."
  }
];

export default function AfterSalesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-16">
          After-Sales Services
        </h2>

        <div className="grid md:grid-cols-4 gap-12 relative">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="relative text-center group cursor-pointer"
              >
                {index !== services.length - 1 && (
                  <div className="hidden md:block absolute top-14 right-[-50%] w-full border-t border-dashed border-red-300"></div>
                )}


                <div className="relative w-28 h-28 mx-auto mb-6">

                  <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 group-hover:border-red-300 transition duration-300"></div>


                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition duration-300">
                    <Icon className="text-red-500 group-hover:text-red-600 transition duration-300 w-8 h-8" />
                  </div>


                  <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold 
                      bg-red-500 text-white shadow 
                      transition-all duration-300
                      group-hover:bg-white 
                      group-hover:text-red-500 
                      group-hover:scale-110 
                      group-hover:ring-4 
                      group-hover:ring-red-100">
                    {service.id}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-red-500 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}