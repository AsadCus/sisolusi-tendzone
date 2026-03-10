"use client"

export default function DigitalPowerAmplifierSpecificationTable() {
  const sections = [
    {
      title: "General Performance",
      rows: [
        { param: "Number of Channels", value: "2 aisle" },
        { param: "Stereo Mode @8Ω, each channel", value: "650W" },
        { param: "Stereo Mode @4Ω, each channel", value: "1050W" },
        { param: "Frequency Response", value: "20Hz – 20kHz (±3dB)" },
        { param: "Signal-to-Noise Ratio (S/N)", value: "≥80dB" },
        { param: "Total Harmonic Distortion", value: "≤0.05% (8Ω, 650W)" },
        { param: "Input Sensitivity", value: "+4dBu (1.23V)" },
        { param: "Input Impedance", value: "10kΩ (electronically balanced)" },
        { param: "Dimensions (W × H × D)", value: "483 × 45 × 355 mm" },
        { param: "Net Weight", value: "5.5kg" },
        { param: "Input (CH1–2)", value: "XLR Input Connectors" },
        { param: "Output (CH1–2)", value: "SPEAKON Output" },
      ],
    },
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4">

        <div className="mb-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Digital Power Amplifiers Specification
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
            {sections.map((sec) => (
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