"use client";

import Image from "next/image";
import {
  LayoutGrid,
  Wrench,
  Settings,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: LayoutGrid,
    title: "Comprehensive Solutions",
    desc: "From high-quality AV products to custom solutions and ongoing support, we provide everything you need for a seamless AV experience.",
  },
  {
    icon: Wrench,
    title: "Expertise & Experience",
    desc: "With years of experience in manufacturing and systems integration, our skilled team optimizes your AV environment for exceptional performance.",
  },
  {
    icon: Settings,
    title: "Tailored & Flexible Services",
    desc: "We collaborate closely with you to create solutions perfectly suited to your specific requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Equipment & Innovation",
    desc: "All products undergo rigorous testing to ensure durability, reliability, and outstanding performance.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Support & Maintenance",
    desc: "Our dedicated team provides full project lifecycle support, from design to ongoing technical assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative w-full aspect-4/3 lg:aspect-auto lg:self-stretch rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/office/office.png"
            alt="Why Choose Us"
            fill
            className="object-cover transition duration-200 hover:scale-105"
          />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Why Choose Us
            </h2>
            <p className="text-base mt-4 text-gray-600 leading-relaxed">
              Our factory specializes in the design, development, and production
              of advanced AV products that cater to a wide range of applications.
            </p>
          </div>

          <div className="space-y-3">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-3 group p-3 rounded-2xl bg-white hover:bg-red-50 transition duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-center shrink-0">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-red-600 text-white group-hover:bg-red-700 transition duration-200">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mt-0.5 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}