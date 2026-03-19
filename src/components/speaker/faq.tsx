"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the main features of a speaker?",
    answer:
      "Speaker or driver type (individual units only) – full-range, woofer, tweeter, or mid-range. Size of individual drivers. Rated power – power, and peak power a loudspeaker can handle. Impedance – typically 4 Ω (ohms), 8 Ω, etc.",
  },
  {
    question: "What are the properties of a speaker?",
    answer:
      "Specifications for speakers include sound pressure level, nominal input power, input impedance, frequency response, speaker size, and speaker weight. Sound pressure level (SPL) is a rating which corresponds to a maximum or nominal amount at a specific frequency within the dynamic range.",
  },
  {
    question: "How speakers work?",
    answer:
      "A speaker driver is the raw electroacoustic component that makes a loudspeaker work. As a transducer, its function is to transform energy from one form to another. Specifically, this transducer transforms the amplified electrical waves from your playback device, be that your phone or your turntable cartridge, into sound pressure waves in the air for your ears to detect.",
  },
];

export default function SpeakerFAQ() {
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