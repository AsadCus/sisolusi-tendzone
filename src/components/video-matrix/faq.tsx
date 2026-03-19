"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is the matrix switcher for video installed?",
    answer:
      "A video matrix is installed between the video sources and the display devices. Make sure to connect all the input cables from the source devices to the corresponding input ports on the matrix switcher. Do the same for the output cables, routing them from the switcher to the display devices.",
  },
  {
    question: "Can a video matrix be controlled remotely?",
    answer:
      "Many modern video matrix offer remote control options, allowing users to manage input-output routing and settings from a distance. These devices often come equipped with connectivity features like Wi-Fi, Ethernet, or infrared (IR) ports, enabling remote control via a network connection or an IR remote.",
  },
  {
    question: "What applications benefit from using a video matrix?",
    answer:
      "Video matrices are commonly used in home entertainment systems, commercial spaces like bars and restaurants, security and surveillance setups, gaming lounges, and educational institutions. They allow flexible routing and distribution of video signals to multiple displays.",
  },
];

export default function VideoMatrixFAQ() {
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