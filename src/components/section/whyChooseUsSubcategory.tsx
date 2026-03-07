"use client";

import {
  Layers,
  Handshake,
  ShieldCheck,
  LifeBuoy,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Expertise & Experience",
    description:
      "With years of experience in manufacturing and systems integration, our skilled team optimize your AV environment for exceptional performance and ease of use.",
  },
  {
    icon: Handshake,
    title: "Tailored & Flexible Services",
    description:
      "Recognizing that each client has unique needs, we collaborate closely with you to create solutions that are perfectly suited to your specific requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "All our products undergo rigorous testing to ensure they meet the highest standards of durability and performance. Our commitment to cutting-edge technology ensures reliability and seamless integration.",
  },
  {
    icon: LifeBuoy,
    title: "Reliable Support & Maintenance",
    description:
      "Our dedicated team provides comprehensive support throughout the project lifecycle including design, installation guidance, technical assistance, and ongoing maintenance.",
  },
];

export default function WhyChooseUsSectionSubcategory() {
  return (
    <section className="w-full py-2">
      <div className="max-w-6xl mx-auto px-6">

        <div className="border-t-2 border-dashed border-red-500 mb-12" />

        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 border-b-2 border-red-500"
              >
                <div className="flex items-start gap-6">

                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>

                  <div>
                    <h3 className="text-md font-semibold text-red-600 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.description}
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