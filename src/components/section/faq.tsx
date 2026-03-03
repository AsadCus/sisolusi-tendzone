"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is a twelve-in-one integrated processor?",
    answer:
      "The 12 Channel Digital Sound Processor is an advanced audio solution that provides precise control and enhancement of sound quality. It enables fine-tuning across twelve channels, delivering a customized high-fidelity listening experience tailored to different environments and user preferences.",
  },
  {
    question:
      "How does the twelve-in-one integrated processor improve performance?",
    answer:
      "By integrating multiple functions into a single system, it reduces communication latency and significantly enhances overall processing speed and efficiency.",
  },
  {
    question: "Does it support multiple operating systems?",
    answer:
      "Yes, it supports multiple operating systems as long as the necessary drivers are available and properly installed.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions about our products and solutions.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group border border-gray-200 rounded-2xl px-6 transition-all duration-300 hover:shadow-md hover:border-red-500"
            >
              <AccordionTrigger className="py-6 text-left text-base font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}