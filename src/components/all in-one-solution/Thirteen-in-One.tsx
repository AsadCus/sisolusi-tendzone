"use client"

import { useState } from "react"

type SpecRow = {
  key: string
  val: string
}

type SpecSection = {
  title: string
  rows: SpecRow[]
}

const SECTIONS: SpecSection[] = [
  {
    title: "Audio Performance",
    rows: [
      { key: "Distortion – THD @ 1 kHz, 1 VRMS Output", val: "0.004 %" },
      { key: "Bandwidth @ -3 dB", val: "10 Hz ÷ 44 kHz" },
      { key: "S/N ratio @ A weighted, 4 V Output, 2 V MASTER inputs", val: "104 dBA" },
      { key: "S/N ratio @ A weighted, 4 V Output, 2 V AUX input", val: "105 dBA" },
      { key: "S/N ratio @ A weighted, 4 V Output, OPTICAL IN1/IN2 input", val: "110 dBA" },
      { key: "Channel Separation @ 1 kHz", val: "80 dBA" },
    ],
  },
  {
    title: "Inputs",
    rows: [
      { key: "Low level (Pre)", val: "Ch1 ÷ Ch6; AUX L/R" },
      { key: "High Level (Speaker In)", val: "Ch1 ÷ Ch12" },
      { key: "Digital", val: "2 x Optical S/PDIF; Max 192 kHz / 24 bit" },
      { key: "Input sensitivity PRE IN / Master", val: "1.3 ÷ 9 VRMS" },
      { key: "Input sensitivity Speaker IN / Master", val: "5 ÷ 32 VRMS" },
      { key: "Input sensitivity AUX", val: "0.7 ÷ 5 VRMS" },
      { key: "Input impedance Speaker In / AUX / Pre In", val: "15 kΩ (Pre IN / AUX) · 5 Ω (Speaker IN)" },
    ],
  },
  {
    title: "Outputs",
    rows: [
      { key: "Low level (Pre)", val: "Ch1 ÷ Ch13 (IIR mode); Ch1 ÷ Ch9 (FIR mode)" },
      { key: "Max Output Level 0.1% THD", val: "4 V" },
      { key: "Digital AD Link 1", val: "Ch1 ÷ Ch8 (IIR / FIR mode)" },
      { key: "Digital AD Link 2", val: "Ch9 ÷ Ch13 (IIR mode); Ch9 only (FIR mode)" },
    ],
  },
  {
    title: "Connection",
    rows: [
      { key: "From / To Personal Computer", val: "1 x micro USB" },
      { key: "To Audison Amplifiers", val: "2 x (AC Link / AD LINK) control bus" },
      { key: "To Audison DRC MP", val: "1 x AC Link" },
    ],
  },
  {
    title: "Crossover",
    rows: [
      { key: "Filter type", val: "Full / High-Pass / Low-Pass / Band-Pass" },
      {
        key: "Filter mode and slope",
        val:
          "Linkwitz: 12 / 24 / 36 / 48 dB\n" +
          "Butterworth: 6 / 12 / 18 / 24 / 30 / 36 / 42 / 48 dB\n" +
          "Bessel: 6 / 12 / 18 / 24 / 30 / 36 dB\n" +
          "FIR: 6 / 12 / 18 / 24 / 30 / 36 / 42 / 48 dB",
      },
      {
        key: "Crossover Frequency",
        val: "Lo-Pass: 0 ÷ 44k Hz (1 Hz step)\nHi-Pass: 0 ÷ 20k Hz (1 Hz step)",
      },
      { key: "Phase control", val: "0° / 180°" },
    ],
  },
  {
    title: "Equalizer (10 Hz ÷ 20 kHz)",
    rows: [
      { key: "High Level Inputs (Speaker In)", val: "Automatic De-Equalization, Delay Compensation, All Pass Compensation, Polarity Check" },
      { key: "AUX Input", val: "Parametric Equalizer: +12 dB ÷ -15 dB · 10 poles FIR type" },
      { key: "OPTICAL IN1 / IN2 Inputs", val: "Parametric Equalizer: +12 dB ÷ -15 dB · 10 poles FIR type" },
      {
        key: "Outputs",
        val:
          "IIR mode: 13 Parametric EQ (+12 / -15 dB) · 13 poles\n" +
          "FIR mode: 13 Parametric EQ (+12 / -15 dB) · 9 poles FIR + 3 poles IIR",
      },
      { key: "Main EQ", val: "Parametric EQ +12 / -15 dB · 5 poles FIR + 1 pole IIR" },
      { key: "Dynamic Equalization", val: "Self-adjusting system between low and high listening levels" },
      { key: "Bass Boost", val: "Adjustable parametric pole (±12 dB; 10 ÷ 500 Hz)" },
    ],
  },
  {
    title: "Time Alignment",
    rows: [
      { key: "Distance", val: "1.4 ÷ 756 cm / 0.6 ÷ 297.7 inches" },
      { key: "Delay", val: "0 ÷ 22 ms" },
      { key: "Step", val: "0.04 ms · 1.4 cm · 0.6 inch" },
    ],
  },
  {
    title: "General Requirements",
    rows: [
      { key: "PC connections", val: "USB 1.1 / 2.0 / 3.0 Compatible" },
      { key: "Software / PC requirements", val: "Microsoft Windows (32/64 bit): XP, Vista, Windows 7, Windows 8, Windows 10" },
      { key: "Video Resolution", val: "Minimum 800 × 600" },
      { key: "Operating temperature", val: "0 °C to 55 °C (32 °F to 131 °F)" },
    ],
  },
  {
    title: "Size",
    rows: [
      { key: "Dimensions (W × H × D)", val: '148 × 43.6 × 233 mm / 5.82" × 1.7" × 9.17"' },
      { key: "Weight", val: "1.775 kg / 3.9 lb" },
    ],
  },
]

