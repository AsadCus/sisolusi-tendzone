"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LayoutGrid, Wrench, Settings, ShieldCheck, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
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
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-video lg:aspect-auto lg:h-115 overflow-hidden shadow-md"
        >
          <Image
            src="/images/office/office.png"
            alt="Why Choose Us"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Us
            </h2>

            <p className="text-[15px] text-gray-500 leading-relaxed">
              Our factory specializes in the design, development, and production
              of advanced AV products for a wide range of applications.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-sm mb-2 px-4 border-none"
                >
                  <AccordionTrigger className="hover:no-underline group py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-500 text-white shrink-0 group-hover:bg-red-600 transition-colors">
                        <Icon size={13} />
                      </div>

                      <span className="text-[13.5px] font-semibold text-gray-800 group-hover:text-red-500 transition-colors">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-[13.5px] text-gray-500 leading-relaxed pl-10 pb-3">
                    {item.desc}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}
