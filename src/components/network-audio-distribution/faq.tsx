"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What Is 12' Vailink network powered full-range speaker?",
    answer:
      "The Amber SM12 powered speaker is designed for smart network system architecture, featuring both digital and analog dual-link backup inputs. It utilizes TENDZONE's unique audio processing technology to deliver natural sound reproduction while maintaining the brand's high sound quality standards. The speaker employs the TENDZONE Vailink network transmission protocol for audio streaming via the RJ45 network interface.",
  },
  {
    question: "How does 12' Vailink network powered full-range speaker handle bass frequencies?",
    answer:
      "The 12-inch size often contributes to a decent handling of bass, but the performance depends on the speaker's design and components.",
  },
  {
    question: "What are the digital formats of the 8x8 Vailink I/O interface?",
    answer: "ADAT, AES/EBU, S/PDIF, SMUX.",
  },
  {
    question: "What is the frequency response range of the 12' Vailink speaker?",
    answer:
      "It typically covers a wide range of frequencies, but the specific range would be indicated in the product specifications.",
  },
];

export default function NetworkAudioDistributionFAQ() {
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