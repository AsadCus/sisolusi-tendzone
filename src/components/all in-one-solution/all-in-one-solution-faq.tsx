"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: " What is a twelve-in-one integrated processor?",
    answer:
      "In the dynamic world of audio technology, the 12 Channel Digital Sound Processor stands as a pinnacle of innovation, offering unparalleled control and enhancement of sound quality. This sophisticated device is a game-changer for audiophiles, professional sound engineers, and casual listeners, allowing for intricate adjustments and fine-tuning across twelve channels. By providing such detailed manipulation of audio signals, users can achieve a custom, high-fidelity listening experience that caters to their specific preferences and the unique acoustics of any environment.",
  },
  {
    question: "How does the twelve-in-one integrated processor improve performance?",
    answer:
      "By integrating multiple functions, it reduces communication latency and enhances overall processing speed.",
  },
  {
    question: "Does it support multiple operating systems?",
    answer:
      " It should be compatible with multiple operating systems as long as the necessary drivers are available.",
  },
];

export default function AllInOneSolutionFAQ() {
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