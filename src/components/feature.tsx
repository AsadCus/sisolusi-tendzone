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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Why Choose Us
            </h2>
            <p className="text-sm mt-3 text-gray-600 leading-relaxed">
              Our factory specializes in the design, development, and production
              of advanced AV products that cater to a wide range of applications.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-sm mb-2 px-4 border-none"
                >
                  <AccordionTrigger className="hover:no-underline group py-2.5">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white group-hover:bg-red-700 transition duration-200 shrink-0">
                        <Icon size={14} />
                      </div>
                      <span className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition text-left">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-md leading-relaxed pl-10">
                    {item.desc}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}