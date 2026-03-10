"use client";
import { useState } from "react";
import {
  Cpu,
  AudioWaveform,
  Mic2,
  Radio,
  Wind,
  Sliders,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Cpu,
    title: "Advanced DSP",
    description:
      "Manipulate and enhance audio signals with essential modules — Expander, Equalizer, Compressor, and more — ensuring optimal audio quality and precise control.",
    tag: "Signal Processing",
  },
  {
    number: "02",
    icon: AudioWaveform,
    title: "Quality Audio Conversion",
    description:
      "Achieve high-fidelity audio output with 48 kHz sampling rate and 24-bit A/D or D/A conversion for studio-grade clarity.",
    tag: "Conversion",
  },
  {
    number: "03",
    icon: Mic2,
    title: "Echo Cancellation",
    description:
      "Built-in acoustic echo cancellation delivers clear communication by eliminating feedback and reflective interference in real time.",
    tag: "Acoustic",
  },
  {
    number: "04",
    icon: Radio,
    title: "Adaptive Feedback",
    description:
      "Detect and suppress feedback dynamically. Adaptive algorithms respond instantly to environmental changes for uninterrupted audio performance.",
    tag: "Feedback Control",
  },
  {
    number: "05",
    icon: Wind,
    title: "Adaptive Noise Reduction",
    description:
      "Dynamic noise reduction technology enhances signal-to-noise ratio, isolating voice clarity from ambient interference.",
    tag: "Noise Control",
  },
  {
    number: "06",
    icon: Sliders,
    title: "Auto Mixer Function",
    description:
      "Seamlessly manage multiple microphone inputs with intelligent gain distribution and adjustable priority settings for complex environments.",
    tag: "Mixing",
  },
];

export default function AudioFeatures() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white px-4 py-8 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">

        <div className="text-center mb-10 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-xl font-semibold text-center text-gray-900 mb-4">
            Audio Processor Features
          </h2>
          <div/>
          <p className="text-[13px] text-gray-500 leading-relaxed">
            Engineered for professional environments — every feature built to
            deliver reliable, studio-grade audio performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative bg-white px-6 py-7 transition-all duration-200 cursor-default ${
                  hovered === i ? "bg-gray-50" : ""
                }`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-red-500 transition-opacity duration-200 ${
                    hovered === i ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="mb-4">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className={`transition-colors duration-200 ${
                      hovered === i ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </div>

                <h3 className="text-[15px] font-bold text-gray-900 mb-1 leading-snug">
                  {f.title}
                </h3>

                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-red-400 mb-3">
                  {f.tag}
                </span>

                <p className="text-[13px] font-medium text-gray-600 leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}