"use client"

export default function NetworkMicrophoneSpecificationTable() {
  const rows = [
    { param: "Microphone", value: "Gold-plated film capacitor" },
    { param: "Directivity", value: "Supercardioid" },
    { param: "Frequency Response (A/D/A)", value: "38Hz – 20kHz" },
    { param: "Sampling Rate", value: "48kHz / 24bit" },
    { param: "Sensitivity", value: "-44 ±2 dB" },
    { param: "Maximum SPL", value: "130 dB" },
    { param: "Equivalent Noise", value: "23 dBA" },
    { param: "Connector", value: "RJ45, CAT5e or higher, 100Mbps" },
    { param: "Power Supply", value: "PoE power supply, compliant with IEEE 802.3af" },
    { param: "Power Consumption", value: "3W" },
    { param: "Installation Hole Size", value: "40mm diameter" },
    { param: "Microphone Rod Length", value: "32cm or 39cm (optional)" },
    { param: "Base Size (W × D × H)", value: "60mm × 85mm × 24.1mm" },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Network Microphone Specification
          </h2>
        </div>

        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr className="border-y-2 border-gray-300 bg-gray-100">
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600 w-[35%]">Parameter</th>
              <th className="px-4 py-2.5 text-left font-semibold text-gray-600">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td colSpan={2} className="px-4 py-2.5 font-semibold text-gray-600">
                General Specifications
              </td>
            </tr>
            {rows.map((row, i) => (
              <tr
                key={row.param}
                className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="px-4 py-2.5 align-top text-gray-600">{row.param}</td>
                <td className="px-4 py-2.5 align-top text-gray-900 leading-relaxed">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  )
}