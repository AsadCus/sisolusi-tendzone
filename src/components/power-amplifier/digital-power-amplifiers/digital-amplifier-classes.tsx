"use client";

import { useState } from "react";

const functions = [
  {
    id: 1,
    tag: "Class A",
    title: "Class A Power Amplifier",
    description:
      "Class A power amplifiers are designed using only one switching transistor. The transistor type (BJT, IGBT, FET) depends on the intended end use application. These are linear amplifiers with high gain and 360° conduction angle.",
  },
  {
    id: 2,
    tag: "Class B",
    title: "Class B Power Amplifier",
    description:
      "Class B power amplifiers attempt to solve the heating problem in Class A amplifiers by using two complementary transistors to amplify the entire waveform. The conduction angle for each transistor is 180°, i.e., both remain in the ON state for half the duration of the input signal.",
  },
  {
    id: 3,
    tag: "Class AB",
    title: "Class AB Power Amplifier",
    description:
      "This configuration is a blend of Class A and Class B power amplifiers. It solves the problem of reduced efficiency due to overheating. It simultaneously reduces the crossover distortion present in Class B power amplifiers through the use of a combination of diodes and resistors to provide a bias voltage.",
  },
  {
    id: 4,
    tag: "Class C",
    title: "Class C Power Amplifier",
    description:
      "The conduction angle in Class C power amplifiers is less than 90°. Consequently, these amplifiers are unsuitable for audio amplification because a smaller conduction angle leads to more distortion. Class C amplifiers have a tuned load that enhances one frequency while suppressing others.",
  },
  {
    id: 5,
    tag: "Class D",
    title: "Class D Power Amplifier",
    description:
      "Class D amplifiers need much smaller power transformers than other amplifiers because PWM permits amplification at considerably higher frequencies. They are ideal for applications that require large power amplification in a small package, such as in power amplifiers for wireless protocols.",
  },
  {
    id: 6,
    tag: "Class F",
    title: "Class F Power Amplifier",
    description:
      "Class F amplifiers use a set of harmonic resonators (high-Q parallel LC circuits) to boost output power delivered to a load and provide high efficiency. The series of harmonic resonator circuits allows the input modulating signal to generate harmonic components at multiples of some fundamental frequency.",
  },
  {
    id: 7,
    tag: "Class G",
    title: "Class G Power Amplifier",
    description:
      "Class G amplifiers automatically shift between numerous power supply rails at different voltages as the input signal is varied. Class H amplifiers are also a variation of Class G amplifiers, except they use an infinitely variable analog supply rail. The use of continual switching decreases power losses in the transistor's conduction channel.",
  },
  {
    id: 8,
    tag: "Class I",
    title: "Class I Power Amplifier",
    description:
      "Class I amplifiers have two sets of complementary output switching circuits stacked in a parallel push-pull configuration, similar to a bridge circuit. The basic concept is the same as in a Class B amplifier: one device is active during the positive half cycle while the other is active during the negative half cycle.",
  },
  {
    id: 9,
    tag: "Class S",
    title: "Class S Power Amplifier",
    description:
      "Class S power amplifiers are similar to Class D power amplifiers. These digital pulses are then amplified to the desired power output level. As this signal is passed to the output, a high-Q filter is used to reconstruct the analog audio signal from the amplified pulses.",
  },
];

export default function PowerAmplifierClassesSection() {
  const [active, setActive] = useState(0);
  const current = functions[active];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-900 tracking-tight">
            Power Amplifier Classes
          </h2>
          <div className="flex justify-center mt-3">
            <span className="block w-10 h-0.5 bg-red-500" />
          </div>
        </div>

        {/* Segmented Button Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-0 border border-gray-200 mb-0">
          {functions.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`relative flex flex-col items-center justify-center gap-1 px-2 py-3 text-center transition-all duration-200 border-r border-gray-200 last:border-r-0 overflow-hidden
                ${active === i
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-500 hover:bg-gray-50"
                }`}
            >
              <span className={`text-[10px] font-black ${active === i ? "text-red-200" : "text-gray-300"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-semibold leading-tight">
                {item.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="border border-t-0 border-gray-200 bg-white p-8">
          <div key={active} className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0">
              <div className="w-10 h-10 bg-red-500 flex items-center justify-center">
                <span className="text-[13px] font-black text-white">
                  {String(active + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-700 mb-3 leading-snug">
                {current.title}
              </h3>
              <p className="text-sm text-gray-400 leading-7" style={{ textAlign: "justify" }}>
                {current.description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}