// ─── Row ──────────────────────────────────────────────────────────────────────
// Desktop : 2 kolom (40% label | 60% value)
// Mobile  : stacked — label di atas, value di bawah

function Row({ label, value, even }: { label: string; value: string; even: boolean }) {
  return (
    <div className={`border-b ${even ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}>
      {/* Desktop */}
      <div className="hidden sm:grid sm:grid-cols-[40%_60%]">
        <div className="p-2.5 text-sm text-gray-500 border-r whitespace-pre-line">
          {label}
        </div>
        <div className="p-2.5 text-sm text-gray-800 whitespace-pre-line">
          {value}
        </div>
      </div>

      {/* Mobile — stacked */}
      <div className="sm:hidden px-3 py-2.5 space-y-0.5">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide leading-snug">
          {label}
        </p>
        <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed">
          {value}
        </p>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

function Section({ data, index }: { data: SpecSection; index: number }) {
  const [open, setOpen] = useState(true)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full gap-3 px-4 py-2.5 border-b hover:bg-gray-50"
      >
        <span className="flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-sm font-semibold tracking-wide uppercase text-gray-800 text-left">
          {data.title}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-90" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {open && data.rows.map((row, i) => (
        <Row key={i} label={row.key} value={row.val} even={i % 2 === 0} />
      ))}
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function SpecTable() {
  return (
    <section className="bg-white pt-8 px-6 font-sans">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="text-center mb-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Thirteen-in-One Integrated Processor
          </h2>
        </div>

        <div className="overflow-hidden border shadow-sm">
          {/* Table header — desktop only */}
          <div className="hidden sm:grid sm:grid-cols-[40%_60%] text-xs uppercase tracking-widest text-gray-500 bg-gray-50 border-b">
            <div className="p-3 border-r">Parameter</div>
            <div className="p-3">Value</div>
          </div>

          {SECTIONS.map((section, i) => (
            <Section key={section.title} data={section} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}