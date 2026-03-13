"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What advantages does MIDIS AV over IP systems have?",
    answer:
      "With MIDIS AV over IP systems, users can have more flexibility, scalability, and control over their audio-video distribution. It offers systems that are easily upgradable and customizable to fit changing needs.",
  },
  {
    question: "Can existing infrastructure be used with MIDIS AV over IP systems?",
    answer:
      "Yes, the MIDIS AV over IP systems allows the use of existing network infrastructure for the distribution of audio-video. When using the infrastructure, ensure it meets the requirements for bandwidth and quality for AV content.",
  },
  {
    question: "What components are included in MIDIS AV over IP systems?",
    answer:
      "Key components of MIDIS AV over IP systems are encoders, network switches, decoders, and control software.",
  },
  {
    question: "What network switches are best for MIDIS AV over IP systems?",
    answer:
      "Managed network switches are suitable for MIDIS AV over IP systems since they offer control and features that help in the troubleshooting of the AV distribution.",
  },
];

export default function MIDISAVOverIPFAQ() {
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