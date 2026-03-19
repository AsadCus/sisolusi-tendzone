"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the difference between an amplifier and a power amplifier?",
    answer:
      "While a general amplifier can be used in both the receive path and the transmit path, a power amplifier is specifically designed for transmit to maximize the range of radio transmission.",
  },
  {
    question: "What are the three basic types of power amplifiers?",
    answer:
      "Classification of Power Amplifiers: Audio frequency power amplifiers, Radio frequency power amplifiers, and Video frequency power amplifiers.",
  },
  {
    question: "Why do we need a power amplifier?",
    answer:
      "The power amplifier, PA, is an essential electronic component in nearly all microwave and millimeter-wave applications, and in particular in any transmitting system, with the aim to increase the power level of the signal at its input up to a predefined level at its output.",
  },
  {
    question: "Does a power amplifier improve sound quality?",
    answer:
      "Yes, amplifiers can augment sound quality in all audio devices employing speakers or headphones, encompassing home audio systems, car audio setups, and portable audio devices.",
  },
  {
    question: "What is the primary purpose of a power amplifier?",
    answer:
      "A power amplifier (PA) is used for transmission lines of radio frequency (RF) signals. Its role is to amplify data communication signals converted from RF signals to the level to which an antenna can transmit it as an electromagnetic wave without distortion.",
  },
];

export default function PowerAmplifierFAQ() {
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