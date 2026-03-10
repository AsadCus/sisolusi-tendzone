"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are thirteen-in-one integrated processors used for?",
    answer:
      "They help to control feedback, eliminate unwanted noise, and enhance overall sound quality across multiple channels simultaneously.",
  },
  {
    question: "What is a twelve-in-one integrated processor?",
    answer:
      "This sophisticated device is a game-changer for audiophiles, professional sound engineers, and casual listeners, allowing for intricate adjustments and fine-tuning across twelve channels.",
  },
  {
    question: "How does the thirteen-in-one integrated processor improve performance?",
    answer:
      "By integrating multiple functions, it reduces communication latency and enhances overall processing speed.",
  },
  {
    question: "Does it support multiple operating systems?",
    answer:
      "It should be compatible with multiple operating systems as long as the necessary drivers are available.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-8 px-6 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">FAQ</h2>
          <div className="mt-3 w-7 h-[2px] bg-red-500" />
        </div>

        {/* Grid 2 cols */}
        <div className="grid grid-cols-2 gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className={`cursor-pointer border px-5 py-4 transition-colors duration-200 ${
                open === i
                  ? "border-red-200 bg-red-50"
                  : "border-gray-100 bg-gray-50 hover:border-gray-200"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-[10px] font-bold text-red-500 mt-0.5 flex-shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className={`text-[12px] font-bold leading-snug transition-colors duration-150 ${open === i ? "text-red-600" : "text-gray-800"}`}>
                    {faq.question}
                  </p>
                </div>
                <span className={`flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-45 text-red-400" : "text-gray-300"}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </span>
              </div>

              {open === i && (
                <p className="mt-3 text-[11.5px] text-gray-500 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-6 text-[11px] text-gray-400 leading-relaxed text-center">
          Shenzhen Tendzone Intelligent Technology Co., Ltd. is one of the most professional all-in-one audio visual solutions manufacturers and suppliers in China, specialized in providing high quality customized service. We warmly welcome you to buy high-grade all-in-one audio visual solutions made in China here from our factory.
        </p>

      </div>
    </section>
  );
}