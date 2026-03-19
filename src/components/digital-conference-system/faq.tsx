"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is 2.4 GHz good for wireless microphone?",
    answer:
      "A 2.4 GHz wireless microphone can potentially interfere with WiFi signals, particularly if both systems are operating on the same frequency band. The 2.4 GHz band is shared by many devices, including WiFi networks (specifically 802.11b/g/n), Bluetooth devices, and some cordless phones.",
  },
  {
    question: "What is a wireless desktop delegate rectangular columnar unit?",
    answer:
      "It is a device with wireless capabilities and a specific rectangular columnar shape designed for desktop use.",
  },
  {
    question: "What are the common applications of wireless desktop delegate gooseneck unit?",
    answer:
      "It could be used for tasks such as data input, control of connected devices, or as an interface for various software.",
  },
  {
    question: "How durable is the wireless desktop delegate rectangular columnar unit?",
    answer: "Durability depends on the quality of components, build, and usage conditions.",
  },
];

export default function DigitalConferenceFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white px-4 py-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <div className="mb-5">
          <div className="w-6 h-0.5 bg-red-500 mb-3" />
          <h2 className="text-lg font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-3.5 text-left gap-4 cursor-pointer group"
              >
                <span className={`text-[13.5px] font-semibold transition-colors duration-150 ${
                  open === i ? "text-red-500" : "text-gray-800"
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  strokeWidth={2.5}
                  className={`shrink-0 transition-all duration-200 ${
                    open === i ? "rotate-180 text-red-400" : "text-gray-400"
                  }`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-48 pb-4" : "max-h-0"
              }`}>
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