"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does a Dante adapter connect to other devices?",
    answer:
      "It typically has one or more Ethernet ports to connect to the Dante network.",
  },
  {
    question: "What is the Dante interface?",
    answer:
      "The Dante interface is a technology that enables high-quality, low-latency audio networking. It allows for the seamless transmission of audio signals over standard Ethernet networks, connecting multiple audio devices such as audio mixers, amplifiers, speakers, and microphones.",
  },
  {
    question: "What features does the Dante adapter have?",
    answer:
      "Easy audio drop-point for laptops in conference settings, no need to reconfigure your Dante network for different computers. Record and playout 2-channel audio simultaneously from any PC, Mac or Linux-based computer with no additional software at all.",
  },
  {
    question: "Where is the Dante interface used?",
    answer:
      "Dante interface is great for use in commercial and professional audio environments. It is a combination of hardware and software meant for transporting multi-channel digital audio over a standard IP over Ethernet network.",
  },
];

export default function AudioAccesoriesFAQ() {
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
                  className={`text-[13.5px] font-semibold transition-colors duration-150 ${open === i ? "text-red-500" : "text-gray-800"
                    }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  strokeWidth={2.5}
                  className={`shrink-0 transition-transform duration-200 ${open === i ? "rotate-180 text-red-400" : "text-gray-400"
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64 pb-5" : "max-h-0"
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