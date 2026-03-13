"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: " How can signal quality be affected by HDMI products length?",
    answer:
      "Longer HDMI cables can lead to signal degradation, especially with high-resolution video or 4K content. It's recommended to use quality cables and avoid excessive lengths to maintain optimal signal integrity.",
  },
  {
    question: "Are there materials that specifically improve HDMI products performance?",
    answer:
      "Indeed, the performance of HDMI products depends much on the elements employed in it. Copper or silver-plated copper conductors guarantee outstanding conductivity, guaranteeing effective signal transmission. Polyethylene and PVC are among the insulating materials that keep signal clarity and provide resistance against outside elements.",
  },
  {
    question: "  In what ways can environmental conditions affect HDMI products performance?",
    answer:
      "  Environmental variables, including physical damage and electromagnetic interference, can compromise HDMI products performance. Strong electromagnetic fields can cause signal distortion in HDMI productss, compromising audio and visual quality. To fight this, choose wires with strong shielding that can resist interference. Physical damage from bending or pressure can also compromise functionality; thus, ensure HDMI products are set up to minimize unnecessary stress. Maintaining the best performance depends on keeping HDMI products free from environmental contaminants.",
  },
];

export default function HDMIProductFAQ() {
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