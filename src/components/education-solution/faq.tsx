"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is education solution?",
    answer:
      "The introduction of education solution has made the entire teaching mode more diversified, especially some well-equipped multimedia classrooms not only have rich information display but also have various projection terminal equipment, which can support fast projection in actual use show and share and more.",
  },
  {
    question: "What are the main functions of education solution?",
    answer:
      "The product adopts an integrated structural design, with 2 built-in high-speed WiFi processing modules, a hidden high gain antenna, support for 4K high-definition HDMI output, independent audio output, gigabit Ethernet interface, and USB expansion interface. Wireless screen casting products support mainstream wireless screen casting protocols, and devices carried by teachers and students can cast screens without installing any software.",
  },
  {
    question: "What types of input sources can be connected to education solution?",
    answer:
      "Laptops, Tablets, USB drives, Cameras, External microphones.",
  },
];

export default function EducationSolutionFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white px-4 py-8 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">

        <div className="mb-6">
          <div className="w-6 h-0.5 bg-red-500 mb-3" />
          <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-4 text-left gap-4 cursor-pointer"
              >
                <span
                  className={`text-[13.5px] font-semibold transition-colors duration-150 ${
                    open === i ? "text-red-500" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  strokeWidth={2.5}
                  className={`shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-red-400" : "text-gray-400"
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-64 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[13px] font-medium text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}