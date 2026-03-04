"use client";

import { Sparkles, Handshake, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Expertise & Experience",
    desc: "Years of experience optimizing AV systems for performance and ease of use.",
  },
  {
    icon: Handshake,
    title: "Tailored Solutions",
    desc: "Customized solutions designed to meet your unique requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous testing ensures durability and seamless integration.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    desc: "Continuous technical support from design to maintenance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Choose Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition duration-300">
                    <Icon size={22} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}