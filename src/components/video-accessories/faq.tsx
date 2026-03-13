"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: " How does BYOD video switcher work?",
    answer:
      "BYOD video switch typically has several inputs for different video sources, such as cameras, computers, or video players. The switcher allows you to select which input is displayed on the output, which is usually connected to a monitor, projector, or recording device.",
  },
  {
    question: "What are the main features of BYOD video switcher?",
    answer:
      "Common features of BYOD video switchers include the ability to switch between multiple video sources, apply transitions between sources (such as cuts, fades, and wipes), mix audio from multiple sources, add graphics or overlays, and control other aspects of the video signal (such as colour correction and keying).",
  },
  {
    question: " What are the parts of BYOD video switcher?",
    answer:
      " Traditional hardware-based video switchers would contain a program bus and preview bus (or A/B bus) with button selectors, a transition bar or T-Bar, and a key bus gor background keying over the program, all of which form the basic mixer section.",
  },
];

export default function VideoAccessoriesFAQ() {
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