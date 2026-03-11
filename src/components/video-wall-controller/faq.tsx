"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the difference between a video wall controller and processor?",
    answer:
      "The video wall processor and controller have different roles in managing a video wall. The processor is responsible for processing the content and adjusting it to fit the configuration of the video wall, while the controller is responsible for managing the display settings and content.",
  },
  {
    question: "What is the purpose of a video wall controller?",
    answer:
      "The video wall controller is generally a compatible computer chassis with operating system handling different input and output signals. The video wall processor receives different input signals through HDMI, DVI, SDI, video or other cables or even through the LAN. The video wall controller has several outputs, usually controlling multiple monitors or screens. The video wall screen is a coherent screen of multiple displays — usually 4×4, 6×2, 8×2 or up to 172×44 arrangements.",
  },
  {
    question: "What is a video wall controller?",
    answer:
      "Video wall controllers, also called advanced video wall processors, allow the management of content across several screens in a multi-screen display. This gives you ultimate control over how your content is shown and lets you be flexible in how you visualise your sources. Your content can be shown however you like — on a single screen, a portion of the video wall, or the entire wall. With a video wall processor, you can have a dynamic display that delivers information clearly and in an appealing way.",
  },
  {
    question: "What is a twelve-in-one integrated processor?",
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
      "It should be compatible with multiple operating systems as long as the necessary drivers are available.",
  },
];

export default function VideoWallControllerFAQ() {
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