"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What do I need to use a wireless microphone system?",
    answer:
      "Wireless microphone system has two principal components, a transmitter that the microphone is plugged into and a receiver that plugs into the computer or sound system. Some of the features one should be aware of are: adequate battery life.",
  },
  {
    question: "Which is the main advantage of wireless microphone systems?",
    answer:
      "The biggest advantage of a wireless microphone system is its freedom of movement.",
  },
  {
    question: "What are the three main components a wireless microphone system consists of?",
    answer:
      "Wireless microphone systems are comprised of three fundamental components: the microphone, the transmitter, and the receiver. Typically, a wireless system will feature one of three mic types: handheld, headset or lavalier.",
  },
  {
    question: "Do I need a speaker for wireless microphone?",
    answer:
      "A wireless mic system makes no sound on its own. It must be connected to a sound system mixer or to a portable speaker. Note: some 'all-in-one' portable sound systems have a wireless receiver built-in, so this connection is already made.",
  },
  {
    question: "What is the average range of a wireless microphone system?",
    answer:
      "The transmission range of wireless microphones can vary widely from brand to brand. Several factors can also affect the range, including the environment, obstacles, or other sources of interference. If we tally all of these factors, 100 to 1000 feet is a safe estimate. Distance and interference can negatively impact signal quality.",
  },
  {
    question: "Can you use multiple transmitters with a single receiver?",
    answer:
      "Yes. Wireless microphone receivers can be assigned to multiple wireless mic transmitters. The audio quality of different mic brands assigned to an interoperable receiver might vary.",
  },
  {
    question: "Do wireless microphones need batteries or external power sources?",
    answer:
      "Wireless microphones are battery-powered, whereas receivers may use either AC adapters or batteries. Batteries for both wireless mics are 9-volt batteries lasting around 8–12 hours, depending on use. It's important to replace any batteries regularly before the show.",
  },
];

export default function WirelessMicFAQ() {
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