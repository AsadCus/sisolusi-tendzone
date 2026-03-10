"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does an audio processor do?",
    answer:
      "The primary function of an audio processor is to modify audio signals in real-time, applying various effects and adjustments to improve their quality. It operates by receiving an input audio signal and subjecting it to a series of digital signal processing techniques.",
  },
  {
    question: "What is audio processing used for?",
    answer:
      "Processing methods and application areas include storage, data compression, music information retrieval, speech processing, localization, acoustic detection, transmission, noise cancellation, acoustic fingerprinting, sound recognition, synthesis, and enhancement such as equalization, filtering, and level compression.",
  },
  {
    question: "What is an audio processor?",
    answer:
      "Audio processors, also known as digital processors, refer to the processing of digital signals. Their internal structure is generally composed of input and output parts — offering a high signal-to-noise ratio and strong anti-interference ability.",
  },
];

export default function AudioProcessorFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white px-4 py-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-5">
          <div className="w-6 h-0.5 bg-red-500 mb-3" />
          <h2 className="text-lg font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
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
                  className={`flex-shrink-0 transition-all duration-200 ${
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