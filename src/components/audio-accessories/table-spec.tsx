"use client"
import { useState } from "react"

const products = [
  {
    id: "dante-interface",
    label: "Dante Interface",
    sections: [
      {
        title: "General Performance",
        rows: [
          { param: "Input Impedance", value: "Balanced 10K ohms, unbalanced 5K ohms" },
          { param: "Equivalent Input Noise", value: "-90 dBu @ 0 dB" },
          { param: "Maximum Input Level", value: "+16 dBu @ 0 dB gain" },
          { param: "Output Sensitivity", value: "0 dBu, -6 dBu, -12 dBu" },
          { param: "Maximum Output Level", value: "+20 dBu @ 0 dB gain" },
          { param: "Output Impedance", value: "200 ohms (balanced), 100 ohms (unbalanced)" },
          { param: "Frequency Response", value: "20 Hz – 20 kHz, ±0.5 dB" },
          { param: "Dynamic Range", value: "> 106 dB" },
          { param: "Total Harmonic Distortion (TH+N)", value: "< 0.01%" },
          { param: "PoE Level", value: "Complies with 802.3af PoE PD level 0 standard" },
          { param: "Working Temperature", value: "0 ℃ – 40 ℃" },
          { param: "Working Voltage", value: "DC 12V 1A" },
          { param: "Size (W × H × D)", value: "214 × 44 × 16 mm" },
        ],
      },
    ],
  },
  {
    id: "dante-adapter",
    label: "Dante Adapter",
    sections: [
      {
        title: "Dante",
        rows: [
          { param: "Power", value: "802.3af PoE" },
          { param: "Sample Rate", value: "48 kHz" },
          { param: "Dante Device Latency", value: "1, 2 or 5 ms (configurable using Dante Controller)" },
          { param: "Bit Depth", value: "24" },
        ],
      },
      {
        title: "Control",
        rows: [
          { param: "Control Part", value: "Bluetooth" },
        ],
      },
      {
        title: "General",
        rows: [
          { param: "Power", value: "802.3af PoE" },
          { param: "Operation Temperature", value: "-5 to +55 ℃" },
          { param: "Storage Temperature", value: "-25 to +70 ℃" },
          { param: "Power Consumption", value: "1.9 W (Max)" },
          { param: "Dimension (W × H × D)", value: "115 × 34 × 28 mm" },
          { param: "Net Weight", value: "70 g" },
        ],
      },
    ],
  },
]

export default function SpecTableAudioAccessories() {
  const [active, setActive] = useState(products[0].id)
  const product = products.find((p) => p.id === active) ?? products[0]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            {product.label} Specification
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-2 gap-1 bg-gray-100 p-1 rounded-none">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`px-4 py-2 text-xs font-medium rounded-none transition-all duration-200 whitespace-nowrap focus:outline-none
                  ${active === p.id
                    ? "bg-red-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-red-500"
                  }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr className="border-y-2 border-gray-300 bg-gray-100">
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600 w-[35%]">Parameter</th>
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600">Value</th>
            </tr>
          </thead>
          <tbody>
            {product.sections.map((sec) => (
              <>
                <tr key={sec.title + "-header"} className="border-b border-gray-200 bg-gray-50">
                  <td colSpan={2} className="px-4 py-2.5 font-semibold text-gray-600">
                    {sec.title}
                  </td>
                </tr>
                {sec.rows.map((row, i) => (
                  <tr
                    key={sec.title + row.param}
                    className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="px-4 py-2.5 align-top text-gray-600">{row.param}</td>
                    <td className="px-4 py-2.5 align-top text-gray-900 leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  )
}